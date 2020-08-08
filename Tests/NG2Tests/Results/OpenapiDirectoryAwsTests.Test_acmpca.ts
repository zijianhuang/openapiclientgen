import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateCertificateAuthorityResponse {
		CertificateAuthorityArn?: string;
	}

	export interface CreateCertificateAuthorityRequest {

		/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action. */
		CertificateAuthorityConfiguration: CertificateAuthorityConfiguration;

		/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
		RevocationConfiguration?: RevocationConfiguration;
		CertificateAuthorityType: CreateCertificateAuthorityRequestCertificateAuthorityType;
		IdempotencyToken?: string;
		Tags?: Array<Tag>;
	}


	/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action.  */
	export interface CertificateAuthorityConfiguration {
		KeyAlgorithm: CertificateAuthorityConfigurationKeyAlgorithm;
		SigningAlgorithm: CertificateAuthorityConfigurationSigningAlgorithm;

		/** Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity. */
		Subject: ASN1Subject;
	}

	export enum CertificateAuthorityConfigurationKeyAlgorithm { RSA_2048 = 0, RSA_4096 = 1, EC_prime256v1 = 2, EC_secp384r1 = 3 }

	export enum CertificateAuthorityConfigurationSigningAlgorithm { SHA256WITHECDSA = 0, SHA384WITHECDSA = 1, SHA512WITHECDSA = 2, SHA256WITHRSA = 3, SHA384WITHRSA = 4, SHA512WITHRSA = 5 }


	/** Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.  */
	export interface ASN1Subject {
		Country?: string;
		Organization?: string;
		OrganizationalUnit?: string;
		DistinguishedNameQualifier?: string;
		State?: string;
		CommonName?: string;
		SerialNumber?: string;
		Locality?: string;
		Title?: string;
		Surname?: string;
		GivenName?: string;
		Initials?: string;
		Pseudonym?: string;
		GenerationQualifier?: string;
	}


	/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
	export interface RevocationConfiguration {

		/** <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM Private CA. </p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> */
		CrlConfiguration?: CrlConfiguration;
	}


	/** <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM Private CA. </p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> */
	export interface CrlConfiguration {
		Enabled: boolean;
		ExpirationInDays?: number;
		CustomCname?: string;
		S3BucketName?: string;
	}

	export enum CreateCertificateAuthorityRequestCertificateAuthorityType { ROOT = 0, SUBORDINATE = 1 }


	/** Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a>TagCertificateAuthority</a> action. To remove a tag, call the <a>UntagCertificateAuthority</a> action.  */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export interface InvalidArgsException {
	}

	export interface InvalidPolicyException {
	}

	export interface InvalidTagException {
	}

	export interface LimitExceededException {
	}

	export interface CreateCertificateAuthorityAuditReportResponse {
		AuditReportId?: string;
		S3Key?: string;
	}

	export interface CreateCertificateAuthorityAuditReportRequest {
		CertificateAuthorityArn: string;
		S3BucketName: string;
		AuditReportResponseFormat: CreateCertificateAuthorityAuditReportRequestAuditReportResponseFormat;
	}

	export enum CreateCertificateAuthorityAuditReportRequestAuditReportResponseFormat { JSON = 0, CSV = 1 }

	export interface RequestInProgressException {
	}

	export interface RequestFailedException {
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidArnException {
	}

	export interface InvalidStateException {
	}

	export interface CreatePermissionRequest {
		CertificateAuthorityArn: string;
		Principal: string;
		SourceAccount?: string;
		Actions: Array<ActionType>;
	}

	export enum ActionType { IssueCertificate = 0, GetCertificate = 1, ListPermissions = 2 }

	export interface PermissionAlreadyExistsException {
	}

	export interface DeleteCertificateAuthorityRequest {
		CertificateAuthorityArn: string;
		PermanentDeletionTimeInDays?: number;
	}

	export interface ConcurrentModificationException {
	}

	export interface DeletePermissionRequest {
		CertificateAuthorityArn: string;
		Principal: string;
		SourceAccount?: string;
	}

	export interface DescribeCertificateAuthorityResponse {

		/** Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> action to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a>ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM). */
		CertificateAuthority?: CertificateAuthority;
	}


	/** Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> action to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a>ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM).  */
	export interface CertificateAuthority {
		Arn?: string;
		CreatedAt?: Date;
		LastStateChangeAt?: Date;
		Type?: CreateCertificateAuthorityRequestCertificateAuthorityType;
		Serial?: string;
		Status?: CertificateAuthorityStatus;
		NotBefore?: Date;
		NotAfter?: Date;
		FailureReason?: CertificateAuthorityFailureReason;

		/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action. */
		CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;

		/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
		RevocationConfiguration?: RevocationConfiguration;
		RestorableUntil?: Date;
	}

	export enum CertificateAuthorityStatus { CREATING = 0, PENDING_CERTIFICATE = 1, ACTIVE = 2, DELETED = 3, DISABLED = 4, EXPIRED = 5, FAILED = 6 }

	export enum CertificateAuthorityFailureReason { REQUEST_TIMED_OUT = 0, UNSUPPORTED_ALGORITHM = 1, OTHER = 2 }

	export interface DescribeCertificateAuthorityRequest {
		CertificateAuthorityArn: string;
	}

	export interface DescribeCertificateAuthorityAuditReportResponse {
		AuditReportStatus?: DescribeCertificateAuthorityAuditReportResponseAuditReportStatus;
		S3BucketName?: string;
		S3Key?: string;
		CreatedAt?: Date;
	}

	export enum DescribeCertificateAuthorityAuditReportResponseAuditReportStatus { CREATING = 0, SUCCESS = 1, FAILED = 2 }

	export interface DescribeCertificateAuthorityAuditReportRequest {
		CertificateAuthorityArn: string;
		AuditReportId: string;
	}

	export interface GetCertificateResponse {
		Certificate?: string;
		CertificateChain?: string;
	}

	export interface GetCertificateRequest {
		CertificateAuthorityArn: string;
		CertificateArn: string;
	}

	export interface GetCertificateAuthorityCertificateResponse {
		Certificate?: string;
		CertificateChain?: string;
	}

	export interface GetCertificateAuthorityCertificateRequest {
		CertificateAuthorityArn: string;
	}

	export interface GetCertificateAuthorityCsrResponse {
		Csr?: string;
	}

	export interface GetCertificateAuthorityCsrRequest {
		CertificateAuthorityArn: string;
	}

	export interface ImportCertificateAuthorityCertificateRequest {
		CertificateAuthorityArn: string;
		Certificate: string;
		CertificateChain?: string;
	}

	export interface InvalidRequestException {
	}

	export interface MalformedCertificateException {
	}

	export interface CertificateMismatchException {
	}

	export interface IssueCertificateResponse {
		CertificateArn?: string;
	}

	export interface IssueCertificateRequest {
		CertificateAuthorityArn: string;
		Csr: string;
		SigningAlgorithm: CertificateAuthorityConfigurationSigningAlgorithm;
		TemplateArn?: string;

		/** Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> action. */
		Validity: Validity;
		IdempotencyToken?: string;
	}


	/** Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> action. */
	export interface Validity {
		Value: number;
		Type: ValidityType;
	}

	export enum ValidityType { END_DATE = 0, ABSOLUTE = 1, DAYS = 2, MONTHS = 3, YEARS = 4 }

	export interface MalformedCSRException {
	}

	export interface ListCertificateAuthoritiesResponse {
		CertificateAuthorities?: Array<CertificateAuthority>;
		NextToken?: string;
	}

	export interface ListCertificateAuthoritiesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface InvalidNextTokenException {
	}

	export interface ListPermissionsResponse {
		Permissions?: Array<Permission>;
		NextToken?: string;
	}


	/** Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a>CreatePermission</a> action, removed with the <a>DeletePermission</a> action, and listed with the <a>ListPermissions</a> action. */
	export interface Permission {
		CertificateAuthorityArn?: string;
		CreatedAt?: Date;
		Principal?: string;
		SourceAccount?: string;
		Actions?: Array<ActionType>;
		Policy?: string;
	}

	export interface ListPermissionsRequest {
		CertificateAuthorityArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsRequest {
		CertificateAuthorityArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface RestoreCertificateAuthorityRequest {
		CertificateAuthorityArn: string;
	}

	export interface RevokeCertificateRequest {
		CertificateAuthorityArn: string;
		CertificateSerial: string;
		RevocationReason: RevokeCertificateRequestRevocationReason;
	}

	export enum RevokeCertificateRequestRevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CERTIFICATE_AUTHORITY_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERSEDED = 4, CESSATION_OF_OPERATION = 5, PRIVILEGE_WITHDRAWN = 6, A_A_COMPROMISE = 7 }

	export interface RequestAlreadyProcessedException {
	}

	export interface TagCertificateAuthorityRequest {
		CertificateAuthorityArn: string;
		Tags: Array<Tag>;
	}

	export interface TooManyTagsException {
	}

	export interface UntagCertificateAuthorityRequest {
		CertificateAuthorityArn: string;
		Tags: Array<Tag>;
	}

	export interface UpdateCertificateAuthorityRequest {
		CertificateAuthorityArn: string;

		/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
		RevocationConfiguration?: RevocationConfiguration;
		Status?: CertificateAuthorityStatus;
	}

	export enum AuditReportResponseFormat { JSON = 0, CSV = 1 }

	export enum AuditReportStatus { CREATING = 0, SUCCESS = 1, FAILED = 2 }

	export enum CertificateAuthorityType { ROOT = 0, SUBORDINATE = 1 }

	export enum FailureReason { REQUEST_TIMED_OUT = 0, UNSUPPORTED_ALGORITHM = 1, OTHER = 2 }

	export enum KeyAlgorithm { RSA_2048 = 0, RSA_4096 = 1, EC_prime256v1 = 2, EC_secp384r1 = 3 }

	export enum SigningAlgorithm { SHA256WITHECDSA = 0, SHA384WITHECDSA = 1, SHA512WITHECDSA = 2, SHA256WITHRSA = 3, SHA384WITHRSA = 4, SHA512WITHRSA = 5 }

	export enum RevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CERTIFICATE_AUTHORITY_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERSEDED = 4, CESSATION_OF_OPERATION = 5, PRIVILEGE_WITHDRAWN = 6, A_A_COMPROMISE = 7 }

	export enum ValidityPeriodType { END_DATE = 0, ABSOLUTE = 1, DAYS = 2, MONTHS = 3, YEARS = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, the certificate revocation list (CRL) configuration, the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.
		 * Post #X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority
		 * @return {CreateCertificateAuthorityResponse} Success
		 */
		CreateCertificateAuthority(requestBody: CreateCertificateAuthorityRequest): Observable<CreateCertificateAuthorityResponse> {
			return this.http.post<CreateCertificateAuthorityResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a>IssueCertificate</a> and <a>RevokeCertificate</a> actions use the private key.
		 * Post #X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport
		 * @return {CreateCertificateAuthorityAuditReportResponse} Success
		 */
		CreateCertificateAuthorityAuditReport(requestBody: CreateCertificateAuthorityAuditReportRequest): Observable<CreateCertificateAuthorityAuditReportResponse> {
			return this.http.post<CreateCertificateAuthorityAuditReportResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns permissions from a private CA to a designated AWS service. Services are specified by their service principals and can be given permission to create and retrieve certificates on a private CA. Services can also be given permission to list the active permissions that the private CA has granted. For ACM to automatically renew your private CA's certificates, you must assign all possible permissions from the CA to the ACM service principal.</p> <p>At this time, you can only assign permissions to ACM (<code>acm.amazonaws.com</code>). Permissions can be revoked with the <a>DeletePermission</a> action and listed with the <a>ListPermissions</a> action.</p>
		 * Post #X-Amz-Target=ACMPrivateCA.CreatePermission
		 * @return {void} Success
		 */
		CreatePermission(requestBody: CreatePermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.CreatePermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a>ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a>UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into ACM Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a>DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a>DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a>RestoreCertificateAuthority</a> action.</p>
		 * Post #X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority
		 * @return {void} Success
		 */
		DeleteCertificateAuthority(requestBody: DeleteCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes permissions that a private CA assigned to a designated AWS service. Permissions can be created with the <a>CreatePermission</a> action and listed with the <a>ListPermissions</a> action.
		 * Post #X-Amz-Target=ACMPrivateCA.DeletePermission
		 * @return {void} Success
		 */
		DeletePermission(requestBody: DeletePermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DeletePermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists information about your private certificate authority (CA). You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - ACM Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your ACM Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into PCA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or backend AWS failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority
		 * @return {DescribeCertificateAuthorityResponse} Success
		 */
		DescribeCertificateAuthority(requestBody: DescribeCertificateAuthorityRequest): Observable<DescribeCertificateAuthorityResponse> {
			return this.http.post<DescribeCertificateAuthorityResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about a specific audit report created by calling the <a>CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a>IssueCertificate</a> action or the <a>RevokeCertificate</a> action.
		 * Post #X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport
		 * @return {DescribeCertificateAuthorityAuditReportResponse} Success
		 */
		DescribeCertificateAuthorityAuditReport(requestBody: DescribeCertificateAuthorityAuditReportRequest): Observable<DescribeCertificateAuthorityAuditReportResponse> {
			return this.http.post<DescribeCertificateAuthorityAuditReportResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a certificate from your private CA. The ARN of the certificate is returned when you call the <a>IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a>CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA.
		 * Post #X-Amz-Target=ACMPrivateCA.GetCertificate
		 * @return {GetCertificateResponse} Success
		 */
		GetCertificate(requestBody: GetCertificateRequest): Observable<GetCertificateResponse> {
			return this.http.post<GetCertificateResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.GetCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the certificate and certificate chain for your private certificate authority (CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it.
		 * Post #X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate
		 * @return {GetCertificateAuthorityCertificateResponse} Success
		 */
		GetCertificateAuthorityCertificate(requestBody: GetCertificateAuthorityCertificateRequest): Observable<GetCertificateAuthorityCertificateResponse> {
			return this.http.post<GetCertificateAuthorityCertificateResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a>CreateCertificateAuthority</a> action. Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into ACM Private CA by calling the <a>ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string.
		 * Post #X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr
		 * @return {GetCertificateAuthorityCsrResponse} Success
		 */
		GetCertificateAuthorityCsr(requestBody: GetCertificateAuthorityCsrRequest): Observable<GetCertificateAuthorityCsrResponse> {
			return this.http.post<GetCertificateAuthorityCsrResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports a signed private CA certificate into ACM Private CA. This action is used when you are using a chain of trust whose root is located outside ACM Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In ACM Private CA, call the <a>CreateCertificateAuthority</a> action to create the private CA that that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a>GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted either by an on-premises PKI hierarchy or a commercial CA..</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>The following requirements apply when you import a CA certificate.</p> <ul> <li> <p>You cannot import a non-self-signed certificate for use as a root CA.</p> </li> <li> <p>You cannot import a self-signed certificate for use as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your ACM Private CA-hosted or on-premises CA certificate must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate
		 * @return {void} Success
		 */
		ImportCertificateAuthorityCertificate(requestBody: ImportCertificateAuthorityCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Uses your private certificate authority (CA) to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a>GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using ACM Private CA.</p> </note>
		 * Post #X-Amz-Target=ACMPrivateCA.IssueCertificate
		 * @return {IssueCertificateResponse} Success
		 */
		IssueCertificate(requestBody: IssueCertificateRequest): Observable<IssueCertificateResponse> {
			return this.http.post<IssueCertificateResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.IssueCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the private certificate authorities that you created by using the <a>CreateCertificateAuthority</a> action.
		 * Post #X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCertificateAuthoritiesResponse} Success
		 */
		ListCertificateAuthorities(MaxResults: string, NextToken: string, requestBody: ListCertificateAuthoritiesRequest): Observable<ListCertificateAuthoritiesResponse> {
			return this.http.post<ListCertificateAuthoritiesResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the permissions, if any, that have been assigned by a private CA. Permissions can be granted with the <a>CreatePermission</a> action and revoked with the <a>DeletePermission</a> action.
		 * Post #X-Amz-Target=ACMPrivateCA.ListPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(MaxResults: string, NextToken: string, requestBody: ListPermissionsRequest): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a>TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a>UntagCertificateAuthority</a> action to remove tags.
		 * Post #X-Amz-Target=ACMPrivateCA.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(MaxResults: string, NextToken: string, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a>DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a>DescribeCertificateAuthority</a> or <a>ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a>UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a>ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
		 * Post #X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority
		 * @return {void} Success
		 */
		RestoreCertificateAuthority(requestBody: RestoreCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Revokes a certificate that was issued inside ACM Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. ACM Private CA writes the CRL to an S3 bucket that you specify. For more information about revocation, see the <a>CrlConfiguration</a> structure. ACM Private CA also writes revocation information to the audit report. For more information, see <a>CreateCertificateAuthorityAuditReport</a>. </p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>
		 * Post #X-Amz-Target=ACMPrivateCA.RevokeCertificate
		 * @return {void} Success
		 */
		RevokeCertificate(requestBody: RevokeCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.RevokeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a>UntagCertificateAuthority</a> action. Call the <a>ListTags</a> action to see what tags are associated with your CA.
		 * Post #X-Amz-Target=ACMPrivateCA.TagCertificateAuthority
		 * @return {void} Success
		 */
		TagCertificateAuthority(requestBody: TagCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a>TagCertificateAuthority</a>. Call the <a>ListTags</a> action to see what tags are associated with your CA.
		 * Post #X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority
		 * @return {void} Success
		 */
		UntagCertificateAuthority(requestBody: UntagCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.
		 * Post #X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority
		 * @return {void} Success
		 */
		UpdateCertificateAuthority(requestBody: UpdateCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum CreateCertificateAuthorityX_Amz_Target { ACMPrivateCA_CreateCertificateAuthority = 0 }

	export enum CreateCertificateAuthorityAuditReportX_Amz_Target { ACMPrivateCA_CreateCertificateAuthorityAuditReport = 0 }

	export enum CreatePermissionX_Amz_Target { ACMPrivateCA_CreatePermission = 0 }

	export enum DeleteCertificateAuthorityX_Amz_Target { ACMPrivateCA_DeleteCertificateAuthority = 0 }

	export enum DeletePermissionX_Amz_Target { ACMPrivateCA_DeletePermission = 0 }

	export enum DescribeCertificateAuthorityX_Amz_Target { ACMPrivateCA_DescribeCertificateAuthority = 0 }

	export enum DescribeCertificateAuthorityAuditReportX_Amz_Target { ACMPrivateCA_DescribeCertificateAuthorityAuditReport = 0 }

	export enum GetCertificateX_Amz_Target { ACMPrivateCA_GetCertificate = 0 }

	export enum GetCertificateAuthorityCertificateX_Amz_Target { ACMPrivateCA_GetCertificateAuthorityCertificate = 0 }

	export enum GetCertificateAuthorityCsrX_Amz_Target { ACMPrivateCA_GetCertificateAuthorityCsr = 0 }

	export enum ImportCertificateAuthorityCertificateX_Amz_Target { ACMPrivateCA_ImportCertificateAuthorityCertificate = 0 }

	export enum IssueCertificateX_Amz_Target { ACMPrivateCA_IssueCertificate = 0 }

	export enum ListCertificateAuthoritiesX_Amz_Target { ACMPrivateCA_ListCertificateAuthorities = 0 }

	export enum ListPermissionsX_Amz_Target { ACMPrivateCA_ListPermissions = 0 }

	export enum ListTagsX_Amz_Target { ACMPrivateCA_ListTags = 0 }

	export enum RestoreCertificateAuthorityX_Amz_Target { ACMPrivateCA_RestoreCertificateAuthority = 0 }

	export enum RevokeCertificateX_Amz_Target { ACMPrivateCA_RevokeCertificate = 0 }

	export enum TagCertificateAuthorityX_Amz_Target { ACMPrivateCA_TagCertificateAuthority = 0 }

	export enum UntagCertificateAuthorityX_Amz_Target { ACMPrivateCA_UntagCertificateAuthority = 0 }

	export enum UpdateCertificateAuthorityX_Amz_Target { ACMPrivateCA_UpdateCertificateAuthority = 0 }

}

