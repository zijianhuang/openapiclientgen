import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** URLs where a CertificateAuthority will publish content. */
	export interface AccessUrls {

		/** The URL where this CertificateAuthority's CA certificate is published. This will only be set for CAs that have been activated. */
		caCertificateAccessUrl?: string | null;

		/** The URLs where this CertificateAuthority's CRLs are published. This will only be set for CAs that have been activated. */
		crlAccessUrls?: Array<string>;
	}

	/** URLs where a CertificateAuthority will publish content. */
	export interface AccessUrlsFormProperties {

		/** The URL where this CertificateAuthority's CA certificate is published. This will only be set for CAs that have been activated. */
		caCertificateAccessUrl: FormControl<string | null | undefined>,
	}
	export function CreateAccessUrlsFormGroup() {
		return new FormGroup<AccessUrlsFormProperties>({
			caCertificateAccessUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CertificateAuthorityService.ActivateCertificateAuthority. */
	export interface ActivateCertificateAuthorityRequest {

		/** Required. The signed CA certificate issued from FetchCertificateAuthorityCsrResponse.pem_csr. */
		pemCaCertificate?: string | null;

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain. */
		subordinateConfig?: SubordinateConfig;
	}

	/** Request message for CertificateAuthorityService.ActivateCertificateAuthority. */
	export interface ActivateCertificateAuthorityRequestFormProperties {

		/** Required. The signed CA certificate issued from FetchCertificateAuthorityCsrResponse.pem_csr. */
		pemCaCertificate: FormControl<string | null | undefined>,

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateActivateCertificateAuthorityRequestFormGroup() {
		return new FormGroup<ActivateCertificateAuthorityRequestFormProperties>({
			pemCaCertificate: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain. */
	export interface SubordinateConfig {

		/** Required. This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format `projects/locations/caPools/certificateAuthorities/*`. */
		certificateAuthority?: string | null;

		/** This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons. */
		pemIssuerChain?: SubordinateConfigChain;
	}

	/** Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain. */
	export interface SubordinateConfigFormProperties {

		/** Required. This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format `projects/locations/caPools/certificateAuthorities/*`. */
		certificateAuthority: FormControl<string | null | undefined>,
	}
	export function CreateSubordinateConfigFormGroup() {
		return new FormGroup<SubordinateConfigFormProperties>({
			certificateAuthority: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons. */
	export interface SubordinateConfigChain {

		/** Required. Expected to be in leaf-to-root order according to RFC 5246. */
		pemCertificates?: Array<string>;
	}

	/** This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons. */
	export interface SubordinateConfigChainFormProperties {
	}
	export function CreateSubordinateConfigChainFormGroup() {
		return new FormGroup<SubordinateConfigChainFormProperties>({
		});

	}


	/** Describes a "type" of key that may be used in a Certificate issued from a CaPool. Note that a single AllowedKeyType may refer to either a fully-qualified key algorithm, such as RSA 4096, or a family of key algorithms, such as any RSA key. */
	export interface AllowedKeyType {

		/** Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool. */
		ellipticCurve?: EcKeyType;

		/** Describes an RSA key that may be used in a Certificate issued from a CaPool. */
		rsa?: RsaKeyType;
	}

	/** Describes a "type" of key that may be used in a Certificate issued from a CaPool. Note that a single AllowedKeyType may refer to either a fully-qualified key algorithm, such as RSA 4096, or a family of key algorithms, such as any RSA key. */
	export interface AllowedKeyTypeFormProperties {
	}
	export function CreateAllowedKeyTypeFormGroup() {
		return new FormGroup<AllowedKeyTypeFormProperties>({
		});

	}


	/** Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool. */
	export interface EcKeyType {

		/** Optional. A signature algorithm that must be used. If this is omitted, any EC-based signature algorithm will be allowed. */
		signatureAlgorithm?: EcKeyTypeSignatureAlgorithm | null;
	}

	/** Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool. */
	export interface EcKeyTypeFormProperties {

		/** Optional. A signature algorithm that must be used. If this is omitted, any EC-based signature algorithm will be allowed. */
		signatureAlgorithm: FormControl<EcKeyTypeSignatureAlgorithm | null | undefined>,
	}
	export function CreateEcKeyTypeFormGroup() {
		return new FormGroup<EcKeyTypeFormProperties>({
			signatureAlgorithm: new FormControl<EcKeyTypeSignatureAlgorithm | null | undefined>(undefined),
		});

	}

	export enum EcKeyTypeSignatureAlgorithm { EC_SIGNATURE_ALGORITHM_UNSPECIFIED = 'EC_SIGNATURE_ALGORITHM_UNSPECIFIED', ECDSA_P256 = 'ECDSA_P256', ECDSA_P384 = 'ECDSA_P384', EDDSA_25519 = 'EDDSA_25519' }


	/** Describes an RSA key that may be used in a Certificate issued from a CaPool. */
	export interface RsaKeyType {

		/** Optional. The maximum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service will not enforce an explicit upper bound on RSA modulus sizes. */
		maxModulusSize?: string | null;

		/** Optional. The minimum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service-level min RSA modulus size will continue to apply. */
		minModulusSize?: string | null;
	}

	/** Describes an RSA key that may be used in a Certificate issued from a CaPool. */
	export interface RsaKeyTypeFormProperties {

		/** Optional. The maximum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service will not enforce an explicit upper bound on RSA modulus sizes. */
		maxModulusSize: FormControl<string | null | undefined>,

		/** Optional. The minimum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service-level min RSA modulus size will continue to apply. */
		minModulusSize: FormControl<string | null | undefined>,
	}
	export function CreateRsaKeyTypeFormGroup() {
		return new FormGroup<RsaKeyTypeFormProperties>({
			maxModulusSize: new FormControl<string | null | undefined>(undefined),
			minModulusSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
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


	/** Describes values that are relevant in a CA certificate. */
	export interface CaOptions {

		/** Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate. */
		isCa?: boolean | null;

		/**
		 * Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxIssuerPathLength?: number | null;
	}

	/** Describes values that are relevant in a CA certificate. */
	export interface CaOptionsFormProperties {

		/** Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate. */
		isCa: FormControl<boolean | null | undefined>,

		/**
		 * Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxIssuerPathLength: FormControl<number | null | undefined>,
	}
	export function CreateCaOptionsFormGroup() {
		return new FormGroup<CaOptionsFormProperties>({
			isCa: new FormControl<boolean | null | undefined>(undefined),
			maxIssuerPathLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor. */
	export interface CaPool {

		/** Defines controls over all certificate issuance within a CaPool. */
		issuancePolicy?: IssuancePolicy;

		/** Optional. Labels with user-defined metadata. */
		labels?: {[id: string]: string };

		/** Output only. The resource name for this CaPool in the format `projects/locations/caPools/*`. */
		name?: string | null;

		/** Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool. */
		publishingOptions?: PublishingOptions;

		/** Required. Immutable. The Tier of this CaPool. */
		tier?: CaPoolTier | null;
	}

	/** A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor. */
	export interface CaPoolFormProperties {

		/** Optional. Labels with user-defined metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name for this CaPool in the format `projects/locations/caPools/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The Tier of this CaPool. */
		tier: FormControl<CaPoolTier | null | undefined>,
	}
	export function CreateCaPoolFormGroup() {
		return new FormGroup<CaPoolFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<CaPoolTier | null | undefined>(undefined),
		});

	}


	/** Defines controls over all certificate issuance within a CaPool. */
	export interface IssuancePolicy {

		/** IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool. */
		allowedIssuanceModes?: IssuanceModes;

		/** Optional. If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here. Otherwise, any key may be used. */
		allowedKeyTypes?: Array<AllowedKeyType>;

		/** An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions. */
		baselineValues?: X509Parameters;

		/** Describes constraints on a Certificate's Subject and SubjectAltNames. */
		identityConstraints?: CertificateIdentityConstraints;

		/** Optional. The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. */
		maximumLifetime?: string | null;

		/** Describes a set of X.509 extensions that may be part of some certificate issuance controls. */
		passthroughExtensions?: CertificateExtensionConstraints;
	}

	/** Defines controls over all certificate issuance within a CaPool. */
	export interface IssuancePolicyFormProperties {

		/** Optional. The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. */
		maximumLifetime: FormControl<string | null | undefined>,
	}
	export function CreateIssuancePolicyFormGroup() {
		return new FormGroup<IssuancePolicyFormProperties>({
			maximumLifetime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool. */
	export interface IssuanceModes {

		/** Optional. When true, allows callers to create Certificates by specifying a CertificateConfig. */
		allowConfigBasedIssuance?: boolean | null;

		/** Optional. When true, allows callers to create Certificates by specifying a CSR. */
		allowCsrBasedIssuance?: boolean | null;
	}

	/** IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool. */
	export interface IssuanceModesFormProperties {

		/** Optional. When true, allows callers to create Certificates by specifying a CertificateConfig. */
		allowConfigBasedIssuance: FormControl<boolean | null | undefined>,

		/** Optional. When true, allows callers to create Certificates by specifying a CSR. */
		allowCsrBasedIssuance: FormControl<boolean | null | undefined>,
	}
	export function CreateIssuanceModesFormGroup() {
		return new FormGroup<IssuanceModesFormProperties>({
			allowConfigBasedIssuance: new FormControl<boolean | null | undefined>(undefined),
			allowCsrBasedIssuance: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions. */
	export interface X509Parameters {

		/** Optional. Describes custom X.509 extensions. */
		additionalExtensions?: Array<X509Extension>;

		/** Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. */
		aiaOcspServers?: Array<string>;

		/** Describes values that are relevant in a CA certificate. */
		caOptions?: CaOptions;

		/** A KeyUsage describes key usage values that may appear in an X.509 certificate. */
		keyUsage?: KeyUsage;

		/** Describes the X.509 name constraints extension, per https://tools.ietf.org/html/rfc5280#section-4.2.1.10 */
		nameConstraints?: NameConstraints;

		/** Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4. */
		policyIds?: Array<ObjectId>;
	}

	/** An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions. */
	export interface X509ParametersFormProperties {
	}
	export function CreateX509ParametersFormGroup() {
		return new FormGroup<X509ParametersFormProperties>({
		});

	}


	/** An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs. */
	export interface X509Extension {

		/** Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
		critical?: boolean | null;

		/** An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. */
		objectId?: ObjectId;

		/** Required. The value of this X.509 extension. */
		value?: string | null;
	}

	/** An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs. */
	export interface X509ExtensionFormProperties {

		/** Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
		critical: FormControl<boolean | null | undefined>,

		/** Required. The value of this X.509 extension. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateX509ExtensionFormGroup() {
		return new FormGroup<X509ExtensionFormProperties>({
			critical: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. */
	export interface ObjectId {

		/** Required. The parts of an OID path. The most significant parts of the path come first. */
		objectIdPath?: Array<number>;
	}

	/** An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. */
	export interface ObjectIdFormProperties {
	}
	export function CreateObjectIdFormGroup() {
		return new FormGroup<ObjectIdFormProperties>({
		});

	}


	/** A KeyUsage describes key usage values that may appear in an X.509 certificate. */
	export interface KeyUsage {

		/** KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3. */
		baseKeyUsage?: KeyUsageOptions;

		/** KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value. */
		extendedKeyUsage?: ExtendedKeyUsageOptions;

		/** Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message. */
		unknownExtendedKeyUsages?: Array<ObjectId>;
	}

	/** A KeyUsage describes key usage values that may appear in an X.509 certificate. */
	export interface KeyUsageFormProperties {
	}
	export function CreateKeyUsageFormGroup() {
		return new FormGroup<KeyUsageFormProperties>({
		});

	}


	/** KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3. */
	export interface KeyUsageOptions {

		/** The key may be used to sign certificates. */
		certSign?: boolean | null;

		/** The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". */
		contentCommitment?: boolean | null;

		/** The key may be used sign certificate revocation lists. */
		crlSign?: boolean | null;

		/** The key may be used to encipher data. */
		dataEncipherment?: boolean | null;

		/** The key may be used to decipher only. */
		decipherOnly?: boolean | null;

		/** The key may be used for digital signatures. */
		digitalSignature?: boolean | null;

		/** The key may be used to encipher only. */
		encipherOnly?: boolean | null;

		/** The key may be used in a key agreement protocol. */
		keyAgreement?: boolean | null;

		/** The key may be used to encipher other keys. */
		keyEncipherment?: boolean | null;
	}

	/** KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3. */
	export interface KeyUsageOptionsFormProperties {

		/** The key may be used to sign certificates. */
		certSign: FormControl<boolean | null | undefined>,

		/** The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". */
		contentCommitment: FormControl<boolean | null | undefined>,

		/** The key may be used sign certificate revocation lists. */
		crlSign: FormControl<boolean | null | undefined>,

		/** The key may be used to encipher data. */
		dataEncipherment: FormControl<boolean | null | undefined>,

		/** The key may be used to decipher only. */
		decipherOnly: FormControl<boolean | null | undefined>,

		/** The key may be used for digital signatures. */
		digitalSignature: FormControl<boolean | null | undefined>,

		/** The key may be used to encipher only. */
		encipherOnly: FormControl<boolean | null | undefined>,

		/** The key may be used in a key agreement protocol. */
		keyAgreement: FormControl<boolean | null | undefined>,

		/** The key may be used to encipher other keys. */
		keyEncipherment: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyUsageOptionsFormGroup() {
		return new FormGroup<KeyUsageOptionsFormProperties>({
			certSign: new FormControl<boolean | null | undefined>(undefined),
			contentCommitment: new FormControl<boolean | null | undefined>(undefined),
			crlSign: new FormControl<boolean | null | undefined>(undefined),
			dataEncipherment: new FormControl<boolean | null | undefined>(undefined),
			decipherOnly: new FormControl<boolean | null | undefined>(undefined),
			digitalSignature: new FormControl<boolean | null | undefined>(undefined),
			encipherOnly: new FormControl<boolean | null | undefined>(undefined),
			keyAgreement: new FormControl<boolean | null | undefined>(undefined),
			keyEncipherment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value. */
	export interface ExtendedKeyUsageOptions {

		/** Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. */
		clientAuth?: boolean | null;

		/** Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". */
		codeSigning?: boolean | null;

		/** Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". */
		emailProtection?: boolean | null;

		/** Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". */
		ocspSigning?: boolean | null;

		/** Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. */
		serverAuth?: boolean | null;

		/** Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". */
		timeStamping?: boolean | null;
	}

	/** KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value. */
	export interface ExtendedKeyUsageOptionsFormProperties {

		/** Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. */
		clientAuth: FormControl<boolean | null | undefined>,

		/** Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". */
		codeSigning: FormControl<boolean | null | undefined>,

		/** Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". */
		emailProtection: FormControl<boolean | null | undefined>,

		/** Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". */
		ocspSigning: FormControl<boolean | null | undefined>,

		/** Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. */
		serverAuth: FormControl<boolean | null | undefined>,

		/** Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". */
		timeStamping: FormControl<boolean | null | undefined>,
	}
	export function CreateExtendedKeyUsageOptionsFormGroup() {
		return new FormGroup<ExtendedKeyUsageOptionsFormProperties>({
			clientAuth: new FormControl<boolean | null | undefined>(undefined),
			codeSigning: new FormControl<boolean | null | undefined>(undefined),
			emailProtection: new FormControl<boolean | null | undefined>(undefined),
			ocspSigning: new FormControl<boolean | null | undefined>(undefined),
			serverAuth: new FormControl<boolean | null | undefined>(undefined),
			timeStamping: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the X.509 name constraints extension, per https://tools.ietf.org/html/rfc5280#section-4.2.1.10 */
	export interface NameConstraints {

		/** Indicates whether or not the name constraints are marked critical. */
		critical?: boolean | null;

		/** Contains excluded DNS names. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com` while `example1.com` does not. */
		excludedDnsNames?: Array<string>;

		/** Contains the excluded email addresses. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain. */
		excludedEmailAddresses?: Array<string>;

		/** Contains the excluded IP ranges. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4 addresses. */
		excludedIpRanges?: Array<string>;

		/** Contains the excluded URIs that apply to the host part of the name. The value can be a hostname or a domain with a leading period (like `.example.com`) */
		excludedUris?: Array<string>;

		/** Contains permitted DNS names. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com` while `example1.com` does not. */
		permittedDnsNames?: Array<string>;

		/** Contains the permitted email addresses. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain. */
		permittedEmailAddresses?: Array<string>;

		/** Contains the permitted IP ranges. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4 addresses. */
		permittedIpRanges?: Array<string>;

		/** Contains the permitted URIs that apply to the host part of the name. The value can be a hostname or a domain with a leading period (like `.example.com`) */
		permittedUris?: Array<string>;
	}

	/** Describes the X.509 name constraints extension, per https://tools.ietf.org/html/rfc5280#section-4.2.1.10 */
	export interface NameConstraintsFormProperties {

		/** Indicates whether or not the name constraints are marked critical. */
		critical: FormControl<boolean | null | undefined>,
	}
	export function CreateNameConstraintsFormGroup() {
		return new FormGroup<NameConstraintsFormProperties>({
			critical: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes constraints on a Certificate's Subject and SubjectAltNames. */
	export interface CertificateIdentityConstraints {

		/** Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded. */
		allowSubjectAltNamesPassthrough?: boolean | null;

		/** Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded. */
		allowSubjectPassthrough?: boolean | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		celExpression?: Expr;
	}

	/** Describes constraints on a Certificate's Subject and SubjectAltNames. */
	export interface CertificateIdentityConstraintsFormProperties {

		/** Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded. */
		allowSubjectAltNamesPassthrough: FormControl<boolean | null | undefined>,

		/** Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded. */
		allowSubjectPassthrough: FormControl<boolean | null | undefined>,
	}
	export function CreateCertificateIdentityConstraintsFormGroup() {
		return new FormGroup<CertificateIdentityConstraintsFormProperties>({
			allowSubjectAltNamesPassthrough: new FormControl<boolean | null | undefined>(undefined),
			allowSubjectPassthrough: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a set of X.509 extensions that may be part of some certificate issuance controls. */
	export interface CertificateExtensionConstraints {

		/** Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions. */
		additionalExtensions?: Array<ObjectId>;

		/** Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions. */
		knownExtensions?: Array<string>;
	}

	/** Describes a set of X.509 extensions that may be part of some certificate issuance controls. */
	export interface CertificateExtensionConstraintsFormProperties {
	}
	export function CreateCertificateExtensionConstraintsFormGroup() {
		return new FormGroup<CertificateExtensionConstraintsFormProperties>({
		});

	}


	/** Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool. */
	export interface PublishingOptions {

		/** Optional. Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs. If this is omitted, CA certificates and CRLs will be published in PEM. */
		encodingFormat?: PublishingOptionsEncodingFormat | null;

		/** Optional. When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. */
		publishCaCert?: boolean | null;

		/** Optional. When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. */
		publishCrl?: boolean | null;
	}

	/** Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool. */
	export interface PublishingOptionsFormProperties {

		/** Optional. Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs. If this is omitted, CA certificates and CRLs will be published in PEM. */
		encodingFormat: FormControl<PublishingOptionsEncodingFormat | null | undefined>,

		/** Optional. When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. */
		publishCaCert: FormControl<boolean | null | undefined>,

		/** Optional. When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. */
		publishCrl: FormControl<boolean | null | undefined>,
	}
	export function CreatePublishingOptionsFormGroup() {
		return new FormGroup<PublishingOptionsFormProperties>({
			encodingFormat: new FormControl<PublishingOptionsEncodingFormat | null | undefined>(undefined),
			publishCaCert: new FormControl<boolean | null | undefined>(undefined),
			publishCrl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PublishingOptionsEncodingFormat { ENCODING_FORMAT_UNSPECIFIED = 'ENCODING_FORMAT_UNSPECIFIED', PEM = 'PEM', DER = 'DER' }

	export enum CaPoolTier { TIER_UNSPECIFIED = 'TIER_UNSPECIFIED', ENTERPRISE = 'ENTERPRISE', DEVOPS = 'DEVOPS' }


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

	export interface CertChain {

		/** The certificates that form the CA chain, from leaf to root order. */
		certificates?: Array<string>;
	}
	export interface CertChainFormProperties {
	}
	export function CreateCertChainFormGroup() {
		return new FormGroup<CertChainFormProperties>({
		});

	}


	/** A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority. */
	export interface Certificate {

		/** A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509. */
		certificateDescription?: CertificateDescription;

		/** Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/locations/certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate. */
		certificateTemplate?: string | null;

		/** A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1. */
		config?: CertificateConfig;

		/** Output only. The time at which this Certificate was created. */
		createTime?: string | null;

		/** Output only. The resource name of the issuing CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`. */
		issuerCertificateAuthority?: string | null;

		/** Optional. Labels with user-defined metadata. */
		labels?: {[id: string]: string };

		/** Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain. */
		lifetime?: string | null;

		/** Output only. The resource name for this Certificate in the format `projects/locations/caPools/certificates/*`. */
		name?: string | null;

		/** Output only. The pem-encoded, signed X.509 certificate. */
		pemCertificate?: string | null;

		/** Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. */
		pemCertificateChain?: Array<string>;

		/** Immutable. A pem-encoded X.509 certificate signing request (CSR). */
		pemCsr?: string | null;

		/** Describes fields that are relavent to the revocation of a Certificate. */
		revocationDetails?: RevocationDetails;

		/** Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used. */
		subjectMode?: CertificateSubjectMode | null;

		/** Output only. The time at which this Certificate was updated. */
		updateTime?: string | null;
	}

	/** A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority. */
	export interface CertificateFormProperties {

		/** Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/locations/certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate. */
		certificateTemplate: FormControl<string | null | undefined>,

		/** Output only. The time at which this Certificate was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the issuing CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`. */
		issuerCertificateAuthority: FormControl<string | null | undefined>,

		/** Optional. Labels with user-defined metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain. */
		lifetime: FormControl<string | null | undefined>,

		/** Output only. The resource name for this Certificate in the format `projects/locations/caPools/certificates/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The pem-encoded, signed X.509 certificate. */
		pemCertificate: FormControl<string | null | undefined>,

		/** Immutable. A pem-encoded X.509 certificate signing request (CSR). */
		pemCsr: FormControl<string | null | undefined>,

		/** Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used. */
		subjectMode: FormControl<CertificateSubjectMode | null | undefined>,

		/** Output only. The time at which this Certificate was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			certificateTemplate: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			issuerCertificateAuthority: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lifetime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pemCertificate: new FormControl<string | null | undefined>(undefined),
			pemCsr: new FormControl<string | null | undefined>(undefined),
			subjectMode: new FormControl<CertificateSubjectMode | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509. */
	export interface CertificateDescription {

		/** Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate. */
		aiaIssuingCertificateUrls?: Array<string>;

		/** A KeyId identifies a specific public key, usually by hashing the public key. */
		authorityKeyId?: KeyId;

		/** A group of fingerprints for the x509 certificate. */
		certFingerprint?: CertificateFingerprint;

		/** Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13 */
		crlDistributionPoints?: Array<string>;

		/** A PublicKey describes a public key. */
		publicKey?: PublicKey;

		/** These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime. */
		subjectDescription?: SubjectDescription;

		/** A KeyId identifies a specific public key, usually by hashing the public key. */
		subjectKeyId?: KeyId;

		/** An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions. */
		x509Description?: X509Parameters;
	}

	/** A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509. */
	export interface CertificateDescriptionFormProperties {
	}
	export function CreateCertificateDescriptionFormGroup() {
		return new FormGroup<CertificateDescriptionFormProperties>({
		});

	}


	/** A KeyId identifies a specific public key, usually by hashing the public key. */
	export interface KeyId {

		/** Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. */
		keyId?: string | null;
	}

	/** A KeyId identifies a specific public key, usually by hashing the public key. */
	export interface KeyIdFormProperties {

		/** Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. */
		keyId: FormControl<string | null | undefined>,
	}
	export function CreateKeyIdFormGroup() {
		return new FormGroup<KeyIdFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A group of fingerprints for the x509 certificate. */
	export interface CertificateFingerprint {

		/** The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate. */
		sha256Hash?: string | null;
	}

	/** A group of fingerprints for the x509 certificate. */
	export interface CertificateFingerprintFormProperties {

		/** The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate. */
		sha256Hash: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFingerprintFormGroup() {
		return new FormGroup<CertificateFingerprintFormProperties>({
			sha256Hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A PublicKey describes a public key. */
	export interface PublicKey {

		/** Required. The format of the public key. */
		format?: PublicKeyFormat | null;

		/** Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field. */
		key?: string | null;
	}

	/** A PublicKey describes a public key. */
	export interface PublicKeyFormProperties {

		/** Required. The format of the public key. */
		format: FormControl<PublicKeyFormat | null | undefined>,

		/** Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field. */
		key: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			format: new FormControl<PublicKeyFormat | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublicKeyFormat { KEY_FORMAT_UNSPECIFIED = 'KEY_FORMAT_UNSPECIFIED', PEM = 'PEM' }


	/** These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime. */
	export interface SubjectDescription {

		/** The serial number encoded in lowercase hexadecimal. */
		hexSerialNumber?: string | null;

		/** For convenience, the actual lifetime of an issued certificate. */
		lifetime?: string | null;

		/** The time after which the certificate is expired. Per RFC 5280, the validity period for a certificate is the period of time from not_before_time through not_after_time, inclusive. Corresponds to 'not_before_time' + 'lifetime' - 1 second. */
		notAfterTime?: string | null;

		/** The time at which the certificate becomes valid. */
		notBeforeTime?: string | null;

		/** Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate. */
		subject?: Subject;

		/** SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name). */
		subjectAltName?: SubjectAltNames;
	}

	/** These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime. */
	export interface SubjectDescriptionFormProperties {

		/** The serial number encoded in lowercase hexadecimal. */
		hexSerialNumber: FormControl<string | null | undefined>,

		/** For convenience, the actual lifetime of an issued certificate. */
		lifetime: FormControl<string | null | undefined>,

		/** The time after which the certificate is expired. Per RFC 5280, the validity period for a certificate is the period of time from not_before_time through not_after_time, inclusive. Corresponds to 'not_before_time' + 'lifetime' - 1 second. */
		notAfterTime: FormControl<string | null | undefined>,

		/** The time at which the certificate becomes valid. */
		notBeforeTime: FormControl<string | null | undefined>,
	}
	export function CreateSubjectDescriptionFormGroup() {
		return new FormGroup<SubjectDescriptionFormProperties>({
			hexSerialNumber: new FormControl<string | null | undefined>(undefined),
			lifetime: new FormControl<string | null | undefined>(undefined),
			notAfterTime: new FormControl<string | null | undefined>(undefined),
			notBeforeTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate. */
	export interface Subject {

		/** The "common name" of the subject. */
		commonName?: string | null;

		/** The country code of the subject. */
		countryCode?: string | null;

		/** The locality or city of the subject. */
		locality?: string | null;

		/** The organization of the subject. */
		organization?: string | null;

		/** The organizational_unit of the subject. */
		organizationalUnit?: string | null;

		/** The postal code of the subject. */
		postalCode?: string | null;

		/** The province, territory, or regional state of the subject. */
		province?: string | null;

		/** The street address of the subject. */
		streetAddress?: string | null;
	}

	/** Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate. */
	export interface SubjectFormProperties {

		/** The "common name" of the subject. */
		commonName: FormControl<string | null | undefined>,

		/** The country code of the subject. */
		countryCode: FormControl<string | null | undefined>,

		/** The locality or city of the subject. */
		locality: FormControl<string | null | undefined>,

		/** The organization of the subject. */
		organization: FormControl<string | null | undefined>,

		/** The organizational_unit of the subject. */
		organizationalUnit: FormControl<string | null | undefined>,

		/** The postal code of the subject. */
		postalCode: FormControl<string | null | undefined>,

		/** The province, territory, or regional state of the subject. */
		province: FormControl<string | null | undefined>,

		/** The street address of the subject. */
		streetAddress: FormControl<string | null | undefined>,
	}
	export function CreateSubjectFormGroup() {
		return new FormGroup<SubjectFormProperties>({
			commonName: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			organizationalUnit: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			province: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name). */
	export interface SubjectAltNames {

		/** Contains additional subject alternative name values. For each custom_san, the `value` field must contain an ASN.1 encoded UTF8String. */
		customSans?: Array<X509Extension>;

		/** Contains only valid, fully-qualified host names. */
		dnsNames?: Array<string>;

		/** Contains only valid RFC 2822 E-mail addresses. */
		emailAddresses?: Array<string>;

		/** Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses. */
		ipAddresses?: Array<string>;

		/** Contains only valid RFC 3986 URIs. */
		uris?: Array<string>;
	}

	/** SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name). */
	export interface SubjectAltNamesFormProperties {
	}
	export function CreateSubjectAltNamesFormGroup() {
		return new FormGroup<SubjectAltNamesFormProperties>({
		});

	}


	/** A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1. */
	export interface CertificateConfig {

		/** A PublicKey describes a public key. */
		publicKey?: PublicKey;

		/** These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate. */
		subjectConfig?: SubjectConfig;

		/** An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions. */
		x509Config?: X509Parameters;
	}

	/** A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1. */
	export interface CertificateConfigFormProperties {
	}
	export function CreateCertificateConfigFormGroup() {
		return new FormGroup<CertificateConfigFormProperties>({
		});

	}


	/** These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate. */
	export interface SubjectConfig {

		/** Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate. */
		subject?: Subject;

		/** SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name). */
		subjectAltName?: SubjectAltNames;
	}

	/** These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate. */
	export interface SubjectConfigFormProperties {
	}
	export function CreateSubjectConfigFormGroup() {
		return new FormGroup<SubjectConfigFormProperties>({
		});

	}


	/** Describes fields that are relavent to the revocation of a Certificate. */
	export interface RevocationDetails {

		/** Indicates why a Certificate was revoked. */
		revocationState?: RevocationDetailsRevocationState | null;

		/** The time at which this Certificate was revoked. */
		revocationTime?: string | null;
	}

	/** Describes fields that are relavent to the revocation of a Certificate. */
	export interface RevocationDetailsFormProperties {

		/** Indicates why a Certificate was revoked. */
		revocationState: FormControl<RevocationDetailsRevocationState | null | undefined>,

		/** The time at which this Certificate was revoked. */
		revocationTime: FormControl<string | null | undefined>,
	}
	export function CreateRevocationDetailsFormGroup() {
		return new FormGroup<RevocationDetailsFormProperties>({
			revocationState: new FormControl<RevocationDetailsRevocationState | null | undefined>(undefined),
			revocationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RevocationDetailsRevocationState { REVOCATION_REASON_UNSPECIFIED = 'REVOCATION_REASON_UNSPECIFIED', KEY_COMPROMISE = 'KEY_COMPROMISE', CERTIFICATE_AUTHORITY_COMPROMISE = 'CERTIFICATE_AUTHORITY_COMPROMISE', AFFILIATION_CHANGED = 'AFFILIATION_CHANGED', SUPERSEDED = 'SUPERSEDED', CESSATION_OF_OPERATION = 'CESSATION_OF_OPERATION', CERTIFICATE_HOLD = 'CERTIFICATE_HOLD', PRIVILEGE_WITHDRAWN = 'PRIVILEGE_WITHDRAWN', ATTRIBUTE_AUTHORITY_COMPROMISE = 'ATTRIBUTE_AUTHORITY_COMPROMISE' }

	export enum CertificateSubjectMode { SUBJECT_REQUEST_MODE_UNSPECIFIED = 'SUBJECT_REQUEST_MODE_UNSPECIFIED', DEFAULT = 'DEFAULT', REFLECTED_SPIFFE = 'REFLECTED_SPIFFE' }


	/** A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates. */
	export interface CertificateAuthority {

		/** URLs where a CertificateAuthority will publish content. */
		accessUrls?: AccessUrls;

		/** Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root. */
		caCertificateDescriptions?: Array<CertificateDescription>;

		/** A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1. */
		config?: CertificateConfig;

		/** Output only. The time at which this CertificateAuthority was created. */
		createTime?: string | null;

		/** Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state. */
		deleteTime?: string | null;

		/** Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state. */
		expireTime?: string | null;

		/** Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created. */
		gcsBucket?: string | null;

		/** A Cloud KMS key configuration that a CertificateAuthority will use. */
		keySpec?: KeyVersionSpec;

		/** Optional. Labels with user-defined metadata. */
		labels?: {[id: string]: string };

		/** Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. */
		lifetime?: string | null;

		/** Output only. The resource name for this CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`. */
		name?: string | null;

		/** Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate. */
		pemCaCertificates?: Array<string>;

		/** Output only. The State for this CertificateAuthority. */
		state?: CertificateAuthorityState | null;

		/** Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain. */
		subordinateConfig?: SubordinateConfig;

		/** Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority. */
		tier?: CaPoolTier | null;

		/** Required. Immutable. The Type of this CertificateAuthority. */
		type?: CertificateAuthorityType | null;

		/** Output only. The time at which this CertificateAuthority was last updated. */
		updateTime?: string | null;
	}

	/** A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates. */
	export interface CertificateAuthorityFormProperties {

		/** Output only. The time at which this CertificateAuthority was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state. */
		expireTime: FormControl<string | null | undefined>,

		/** Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created. */
		gcsBucket: FormControl<string | null | undefined>,

		/** Optional. Labels with user-defined metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. */
		lifetime: FormControl<string | null | undefined>,

		/** Output only. The resource name for this CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The State for this CertificateAuthority. */
		state: FormControl<CertificateAuthorityState | null | undefined>,

		/** Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority. */
		tier: FormControl<CaPoolTier | null | undefined>,

		/** Required. Immutable. The Type of this CertificateAuthority. */
		type: FormControl<CertificateAuthorityType | null | undefined>,

		/** Output only. The time at which this CertificateAuthority was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateAuthorityFormGroup() {
		return new FormGroup<CertificateAuthorityFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			gcsBucket: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lifetime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CertificateAuthorityState | null | undefined>(undefined),
			tier: new FormControl<CaPoolTier | null | undefined>(undefined),
			type: new FormControl<CertificateAuthorityType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud KMS key configuration that a CertificateAuthority will use. */
	export interface KeyVersionSpec {

		/** The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`. */
		algorithm?: KeyVersionSpecAlgorithm | null;

		/** The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`. This option enables full flexibility in the key's capabilities and properties. */
		cloudKmsKeyVersion?: string | null;
	}

	/** A Cloud KMS key configuration that a CertificateAuthority will use. */
	export interface KeyVersionSpecFormProperties {

		/** The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`. */
		algorithm: FormControl<KeyVersionSpecAlgorithm | null | undefined>,

		/** The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`. This option enables full flexibility in the key's capabilities and properties. */
		cloudKmsKeyVersion: FormControl<string | null | undefined>,
	}
	export function CreateKeyVersionSpecFormGroup() {
		return new FormGroup<KeyVersionSpecFormProperties>({
			algorithm: new FormControl<KeyVersionSpecAlgorithm | null | undefined>(undefined),
			cloudKmsKeyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeyVersionSpecAlgorithm { SIGN_HASH_ALGORITHM_UNSPECIFIED = 'SIGN_HASH_ALGORITHM_UNSPECIFIED', RSA_PSS_2048_SHA256 = 'RSA_PSS_2048_SHA256', RSA_PSS_3072_SHA256 = 'RSA_PSS_3072_SHA256', RSA_PSS_4096_SHA256 = 'RSA_PSS_4096_SHA256', RSA_PKCS1_2048_SHA256 = 'RSA_PKCS1_2048_SHA256', RSA_PKCS1_3072_SHA256 = 'RSA_PKCS1_3072_SHA256', RSA_PKCS1_4096_SHA256 = 'RSA_PKCS1_4096_SHA256', EC_P256_SHA256 = 'EC_P256_SHA256', EC_P384_SHA384 = 'EC_P384_SHA384' }

	export enum CertificateAuthorityState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ENABLED = 'ENABLED', DISABLED = 'DISABLED', STAGED = 'STAGED', AWAITING_USER_ACTIVATION = 'AWAITING_USER_ACTIVATION', DELETED = 'DELETED' }

	export enum CertificateAuthorityType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', SELF_SIGNED = 'SELF_SIGNED', SUBORDINATE = 'SUBORDINATE' }


	/** A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted. */
	export interface CertificateRevocationList {

		/** Output only. The location where 'pem_crl' can be accessed. */
		accessUrl?: string | null;

		/** Output only. The time at which this CertificateRevocationList was created. */
		createTime?: string | null;

		/** Optional. Labels with user-defined metadata. */
		labels?: {[id: string]: string };

		/** Output only. The resource name for this CertificateRevocationList in the format `projects/locations/caPools/*certificateAuthorities/ certificateRevocationLists/*`. */
		name?: string | null;

		/** Output only. The PEM-encoded X.509 CRL. */
		pemCrl?: string | null;

		/** Output only. The revision ID of this CertificateRevocationList. A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string. */
		revisionId?: string | null;

		/** Output only. The revoked serial numbers that appear in pem_crl. */
		revokedCertificates?: Array<RevokedCertificate>;

		/** Output only. The CRL sequence number that appears in pem_crl. */
		sequenceNumber?: string | null;

		/** Output only. The State for this CertificateRevocationList. */
		state?: CertificateRevocationListState | null;

		/** Output only. The time at which this CertificateRevocationList was updated. */
		updateTime?: string | null;
	}

	/** A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted. */
	export interface CertificateRevocationListFormProperties {

		/** Output only. The location where 'pem_crl' can be accessed. */
		accessUrl: FormControl<string | null | undefined>,

		/** Output only. The time at which this CertificateRevocationList was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Labels with user-defined metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name for this CertificateRevocationList in the format `projects/locations/caPools/*certificateAuthorities/ certificateRevocationLists/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The PEM-encoded X.509 CRL. */
		pemCrl: FormControl<string | null | undefined>,

		/** Output only. The revision ID of this CertificateRevocationList. A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string. */
		revisionId: FormControl<string | null | undefined>,

		/** Output only. The CRL sequence number that appears in pem_crl. */
		sequenceNumber: FormControl<string | null | undefined>,

		/** Output only. The State for this CertificateRevocationList. */
		state: FormControl<CertificateRevocationListState | null | undefined>,

		/** Output only. The time at which this CertificateRevocationList was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRevocationListFormGroup() {
		return new FormGroup<CertificateRevocationListFormProperties>({
			accessUrl: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pemCrl: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			sequenceNumber: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CertificateRevocationListState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a revoked Certificate. */
	export interface RevokedCertificate {

		/** The resource name for the Certificate in the format `projects/locations/caPools/certificates/*`. */
		certificate?: string | null;

		/** The serial number of the Certificate. */
		hexSerialNumber?: string | null;

		/** The reason the Certificate was revoked. */
		revocationReason?: RevocationDetailsRevocationState | null;
	}

	/** Describes a revoked Certificate. */
	export interface RevokedCertificateFormProperties {

		/** The resource name for the Certificate in the format `projects/locations/caPools/certificates/*`. */
		certificate: FormControl<string | null | undefined>,

		/** The serial number of the Certificate. */
		hexSerialNumber: FormControl<string | null | undefined>,

		/** The reason the Certificate was revoked. */
		revocationReason: FormControl<RevocationDetailsRevocationState | null | undefined>,
	}
	export function CreateRevokedCertificateFormGroup() {
		return new FormGroup<RevokedCertificateFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			hexSerialNumber: new FormControl<string | null | undefined>(undefined),
			revocationReason: new FormControl<RevocationDetailsRevocationState | null | undefined>(undefined),
		});

	}

	export enum CertificateRevocationListState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', SUPERSEDED = 'SUPERSEDED' }


	/** A CertificateTemplate refers to a managed template for certificate issuance. */
	export interface CertificateTemplate {

		/** Output only. The time at which this CertificateTemplate was created. */
		createTime?: string | null;

		/** Optional. A human-readable description of scenarios this template is intended for. */
		description?: string | null;

		/** Describes constraints on a Certificate's Subject and SubjectAltNames. */
		identityConstraints?: CertificateIdentityConstraints;

		/** Optional. Labels with user-defined metadata. */
		labels?: {[id: string]: string };

		/** Optional. The maximum lifetime allowed for issued Certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum_lifetime the minimum of the two durations will be the maximum lifetime for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. */
		maximumLifetime?: string | null;

		/** Output only. The resource name for this CertificateTemplate in the format `projects/locations/certificateTemplates/*`. */
		name?: string | null;

		/** Describes a set of X.509 extensions that may be part of some certificate issuance controls. */
		passthroughExtensions?: CertificateExtensionConstraints;

		/** An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions. */
		predefinedValues?: X509Parameters;

		/** Output only. The time at which this CertificateTemplate was updated. */
		updateTime?: string | null;
	}

	/** A CertificateTemplate refers to a managed template for certificate issuance. */
	export interface CertificateTemplateFormProperties {

		/** Output only. The time at which this CertificateTemplate was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A human-readable description of scenarios this template is intended for. */
		description: FormControl<string | null | undefined>,

		/** Optional. Labels with user-defined metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The maximum lifetime allowed for issued Certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum_lifetime the minimum of the two durations will be the maximum lifetime for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. */
		maximumLifetime: FormControl<string | null | undefined>,

		/** Output only. The resource name for this CertificateTemplate in the format `projects/locations/certificateTemplates/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time at which this CertificateTemplate was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateTemplateFormGroup() {
		return new FormGroup<CertificateTemplateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maximumLifetime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CertificateAuthorityService.DisableCertificateAuthority. */
	export interface DisableCertificateAuthorityRequest {

		/** Optional. This field allows this CA to be disabled even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resource(s) since the CA will no longer be able to issue certificates. */
		ignoreDependentResources?: boolean | null;

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for CertificateAuthorityService.DisableCertificateAuthority. */
	export interface DisableCertificateAuthorityRequestFormProperties {

		/** Optional. This field allows this CA to be disabled even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resource(s) since the CA will no longer be able to issue certificates. */
		ignoreDependentResources: FormControl<boolean | null | undefined>,

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateDisableCertificateAuthorityRequestFormGroup() {
		return new FormGroup<DisableCertificateAuthorityRequestFormProperties>({
			ignoreDependentResources: new FormControl<boolean | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
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


	/** Request message for CertificateAuthorityService.EnableCertificateAuthority. */
	export interface EnableCertificateAuthorityRequest {

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for CertificateAuthorityService.EnableCertificateAuthority. */
	export interface EnableCertificateAuthorityRequestFormProperties {

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateEnableCertificateAuthorityRequestFormGroup() {
		return new FormGroup<EnableCertificateAuthorityRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CertificateAuthorityService.FetchCaCerts. */
	export interface FetchCaCertsRequest {

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for CertificateAuthorityService.FetchCaCerts. */
	export interface FetchCaCertsRequestFormProperties {

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateFetchCaCertsRequestFormGroup() {
		return new FormGroup<FetchCaCertsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CertificateAuthorityService.FetchCaCerts. */
	export interface FetchCaCertsResponse {

		/** The PEM encoded CA certificate chains of all Certificate Authorities in this CaPool in the ENABLED, DISABLED, or STAGED states. */
		caCerts?: Array<CertChain>;
	}

	/** Response message for CertificateAuthorityService.FetchCaCerts. */
	export interface FetchCaCertsResponseFormProperties {
	}
	export function CreateFetchCaCertsResponseFormGroup() {
		return new FormGroup<FetchCaCertsResponseFormProperties>({
		});

	}


	/** Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr. */
	export interface FetchCertificateAuthorityCsrResponse {

		/** Output only. The PEM-encoded signed certificate signing request (CSR). */
		pemCsr?: string | null;
	}

	/** Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr. */
	export interface FetchCertificateAuthorityCsrResponseFormProperties {

		/** Output only. The PEM-encoded signed certificate signing request (CSR). */
		pemCsr: FormControl<string | null | undefined>,
	}
	export function CreateFetchCertificateAuthorityCsrResponseFormGroup() {
		return new FormGroup<FetchCertificateAuthorityCsrResponseFormProperties>({
			pemCsr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CertificateAuthorityService.ListCaPools. */
	export interface ListCaPoolsResponse {

		/** The list of CaPools. */
		caPools?: Array<CaPool>;

		/** A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** A list of locations (e.g. "us-west1") that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for CertificateAuthorityService.ListCaPools. */
	export interface ListCaPoolsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCaPoolsResponseFormGroup() {
		return new FormGroup<ListCaPoolsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CertificateAuthorityService.ListCertificateAuthorities. */
	export interface ListCertificateAuthoritiesResponse {

		/** The list of CertificateAuthorities. */
		certificateAuthorities?: Array<CertificateAuthority>;

		/** A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** A list of locations (e.g. "us-west1") that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for CertificateAuthorityService.ListCertificateAuthorities. */
	export interface ListCertificateAuthoritiesResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateAuthoritiesResponseFormGroup() {
		return new FormGroup<ListCertificateAuthoritiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CertificateAuthorityService.ListCertificateRevocationLists. */
	export interface ListCertificateRevocationListsResponse {

		/** The list of CertificateRevocationLists. */
		certificateRevocationLists?: Array<CertificateRevocationList>;

		/** A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.next_page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** A list of locations (e.g. "us-west1") that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for CertificateAuthorityService.ListCertificateRevocationLists. */
	export interface ListCertificateRevocationListsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.next_page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateRevocationListsResponseFormGroup() {
		return new FormGroup<ListCertificateRevocationListsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CertificateAuthorityService.ListCertificateTemplates. */
	export interface ListCertificateTemplatesResponse {

		/** The list of CertificateTemplates. */
		certificateTemplates?: Array<CertificateTemplate>;

		/** A token to retrieve next page of results. Pass this value in ListCertificateTemplatesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** A list of locations (e.g. "us-west1") that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for CertificateAuthorityService.ListCertificateTemplates. */
	export interface ListCertificateTemplatesResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListCertificateTemplatesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateTemplatesResponseFormGroup() {
		return new FormGroup<ListCertificateTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CertificateAuthorityService.ListCertificates. */
	export interface ListCertificatesResponse {

		/** The list of Certificates. */
		certificates?: Array<Certificate>;

		/** A token to retrieve next page of results. Pass this value in ListCertificatesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** A list of locations (e.g. "us-west1") that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for CertificateAuthorityService.ListCertificates. */
	export interface ListCertificatesResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListCertificatesRequest.next_page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResponseFormGroup() {
		return new FormGroup<ListCertificatesResponseFormProperties>({
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

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
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


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Operation metadata returned by the CLH during resource state reconciliation. */
	export interface ReconciliationOperationMetadata {

		/** DEPRECATED. Use exclusive_action instead. */
		deleteResource?: boolean | null;

		/** Excluisive action returned by the CLH. */
		exclusiveAction?: ReconciliationOperationMetadataExclusiveAction | null;
	}

	/** Operation metadata returned by the CLH during resource state reconciliation. */
	export interface ReconciliationOperationMetadataFormProperties {

		/** DEPRECATED. Use exclusive_action instead. */
		deleteResource: FormControl<boolean | null | undefined>,

		/** Excluisive action returned by the CLH. */
		exclusiveAction: FormControl<ReconciliationOperationMetadataExclusiveAction | null | undefined>,
	}
	export function CreateReconciliationOperationMetadataFormGroup() {
		return new FormGroup<ReconciliationOperationMetadataFormProperties>({
			deleteResource: new FormControl<boolean | null | undefined>(undefined),
			exclusiveAction: new FormControl<ReconciliationOperationMetadataExclusiveAction | null | undefined>(undefined),
		});

	}

	export enum ReconciliationOperationMetadataExclusiveAction { UNKNOWN_REPAIR_ACTION = 'UNKNOWN_REPAIR_ACTION', DELETE = 'DELETE', RETRY = 'RETRY' }


	/** Request message for CertificateAuthorityService.RevokeCertificate. */
	export interface RevokeCertificateRequest {

		/** Required. The RevocationReason for revoking this certificate. */
		reason?: RevocationDetailsRevocationState | null;

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for CertificateAuthorityService.RevokeCertificate. */
	export interface RevokeCertificateRequestFormProperties {

		/** Required. The RevocationReason for revoking this certificate. */
		reason: FormControl<RevocationDetailsRevocationState | null | undefined>,

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRevokeCertificateRequestFormGroup() {
		return new FormGroup<RevokeCertificateRequestFormProperties>({
			reason: new FormControl<RevocationDetailsRevocationState | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Request message for CertificateAuthorityService.UndeleteCertificateAuthority. */
	export interface UndeleteCertificateAuthorityRequest {

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for CertificateAuthorityService.UndeleteCertificateAuthority. */
	export interface UndeleteCertificateAuthorityRequestFormProperties {

		/** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateUndeleteCertificateAuthorityRequestFormGroup() {
		return new FormGroup<UndeleteCertificateAuthorityRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all Certificate Authorities in the ENABLED, DISABLED, or STAGED states.
		 * Post v1/{caPool}:fetchCaCerts
		 * @param {string} caPool Required. The resource name for the CaPool in the format `projects/locations/caPools/*`.
		 * @return {FetchCaCertsResponse} Successful response
		 */
		Privateca_projects_locations_caPools_fetchCaCerts(caPool: string, requestBody: FetchCaCertsRequest): Observable<FetchCaCertsResponse> {
			return this.http.post<FetchCaCertsResponse>(this.baseUri + 'v1/' + (caPool == null ? '' : encodeURIComponent(caPool)) + ':fetchCaCerts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} requestId Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} ignoreDependentResources Optional. This field allows this ca to be deleted even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resource(s) since the CA will no longer be able to issue certificates.
		 * @param {boolean} skipGracePeriod Optional. If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA.
		 * @return {Empty} Successful response
		 */
		Privateca_projects_locations_operations_delete(name: string, requestId: string | null | undefined, ignoreDependentResources: boolean | null | undefined, skipGracePeriod: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&ignoreDependentResources=' + ignoreDependentResources + '&skipGracePeriod=' + skipGracePeriod, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a CertificateTemplate.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name for this CertificateTemplate in the format `projects/locations/certificateTemplates/*`.
		 * @param {string} requestId Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Required. A list of fields to be updated in this request.
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_certificateTemplates_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: CertificateTemplate): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Privateca_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Privateca_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
		 * Post v1/{name}:activate
		 * @param {string} name Required. The resource name for this CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`.
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_activate(name: string, requestBody: ActivateCertificateAuthorityRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Privateca_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a CertificateAuthority.
		 * Post v1/{name}:disable
		 * @param {string} name Required. The resource name for this CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`.
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_disable(name: string, requestBody: DisableCertificateAuthorityRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable a CertificateAuthority.
		 * Post v1/{name}:enable
		 * @param {string} name Required. The resource name for this CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`.
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_enable(name: string, requestBody: EnableCertificateAuthorityRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
		 * Get v1/{name}:fetch
		 * @param {string} name Required. The resource name for this CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`.
		 * @return {FetchCertificateAuthorityCsrResponse} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_fetch(name: string): Observable<FetchCertificateAuthorityCsrResponse> {
			return this.http.get<FetchCertificateAuthorityCsrResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetch', {});
		}

		/**
		 * Revoke a Certificate.
		 * Post v1/{name}:revoke
		 * @param {string} name Required. The resource name for this Certificate in the format `projects/locations/caPools/certificates/*`.
		 * @return {Certificate} Successful response
		 */
		Privateca_projects_locations_caPools_certificates_revoke(name: string, requestBody: RevokeCertificateRequest): Observable<Certificate> {
			return this.http.post<Certificate>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Undelete a CertificateAuthority that has been deleted.
		 * Post v1/{name}:undelete
		 * @param {string} name Required. The resource name for this CertificateAuthority in the format `projects/locations/caPools/certificateAuthorities/*`.
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_undelete(name: string, requestBody: UndeleteCertificateAuthorityRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CaPools.
		 * Get v1/{parent}/caPools
		 * @param {string} parent Required. The resource name of the location associated with the CaPools, in the format `projects/locations/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response.
		 * @param {string} orderBy Optional. Specify how the results should be sorted.
		 * @param {number} pageSize Optional. Limit on the number of CaPools to include in the response. Further CaPools can subsequently be obtained by including the ListCaPoolsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Pagination token, returned earlier via ListCaPoolsResponse.next_page_token.
		 * @return {ListCaPoolsResponse} Successful response
		 */
		Privateca_projects_locations_caPools_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCaPoolsResponse> {
			return this.http.get<ListCaPoolsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/caPools&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a CaPool.
		 * Post v1/{parent}/caPools
		 * @param {string} parent Required. The resource name of the location associated with the CaPool, in the format `projects/locations/*`.
		 * @param {string} caPoolId Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
		 * @param {string} requestId Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_caPools_create(parent: string, caPoolId: string | null | undefined, requestId: string | null | undefined, requestBody: CaPool): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/caPools&caPoolId=' + (caPoolId == null ? '' : encodeURIComponent(caPoolId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CertificateAuthorities.
		 * Get v1/{parent}/certificateAuthorities
		 * @param {string} parent Required. The resource name of the CaPool associated with the CertificateAuthorities, in the format `projects/locations/caPools/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response.
		 * @param {string} orderBy Optional. Specify how the results should be sorted.
		 * @param {number} pageSize Optional. Limit on the number of CertificateAuthorities to include in the response. Further CertificateAuthorities can subsequently be obtained by including the ListCertificateAuthoritiesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Pagination token, returned earlier via ListCertificateAuthoritiesResponse.next_page_token.
		 * @return {ListCertificateAuthoritiesResponse} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificateAuthoritiesResponse> {
			return this.http.get<ListCertificateAuthoritiesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateAuthorities&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new CertificateAuthority in a given Project and Location.
		 * Post v1/{parent}/certificateAuthorities
		 * @param {string} parent Required. The resource name of the CaPool associated with the CertificateAuthorities, in the format `projects/locations/caPools/*`.
		 * @param {string} certificateAuthorityId Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
		 * @param {string} requestId Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_create(parent: string, certificateAuthorityId: string | null | undefined, requestId: string | null | undefined, requestBody: CertificateAuthority): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateAuthorities&certificateAuthorityId=' + (certificateAuthorityId == null ? '' : encodeURIComponent(certificateAuthorityId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CertificateRevocationLists.
		 * Get v1/{parent}/certificateRevocationLists
		 * @param {string} parent Required. The resource name of the location associated with the CertificateRevocationLists, in the format `projects/locations/caPools/certificateAuthorities/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response.
		 * @param {string} orderBy Optional. Specify how the results should be sorted.
		 * @param {number} pageSize Optional. Limit on the number of CertificateRevocationLists to include in the response. Further CertificateRevocationLists can subsequently be obtained by including the ListCertificateRevocationListsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Pagination token, returned earlier via ListCertificateRevocationListsResponse.next_page_token.
		 * @return {ListCertificateRevocationListsResponse} Successful response
		 */
		Privateca_projects_locations_caPools_certificateAuthorities_certificateRevocationLists_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificateRevocationListsResponse> {
			return this.http.get<ListCertificateRevocationListsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateRevocationLists&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists CertificateTemplates.
		 * Get v1/{parent}/certificateTemplates
		 * @param {string} parent Required. The resource name of the location associated with the CertificateTemplates, in the format `projects/locations/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response.
		 * @param {string} orderBy Optional. Specify how the results should be sorted.
		 * @param {number} pageSize Optional. Limit on the number of CertificateTemplates to include in the response. Further CertificateTemplates can subsequently be obtained by including the ListCertificateTemplatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Pagination token, returned earlier via ListCertificateTemplatesResponse.next_page_token.
		 * @return {ListCertificateTemplatesResponse} Successful response
		 */
		Privateca_projects_locations_certificateTemplates_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificateTemplatesResponse> {
			return this.http.get<ListCertificateTemplatesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateTemplates&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new CertificateTemplate in a given Project and Location.
		 * Post v1/{parent}/certificateTemplates
		 * @param {string} parent Required. The resource name of the location associated with the CertificateTemplate, in the format `projects/locations/*`.
		 * @param {string} certificateTemplateId Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
		 * @param {string} requestId Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Privateca_projects_locations_certificateTemplates_create(parent: string, certificateTemplateId: string | null | undefined, requestId: string | null | undefined, requestBody: CertificateTemplate): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificateTemplates&certificateTemplateId=' + (certificateTemplateId == null ? '' : encodeURIComponent(certificateTemplateId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Certificates.
		 * Get v1/{parent}/certificates
		 * @param {string} parent Required. The resource name of the location associated with the Certificates, in the format `projects/locations/caPools/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For details on supported filters and syntax, see [Certificates Filtering documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#filtering_support).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. For details on supported fields and syntax, see [Certificates Sorting documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#sorting_support).
		 * @param {number} pageSize Optional. Limit on the number of Certificates to include in the response. Further Certificates can subsequently be obtained by including the ListCertificatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Pagination token, returned earlier via ListCertificatesResponse.next_page_token.
		 * @return {ListCertificatesResponse} Successful response
		 */
		Privateca_projects_locations_caPools_certificates_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCertificatesResponse> {
			return this.http.get<ListCertificatesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificates&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new Certificate in a given Project, Location from a particular CaPool.
		 * Post v1/{parent}/certificates
		 * @param {string} parent Required. The resource name of the CaPool associated with the Certificate, in the format `projects/locations/caPools/*`.
		 * @param {string} certificateId Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`. This field is required when using a CertificateAuthority in the Enterprise CertificateAuthority.Tier, but is optional and its value is ignored otherwise.
		 * @param {string} issuingCertificateAuthorityId Optional. The resource ID of the CertificateAuthority that should issue the certificate. This optional field will ignore the load-balancing scheme of the Pool and directly issue the certificate from the CA with the specified ID, contained in the same CaPool referenced by `parent`. Per-CA quota rules apply. If left empty, a CertificateAuthority will be chosen from the CaPool by the service. For example, to issue a Certificate from a Certificate Authority with resource name "projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca", you can set the parent to "projects/my-project/locations/us-central1/caPools/my-pool" and the issuing_certificate_authority_id to "my-ca".
		 * @param {string} requestId Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If this is true, no Certificate resource will be persisted regardless of the CaPool's tier, and the returned Certificate will not contain the pem_certificate field.
		 * @return {Certificate} Successful response
		 */
		Privateca_projects_locations_caPools_certificates_create(parent: string, certificateId: string | null | undefined, issuingCertificateAuthorityId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Certificate): Observable<Certificate> {
			return this.http.post<Certificate>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificates&certificateId=' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&issuingCertificateAuthorityId=' + (issuingCertificateAuthorityId == null ? '' : encodeURIComponent(issuingCertificateAuthorityId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Privateca_projects_locations_certificateTemplates_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Privateca_projects_locations_certificateTemplates_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Privateca_projects_locations_certificateTemplates_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

