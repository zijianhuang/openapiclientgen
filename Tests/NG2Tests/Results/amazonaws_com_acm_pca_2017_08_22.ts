import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCertificateAuthorityResponse {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn?: string | null;
	}
	export interface CreateCertificateAuthorityResponseFormProperties {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityResponseFormGroup() {
		return new FormGroup<CreateCertificateAuthorityResponseFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface CreateCertificateAuthorityRequest {

		/**
		 * Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action.
		 * Required
		 */
		CertificateAuthorityConfiguration: CertificateAuthorityConfiguration;

		/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
		RevocationConfiguration?: RevocationConfiguration;

		/** Required */
		CertificateAuthorityType: CreateCertificateAuthorityRequestCertificateAuthorityType;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		IdempotencyToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityType: FormControl<CreateCertificateAuthorityRequestCertificateAuthorityType | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityRequestFormGroup() {
		return new FormGroup<CreateCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityType: new FormControl<CreateCertificateAuthorityRequestCertificateAuthorityType | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]*')]),
		});

	}


	/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action.  */
	export interface CertificateAuthorityConfiguration {

		/** Required */
		KeyAlgorithm: CertificateAuthorityConfigurationKeyAlgorithm;

		/** Required */
		SigningAlgorithm: CertificateAuthorityConfigurationSigningAlgorithm;

		/**
		 * Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
		 * Required
		 */
		Subject: ASN1Subject;
	}

	/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action.  */
	export interface CertificateAuthorityConfigurationFormProperties {

		/** Required */
		KeyAlgorithm: FormControl<CertificateAuthorityConfigurationKeyAlgorithm | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<CertificateAuthorityConfigurationSigningAlgorithm | null | undefined>,
	}
	export function CreateCertificateAuthorityConfigurationFormGroup() {
		return new FormGroup<CertificateAuthorityConfigurationFormProperties>({
			KeyAlgorithm: new FormControl<CertificateAuthorityConfigurationKeyAlgorithm | null | undefined>(undefined, [Validators.required]),
			SigningAlgorithm: new FormControl<CertificateAuthorityConfigurationSigningAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CertificateAuthorityConfigurationKeyAlgorithm { RSA_2048 = 0, RSA_4096 = 1, EC_prime256v1 = 2, EC_secp384r1 = 3 }

	export enum CertificateAuthorityConfigurationSigningAlgorithm { SHA256WITHECDSA = 0, SHA384WITHECDSA = 1, SHA512WITHECDSA = 2, SHA256WITHRSA = 3, SHA384WITHRSA = 4, SHA512WITHRSA = 5 }


	/** Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.  */
	export interface ASN1Subject {
		Country?: string | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		Organization?: string | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		OrganizationalUnit?: string | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		DistinguishedNameQualifier?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		State?: string | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		CommonName?: string | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		SerialNumber?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Locality?: string | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		Title?: string | null;

		/**
		 * Max length: 40
		 * Min length: 0
		 */
		Surname?: string | null;

		/**
		 * Max length: 16
		 * Min length: 0
		 */
		GivenName?: string | null;

		/**
		 * Max length: 5
		 * Min length: 0
		 */
		Initials?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Pseudonym?: string | null;

		/**
		 * Max length: 3
		 * Min length: 0
		 */
		GenerationQualifier?: string | null;
	}

	/** Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.  */
	export interface ASN1SubjectFormProperties {
		Country: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		Organization: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		OrganizationalUnit: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		DistinguishedNameQualifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		State: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		CommonName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		SerialNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Locality: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 0
		 */
		Surname: FormControl<string | null | undefined>,

		/**
		 * Max length: 16
		 * Min length: 0
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * Max length: 5
		 * Min length: 0
		 */
		Initials: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Pseudonym: FormControl<string | null | undefined>,

		/**
		 * Max length: 3
		 * Min length: 0
		 */
		GenerationQualifier: FormControl<string | null | undefined>,
	}
	export function CreateASN1SubjectFormGroup() {
		return new FormGroup<ASN1SubjectFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z]{2}')]),
			Organization: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			OrganizationalUnit: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			DistinguishedNameQualifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9\'()+-.?:/= ]*')]),
			State: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			CommonName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			SerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			Locality: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(40)]),
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(16)]),
			Initials: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(5)]),
			Pseudonym: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			GenerationQualifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(3)]),
		});

	}


	/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
	export interface RevocationConfiguration {

		/** <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM Private CA. </p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> */
		CrlConfiguration?: CrlConfiguration;
	}

	/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
	export interface RevocationConfigurationFormProperties {
	}
	export function CreateRevocationConfigurationFormGroup() {
		return new FormGroup<RevocationConfigurationFormProperties>({
		});

	}


	/** <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM Private CA. </p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> */
	export interface CrlConfiguration {

		/** Required */
		Enabled: boolean;

		/**
		 * Minimum: 1
		 * Maximum: 5000
		 */
		ExpirationInDays?: number | null;

		/**
		 * Max length: 253
		 * Min length: 0
		 */
		CustomCname?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		S3BucketName?: string | null;
	}

	/** <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM Private CA. </p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> */
	export interface CrlConfigurationFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5000
		 */
		ExpirationInDays: FormControl<number | null | undefined>,

		/**
		 * Max length: 253
		 * Min length: 0
		 */
		CustomCname: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		S3BucketName: FormControl<string | null | undefined>,
	}
	export function CreateCrlConfigurationFormGroup() {
		return new FormGroup<CrlConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ExpirationInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5000)]),
			CustomCname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(253)]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
		});

	}

	export enum CreateCertificateAuthorityRequestCertificateAuthorityType { ROOT = 0, SUBORDINATE = 1 }


	/** Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a>TagCertificateAuthority</a> action. To remove a tag, call the <a>UntagCertificateAuthority</a> action.  */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Value?: string | null;
	}

	/** Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a>TagCertificateAuthority</a> action. To remove a tag, call the <a>UntagCertificateAuthority</a> action.  */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface InvalidArgsException {
	}
	export interface InvalidArgsExceptionFormProperties {
	}
	export function CreateInvalidArgsExceptionFormGroup() {
		return new FormGroup<InvalidArgsExceptionFormProperties>({
		});

	}

	export interface InvalidPolicyException {
	}
	export interface InvalidPolicyExceptionFormProperties {
	}
	export function CreateInvalidPolicyExceptionFormGroup() {
		return new FormGroup<InvalidPolicyExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateCertificateAuthorityAuditReportResponse {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AuditReportId?: string | null;
		S3Key?: string | null;
	}
	export interface CreateCertificateAuthorityAuditReportResponseFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AuditReportId: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityAuditReportResponseFormGroup() {
		return new FormGroup<CreateCertificateAuthorityAuditReportResponseFormProperties>({
			AuditReportId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCertificateAuthorityAuditReportRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/** Required */
		S3BucketName: string;

		/** Required */
		AuditReportResponseFormat: CreateCertificateAuthorityAuditReportRequestAuditReportResponseFormat;
	}
	export interface CreateCertificateAuthorityAuditReportRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,

		/** Required */
		AuditReportResponseFormat: FormControl<CreateCertificateAuthorityAuditReportRequestAuditReportResponseFormat | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityAuditReportRequestFormGroup() {
		return new FormGroup<CreateCertificateAuthorityAuditReportRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuditReportResponseFormat: new FormControl<CreateCertificateAuthorityAuditReportRequestAuditReportResponseFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateCertificateAuthorityAuditReportRequestAuditReportResponseFormat { JSON = 0, CSV = 1 }

	export interface RequestInProgressException {
	}
	export interface RequestInProgressExceptionFormProperties {
	}
	export function CreateRequestInProgressExceptionFormGroup() {
		return new FormGroup<RequestInProgressExceptionFormProperties>({
		});

	}

	export interface RequestFailedException {
	}
	export interface RequestFailedExceptionFormProperties {
	}
	export function CreateRequestFailedExceptionFormGroup() {
		return new FormGroup<RequestFailedExceptionFormProperties>({
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

	export interface InvalidStateException {
	}
	export interface InvalidStateExceptionFormProperties {
	}
	export function CreateInvalidStateExceptionFormGroup() {
		return new FormGroup<InvalidStateExceptionFormProperties>({
		});

	}

	export interface CreatePermissionRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		Principal: string;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		SourceAccount?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		Actions: Array<ActionType>;
	}
	export interface CreatePermissionRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		Principal: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		SourceAccount: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionRequestFormGroup() {
		return new FormGroup<CreatePermissionRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[^*]+$')]),
			SourceAccount: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
		});

	}

	export enum ActionType { IssueCertificate = 0, GetCertificate = 1, ListPermissions = 2 }

	export interface PermissionAlreadyExistsException {
	}
	export interface PermissionAlreadyExistsExceptionFormProperties {
	}
	export function CreatePermissionAlreadyExistsExceptionFormGroup() {
		return new FormGroup<PermissionAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface DeleteCertificateAuthorityRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Minimum: 7
		 * Maximum: 30
		 */
		PermanentDeletionTimeInDays?: number | null;
	}
	export interface DeleteCertificateAuthorityRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 7
		 * Maximum: 30
		 */
		PermanentDeletionTimeInDays: FormControl<number | null | undefined>,
	}
	export function CreateDeleteCertificateAuthorityRequestFormGroup() {
		return new FormGroup<DeleteCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			PermanentDeletionTimeInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(7), Validators.max(30)]),
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface DeletePermissionRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		Principal: string;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		SourceAccount?: string | null;
	}
	export interface DeletePermissionRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		Principal: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		SourceAccount: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionRequestFormGroup() {
		return new FormGroup<DeletePermissionRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[^*]+$')]),
			SourceAccount: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
		});

	}

	export interface DescribeCertificateAuthorityResponse {

		/** Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> action to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a>ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM). */
		CertificateAuthority?: CertificateAuthority;
	}
	export interface DescribeCertificateAuthorityResponseFormProperties {
	}
	export function CreateDescribeCertificateAuthorityResponseFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityResponseFormProperties>({
		});

	}


	/** Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> action to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a>ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM).  */
	export interface CertificateAuthority {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		Arn?: string | null;
		CreatedAt?: Date | null;
		LastStateChangeAt?: Date | null;
		Type?: CreateCertificateAuthorityRequestCertificateAuthorityType | null;
		Serial?: string | null;
		Status?: CertificateAuthorityStatus | null;
		NotBefore?: Date | null;
		NotAfter?: Date | null;
		FailureReason?: CertificateAuthorityFailureReason | null;

		/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action. */
		CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;

		/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
		RevocationConfiguration?: RevocationConfiguration;
		RestorableUntil?: Date | null;
	}

	/** Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> action to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a>ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM).  */
	export interface CertificateAuthorityFormProperties {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastStateChangeAt: FormControl<Date | null | undefined>,
		Type: FormControl<CreateCertificateAuthorityRequestCertificateAuthorityType | null | undefined>,
		Serial: FormControl<string | null | undefined>,
		Status: FormControl<CertificateAuthorityStatus | null | undefined>,
		NotBefore: FormControl<Date | null | undefined>,
		NotAfter: FormControl<Date | null | undefined>,
		FailureReason: FormControl<CertificateAuthorityFailureReason | null | undefined>,
		RestorableUntil: FormControl<Date | null | undefined>,
	}
	export function CreateCertificateAuthorityFormGroup() {
		return new FormGroup<CertificateAuthorityFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastStateChangeAt: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CreateCertificateAuthorityRequestCertificateAuthorityType | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CertificateAuthorityStatus | null | undefined>(undefined),
			NotBefore: new FormControl<Date | null | undefined>(undefined),
			NotAfter: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<CertificateAuthorityFailureReason | null | undefined>(undefined),
			RestorableUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CertificateAuthorityStatus { CREATING = 0, PENDING_CERTIFICATE = 1, ACTIVE = 2, DELETED = 3, DISABLED = 4, EXPIRED = 5, FAILED = 6 }

	export enum CertificateAuthorityFailureReason { REQUEST_TIMED_OUT = 0, UNSUPPORTED_ALGORITHM = 1, OTHER = 2 }

	export interface DescribeCertificateAuthorityRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;
	}
	export interface DescribeCertificateAuthorityRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificateAuthorityRequestFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface DescribeCertificateAuthorityAuditReportResponse {
		AuditReportStatus?: DescribeCertificateAuthorityAuditReportResponseAuditReportStatus | null;
		S3BucketName?: string | null;
		S3Key?: string | null;
		CreatedAt?: Date | null;
	}
	export interface DescribeCertificateAuthorityAuditReportResponseFormProperties {
		AuditReportStatus: FormControl<DescribeCertificateAuthorityAuditReportResponseAuditReportStatus | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCertificateAuthorityAuditReportResponseFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityAuditReportResponseFormProperties>({
			AuditReportStatus: new FormControl<DescribeCertificateAuthorityAuditReportResponseAuditReportStatus | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeCertificateAuthorityAuditReportResponseAuditReportStatus { CREATING = 0, SUCCESS = 1, FAILED = 2 }

	export interface DescribeCertificateAuthorityAuditReportRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AuditReportId: string;
	}
	export interface DescribeCertificateAuthorityAuditReportRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AuditReportId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificateAuthorityAuditReportRequestFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityAuditReportRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			AuditReportId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]),
		});

	}

	export interface GetCertificateResponse {
		Certificate?: string | null;
		CertificateChain?: string | null;
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

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateArn: string;
	}
	export interface GetCertificateRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateRequestFormGroup() {
		return new FormGroup<GetCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface GetCertificateAuthorityCertificateResponse {
		Certificate?: string | null;
		CertificateChain?: string | null;
	}
	export interface GetCertificateAuthorityCertificateResponseFormProperties {
		Certificate: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateAuthorityCertificateResponseFormGroup() {
		return new FormGroup<GetCertificateAuthorityCertificateResponseFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCertificateAuthorityCertificateRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;
	}
	export interface GetCertificateAuthorityCertificateRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateAuthorityCertificateRequestFormGroup() {
		return new FormGroup<GetCertificateAuthorityCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface GetCertificateAuthorityCsrResponse {
		Csr?: string | null;
	}
	export interface GetCertificateAuthorityCsrResponseFormProperties {
		Csr: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateAuthorityCsrResponseFormGroup() {
		return new FormGroup<GetCertificateAuthorityCsrResponseFormProperties>({
			Csr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCertificateAuthorityCsrRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;
	}
	export interface GetCertificateAuthorityCsrRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateAuthorityCsrRequestFormGroup() {
		return new FormGroup<GetCertificateAuthorityCsrRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface ImportCertificateAuthorityCertificateRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Max length: 32768
		 * Min length: 1
		 */
		Certificate: string;

		/**
		 * Max length: 2097152
		 * Min length: 0
		 */
		CertificateChain?: string | null;
	}
	export interface ImportCertificateAuthorityCertificateRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32768
		 * Min length: 1
		 */
		Certificate: FormControl<string | null | undefined>,

		/**
		 * Max length: 2097152
		 * Min length: 0
		 */
		CertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateAuthorityCertificateRequestFormGroup() {
		return new FormGroup<ImportCertificateAuthorityCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32768)]),
			CertificateChain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2097152)]),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface MalformedCertificateException {
	}
	export interface MalformedCertificateExceptionFormProperties {
	}
	export function CreateMalformedCertificateExceptionFormGroup() {
		return new FormGroup<MalformedCertificateExceptionFormProperties>({
		});

	}

	export interface CertificateMismatchException {
	}
	export interface CertificateMismatchExceptionFormProperties {
	}
	export function CreateCertificateMismatchExceptionFormGroup() {
		return new FormGroup<CertificateMismatchExceptionFormProperties>({
		});

	}

	export interface IssueCertificateResponse {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateArn?: string | null;
	}
	export interface IssueCertificateResponseFormProperties {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateIssueCertificateResponseFormGroup() {
		return new FormGroup<IssueCertificateResponseFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface IssueCertificateRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Max length: 32768
		 * Min length: 1
		 */
		Csr: string;

		/** Required */
		SigningAlgorithm: CertificateAuthorityConfigurationSigningAlgorithm;

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		TemplateArn?: string | null;

		/**
		 * Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> action.
		 * Required
		 */
		Validity: Validity;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		IdempotencyToken?: string | null;
	}
	export interface IssueCertificateRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32768
		 * Min length: 1
		 */
		Csr: FormControl<string | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<CertificateAuthorityConfigurationSigningAlgorithm | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		TemplateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateIssueCertificateRequestFormGroup() {
		return new FormGroup<IssueCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			Csr: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32768)]),
			SigningAlgorithm: new FormControl<CertificateAuthorityConfigurationSigningAlgorithm | null | undefined>(undefined, [Validators.required]),
			TemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]*')]),
		});

	}


	/** Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> action. */
	export interface Validity {

		/**
		 * Required
		 * Minimum: 1
		 */
		Value: number;

		/** Required */
		Type: ValidityType;
	}

	/** Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> action. */
	export interface ValidityFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		Value: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<ValidityType | null | undefined>,
	}
	export function CreateValidityFormGroup() {
		return new FormGroup<ValidityFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			Type: new FormControl<ValidityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidityType { END_DATE = 0, ABSOLUTE = 1, DAYS = 2, MONTHS = 3, YEARS = 4 }

	export interface MalformedCSRException {
	}
	export interface MalformedCSRExceptionFormProperties {
	}
	export function CreateMalformedCSRExceptionFormGroup() {
		return new FormGroup<MalformedCSRExceptionFormProperties>({
		});

	}

	export interface ListCertificateAuthoritiesResponse {
		CertificateAuthorities?: Array<CertificateAuthority>;

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListCertificateAuthoritiesResponseFormProperties {

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateAuthoritiesResponseFormGroup() {
		return new FormGroup<ListCertificateAuthoritiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export interface ListCertificateAuthoritiesRequest {

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface ListCertificateAuthoritiesRequestFormProperties {

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCertificateAuthoritiesRequestFormGroup() {
		return new FormGroup<ListCertificateAuthoritiesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListPermissionsResponse {

		/** Minimum items: 0 */
		Permissions?: Array<Permission>;

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListPermissionsResponseFormProperties {

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsResponseFormGroup() {
		return new FormGroup<ListPermissionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
		});

	}


	/** Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a>CreatePermission</a> action, removed with the <a>DeletePermission</a> action, and listed with the <a>ListPermissions</a> action. */
	export interface Permission {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn?: string | null;
		CreatedAt?: Date | null;
		Principal?: string | null;
		SourceAccount?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		Actions?: Array<ActionType>;
		Policy?: string | null;
	}

	/** Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a>CreatePermission</a> action, removed with the <a>DeletePermission</a> action, and listed with the <a>ListPermissions</a> action. */
	export interface PermissionFormProperties {

		/**
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Principal: FormControl<string | null | undefined>,
		SourceAccount: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Principal: new FormControl<string | null | undefined>(undefined),
			SourceAccount: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface ListPermissionsRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionsRequestFormGroup() {
		return new FormGroup<ListPermissionsRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListTagsResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTagsResponseFormProperties {

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export interface ListTagsRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface ListTagsRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface RestoreCertificateAuthorityRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;
	}
	export interface RestoreCertificateAuthorityRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateRestoreCertificateAuthorityRequestFormGroup() {
		return new FormGroup<RestoreCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface RevokeCertificateRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		CertificateSerial: string;

		/** Required */
		RevocationReason: RevokeCertificateRequestRevocationReason;
	}
	export interface RevokeCertificateRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		CertificateSerial: FormControl<string | null | undefined>,

		/** Required */
		RevocationReason: FormControl<RevokeCertificateRequestRevocationReason | null | undefined>,
	}
	export function CreateRevokeCertificateRequestFormGroup() {
		return new FormGroup<RevokeCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			CertificateSerial: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			RevocationReason: new FormControl<RevokeCertificateRequestRevocationReason | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RevokeCertificateRequestRevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CERTIFICATE_AUTHORITY_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERSEDED = 4, CESSATION_OF_OPERATION = 5, PRIVILEGE_WITHDRAWN = 6, A_A_COMPROMISE = 7 }

	export interface RequestAlreadyProcessedException {
	}
	export interface RequestAlreadyProcessedExceptionFormProperties {
	}
	export function CreateRequestAlreadyProcessedExceptionFormGroup() {
		return new FormGroup<RequestAlreadyProcessedExceptionFormProperties>({
		});

	}

	export interface TagCertificateAuthorityRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagCertificateAuthorityRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateTagCertificateAuthorityRequestFormGroup() {
		return new FormGroup<TagCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
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

	export interface UntagCertificateAuthorityRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface UntagCertificateAuthorityRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagCertificateAuthorityRequestFormGroup() {
		return new FormGroup<UntagCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface UpdateCertificateAuthorityRequest {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: string;

		/** Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>. */
		RevocationConfiguration?: RevocationConfiguration;
		Status?: CertificateAuthorityStatus | null;
	}
	export interface UpdateCertificateAuthorityRequestFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 5
		 */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		Status: FormControl<CertificateAuthorityStatus | null | undefined>,
	}
	export function CreateUpdateCertificateAuthorityRequestFormGroup() {
		return new FormGroup<UpdateCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
			Status: new FormControl<CertificateAuthorityStatus | null | undefined>(undefined),
		});

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
		ListCertificateAuthorities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCertificateAuthoritiesRequest): Observable<ListCertificateAuthoritiesResponse> {
			return this.http.post<ListCertificateAuthoritiesResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the permissions, if any, that have been assigned by a private CA. Permissions can be granted with the <a>CreatePermission</a> action and revoked with the <a>DeletePermission</a> action.
		 * Post #X-Amz-Target=ACMPrivateCA.ListPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPermissionsRequest): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a>TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a>UntagCertificateAuthority</a> action to remove tags.
		 * Post #X-Amz-Target=ACMPrivateCA.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
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

	export enum CreateCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.CreateCertificateAuthority' = 0 }

	export enum CreateCertificateAuthorityAuditReportX_Amz_Target { 'ACMPrivateCA.CreateCertificateAuthorityAuditReport' = 0 }

	export enum CreatePermissionX_Amz_Target { 'ACMPrivateCA.CreatePermission' = 0 }

	export enum DeleteCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.DeleteCertificateAuthority' = 0 }

	export enum DeletePermissionX_Amz_Target { 'ACMPrivateCA.DeletePermission' = 0 }

	export enum DescribeCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.DescribeCertificateAuthority' = 0 }

	export enum DescribeCertificateAuthorityAuditReportX_Amz_Target { 'ACMPrivateCA.DescribeCertificateAuthorityAuditReport' = 0 }

	export enum GetCertificateX_Amz_Target { 'ACMPrivateCA.GetCertificate' = 0 }

	export enum GetCertificateAuthorityCertificateX_Amz_Target { 'ACMPrivateCA.GetCertificateAuthorityCertificate' = 0 }

	export enum GetCertificateAuthorityCsrX_Amz_Target { 'ACMPrivateCA.GetCertificateAuthorityCsr' = 0 }

	export enum ImportCertificateAuthorityCertificateX_Amz_Target { 'ACMPrivateCA.ImportCertificateAuthorityCertificate' = 0 }

	export enum IssueCertificateX_Amz_Target { 'ACMPrivateCA.IssueCertificate' = 0 }

	export enum ListCertificateAuthoritiesX_Amz_Target { 'ACMPrivateCA.ListCertificateAuthorities' = 0 }

	export enum ListPermissionsX_Amz_Target { 'ACMPrivateCA.ListPermissions' = 0 }

	export enum ListTagsX_Amz_Target { 'ACMPrivateCA.ListTags' = 0 }

	export enum RestoreCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.RestoreCertificateAuthority' = 0 }

	export enum RevokeCertificateX_Amz_Target { 'ACMPrivateCA.RevokeCertificate' = 0 }

	export enum TagCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.TagCertificateAuthority' = 0 }

	export enum UntagCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.UntagCertificateAuthority' = 0 }

	export enum UpdateCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.UpdateCertificateAuthority' = 0 }

}

