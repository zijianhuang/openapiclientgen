import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** State of the latest attempt to authorize a domain for certificate issuance. */
	export interface AuthorizationAttemptInfo {

		/** Output only. Human readable explanation for reaching the state. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use FailureReason enum. */
		details?: string | null;

		/** Domain name of the authorization attempt. */
		domain?: string | null;

		/** Output only. Reason for failure of the authorization attempt for the domain. */
		failureReason?: AuthorizationAttemptInfoFailureReason | null;

		/** Output only. State of the domain for managed certificate issuance. */
		state?: AuthorizationAttemptInfoState | null;
	}

	/** State of the latest attempt to authorize a domain for certificate issuance. */
	export interface AuthorizationAttemptInfoFormProperties {

		/** Output only. Human readable explanation for reaching the state. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use FailureReason enum. */
		details: FormControl<string | null | undefined>,

		/** Domain name of the authorization attempt. */
		domain: FormControl<string | null | undefined>,

		/** Output only. Reason for failure of the authorization attempt for the domain. */
		failureReason: FormControl<AuthorizationAttemptInfoFailureReason | null | undefined>,

		/** Output only. State of the domain for managed certificate issuance. */
		state: FormControl<AuthorizationAttemptInfoState | null | undefined>,
	}
	export function CreateAuthorizationAttemptInfoFormGroup() {
		return new FormGroup<AuthorizationAttemptInfoFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<AuthorizationAttemptInfoFailureReason | null | undefined>(undefined),
			state: new FormControl<AuthorizationAttemptInfoState | null | undefined>(undefined),
		});

	}

	export enum AuthorizationAttemptInfoFailureReason { FAILURE_REASON_UNSPECIFIED = 0, CONFIG = 1, CAA = 2, RATE_LIMITED = 3 }

	export enum AuthorizationAttemptInfoState { STATE_UNSPECIFIED = 0, AUTHORIZING = 1, AUTHORIZED = 2, FAILED = 3 }


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** Defines TLS certificate. */
	export interface Certificate {

		/** Output only. The creation timestamp of a Certificate. */
		createTime?: string | null;

		/** One or more paragraphs of text description of a certificate. */
		description?: string | null;

		/** Output only. The expiry timestamp of a Certificate. */
		expireTime?: string | null;

		/** Set of labels associated with a Certificate. */
		labels?: {[id: string]: string };

		/** Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so. */
		managed?: ManagedCertificate;

		/** A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/locations/certificates/*`. */
		name?: string | null;

		/** Output only. The PEM-encoded certificate chain. */
		pemCertificate?: string | null;

		/** Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field. */
		sanDnsnames?: Array<string>;

		/** Immutable. The scope of the certificate. */
		scope?: CertificateScope | null;

		/** Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility. */
		selfManaged?: SelfManagedCertificate;

		/** Output only. The last update timestamp of a Certificate. */
		updateTime?: string | null;
	}

	/** Defines TLS certificate. */
	export interface CertificateFormProperties {

		/** Output only. The creation timestamp of a Certificate. */
		createTime: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of a certificate. */
		description: FormControl<string | null | undefined>,

		/** Output only. The expiry timestamp of a Certificate. */
		expireTime: FormControl<string | null | undefined>,

		/** Set of labels associated with a Certificate. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/locations/certificates/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The PEM-encoded certificate chain. */
		pemCertificate: FormControl<string | null | undefined>,

		/** Immutable. The scope of the certificate. */
		scope: FormControl<CertificateScope | null | undefined>,

		/** Output only. The last update timestamp of a Certificate. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pemCertificate: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<CertificateScope | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so. */
	export interface ManagedCertificate {

		/** Output only. Detailed state of the latest authorization attempt for each domain specified for managed certificate resource. */
		authorizationAttemptInfo?: Array<AuthorizationAttemptInfo>;

		/** Immutable. Authorizations that will be used for performing domain authorization. */
		dnsAuthorizations?: Array<string>;

		/** Immutable. The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. */
		domains?: Array<string>;

		/** Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format `projects/locations/certificateIssuanceConfigs/*`. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa. */
		issuanceConfig?: string | null;

		/** Information about issues with provisioning a Managed Certificate. */
		provisioningIssue?: ProvisioningIssue;

		/** Output only. State of the managed certificate resource. */
		state?: ManagedCertificateState | null;
	}

	/** Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so. */
	export interface ManagedCertificateFormProperties {

		/** Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format `projects/locations/certificateIssuanceConfigs/*`. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa. */
		issuanceConfig: FormControl<string | null | undefined>,

		/** Output only. State of the managed certificate resource. */
		state: FormControl<ManagedCertificateState | null | undefined>,
	}
	export function CreateManagedCertificateFormGroup() {
		return new FormGroup<ManagedCertificateFormProperties>({
			issuanceConfig: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ManagedCertificateState | null | undefined>(undefined),
		});

	}


	/** Information about issues with provisioning a Managed Certificate. */
	export interface ProvisioningIssue {

		/** Output only. Human readable explanation about the issue. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use Reason enum. */
		details?: string | null;

		/** Output only. Reason for provisioning failures. */
		reason?: ProvisioningIssueReason | null;
	}

	/** Information about issues with provisioning a Managed Certificate. */
	export interface ProvisioningIssueFormProperties {

		/** Output only. Human readable explanation about the issue. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use Reason enum. */
		details: FormControl<string | null | undefined>,

		/** Output only. Reason for provisioning failures. */
		reason: FormControl<ProvisioningIssueReason | null | undefined>,
	}
	export function CreateProvisioningIssueFormGroup() {
		return new FormGroup<ProvisioningIssueFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<ProvisioningIssueReason | null | undefined>(undefined),
		});

	}

	export enum ProvisioningIssueReason { REASON_UNSPECIFIED = 0, AUTHORIZATION_ISSUE = 1, RATE_LIMITED = 2 }

	export enum ManagedCertificateState { STATE_UNSPECIFIED = 0, PROVISIONING = 1, FAILED = 2, ACTIVE = 3 }

	export enum CertificateScope { DEFAULT = 0, EDGE_CACHE = 1, ALL_REGIONS = 2 }


	/** Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility. */
	export interface SelfManagedCertificate {

		/** Input only. The PEM-encoded certificate chain. Leaf certificate comes first, followed by intermediate ones if any. */
		pemCertificate?: string | null;

		/** Input only. The PEM-encoded private key of the leaf certificate. */
		pemPrivateKey?: string | null;
	}

	/** Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility. */
	export interface SelfManagedCertificateFormProperties {

		/** Input only. The PEM-encoded certificate chain. Leaf certificate comes first, followed by intermediate ones if any. */
		pemCertificate: FormControl<string | null | undefined>,

		/** Input only. The PEM-encoded private key of the leaf certificate. */
		pemPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedCertificateFormGroup() {
		return new FormGroup<SelfManagedCertificateFormProperties>({
			pemCertificate: new FormControl<string | null | undefined>(undefined),
			pemPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc. */
	export interface CertificateAuthorityConfig {

		/** Contains information required to contact CA service. */
		certificateAuthorityServiceConfig?: CertificateAuthorityServiceConfig;
	}

	/** The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc. */
	export interface CertificateAuthorityConfigFormProperties {
	}
	export function CreateCertificateAuthorityConfigFormGroup() {
		return new FormGroup<CertificateAuthorityConfigFormProperties>({
		});

	}


	/** Contains information required to contact CA service. */
	export interface CertificateAuthorityServiceConfig {

		/** Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}". */
		caPool?: string | null;
	}

	/** Contains information required to contact CA service. */
	export interface CertificateAuthorityServiceConfigFormProperties {

		/** Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}". */
		caPool: FormControl<string | null | undefined>,
	}
	export function CreateCertificateAuthorityServiceConfigFormGroup() {
		return new FormGroup<CertificateAuthorityServiceConfigFormProperties>({
			caPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CertificateIssuanceConfig specifies how to issue and manage a certificate. */
	export interface CertificateIssuanceConfig {

		/** The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc. */
		certificateAuthorityConfig?: CertificateAuthorityConfig;

		/** Output only. The creation timestamp of a CertificateIssuanceConfig. */
		createTime?: string | null;

		/** One or more paragraphs of text description of a CertificateIssuanceConfig. */
		description?: string | null;

		/** Required. The key algorithm to use when generating the private key. */
		keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithm | null;

		/** Set of labels associated with a CertificateIssuanceConfig. */
		labels?: {[id: string]: string };

		/** Required. Workload certificate lifetime requested. */
		lifetime?: string | null;

		/** A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/locations/certificateIssuanceConfigs/*`. */
		name?: string | null;

		/** Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive. */
		rotationWindowPercentage?: number | null;

		/** Output only. The last update timestamp of a CertificateIssuanceConfig. */
		updateTime?: string | null;
	}

	/** CertificateIssuanceConfig specifies how to issue and manage a certificate. */
	export interface CertificateIssuanceConfigFormProperties {

		/** Output only. The creation timestamp of a CertificateIssuanceConfig. */
		createTime: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of a CertificateIssuanceConfig. */
		description: FormControl<string | null | undefined>,

		/** Required. The key algorithm to use when generating the private key. */
		keyAlgorithm: FormControl<CertificateIssuanceConfigKeyAlgorithm | null | undefined>,

		/** Set of labels associated with a CertificateIssuanceConfig. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Workload certificate lifetime requested. */
		lifetime: FormControl<string | null | undefined>,

		/** A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/locations/certificateIssuanceConfigs/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive. */
		rotationWindowPercentage: FormControl<number | null | undefined>,

		/** Output only. The last update timestamp of a CertificateIssuanceConfig. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateIssuanceConfigFormGroup() {
		return new FormGroup<CertificateIssuanceConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			keyAlgorithm: new FormControl<CertificateIssuanceConfigKeyAlgorithm | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lifetime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rotationWindowPercentage: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateIssuanceConfigKeyAlgorithm { KEY_ALGORITHM_UNSPECIFIED = 0, RSA_2048 = 1, ECDSA_P256 = 2 }


	/** Defines a collection of certificate configurations. */
	export interface CertificateMap {

		/** Output only. The creation timestamp of a Certificate Map. */
		createTime?: string | null;

		/** One or more paragraphs of text description of a certificate map. */
		description?: string | null;

		/** Output only. A list of GCLB targets that use this Certificate Map. A Target Proxy is only present on this list if it's attached to a Forwarding Rule. */
		gclbTargets?: Array<GclbTarget>;

		/** Set of labels associated with a Certificate Map. */
		labels?: {[id: string]: string };

		/** A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/locations/certificateMaps/*`. */
		name?: string | null;

		/** Output only. The update timestamp of a Certificate Map. */
		updateTime?: string | null;
	}

	/** Defines a collection of certificate configurations. */
	export interface CertificateMapFormProperties {

		/** Output only. The creation timestamp of a Certificate Map. */
		createTime: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of a certificate map. */
		description: FormControl<string | null | undefined>,

		/** Set of labels associated with a Certificate Map. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/locations/certificateMaps/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The update timestamp of a Certificate Map. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateMapFormGroup() {
		return new FormGroup<CertificateMapFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Target Proxy that uses this Certificate Map. */
	export interface GclbTarget {

		/** Output only. IP configurations for this Target Proxy where the Certificate Map is serving. */
		ipConfigs?: Array<IpConfig>;

		/** Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/global/targetHttpsProxies/*`. */
		targetHttpsProxy?: string | null;

		/** Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/global/targetSslProxies/*`. */
		targetSslProxy?: string | null;
	}

	/** Describes a Target Proxy that uses this Certificate Map. */
	export interface GclbTargetFormProperties {

		/** Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/global/targetHttpsProxies/*`. */
		targetHttpsProxy: FormControl<string | null | undefined>,

		/** Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/global/targetSslProxies/*`. */
		targetSslProxy: FormControl<string | null | undefined>,
	}
	export function CreateGclbTargetFormGroup() {
		return new FormGroup<GclbTargetFormProperties>({
			targetHttpsProxy: new FormControl<string | null | undefined>(undefined),
			targetSslProxy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines IP configuration where this Certificate Map is serving. */
	export interface IpConfig {

		/** Output only. An external IP address. */
		ipAddress?: string | null;

		/** Output only. Ports. */
		ports?: Array<number>;
	}

	/** Defines IP configuration where this Certificate Map is serving. */
	export interface IpConfigFormProperties {

		/** Output only. An external IP address. */
		ipAddress: FormControl<string | null | undefined>,
	}
	export function CreateIpConfigFormGroup() {
		return new FormGroup<IpConfigFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a certificate map entry. */
	export interface CertificateMapEntry {

		/** A set of Certificates defines for the given `hostname`. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern `projects/locations/certificates/*`. */
		certificates?: Array<string>;

		/** Output only. The creation timestamp of a Certificate Map Entry. */
		createTime?: string | null;

		/** One or more paragraphs of text description of a certificate map entry. */
		description?: string | null;

		/** A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. */
		hostname?: string | null;

		/** Set of labels associated with a Certificate Map Entry. */
		labels?: {[id: string]: string };

		/** A predefined matcher for particular cases, other than SNI selection. */
		matcher?: CertificateMapEntryMatcher | null;

		/** A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/locations/certificateMaps/certificateMapEntries/*`. */
		name?: string | null;

		/** Output only. A serving state of this Certificate Map Entry. */
		state?: CertificateMapEntryState | null;

		/** Output only. The update timestamp of a Certificate Map Entry. */
		updateTime?: string | null;
	}

	/** Defines a certificate map entry. */
	export interface CertificateMapEntryFormProperties {

		/** Output only. The creation timestamp of a Certificate Map Entry. */
		createTime: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of a certificate map entry. */
		description: FormControl<string | null | undefined>,

		/** A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. */
		hostname: FormControl<string | null | undefined>,

		/** Set of labels associated with a Certificate Map Entry. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A predefined matcher for particular cases, other than SNI selection. */
		matcher: FormControl<CertificateMapEntryMatcher | null | undefined>,

		/** A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/locations/certificateMaps/certificateMapEntries/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. A serving state of this Certificate Map Entry. */
		state: FormControl<CertificateMapEntryState | null | undefined>,

		/** Output only. The update timestamp of a Certificate Map Entry. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateMapEntryFormGroup() {
		return new FormGroup<CertificateMapEntryFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			matcher: new FormControl<CertificateMapEntryMatcher | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CertificateMapEntryState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateMapEntryMatcher { MATCHER_UNSPECIFIED = 0, PRIMARY = 1 }

	export enum CertificateMapEntryState { SERVING_STATE_UNSPECIFIED = 0, ACTIVE = 1, PENDING = 2 }


	/** A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance. */
	export interface DnsAuthorization {

		/** Output only. The creation timestamp of a DnsAuthorization. */
		createTime?: string | null;

		/** One or more paragraphs of text description of a DnsAuthorization. */
		description?: string | null;

		/** The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate. */
		dnsResourceRecord?: DnsResourceRecord;

		/** Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`. */
		domain?: string | null;

		/** Set of labels associated with a DnsAuthorization. */
		labels?: {[id: string]: string };

		/** A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/locations/dnsAuthorizations/*`. */
		name?: string | null;

		/** Output only. The last update timestamp of a DnsAuthorization. */
		updateTime?: string | null;
	}

	/** A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance. */
	export interface DnsAuthorizationFormProperties {

		/** Output only. The creation timestamp of a DnsAuthorization. */
		createTime: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of a DnsAuthorization. */
		description: FormControl<string | null | undefined>,

		/** Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`. */
		domain: FormControl<string | null | undefined>,

		/** Set of labels associated with a DnsAuthorization. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/locations/dnsAuthorizations/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of a DnsAuthorization. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDnsAuthorizationFormGroup() {
		return new FormGroup<DnsAuthorizationFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate. */
	export interface DnsResourceRecord {

		/** Output only. Data of the DNS Resource Record. */
		data?: string | null;

		/** Output only. Fully qualified name of the DNS Resource Record. e.g. `_acme-challenge.example.com` */
		name?: string | null;

		/** Output only. Type of the DNS Resource Record. Currently always set to "CNAME". */
		type?: string | null;
	}

	/** The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate. */
	export interface DnsResourceRecordFormProperties {

		/** Output only. Data of the DNS Resource Record. */
		data: FormControl<string | null | undefined>,

		/** Output only. Fully qualified name of the DNS Resource Record. e.g. `_acme-challenge.example.com` */
		name: FormControl<string | null | undefined>,

		/** Output only. Type of the DNS Resource Record. Currently always set to "CNAME". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDnsResourceRecordFormGroup() {
		return new FormGroup<DnsResourceRecordFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Defines an intermediate CA. */
	export interface IntermediateCA {

		/** PEM intermediate certificate used for building up paths for validation. Each certificate provided in PEM format may occupy up to 5kB. */
		pemCertificate?: string | null;
	}

	/** Defines an intermediate CA. */
	export interface IntermediateCAFormProperties {

		/** PEM intermediate certificate used for building up paths for validation. Each certificate provided in PEM format may occupy up to 5kB. */
		pemCertificate: FormControl<string | null | undefined>,
	}
	export function CreateIntermediateCAFormGroup() {
		return new FormGroup<IntermediateCAFormProperties>({
			pemCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListCertificateIssuanceConfigs` method. */
	export interface ListCertificateIssuanceConfigsResponse {

		/** A list of certificate configs for the parent resource. */
		certificateIssuanceConfigs?: Array<CertificateIssuanceConfig>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for the `ListCertificateIssuanceConfigs` method. */
	export interface ListCertificateIssuanceConfigsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateIssuanceConfigsResponseFormGroup() {
		return new FormGroup<ListCertificateIssuanceConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListCertificateMapEntries` method. */
	export interface ListCertificateMapEntriesResponse {

		/** A list of certificate map entries for the parent resource. */
		certificateMapEntries?: Array<CertificateMapEntry>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for the `ListCertificateMapEntries` method. */
	export interface ListCertificateMapEntriesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateMapEntriesResponseFormGroup() {
		return new FormGroup<ListCertificateMapEntriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListCertificateMaps` method. */
	export interface ListCertificateMapsResponse {

		/** A list of certificate maps for the parent resource. */
		certificateMaps?: Array<CertificateMap>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for the `ListCertificateMaps` method. */
	export interface ListCertificateMapsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateMapsResponseFormGroup() {
		return new FormGroup<ListCertificateMapsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListCertificates` method. */
	export interface ListCertificatesResponse {

		/** A list of certificates for the parent resource. */
		certificates?: Array<Certificate>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** A list of locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for the `ListCertificates` method. */
	export interface ListCertificatesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResponseFormGroup() {
		return new FormGroup<ListCertificatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListDnsAuthorizations` method. */
	export interface ListDnsAuthorizationsResponse {

		/** A list of dns authorizations for the parent resource. */
		dnsAuthorizations?: Array<DnsAuthorization>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for the `ListDnsAuthorizations` method. */
	export interface ListDnsAuthorizationsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDnsAuthorizationsResponseFormGroup() {
		return new FormGroup<ListDnsAuthorizationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListTrustConfigs` method. */
	export interface ListTrustConfigsResponse {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** A list of TrustConfigs for the parent resource. */
		trustConfigs?: Array<TrustConfig>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for the `ListTrustConfigs` method. */
	export interface ListTrustConfigsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrustConfigsResponseFormGroup() {
		return new FormGroup<ListTrustConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a trust config. */
	export interface TrustConfig {

		/** Output only. The creation timestamp of a TrustConfig. */
		createTime?: string | null;

		/** One or more paragraphs of text description of a TrustConfig. */
		description?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Set of labels associated with a TrustConfig. */
		labels?: {[id: string]: string };

		/** A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/locations/trustConfigs/*`. */
		name?: string | null;

		/** Set of trust stores to perform validation against. This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed. */
		trustStores?: Array<TrustStore>;

		/** Output only. The last update timestamp of a TrustConfig. */
		updateTime?: string | null;
	}

	/** Defines a trust config. */
	export interface TrustConfigFormProperties {

		/** Output only. The creation timestamp of a TrustConfig. */
		createTime: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of a TrustConfig. */
		description: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Set of labels associated with a TrustConfig. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/locations/trustConfigs/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of a TrustConfig. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTrustConfigFormGroup() {
		return new FormGroup<TrustConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a trust store. */
	export interface TrustStore {

		/** Set of intermediate CA certificates used for the path building phase of chain validation. The field is currently not supported if TrustConfig is used for the workload certificate feature. */
		intermediateCas?: Array<IntermediateCA>;

		/** List of Trust Anchors to be used while performing validation against a given TrustStore. */
		trustAnchors?: Array<TrustAnchor>;
	}

	/** Defines a trust store. */
	export interface TrustStoreFormProperties {
	}
	export function CreateTrustStoreFormGroup() {
		return new FormGroup<TrustStoreFormProperties>({
		});

	}


	/** Defines a trust anchor. */
	export interface TrustAnchor {

		/** PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. */
		pemCertificate?: string | null;
	}

	/** Defines a trust anchor. */
	export interface TrustAnchorFormProperties {

		/** PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. */
		pemCertificate: FormControl<string | null | undefined>,
	}
	export function CreateTrustAnchorFormGroup() {
		return new FormGroup<TrustAnchorFormProperties>({
			pemCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. Output only. */
	export interface OperationMetadata {

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. Output only. */
	export interface OperationMetadataFormProperties {

		/** API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a single TrustConfig.
		 * Delete v1/{name}
		 * @param {string} name Required. A name of the TrustConfig to delete. Must be in the format `projects/locations/trustConfigs/*`.
		 * @param {string} etag The current etag of the TrustConfig. If an etag is provided and does not match the current etag of the resource, deletion will be blocked and an ABORTED error will be returned.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_trustConfigs_delete(name: string, etag: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Gets details of a single TrustConfig.
		 * Get v1/{name}
		 * @param {string} name Required. A name of the TrustConfig to describe. Must be in the format `projects/locations/trustConfigs/*`.
		 * @return {TrustConfig} Successful response
		 */
		Certificatemanager_projects_locations_trustConfigs_get(name: string): Observable<TrustConfig> {
			return this.http.get<TrustConfig>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a TrustConfig.
		 * Patch v1/{name}
		 * @param {string} name A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/locations/trustConfigs/*`.
		 * @param {string} updateMask Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_trustConfigs_patch(name: string, updateMask: string | null | undefined, requestBody: TrustConfig): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Certificatemanager_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Certificatemanager_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Certificatemanager_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CertificateIssuanceConfigs in a given project and location.
		 * Get v1/{parent}/certificateIssuanceConfigs
		 * @param {string} parent Required. The project and location from which the certificate should be listed, specified in the format `projects/locations/*`.
		 * @param {string} filter Filter expression to restrict the Certificates Configs returned.
		 * @param {string} orderBy A list of Certificate Config field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".
		 * @param {number} pageSize Maximum number of certificate configs to return per call.
		 * @param {string} pageToken The value returned by the last `ListCertificateIssuanceConfigsResponse`. Indicates that this is a continuation of a prior `ListCertificateIssuanceConfigs` call, and that the system should return the next page of data.
		 * @return {ListCertificateIssuanceConfigsResponse} Successful response
		 */
		Certificatemanager_projects_locations_certificateIssuanceConfigs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificateIssuanceConfigsResponse> {
			return this.http.get<ListCertificateIssuanceConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateIssuanceConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new CertificateIssuanceConfig in a given project and location.
		 * Post v1/{parent}/certificateIssuanceConfigs
		 * @param {string} parent Required. The parent resource of the certificate issuance config. Must be in the format `projects/locations/*`.
		 * @param {string} certificateIssuanceConfigId Required. A user-provided name of the certificate config.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_certificateIssuanceConfigs_create(parent: string, certificateIssuanceConfigId: string | null | undefined, requestBody: CertificateIssuanceConfig): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateIssuanceConfigs&certificateIssuanceConfigId=' + (certificateIssuanceConfigId == null ? '' : encodeURIComponent(certificateIssuanceConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CertificateMapEntries in a given project and location.
		 * Get v1/{parent}/certificateMapEntries
		 * @param {string} parent Required. The project, location and certificate map from which the certificate map entries should be listed, specified in the format `projects/locations/certificateMaps/*`.
		 * @param {string} filter Filter expression to restrict the returned Certificate Map Entries.
		 * @param {string} orderBy A list of Certificate Map Entry field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".
		 * @param {number} pageSize Maximum number of certificate map entries to return. The service may return fewer than this value. If unspecified, at most 50 certificate map entries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken The value returned by the last `ListCertificateMapEntriesResponse`. Indicates that this is a continuation of a prior `ListCertificateMapEntries` call, and that the system should return the next page of data.
		 * @return {ListCertificateMapEntriesResponse} Successful response
		 */
		Certificatemanager_projects_locations_certificateMaps_certificateMapEntries_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificateMapEntriesResponse> {
			return this.http.get<ListCertificateMapEntriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateMapEntries&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new CertificateMapEntry in a given project and location.
		 * Post v1/{parent}/certificateMapEntries
		 * @param {string} parent Required. The parent resource of the certificate map entry. Must be in the format `projects/locations/certificateMaps/*`.
		 * @param {string} certificateMapEntryId Required. A user-provided name of the certificate map entry.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_certificateMaps_certificateMapEntries_create(parent: string, certificateMapEntryId: string | null | undefined, requestBody: CertificateMapEntry): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateMapEntries&certificateMapEntryId=' + (certificateMapEntryId == null ? '' : encodeURIComponent(certificateMapEntryId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CertificateMaps in a given project and location.
		 * Get v1/{parent}/certificateMaps
		 * @param {string} parent Required. The project and location from which the certificate maps should be listed, specified in the format `projects/locations/*`.
		 * @param {string} filter Filter expression to restrict the Certificates Maps returned.
		 * @param {string} orderBy A list of Certificate Map field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".
		 * @param {number} pageSize Maximum number of certificate maps to return per call.
		 * @param {string} pageToken The value returned by the last `ListCertificateMapsResponse`. Indicates that this is a continuation of a prior `ListCertificateMaps` call, and that the system should return the next page of data.
		 * @return {ListCertificateMapsResponse} Successful response
		 */
		Certificatemanager_projects_locations_certificateMaps_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificateMapsResponse> {
			return this.http.get<ListCertificateMapsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateMaps&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new CertificateMap in a given project and location.
		 * Post v1/{parent}/certificateMaps
		 * @param {string} parent Required. The parent resource of the certificate map. Must be in the format `projects/locations/*`.
		 * @param {string} certificateMapId Required. A user-provided name of the certificate map.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_certificateMaps_create(parent: string, certificateMapId: string | null | undefined, requestBody: CertificateMap): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateMaps&certificateMapId=' + (certificateMapId == null ? '' : encodeURIComponent(certificateMapId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Certificates in a given project and location.
		 * Get v1/{parent}/certificates
		 * @param {string} parent Required. The project and location from which the certificate should be listed, specified in the format `projects/locations/*`.
		 * @param {string} filter Filter expression to restrict the Certificates returned.
		 * @param {string} orderBy A list of Certificate field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".
		 * @param {number} pageSize Maximum number of certificates to return per call.
		 * @param {string} pageToken The value returned by the last `ListCertificatesResponse`. Indicates that this is a continuation of a prior `ListCertificates` call, and that the system should return the next page of data.
		 * @return {ListCertificatesResponse} Successful response
		 */
		Certificatemanager_projects_locations_certificates_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificatesResponse> {
			return this.http.get<ListCertificatesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificates&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Certificate in a given project and location.
		 * Post v1/{parent}/certificates
		 * @param {string} parent Required. The parent resource of the certificate. Must be in the format `projects/locations/*`.
		 * @param {string} certificateId Required. A user-provided name of the certificate.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_certificates_create(parent: string, certificateId: string | null | undefined, requestBody: Certificate): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificates&certificateId=' + (certificateId == null ? '' : encodeURIComponent(certificateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DnsAuthorizations in a given project and location.
		 * Get v1/{parent}/dnsAuthorizations
		 * @param {string} parent Required. The project and location from which the dns authorizations should be listed, specified in the format `projects/locations/*`.
		 * @param {string} filter Filter expression to restrict the Dns Authorizations returned.
		 * @param {string} orderBy A list of Dns Authorization field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".
		 * @param {number} pageSize Maximum number of dns authorizations to return per call.
		 * @param {string} pageToken The value returned by the last `ListDnsAuthorizationsResponse`. Indicates that this is a continuation of a prior `ListDnsAuthorizations` call, and that the system should return the next page of data.
		 * @return {ListDnsAuthorizationsResponse} Successful response
		 */
		Certificatemanager_projects_locations_dnsAuthorizations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDnsAuthorizationsResponse> {
			return this.http.get<ListDnsAuthorizationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dnsAuthorizations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new DnsAuthorization in a given project and location.
		 * Post v1/{parent}/dnsAuthorizations
		 * @param {string} parent Required. The parent resource of the dns authorization. Must be in the format `projects/locations/*`.
		 * @param {string} dnsAuthorizationId Required. A user-provided name of the dns authorization.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_dnsAuthorizations_create(parent: string, dnsAuthorizationId: string | null | undefined, requestBody: DnsAuthorization): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dnsAuthorizations&dnsAuthorizationId=' + (dnsAuthorizationId == null ? '' : encodeURIComponent(dnsAuthorizationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists TrustConfigs in a given project and location.
		 * Get v1/{parent}/trustConfigs
		 * @param {string} parent Required. The project and location from which the TrustConfigs should be listed, specified in the format `projects/locations/*`.
		 * @param {string} filter Filter expression to restrict the TrustConfigs returned.
		 * @param {string} orderBy A list of TrustConfig field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".
		 * @param {number} pageSize Maximum number of TrustConfigs to return per call.
		 * @param {string} pageToken The value returned by the last `ListTrustConfigsResponse`. Indicates that this is a continuation of a prior `ListTrustConfigs` call, and that the system should return the next page of data.
		 * @return {ListTrustConfigsResponse} Successful response
		 */
		Certificatemanager_projects_locations_trustConfigs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTrustConfigsResponse> {
			return this.http.get<ListTrustConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/trustConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new TrustConfig in a given project and location.
		 * Post v1/{parent}/trustConfigs
		 * @param {string} parent Required. The parent resource of the TrustConfig. Must be in the format `projects/locations/*`.
		 * @param {string} trustConfigId Required. A user-provided name of the TrustConfig. Must match the regexp `[a-z0-9-]{1,63}`.
		 * @return {Operation} Successful response
		 */
		Certificatemanager_projects_locations_trustConfigs_create(parent: string, trustConfigId: string | null | undefined, requestBody: TrustConfig): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/trustConfigs&trustConfigId=' + (trustConfigId == null ? '' : encodeURIComponent(trustConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

