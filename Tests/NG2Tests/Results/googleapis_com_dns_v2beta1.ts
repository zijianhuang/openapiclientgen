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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#change". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#change". */
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


	/** A unit of data that will be returned by the DNS servers. */
	export interface ResourceRecordSet {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#resourceRecordSet". */
		kind?: string | null;

		/** For example, www.example.com. */
		name?: string | null;

		/** As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples. */
		rrdatas?: Array<string>;

		/** As defined in RFC 4034 (section 3.2). */
		signatureRrdatas?: Array<string>;

		/** Number of seconds that this ResourceRecordSet can be cached by resolvers. */
		ttl?: number | null;

		/** The identifier of a supported record type. See the list of Supported DNS record types. */
		type?: string | null;
	}

	/** A unit of data that will be returned by the DNS servers. */
	export interface ResourceRecordSetFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#resourceRecordSet". */
		kind: FormControl<string | null | undefined>,

		/** For example, www.example.com. */
		name: FormControl<string | null | undefined>,

		/** Number of seconds that this ResourceRecordSet can be cached by resolvers. */
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

	export enum ChangeStatus { DONE = 0, PENDING = 1 }


	/** The response to a request to enumerate Changes to a ResourceRecordSets collection. */
	export interface ChangesListResponse {

		/** The requested changes. */
		changes?: Array<Change>;

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
		 */
		nextPageToken?: string | null;
	}

	/** The response to a request to enumerate Changes to a ResourceRecordSets collection. */
	export interface ChangesListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
		 */
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

		/** Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures. */
		isActive?: boolean | null;

		/** Length of the key in bits. Specified at creation time then immutable. */
		keyLength?: number | null;

		/** The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only. */
		keyTag?: number | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#dnsKey". */
		kind?: string | null;

		/** Base64 encoded public half of this key. Output only. */
		publicKey?: string | null;

		/** One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, will be used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag will be cleared and this key will be used to sign only resource record sets of other types. Immutable after creation time. */
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

		/** Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures. */
		isActive: FormControl<boolean | null | undefined>,

		/** Length of the key in bits. Specified at creation time then immutable. */
		keyLength: FormControl<number | null | undefined>,

		/** The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only. */
		keyTag: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#dnsKey". */
		kind: FormControl<string | null | undefined>,

		/** Base64 encoded public half of this key. Output only. */
		publicKey: FormControl<string | null | undefined>,

		/** One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, will be used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag will be cleared and this key will be used to sign only resource record sets of other types. Immutable after creation time. */
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

	export enum DnsKeyAlgorithm { ECDSAP256SHA256 = 0, ECDSAP384SHA384 = 1, RSASHA1 = 2, RSASHA256 = 3, RSASHA512 = 4 }

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

	export enum DnsKeyDigestType { SHA1 = 0, SHA256 = 1, SHA384 = 2 }

	export enum DnsKeyType { KEY_SIGNING = 0, ZONE_SIGNING = 1 }


	/** Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey. */
	export interface DnsKeySpec {

		/** String mnemonic specifying the DNSSEC algorithm of this key. */
		algorithm?: DnsKeyAlgorithm | null;

		/** Length of the keys in bits. */
		keyLength?: number | null;

		/** Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, will only be used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and will be used to sign all other types of resource record sets. */
		keyType?: DnsKeyType | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#dnsKeySpec". */
		kind?: string | null;
	}

	/** Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey. */
	export interface DnsKeySpecFormProperties {

		/** String mnemonic specifying the DNSSEC algorithm of this key. */
		algorithm: FormControl<DnsKeyAlgorithm | null | undefined>,

		/** Length of the keys in bits. */
		keyLength: FormControl<number | null | undefined>,

		/** Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, will only be used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and will be used to sign all other types of resource record sets. */
		keyType: FormControl<DnsKeyType | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#dnsKeySpec". */
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

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
		 */
		nextPageToken?: string | null;
	}

	/** The response to a request to enumerate DnsKeys in a ManagedZone. */
	export interface DnsKeysListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDnsKeysListResponseFormGroup() {
		return new FormGroup<DnsKeysListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service. */
	export interface ManagedZone {

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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZone". */
		kind?: string | null;

		/** User labels. */
		labels?: {[id: string]: string };

		/** User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. */
		name?: string | null;

		/** Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users will leave this field unset. */
		nameServerSet?: string | null;

		/** Delegate your managed_zone to these virtual name servers; defined by the server (output only) */
		nameServers?: Array<string>;
		peeringConfig?: ManagedZonePeeringConfig;
		privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;

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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZone". */
		kind: FormControl<string | null | undefined>,

		/** User labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. */
		name: FormControl<string | null | undefined>,

		/** Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users will leave this field unset. */
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

	export interface ManagedZoneDnsSecConfig {

		/** Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF. */
		defaultKeySpecs?: Array<DnsKeySpec>;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneDnsSecConfig". */
		kind?: string | null;

		/** Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF. */
		nonExistence?: ManagedZoneDnsSecConfigNonExistence | null;

		/** Specifies whether DNSSEC is enabled, and what mode it is in. */
		state?: ManagedZoneDnsSecConfigState | null;
	}
	export interface ManagedZoneDnsSecConfigFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneDnsSecConfig". */
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

	export enum ManagedZoneDnsSecConfigNonExistence { NSEC = 0, NSEC3 = 1 }

	export enum ManagedZoneDnsSecConfigState { OFF = 0, ON = 1, TRANSFER = 2 }

	export interface ManagedZoneForwardingConfig {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneForwardingConfig". */
		kind?: string | null;

		/** List of target name servers to forward to. Cloud DNS will select the best available name server if more than one target is given. */
		targetNameServers?: Array<ManagedZoneForwardingConfigNameServerTarget>;
	}
	export interface ManagedZoneForwardingConfigFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneForwardingConfig". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneForwardingConfigFormGroup() {
		return new FormGroup<ManagedZoneForwardingConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZoneForwardingConfigNameServerTarget {

		/** IPv4 address of a target name server. */
		ipv4Address?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneForwardingConfigNameServerTarget". */
		kind?: string | null;
	}
	export interface ManagedZoneForwardingConfigNameServerTargetFormProperties {

		/** IPv4 address of a target name server. */
		ipv4Address: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneForwardingConfigNameServerTarget". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneForwardingConfigNameServerTargetFormGroup() {
		return new FormGroup<ManagedZoneForwardingConfigNameServerTargetFormProperties>({
			ipv4Address: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZonePeeringConfig {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePeeringConfig". */
		kind?: string | null;
		targetNetwork?: ManagedZonePeeringConfigTargetNetwork;
	}
	export interface ManagedZonePeeringConfigFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePeeringConfig". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePeeringConfigTargetNetwork". */
		kind?: string | null;

		/** The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl?: string | null;
	}
	export interface ManagedZonePeeringConfigTargetNetworkFormProperties {

		/** The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only. */
		deactivateTime: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePeeringConfigTargetNetwork". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePrivateVisibilityConfig". */
		kind?: string | null;

		/** The list of VPC networks that can see this zone. */
		networks?: Array<ManagedZonePrivateVisibilityConfigNetwork>;
	}
	export interface ManagedZonePrivateVisibilityConfigFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePrivateVisibilityConfig". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonePrivateVisibilityConfigFormGroup() {
		return new FormGroup<ManagedZonePrivateVisibilityConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedZonePrivateVisibilityConfigNetwork {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePrivateVisibilityConfigNetwork". */
		kind?: string | null;

		/** The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl?: string | null;
	}
	export interface ManagedZonePrivateVisibilityConfigNetworkFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#managedZonePrivateVisibilityConfigNetwork". */
		kind: FormControl<string | null | undefined>,

		/** The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl: FormControl<string | null | undefined>,
	}
	export function CreateManagedZonePrivateVisibilityConfigNetworkFormGroup() {
		return new FormGroup<ManagedZonePrivateVisibilityConfigNetworkFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			networkUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedZoneVisibility { PRIVATE = 0, PUBLIC = 1 }

	export interface ManagedZoneOperationsListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
		nextPageToken?: string | null;

		/** The operation resources. */
		operations?: Array<Operation>;
	}
	export interface ManagedZoneOperationsListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#operation". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#operation". */
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

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
		nextPageToken?: string | null;
	}
	export interface ManagedZonesListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
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

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
		nextPageToken?: string | null;

		/** The policy resources. */
		policies?: Array<Policy>;
	}
	export interface PoliciesListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
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

		/** Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address will be allocated from each of the sub-networks that are bound to this policy. */
		enableInboundForwarding?: boolean | null;

		/** Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. */
		enableLogging?: boolean | null;

		/** Unique identifier for the resource; defined by the server (output only). */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policy". */
		kind?: string | null;

		/** User assigned name for this policy. */
		name?: string | null;

		/** List of network names specifying networks to which this policy is applied. */
		networks?: Array<PolicyNetwork>;
	}

	/** A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources. */
	export interface PolicyFormProperties {

		/** A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function. */
		description: FormControl<string | null | undefined>,

		/** Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address will be allocated from each of the sub-networks that are bound to this policy. */
		enableInboundForwarding: FormControl<boolean | null | undefined>,

		/** Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. */
		enableLogging: FormControl<boolean | null | undefined>,

		/** Unique identifier for the resource; defined by the server (output only). */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policy". */
		kind: FormControl<string | null | undefined>,

		/** User assigned name for this policy. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policyAlternativeNameServerConfig". */
		kind?: string | null;

		/** Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified. */
		targetNameServers?: Array<PolicyAlternativeNameServerConfigTargetNameServer>;
	}
	export interface PolicyAlternativeNameServerConfigFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policyAlternativeNameServerConfig". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAlternativeNameServerConfigFormGroup() {
		return new FormGroup<PolicyAlternativeNameServerConfigFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyAlternativeNameServerConfigTargetNameServer {

		/** IPv4 address to forward to. */
		ipv4Address?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policyAlternativeNameServerConfigTargetNameServer". */
		kind?: string | null;
	}
	export interface PolicyAlternativeNameServerConfigTargetNameServerFormProperties {

		/** IPv4 address to forward to. */
		ipv4Address: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policyAlternativeNameServerConfigTargetNameServer". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAlternativeNameServerConfigTargetNameServerFormGroup() {
		return new FormGroup<PolicyAlternativeNameServerConfigTargetNameServerFormProperties>({
			ipv4Address: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyNetwork {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policyNetwork". */
		kind?: string | null;

		/** The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} */
		networkUrl?: string | null;
	}
	export interface PolicyNetworkFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dns#policyNetwork". */
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


	/** A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. */
	export interface Project {

		/** User assigned unique identifier for the resource (output only). */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#project". */
		kind?: string | null;

		/** Unique numeric identifier for the resource; defined by the server (output only). */
		number?: string | null;

		/** Limits associated with a Project. */
		quota?: Quota;
	}

	/** A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. */
	export interface ProjectFormProperties {

		/** User assigned unique identifier for the resource (output only). */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#project". */
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

		/** Maximum allowed number of DnsKeys per ManagedZone. */
		dnsKeysPerManagedZone?: number | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dns#quota". */
		kind?: string | null;

		/** Maximum allowed number of managed zones in the project. */
		managedZones?: number | null;

		/** Maximum allowed number of managed zones which can be attached to a network. */
		managedZonesPerNetwork?: number | null;

		/** Maximum allowed number of networks to which a privately scoped zone can be attached. */
		networksPerManagedZone?: number | null;

		/** Maximum allowed number of networks per policy. */
		networksPerPolicy?: number | null;

		/** Maximum allowed number of policies per project. */
		policies?: number | null;

		/** Maximum allowed number of ResourceRecords per ResourceRecordSet. */
		resourceRecordsPerRrset?: number | null;

		/** Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest. */
		rrsetAdditionsPerChange?: number | null;

		/** Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest. */
		rrsetDeletionsPerChange?: number | null;

		/** Maximum allowed number of ResourceRecordSets per zone in the project. */
		rrsetsPerManagedZone?: number | null;

		/** Maximum allowed number of target name servers per managed forwarding zone. */
		targetNameServersPerManagedZone?: number | null;

		/** Maximum allowed number of alternative target name servers per policy. */
		targetNameServersPerPolicy?: number | null;

		/** Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes. */
		totalRrdataSizePerChange?: number | null;

		/** DNSSEC algorithm and key length types that can be used for DnsKeys. */
		whitelistedKeySpecs?: Array<DnsKeySpec>;
	}

	/** Limits associated with a Project. */
	export interface QuotaFormProperties {

		/** Maximum allowed number of DnsKeys per ManagedZone. */
		dnsKeysPerManagedZone: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dns#quota". */
		kind: FormControl<string | null | undefined>,

		/** Maximum allowed number of managed zones in the project. */
		managedZones: FormControl<number | null | undefined>,

		/** Maximum allowed number of managed zones which can be attached to a network. */
		managedZonesPerNetwork: FormControl<number | null | undefined>,

		/** Maximum allowed number of networks to which a privately scoped zone can be attached. */
		networksPerManagedZone: FormControl<number | null | undefined>,

		/** Maximum allowed number of networks per policy. */
		networksPerPolicy: FormControl<number | null | undefined>,

		/** Maximum allowed number of policies per project. */
		policies: FormControl<number | null | undefined>,

		/** Maximum allowed number of ResourceRecords per ResourceRecordSet. */
		resourceRecordsPerRrset: FormControl<number | null | undefined>,

		/** Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest. */
		rrsetAdditionsPerChange: FormControl<number | null | undefined>,

		/** Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest. */
		rrsetDeletionsPerChange: FormControl<number | null | undefined>,

		/** Maximum allowed number of ResourceRecordSets per zone in the project. */
		rrsetsPerManagedZone: FormControl<number | null | undefined>,

		/** Maximum allowed number of target name servers per managed forwarding zone. */
		targetNameServersPerManagedZone: FormControl<number | null | undefined>,

		/** Maximum allowed number of alternative target name servers per policy. */
		targetNameServersPerPolicy: FormControl<number | null | undefined>,

		/** Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes. */
		totalRrdataSizePerChange: FormControl<number | null | undefined>,
	}
	export function CreateQuotaFormGroup() {
		return new FormGroup<QuotaFormProperties>({
			dnsKeysPerManagedZone: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			managedZones: new FormControl<number | null | undefined>(undefined),
			managedZonesPerNetwork: new FormControl<number | null | undefined>(undefined),
			networksPerManagedZone: new FormControl<number | null | undefined>(undefined),
			networksPerPolicy: new FormControl<number | null | undefined>(undefined),
			policies: new FormControl<number | null | undefined>(undefined),
			resourceRecordsPerRrset: new FormControl<number | null | undefined>(undefined),
			rrsetAdditionsPerChange: new FormControl<number | null | undefined>(undefined),
			rrsetDeletionsPerChange: new FormControl<number | null | undefined>(undefined),
			rrsetsPerManagedZone: new FormControl<number | null | undefined>(undefined),
			targetNameServersPerManagedZone: new FormControl<number | null | undefined>(undefined),
			targetNameServersPerPolicy: new FormControl<number | null | undefined>(undefined),
			totalRrdataSizePerChange: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceRecordSetsListResponse {

		/** Elements common to every response. */
		header?: ResponseHeader;

		/** Type of resource. */
		kind?: string | null;

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
		nextPageToken?: string | null;

		/** The resource record set resources. */
		rrsets?: Array<ResourceRecordSet>;
	}
	export interface ResourceRecordSetsListResponseFormProperties {

		/** Type of resource. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
		 * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecordSetsListResponseFormGroup() {
		return new FormGroup<ResourceRecordSetsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch the representation of an existing Project.
		 * Get {project}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_projects_get(project: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enumerate ManagedZones that have been created but not yet deleted.
		 * Get {project}/managedZones
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} dnsName Restricts the list to return only zones with this domain name.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {void} Successful response
		 */
		Dns_managedZones_list(project: string, dnsName: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones&dnsName=' + (dnsName == null ? '' : encodeURIComponent(dnsName)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new ManagedZone.
		 * Post {project}/managedZones
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_managedZones_create(project: string, clientOperationId: string | null | undefined, requestBody: ManagedZone): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a previously created ManagedZone.
		 * Delete {project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_managedZones_delete(project: string, managedZone: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the representation of an existing ManagedZone.
		 * Get {project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_managedZones_get(project: string, managedZone: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Apply a partial update to an existing ManagedZone.
		 * Patch {project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_managedZones_patch(project: string, managedZone: string, clientOperationId: string | null | undefined, requestBody: ManagedZone): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing ManagedZone.
		 * Put {project}/managedZones/{managedZone}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_managedZones_update(project: string, managedZone: string, clientOperationId: string | null | undefined, requestBody: ManagedZone): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enumerate Changes to a ResourceRecordSet collection.
		 * Get {project}/managedZones/{managedZone}/changes
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @param {Dns_changes_listSortBy} sortBy Sorting criterion. The only supported value is change sequence.
		 * @param {string} sortOrder Sorting order direction: 'ascending' or 'descending'.
		 * @return {void} Successful response
		 */
		Dns_changes_list(project: string, managedZone: string, maxResults: number | null | undefined, pageToken: string | null | undefined, sortBy: Dns_changes_listSortBy | null | undefined, sortOrder: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/changes&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortBy=' + sortBy + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Atomically update the ResourceRecordSet collection.
		 * Post {project}/managedZones/{managedZone}/changes
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_changes_create(project: string, managedZone: string, clientOperationId: string | null | undefined, requestBody: Change): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/changes&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the representation of an existing Change.
		 * Get {project}/managedZones/{managedZone}/changes/{changeId}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} changeId The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_changes_get(project: string, managedZone: string, changeId: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/changes/' + (changeId == null ? '' : encodeURIComponent(changeId)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enumerate DnsKeys to a ResourceRecordSet collection.
		 * Get {project}/managedZones/{managedZone}/dnsKeys
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {void} Successful response
		 */
		Dns_dnsKeys_list(project: string, managedZone: string, digestType: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/dnsKeys&digestType=' + (digestType == null ? '' : encodeURIComponent(digestType)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the representation of an existing DnsKey.
		 * Get {project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {string} dnsKeyId The identifier of the requested DnsKey.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @param {string} digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
		 * @return {void} Successful response
		 */
		Dns_dnsKeys_get(project: string, managedZone: string, dnsKeyId: string, clientOperationId: string | null | undefined, digestType: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/dnsKeys/' + (dnsKeyId == null ? '' : encodeURIComponent(dnsKeyId)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '&digestType=' + (digestType == null ? '' : encodeURIComponent(digestType)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enumerate Operations for the given ManagedZone.
		 * Get {project}/managedZones/{managedZone}/operations
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @param {Dns_managedZoneOperations_listSortBy} sortBy Sorting criterion. The only supported values are START_TIME and ID.
		 * @return {void} Successful response
		 */
		Dns_managedZoneOperations_list(project: string, managedZone: string, maxResults: number | null | undefined, pageToken: string | null | undefined, sortBy: Dns_managedZoneOperations_listSortBy | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/operations&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortBy=' + sortBy + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the representation of an existing Operation.
		 * Get {project}/managedZones/{managedZone}/operations/{operation}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request.
		 * @param {string} operation Identifies the operation addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_managedZoneOperations_get(project: string, managedZone: string, operation: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/operations/' + (operation == null ? '' : encodeURIComponent(operation)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enumerate ResourceRecordSets that have been created but not yet deleted.
		 * Get {project}/managedZones/{managedZone}/rrsets
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
		 * @param {string} name Restricts the list to return only records with this fully qualified domain name.
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @param {string} type Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
		 * @return {void} Successful response
		 */
		Dns_resourceRecordSets_list(project: string, managedZone: string, maxResults: number | null | undefined, name: string | null | undefined, pageToken: string | null | undefined, type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/managedZones/' + (managedZone == null ? '' : encodeURIComponent(managedZone)) + '/rrsets&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enumerate all Policies associated with a project.
		 * Get {project}/policies
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
		 * @param {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
		 * @return {void} Successful response
		 */
		Dns_policies_list(project: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/policies&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new Policy
		 * Post {project}/policies
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_policies_create(project: string, clientOperationId: string | null | undefined, requestBody: Policy): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/policies&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a previously created Policy. Will fail if the policy is still being referenced by a network.
		 * Delete {project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_policies_delete(project: string, policy: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the representation of an existing Policy.
		 * Get {project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_policies_get(project: string, policy: string, clientOperationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Apply a partial update to an existing Policy.
		 * Patch {project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_policies_patch(project: string, policy: string, clientOperationId: string | null | undefined, requestBody: Policy): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing Policy.
		 * Put {project}/policies/{policy}
		 * @param {string} project Identifies the project addressed by this request.
		 * @param {string} policy User given friendly name of the policy addressed by this request.
		 * @param {string} clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
		 * @return {void} Successful response
		 */
		Dns_policies_update(project: string, policy: string, clientOperationId: string | null | undefined, requestBody: Policy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/policies/' + (policy == null ? '' : encodeURIComponent(policy)) + '&clientOperationId=' + (clientOperationId == null ? '' : encodeURIComponent(clientOperationId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Dns_changes_listSortBy { CHANGE_SEQUENCE = 0 }

	export enum Dns_managedZoneOperations_listSortBy { ID = 0, START_TIME = 1 }

}

