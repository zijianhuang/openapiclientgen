import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence. */
	export interface Change {

		/** Which ResourceRecordSets to add? */
		additions?: Array<ResourceRecordSet>;

		/** Which ResourceRecordSets to remove? Must match existing data exactly. */
		deletions?: Array<ResourceRecordSet>;

		/** Unique identifier for the resource; defined by the server (output only). */
		id?: string | null;

		/** If the DNS queries for the zone will be served. */
		isServing?: boolean | null;
		kind?: string | null;

		/** The time that this operation was started by the server (output only). This is in RFC3339 text format. */
		startTime?: string | null;

		/** Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet. */
		status?: ChangeStatus | null;
	}

	/** A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence. */
	export interface ChangeFormProperties {

		/** Unique identifier for the resource; defined by the server (output only). */
		id: FormControl<string | null | undefined>,

		/** If the DNS queries for the zone will be served. */
		isServing: FormControl<boolean | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The time that this operation was started by the server (output only). This is in RFC3339 text format. */
		startTime: FormControl<string | null | undefined>,

		/** Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet. */
		status: FormControl<ChangeStatus | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isServing: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChangeStatus | null | undefined>(undefined),
		});

	}


	/** A unit of data that is returned by the DNS servers. */
	export interface ResourceRecordSet {
		kind?: string | null;

		/** For example, www.example.com. */
		name?: string | null;

		/** A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection. */
		routingPolicy?: RRSetRoutingPolicy;

		/** As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples. */
		rrdatas?: Array<string>;

		/** As defined in RFC 4034 (section 3.2). */
		signatureRrdatas?: Array<string>;

		/**
		 * Number of seconds that this ResourceRecordSet can be cached by resolvers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl?: number | null;

		/** The identifier of a supported record type. See the list of Supported DNS record types. */
		type?: string | null;
	}

	/** A unit of data that is returned by the DNS servers. */
	export interface ResourceRecordSetFormProperties {
		kind: FormControl<string | null | undefined>,

		/** For example, www.example.com. */
		name: FormControl<string | null | undefined>,

		/**
		 * Number of seconds that this ResourceRecordSet can be cached by resolvers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl: FormControl<number | null | undefined>,

		/** The identifier of a supported record type. See the list of Supported DNS record types. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecordSetFormGroup() {
		return new FormGroup<ResourceRecordSetFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection. */
	export interface RRSetRoutingPolicy {

		/** Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user. */
		geo?: RRSetRoutingPolicyGeoPolicy;

		/** The selfLink attribute of the HealthCheck resource to use for this RRSetRoutingPolicy. https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks */
		healthCheck?: string | null;
		kind?: string | null;

		/** Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy. */
		primaryBackup?: RRSetRoutingPolicyPrimaryBackupPolicy;

		/** Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion. */
		wrr?: RRSetRoutingPolicyWrrPolicy;
	}

	/** A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection. */
	export interface RRSetRoutingPolicyFormProperties {

		/** The selfLink attribute of the HealthCheck resource to use for this RRSetRoutingPolicy. https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks */
		healthCheck: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRRSetRoutingPolicyFormGroup() {
		return new FormGroup<RRSetRoutingPolicyFormProperties>({
			healthCheck: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user. */
	export interface RRSetRoutingPolicyGeoPolicy {

		/** Without fencing, if health check fails for all configured items in the current geo bucket, we failover to the next nearest geo bucket. With fencing, if health checking is enabled, as long as some targets in the current geo bucket are healthy, we return only the healthy targets. However, if all targets are unhealthy, we don't failover to the next nearest bucket; instead, we return all the items in the current bucket even when all targets are unhealthy. */
		enableFencing?: boolean | null;

		/** The primary geo routing configuration. If there are multiple items with the same location, an error is returned instead. */
		items?: Array<RRSetRoutingPolicyGeoPolicyGeoPolicyItem>;
		kind?: string | null;
	}

	/** Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user. */
	export interface RRSetRoutingPolicyGeoPolicyFormProperties {

		/** Without fencing, if health check fails for all configured items in the current geo bucket, we failover to the next nearest geo bucket. With fencing, if health checking is enabled, as long as some targets in the current geo bucket are healthy, we return only the healthy targets. However, if all targets are unhealthy, we don't failover to the next nearest bucket; instead, we return all the items in the current bucket even when all targets are unhealthy. */
		enableFencing: FormControl<boolean | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRRSetRoutingPolicyGeoPolicyFormGroup() {
		return new FormGroup<RRSetRoutingPolicyGeoPolicyFormProperties>({
			enableFencing: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceRecordSet data for one geo location. */
	export interface RRSetRoutingPolicyGeoPolicyGeoPolicyItem {

		/** HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set. */
		healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets;
		kind?: string | null;

		/** The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g. "us-east1", "southamerica-east1", "asia-east1", etc. */
		location?: string | null;
		rrdatas?: Array<string>;

		/** DNSSEC generated signatures for all the rrdata within this item. If health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item. */
		signatureRrdatas?: Array<string>;
	}

	/** ResourceRecordSet data for one geo location. */
	export interface RRSetRoutingPolicyGeoPolicyGeoPolicyItemFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g. "us-east1", "southamerica-east1", "asia-east1", etc. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateRRSetRoutingPolicyGeoPolicyGeoPolicyItemFormGroup() {
		return new FormGroup<RRSetRoutingPolicyGeoPolicyGeoPolicyItemFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set. */
	export interface RRSetRoutingPolicyHealthCheckTargets {

		/** The Internet IP addresses to be health checked. The format matches the format of ResourceRecordSet.rrdata as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) */
		externalEndpoints?: Array<string>;

		/** Configuration for internal load balancers to be health checked. */
		internalLoadBalancers?: Array<RRSetRoutingPolicyLoadBalancerTarget>;
	}

	/** HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set. */
	export interface RRSetRoutingPolicyHealthCheckTargetsFormProperties {
	}
	export function CreateRRSetRoutingPolicyHealthCheckTargetsFormGroup() {
		return new FormGroup<RRSetRoutingPolicyHealthCheckTargetsFormProperties>({
		});

	}


	/** The configuration for an individual load balancer to health check. */
	export interface RRSetRoutingPolicyLoadBalancerTarget {

		/** The frontend IP address of the load balancer to health check. */
		ipAddress?: string | null;

		/** The protocol of the load balancer to health check. */
		ipProtocol?: RRSetRoutingPolicyLoadBalancerTargetIpProtocol | null;
		kind?: string | null;

		/** The type of load balancer specified by this target. This value must match the configuration of the load balancer located at the LoadBalancerTarget's IP address, port, and region. Use the following: - *regionalL4ilb*: for a regional internal passthrough Network Load Balancer. - *regionalL7ilb*: for a regional internal Application Load Balancer. - *globalL7ilb*: for a global internal Application Load Balancer. */
		loadBalancerType?: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerType | null;

		/** The fully qualified URL of the network that the load balancer is attached to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} . */
		networkUrl?: string | null;

		/** The configured port of the load balancer. */
		port?: string | null;

		/** The project ID in which the load balancer is located. */
		project?: string | null;

		/** The region in which the load balancer is located. */
		region?: string | null;
	}

	/** The configuration for an individual load balancer to health check. */
	export interface RRSetRoutingPolicyLoadBalancerTargetFormProperties {

		/** The frontend IP address of the load balancer to health check. */
		ipAddress: FormControl<string | null | undefined>,

		/** The protocol of the load balancer to health check. */
		ipProtocol: FormControl<RRSetRoutingPolicyLoadBalancerTargetIpProtocol | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The type of load balancer specified by this target. This value must match the configuration of the load balancer located at the LoadBalancerTarget's IP address, port, and region. Use the following: - *regionalL4ilb*: for a regional internal passthrough Network Load Balancer. - *regionalL7ilb*: for a regional internal Application Load Balancer. - *globalL7ilb*: for a global internal Application Load Balancer. */
		loadBalancerType: FormControl<RRSetRoutingPolicyLoadBalancerTargetLoadBalancerType | null | undefined>,

		/** The fully qualified URL of the network that the load balancer is attached to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} . */
		networkUrl: FormControl<string | null | undefined>,

		/** The configured port of the load balancer. */
		port: FormControl<string | null | undefined>,

		/** The project ID in which the load balancer is located. */
		project: FormControl<string | null | undefined>,

		/** The region in which the load balancer is located. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateRRSetRoutingPolicyLoadBalancerTargetFormGroup() {
		return new FormGroup<RRSetRoutingPolicyLoadBalancerTargetFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			ipProtocol: new FormControl<RRSetRoutingPolicyLoadBalancerTargetIpProtocol | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			loadBalancerType: new FormControl<RRSetRoutingPolicyLoadBalancerTargetLoadBalancerType | null | undefined>(undefined),
			networkUrl: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RRSetRoutingPolicyLoadBalancerTargetIpProtocol { undefined = 'undefined', tcp = 'tcp', udp = 'udp' }

	export enum RRSetRoutingPolicyLoadBalancerTargetLoadBalancerType { none = 'none', globalL7ilb = 'globalL7ilb', regionalL4ilb = 'regionalL4ilb', regionalL7ilb = 'regionalL7ilb' }


	/** Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy. */
	export interface RRSetRoutingPolicyPrimaryBackupPolicy {

		/** Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user. */
		backupGeoTargets?: RRSetRoutingPolicyGeoPolicy;
		kind?: string | null;

		/** HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set. */
		primaryTargets?: RRSetRoutingPolicyHealthCheckTargets;

		/**
		 * When serving state is PRIMARY, this field provides the option of sending a small percentage of the traffic to the backup targets.
		 * Type: double
		 */
		trickleTraffic?: number | null;
	}

	/** Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy. */
	export interface RRSetRoutingPolicyPrimaryBackupPolicyFormProperties {
		kind: FormControl<string | null | undefined>,

		/**
		 * When serving state is PRIMARY, this field provides the option of sending a small percentage of the traffic to the backup targets.
		 * Type: double
		 */
		trickleTraffic: FormControl<number | null | undefined>,
	}
	export function CreateRRSetRoutingPolicyPrimaryBackupPolicyFormGroup() {
		return new FormGroup<RRSetRoutingPolicyPrimaryBackupPolicyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			trickleTraffic: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion. */
	export interface RRSetRoutingPolicyWrrPolicy {
		items?: Array<RRSetRoutingPolicyWrrPolicyWrrPolicyItem>;
		kind?: string | null;
	}

	/** Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion. */
	export interface RRSetRoutingPolicyWrrPolicyFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRRSetRoutingPolicyWrrPolicyFormGroup() {
		return new FormGroup<RRSetRoutingPolicyWrrPolicyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A routing block which contains the routing information for one WRR item. */
	export interface RRSetRoutingPolicyWrrPolicyWrrPolicyItem {

		/** HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set. */
		healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets;
		kind?: string | null;
		rrdatas?: Array<string>;

		/** DNSSEC generated signatures for all the rrdata within this item. Note that if health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item. */
		signatureRrdatas?: Array<string>;

		/**
		 * The weight corresponding to this WrrPolicyItem object. When multiple WrrPolicyItem objects are configured, the probability of returning an WrrPolicyItem object's data is proportional to its weight relative to the sum of weights configured for all items. This weight must be non-negative.
		 * Type: double
		 */
		weight?: number | null;
	}

	/** A routing block which contains the routing information for one WRR item. */
	export interface RRSetRoutingPolicyWrrPolicyWrrPolicyItemFormProperties {
		kind: FormControl<string | null | undefined>,

		/**
		 * The weight corresponding to this WrrPolicyItem object. When multiple WrrPolicyItem objects are configured, the probability of returning an WrrPolicyItem object's data is proportional to its weight relative to the sum of weights configured for all items. This weight must be non-negative.
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateRRSetRoutingPolicyWrrPolicyWrrPolicyItemFormGroup() {
		return new FormGroup<RRSetRoutingPolicyWrrPolicyWrrPolicyItemFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ChangeStatus { pending = 'pending', done = 'done' }


	/** The response to a request to enumerate Changes to a ResourceRecordSets collection. */
	export interface ChangesListResponse {

		/** The requested changes. */
		changes?: Array<Change>;

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a "snapshot" of collections larger than the maximum page size. */
		nextPageToken?: string | null;
	}

	/** The response to a request to enumerate Changes to a ResourceRecordSets collection. */
	export interface ChangesListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a "snapshot" of collections larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateChangesListResponseFormGroup() {
		return new FormGroup<ChangesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Elements common to every response. */
	export interface ResponseHeader {

		/** For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only). */
		operationId?: string | null;
	}

	/** Elements common to every response. */
	export interface ResponseHeaderFormProperties {

		/** For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only). */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateResponseHeaderFormGroup() {
		return new FormGroup<ResponseHeaderFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DNSSEC key pair. */
	export interface DnsKey {

		/** String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time. */
		algorithm?: DnsKeyAlgorithm | null;

		/** The time that this resource was created in the control plane. This is in RFC3339 text format. Output only. */
		creationTime?: string | null;

		/** A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function. */
		description?: string | null;

		/** Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only. */
		digests?: Array<DnsKeyDigest>;

		/** Unique identifier for the resource; defined by the server (output only). */
		id?: string | null;

		/** Active keys are used to sign subsequent changes to the ManagedZone. Inactive keys are still present as DNSKEY Resource Records for the use of resolvers validating existing signatures. */
		isActive?: boolean | null;

		/**
		 * Length of the key in bits. Specified at creation time, and then immutable.
		 * Type: uint, 0 to 4,294,967,295
		 */
		keyLength?: number | null;

		/**
		 * The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		keyTag?: number | null;
		kind?: string | null;

		/** Base64 encoded public half of this key. Output only. */
		publicKey?: string | null;

		/** One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, are used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag is cleared, and this key is used to sign only resource record sets of other types. Immutable after creation time. */
		type?: DnsKeyType | null;
	}

	/** A DNSSEC key pair. */
	export interface DnsKeyFormProperties {

		/** String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time. */
		algorithm: FormControl<DnsKeyAlgorithm | null | undefined>,

		/** The time that this resource was created in the control plane. This is in RFC3339 text format. Output only. */
		creationTime: FormControl<string | null | undefined>,

		/** A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function. */
		description: FormControl<string | null | undefined>,

		/** Unique identifier for the resource; defined by the server (output only). */
		id: FormControl<string | null | undefined>,

		/** Active keys are used to sign subsequent changes to the ManagedZone. Inactive keys are still present as DNSKEY Resource Records for the use of resolvers validating existing signatures. */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Length of the key in bits. Specified at creation time, and then immutable.
		 * Type: uint, 0 to 4,294,967,295
		 */
		keyLength: FormControl<number | null | undefined>,

		/**
		 * The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		keyTag: FormControl<number | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** Base64 encoded public half of this key. Output only. */
		publicKey: FormControl<string | null | undefined>,

		/** One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, are used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag is cleared, and this key is used to sign only resource record sets of other types. Immutable after creation time. */
		type: FormControl<DnsKeyType | null | undefined>,
	}
	export function CreateDnsKeyFormGroup() {
		return new FormGroup<DnsKeyFormProperties>({
			algorithm: new FormControl<DnsKeyAlgorithm | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			keyLength: new FormControl<number | null | undefined>(undefined),
			keyTag: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DnsKeyType | null | undefined>(undefined),
		});

	}

	export enum DnsKeyAlgorithm { rsasha1 = 'rsasha1', rsasha256 = 'rsasha256', rsasha512 = 'rsasha512', ecdsap256sha256 = 'ecdsap256sha256', ecdsap384sha384 = 'ecdsap384sha384' }

	export interface DnsKeyDigest {

		/** The base-16 encoded bytes of this digest. Suitable for use in a DS resource record. */
		digest?: string | null;

		/** Specifies the algorithm used to calculate this digest. */
		type?: DnsKeyDigestType | null;
	}
	export interface DnsKeyDigestFormProperties {

		/** The base-16 encoded bytes of this digest. Suitable for use in a DS resource record. */
		digest: FormControl<string | null | undefined>,

		/** Specifies the algorithm used to calculate this digest. */
		type: FormControl<DnsKeyDigestType | null | undefined>,
	}
	export function CreateDnsKeyDigestFormGroup() {
		return new FormGroup<DnsKeyDigestFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DnsKeyDigestType | null | undefined>(undefined),
		});

	}

	export enum DnsKeyDigestType { sha1 = 'sha1', sha256 = 'sha256', sha384 = 'sha384' }

	export enum DnsKeyType { keySigning = 'keySigning', zoneSigning = 'zoneSigning' }


	/** Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey. */
	export interface DnsKeySpec {

		/** String mnemonic specifying the DNSSEC algorithm of this key. */
		algorithm?: DnsKeyAlgorithm | null;

		/**
		 * Length of the keys in bits.
		 * Type: uint, 0 to 4,294,967,295
		 */
		keyLength?: number | null;

		/** Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets. */
		keyType?: DnsKeyType | null;
		kind?: string | null;
	}

	/** Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey. */
	export interface DnsKeySpecFormProperties {

		/** String mnemonic specifying the DNSSEC algorithm of this key. */
		algorithm: FormControl<DnsKeyAlgorithm | null | undefined>,

		/**
		 * Length of the keys in bits.
		 * Type: uint, 0 to 4,294,967,295
		 */
		keyLength: FormControl<number | null | undefined>,

		/** Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets. */
		keyType: FormControl<DnsKeyType | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDnsKeySpecFormGroup() {
		return new FormGroup<DnsKeySpecFormProperties>({
			algorithm: new FormControl<DnsKeyAlgorithm | null | undefined>(undefined),
			keyLength: new FormControl<number | null | undefined>(undefined),
			keyType: new FormControl<DnsKeyType | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a request to enumerate DnsKeys in a ManagedZone. */
	export interface DnsKeysListResponse {

		/** The requested resources. */
		dnsKeys?: Array<DnsKey>;

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size. */
		nextPageToken?: string | null;
	}

	/** The response to a request to enumerate DnsKeys in a ManagedZone. */
	export interface DnsKeysListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDnsKeysListResponseFormGroup() {
		return new FormGroup<DnsKeysListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<GoogleIamV1AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1AuditConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: GoogleIamV1AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>,
	}
	export function CreateGoogleIamV1AuditLogConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditLogConfigFormProperties>({
			logType: new FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingFormGroup() {
		return new FormGroup<GoogleIamV1BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `GetIamPolicy` method. */
	export interface GoogleIamV1GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GoogleIamV1GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GoogleIamV1GetIamPolicyRequestFormProperties {
	}
	export function CreateGoogleIamV1GetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GoogleIamV1GetPolicyOptions {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GoogleIamV1GetPolicyOptionsFormProperties {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1GetPolicyOptionsFormGroup() {
		return new FormGroup<GoogleIamV1GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<GoogleIamV1AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<GoogleIamV1Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1PolicyFormGroup() {
		return new FormGroup<GoogleIamV1PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: GoogleIamV1Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1SetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequestFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsRequestFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponseFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsResponseFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsResponseFormProperties>({
		});

	}


	/** A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service. */
	export interface ManagedZone {

		/** Cloud Logging configurations for publicly visible zones. */
		cloudLoggingConfig?: ManagedZoneCloudLoggingConfig;

		/** The time that this resource was created on the server. This is in RFC3339 text format. Output only. */
		creationTime?: string | null;

		/** A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function. */
		description?: string | null;

		/** The DNS name of this managed zone, for instance "example.com.". */
		dnsName?: string | null;
		dnssecConfig?: ManagedZoneDnsSecConfig;
		forwardingConfig?: ManagedZoneForwardingConfig;

		/** Unique identifier for the resource; defined by the server (output only) */
		id?: string | null;
		kind?: string | null;

		/** User labels. */
		labels?: {[id: string]: string };

		/** User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. */
		name?: string | null;

		/** Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team. */
		nameServerSet?: string | null;

		/** Delegate your managed_zone to these virtual name servers; defined by the server (output only) */
		nameServers?: Array<string>;
		peeringConfig?: ManagedZonePeeringConfig;
		privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;
		reverseLookupConfig?: ManagedZoneReverseLookupConfig;

		/** Contains information about Service Directory-backed zones. */
		serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;

		/** The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. */
		visibility?: ManagedZoneVisibility | null;
	}

	/** A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service. */
	export interface ManagedZoneFormProperties {

		/** The time that this resource was created on the server. This is in RFC3339 text format. Output only. */
		creationTime: FormControl<string | null | undefined>,

		/** A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function. */
		description: FormControl<string | null | undefined>,

		/** The DNS name of this managed zone, for instance "example.com.". */
		dnsName: FormControl<string | null | undefined>,

		/** Unique identifier for the resource; defined by the server (output only) */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** User labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. */
		name: FormControl<string | null | undefined>,

		/** Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team. */
		nameServerSet: FormControl<string | null | undefined>,

		/** The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. */
		visibility: FormControl<ManagedZoneVisibility | null | undefined>,
	}
	export function CreateManagedZoneFormGroup() {
		return new FormGroup<ManagedZoneFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dnsName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nameServerSet: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<ManagedZoneVisibility | null | undefined>(undefined),
		});

	}


	/** Cloud Logging configurations for publicly visible zones. */
	export interface ManagedZoneCloudLoggingConfig {

		/** If set, enable query logging for this ManagedZone. False by default, making logging opt-in. */
		enableLogging?: boolean | null;
		kind?: string | null;
	}

	/** Cloud Logging configurations for publicly visible zones. */
	export interface ManagedZoneCloudLoggingConfigFormProperties {

		/** If set, enable query logging for this ManagedZone. False by default, making logging opt-in. */
		enableLogging: FormControl<boolean | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneCloudLoggingConfigFormGroup() {
		return new FormGroup<ManagedZoneCloudLoggingConfigFormProperties>({
			enableLogging: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZoneDnsSecConfig {

		/** Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF. */
		defaultKeySpecs?: Array<DnsKeySpec>;
		kind?: string | null;

		/** Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF. */
		nonExistence?: ManagedZoneDnsSecConfigNonExistence | null;

		/** Specifies whether DNSSEC is enabled, and what mode it is in. */
		state?: ManagedZoneDnsSecConfigState | null;
	}
	export interface ManagedZoneDnsSecConfigFormProperties {
		kind: FormControl<string | null | undefined>,

		/** Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF. */
		nonExistence: FormControl<ManagedZoneDnsSecConfigNonExistence | null | undefined>,

		/** Specifies whether DNSSEC is enabled, and what mode it is in. */
		state: FormControl<ManagedZoneDnsSecConfigState | null | undefined>,
	}
	export function CreateManagedZoneDnsSecConfigFormGroup() {
		return new FormGroup<ManagedZoneDnsSecConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nonExistence: new FormControl<ManagedZoneDnsSecConfigNonExistence | null | undefined>(undefined),
			state: new FormControl<ManagedZoneDnsSecConfigState | null | undefined>(undefined),
		});

	}

	export enum ManagedZoneDnsSecConfigNonExistence { nsec = 'nsec', nsec3 = 'nsec3' }

	export enum ManagedZoneDnsSecConfigState { off = 'off', on = 'on', transfer = 'transfer' }

	export interface ManagedZoneForwardingConfig {
		kind?: string | null;

		/** List of target name servers to forward to. Cloud DNS selects the best available name server if more than one target is given. */
		targetNameServers?: Array<ManagedZoneForwardingConfigNameServerTarget>;
	}
	export interface ManagedZoneForwardingConfigFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneForwardingConfigFormGroup() {
		return new FormGroup<ManagedZoneForwardingConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZoneForwardingConfigNameServerTarget {

		/** Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target. */
		forwardingPath?: ManagedZoneForwardingConfigNameServerTargetForwardingPath | null;

		/** IPv4 address of a target name server. */
		ipv4Address?: string | null;

		/** IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022. */
		ipv6Address?: string | null;
		kind?: string | null;
	}
	export interface ManagedZoneForwardingConfigNameServerTargetFormProperties {

		/** Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target. */
		forwardingPath: FormControl<ManagedZoneForwardingConfigNameServerTargetForwardingPath | null | undefined>,

		/** IPv4 address of a target name server. */
		ipv4Address: FormControl<string | null | undefined>,

		/** IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022. */
		ipv6Address: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneForwardingConfigNameServerTargetFormGroup() {
		return new FormGroup<ManagedZoneForwardingConfigNameServerTargetFormProperties>({
			forwardingPath: new FormControl<ManagedZoneForwardingConfigNameServerTargetForwardingPath | null | undefined>(undefined),
			ipv4Address: new FormControl<string | null | undefined>(undefined),
			ipv6Address: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedZoneForwardingConfigNameServerTargetForwardingPath { default = 'default', private = 'private' }

	export interface ManagedZonePeeringConfig {
		kind?: string | null;
		targetNetwork?: ManagedZonePeeringConfigTargetNetwork;
	}
	export interface ManagedZonePeeringConfigFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonePeeringConfigFormGroup() {
		return new FormGroup<ManagedZonePeeringConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZonePeeringConfigTargetNetwork {

		/** The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only. */
		deactivateTime?: string | null;
		kind?: string | null;

		/** The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl?: string | null;
	}
	export interface ManagedZonePeeringConfigTargetNetworkFormProperties {

		/** The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only. */
		deactivateTime: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonePeeringConfigTargetNetworkFormGroup() {
		return new FormGroup<ManagedZonePeeringConfigTargetNetworkFormProperties>({
			deactivateTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			networkUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZonePrivateVisibilityConfig {

		/** The list of Google Kubernetes Engine clusters that can see this zone. */
		gkeClusters?: Array<ManagedZonePrivateVisibilityConfigGKECluster>;
		kind?: string | null;

		/** The list of VPC networks that can see this zone. */
		networks?: Array<ManagedZonePrivateVisibilityConfigNetwork>;
	}
	export interface ManagedZonePrivateVisibilityConfigFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonePrivateVisibilityConfigFormGroup() {
		return new FormGroup<ManagedZonePrivateVisibilityConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZonePrivateVisibilityConfigGKECluster {

		/** The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like: projects/locations/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get */
		gkeClusterName?: string | null;
		kind?: string | null;
	}
	export interface ManagedZonePrivateVisibilityConfigGKEClusterFormProperties {

		/** The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like: projects/locations/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get */
		gkeClusterName: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonePrivateVisibilityConfigGKEClusterFormGroup() {
		return new FormGroup<ManagedZonePrivateVisibilityConfigGKEClusterFormProperties>({
			gkeClusterName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZonePrivateVisibilityConfigNetwork {
		kind?: string | null;

		/** The fully qualified URL of the VPC network to bind to. Format this URL like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl?: string | null;
	}
	export interface ManagedZonePrivateVisibilityConfigNetworkFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The fully qualified URL of the VPC network to bind to. Format this URL like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonePrivateVisibilityConfigNetworkFormGroup() {
		return new FormGroup<ManagedZonePrivateVisibilityConfigNetworkFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			networkUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZoneReverseLookupConfig {
		kind?: string | null;
	}
	export interface ManagedZoneReverseLookupConfigFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneReverseLookupConfigFormGroup() {
		return new FormGroup<ManagedZoneReverseLookupConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about Service Directory-backed zones. */
	export interface ManagedZoneServiceDirectoryConfig {
		kind?: string | null;
		namespace?: ManagedZoneServiceDirectoryConfigNamespace;
	}

	/** Contains information about Service Directory-backed zones. */
	export interface ManagedZoneServiceDirectoryConfigFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneServiceDirectoryConfigFormGroup() {
		return new FormGroup<ManagedZoneServiceDirectoryConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZoneServiceDirectoryConfigNamespace {

		/** The time that the namespace backing this zone was deleted; an empty string if it still exists. This is in RFC3339 text format. Output only. */
		deletionTime?: string | null;
		kind?: string | null;

		/** The fully qualified URL of the namespace associated with the zone. Format must be https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace} */
		namespaceUrl?: string | null;
	}
	export interface ManagedZoneServiceDirectoryConfigNamespaceFormProperties {

		/** The time that the namespace backing this zone was deleted; an empty string if it still exists. This is in RFC3339 text format. Output only. */
		deletionTime: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The fully qualified URL of the namespace associated with the zone. Format must be https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace} */
		namespaceUrl: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneServiceDirectoryConfigNamespaceFormGroup() {
		return new FormGroup<ManagedZoneServiceDirectoryConfigNamespaceFormProperties>({
			deletionTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			namespaceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedZoneVisibility { public = 'public', private = 'private' }

	export interface ManagedZoneOperationsListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken?: string | null;

		/** The operation resources. */
		operations?: Array<Operation>;
	}
	export interface ManagedZoneOperationsListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneOperationsListResponseFormGroup() {
		return new FormGroup<ManagedZoneOperationsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id. */
	export interface Operation {
		dnsKeyContext?: OperationDnsKeyContext;

		/** Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only) */
		id?: string | null;
		kind?: string | null;

		/** The time that this operation was started by the server. This is in RFC3339 text format (output only). */
		startTime?: string | null;

		/** Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only). A status of "DONE" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet. */
		status?: ChangeStatus | null;

		/** Type of the operation. Operations include insert, update, and delete (output only). */
		type?: string | null;

		/** User who requested the operation, for example: user@example.com. cloud-dns-system for operations automatically done by the system. (output only) */
		user?: string | null;
		zoneContext?: OperationManagedZoneContext;
	}

	/** An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id. */
	export interface OperationFormProperties {

		/** Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only) */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The time that this operation was started by the server. This is in RFC3339 text format (output only). */
		startTime: FormControl<string | null | undefined>,

		/** Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only). A status of "DONE" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet. */
		status: FormControl<ChangeStatus | null | undefined>,

		/** Type of the operation. Operations include insert, update, and delete (output only). */
		type: FormControl<string | null | undefined>,

		/** User who requested the operation, for example: user@example.com. cloud-dns-system for operations automatically done by the system. (output only) */
		user: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChangeStatus | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationDnsKeyContext {

		/** A DNSSEC key pair. */
		newValue?: DnsKey;

		/** A DNSSEC key pair. */
		oldValue?: DnsKey;
	}
	export interface OperationDnsKeyContextFormProperties {
	}
	export function CreateOperationDnsKeyContextFormGroup() {
		return new FormGroup<OperationDnsKeyContextFormProperties>({
		});

	}

	export interface OperationManagedZoneContext {

		/** A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service. */
		newValue?: ManagedZone;

		/** A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service. */
		oldValue?: ManagedZone;
	}
	export interface OperationManagedZoneContextFormProperties {
	}
	export function CreateOperationManagedZoneContextFormGroup() {
		return new FormGroup<OperationManagedZoneContextFormProperties>({
		});

	}

	export interface ManagedZonesListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/** The managed zone resources. */
		managedZones?: Array<ManagedZone>;

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken?: string | null;
	}
	export interface ManagedZonesListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonesListResponseFormGroup() {
		return new FormGroup<ManagedZonesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoliciesListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken?: string | null;

		/** The policy resources. */
		policies?: Array<Policy>;
	}
	export interface PoliciesListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePoliciesListResponseFormGroup() {
		return new FormGroup<PoliciesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources. */
	export interface Policy {
		alternativeNameServerConfig?: PolicyAlternativeNameServerConfig;

		/** A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function. */
		description?: string | null;

		/** Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy. */
		enableInboundForwarding?: boolean | null;

		/** Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. */
		enableLogging?: boolean | null;

		/** Unique identifier for the resource; defined by the server (output only). */
		id?: string | null;
		kind?: string | null;

		/** User-assigned name for this policy. */
		name?: string | null;

		/** List of network names specifying networks to which this policy is applied. */
		networks?: Array<PolicyNetwork>;
	}

	/** A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources. */
	export interface PolicyFormProperties {

		/** A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function. */
		description: FormControl<string | null | undefined>,

		/** Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy. */
		enableInboundForwarding: FormControl<boolean | null | undefined>,

		/** Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. */
		enableLogging: FormControl<boolean | null | undefined>,

		/** Unique identifier for the resource; defined by the server (output only). */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** User-assigned name for this policy. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enableInboundForwarding: new FormControl<boolean | null | undefined>(undefined),
			enableLogging: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyAlternativeNameServerConfig {
		kind?: string | null;

		/** Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified. */
		targetNameServers?: Array<PolicyAlternativeNameServerConfigTargetNameServer>;
	}
	export interface PolicyAlternativeNameServerConfigFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAlternativeNameServerConfigFormGroup() {
		return new FormGroup<PolicyAlternativeNameServerConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyAlternativeNameServerConfigTargetNameServer {

		/** Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target. */
		forwardingPath?: ManagedZoneForwardingConfigNameServerTargetForwardingPath | null;

		/** IPv4 address to forward queries to. */
		ipv4Address?: string | null;

		/** IPv6 address to forward to. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022. */
		ipv6Address?: string | null;
		kind?: string | null;
	}
	export interface PolicyAlternativeNameServerConfigTargetNameServerFormProperties {

		/** Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target. */
		forwardingPath: FormControl<ManagedZoneForwardingConfigNameServerTargetForwardingPath | null | undefined>,

		/** IPv4 address to forward queries to. */
		ipv4Address: FormControl<string | null | undefined>,

		/** IPv6 address to forward to. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022. */
		ipv6Address: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAlternativeNameServerConfigTargetNameServerFormGroup() {
		return new FormGroup<PolicyAlternativeNameServerConfigTargetNameServerFormProperties>({
			forwardingPath: new FormControl<ManagedZoneForwardingConfigNameServerTargetForwardingPath | null | undefined>(undefined),
			ipv4Address: new FormControl<string | null | undefined>(undefined),
			ipv6Address: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyNetwork {
		kind?: string | null;

		/** The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl?: string | null;
	}
	export interface PolicyNetworkFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl: FormControl<string | null | undefined>,
	}
	export function CreatePolicyNetworkFormGroup() {
		return new FormGroup<PolicyNetworkFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			networkUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoliciesPatchResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources. */
		policy?: Policy;
	}
	export interface PoliciesPatchResponseFormProperties {
	}
	export function CreatePoliciesPatchResponseFormGroup() {
		return new FormGroup<PoliciesPatchResponseFormProperties>({
		});

	}

	export interface PoliciesUpdateResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources. */
		policy?: Policy;
	}
	export interface PoliciesUpdateResponseFormProperties {
	}
	export function CreatePoliciesUpdateResponseFormGroup() {
		return new FormGroup<PoliciesUpdateResponseFormProperties>({
		});

	}


	/** A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7. */
	export interface Project {

		/** User assigned unique identifier for the resource (output only). */
		id?: string | null;
		kind?: string | null;

		/** Unique numeric identifier for the resource; defined by the server (output only). */
		number?: string | null;

		/** Limits associated with a Project. */
		quota?: Quota;
	}

	/** A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7. */
	export interface ProjectFormProperties {

		/** User assigned unique identifier for the resource (output only). */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** Unique numeric identifier for the resource; defined by the server (output only). */
		number: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Limits associated with a Project. */
	export interface Quota {

		/**
		 * Maximum allowed number of DnsKeys per ManagedZone.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dnsKeysPerManagedZone?: number | null;

		/**
		 * Maximum allowed number of GKE clusters to which a privately scoped zone can be attached.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gkeClustersPerManagedZone?: number | null;

		/**
		 * Maximum allowed number of GKE clusters per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gkeClustersPerPolicy?: number | null;

		/**
		 * Maximum allowed number of GKE clusters per response policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gkeClustersPerResponsePolicy?: number | null;

		/**
		 * Maximum allowed number of items per routing policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsPerRoutingPolicy?: number | null;
		kind?: string | null;

		/**
		 * Maximum allowed number of managed zones in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedZones?: number | null;

		/**
		 * Maximum allowed number of managed zones which can be attached to a GKE cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedZonesPerGkeCluster?: number | null;

		/**
		 * Maximum allowed number of managed zones which can be attached to a network.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedZonesPerNetwork?: number | null;

		/**
		 * Maximum allowed number of networks to which a privately scoped zone can be attached.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		networksPerManagedZone?: number | null;

		/**
		 * Maximum allowed number of networks per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		networksPerPolicy?: number | null;

		/**
		 * Maximum allowed number of networks per response policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		networksPerResponsePolicy?: number | null;

		/**
		 * Maximum allowed number of consumer peering zones per target network owned by this producer project
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		peeringZonesPerTargetNetwork?: number | null;

		/**
		 * Maximum allowed number of policies per project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		policies?: number | null;

		/**
		 * Maximum allowed number of ResourceRecords per ResourceRecordSet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceRecordsPerRrset?: number | null;

		/**
		 * Maximum allowed number of response policies per project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responsePolicies?: number | null;

		/**
		 * Maximum allowed number of rules per response policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responsePolicyRulesPerResponsePolicy?: number | null;

		/**
		 * Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rrsetAdditionsPerChange?: number | null;

		/**
		 * Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rrsetDeletionsPerChange?: number | null;

		/**
		 * Maximum allowed number of ResourceRecordSets per zone in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rrsetsPerManagedZone?: number | null;

		/**
		 * Maximum allowed number of target name servers per managed forwarding zone.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetNameServersPerManagedZone?: number | null;

		/**
		 * Maximum allowed number of alternative target name servers per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetNameServersPerPolicy?: number | null;

		/**
		 * Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRrdataSizePerChange?: number | null;

		/** DNSSEC algorithm and key length types that can be used for DnsKeys. */
		whitelistedKeySpecs?: Array<DnsKeySpec>;
	}

	/** Limits associated with a Project. */
	export interface QuotaFormProperties {

		/**
		 * Maximum allowed number of DnsKeys per ManagedZone.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dnsKeysPerManagedZone: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of GKE clusters to which a privately scoped zone can be attached.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gkeClustersPerManagedZone: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of GKE clusters per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gkeClustersPerPolicy: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of GKE clusters per response policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gkeClustersPerResponsePolicy: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of items per routing policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsPerRoutingPolicy: FormControl<number | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/**
		 * Maximum allowed number of managed zones in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedZones: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of managed zones which can be attached to a GKE cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedZonesPerGkeCluster: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of managed zones which can be attached to a network.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedZonesPerNetwork: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of networks to which a privately scoped zone can be attached.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		networksPerManagedZone: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of networks per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		networksPerPolicy: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of networks per response policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		networksPerResponsePolicy: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of consumer peering zones per target network owned by this producer project
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		peeringZonesPerTargetNetwork: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of policies per project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		policies: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of ResourceRecords per ResourceRecordSet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceRecordsPerRrset: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of response policies per project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responsePolicies: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of rules per response policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responsePolicyRulesPerResponsePolicy: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rrsetAdditionsPerChange: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rrsetDeletionsPerChange: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of ResourceRecordSets per zone in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rrsetsPerManagedZone: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of target name servers per managed forwarding zone.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetNameServersPerManagedZone: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of alternative target name servers per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetNameServersPerPolicy: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRrdataSizePerChange: FormControl<number | null | undefined>,
	}
	export function CreateQuotaFormGroup() {
		return new FormGroup<QuotaFormProperties>({
			dnsKeysPerManagedZone: new FormControl<number | null | undefined>(undefined),
			gkeClustersPerManagedZone: new FormControl<number | null | undefined>(undefined),
			gkeClustersPerPolicy: new FormControl<number | null | undefined>(undefined),
			gkeClustersPerResponsePolicy: new FormControl<number | null | undefined>(undefined),
			itemsPerRoutingPolicy: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			managedZones: new FormControl<number | null | undefined>(undefined),
			managedZonesPerGkeCluster: new FormControl<number | null | undefined>(undefined),
			managedZonesPerNetwork: new FormControl<number | null | undefined>(undefined),
			networksPerManagedZone: new FormControl<number | null | undefined>(undefined),
			networksPerPolicy: new FormControl<number | null | undefined>(undefined),
			networksPerResponsePolicy: new FormControl<number | null | undefined>(undefined),
			peeringZonesPerTargetNetwork: new FormControl<number | null | undefined>(undefined),
			policies: new FormControl<number | null | undefined>(undefined),
			resourceRecordsPerRrset: new FormControl<number | null | undefined>(undefined),
			responsePolicies: new FormControl<number | null | undefined>(undefined),
			responsePolicyRulesPerResponsePolicy: new FormControl<number | null | undefined>(undefined),
			rrsetAdditionsPerChange: new FormControl<number | null | undefined>(undefined),
			rrsetDeletionsPerChange: new FormControl<number | null | undefined>(undefined),
			rrsetsPerManagedZone: new FormControl<number | null | undefined>(undefined),
			targetNameServersPerManagedZone: new FormControl<number | null | undefined>(undefined),
			targetNameServersPerPolicy: new FormControl<number | null | undefined>(undefined),
			totalRrdataSizePerChange: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceRecordSetsDeleteResponse {
	}
	export interface ResourceRecordSetsDeleteResponseFormProperties {
	}
	export function CreateResourceRecordSetsDeleteResponseFormGroup() {
		return new FormGroup<ResourceRecordSetsDeleteResponseFormProperties>({
		});

	}

	export interface ResourceRecordSetsListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even larger collections, one page at a time. However, if the collection changes between paginated list requests, the set of elements returned is an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken?: string | null;

		/** The resource record set resources. */
		rrsets?: Array<ResourceRecordSet>;
	}
	export interface ResourceRecordSetsListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even larger collections, one page at a time. However, if the collection changes between paginated list requests, the set of elements returned is an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecordSetsListResponseFormGroup() {
		return new FormGroup<ResourceRecordSetsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponsePoliciesListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** The presence of this field indicates that more results exist following your last page of results in pagination order. To fetch them, make another list request by using this value as your page token. This lets you view the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken?: string | null;

		/** The Response Policy resources. */
		responsePolicies?: Array<ResponsePolicy>;
	}
	export interface ResponsePoliciesListResponseFormProperties {

		/** The presence of this field indicates that more results exist following your last page of results in pagination order. To fetch them, make another list request by using this value as your page token. This lets you view the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateResponsePoliciesListResponseFormGroup() {
		return new FormGroup<ResponsePoliciesListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks. */
	export interface ResponsePolicy {

		/** User-provided description for this Response Policy. */
		description?: string | null;

		/** The list of Google Kubernetes Engine clusters to which this response policy is applied. */
		gkeClusters?: Array<ResponsePolicyGKECluster>;

		/** Unique identifier for the resource; defined by the server (output only). */
		id?: string | null;
		kind?: string | null;

		/** User labels. */
		labels?: {[id: string]: string };

		/** List of network names specifying networks to which this policy is applied. */
		networks?: Array<ResponsePolicyNetwork>;

		/** User assigned name for this Response Policy. */
		responsePolicyName?: string | null;
	}

	/** A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks. */
	export interface ResponsePolicyFormProperties {

		/** User-provided description for this Response Policy. */
		description: FormControl<string | null | undefined>,

		/** Unique identifier for the resource; defined by the server (output only). */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** User labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** User assigned name for this Response Policy. */
		responsePolicyName: FormControl<string | null | undefined>,
	}
	export function CreateResponsePolicyFormGroup() {
		return new FormGroup<ResponsePolicyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responsePolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponsePolicyGKECluster {

		/** The resource name of the cluster to bind this response policy to. This should be specified in the format like: projects/locations/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get */
		gkeClusterName?: string | null;
		kind?: string | null;
	}
	export interface ResponsePolicyGKEClusterFormProperties {

		/** The resource name of the cluster to bind this response policy to. This should be specified in the format like: projects/locations/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get */
		gkeClusterName: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateResponsePolicyGKEClusterFormGroup() {
		return new FormGroup<ResponsePolicyGKEClusterFormProperties>({
			gkeClusterName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponsePolicyNetwork {
		kind?: string | null;

		/** The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl?: string | null;
	}
	export interface ResponsePolicyNetworkFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl: FormControl<string | null | undefined>,
	}
	export function CreateResponsePolicyNetworkFormGroup() {
		return new FormGroup<ResponsePolicyNetworkFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			networkUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponsePoliciesPatchResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks. */
		responsePolicy?: ResponsePolicy;
	}
	export interface ResponsePoliciesPatchResponseFormProperties {
	}
	export function CreateResponsePoliciesPatchResponseFormGroup() {
		return new FormGroup<ResponsePoliciesPatchResponseFormProperties>({
		});

	}

	export interface ResponsePoliciesUpdateResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks. */
		responsePolicy?: ResponsePolicy;
	}
	export interface ResponsePoliciesUpdateResponseFormProperties {
	}
	export function CreateResponsePoliciesUpdateResponseFormGroup() {
		return new FormGroup<ResponsePoliciesUpdateResponseFormProperties>({
		});

	}


	/** A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix. */
	export interface ResponsePolicyRule {

		/** Answer this query with a behavior rather than DNS data. */
		behavior?: ResponsePolicyRuleBehavior | null;

		/** The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. */
		dnsName?: string | null;
		kind?: string | null;
		localData?: ResponsePolicyRuleLocalData;

		/** An identifier for this rule. Must be unique with the ResponsePolicy. */
		ruleName?: string | null;
	}

	/** A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix. */
	export interface ResponsePolicyRuleFormProperties {

		/** Answer this query with a behavior rather than DNS data. */
		behavior: FormControl<ResponsePolicyRuleBehavior | null | undefined>,

		/** The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. */
		dnsName: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** An identifier for this rule. Must be unique with the ResponsePolicy. */
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateResponsePolicyRuleFormGroup() {
		return new FormGroup<ResponsePolicyRuleFormProperties>({
			behavior: new FormControl<ResponsePolicyRuleBehavior | null | undefined>(undefined),
			dnsName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			ruleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResponsePolicyRuleBehavior { behaviorUnspecified = 'behaviorUnspecified', bypassResponsePolicy = 'bypassResponsePolicy' }

	export interface ResponsePolicyRuleLocalData {

		/** All resource record sets for this selector, one per resource record type. The name must match the dns_name. */
		localDatas?: Array<ResourceRecordSet>;
	}
	export interface ResponsePolicyRuleLocalDataFormProperties {
	}
	export function CreateResponsePolicyRuleLocalDataFormGroup() {
		return new FormGroup<ResponsePolicyRuleLocalDataFormProperties>({
		});

	}

	export interface ResponsePolicyRulesListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken?: string | null;

		/** The Response Policy Rule resources. */
		responsePolicyRules?: Array<ResponsePolicyRule>;
	}
	export interface ResponsePolicyRulesListResponseFormProperties {

		/** The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateResponsePolicyRulesListResponseFormGroup() {
		return new FormGroup<ResponsePolicyRulesListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponsePolicyRulesPatchResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix. */
		responsePolicyRule?: ResponsePolicyRule;
	}
	export interface ResponsePolicyRulesPatchResponseFormProperties {
	}
	export function CreateResponsePolicyRulesPatchResponseFormGroup() {
		return new FormGroup<ResponsePolicyRulesPatchResponseFormProperties>({
		});

	}

	export interface ResponsePolicyRulesUpdateResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix. */
		responsePolicyRule?: ResponsePolicyRule;
	}
	export interface ResponsePolicyRulesUpdateResponseFormProperties {
	}
	export function CreateResponsePolicyRulesUpdateResponseFormGroup() {
		return new FormGroup<ResponsePolicyRulesUpdateResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetches the representation of an existing Project.
		 * Get dns/v1/projects/{project}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Project} Successful response
		 */
		Dns_projects_get(project: string, clientOperationId: string | null | undefined): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Enumerates ManagedZones that have been created but not yet deleted.
		 * Get dns/v1/projects/{project}/managedZones
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} dnsName Restricts the list to return only zones with this domain name.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {ManagedZonesListResponse} Successful response
		 */
		Dns_managedZones_list(project: string, dnsName: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ManagedZonesListResponse> {
			return this.http.get<ManagedZonesListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones&dnsName=' + (dnsName == null ? '' : encodeURIComponent(dnsName)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ManagedZone.
		 * Post dns/v1/projects/{project}/managedZones
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ManagedZone} Successful response
		 */
		Dns_managedZones_create(project: string, clientOperationId: string | null | undefined, requestBody: ManagedZone): Observable<ManagedZone> {
			return this.http.post<ManagedZone>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a previously created ManagedZone.
		 * Delete dns/v1/projects/{project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_managedZones_delete(project: string, managedZone: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the representation of an existing ManagedZone.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ManagedZone} Successful response
		 */
		Dns_managedZones_get(project: string, managedZone: string, clientOperationId: string | null | undefined): Observable<ManagedZone> {
			return this.http.get<ManagedZone>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Applies a partial update to an existing ManagedZone.
		 * Patch dns/v1/projects/{project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Operation} Successful response
		 */
		Dns_managedZones_patch(project: string, managedZone: string, clientOperationId: string | null | undefined, requestBody: ManagedZone): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing ManagedZone.
		 * Put dns/v1/projects/{project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Operation} Successful response
		 */
		Dns_managedZones_update(project: string, managedZone: string, clientOperationId: string | null | undefined, requestBody: ManagedZone): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enumerates Changes to a ResourceRecordSet collection.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/changes
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @param {Dns_changes_listSortBy} sortBy Sorting criterion. The only supported value is change sequence.
		 * @param {string} sortOrder Sorting order direction: 'ascending' or 'descending'.
		 * @return {ChangesListResponse} Successful response
		 */
		Dns_changes_list(project: string, managedZone: string, maxResults: number | null | undefined, pageToken: string | null | undefined, sortBy: Dns_changes_listSortBy | null | undefined, sortOrder: string | null | undefined): Observable<ChangesListResponse> {
			return this.http.get<ChangesListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/changes&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortBy=' + sortBy + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)), {});
		}

		/**
		 * Atomically updates the ResourceRecordSet collection.
		 * Post dns/v1/projects/{project}/managedZones/{managedZone}/changes
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Change} Successful response
		 */
		Dns_changes_create(project: string, managedZone: string, clientOperationId: string | null | undefined, requestBody: Change): Observable<Change> {
			return this.http.post<Change>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/changes&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches the representation of an existing Change.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/changes/{changeId}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} changeId The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Change} Successful response
		 */
		Dns_changes_get(project: string, managedZone: string, changeId: string, clientOperationId: string | null | undefined): Observable<Change> {
			return this.http.get<Change>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/changes/' + (changeId == null ? '' : encodeURIComponent(changeId)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Enumerates DnsKeys to a ResourceRecordSet collection.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {DnsKeysListResponse} Successful response
		 */
		Dns_dnsKeys_list(project: string, managedZone: string, digestType: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<DnsKeysListResponse> {
			return this.http.get<DnsKeysListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/dnsKeys&digestType=' + (digestType == null ? '' : encodeURIComponent(digestType)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Fetches the representation of an existing DnsKey.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} dnsKeyId The identifier of the requested DnsKey.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @param {string} digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
		 * @return {DnsKey} Successful response
		 */
		Dns_dnsKeys_get(project: string, managedZone: string, dnsKeyId: string, clientOperationId: string | null | undefined, digestType: string | null | undefined): Observable<DnsKey> {
			return this.http.get<DnsKey>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/dnsKeys/' + (dnsKeyId == null ? '' : encodeURIComponent(dnsKeyId)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '&digestType=' + (digestType == null ? '' : encodeURIComponent(digestType)), {});
		}

		/**
		 * Enumerates Operations for the given ManagedZone.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/operations
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @param {Dns_managedZoneOperations_listSortBy} sortBy Sorting criterion. The only supported values are START_TIME and ID.
		 * @return {ManagedZoneOperationsListResponse} Successful response
		 */
		Dns_managedZoneOperations_list(project: string, managedZone: string, maxResults: number | null | undefined, pageToken: string | null | undefined, sortBy: Dns_managedZoneOperations_listSortBy | null | undefined): Observable<ManagedZoneOperationsListResponse> {
			return this.http.get<ManagedZoneOperationsListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/operations&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortBy=' + sortBy, {});
		}

		/**
		 * Fetches the representation of an existing Operation.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/operations/{operation}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request.
		 * @param {string} operation Identifies the operation addressed by this request (ID of the operation).
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Operation} Successful response
		 */
		Dns_managedZoneOperations_get(project: string, managedZone: string, operation: string, clientOperationId: string | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/operations/' + (operation == null ? '' : encodeURIComponent(operation)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Enumerates ResourceRecordSets that you have created but not yet deleted.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/rrsets
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name Restricts the list to return only records with this fully qualified domain name.
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @param {string} type Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
		 * @return {ResourceRecordSetsListResponse} Successful response
		 */
		Dns_resourceRecordSets_list(project: string, managedZone: string, maxResults: number | null | undefined, name: string | null | undefined, pageToken: string | null | undefined, type: string | null | undefined): Observable<ResourceRecordSetsListResponse> {
			return this.http.get<ResourceRecordSetsListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/rrsets&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Creates a new ResourceRecordSet.
		 * Post dns/v1/projects/{project}/managedZones/{managedZone}/rrsets
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResourceRecordSet} Successful response
		 */
		Dns_resourceRecordSets_create(project: string, managedZone: string, clientOperationId: string | null | undefined, requestBody: ResourceRecordSet): Observable<ResourceRecordSet> {
			return this.http.post<ResourceRecordSet>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/rrsets&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a previously created ResourceRecordSet.
		 * Delete dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} name Fully qualified domain name.
		 * @param {string} type RRSet type.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResourceRecordSetsDeleteResponse} Successful response
		 */
		Dns_resourceRecordSets_delete(project: string, managedZone: string, name: string, type: string, clientOperationId: string | null | undefined): Observable<ResourceRecordSetsDeleteResponse> {
			return this.http.delete<ResourceRecordSetsDeleteResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/rrsets/' + (name == null ? '' : encodeURIComponent(name)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Fetches the representation of an existing ResourceRecordSet.
		 * Get dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} name Fully qualified domain name.
		 * @param {string} type RRSet type.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResourceRecordSet} Successful response
		 */
		Dns_resourceRecordSets_get(project: string, managedZone: string, name: string, type: string, clientOperationId: string | null | undefined): Observable<ResourceRecordSet> {
			return this.http.get<ResourceRecordSet>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/rrsets/' + (name == null ? '' : encodeURIComponent(name)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Applies a partial update to an existing ResourceRecordSet.
		 * Patch dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
		 * @param {string} name Fully qualified domain name.
		 * @param {string} type RRSet type.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResourceRecordSet} Successful response
		 */
		Dns_resourceRecordSets_patch(project: string, managedZone: string, name: string, type: string, clientOperationId: string | null | undefined, requestBody: ResourceRecordSet): Observable<ResourceRecordSet> {
			return this.http.patch<ResourceRecordSet>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/rrsets/' + (name == null ? '' : encodeURIComponent(name)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enumerates all Policies associated with a project.
		 * Get dns/v1/projects/{project}/policies
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {PoliciesListResponse} Successful response
		 */
		Dns_policies_list(project: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<PoliciesListResponse> {
			return this.http.get<PoliciesListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/policies&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Policy.
		 * Post dns/v1/projects/{project}/policies
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Policy} Successful response
		 */
		Dns_policies_create(project: string, clientOperationId: string | null | undefined, requestBody: Policy): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/policies&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
		 * Delete dns/v1/projects/{project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_policies_delete(project: string, policy: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the representation of an existing Policy.
		 * Get dns/v1/projects/{project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {Policy} Successful response
		 */
		Dns_policies_get(project: string, policy: string, clientOperationId: string | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Applies a partial update to an existing Policy.
		 * Patch dns/v1/projects/{project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {PoliciesPatchResponse} Successful response
		 */
		Dns_policies_patch(project: string, policy: string, clientOperationId: string | null | undefined, requestBody: Policy): Observable<PoliciesPatchResponse> {
			return this.http.patch<PoliciesPatchResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Policy.
		 * Put dns/v1/projects/{project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {PoliciesUpdateResponse} Successful response
		 */
		Dns_policies_update(project: string, policy: string, clientOperationId: string | null | undefined, requestBody: Policy): Observable<PoliciesUpdateResponse> {
			return this.http.put<PoliciesUpdateResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enumerates all Response Policies associated with a project.
		 * Get dns/v1/projects/{project}/responsePolicies
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {ResponsePoliciesListResponse} Successful response
		 */
		Dns_responsePolicies_list(project: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ResponsePoliciesListResponse> {
			return this.http.get<ResponsePoliciesListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Response Policy
		 * Post dns/v1/projects/{project}/responsePolicies
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePolicy} Successful response
		 */
		Dns_responsePolicies_create(project: string, clientOperationId: string | null | undefined, requestBody: ResponsePolicy): Observable<ResponsePolicy> {
			return this.http.post<ResponsePolicy>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
		 * Delete dns/v1/projects/{project}/responsePolicies/{responsePolicy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_responsePolicies_delete(project: string, responsePolicy: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the representation of an existing Response Policy.
		 * Get dns/v1/projects/{project}/responsePolicies/{responsePolicy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePolicy} Successful response
		 */
		Dns_responsePolicies_get(project: string, responsePolicy: string, clientOperationId: string | null | undefined): Observable<ResponsePolicy> {
			return this.http.get<ResponsePolicy>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Applies a partial update to an existing Response Policy.
		 * Patch dns/v1/projects/{project}/responsePolicies/{responsePolicy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the response policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePoliciesPatchResponse} Successful response
		 */
		Dns_responsePolicies_patch(project: string, responsePolicy: string, clientOperationId: string | null | undefined, requestBody: ResponsePolicy): Observable<ResponsePoliciesPatchResponse> {
			return this.http.patch<ResponsePoliciesPatchResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Response Policy.
		 * Put dns/v1/projects/{project}/responsePolicies/{responsePolicy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePoliciesUpdateResponse} Successful response
		 */
		Dns_responsePolicies_update(project: string, responsePolicy: string, clientOperationId: string | null | undefined, requestBody: ResponsePolicy): Observable<ResponsePoliciesUpdateResponse> {
			return this.http.put<ResponsePoliciesUpdateResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enumerates all Response Policy Rules associated with a project.
		 * Get dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy to list.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {ResponsePolicyRulesListResponse} Successful response
		 */
		Dns_responsePolicyRules_list(project: string, responsePolicy: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ResponsePolicyRulesListResponse> {
			return this.http.get<ResponsePolicyRulesListResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '/rules&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Response Policy Rule.
		 * Post dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy containing the Response Policy Rule.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePolicyRule} Successful response
		 */
		Dns_responsePolicyRules_create(project: string, responsePolicy: string, clientOperationId: string | null | undefined, requestBody: ResponsePolicyRule): Observable<ResponsePolicyRule> {
			return this.http.post<ResponsePolicyRule>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '/rules&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a previously created Response Policy Rule.
		 * Delete dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy containing the Response Policy Rule.
		 * @param {string} responsePolicyRule User assigned name of the Response Policy Rule addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_responsePolicyRules_delete(project: string, responsePolicy: string, responsePolicyRule: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '/rules/' + (responsePolicyRule == null ? '' : encodeURIComponent(responsePolicyRule)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the representation of an existing Response Policy Rule.
		 * Get dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy containing the Response Policy Rule.
		 * @param {string} responsePolicyRule User assigned name of the Response Policy Rule addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePolicyRule} Successful response
		 */
		Dns_responsePolicyRules_get(project: string, responsePolicy: string, responsePolicyRule: string, clientOperationId: string | null | undefined): Observable<ResponsePolicyRule> {
			return this.http.get<ResponsePolicyRule>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '/rules/' + (responsePolicyRule == null ? '' : encodeURIComponent(responsePolicyRule)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), {});
		}

		/**
		 * Applies a partial update to an existing Response Policy Rule.
		 * Patch dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy containing the Response Policy Rule.
		 * @param {string} responsePolicyRule User assigned name of the Response Policy Rule addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePolicyRulesPatchResponse} Successful response
		 */
		Dns_responsePolicyRules_patch(project: string, responsePolicy: string, responsePolicyRule: string, clientOperationId: string | null | undefined, requestBody: ResponsePolicyRule): Observable<ResponsePolicyRulesPatchResponse> {
			return this.http.patch<ResponsePolicyRulesPatchResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '/rules/' + (responsePolicyRule == null ? '' : encodeURIComponent(responsePolicyRule)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Response Policy Rule.
		 * Put dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} responsePolicy User assigned name of the Response Policy containing the Response Policy Rule.
		 * @param {string} responsePolicyRule User assigned name of the Response Policy Rule addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {ResponsePolicyRulesUpdateResponse} Successful response
		 */
		Dns_responsePolicyRules_update(project: string, responsePolicy: string, responsePolicyRule: string, clientOperationId: string | null | undefined, requestBody: ResponsePolicyRule): Observable<ResponsePolicyRulesUpdateResponse> {
			return this.http.put<ResponsePolicyRulesUpdateResponse>(this.baseUri + 'dns/v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/responsePolicies/' + (responsePolicy == null ? '' : encodeURIComponent(responsePolicy)) + '/rules/' + (responsePolicyRule == null ? '' : encodeURIComponent(responsePolicyRule)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Post dns/v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Dns_managedZones_getIamPolicy(resource: string, requestBody: GoogleIamV1GetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'dns/v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post dns/v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Dns_managedZones_setIamPolicy(resource: string, requestBody: GoogleIamV1SetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'dns/v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post dns/v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1TestIamPermissionsResponse} Successful response
		 */
		Dns_managedZones_testIamPermissions(resource: string, requestBody: GoogleIamV1TestIamPermissionsRequest): Observable<GoogleIamV1TestIamPermissionsResponse> {
			return this.http.post<GoogleIamV1TestIamPermissionsResponse>(this.baseUri + 'dns/v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Dns_changes_listSortBy { changeSequence = 'changeSequence' }

	export enum Dns_managedZoneOperations_listSortBy { startTime = 'startTime', id = 'id' }

}

