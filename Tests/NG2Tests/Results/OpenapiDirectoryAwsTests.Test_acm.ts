import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddTagsToCertificateRequest {
		CertificateArn: string;
		Tags: Array<Tag>;
	}


	/** A key-value pair that identifies or specifies metadata about an ACM resource. */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidArnException {
	}

	export interface InvalidTagException {
	}

	export interface TooManyTagsException {
	}

	export interface TagPolicyException {
	}

	export interface InvalidParameterException {
	}

	export interface DeleteCertificateRequest {
		CertificateArn: string;
	}

	export interface ResourceInUseException {
	}

	export interface DescribeCertificateResponse {

		/** Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. */
		Certificate?: CertificateDetail;
	}


	/** Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request.  */
	export interface CertificateDetail {
		CertificateArn?: string;
		DomainName?: string;
		SubjectAlternativeNames?: Array<string>;
		DomainValidationOptions?: Array<DomainValidation>;
		Serial?: string;
		Subject?: string;
		Issuer?: string;
		CreatedAt?: Date;
		IssuedAt?: Date;
		ImportedAt?: Date;
		Status?: CertificateDetailStatus;
		RevokedAt?: Date;
		RevocationReason?: CertificateDetailRevocationReason;
		NotBefore?: Date;
		NotAfter?: Date;
		KeyAlgorithm?: CertificateDetailKeyAlgorithm;
		SignatureAlgorithm?: string;
		InUseBy?: Array<string>;
		FailureReason?: CertificateDetailFailureReason;
		Type?: CertificateDetailType;

		/** Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>. */
		RenewalSummary?: RenewalSummary;
		KeyUsages?: Array<KeyUsage>;
		ExtendedKeyUsages?: Array<ExtendedKeyUsage>;
		CertificateAuthorityArn?: string;
		RenewalEligibility?: CertificateDetailRenewalEligibility;

		/** Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>. */
		Options?: CertificateOptions;
	}


	/** Contains information about the validation of each domain name in the certificate. */
	export interface DomainValidation {
		DomainName: string;
		ValidationEmails?: Array<string>;
		ValidationDomain?: string;
		ValidationStatus?: DomainValidationValidationStatus;

		/** Contains a DNS record value that you can use to can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. */
		ResourceRecord?: ResourceRecord;
		ValidationMethod?: DomainValidationValidationMethod;
	}

	export enum DomainValidationValidationStatus { PENDING_VALIDATION = 0, SUCCESS = 1, FAILED = 2 }


	/** Contains a DNS record value that you can use to can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action.  */
	export interface ResourceRecord {
		Name: string;
		Type: ResourceRecordType;
		Value: string;
	}

	export enum ResourceRecordType { CNAME = 0 }

	export enum DomainValidationValidationMethod { EMAIL = 0, DNS = 1 }

	export enum CertificateDetailStatus { PENDING_VALIDATION = 0, ISSUED = 1, INACTIVE = 2, EXPIRED = 3, VALIDATION_TIMED_OUT = 4, REVOKED = 5, FAILED = 6 }

	export enum CertificateDetailRevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CA_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERCEDED = 4, CESSATION_OF_OPERATION = 5, CERTIFICATE_HOLD = 6, REMOVE_FROM_CRL = 7, PRIVILEGE_WITHDRAWN = 8, A_A_COMPROMISE = 9 }

	export enum CertificateDetailKeyAlgorithm { RSA_2048 = 0, RSA_1024 = 1, RSA_4096 = 2, EC_prime256v1 = 3, EC_secp384r1 = 4, EC_secp521r1 = 5 }

	export enum CertificateDetailFailureReason { NO_AVAILABLE_CONTACTS = 0, ADDITIONAL_VERIFICATION_REQUIRED = 1, DOMAIN_NOT_ALLOWED = 2, INVALID_PUBLIC_DOMAIN = 3, DOMAIN_VALIDATION_DENIED = 4, CAA_ERROR = 5, PCA_LIMIT_EXCEEDED = 6, PCA_INVALID_ARN = 7, PCA_INVALID_STATE = 8, PCA_REQUEST_FAILED = 9, PCA_NAME_CONSTRAINTS_VALIDATION = 10, PCA_RESOURCE_NOT_FOUND = 11, PCA_INVALID_ARGS = 12, PCA_INVALID_DURATION = 13, PCA_ACCESS_DENIED = 14, OTHER = 15 }

	export enum CertificateDetailType { IMPORTED = 0, AMAZON_ISSUED = 1, PRIVATE = 2 }


	/** Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>. */
	export interface RenewalSummary {
		RenewalStatus: RenewalSummaryRenewalStatus;
		DomainValidationOptions: Array<DomainValidation>;
		RenewalStatusReason?: CertificateDetailFailureReason;
		UpdatedAt: Date;
	}

	export enum RenewalSummaryRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }


	/** The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate. */
	export interface KeyUsage {
		Name?: KeyUsageName;
	}

	export enum KeyUsageName { DIGITAL_SIGNATURE = 0, NON_REPUDIATION = 1, KEY_ENCIPHERMENT = 2, DATA_ENCIPHERMENT = 3, KEY_AGREEMENT = 4, CERTIFICATE_SIGNING = 5, CRL_SIGNING = 6, ENCIPHER_ONLY = 7, DECIPHER_ONLY = 8, ANY = 9, CUSTOM = 10 }


	/** The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension.  */
	export interface ExtendedKeyUsage {
		Name?: ExtendedKeyUsageName;
		OID?: string;
	}

	export enum ExtendedKeyUsageName { TLS_WEB_SERVER_AUTHENTICATION = 0, TLS_WEB_CLIENT_AUTHENTICATION = 1, CODE_SIGNING = 2, EMAIL_PROTECTION = 3, TIME_STAMPING = 4, OCSP_SIGNING = 5, IPSEC_END_SYSTEM = 6, IPSEC_TUNNEL = 7, IPSEC_USER = 8, ANY = 9, NONE = 10, CUSTOM = 11 }

	export enum CertificateDetailRenewalEligibility { ELIGIBLE = 0, INELIGIBLE = 1 }


	/** Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.  */
	export interface CertificateOptions {
		CertificateTransparencyLoggingPreference?: CertificateOptionsCertificateTransparencyLoggingPreference;
	}

	export enum CertificateOptionsCertificateTransparencyLoggingPreference { ENABLED = 0, DISABLED = 1 }

	export interface DescribeCertificateRequest {
		CertificateArn: string;
	}

	export interface ExportCertificateResponse {
		Certificate?: string;
		CertificateChain?: string;
		PrivateKey?: string;
	}

	export interface ExportCertificateRequest {
		CertificateArn: string;
		Passphrase: string;
	}

	export interface RequestInProgressException {
	}

	export interface GetCertificateResponse {
		Certificate?: string;
		CertificateChain?: string;
	}

	export interface GetCertificateRequest {
		CertificateArn: string;
	}

	export interface ImportCertificateResponse {
		CertificateArn?: string;
	}

	export interface ImportCertificateRequest {
		CertificateArn?: string;
		Certificate: string;
		PrivateKey: string;
		CertificateChain?: string;
		Tags?: Array<Tag>;
	}

	export interface LimitExceededException {
	}

	export interface ListCertificatesResponse {
		NextToken?: string;
		CertificateSummaryList?: Array<CertificateSummary>;
	}


	/** This structure is returned in the response object of <a>ListCertificates</a> action.  */
	export interface CertificateSummary {
		CertificateArn?: string;
		DomainName?: string;
	}

	export interface ListCertificatesRequest {
		CertificateStatuses?: Array<CertificateStatus>;

		/** This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. */
		Includes?: Filters;
		NextToken?: string;
		MaxItems?: number;
	}

	export enum CertificateStatus { PENDING_VALIDATION = 0, ISSUED = 1, INACTIVE = 2, EXPIRED = 3, VALIDATION_TIMED_OUT = 4, REVOKED = 5, FAILED = 6 }


	/** This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list.  */
	export interface Filters {
		extendedKeyUsage?: Array<ExtendedKeyUsageName>;
		keyUsage?: Array<KeyUsageName>;
		keyTypes?: Array<KeyAlgorithm>;
	}

	export enum KeyAlgorithm { RSA_2048 = 0, RSA_1024 = 1, RSA_4096 = 2, EC_prime256v1 = 3, EC_secp384r1 = 4, EC_secp521r1 = 5 }

	export interface InvalidArgsException {
	}

	export interface ListTagsForCertificateResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForCertificateRequest {
		CertificateArn: string;
	}

	export interface RemoveTagsFromCertificateRequest {
		CertificateArn: string;
		Tags: Array<Tag>;
	}

	export interface RenewCertificateRequest {
		CertificateArn: string;
	}

	export interface RequestCertificateResponse {
		CertificateArn?: string;
	}

	export interface RequestCertificateRequest {
		DomainName: string;
		ValidationMethod?: DomainValidationValidationMethod;
		SubjectAlternativeNames?: Array<string>;
		IdempotencyToken?: string;
		DomainValidationOptions?: Array<DomainValidationOption>;

		/** Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>. */
		Options?: CertificateOptions;
		CertificateAuthorityArn?: string;
		Tags?: Array<Tag>;
	}


	/** Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership. */
	export interface DomainValidationOption {
		DomainName: string;
		ValidationDomain: string;
	}

	export interface InvalidDomainValidationOptionsException {
	}

	export interface ResendValidationEmailRequest {
		CertificateArn: string;
		Domain: string;
		ValidationDomain: string;
	}

	export interface InvalidStateException {
	}

	export interface UpdateCertificateOptionsRequest {
		CertificateArn: string;

		/**
		 * Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.
		 * Required
		 */
		Options: CertificateOptions;
	}

	export enum RevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CA_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERCEDED = 4, CESSATION_OF_OPERATION = 5, CERTIFICATE_HOLD = 6, REMOVE_FROM_CRL = 7, PRIVILEGE_WITHDRAWN = 8, A_A_COMPROMISE = 9 }

	export enum FailureReason { NO_AVAILABLE_CONTACTS = 0, ADDITIONAL_VERIFICATION_REQUIRED = 1, DOMAIN_NOT_ALLOWED = 2, INVALID_PUBLIC_DOMAIN = 3, DOMAIN_VALIDATION_DENIED = 4, CAA_ERROR = 5, PCA_LIMIT_EXCEEDED = 6, PCA_INVALID_ARN = 7, PCA_INVALID_STATE = 8, PCA_REQUEST_FAILED = 9, PCA_NAME_CONSTRAINTS_VALIDATION = 10, PCA_RESOURCE_NOT_FOUND = 11, PCA_INVALID_ARGS = 12, PCA_INVALID_DURATION = 13, PCA_ACCESS_DENIED = 14, OTHER = 15 }

	export enum CertificateType { IMPORTED = 0, AMAZON_ISSUED = 1, PRIVATE = 2 }

	export enum RenewalEligibility { ELIGIBLE = 0, INELIGIBLE = 1 }

	export enum CertificateTransparencyLoggingPreference { ENABLED = 0, DISABLED = 1 }

	export enum DomainStatus { PENDING_VALIDATION = 0, SUCCESS = 1, FAILED = 2 }

	export enum ValidationMethod { EMAIL = 0, DNS = 1 }

	export enum RecordType { CNAME = 0 }

	export enum RenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
		 * Post #X-Amz-Target=CertificateManager.AddTagsToCertificate
		 * @return {void} Success
		 */
		AddTagsToCertificate(requestBody: AddTagsToCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.AddTagsToCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by AWS services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another AWS service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>
		 * Post #X-Amz-Target=CertificateManager.DeleteCertificate
		 * @return {void} Success
		 */
		DeleteCertificate(requestBody: DeleteCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.DeleteCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns detailed metadata about the specified ACM certificate.
		 * Post #X-Amz-Target=CertificateManager.DescribeCertificate
		 * @return {DescribeCertificateResponse} Success
		 */
		DescribeCertificate(requestBody: DescribeCertificateRequest): Observable<DescribeCertificateResponse> {
			return this.http.post<DescribeCertificateResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.DescribeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a Private Certificate</a>.</p>
		 * Post #X-Amz-Target=CertificateManager.ExportCertificate
		 * @return {ExportCertificateResponse} Success
		 */
		ExportCertificate(requestBody: ExportCertificateRequest): Observable<ExportCertificateResponse> {
			return this.http.post<ExportCertificateResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.ExportCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode the certificates and inspect individual fields.
		 * Post #X-Amz-Target=CertificateManager.GetCertificate
		 * @return {GetCertificateResponse} Success
		 */
		GetCertificate(requestBody: GetCertificateRequest): Observable<GetCertificateResponse> {
			return this.http.post<GetCertificateResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.GetCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports a certificate into AWS Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>AWS Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certifica</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>file://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>file://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>
		 * Post #X-Amz-Target=CertificateManager.ImportCertificate
		 * @return {ImportCertificateResponse} Success
		 */
		ImportCertificate(requestBody: ImportCertificateRequest): Observable<ImportCertificateResponse> {
			return this.http.post<ImportCertificateResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.ImportCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.
		 * Post #X-Amz-Target=CertificateManager.ListCertificates
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCertificatesResponse} Success
		 */
		ListCertificates(MaxItems: string, NextToken: string, requestBody: ListCertificatesRequest): Observable<ListCertificatesResponse> {
			return this.http.post<ListCertificatesResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.ListCertificates?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action.
		 * Post #X-Amz-Target=CertificateManager.ListTagsForCertificate
		 * @return {ListTagsForCertificateResponse} Success
		 */
		ListTagsForCertificate(requestBody: ListTagsForCertificateRequest): Observable<ListTagsForCertificateResponse> {
			return this.http.post<ListTagsForCertificateResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.ListTagsForCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
		 * Post #X-Amz-Target=CertificateManager.RemoveTagsFromCertificate
		 * @return {void} Success
		 */
		RemoveTagsFromCertificate(requestBody: RemoveTagsFromCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Renews an eligable ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your ACM PCA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.
		 * Post #X-Amz-Target=CertificateManager.RenewCertificate
		 * @return {void} Success
		 */
		RenewCertificate(requestBody: RenewCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.RenewCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Requests an ACM certificate for use with other AWS services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p>
		 * Post #X-Amz-Target=CertificateManager.RequestCertificate
		 * @return {RequestCertificateResponse} Success
		 */
		RequestCertificate(requestBody: RequestCertificateRequest): Observable<RequestCertificateResponse> {
			return this.http.post<RequestCertificateResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.RequestCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>.
		 * Post #X-Amz-Target=CertificateManager.ResendValidationEmail
		 * @return {void} Success
		 */
		ResendValidationEmail(requestBody: ResendValidationEmailRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.ResendValidationEmail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>.
		 * Post #X-Amz-Target=CertificateManager.UpdateCertificateOptions
		 * @return {void} Success
		 */
		UpdateCertificateOptions(requestBody: UpdateCertificateOptionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.UpdateCertificateOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AddTagsToCertificateX_Amz_Target { CertificateManager_AddTagsToCertificate = 0 }

	export enum DeleteCertificateX_Amz_Target { CertificateManager_DeleteCertificate = 0 }

	export enum DescribeCertificateX_Amz_Target { CertificateManager_DescribeCertificate = 0 }

	export enum ExportCertificateX_Amz_Target { CertificateManager_ExportCertificate = 0 }

	export enum GetCertificateX_Amz_Target { CertificateManager_GetCertificate = 0 }

	export enum ImportCertificateX_Amz_Target { CertificateManager_ImportCertificate = 0 }

	export enum ListCertificatesX_Amz_Target { CertificateManager_ListCertificates = 0 }

	export enum ListTagsForCertificateX_Amz_Target { CertificateManager_ListTagsForCertificate = 0 }

	export enum RemoveTagsFromCertificateX_Amz_Target { CertificateManager_RemoveTagsFromCertificate = 0 }

	export enum RenewCertificateX_Amz_Target { CertificateManager_RenewCertificate = 0 }

	export enum RequestCertificateX_Amz_Target { CertificateManager_RequestCertificate = 0 }

	export enum ResendValidationEmailX_Amz_Target { CertificateManager_ResendValidationEmail = 0 }

	export enum UpdateCertificateOptionsX_Amz_Target { CertificateManager_UpdateCertificateOptions = 0 }

}

