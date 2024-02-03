import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCertificateAuthorityResponse {
		CertificateAuthorityArn?: string;
	}
	export interface CreateCertificateAuthorityResponseFormProperties {
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityResponseFormGroup() {
		return new FormGroup<CreateCertificateAuthorityResponseFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCertificateAuthorityRequest {

		/** Required */
		CertificateAuthorityConfiguration: CertificateAuthorityConfiguration;
		RevocationConfiguration?: RevocationConfiguration;

		/** Required */
		CertificateAuthorityType: CertificateAuthorityType;
		IdempotencyToken?: string;
		KeyStorageSecurityStandard?: KeyStorageSecurityStandard;
		Tags?: Array<Tag>;
		UsageMode?: CertificateAuthorityUsageMode;
	}
	export interface CreateCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityType: FormControl<CertificateAuthorityType | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		KeyStorageSecurityStandard: FormControl<KeyStorageSecurityStandard | null | undefined>,
		UsageMode: FormControl<CertificateAuthorityUsageMode | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityRequestFormGroup() {
		return new FormGroup<CreateCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityType: new FormControl<CertificateAuthorityType | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			KeyStorageSecurityStandard: new FormControl<KeyStorageSecurityStandard | null | undefined>(undefined),
			UsageMode: new FormControl<CertificateAuthorityUsageMode | null | undefined>(undefined),
		});

	}


	/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.  */
	export interface CertificateAuthorityConfiguration {

		/** Required */
		KeyAlgorithm: KeyAlgorithm;

		/** Required */
		SigningAlgorithm: SigningAlgorithm;

		/** Required */
		Subject: ASN1Subject;
		CsrExtensions?: CsrExtensions;
	}

	/** Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.  */
	export interface CertificateAuthorityConfigurationFormProperties {

		/** Required */
		KeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<SigningAlgorithm | null | undefined>,
	}
	export function CreateCertificateAuthorityConfigurationFormGroup() {
		return new FormGroup<CertificateAuthorityConfigurationFormProperties>({
			KeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined, [Validators.required]),
			SigningAlgorithm: new FormControl<SigningAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeyAlgorithm { RSA_2048 = 'RSA_2048', RSA_4096 = 'RSA_4096', EC_prime256v1 = 'EC_prime256v1', EC_secp384r1 = 'EC_secp384r1' }

	export enum SigningAlgorithm { SHA256WITHECDSA = 'SHA256WITHECDSA', SHA384WITHECDSA = 'SHA384WITHECDSA', SHA512WITHECDSA = 'SHA512WITHECDSA', SHA256WITHRSA = 'SHA256WITHRSA', SHA384WITHRSA = 'SHA384WITHRSA', SHA512WITHRSA = 'SHA512WITHRSA' }


	/** Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. */
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
		CustomAttributes?: Array<CustomAttribute>;
	}

	/** Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. */
	export interface ASN1SubjectFormProperties {
		Country: FormControl<string | null | undefined>,
		Organization: FormControl<string | null | undefined>,
		OrganizationalUnit: FormControl<string | null | undefined>,
		DistinguishedNameQualifier: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		Locality: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Surname: FormControl<string | null | undefined>,
		GivenName: FormControl<string | null | undefined>,
		Initials: FormControl<string | null | undefined>,
		Pseudonym: FormControl<string | null | undefined>,
		GenerationQualifier: FormControl<string | null | undefined>,
	}
	export function CreateASN1SubjectFormGroup() {
		return new FormGroup<ASN1SubjectFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined),
			Organization: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnit: new FormControl<string | null | undefined>(undefined),
			DistinguishedNameQualifier: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Locality: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
			GivenName: new FormControl<string | null | undefined>(undefined),
			Initials: new FormControl<string | null | undefined>(undefined),
			Pseudonym: new FormControl<string | null | undefined>(undefined),
			GenerationQualifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the X.500 relative distinguished name (RDN). */
	export interface CustomAttribute {

		/** Required */
		ObjectIdentifier: string;

		/** Required */
		Value: string;
	}

	/** Defines the X.500 relative distinguished name (RDN). */
	export interface CustomAttributeFormProperties {

		/** Required */
		ObjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCustomAttributeFormGroup() {
		return new FormGroup<CustomAttributeFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the certificate extensions to be added to the certificate signing request (CSR). */
	export interface CsrExtensions {
		KeyUsage?: KeyUsage;
		SubjectInformationAccess?: Array<AccessDescription>;
	}

	/** Describes the certificate extensions to be added to the certificate signing request (CSR). */
	export interface CsrExtensionsFormProperties {
	}
	export function CreateCsrExtensionsFormGroup() {
		return new FormGroup<CsrExtensionsFormProperties>({
		});

	}


	/** Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false. */
	export interface KeyUsage {
		DigitalSignature?: boolean | null;
		NonRepudiation?: boolean | null;
		KeyEncipherment?: boolean | null;
		DataEncipherment?: boolean | null;
		KeyAgreement?: boolean | null;
		KeyCertSign?: boolean | null;
		CRLSign?: boolean | null;
		EncipherOnly?: boolean | null;
		DecipherOnly?: boolean | null;
	}

	/** Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false. */
	export interface KeyUsageFormProperties {
		DigitalSignature: FormControl<boolean | null | undefined>,
		NonRepudiation: FormControl<boolean | null | undefined>,
		KeyEncipherment: FormControl<boolean | null | undefined>,
		DataEncipherment: FormControl<boolean | null | undefined>,
		KeyAgreement: FormControl<boolean | null | undefined>,
		KeyCertSign: FormControl<boolean | null | undefined>,
		CRLSign: FormControl<boolean | null | undefined>,
		EncipherOnly: FormControl<boolean | null | undefined>,
		DecipherOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyUsageFormGroup() {
		return new FormGroup<KeyUsageFormProperties>({
			DigitalSignature: new FormControl<boolean | null | undefined>(undefined),
			NonRepudiation: new FormControl<boolean | null | undefined>(undefined),
			KeyEncipherment: new FormControl<boolean | null | undefined>(undefined),
			DataEncipherment: new FormControl<boolean | null | undefined>(undefined),
			KeyAgreement: new FormControl<boolean | null | undefined>(undefined),
			KeyCertSign: new FormControl<boolean | null | undefined>(undefined),
			CRLSign: new FormControl<boolean | null | undefined>(undefined),
			EncipherOnly: new FormControl<boolean | null | undefined>(undefined),
			DecipherOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. */
	export interface AccessDescription {

		/** Required */
		AccessMethod: AccessMethod;

		/** Required */
		AccessLocation: GeneralName;
	}

	/** Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. */
	export interface AccessDescriptionFormProperties {
	}
	export function CreateAccessDescriptionFormGroup() {
		return new FormGroup<AccessDescriptionFormProperties>({
		});

	}


	/** Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>. */
	export interface AccessMethod {
		CustomObjectIdentifier?: string;
		AccessMethodType?: AccessMethodType;
	}

	/** Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>. */
	export interface AccessMethodFormProperties {
		CustomObjectIdentifier: FormControl<string | null | undefined>,
		AccessMethodType: FormControl<AccessMethodType | null | undefined>,
	}
	export function CreateAccessMethodFormGroup() {
		return new FormGroup<AccessMethodFormProperties>({
			CustomObjectIdentifier: new FormControl<string | null | undefined>(undefined),
			AccessMethodType: new FormControl<AccessMethodType | null | undefined>(undefined),
		});

	}

	export enum AccessMethodType { CA_REPOSITORY = 'CA_REPOSITORY', RESOURCE_PKI_MANIFEST = 'RESOURCE_PKI_MANIFEST', RESOURCE_PKI_NOTIFY = 'RESOURCE_PKI_NOTIFY' }


	/** Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error. */
	export interface GeneralName {
		OtherName?: OtherName;
		Rfc822Name?: string;
		DnsName?: string;

		/** Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. */
		DirectoryName?: ASN1Subject;
		EdiPartyName?: EdiPartyName;
		UniformResourceIdentifier?: string;
		IpAddress?: string;
		RegisteredId?: string;
	}

	/** Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error. */
	export interface GeneralNameFormProperties {
		Rfc822Name: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		UniformResourceIdentifier: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		RegisteredId: FormControl<string | null | undefined>,
	}
	export function CreateGeneralNameFormGroup() {
		return new FormGroup<GeneralNameFormProperties>({
			Rfc822Name: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			UniformResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			RegisteredId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>. */
	export interface OtherName {

		/** Required */
		TypeId: string;

		/** Required */
		Value: string;
	}

	/** Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>. */
	export interface OtherNameFormProperties {

		/** Required */
		TypeId: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateOtherNameFormGroup() {
		return new FormGroup<OtherNameFormProperties>({
			TypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">Subject Alternative Name</a> in RFC 5280. */
	export interface EdiPartyName {

		/** Required */
		PartyName: string;
		NameAssigner?: string;
	}

	/** Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">Subject Alternative Name</a> in RFC 5280. */
	export interface EdiPartyNameFormProperties {

		/** Required */
		PartyName: FormControl<string | null | undefined>,
		NameAssigner: FormControl<string | null | undefined>,
	}
	export function CreateEdiPartyNameFormGroup() {
		return new FormGroup<EdiPartyNameFormProperties>({
			PartyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NameAssigner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Certificate revocation information used by the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html">Setting up a certificate revocation method</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>. */
	export interface RevocationConfiguration {
		CrlConfiguration?: CrlConfiguration;
		OcspConfiguration?: OcspConfiguration;
	}

	/** Certificate revocation information used by the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html">Setting up a certificate revocation method</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>. */
	export interface RevocationConfigurationFormProperties {
	}
	export function CreateRevocationConfigurationFormGroup() {
		return new FormGroup<RevocationConfigurationFormProperties>({
		});

	}


	/** <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to Amazon Web Services Private CA. </p> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.</p> <p>A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.</p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by Amazon Web Services Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html">Planning a certificate revocation list (CRL)</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i> </p> */
	export interface CrlConfiguration {

		/** Required */
		Enabled: boolean;
		ExpirationInDays?: number | null;
		CustomCname?: string;
		S3BucketName?: string;
		S3ObjectAcl?: S3ObjectAcl;
	}

	/** <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to Amazon Web Services Private CA. </p> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.</p> <p>A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.</p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by Amazon Web Services Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html">Planning a certificate revocation list (CRL)</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i> </p> */
	export interface CrlConfigurationFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		ExpirationInDays: FormControl<number | null | undefined>,
		CustomCname: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3ObjectAcl: FormControl<S3ObjectAcl | null | undefined>,
	}
	export function CreateCrlConfigurationFormGroup() {
		return new FormGroup<CrlConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ExpirationInDays: new FormControl<number | null | undefined>(undefined),
			CustomCname: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3ObjectAcl: new FormControl<S3ObjectAcl | null | undefined>(undefined),
		});

	}

	export enum S3ObjectAcl { PUBLIC_READ = 'PUBLIC_READ', BUCKET_OWNER_FULL_CONTROL = 'BUCKET_OWNER_FULL_CONTROL' }


	/** <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p> */
	export interface OcspConfiguration {

		/** Required */
		Enabled: boolean;
		OcspCustomCname?: string;
	}

	/** <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p> */
	export interface OcspConfigurationFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		OcspCustomCname: FormControl<string | null | undefined>,
	}
	export function CreateOcspConfigurationFormGroup() {
		return new FormGroup<OcspConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OcspCustomCname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateAuthorityType { ROOT = 'ROOT', SUBORDINATE = 'SUBORDINATE' }

	export enum KeyStorageSecurityStandard { FIPS_140_2_LEVEL_2_OR_HIGHER = 'FIPS_140_2_LEVEL_2_OR_HIGHER', FIPS_140_2_LEVEL_3_OR_HIGHER = 'FIPS_140_2_LEVEL_3_OR_HIGHER' }


	/** Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action. To remove a tag, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action.  */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action. To remove a tag, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action.  */
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

	export enum CertificateAuthorityUsageMode { GENERAL_PURPOSE = 'GENERAL_PURPOSE', SHORT_LIVED_CERTIFICATE = 'SHORT_LIVED_CERTIFICATE' }

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
		AuditReportId?: string;
		S3Key?: string;
	}
	export interface CreateCertificateAuthorityAuditReportResponseFormProperties {
		AuditReportId: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityAuditReportResponseFormGroup() {
		return new FormGroup<CreateCertificateAuthorityAuditReportResponseFormProperties>({
			AuditReportId: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCertificateAuthorityAuditReportRequest {

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		S3BucketName: string;

		/** Required */
		AuditReportResponseFormat: AuditReportResponseFormat;
	}
	export interface CreateCertificateAuthorityAuditReportRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,

		/** Required */
		AuditReportResponseFormat: FormControl<AuditReportResponseFormat | null | undefined>,
	}
	export function CreateCreateCertificateAuthorityAuditReportRequestFormGroup() {
		return new FormGroup<CreateCertificateAuthorityAuditReportRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuditReportResponseFormat: new FormControl<AuditReportResponseFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuditReportResponseFormat { JSON = 'JSON', CSV = 'CSV' }

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

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		Principal: string;
		SourceAccount?: string;

		/** Required */
		Actions: Array<ActionType>;
	}
	export interface CreatePermissionRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		Principal: FormControl<string | null | undefined>,
		SourceAccount: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionRequestFormGroup() {
		return new FormGroup<CreatePermissionRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActionType { IssueCertificate = 'IssueCertificate', GetCertificate = 'GetCertificate', ListPermissions = 'ListPermissions' }

	export interface PermissionAlreadyExistsException {
	}
	export interface PermissionAlreadyExistsExceptionFormProperties {
	}
	export function CreatePermissionAlreadyExistsExceptionFormGroup() {
		return new FormGroup<PermissionAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface DeleteCertificateAuthorityRequest {

		/** Required */
		CertificateAuthorityArn: string;
		PermanentDeletionTimeInDays?: number | null;
	}
	export interface DeleteCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		PermanentDeletionTimeInDays: FormControl<number | null | undefined>,
	}
	export function CreateDeleteCertificateAuthorityRequestFormGroup() {
		return new FormGroup<DeleteCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermanentDeletionTimeInDays: new FormControl<number | null | undefined>(undefined),
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

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		Principal: string;
		SourceAccount?: string;
	}
	export interface DeletePermissionRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		Principal: FormControl<string | null | undefined>,
		SourceAccount: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionRequestFormGroup() {
		return new FormGroup<DeletePermissionRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeletePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyRequestFormGroup() {
		return new FormGroup<DeletePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LockoutPreventedException {
	}
	export interface LockoutPreventedExceptionFormProperties {
	}
	export function CreateLockoutPreventedExceptionFormGroup() {
		return new FormGroup<LockoutPreventedExceptionFormProperties>({
		});

	}

	export interface DescribeCertificateAuthorityResponse {
		CertificateAuthority?: CertificateAuthority;
	}
	export interface DescribeCertificateAuthorityResponseFormProperties {
	}
	export function CreateDescribeCertificateAuthorityResponseFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityResponseFormProperties>({
		});

	}


	/** Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into Certificate Manager (ACM).  */
	export interface CertificateAuthority {
		Arn?: string;
		OwnerAccount?: string;
		CreatedAt?: Date;
		LastStateChangeAt?: Date;
		Type?: CertificateAuthorityType;
		Serial?: string;
		Status?: CertificateAuthorityStatus;
		NotBefore?: Date;
		NotAfter?: Date;
		FailureReason?: FailureReason;
		CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;
		RevocationConfiguration?: RevocationConfiguration;
		RestorableUntil?: Date;
		KeyStorageSecurityStandard?: KeyStorageSecurityStandard;
		UsageMode?: CertificateAuthorityUsageMode;
	}

	/** Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into Certificate Manager (ACM).  */
	export interface CertificateAuthorityFormProperties {
		Arn: FormControl<string | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastStateChangeAt: FormControl<Date | null | undefined>,
		Type: FormControl<CertificateAuthorityType | null | undefined>,
		Serial: FormControl<string | null | undefined>,
		Status: FormControl<CertificateAuthorityStatus | null | undefined>,
		NotBefore: FormControl<Date | null | undefined>,
		NotAfter: FormControl<Date | null | undefined>,
		FailureReason: FormControl<FailureReason | null | undefined>,
		RestorableUntil: FormControl<Date | null | undefined>,
		KeyStorageSecurityStandard: FormControl<KeyStorageSecurityStandard | null | undefined>,
		UsageMode: FormControl<CertificateAuthorityUsageMode | null | undefined>,
	}
	export function CreateCertificateAuthorityFormGroup() {
		return new FormGroup<CertificateAuthorityFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastStateChangeAt: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CertificateAuthorityType | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CertificateAuthorityStatus | null | undefined>(undefined),
			NotBefore: new FormControl<Date | null | undefined>(undefined),
			NotAfter: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<FailureReason | null | undefined>(undefined),
			RestorableUntil: new FormControl<Date | null | undefined>(undefined),
			KeyStorageSecurityStandard: new FormControl<KeyStorageSecurityStandard | null | undefined>(undefined),
			UsageMode: new FormControl<CertificateAuthorityUsageMode | null | undefined>(undefined),
		});

	}

	export enum CertificateAuthorityStatus { CREATING = 'CREATING', PENDING_CERTIFICATE = 'PENDING_CERTIFICATE', ACTIVE = 'ACTIVE', DELETED = 'DELETED', DISABLED = 'DISABLED', EXPIRED = 'EXPIRED', FAILED = 'FAILED' }

	export enum FailureReason { REQUEST_TIMED_OUT = 'REQUEST_TIMED_OUT', UNSUPPORTED_ALGORITHM = 'UNSUPPORTED_ALGORITHM', OTHER = 'OTHER' }

	export interface DescribeCertificateAuthorityRequest {

		/** Required */
		CertificateAuthorityArn: string;
	}
	export interface DescribeCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificateAuthorityRequestFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCertificateAuthorityAuditReportResponse {
		AuditReportStatus?: AuditReportStatus;
		S3BucketName?: string;
		S3Key?: string;
		CreatedAt?: Date;
	}
	export interface DescribeCertificateAuthorityAuditReportResponseFormProperties {
		AuditReportStatus: FormControl<AuditReportStatus | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCertificateAuthorityAuditReportResponseFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityAuditReportResponseFormProperties>({
			AuditReportStatus: new FormControl<AuditReportStatus | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AuditReportStatus { CREATING = 'CREATING', SUCCESS = 'SUCCESS', FAILED = 'FAILED' }

	export interface DescribeCertificateAuthorityAuditReportRequest {

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		AuditReportId: string;
	}
	export interface DescribeCertificateAuthorityAuditReportRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		AuditReportId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificateAuthorityAuditReportRequestFormGroup() {
		return new FormGroup<DescribeCertificateAuthorityAuditReportRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuditReportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		CertificateAuthorityArn: string;

		/** Required */
		CertificateArn: string;
	}
	export interface GetCertificateRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateRequestFormGroup() {
		return new FormGroup<GetCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCertificateAuthorityCertificateResponse {
		Certificate?: string;
		CertificateChain?: string;
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

		/** Required */
		CertificateAuthorityArn: string;
	}
	export interface GetCertificateAuthorityCertificateRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateAuthorityCertificateRequestFormGroup() {
		return new FormGroup<GetCertificateAuthorityCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCertificateAuthorityCsrResponse {
		Csr?: string;
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

		/** Required */
		CertificateAuthorityArn: string;
	}
	export interface GetCertificateAuthorityCsrRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificateAuthorityCsrRequestFormGroup() {
		return new FormGroup<GetCertificateAuthorityCsrRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPolicyResponse {
		Policy?: string;
	}
	export interface GetPolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface GetPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportCertificateAuthorityCertificateRequest {

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		Certificate: string;
		CertificateChain?: string;
	}
	export interface ImportCertificateAuthorityCertificateRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		Certificate: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateAuthorityCertificateRequestFormGroup() {
		return new FormGroup<ImportCertificateAuthorityCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
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
		CertificateArn?: string;
	}
	export interface IssueCertificateResponseFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateIssueCertificateResponseFormGroup() {
		return new FormGroup<IssueCertificateResponseFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssueCertificateRequest {
		ApiPassthrough?: ApiPassthrough;

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		Csr: string;

		/** Required */
		SigningAlgorithm: SigningAlgorithm;
		TemplateArn?: string;

		/** Required */
		Validity: Validity;
		ValidityNotBefore?: Validity;
		IdempotencyToken?: string;
	}
	export interface IssueCertificateRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		Csr: FormControl<string | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<SigningAlgorithm | null | undefined>,
		TemplateArn: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateIssueCertificateRequestFormGroup() {
		return new FormGroup<IssueCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Csr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SigningAlgorithm: new FormControl<SigningAlgorithm | null | undefined>(undefined, [Validators.required]),
			TemplateArn: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, Amazon Web Services Private CA applies <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p> */
	export interface ApiPassthrough {
		Extensions?: Extensions;

		/** Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. */
		Subject?: ASN1Subject;
	}

	/** <p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, Amazon Web Services Private CA applies <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p> */
	export interface ApiPassthroughFormProperties {
	}
	export function CreateApiPassthroughFormGroup() {
		return new FormGroup<ApiPassthroughFormProperties>({
		});

	}


	/** Contains X.509 extension information for a certificate. */
	export interface Extensions {
		CertificatePolicies?: Array<PolicyInformation>;
		ExtendedKeyUsage?: Array<ExtendedKeyUsage>;

		/** Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false. */
		KeyUsage?: KeyUsage;
		SubjectAlternativeNames?: Array<GeneralName>;
		CustomExtensions?: Array<CustomExtension>;
	}

	/** Contains X.509 extension information for a certificate. */
	export interface ExtensionsFormProperties {
	}
	export function CreateExtensionsFormGroup() {
		return new FormGroup<ExtensionsFormProperties>({
		});

	}


	/** Defines the X.509 <code>CertificatePolicies</code> extension. */
	export interface PolicyInformation {

		/** Required */
		CertPolicyId: string;
		PolicyQualifiers?: Array<PolicyQualifierInfo>;
	}

	/** Defines the X.509 <code>CertificatePolicies</code> extension. */
	export interface PolicyInformationFormProperties {

		/** Required */
		CertPolicyId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyInformationFormGroup() {
		return new FormGroup<PolicyInformationFormProperties>({
			CertPolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier. */
	export interface PolicyQualifierInfo {

		/** Required */
		PolicyQualifierId: PolicyQualifierId;

		/** Required */
		Qualifier: Qualifier;
	}

	/** Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier. */
	export interface PolicyQualifierInfoFormProperties {

		/** Required */
		PolicyQualifierId: FormControl<PolicyQualifierId | null | undefined>,
	}
	export function CreatePolicyQualifierInfoFormGroup() {
		return new FormGroup<PolicyQualifierInfoFormProperties>({
			PolicyQualifierId: new FormControl<PolicyQualifierId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyQualifierId { CPS = 'CPS' }


	/** Defines a <code>PolicyInformation</code> qualifier. Amazon Web Services Private CA supports the <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4">certification practice statement (CPS) qualifier</a> defined in RFC 5280.  */
	export interface Qualifier {

		/** Required */
		CpsUri: string;
	}

	/** Defines a <code>PolicyInformation</code> qualifier. Amazon Web Services Private CA supports the <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4">certification practice statement (CPS) qualifier</a> defined in RFC 5280.  */
	export interface QualifierFormProperties {

		/** Required */
		CpsUri: FormControl<string | null | undefined>,
	}
	export function CreateQualifierFormGroup() {
		return new FormGroup<QualifierFormProperties>({
			CpsUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension. */
	export interface ExtendedKeyUsage {
		ExtendedKeyUsageType?: ExtendedKeyUsageType;
		ExtendedKeyUsageObjectIdentifier?: string;
	}

	/** Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension. */
	export interface ExtendedKeyUsageFormProperties {
		ExtendedKeyUsageType: FormControl<ExtendedKeyUsageType | null | undefined>,
		ExtendedKeyUsageObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateExtendedKeyUsageFormGroup() {
		return new FormGroup<ExtendedKeyUsageFormProperties>({
			ExtendedKeyUsageType: new FormControl<ExtendedKeyUsageType | null | undefined>(undefined),
			ExtendedKeyUsageObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExtendedKeyUsageType { SERVER_AUTH = 'SERVER_AUTH', CLIENT_AUTH = 'CLIENT_AUTH', CODE_SIGNING = 'CODE_SIGNING', EMAIL_PROTECTION = 'EMAIL_PROTECTION', TIME_STAMPING = 'TIME_STAMPING', OCSP_SIGNING = 'OCSP_SIGNING', SMART_CARD_LOGIN = 'SMART_CARD_LOGIN', DOCUMENT_SIGNING = 'DOCUMENT_SIGNING', CERTIFICATE_TRANSPARENCY = 'CERTIFICATE_TRANSPARENCY' }


	/** <p/> <p>Specifies the X.509 extension information for a certificate.</p> <p>Extensions present in <code>CustomExtensions</code> follow the <code>ApiPassthrough</code> <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">template rules</a>. </p> */
	export interface CustomExtension {

		/** Required */
		ObjectIdentifier: string;

		/** Required */
		Value: string;
		Critical?: boolean | null;
	}

	/** <p/> <p>Specifies the X.509 extension information for a certificate.</p> <p>Extensions present in <code>CustomExtensions</code> follow the <code>ApiPassthrough</code> <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">template rules</a>. </p> */
	export interface CustomExtensionFormProperties {

		/** Required */
		ObjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
		Critical: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomExtensionFormGroup() {
		return new FormGroup<CustomExtensionFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Critical: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>Amazon Web Services Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate's validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p> */
	export interface Validity {

		/** Required */
		Value: number;

		/** Required */
		Type: ValidityPeriodType;
	}

	/** <p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>Amazon Web Services Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate's validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p> */
	export interface ValidityFormProperties {

		/** Required */
		Value: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<ValidityPeriodType | null | undefined>,
	}
	export function CreateValidityFormGroup() {
		return new FormGroup<ValidityFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ValidityPeriodType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidityPeriodType { END_DATE = 'END_DATE', ABSOLUTE = 'ABSOLUTE', DAYS = 'DAYS', MONTHS = 'MONTHS', YEARS = 'YEARS' }

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
		NextToken?: string;
	}
	export interface ListCertificateAuthoritiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificateAuthoritiesResponseFormGroup() {
		return new FormGroup<ListCertificateAuthoritiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCertificateAuthoritiesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		ResourceOwner?: ResourceOwner;
	}
	export interface ListCertificateAuthoritiesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ResourceOwner: FormControl<ResourceOwner | null | undefined>,
	}
	export function CreateListCertificateAuthoritiesRequestFormGroup() {
		return new FormGroup<ListCertificateAuthoritiesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ResourceOwner: new FormControl<ResourceOwner | null | undefined>(undefined),
		});

	}

	export enum ResourceOwner { SELF = 'SELF', OTHER_ACCOUNTS = 'OTHER_ACCOUNTS' }

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListPermissionsResponse {
		Permissions?: Array<Permission>;
		NextToken?: string;
	}
	export interface ListPermissionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsResponseFormGroup() {
		return new FormGroup<ListPermissionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Permissions designate which private CA actions can be performed by an Amazon Web Services service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. */
	export interface Permission {
		CertificateAuthorityArn?: string;
		CreatedAt?: Date;
		Principal?: string;
		SourceAccount?: string;
		Actions?: Array<ActionType>;
		Policy?: string;
	}

	/** Permissions designate which private CA actions can be performed by an Amazon Web Services service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. */
	export interface PermissionFormProperties {
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Principal: FormControl<string | null | undefined>,
		SourceAccount: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Principal: new FormControl<string | null | undefined>(undefined),
			SourceAccount: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsRequest {

		/** Required */
		CertificateAuthorityArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPermissionsRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionsRequestFormGroup() {
		return new FormGroup<ListPermissionsRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsRequest {

		/** Required */
		CertificateAuthorityArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTagsRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutPolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Policy: string;
	}
	export interface PutPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutPolicyRequestFormGroup() {
		return new FormGroup<PutPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreCertificateAuthorityRequest {

		/** Required */
		CertificateAuthorityArn: string;
	}
	export interface RestoreCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateRestoreCertificateAuthorityRequestFormGroup() {
		return new FormGroup<RestoreCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeCertificateRequest {

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		CertificateSerial: string;

		/** Required */
		RevocationReason: RevocationReason;
	}
	export interface RevokeCertificateRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/** Required */
		CertificateSerial: FormControl<string | null | undefined>,

		/** Required */
		RevocationReason: FormControl<RevocationReason | null | undefined>,
	}
	export function CreateRevokeCertificateRequestFormGroup() {
		return new FormGroup<RevokeCertificateRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateSerial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevocationReason: new FormControl<RevocationReason | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RevocationReason { UNSPECIFIED = 'UNSPECIFIED', KEY_COMPROMISE = 'KEY_COMPROMISE', CERTIFICATE_AUTHORITY_COMPROMISE = 'CERTIFICATE_AUTHORITY_COMPROMISE', AFFILIATION_CHANGED = 'AFFILIATION_CHANGED', SUPERSEDED = 'SUPERSEDED', CESSATION_OF_OPERATION = 'CESSATION_OF_OPERATION', PRIVILEGE_WITHDRAWN = 'PRIVILEGE_WITHDRAWN', A_A_COMPROMISE = 'A_A_COMPROMISE' }

	export interface RequestAlreadyProcessedException {
	}
	export interface RequestAlreadyProcessedExceptionFormProperties {
	}
	export function CreateRequestAlreadyProcessedExceptionFormGroup() {
		return new FormGroup<RequestAlreadyProcessedExceptionFormProperties>({
		});

	}

	export interface TagCertificateAuthorityRequest {

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateTagCertificateAuthorityRequestFormGroup() {
		return new FormGroup<TagCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CertificateAuthorityArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface UntagCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagCertificateAuthorityRequestFormGroup() {
		return new FormGroup<UntagCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCertificateAuthorityRequest {

		/** Required */
		CertificateAuthorityArn: string;
		RevocationConfiguration?: RevocationConfiguration;
		Status?: CertificateAuthorityStatus;
	}
	export interface UpdateCertificateAuthorityRequestFormProperties {

		/** Required */
		CertificateAuthorityArn: FormControl<string | null | undefined>,
		Status: FormControl<CertificateAuthorityStatus | null | undefined>,
	}
	export function CreateUpdateCertificateAuthorityRequestFormGroup() {
		return new FormGroup<UpdateCertificateAuthorityRequestFormProperties>({
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<CertificateAuthorityStatus | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>
		 * Post #X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority
		 * @return {CreateCertificateAuthorityResponse} Success
		 */
		CreateCertificateAuthority(requestBody: CreateCertificateAuthorityRequest): Observable<CreateCertificateAuthorityResponse> {
			return this.http.post<CreateCertificateAuthorityResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>
		 * Post #X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport
		 * @return {CreateCertificateAuthorityAuditReportResponse} Success
		 */
		CreateCertificateAuthorityAuditReport(requestBody: CreateCertificateAuthorityAuditReportRequest): Observable<CreateCertificateAuthorityAuditReportResponse> {
			return this.http.post<CreateCertificateAuthorityAuditReportResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.CreatePermission
		 * @return {void} Success
		 */
		CreatePermission(requestBody: CreatePermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.CreatePermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>
		 * Post #X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority
		 * @return {void} Success
		 */
		DeleteCertificateAuthority(requestBody: DeleteCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.DeletePermission
		 * @return {void} Success
		 */
		DeletePermission(requestBody: DeletePermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DeletePermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.DeletePolicy
		 * @return {void} Success
		 */
		DeletePolicy(requestBody: DeletePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DeletePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority
		 * @return {DescribeCertificateAuthorityResponse} Success
		 */
		DescribeCertificateAuthority(requestBody: DescribeCertificateAuthorityRequest): Observable<DescribeCertificateAuthorityResponse> {
			return this.http.post<DescribeCertificateAuthorityResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action.
		 * Post #X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport
		 * @return {DescribeCertificateAuthorityAuditReportResponse} Success
		 */
		DescribeCertificateAuthorityAuditReport(requestBody: DescribeCertificateAuthorityAuditReportRequest): Observable<DescribeCertificateAuthorityAuditReportResponse> {
			return this.http.post<DescribeCertificateAuthorityAuditReportResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA.
		 * Post #X-Amz-Target=ACMPrivateCA.GetCertificate
		 * @return {GetCertificateResponse} Success
		 */
		GetCertificate(requestBody: GetCertificateRequest): Observable<GetCertificateResponse> {
			return this.http.post<GetCertificateResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.GetCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it.
		 * Post #X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate
		 * @return {GetCertificateAuthorityCertificateResponse} Success
		 */
		GetCertificateAuthorityCertificate(requestBody: GetCertificateAuthorityCertificateRequest): Observable<GetCertificateAuthorityCertificateResponse> {
			return this.http.post<GetCertificateAuthorityCertificateResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string.
		 * Post #X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr
		 * @return {GetCertificateAuthorityCsrResponse} Success
		 */
		GetCertificateAuthorityCsr(requestBody: GetCertificateAuthorityCsrRequest): Observable<GetCertificateAuthorityCsrResponse> {
			return this.http.post<GetCertificateAuthorityCsrResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.GetPolicy
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(requestBody: GetPolicyRequest): Observable<GetPolicyResponse> {
			return this.http.post<GetPolicyResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.GetPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate
		 * @return {void} Success
		 */
		ImportCertificateAuthorityCertificate(requestBody: ImportCertificateAuthorityCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>
		 * Post #X-Amz-Target=ACMPrivateCA.IssueCertificate
		 * @return {IssueCertificateResponse} Success
		 */
		IssueCertificate(requestBody: IssueCertificateRequest): Observable<IssueCertificateResponse> {
			return this.http.post<IssueCertificateResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.IssueCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.
		 * Post #X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCertificateAuthoritiesResponse} Success
		 */
		ListCertificateAuthorities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCertificateAuthoritiesRequest): Observable<ListCertificateAuthoritiesResponse> {
			return this.http.post<ListCertificateAuthoritiesResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.ListPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPermissionsRequest): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags.
		 * Post #X-Amz-Target=ACMPrivateCA.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=ACMPrivateCA.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ACMPrivateCA.PutPolicy
		 * @return {void} Success
		 */
		PutPolicy(requestBody: PutPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.PutPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
		 * Post #X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority
		 * @return {void} Success
		 */
		RestoreCertificateAuthority(requestBody: RestoreCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>
		 * Post #X-Amz-Target=ACMPrivateCA.RevokeCertificate
		 * @return {void} Success
		 */
		RevokeCertificate(requestBody: RevokeCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.RevokeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>
		 * Post #X-Amz-Target=ACMPrivateCA.TagCertificateAuthority
		 * @return {void} Success
		 */
		TagCertificateAuthority(requestBody: TagCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA.
		 * Post #X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority
		 * @return {void} Success
		 */
		UntagCertificateAuthority(requestBody: UntagCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>
		 * Post #X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority
		 * @return {void} Success
		 */
		UpdateCertificateAuthority(requestBody: UpdateCertificateAuthorityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum CreateCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.CreateCertificateAuthority' = 'ACMPrivateCA.CreateCertificateAuthority' }

	export enum CreateCertificateAuthorityAuditReportX_Amz_Target { 'ACMPrivateCA.CreateCertificateAuthorityAuditReport' = 'ACMPrivateCA.CreateCertificateAuthorityAuditReport' }

	export enum CreatePermissionX_Amz_Target { 'ACMPrivateCA.CreatePermission' = 'ACMPrivateCA.CreatePermission' }

	export enum DeleteCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.DeleteCertificateAuthority' = 'ACMPrivateCA.DeleteCertificateAuthority' }

	export enum DeletePermissionX_Amz_Target { 'ACMPrivateCA.DeletePermission' = 'ACMPrivateCA.DeletePermission' }

	export enum DeletePolicyX_Amz_Target { 'ACMPrivateCA.DeletePolicy' = 'ACMPrivateCA.DeletePolicy' }

	export enum DescribeCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.DescribeCertificateAuthority' = 'ACMPrivateCA.DescribeCertificateAuthority' }

	export enum DescribeCertificateAuthorityAuditReportX_Amz_Target { 'ACMPrivateCA.DescribeCertificateAuthorityAuditReport' = 'ACMPrivateCA.DescribeCertificateAuthorityAuditReport' }

	export enum GetCertificateX_Amz_Target { 'ACMPrivateCA.GetCertificate' = 'ACMPrivateCA.GetCertificate' }

	export enum GetCertificateAuthorityCertificateX_Amz_Target { 'ACMPrivateCA.GetCertificateAuthorityCertificate' = 'ACMPrivateCA.GetCertificateAuthorityCertificate' }

	export enum GetCertificateAuthorityCsrX_Amz_Target { 'ACMPrivateCA.GetCertificateAuthorityCsr' = 'ACMPrivateCA.GetCertificateAuthorityCsr' }

	export enum GetPolicyX_Amz_Target { 'ACMPrivateCA.GetPolicy' = 'ACMPrivateCA.GetPolicy' }

	export enum ImportCertificateAuthorityCertificateX_Amz_Target { 'ACMPrivateCA.ImportCertificateAuthorityCertificate' = 'ACMPrivateCA.ImportCertificateAuthorityCertificate' }

	export enum IssueCertificateX_Amz_Target { 'ACMPrivateCA.IssueCertificate' = 'ACMPrivateCA.IssueCertificate' }

	export enum ListCertificateAuthoritiesX_Amz_Target { 'ACMPrivateCA.ListCertificateAuthorities' = 'ACMPrivateCA.ListCertificateAuthorities' }

	export enum ListPermissionsX_Amz_Target { 'ACMPrivateCA.ListPermissions' = 'ACMPrivateCA.ListPermissions' }

	export enum ListTagsX_Amz_Target { 'ACMPrivateCA.ListTags' = 'ACMPrivateCA.ListTags' }

	export enum PutPolicyX_Amz_Target { 'ACMPrivateCA.PutPolicy' = 'ACMPrivateCA.PutPolicy' }

	export enum RestoreCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.RestoreCertificateAuthority' = 'ACMPrivateCA.RestoreCertificateAuthority' }

	export enum RevokeCertificateX_Amz_Target { 'ACMPrivateCA.RevokeCertificate' = 'ACMPrivateCA.RevokeCertificate' }

	export enum TagCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.TagCertificateAuthority' = 'ACMPrivateCA.TagCertificateAuthority' }

	export enum UntagCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.UntagCertificateAuthority' = 'ACMPrivateCA.UntagCertificateAuthority' }

	export enum UpdateCertificateAuthorityX_Amz_Target { 'ACMPrivateCA.UpdateCertificateAuthority' = 'ACMPrivateCA.UpdateCertificateAuthority' }

}

