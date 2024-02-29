import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An A record. */
	export interface ARecord {

		/** The IPv4 address of this A record. */
		ipv4Address?: string | null;
	}

	/** An A record. */
	export interface ARecordFormProperties {

		/** The IPv4 address of this A record. */
		ipv4Address: FormControl<string | null | undefined>,
	}
	export function CreateARecordFormGroup() {
		return new FormGroup<ARecordFormProperties>({
			ipv4Address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AAAA record. */
	export interface AaaaRecord {

		/** The IPv6 address of this AAAA record. */
		ipv6Address?: string | null;
	}

	/** An AAAA record. */
	export interface AaaaRecordFormProperties {

		/** The IPv6 address of this AAAA record. */
		ipv6Address: FormControl<string | null | undefined>,
	}
	export function CreateAaaaRecordFormGroup() {
		return new FormGroup<AaaaRecordFormProperties>({
			ipv6Address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CAA record. */
	export interface CaaRecord {

		/**
		 * The flags for this CAA record as an integer between 0 and 255.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		flags?: number | null;

		/** The tag for this CAA record. */
		tag?: string | null;

		/** The value for this CAA record. */
		value?: string | null;
	}

	/** A CAA record. */
	export interface CaaRecordFormProperties {

		/**
		 * The flags for this CAA record as an integer between 0 and 255.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		flags: FormControl<number | null | undefined>,

		/** The tag for this CAA record. */
		tag: FormControl<string | null | undefined>,

		/** The value for this CAA record. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCaaRecordFormGroup() {
		return new FormGroup<CaaRecordFormProperties>({
			flags: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error message */
	export interface CloudError {

		/** The body of an error message */
		error?: CloudErrorBody;
	}

	/** An error message */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** The body of an error message */
	export interface CloudErrorBody {

		/** The error code */
		code?: string | null;

		/** Extra error information */
		details?: Array<CloudErrorBody>;

		/** A description of what caused the error */
		message?: string | null;

		/** The target resource of the error message */
		target?: string | null;
	}

	/** The body of an error message */
	export interface CloudErrorBodyFormProperties {

		/** The error code */
		code: FormControl<string | null | undefined>,

		/** A description of what caused the error */
		message: FormControl<string | null | undefined>,

		/** The target resource of the error message */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CNAME record. */
	export interface CnameRecord {

		/** The canonical name for this CNAME record. */
		cname?: string | null;
	}

	/** A CNAME record. */
	export interface CnameRecordFormProperties {

		/** The canonical name for this CNAME record. */
		cname: FormControl<string | null | undefined>,
	}
	export function CreateCnameRecordFormGroup() {
		return new FormGroup<CnameRecordFormProperties>({
			cname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single Azure resource and its referencing DNS records. */
	export interface DnsResourceReference {

		/** A list of dns Records */
		dnsResources?: Array<SubResource>;

		/** A reference to a another resource */
		targetResource?: SubResource;
	}

	/** Represents a single Azure resource and its referencing DNS records. */
	export interface DnsResourceReferenceFormProperties {
	}
	export function CreateDnsResourceReferenceFormGroup() {
		return new FormGroup<DnsResourceReferenceFormProperties>({
		});

	}


	/** A reference to a another resource */
	export interface SubResource {

		/** Resource Id. */
		id?: string | null;
	}

	/** A reference to a another resource */
	export interface SubResourceFormProperties {

		/** Resource Id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of the Dns Resource Reference Request. */
	export interface DnsResourceReferenceRequest {

		/** Represents the properties of the Dns Resource Reference Request. */
		properties?: DnsResourceReferenceRequestProperties;
	}

	/** Represents the properties of the Dns Resource Reference Request. */
	export interface DnsResourceReferenceRequestFormProperties {
	}
	export function CreateDnsResourceReferenceRequestFormGroup() {
		return new FormGroup<DnsResourceReferenceRequestFormProperties>({
		});

	}


	/** Represents the properties of the Dns Resource Reference Request. */
	export interface DnsResourceReferenceRequestProperties {

		/** A list of references to azure resources for which referencing dns records need to be queried. */
		targetResources?: Array<SubResource>;
	}

	/** Represents the properties of the Dns Resource Reference Request. */
	export interface DnsResourceReferenceRequestPropertiesFormProperties {
	}
	export function CreateDnsResourceReferenceRequestPropertiesFormGroup() {
		return new FormGroup<DnsResourceReferenceRequestPropertiesFormProperties>({
		});

	}


	/** Represents the properties of the Dns Resource Reference Result. */
	export interface DnsResourceReferenceResult {

		/** The result of dns resource reference request. Returns a list of dns resource references for each of the azure resource in the request. */
		properties?: DnsResourceReferenceResultProperties;
	}

	/** Represents the properties of the Dns Resource Reference Result. */
	export interface DnsResourceReferenceResultFormProperties {
	}
	export function CreateDnsResourceReferenceResultFormGroup() {
		return new FormGroup<DnsResourceReferenceResultFormProperties>({
		});

	}


	/** The result of dns resource reference request. Returns a list of dns resource references for each of the azure resource in the request. */
	export interface DnsResourceReferenceResultProperties {

		/** The result of dns resource reference request. A list of dns resource references for each of the azure resource in the request */
		dnsResourceReferences?: Array<DnsResourceReference>;
	}

	/** The result of dns resource reference request. Returns a list of dns resource references for each of the azure resource in the request. */
	export interface DnsResourceReferenceResultPropertiesFormProperties {
	}
	export function CreateDnsResourceReferenceResultPropertiesFormGroup() {
		return new FormGroup<DnsResourceReferenceResultPropertiesFormProperties>({
		});

	}


	/** An MX record. */
	export interface MxRecord {

		/** The domain name of the mail host for this MX record. */
		exchange?: string | null;

		/**
		 * The preference value for this MX record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preference?: number | null;
	}

	/** An MX record. */
	export interface MxRecordFormProperties {

		/** The domain name of the mail host for this MX record. */
		exchange: FormControl<string | null | undefined>,

		/**
		 * The preference value for this MX record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preference: FormControl<number | null | undefined>,
	}
	export function CreateMxRecordFormGroup() {
		return new FormGroup<MxRecordFormProperties>({
			exchange: new FormControl<string | null | undefined>(undefined),
			preference: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An NS record. */
	export interface NsRecord {

		/** The name server name for this NS record. */
		nsdname?: string | null;
	}

	/** An NS record. */
	export interface NsRecordFormProperties {

		/** The name server name for this NS record. */
		nsdname: FormControl<string | null | undefined>,
	}
	export function CreateNsRecordFormGroup() {
		return new FormGroup<NsRecordFormProperties>({
			nsdname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A PTR record. */
	export interface PtrRecord {

		/** The PTR target domain name for this PTR record. */
		ptrdname?: string | null;
	}

	/** A PTR record. */
	export interface PtrRecordFormProperties {

		/** The PTR target domain name for this PTR record. */
		ptrdname: FormControl<string | null | undefined>,
	}
	export function CreatePtrRecordFormGroup() {
		return new FormGroup<PtrRecordFormProperties>({
			ptrdname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a DNS record set (a collection of DNS records with the same name and type). */
	export interface RecordSet {

		/** The etag of the record set. */
		etag?: string | null;

		/** The ID of the record set. */
		id?: string | null;

		/** The name of the record set. */
		name?: string | null;

		/** Represents the properties of the records in the record set. */
		properties?: RecordSetProperties;

		/** The type of the record set. */
		type?: string | null;
	}

	/** Describes a DNS record set (a collection of DNS records with the same name and type). */
	export interface RecordSetFormProperties {

		/** The etag of the record set. */
		etag: FormControl<string | null | undefined>,

		/** The ID of the record set. */
		id: FormControl<string | null | undefined>,

		/** The name of the record set. */
		name: FormControl<string | null | undefined>,

		/** The type of the record set. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRecordSetFormGroup() {
		return new FormGroup<RecordSetFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a record set List operation. */
	export interface RecordSetListResult {

		/** The continuation token for the next page of results. */
		nextLink?: string | null;

		/** Information about the record sets in the response. */
		value?: Array<RecordSet>;
	}

	/** The response to a record set List operation. */
	export interface RecordSetListResultFormProperties {

		/** The continuation token for the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRecordSetListResultFormGroup() {
		return new FormGroup<RecordSetListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of the records in the record set. */
	export interface RecordSetProperties {

		/** The list of AAAA records in the record set. */
		AAAARecords?: Array<AaaaRecord>;

		/** The list of A records in the record set. */
		ARecords?: Array<ARecord>;

		/** A CNAME record. */
		CNAMERecord?: CnameRecord;

		/** The list of MX records in the record set. */
		MXRecords?: Array<MxRecord>;

		/** The list of NS records in the record set. */
		NSRecords?: Array<NsRecord>;

		/** The list of PTR records in the record set. */
		PTRRecords?: Array<PtrRecord>;

		/** An SOA record. */
		SOARecord?: SoaRecord;

		/** The list of SRV records in the record set. */
		SRVRecords?: Array<SrvRecord>;

		/**
		 * The TTL (time-to-live) of the records in the record set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		TTL?: string | null;

		/** The list of TXT records in the record set. */
		TXTRecords?: Array<TxtRecord>;

		/** The list of CAA records in the record set. */
		caaRecords?: Array<CaaRecord>;

		/** Fully qualified domain name of the record set. */
		fqdn?: string | null;

		/** The metadata attached to the record set. */
		metadata?: {[id: string]: string };

		/** provisioning State of the record set. */
		provisioningState?: string | null;

		/** A reference to a another resource */
		targetResource?: SubResource;
	}

	/** Represents the properties of the records in the record set. */
	export interface RecordSetPropertiesFormProperties {

		/**
		 * The TTL (time-to-live) of the records in the record set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		TTL: FormControl<string | null | undefined>,

		/** Fully qualified domain name of the record set. */
		fqdn: FormControl<string | null | undefined>,

		/** The metadata attached to the record set. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** provisioning State of the record set. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateRecordSetPropertiesFormGroup() {
		return new FormGroup<RecordSetPropertiesFormProperties>({
			TTL: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An SRV record. */
	export interface SrvRecord {

		/**
		 * The port value for this SRV record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/**
		 * The priority value for this SRV record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** The target domain name for this SRV record. */
		target?: string | null;

		/**
		 * The weight value for this SRV record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}

	/** An SRV record. */
	export interface SrvRecordFormProperties {

		/**
		 * The port value for this SRV record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * The priority value for this SRV record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** The target domain name for this SRV record. */
		target: FormControl<string | null | undefined>,

		/**
		 * The weight value for this SRV record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateSrvRecordFormGroup() {
		return new FormGroup<SrvRecordFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A TXT record. */
	export interface TxtRecord {

		/** The text value of this TXT record. */
		value?: Array<string>;
	}

	/** A TXT record. */
	export interface TxtRecordFormProperties {
	}
	export function CreateTxtRecordFormGroup() {
		return new FormGroup<TxtRecordFormProperties>({
		});

	}


	/** Parameters supplied to update a record set. */
	export interface RecordSetUpdateParameters {

		/** Describes a DNS record set (a collection of DNS records with the same name and type). */
		RecordSet?: RecordSet;
	}

	/** Parameters supplied to update a record set. */
	export interface RecordSetUpdateParametersFormProperties {
	}
	export function CreateRecordSetUpdateParametersFormGroup() {
		return new FormGroup<RecordSetUpdateParametersFormProperties>({
		});

	}


	/** Common properties of an Azure Resource Manager resource */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** Common properties of an Azure Resource Manager resource */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An SOA record. */
	export interface SoaRecord {

		/** The email contact for this SOA record. */
		email?: string | null;

		/**
		 * The expire time for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expireTime?: string | null;

		/** The domain name of the authoritative name server for this SOA record. */
		host?: string | null;

		/**
		 * The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minimumTTL?: string | null;

		/**
		 * The refresh value for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		refreshTime?: string | null;

		/**
		 * The retry time for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		retryTime?: string | null;

		/**
		 * The serial number for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		serialNumber?: string | null;
	}

	/** An SOA record. */
	export interface SoaRecordFormProperties {

		/** The email contact for this SOA record. */
		email: FormControl<string | null | undefined>,

		/**
		 * The expire time for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expireTime: FormControl<string | null | undefined>,

		/** The domain name of the authoritative name server for this SOA record. */
		host: FormControl<string | null | undefined>,

		/**
		 * The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minimumTTL: FormControl<string | null | undefined>,

		/**
		 * The refresh value for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		refreshTime: FormControl<string | null | undefined>,

		/**
		 * The retry time for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		retryTime: FormControl<string | null | undefined>,

		/**
		 * The serial number for this SOA record.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateSoaRecordFormGroup() {
		return new FormGroup<SoaRecordFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			minimumTTL: new FormControl<string | null | undefined>(undefined),
			refreshTime: new FormControl<string | null | undefined>(undefined),
			retryTime: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a DNS zone. */
	export interface Zone extends Resource {

		/** The etag of the zone. */
		etag?: string | null;

		/** Represents the properties of the zone. */
		properties?: ZoneProperties;
	}

	/** Describes a DNS zone. */
	export interface ZoneFormProperties extends ResourceFormProperties {

		/** The etag of the zone. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateZoneFormGroup() {
		return new FormGroup<ZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a Zone List or ListAll operation. */
	export interface ZoneListResult {

		/** The continuation token for the next page of results. */
		nextLink?: string | null;

		/** Information about the DNS zones. */
		value?: Array<Zone>;
	}

	/** The response to a Zone List or ListAll operation. */
	export interface ZoneListResultFormProperties {

		/** The continuation token for the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateZoneListResultFormGroup() {
		return new FormGroup<ZoneListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of the zone. */
	export interface ZoneProperties {

		/**
		 * The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxNumberOfRecordSets?: string | null;

		/** The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored. */
		nameServers?: Array<string>;

		/**
		 * The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numberOfRecordSets?: string | null;

		/** A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private. */
		registrationVirtualNetworks?: Array<SubResource>;

		/** A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private. */
		resolutionVirtualNetworks?: Array<SubResource>;

		/** The type of this DNS zone (Public or Private). */
		zoneType?: ZonePropertiesZoneType | null;
	}

	/** Represents the properties of the zone. */
	export interface ZonePropertiesFormProperties {

		/**
		 * The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxNumberOfRecordSets: FormControl<string | null | undefined>,

		/**
		 * The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numberOfRecordSets: FormControl<string | null | undefined>,

		/** The type of this DNS zone (Public or Private). */
		zoneType: FormControl<ZonePropertiesZoneType | null | undefined>,
	}
	export function CreateZonePropertiesFormGroup() {
		return new FormGroup<ZonePropertiesFormProperties>({
			maxNumberOfRecordSets: new FormControl<string | null | undefined>(undefined),
			numberOfRecordSets: new FormControl<string | null | undefined>(undefined),
			zoneType: new FormControl<ZonePropertiesZoneType | null | undefined>(undefined),
		});

	}

	export enum ZonePropertiesZoneType { Public = 'Public', Private = 'Private' }


	/** Describes a request to update a DNS zone. */
	export interface ZoneUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Describes a request to update a DNS zone. */
	export interface ZoneUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateZoneUpdateFormGroup() {
		return new FormGroup<ZoneUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the DNS zones in all resource groups in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones
		 * @param {number} top The maximum number of DNS zones to return. If not specified, returns up to 100 zones.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {ZoneListResult} Success.
		 */
		Zones_List(top: number | null | undefined, api_version: string, subscriptionId: string): Observable<ZoneListResult> {
			return this.http.get<ZoneListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/dnszones?top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the DNS records specified by the referencing targetResourceIds.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Network/getDnsResourceReference
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @param {DnsResourceReferenceRequest} requestBody Properties for dns resource reference request.
		 * @return {DnsResourceReferenceResult} Success.
		 */
		DnsResourceReference_GetByTargetResources(api_version: string, subscriptionId: string, requestBody: DnsResourceReferenceRequest): Observable<DnsResourceReferenceResult> {
			return this.http.post<DnsResourceReferenceResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/getDnsResourceReference?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the DNS zones within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {number} top The maximum number of record sets to return. If not specified, returns up to 100 record sets.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {ZoneListResult} Success.
		 */
		Zones_ListByResourceGroup(resourceGroupName: string, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<ZoneListResult> {
			return this.http.get<ZoneListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {Zone} Success.
		 */
		Zones_Get(resourceGroupName: string, zoneName: string, api_version: string, subscriptionId: string): Observable<Zone> {
			return this.http.get<Zone>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a DNS zone. Does not modify DNS records within the zone.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @param {Zone} requestBody Parameters supplied to the CreateOrUpdate operation.
		 * @return {Zone} The DNS zone has been updated.
		 */
		Zones_CreateOrUpdate(resourceGroupName: string, zoneName: string, api_version: string, subscriptionId: string, requestBody: Zone): Observable<Zone> {
			return this.http.put<Zone>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {void} The DNS zone has been deleted.
		 */
		Zones_Delete(resourceGroupName: string, zoneName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a DNS zone. Does not modify DNS records within the zone.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @param {ZoneUpdate} requestBody Parameters supplied to the Update operation.
		 * @return {Zone} The DNS zone has been updated.
		 */
		Zones_Update(resourceGroupName: string, zoneName: string, api_version: string, subscriptionId: string, requestBody: ZoneUpdate): Observable<Zone> {
			return this.http.patch<Zone>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all record sets in a DNS zone.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/all
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {number} top The maximum number of record sets to return. If not specified, returns up to 100 record sets.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} recordsetnamesuffix The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {RecordSetListResult} Success.
		 */
		RecordSets_ListAllByDnsZone(resourceGroupName: string, zoneName: string, top: number | null | undefined, recordsetnamesuffix: string | null | undefined, api_version: string, subscriptionId: string): Observable<RecordSetListResult> {
			return this.http.get<RecordSetListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '/all&top=' + top + '&recordsetnamesuffix=' + (recordsetnamesuffix == null ? '' : encodeURIComponent(recordsetnamesuffix)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all record sets in a DNS zone.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/recordsets
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {number} top The maximum number of record sets to return. If not specified, returns up to 100 record sets.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} recordsetnamesuffix The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {RecordSetListResult} Success.
		 */
		RecordSets_ListByDnsZone(resourceGroupName: string, zoneName: string, top: number | null | undefined, recordsetnamesuffix: string | null | undefined, api_version: string, subscriptionId: string): Observable<RecordSetListResult> {
			return this.http.get<RecordSetListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '/recordsets&top=' + top + '&recordsetnamesuffix=' + (recordsetnamesuffix == null ? '' : encodeURIComponent(recordsetnamesuffix)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the record sets of a specified type in a DNS zone.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {RecordSets_ListByTypeRecordType} recordType The type of record sets to enumerate.
		 * @param {number} top The maximum number of record sets to return. If not specified, returns up to 100 record sets.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} recordsetnamesuffix The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {RecordSetListResult} Success.
		 */
		RecordSets_ListByType(resourceGroupName: string, zoneName: string, recordType: RecordSets_ListByTypeRecordType, top: number | null | undefined, recordsetnamesuffix: string | null | undefined, api_version: string, subscriptionId: string): Observable<RecordSetListResult> {
			return this.http.get<RecordSetListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '/' + recordType + '&top=' + top + '&recordsetnamesuffix=' + (recordsetnamesuffix == null ? '' : encodeURIComponent(recordsetnamesuffix)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a record set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} relativeRecordSetName The name of the record set, relative to the name of the zone.
		 * @param {RecordSets_ListByTypeRecordType} recordType The type of DNS record in this record set.
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {RecordSet} Success.
		 */
		RecordSets_Get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: RecordSets_ListByTypeRecordType, api_version: string, subscriptionId: string): Observable<RecordSet> {
			return this.http.get<RecordSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '/' + recordType + '/' + (relativeRecordSetName == null ? '' : encodeURIComponent(relativeRecordSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a record set within a DNS zone.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} relativeRecordSetName The name of the record set, relative to the name of the zone.
		 * @param {RecordSets_ListByTypeRecordType} recordType The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the DNS zone is created).
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @param {RecordSet} requestBody Parameters supplied to the CreateOrUpdate operation.
		 * @return {RecordSet} The record set has been updated.
		 */
		RecordSets_CreateOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: RecordSets_ListByTypeRecordType, api_version: string, subscriptionId: string, requestBody: RecordSet): Observable<RecordSet> {
			return this.http.put<RecordSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '/' + recordType + '/' + (relativeRecordSetName == null ? '' : encodeURIComponent(relativeRecordSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a record set from a DNS zone. This operation cannot be undone.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} relativeRecordSetName The name of the record set, relative to the name of the zone.
		 * @param {RecordSets_ListByTypeRecordType} recordType The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the DNS zone is deleted).
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @return {void} The record set has been deleted.
		 */
		RecordSets_Delete(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: RecordSets_ListByTypeRecordType, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '/' + recordType + '/' + (relativeRecordSetName == null ? '' : encodeURIComponent(relativeRecordSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a record set within a DNS zone.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} zoneName The name of the DNS zone (without a terminating dot).
		 * @param {string} relativeRecordSetName The name of the record set, relative to the name of the zone.
		 * @param {RecordSets_ListByTypeRecordType} recordType The type of DNS record in this record set.
		 * @param {string} api_version Specifies the API version.
		 * @param {string} subscriptionId Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
		 * @param {RecordSet} requestBody Parameters supplied to the Update operation.
		 * @return {RecordSet} The record set has been updated.
		 */
		RecordSets_Update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: RecordSets_ListByTypeRecordType, api_version: string, subscriptionId: string, requestBody: RecordSet): Observable<RecordSet> {
			return this.http.patch<RecordSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/dnsZones/' + (zoneName == null ? '' : encodeURIComponent(zoneName)) + '/' + recordType + '/' + (relativeRecordSetName == null ? '' : encodeURIComponent(relativeRecordSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum RecordSets_ListByTypeRecordType { A = 'A', AAAA = 'AAAA', CAA = 'CAA', CNAME = 'CNAME', MX = 'MX', NS = 'NS', PTR = 'PTR', SOA = 'SOA', SRV = 'SRV', TXT = 'TXT' }

}

