import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddTagsToCertificateRequest {

		/** Required */
		CertificateArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface AddTagsToCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToCertificateRequestFormGroup() {
		return new FormGroup<AddTagsToCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key-value pair that identifies or specifies metadata about an ACM resource. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A key-value pair that identifies or specifies metadata about an ACM resource. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidArnException {
	}
	export interface InvalidArnExceptionFormProperties {
	}
	export function CreateInvalidArnExceptionFormGroup() {
		return new FormGroup<InvalidArnExceptionFormProperties>({
		});

	}

	export interface InvalidTagException {
	}
	export interface InvalidTagExceptionFormProperties {
	}
	export function CreateInvalidTagExceptionFormGroup() {
		return new FormGroup<InvalidTagExceptionFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface TagPolicyException {
	}
	export interface TagPolicyExceptionFormProperties {
	}
	export function CreateTagPolicyExceptionFormGroup() {
		return new FormGroup<TagPolicyExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface DeleteCertificateRequest {

		/** Required */
		CertificateArn: string;
	}
	export interface DeleteCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateRequestFormGroup() {
		return new FormGroup<DeleteCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface DescribeCertificateResponse {
		Certificate?: CertificateDetail;
	}
	export interface DescribeCertificateResponseFormProperties {
	}
	export function CreateDescribeCertificateResponseFormGroup() {
		return new FormGroup<DescribeCertificateResponseFormProperties>({
		});

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
		Status?: CertificateStatus;
		RevokedAt?: Date;
		RevocationReason?: RevocationReason;
		NotBefore?: Date;
		NotAfter?: Date;
		KeyAlgorithm?: KeyAlgorithm;
		SignatureAlgorithm?: string;
		InUseBy?: Array<string>;
		FailureReason?: FailureReason;
		Type?: CertificateType;
		RenewalSummary?: RenewalSummary;
		KeyUsages?: Array<KeyUsage>;
		ExtendedKeyUsages?: Array<ExtendedKeyUsage>;
		CertificateAuthorityArn?: string;
		RenewalEligibility?: RenewalEligibility;
		Options?: CertificateOptions;
	}

	/** Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request.  */
	export interface CertificateDetailFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Serial: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		Issuer: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		IssuedAt: FormControl<Date | null | undefined>,
		ImportedAt: FormControl<Date | null | undefined>,
		Status: FormControl<CertificateStatus | null | undefined>,
		RevokedAt: FormControl<Date | null | undefined>,
		RevocationReason: FormControl<RevocationReason | null | undefined>,
		NotBefore: FormControl<Date | null | undefined>,
		NotAfter: FormControl<Date | null | undefined>,
		KeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,
		SignatureAlgorithm: FormControl<string | null | undefined>,
		FailureReason: FormControl<FailureReason | null | undefined>,
		Type: FormControl<CertificateType | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		RenewalEligibility: FormControl<RenewalEligibility | null | undefined>,
	}
	export function CreateCertificateDetailFormGroup() {
		return new FormGroup<CertificateDetailFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			Issuer: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			IssuedAt: new FormControl<Date | null | undefined>(undefined),
			ImportedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<CertificateStatus | null | undefined>(undefined),
			RevokedAt: new FormControl<Date | null | undefined>(undefined),
			RevocationReason: new FormControl<RevocationReason | null | undefined>(undefined),
			NotBefore: new FormControl<Date | null | undefined>(undefined),
			NotAfter: new FormControl<Date | null | undefined>(undefined),
			KeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined),
			SignatureAlgorithm: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<FailureReason | null | undefined>(undefined),
			Type: new FormControl<CertificateType | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
			RenewalEligibility: new FormControl<RenewalEligibility | null | undefined>(undefined),
		});

	}


	/** Contains information about the validation of each domain name in the certificate. */
	export interface DomainValidation {

		/** Required */
		DomainName: string;
		ValidationEmails?: Array<string>;
		ValidationDomain?: string;
		ValidationStatus?: DomainStatus;
		ResourceRecord?: ResourceRecord;
		ValidationMethod?: ValidationMethod;
	}

	/** Contains information about the validation of each domain name in the certificate. */
	export interface DomainValidationFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		ValidationDomain: FormControl<string | null | undefined>,
		ValidationStatus: FormControl<DomainStatus | null | undefined>,
		ValidationMethod: FormControl<ValidationMethod | null | undefined>,
	}
	export function CreateDomainValidationFormGroup() {
		return new FormGroup<DomainValidationFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationDomain: new FormControl<string | null | undefined>(undefined),
			ValidationStatus: new FormControl<DomainStatus | null | undefined>(undefined),
			ValidationMethod: new FormControl<ValidationMethod | null | undefined>(undefined),
		});

	}

	export enum DomainStatus { PENDING_VALIDATION = 'PENDING_VALIDATION', SUCCESS = 'SUCCESS', FAILED = 'FAILED' }


	/** Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action.  */
	export interface ResourceRecord {

		/** Required */
		Name: string;

		/** Required */
		Type: RecordType;

		/** Required */
		Value: string;
	}

	/** Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action.  */
	export interface ResourceRecordFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<RecordType | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecordFormGroup() {
		return new FormGroup<ResourceRecordFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<RecordType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordType { CNAME = 'CNAME' }

	export enum ValidationMethod { EMAIL = 'EMAIL', DNS = 'DNS' }

	export enum CertificateStatus { PENDING_VALIDATION = 'PENDING_VALIDATION', ISSUED = 'ISSUED', INACTIVE = 'INACTIVE', EXPIRED = 'EXPIRED', VALIDATION_TIMED_OUT = 'VALIDATION_TIMED_OUT', REVOKED = 'REVOKED', FAILED = 'FAILED' }

	export enum RevocationReason { UNSPECIFIED = 'UNSPECIFIED', KEY_COMPROMISE = 'KEY_COMPROMISE', CA_COMPROMISE = 'CA_COMPROMISE', AFFILIATION_CHANGED = 'AFFILIATION_CHANGED', SUPERCEDED = 'SUPERCEDED', CESSATION_OF_OPERATION = 'CESSATION_OF_OPERATION', CERTIFICATE_HOLD = 'CERTIFICATE_HOLD', REMOVE_FROM_CRL = 'REMOVE_FROM_CRL', PRIVILEGE_WITHDRAWN = 'PRIVILEGE_WITHDRAWN', A_A_COMPROMISE = 'A_A_COMPROMISE' }

	export enum KeyAlgorithm { RSA_1024 = 'RSA_1024', RSA_2048 = 'RSA_2048', RSA_3072 = 'RSA_3072', RSA_4096 = 'RSA_4096', EC_prime256v1 = 'EC_prime256v1', EC_secp384r1 = 'EC_secp384r1', EC_secp521r1 = 'EC_secp521r1' }

	export enum FailureReason { NO_AVAILABLE_CONTACTS = 'NO_AVAILABLE_CONTACTS', ADDITIONAL_VERIFICATION_REQUIRED = 'ADDITIONAL_VERIFICATION_REQUIRED', DOMAIN_NOT_ALLOWED = 'DOMAIN_NOT_ALLOWED', INVALID_PUBLIC_DOMAIN = 'INVALID_PUBLIC_DOMAIN', DOMAIN_VALIDATION_DENIED = 'DOMAIN_VALIDATION_DENIED', CAA_ERROR = 'CAA_ERROR', PCA_LIMIT_EXCEEDED = 'PCA_LIMIT_EXCEEDED', PCA_INVALID_ARN = 'PCA_INVALID_ARN', PCA_INVALID_STATE = 'PCA_INVALID_STATE', PCA_REQUEST_FAILED = 'PCA_REQUEST_FAILED', PCA_NAME_CONSTRAINTS_VALIDATION = 'PCA_NAME_CONSTRAINTS_VALIDATION', PCA_RESOURCE_NOT_FOUND = 'PCA_RESOURCE_NOT_FOUND', PCA_INVALID_ARGS = 'PCA_INVALID_ARGS', PCA_INVALID_DURATION = 'PCA_INVALID_DURATION', PCA_ACCESS_DENIED = 'PCA_ACCESS_DENIED', SLR_NOT_FOUND = 'SLR_NOT_FOUND', OTHER = 'OTHER' }

	export enum CertificateType { IMPORTED = 'IMPORTED', AMAZON_ISSUED = 'AMAZON_ISSUED', PRIVATE = 'PRIVATE' }


	/** Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>. */
	export interface RenewalSummary {

		/** Required */
		RenewalStatus: RenewalStatus;

		/** Required */
		DomainValidationOptions: Array<DomainValidation>;
		RenewalStatusReason?: FailureReason;

		/** Required */
		UpdatedAt: Date;
	}

	/** Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>. */
	export interface RenewalSummaryFormProperties {

		/** Required */
		RenewalStatus: FormControl<RenewalStatus | null | undefined>,
		RenewalStatusReason: FormControl<FailureReason | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRenewalSummaryFormGroup() {
		return new FormGroup<RenewalSummaryFormProperties>({
			RenewalStatus: new FormControl<RenewalStatus | null | undefined>(undefined, [Validators.required]),
			RenewalStatusReason: new FormControl<FailureReason | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RenewalStatus { PENDING_AUTO_RENEWAL = 'PENDING_AUTO_RENEWAL', PENDING_VALIDATION = 'PENDING_VALIDATION', SUCCESS = 'SUCCESS', FAILED = 'FAILED' }


	/** The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate. */
	export interface KeyUsage {
		Name?: KeyUsageName;
	}

	/** The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate. */
	export interface KeyUsageFormProperties {
		Name: FormControl<KeyUsageName | null | undefined>,
	}
	export function CreateKeyUsageFormGroup() {
		return new FormGroup<KeyUsageFormProperties>({
			Name: new FormControl<KeyUsageName | null | undefined>(undefined),
		});

	}

	export enum KeyUsageName { DIGITAL_SIGNATURE = 'DIGITAL_SIGNATURE', NON_REPUDIATION = 'NON_REPUDIATION', KEY_ENCIPHERMENT = 'KEY_ENCIPHERMENT', DATA_ENCIPHERMENT = 'DATA_ENCIPHERMENT', KEY_AGREEMENT = 'KEY_AGREEMENT', CERTIFICATE_SIGNING = 'CERTIFICATE_SIGNING', CRL_SIGNING = 'CRL_SIGNING', ENCIPHER_ONLY = 'ENCIPHER_ONLY', DECIPHER_ONLY = 'DECIPHER_ONLY', ANY = 'ANY', CUSTOM = 'CUSTOM' }


	/** The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension.  */
	export interface ExtendedKeyUsage {
		Name?: ExtendedKeyUsageName;
		OID?: string;
	}

	/** The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension.  */
	export interface ExtendedKeyUsageFormProperties {
		Name: FormControl<ExtendedKeyUsageName | null | undefined>,
		OID: FormControl<string | null | undefined>,
	}
	export function CreateExtendedKeyUsageFormGroup() {
		return new FormGroup<ExtendedKeyUsageFormProperties>({
			Name: new FormControl<ExtendedKeyUsageName | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExtendedKeyUsageName { TLS_WEB_SERVER_AUTHENTICATION = 'TLS_WEB_SERVER_AUTHENTICATION', TLS_WEB_CLIENT_AUTHENTICATION = 'TLS_WEB_CLIENT_AUTHENTICATION', CODE_SIGNING = 'CODE_SIGNING', EMAIL_PROTECTION = 'EMAIL_PROTECTION', TIME_STAMPING = 'TIME_STAMPING', OCSP_SIGNING = 'OCSP_SIGNING', IPSEC_END_SYSTEM = 'IPSEC_END_SYSTEM', IPSEC_TUNNEL = 'IPSEC_TUNNEL', IPSEC_USER = 'IPSEC_USER', ANY = 'ANY', NONE = 'NONE', CUSTOM = 'CUSTOM' }

	export enum RenewalEligibility { ELIGIBLE = 'ELIGIBLE', INELIGIBLE = 'INELIGIBLE' }


	/** Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.  */
	export interface CertificateOptions {
		CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference;
	}

	/** Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.  */
	export interface CertificateOptionsFormProperties {
		CertificateTransparencyLoggingPreference: FormControl<CertificateTransparencyLoggingPreference | null | undefined>,
	}
	export function CreateCertificateOptionsFormGroup() {
		return new FormGroup<CertificateOptionsFormProperties>({
			CertificateTransparencyLoggingPreference: new FormControl<CertificateTransparencyLoggingPreference | null | undefined>(undefined),
		});

	}

	export enum CertificateTransparencyLoggingPreference { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface DescribeCertificateRequest {

		/** Required */
		CertificateArn: string;
	}
	export interface DescribeCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificateRequestFormGroup() {
		return new FormGroup<DescribeCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportCertificateResponse {
		Certificate?: string;
		CertificateChain?: string;
		PrivateKey?: string;
	}
	export interface ExportCertificateResponseFormProperties {
		Certificate: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateExportCertificateResponseFormGroup() {
		return new FormGroup<ExportCertificateResponseFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportCertificateRequest {

		/** Required */
		CertificateArn: string;

		/** Required */
		Passphrase: string;
	}
	export interface ExportCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,

		/** Required */
		Passphrase: FormControl<string | null | undefined>,
	}
	export function CreateExportCertificateRequestFormGroup() {
		return new FormGroup<ExportCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Passphrase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RequestInProgressException {
	}
	export interface RequestInProgressExceptionFormProperties {
	}
	export function CreateRequestInProgressExceptionFormGroup() {
		return new FormGroup<RequestInProgressExceptionFormProperties>({
		});

	}

	export interface GetAccountConfigurationResponse {
		ExpiryEvents?: ExpiryEventsConfiguration;
	}
	export interface GetAccountConfigurationResponseFormProperties {
	}
	export function CreateGetAccountConfigurationResponseFormGroup() {
		return new FormGroup<GetAccountConfigurationResponseFormProperties>({
		});

	}


	/** Object containing expiration events options associated with an Amazon Web Services account. */
	export interface ExpiryEventsConfiguration {
		DaysBeforeExpiry?: number | null;
	}

	/** Object containing expiration events options associated with an Amazon Web Services account. */
	export interface ExpiryEventsConfigurationFormProperties {
		DaysBeforeExpiry: FormControl<number | null | undefined>,
	}
	export function CreateExpiryEventsConfigurationFormGroup() {
		return new FormGroup<ExpiryEventsConfigurationFormProperties>({
			DaysBeforeExpiry: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCertificateResponse {
		Certificate?: string;
		CertificateChain?: string;
	}
	export interface GetCertificateResponseFormProperties {
		Certificate: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateResponseFormGroup() {
		return new FormGroup<GetCertificateResponseFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCertificateRequest {

		/** Required */
		CertificateArn: string;
	}
	export interface GetCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateRequestFormGroup() {
		return new FormGroup<GetCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportCertificateResponse {
		CertificateArn?: string;
	}
	export interface ImportCertificateResponseFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateResponseFormGroup() {
		return new FormGroup<ImportCertificateResponseFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportCertificateRequest {
		CertificateArn?: string;

		/** Required */
		Certificate: string;

		/** Required */
		PrivateKey: string;
		CertificateChain?: string;
		Tags?: Array<Tag>;
	}
	export interface ImportCertificateRequestFormProperties {
		CertificateArn: FormControl<string | null | undefined>,

		/** Required */
		Certificate: FormControl<string | null | undefined>,

		/** Required */
		PrivateKey: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateRequestFormGroup() {
		return new FormGroup<ImportCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrivateKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ListCertificatesResponse {
		NextToken?: string;
		CertificateSummaryList?: Array<CertificateSummary>;
	}
	export interface ListCertificatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResponseFormGroup() {
		return new FormGroup<ListCertificatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure is returned in the response object of <a>ListCertificates</a> action.  */
	export interface CertificateSummary {
		CertificateArn?: string;
		DomainName?: string;
		SubjectAlternativeNameSummaries?: Array<string>;
		HasAdditionalSubjectAlternativeNames?: boolean | null;
		Status?: CertificateStatus;
		Type?: CertificateType;
		KeyAlgorithm?: KeyAlgorithm;
		KeyUsages?: Array<KeyUsageName>;
		ExtendedKeyUsages?: Array<ExtendedKeyUsageName>;
		InUse?: boolean | null;
		Exported?: boolean | null;
		RenewalEligibility?: RenewalEligibility;
		NotBefore?: Date;
		NotAfter?: Date;
		CreatedAt?: Date;
		IssuedAt?: Date;
		ImportedAt?: Date;
		RevokedAt?: Date;
	}

	/** This structure is returned in the response object of <a>ListCertificates</a> action.  */
	export interface CertificateSummaryFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		HasAdditionalSubjectAlternativeNames: FormControl<boolean | null | undefined>,
		Status: FormControl<CertificateStatus | null | undefined>,
		Type: FormControl<CertificateType | null | undefined>,
		KeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,
		InUse: FormControl<boolean | null | undefined>,
		Exported: FormControl<boolean | null | undefined>,
		RenewalEligibility: FormControl<RenewalEligibility | null | undefined>,
		NotBefore: FormControl<Date | null | undefined>,
		NotAfter: FormControl<Date | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		IssuedAt: FormControl<Date | null | undefined>,
		ImportedAt: FormControl<Date | null | undefined>,
		RevokedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCertificateSummaryFormGroup() {
		return new FormGroup<CertificateSummaryFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			HasAdditionalSubjectAlternativeNames: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<CertificateStatus | null | undefined>(undefined),
			Type: new FormControl<CertificateType | null | undefined>(undefined),
			KeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined),
			InUse: new FormControl<boolean | null | undefined>(undefined),
			Exported: new FormControl<boolean | null | undefined>(undefined),
			RenewalEligibility: new FormControl<RenewalEligibility | null | undefined>(undefined),
			NotBefore: new FormControl<Date | null | undefined>(undefined),
			NotAfter: new FormControl<Date | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			IssuedAt: new FormControl<Date | null | undefined>(undefined),
			ImportedAt: new FormControl<Date | null | undefined>(undefined),
			RevokedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListCertificatesRequest {
		CertificateStatuses?: Array<CertificateStatus>;
		Includes?: Filters;
		NextToken?: string;
		MaxItems?: number | null;
		SortBy?: SortBy;
		SortOrder?: SortOrder;
	}
	export interface ListCertificatesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		SortBy: FormControl<SortBy | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListCertificatesRequestFormGroup() {
		return new FormGroup<ListCertificatesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			SortBy: new FormControl<SortBy | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list.  */
	export interface Filters {
		extendedKeyUsage?: Array<ExtendedKeyUsageName>;
		keyUsage?: Array<KeyUsageName>;
		keyTypes?: Array<KeyAlgorithm>;
	}

	/** This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list.  */
	export interface FiltersFormProperties {
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
		});

	}

	export enum SortBy { CREATED_AT = 'CREATED_AT' }

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface InvalidArgsException {
	}
	export interface InvalidArgsExceptionFormProperties {
	}
	export function CreateInvalidArgsExceptionFormGroup() {
		return new FormGroup<InvalidArgsExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ListTagsForCertificateResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForCertificateResponseFormProperties {
	}
	export function CreateListTagsForCertificateResponseFormGroup() {
		return new FormGroup<ListTagsForCertificateResponseFormProperties>({
		});

	}

	export interface ListTagsForCertificateRequest {

		/** Required */
		CertificateArn: string;
	}
	export interface ListTagsForCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForCertificateRequestFormGroup() {
		return new FormGroup<ListTagsForCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAccountConfigurationRequest {
		ExpiryEvents?: ExpiryEventsConfiguration;

		/** Required */
		IdempotencyToken: string;
	}
	export interface PutAccountConfigurationRequestFormProperties {

		/** Required */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreatePutAccountConfigurationRequestFormGroup() {
		return new FormGroup<PutAccountConfigurationRequestFormProperties>({
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveTagsFromCertificateRequest {

		/** Required */
		CertificateArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface RemoveTagsFromCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromCertificateRequestFormGroup() {
		return new FormGroup<RemoveTagsFromCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RenewCertificateRequest {

		/** Required */
		CertificateArn: string;
	}
	export interface RenewCertificateRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateRenewCertificateRequestFormGroup() {
		return new FormGroup<RenewCertificateRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RequestCertificateResponse {
		CertificateArn?: string;
	}
	export interface RequestCertificateResponseFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateRequestCertificateResponseFormGroup() {
		return new FormGroup<RequestCertificateResponseFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestCertificateRequest {

		/** Required */
		DomainName: string;
		ValidationMethod?: ValidationMethod;
		SubjectAlternativeNames?: Array<string>;
		IdempotencyToken?: string;
		DomainValidationOptions?: Array<DomainValidationOption>;
		Options?: CertificateOptions;
		CertificateAuthorityArn?: string;
		Tags?: Array<Tag>;
		KeyAlgorithm?: KeyAlgorithm;
	}
	export interface RequestCertificateRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		ValidationMethod: FormControl<ValidationMethod | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		KeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,
	}
	export function CreateRequestCertificateRequestFormGroup() {
		return new FormGroup<RequestCertificateRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationMethod: new FormControl<ValidationMethod | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
			KeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined),
		});

	}


	/** Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership. */
	export interface DomainValidationOption {

		/** Required */
		DomainName: string;

		/** Required */
		ValidationDomain: string;
	}

	/** Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership. */
	export interface DomainValidationOptionFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		ValidationDomain: FormControl<string | null | undefined>,
	}
	export function CreateDomainValidationOptionFormGroup() {
		return new FormGroup<DomainValidationOptionFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidDomainValidationOptionsException {
	}
	export interface InvalidDomainValidationOptionsExceptionFormProperties {
	}
	export function CreateInvalidDomainValidationOptionsExceptionFormGroup() {
		return new FormGroup<InvalidDomainValidationOptionsExceptionFormProperties>({
		});

	}

	export interface ResendValidationEmailRequest {

		/** Required */
		CertificateArn: string;

		/** Required */
		Domain: string;

		/** Required */
		ValidationDomain: string;
	}
	export interface ResendValidationEmailRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		ValidationDomain: FormControl<string | null | undefined>,
	}
	export function CreateResendValidationEmailRequestFormGroup() {
		return new FormGroup<ResendValidationEmailRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidStateException {
	}
	export interface InvalidStateExceptionFormProperties {
	}
	export function CreateInvalidStateExceptionFormGroup() {
		return new FormGroup<InvalidStateExceptionFormProperties>({
		});

	}

	export interface UpdateCertificateOptionsRequest {

		/** Required */
		CertificateArn: string;

		/** Required */
		Options: CertificateOptions;
	}
	export interface UpdateCertificateOptionsRequestFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCertificateOptionsRequestFormGroup() {
		return new FormGroup<UpdateCertificateOptionsRequestFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
		 * Post #X-Amz-Target=CertificateManager.AddTagsToCertificate
		 * @return {void} Success
		 */
		AddTagsToCertificate(requestBody: AddTagsToCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.AddTagsToCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>
		 * Post #X-Amz-Target=CertificateManager.DeleteCertificate
		 * @return {void} Success
		 */
		DeleteCertificate(requestBody: DeleteCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.DeleteCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>
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
		 * Returns the account configuration options associated with an Amazon Web Services account.
		 * Post #X-Amz-Target=CertificateManager.GetAccountConfiguration
		 * @return {GetAccountConfigurationResponse} Success
		 */
		GetAccountConfiguration(): Observable<GetAccountConfigurationResponse> {
			return this.http.post<GetAccountConfigurationResponse>(this.baseUri + '#X-Amz-Target=CertificateManager.GetAccountConfiguration', null, {});
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
		 * <p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>
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
		ListCertificates(MaxItems: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCertificatesRequest): Observable<ListCertificatesResponse> {
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
		 * <p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>
		 * Post #X-Amz-Target=CertificateManager.PutAccountConfiguration
		 * @return {void} Success
		 */
		PutAccountConfiguration(requestBody: PutAccountConfigurationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.PutAccountConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.
		 * Post #X-Amz-Target=CertificateManager.RenewCertificate
		 * @return {void} Success
		 */
		RenewCertificate(requestBody: RenewCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CertificateManager.RenewCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>
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

	export enum AddTagsToCertificateX_Amz_Target { 'CertificateManager.AddTagsToCertificate' = 'CertificateManager.AddTagsToCertificate' }

	export enum DeleteCertificateX_Amz_Target { 'CertificateManager.DeleteCertificate' = 'CertificateManager.DeleteCertificate' }

	export enum DescribeCertificateX_Amz_Target { 'CertificateManager.DescribeCertificate' = 'CertificateManager.DescribeCertificate' }

	export enum ExportCertificateX_Amz_Target { 'CertificateManager.ExportCertificate' = 'CertificateManager.ExportCertificate' }

	export enum GetAccountConfigurationX_Amz_Target { 'CertificateManager.GetAccountConfiguration' = 'CertificateManager.GetAccountConfiguration' }

	export enum GetCertificateX_Amz_Target { 'CertificateManager.GetCertificate' = 'CertificateManager.GetCertificate' }

	export enum ImportCertificateX_Amz_Target { 'CertificateManager.ImportCertificate' = 'CertificateManager.ImportCertificate' }

	export enum ListCertificatesX_Amz_Target { 'CertificateManager.ListCertificates' = 'CertificateManager.ListCertificates' }

	export enum ListTagsForCertificateX_Amz_Target { 'CertificateManager.ListTagsForCertificate' = 'CertificateManager.ListTagsForCertificate' }

	export enum PutAccountConfigurationX_Amz_Target { 'CertificateManager.PutAccountConfiguration' = 'CertificateManager.PutAccountConfiguration' }

	export enum RemoveTagsFromCertificateX_Amz_Target { 'CertificateManager.RemoveTagsFromCertificate' = 'CertificateManager.RemoveTagsFromCertificate' }

	export enum RenewCertificateX_Amz_Target { 'CertificateManager.RenewCertificate' = 'CertificateManager.RenewCertificate' }

	export enum RequestCertificateX_Amz_Target { 'CertificateManager.RequestCertificate' = 'CertificateManager.RequestCertificate' }

	export enum ResendValidationEmailX_Amz_Target { 'CertificateManager.ResendValidationEmail' = 'CertificateManager.ResendValidationEmail' }

	export enum UpdateCertificateOptionsX_Amz_Target { 'CertificateManager.UpdateCertificateOptions' = 'CertificateManager.UpdateCertificateOptions' }

}

