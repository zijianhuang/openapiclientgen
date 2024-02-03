import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {

		/** The id of the account */
		id?: number | null;

		/** Identifier for the account */
		identifier?: string | null;

		/** The servicepack id that defines the account. */
		servicepack_id?: number | null;
	}
	export interface AccountFormProperties {

		/** The id of the account */
		id: FormControl<number | null | undefined>,

		/** Identifier for the account */
		identifier: FormControl<string | null | undefined>,

		/** The servicepack id that defines the account. */
		servicepack_id: FormControl<number | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			servicepack_id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A detailed representation of an account. */
	export interface AccountDetail {

		/** A list of addons applied to the account. */
		addons?: Array<Addon>;

		/** The id of the account */
		id?: number | null;

		/** Identifier for the account */
		identifier?: string | null;

		/** Servicepack information. */
		servicepack?: Servicepack;
	}

	/** A detailed representation of an account. */
	export interface AccountDetailFormProperties {

		/** The id of the account */
		id: FormControl<number | null | undefined>,

		/** Identifier for the account */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateAccountDetailFormGroup() {
		return new FormGroup<AccountDetailFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Addon information */
	export interface Addon {

		/** The id of the addon */
		id?: number | null;

		/** The name of the addon */
		name?: string | null;
	}

	/** Addon information */
	export interface AddonFormProperties {

		/** The id of the addon */
		id: FormControl<number | null | undefined>,

		/** The name of the addon */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddonFormGroup() {
		return new FormGroup<AddonFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Servicepack information. */
	export interface Servicepack {

		/** The id of the service pack */
		id?: number | null;

		/** The name of the service pack */
		name?: string | null;
	}

	/** Servicepack information. */
	export interface ServicepackFormProperties {

		/** The id of the service pack */
		id: FormControl<number | null | undefined>,

		/** The name of the service pack */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServicepackFormGroup() {
		return new FormGroup<ServicepackFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddHostHeaderRequest {

		/** Host header domain name (e.g. alias.be or alias.site.be). */
		domain_name?: string | null;
	}
	export interface AddHostHeaderRequestFormProperties {

		/** Host header domain name (e.g. alias.be or alias.site.be). */
		domain_name: FormControl<string | null | undefined>,
	}
	export function CreateAddHostHeaderRequestFormGroup() {
		return new FormGroup<AddHostHeaderRequestFormProperties>({
			domain_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddSshKeyRequest {

		/** Public key */
		public_key?: string | null;
	}
	export interface AddSshKeyRequestFormProperties {

		/** Public key */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateAddSshKeyRequestFormGroup() {
		return new FormGroup<AddSshKeyRequestFormProperties>({
			public_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddSubsiteRequest {

		/** Subsite domain name (e.g. alias.be or subsite.site.be). */
		domain_name?: string | null;

		/**
		 * Folder location for the subsite (when empty we use /subsites/site (e.g. /subsites/subsite.site.be)<br />
		 * The path MUST pre-exist on the server. It WILL NOT be created automatically.
		 */
		path?: string | null;
	}
	export interface AddSubsiteRequestFormProperties {

		/** Subsite domain name (e.g. alias.be or subsite.site.be). */
		domain_name: FormControl<string | null | undefined>,

		/**
		 * Folder location for the subsite (when empty we use /subsites/site (e.g. /subsites/subsite.site.be)<br />
		 * The path MUST pre-exist on the server. It WILL NOT be created automatically.
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateAddSubsiteRequestFormGroup() {
		return new FormGroup<AddSubsiteRequestFormProperties>({
			domain_name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdditionalValidationAttribute {

		/** Additional validation attribute field name. */
		name?: string | null;

		/** Additional validation attribute field value. */
		value?: string | null;
	}
	export interface AdditionalValidationAttributeFormProperties {

		/** Additional validation attribute field name. */
		name: FormControl<string | null | undefined>,

		/** Additional validation attribute field value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalValidationAttributeFormGroup() {
		return new FormGroup<AdditionalValidationAttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Alias {

		/** The alias destination e-mail addresses */
		destinations?: Array<string>;

		/** The alias e-mail address */
		email_address?: string | null;
	}
	export interface AliasFormProperties {

		/** The alias e-mail address */
		email_address: FormControl<string | null | undefined>,
	}
	export function CreateAliasFormGroup() {
		return new FormGroup<AliasFormProperties>({
			email_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AntiSpam {

		/** Allowed types of anti-spam scanning for this mail zone */
		allowed_types?: Array<AntiSpamTypes>;

		/** Types of anti-spam scanning */
		type?: AntiSpamTypes | null;
	}
	export interface AntiSpamFormProperties {

		/** Types of anti-spam scanning */
		type: FormControl<AntiSpamTypes | null | undefined>,
	}
	export function CreateAntiSpamFormGroup() {
		return new FormGroup<AntiSpamFormProperties>({
			type: new FormControl<AntiSpamTypes | null | undefined>(undefined),
		});

	}


	/** Types of anti-spam scanning */
	export enum AntiSpamTypes { none = 'none', advanced = 'advanced', basic = 'basic' }


	/** The application pool for the hosting account. */
	export interface ApplicationPool {

		/** The installed .NET Core runtimes for the hosting account. */
		installed_net_core_runtimes?: Array<string>;

		/** The active pipeline mode for the hosting account. */
		pipeline_mode?: string | null;

		/** The active runtime for the hosting account. */
		runtime?: string | null;
	}

	/** The application pool for the hosting account. */
	export interface ApplicationPoolFormProperties {

		/** The active pipeline mode for the hosting account. */
		pipeline_mode: FormControl<string | null | undefined>,

		/** The active runtime for the hosting account. */
		runtime: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPoolFormGroup() {
		return new FormGroup<ApplicationPoolFormProperties>({
			pipeline_mode: new FormControl<string | null | undefined>(undefined),
			runtime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Asset types */
	export enum AssetType { domain = 'domain', linux_hosting = 'linux_hosting', mysql = 'mysql', dns = 'dns', mailbox = 'mailbox', windows_hosting = 'windows_hosting' }

	export interface AutoForward {

		/** Copy to myself */
		copy_to_myself?: boolean | null;

		/** E-mail addresses to which e-mails are forwarded */
		email_addresses?: Array<string>;

		/** Enabled */
		enabled?: boolean | null;
	}
	export interface AutoForwardFormProperties {

		/** Copy to myself */
		copy_to_myself: FormControl<boolean | null | undefined>,

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoForwardFormGroup() {
		return new FormGroup<AutoForwardFormProperties>({
			copy_to_myself: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AutoRedirectConfig {

		/** Enabled */
		enabled?: boolean | null;
	}
	export interface AutoRedirectConfigFormProperties {

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoRedirectConfigFormGroup() {
		return new FormGroup<AutoRedirectConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AutoReply {

		/** Enabled */
		enabled?: boolean | null;

		/** Message */
		message?: string | null;

		/** Subject */
		subject?: string | null;
	}
	export interface AutoReplyFormProperties {

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,

		/** Message */
		message: FormControl<string | null | undefined>,

		/** Subject */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateAutoReplyFormGroup() {
		return new FormGroup<AutoReplyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BadRequestResponse {

		/** A list of validation errors that occurred when processing the request. */
		validation_errors?: Array<ValidationErrorMessage>;
	}
	export interface BadRequestResponseFormProperties {
	}
	export function CreateBadRequestResponseFormGroup() {
		return new FormGroup<BadRequestResponseFormProperties>({
		});

	}

	export interface ValidationErrorMessage {
		error_code?: string | null;
		error_text?: string | null;
	}
	export interface ValidationErrorMessageFormProperties {
		error_code: FormControl<string | null | undefined>,
		error_text: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorMessageFormGroup() {
		return new FormGroup<ValidationErrorMessageFormProperties>({
			error_code: new FormControl<string | null | undefined>(undefined),
			error_text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CatchAll {

		/** E-mail addresses to which all e-mails are sent to inexistent mailboxes or aliases */
		email_addresses?: Array<string>;
	}
	export interface CatchAllFormProperties {
	}
	export function CreateCatchAllFormGroup() {
		return new FormGroup<CatchAllFormProperties>({
		});

	}

	export interface CompletionEstimation {

		/**
		 * The estimated time when the job should be finished.<br />
		 * Unexpected delays can always occur.<br />
		 * The value is subject to change during the provisioning.
		 */
		estimate?: Date | null;
	}
	export interface CompletionEstimationFormProperties {

		/**
		 * The estimated time when the job should be finished.<br />
		 * Unexpected delays can always occur.<br />
		 * The value is subject to change during the provisioning.
		 */
		estimate: FormControl<Date | null | undefined>,
	}
	export function CreateCompletionEstimationFormGroup() {
		return new FormGroup<CompletionEstimationFormProperties>({
			estimate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateAccount {

		/**
		 * Ftp password for the account.<br />
		 * Applies only if the servicepack contains hosting.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		ftp_password?: string | null;

		/**
		 * An identifier for the account.<br />
		 * Should be a domain name for hosting accounts.
		 */
		identifier?: string | null;

		/** The servicepack id that defines the account. */
		servicepack_id?: number | null;
	}
	export interface CreateAccountFormProperties {

		/**
		 * Ftp password for the account.<br />
		 * Applies only if the servicepack contains hosting.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		ftp_password: FormControl<string | null | undefined>,

		/**
		 * An identifier for the account.<br />
		 * Should be a domain name for hosting accounts.
		 */
		identifier: FormControl<string | null | undefined>,

		/** The servicepack id that defines the account. */
		servicepack_id: FormControl<number | null | undefined>,
	}
	export function CreateCreateAccountFormGroup() {
		return new FormGroup<CreateAccountFormProperties>({
			ftp_password: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			servicepack_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateAliasRequest {

		/** The alias destination e-mail addresses */
		destinations?: Array<string>;

		/** The alias e-mail */
		email_address?: string | null;
	}
	export interface CreateAliasRequestFormProperties {

		/** The alias e-mail */
		email_address: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			email_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCatchAllRequest {

		/** E-mail address to which all e-mails are sent to inexistent mailboxes or aliases */
		email_address?: string | null;
	}
	export interface CreateCatchAllRequestFormProperties {

		/** E-mail address to which all e-mails are sent to inexistent mailboxes or aliases */
		email_address: FormControl<string | null | undefined>,
	}
	export function CreateCreateCatchAllRequestFormGroup() {
		return new FormGroup<CreateCatchAllRequestFormProperties>({
			email_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMailboxRequest {

		/** Mail zone account id */
		account_id?: number | null;

		/** E-mail address */
		email_address?: string | null;

		/**
		 * The password for the mailbox.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password?: string | null;
	}
	export interface CreateMailboxRequestFormProperties {

		/** Mail zone account id */
		account_id: FormControl<number | null | undefined>,

		/** E-mail address */
		email_address: FormControl<string | null | undefined>,

		/**
		 * The password for the mailbox.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateCreateMailboxRequestFormGroup() {
		return new FormGroup<CreateMailboxRequestFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMySqlDatabase {

		/** The id of the account on which to create the database. */
		account_id?: number | null;

		/**
		 * The name for the database. This will be prefixed during provisioning.
		 * The provided name during creation will be different from the provisioned database name.
		 */
		database_name?: string | null;

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password?: string | null;
	}
	export interface CreateMySqlDatabaseFormProperties {

		/** The id of the account on which to create the database. */
		account_id: FormControl<number | null | undefined>,

		/**
		 * The name for the database. This will be prefixed during provisioning.
		 * The provided name during creation will be different from the provisioned database name.
		 */
		database_name: FormControl<string | null | undefined>,

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateCreateMySqlDatabaseFormGroup() {
		return new FormGroup<CreateMySqlDatabaseFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined),
			database_name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMySqlUser {

		/**
		 * User name<br />
		 * User names have to adhere to following rules:<br /><ul><li>Between 2-14 characters.</li><li>Must be a mix of letters and/or digits.</li><li>Must be lower cased.</li><li>Cannot contain spaces.</li></ul>
		 */
		name?: string | null;

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password?: string | null;
	}
	export interface CreateMySqlUserFormProperties {

		/**
		 * User name<br />
		 * User names have to adhere to following rules:<br /><ul><li>Between 2-14 characters.</li><li>Must be a mix of letters and/or digits.</li><li>Must be lower cased.</li><li>Cannot contain spaces.</li></ul>
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateCreateMySqlUserFormGroup() {
		return new FormGroup<CreateMySqlUserFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSmtpDomainRequest {

		/** The smtp domain name */
		hostname?: string | null;
	}
	export interface CreateSmtpDomainRequestFormProperties {

		/** The smtp domain name */
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateCreateSmtpDomainRequestFormGroup() {
		return new FormGroup<CreateSmtpDomainRequestFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSslCertificateRequest {

		/**
		 * List of additional validation attributes for the certificate when choosing organization or extended validation.
		 * <table><tr><th>Name</th><th>Info</th><th>Required</th></tr><tr><td>Firstname</td><td>Firstname of the technical contact</td><td>Yes</td></tr><tr><td>Lastname</td><td>Lastname of the technical contact</td><td>Yes</td></tr><tr><td>Phone</td><td>Phone of the technical contact</td><td>Yes</td></tr><tr><td>EmailAddress</td><td>Email address of the technical contact</td><td>Yes</td></tr><tr><td>Street</td><td>Address street of the organization</td><td>Yes</td></tr><tr><td>Number</td><td>Address house number of the organization</td><td>Yes</td></tr><tr><td>PostalCode</td><td>Address postal code of the organization</td><td>Yes</td></tr><tr><td>VatCountryCode</td><td>VAT country code of the organization, ISO 3166-1 alpha-2 country code</td><td>Yes</td></tr><tr><td>OrganizationNumber</td><td>Business number of the organization</td><td>No</td></tr></table>
		 */
		additional_validation_attributes?: Array<AdditionalValidationAttribute>;

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		certificate_type?: CreateSslCertificateRequestCertificate_type | null;

		/**
		 * The certificate signing request data.<br />
		 * The certificate signing request subject should contain following attributes:<br /><table><tr><th>Name</th><th>Code</th><th>Format</th></tr><tr><td>CommonName</td><td>CN</td><td>Valid domain name, for example site.be, alias.site.be or *.site.be</td></tr><tr><td>Country</td><td>C</td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td>State</td><td>ST</td><td></td></tr><tr><td>Locality</td><td>L</td><td></td></tr><tr><td>Organization</td><td>O</td><td></td></tr><tr><td>EmailAddress</td><td>E</td><td>Valid email address</td></tr></table>
		 * The certificate signing request should also contain all the additional aliases and domains (SAN's) for the certificate.
		 */
		csr?: string | null;

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level?: CreateSslCertificateRequestValidation_level | null;
	}
	export interface CreateSslCertificateRequestFormProperties {

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		certificate_type: FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>,

		/**
		 * The certificate signing request data.<br />
		 * The certificate signing request subject should contain following attributes:<br /><table><tr><th>Name</th><th>Code</th><th>Format</th></tr><tr><td>CommonName</td><td>CN</td><td>Valid domain name, for example site.be, alias.site.be or *.site.be</td></tr><tr><td>Country</td><td>C</td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td>State</td><td>ST</td><td></td></tr><tr><td>Locality</td><td>L</td><td></td></tr><tr><td>Organization</td><td>O</td><td></td></tr><tr><td>EmailAddress</td><td>E</td><td>Valid email address</td></tr></table>
		 * The certificate signing request should also contain all the additional aliases and domains (SAN's) for the certificate.
		 */
		csr: FormControl<string | null | undefined>,

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level: FormControl<CreateSslCertificateRequestValidation_level | null | undefined>,
	}
	export function CreateCreateSslCertificateRequestFormGroup() {
		return new FormGroup<CreateSslCertificateRequestFormProperties>({
			certificate_type: new FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>(undefined),
			csr: new FormControl<string | null | undefined>(undefined),
			validation_level: new FormControl<CreateSslCertificateRequestValidation_level | null | undefined>(undefined),
		});

	}

	export enum CreateSslCertificateRequestCertificate_type { standard = 'standard', multi_domain = 'multi_domain', wildcard = 'wildcard' }

	export enum CreateSslCertificateRequestValidation_level { domain_validated = 'domain_validated', organization_validated = 'organization_validated', extended_validated = 'extended_validated' }

	export interface DnsRecord {

		/**
		 * Variable data depending on the record type.
		 * <ul><li>A: the IPv4 address.</li><li>CNAME: canonical name of an alias.</li><li>MX: fully qualified domain name of a mail host.</li><li>SRV: does not apply. Data for the SRV records can be found in specific properties.</li><li>TXT: free form text data.</li><li>CAA: format should match specific values for flag, tag and ca: "{flag} {tag} {ca}".
		 * <ul><li>The flag. The values 128 (critical) or 0 (non-critical) are expected, with 0 as the default.</li><li>The tag. A tag specifies which actions an authorized CA can take in terms of issuing SSL/TLS certificates.<br /><ul><li>The value "issue": explicitly authorizes a single certificate authority to issue a certificate (any type) for the hostname.</li><li>The value "issuewild": explicitly authorizes a single certificate authority to issue a wildcard certificate (and only wildcard) for the hostname.</li><li>The value "iodef": specifies a URL to which a certificate authority may report policy violations.</li></ul></li><li>The ca. This is the domain of the CA (Certification Authority) that has the authority to issue certificates for the domain in question. If the value is a semicolon (;), it means that no CA has the authority to issue a certificate for that domain.</li></ul></li><li>ALIAS: canonical name of an alias.</li><li>TLSA: format should match specific values for usage, selector, matching type and data: "{usage} {selector} {matching_type} {data}"
		 * <ul><li>The usage. The first field after the TLSA text in the DNS RR, specifies how to verify the certificate.<br /><ul><li>A value of 0 is for what is commonly called CA constraint (and PKIX-TA). The certificate provided when establishing TLS must be issued by the listed root-CA or one of its intermediate CAs, with a valid certification path to a root-CA already trusted by the application doing the verification.</li><li>A value of 1 is for what is commonly called Service certificate constraint (and PKIX-EE). The certificate used must match the TLSA record exactly, and it must also pass PKIX certification path validation to a trusted root-CA.</li><li>A value of 2 is for what is commonly called Trust Anchor Assertion (and DANE-TA). The certificate used has a valid certification path pointing back to the certificate mention in this record, but there is no need for it to pass the PKIX certification path validation to a trusted root-CA.</li><li>A value of 3 is for what is commonly called Domain issued certificate (and DANE-EE). The services uses a self-signed certificate. It is not signed by anyone else, and is exactly this record.</li></ul></li><li>The selector. When connecting to the service and a certificate is received, the selector field specifies which parts of it should be checked.<br /><ul><li>A value of 0 means to select the entire certificate for matching.</li><li>A value of 1 means to select just the public key for certificate matching. Matching the public key is often sufficient, as this is likely to be unique.</li></ul></li><li>The matching type.<br /><ul><li>A type of 0 means the entire information selected is present in the certificate association data.</li><li>A type of 1 means to do a SHA-256 hash of the selected data.</li><li>A type of 2 means to do a SHA-512 hash of the selected data.</li></ul></li><li>The actual data to be matched given the settings of the other fields. This is a long text string of hexadecimal data.</li></ul></li></ul>
		 */
		content?: string | null;

		/**
		 * The id of the record
		 * This value is ignored for creation of new records.
		 */
		id?: string | null;

		/**
		 * The port for SRV records.<br />
		 * The value MUST be a positive integer.<br />
		 * Editing the value is not possible. You should add a new SRV record and delete the existing record.
		 */
		port?: number | null;

		/**
		 * The priority for MX or SRV records.<br />
		 * A lower value means more preferred.<br />
		 * The value MUST be a positive integer less or equal to 9999.
		 */
		priority?: number | null;

		/**
		 * Used for the creation of SRV records. Possible options: TCP, UDP, ...<br />
		 * Editing the value is not possible. You should add a new SRV record and delete the existing record.
		 */
		protocol?: string | null;

		/**
		 * The name of the record.<br />
		 * This is the host name, alias defined by the record.<br />
		 * An empty record or '@' is equal to the domain name.<br />
		 * Applies to A, MX, CNAME, TXT, CAA, ALIAS and TLSA records.<br />
		 * When type is TLSA the recommended value format is port number, protocol and host: _25._tcp.<br />
		 * Does not apply for SRV records.
		 */
		record_name?: string | null;

		/**
		 * The symbolic name of the desired service for SRV records.<br />
		 * Editing the value is not possible. You should add a new SRV record and can delete the existing record.
		 */
		service?: string | null;

		/**
		 * The canonical hostname of the machine providing the service for SRV records.<br />
		 * Editing the value is not possible. You should add a new SRV record and delete the existing record.
		 */
		target?: string | null;

		/**
		 * Time to live of the record in seconds.<br />
		 * It defines the time frame that clients can cache the information.<br />
		 * The value MUST be between 60 and 86400. The default value is 3600 (= 1 hour).
		 */
		ttl?: number | null;

		/** The type of the record (A, MX, CNAME, SRV, TXT, CAA, ALIAS and TLSA). */
		type?: string | null;

		/**
		 * The weight for SRV records with the same priority.<br />
		 * A higher value means more preferred.
		 */
		weight?: number | null;
	}
	export interface DnsRecordFormProperties {

		/**
		 * Variable data depending on the record type.
		 * <ul><li>A: the IPv4 address.</li><li>CNAME: canonical name of an alias.</li><li>MX: fully qualified domain name of a mail host.</li><li>SRV: does not apply. Data for the SRV records can be found in specific properties.</li><li>TXT: free form text data.</li><li>CAA: format should match specific values for flag, tag and ca: "{flag} {tag} {ca}".
		 * <ul><li>The flag. The values 128 (critical) or 0 (non-critical) are expected, with 0 as the default.</li><li>The tag. A tag specifies which actions an authorized CA can take in terms of issuing SSL/TLS certificates.<br /><ul><li>The value "issue": explicitly authorizes a single certificate authority to issue a certificate (any type) for the hostname.</li><li>The value "issuewild": explicitly authorizes a single certificate authority to issue a wildcard certificate (and only wildcard) for the hostname.</li><li>The value "iodef": specifies a URL to which a certificate authority may report policy violations.</li></ul></li><li>The ca. This is the domain of the CA (Certification Authority) that has the authority to issue certificates for the domain in question. If the value is a semicolon (;), it means that no CA has the authority to issue a certificate for that domain.</li></ul></li><li>ALIAS: canonical name of an alias.</li><li>TLSA: format should match specific values for usage, selector, matching type and data: "{usage} {selector} {matching_type} {data}"
		 * <ul><li>The usage. The first field after the TLSA text in the DNS RR, specifies how to verify the certificate.<br /><ul><li>A value of 0 is for what is commonly called CA constraint (and PKIX-TA). The certificate provided when establishing TLS must be issued by the listed root-CA or one of its intermediate CAs, with a valid certification path to a root-CA already trusted by the application doing the verification.</li><li>A value of 1 is for what is commonly called Service certificate constraint (and PKIX-EE). The certificate used must match the TLSA record exactly, and it must also pass PKIX certification path validation to a trusted root-CA.</li><li>A value of 2 is for what is commonly called Trust Anchor Assertion (and DANE-TA). The certificate used has a valid certification path pointing back to the certificate mention in this record, but there is no need for it to pass the PKIX certification path validation to a trusted root-CA.</li><li>A value of 3 is for what is commonly called Domain issued certificate (and DANE-EE). The services uses a self-signed certificate. It is not signed by anyone else, and is exactly this record.</li></ul></li><li>The selector. When connecting to the service and a certificate is received, the selector field specifies which parts of it should be checked.<br /><ul><li>A value of 0 means to select the entire certificate for matching.</li><li>A value of 1 means to select just the public key for certificate matching. Matching the public key is often sufficient, as this is likely to be unique.</li></ul></li><li>The matching type.<br /><ul><li>A type of 0 means the entire information selected is present in the certificate association data.</li><li>A type of 1 means to do a SHA-256 hash of the selected data.</li><li>A type of 2 means to do a SHA-512 hash of the selected data.</li></ul></li><li>The actual data to be matched given the settings of the other fields. This is a long text string of hexadecimal data.</li></ul></li></ul>
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * The id of the record
		 * This value is ignored for creation of new records.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The port for SRV records.<br />
		 * The value MUST be a positive integer.<br />
		 * Editing the value is not possible. You should add a new SRV record and delete the existing record.
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * The priority for MX or SRV records.<br />
		 * A lower value means more preferred.<br />
		 * The value MUST be a positive integer less or equal to 9999.
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * Used for the creation of SRV records. Possible options: TCP, UDP, ...<br />
		 * Editing the value is not possible. You should add a new SRV record and delete the existing record.
		 */
		protocol: FormControl<string | null | undefined>,

		/**
		 * The name of the record.<br />
		 * This is the host name, alias defined by the record.<br />
		 * An empty record or '@' is equal to the domain name.<br />
		 * Applies to A, MX, CNAME, TXT, CAA, ALIAS and TLSA records.<br />
		 * When type is TLSA the recommended value format is port number, protocol and host: _25._tcp.<br />
		 * Does not apply for SRV records.
		 */
		record_name: FormControl<string | null | undefined>,

		/**
		 * The symbolic name of the desired service for SRV records.<br />
		 * Editing the value is not possible. You should add a new SRV record and can delete the existing record.
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * The canonical hostname of the machine providing the service for SRV records.<br />
		 * Editing the value is not possible. You should add a new SRV record and delete the existing record.
		 */
		target: FormControl<string | null | undefined>,

		/**
		 * Time to live of the record in seconds.<br />
		 * It defines the time frame that clients can cache the information.<br />
		 * The value MUST be between 60 and 86400. The default value is 3600 (= 1 hour).
		 */
		ttl: FormControl<number | null | undefined>,

		/** The type of the record (A, MX, CNAME, SRV, TXT, CAA, ALIAS and TLSA). */
		type: FormControl<string | null | undefined>,

		/**
		 * The weight for SRV records with the same priority.<br />
		 * A higher value means more preferred.
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateDnsRecordFormGroup() {
		return new FormGroup<DnsRecordFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			record_name: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Domain {

		/** The domain name */
		domain_name?: string | null;

		/** Expiration date of the domain */
		expiration_date?: Date | null;

		/**
		 * Indication of renewal.<br />
		 * No value indicates that the renewal state could not be determined at the moment.
		 */
		will_renew?: boolean | null;
	}
	export interface DomainFormProperties {

		/** The domain name */
		domain_name: FormControl<string | null | undefined>,

		/** Expiration date of the domain */
		expiration_date: FormControl<Date | null | undefined>,

		/**
		 * Indication of renewal.<br />
		 * No value indicates that the renewal state could not be determined at the moment.
		 */
		will_renew: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			domain_name: new FormControl<string | null | undefined>(undefined),
			expiration_date: new FormControl<Date | null | undefined>(undefined),
			will_renew: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DomainDetail {

		/** Indication if the domain renew state can be changed. */
		can_toggle_renew?: boolean | null;

		/** The domain name */
		domain_name?: string | null;

		/** Expiration date of the domain */
		expiration_date?: Date | null;

		/** Nameservers of the domain */
		name_servers?: Array<NameServer>;
		registrant?: Registrant;

		/**
		 * Indication of renewal.<br />
		 * No value indicates that the renewal state could not be determined at the moment.
		 */
		will_renew?: boolean | null;
	}
	export interface DomainDetailFormProperties {

		/** Indication if the domain renew state can be changed. */
		can_toggle_renew: FormControl<boolean | null | undefined>,

		/** The domain name */
		domain_name: FormControl<string | null | undefined>,

		/** Expiration date of the domain */
		expiration_date: FormControl<Date | null | undefined>,

		/**
		 * Indication of renewal.<br />
		 * No value indicates that the renewal state could not be determined at the moment.
		 */
		will_renew: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainDetailFormGroup() {
		return new FormGroup<DomainDetailFormProperties>({
			can_toggle_renew: new FormControl<boolean | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			expiration_date: new FormControl<Date | null | undefined>(undefined),
			will_renew: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NameServer {

		/** Nameserver ip */
		ip?: string | null;

		/** Nameserver name */
		name?: string | null;
	}
	export interface NameServerFormProperties {

		/** Nameserver ip */
		ip: FormControl<string | null | undefined>,

		/** Nameserver name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNameServerFormGroup() {
		return new FormGroup<NameServerFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Registrant {

		/** Address of the registrant. */
		address?: string | null;

		/** City of the registrant. */
		city?: string | null;

		/**
		 * Company name of the registrant.<br />
		 * The registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.
		 */
		company_name?: string | null;

		/**
		 * Country code of the registrant.
		 * Syntax: 'BE', 'NL, 'FR', ...
		 */
		country_code?: string | null;

		/** Email of the registrant. */
		email?: string | null;

		/**
		 * Enterprise number of the registrant.<br />
		 * Syntax: 'BE0123456789'
		 */
		enterprise_number?: string | null;

		/**
		 * Fax of the registrant.
		 * Syntax: '+32.123456789'
		 */
		fax?: string | null;

		/** First name of the registrant. */
		first_name?: string | null;

		/**
		 * Language code of the registrant.
		 * Syntax: 'nl', 'fr', 'en', 'de', ...
		 */
		language_code?: string | null;

		/** Last name of the registrant. */
		last_name?: string | null;

		/**
		 * Phone of the registrant.<br />
		 * Syntax: '+32.123456789'
		 */
		phone?: string | null;

		/** Postal code of the registrant. */
		postal_code?: string | null;
	}
	export interface RegistrantFormProperties {

		/** Address of the registrant. */
		address: FormControl<string | null | undefined>,

		/** City of the registrant. */
		city: FormControl<string | null | undefined>,

		/**
		 * Company name of the registrant.<br />
		 * The registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.
		 */
		company_name: FormControl<string | null | undefined>,

		/**
		 * Country code of the registrant.
		 * Syntax: 'BE', 'NL, 'FR', ...
		 */
		country_code: FormControl<string | null | undefined>,

		/** Email of the registrant. */
		email: FormControl<string | null | undefined>,

		/**
		 * Enterprise number of the registrant.<br />
		 * Syntax: 'BE0123456789'
		 */
		enterprise_number: FormControl<string | null | undefined>,

		/**
		 * Fax of the registrant.
		 * Syntax: '+32.123456789'
		 */
		fax: FormControl<string | null | undefined>,

		/** First name of the registrant. */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Language code of the registrant.
		 * Syntax: 'nl', 'fr', 'en', 'de', ...
		 */
		language_code: FormControl<string | null | undefined>,

		/** Last name of the registrant. */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Phone of the registrant.<br />
		 * Syntax: '+32.123456789'
		 */
		phone: FormControl<string | null | undefined>,

		/** Postal code of the registrant. */
		postal_code: FormControl<string | null | undefined>,
	}
	export function CreateRegistrantFormGroup() {
		return new FormGroup<RegistrantFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			enterprise_number: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			language_code: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EditDomainWillRenewRequest {

		/** Indication of renewal. */
		will_renew?: boolean | null;
	}
	export interface EditDomainWillRenewRequestFormProperties {

		/** Indication of renewal. */
		will_renew: FormControl<boolean | null | undefined>,
	}
	export function CreateEditDomainWillRenewRequestFormGroup() {
		return new FormGroup<EditDomainWillRenewRequestFormProperties>({
			will_renew: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EditNameServers {

		/** The domain name to register. */
		domain_name?: string | null;

		/** List of name servers. */
		name_servers?: Array<string>;
	}
	export interface EditNameServersFormProperties {

		/** The domain name to register. */
		domain_name: FormControl<string | null | undefined>,
	}
	export function CreateEditNameServersFormGroup() {
		return new FormGroup<EditNameServersFormProperties>({
			domain_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExtraField {

		/** Registrant extra field name. */
		name?: string | null;

		/** Registrant extra field value. */
		value?: string | null;
	}
	export interface ExtraFieldFormProperties {

		/** Registrant extra field name. */
		name: FormControl<string | null | undefined>,

		/** Registrant extra field value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateExtraFieldFormGroup() {
		return new FormGroup<ExtraFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FtpConfiguration {

		/** Enable or disable FTP. */
		enabled?: boolean | null;
	}
	export interface FtpConfigurationFormProperties {

		/** Enable or disable FTP. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateFtpConfigurationFormGroup() {
		return new FormGroup<FtpConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GzipConfig {

		/** Enabled */
		enabled?: boolean | null;
	}
	export interface GzipConfigFormProperties {

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGzipConfigFormGroup() {
		return new FormGroup<GzipConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A host header identifies a web domain. */
	export interface HostHeader {

		/** Indicates if the host header is applied on the web server. */
		enabled?: boolean | null;

		/** The name of the host header. */
		name?: string | null;
	}

	/** A host header identifies a web domain. */
	export interface HostHeaderFormProperties {

		/** Indicates if the host header is applied on the web server. */
		enabled: FormControl<boolean | null | undefined>,

		/** The name of the host header. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHostHeaderFormGroup() {
		return new FormGroup<HostHeaderFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http2Configuration {

		/** Enable or disable HTTP/2. */
		enabled?: boolean | null;
	}
	export interface Http2ConfigurationFormProperties {

		/** Enable or disable HTTP/2. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateHttp2ConfigurationFormGroup() {
		return new FormGroup<Http2ConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LetsEncryptConfig {

		/** Enabled */
		enabled?: boolean | null;
	}
	export interface LetsEncryptConfigFormProperties {

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLetsEncryptConfigFormGroup() {
		return new FormGroup<LetsEncryptConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LinuxHosting {

		/** Domain name for the Linux hosting account. */
		domain_name?: string | null;

		/** Id of Linux hosting service package. */
		servicepack_id?: number | null;
	}
	export interface LinuxHostingFormProperties {

		/** Domain name for the Linux hosting account. */
		domain_name: FormControl<string | null | undefined>,

		/** Id of Linux hosting service package. */
		servicepack_id: FormControl<number | null | undefined>,
	}
	export function CreateLinuxHostingFormGroup() {
		return new FormGroup<LinuxHostingFormProperties>({
			domain_name: new FormControl<string | null | undefined>(undefined),
			servicepack_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LinuxHostingDetail {

		/** Used webspace size in MB */
		actual_size?: number | null;

		/** Domain name for the Linux hosting account. */
		domain_name?: string | null;

		/** Indicates whether ftp is enabled for the hosting account. */
		ftp_enabled?: boolean | null;

		/** Ftp username */
		ftp_username?: string | null;

		/** Linux hosting IP address */
		ip?: string | null;

		/** Type of the hosting IP address (dedicated or shared) */
		ip_type?: LinuxHostingDetailIp_type | null;

		/** Maximum webspace size in MB */
		max_size?: number | null;

		/**
		 * Maximum webspace size in MB<br />
		 * Use max_size instead.
		 */
		max_webspace_size?: number | null;

		/**
		 * A list of mysql databases linked to the hosting account.<br />
		 * Details of the database can be read using the mysql database detail.
		 */
		mysql_database_names?: Array<string>;

		/** The active php version for the hosting account. */
		php_version?: string | null;

		/** Id of Linux hosting service package. */
		servicepack_id?: number | null;

		/** A list of websites on the hosting account. */
		sites?: Array<LinuxSite>;

		/** Ssh host of the linux hosting account */
		ssh_host?: string | null;

		/** Ssh username */
		ssh_username?: string | null;

		/**
		 * Used webspace size in MB<br />
		 * Use actual_size instead.
		 */
		webspace_usage?: number | null;
	}
	export interface LinuxHostingDetailFormProperties {

		/** Used webspace size in MB */
		actual_size: FormControl<number | null | undefined>,

		/** Domain name for the Linux hosting account. */
		domain_name: FormControl<string | null | undefined>,

		/** Indicates whether ftp is enabled for the hosting account. */
		ftp_enabled: FormControl<boolean | null | undefined>,

		/** Ftp username */
		ftp_username: FormControl<string | null | undefined>,

		/** Linux hosting IP address */
		ip: FormControl<string | null | undefined>,

		/** Type of the hosting IP address (dedicated or shared) */
		ip_type: FormControl<LinuxHostingDetailIp_type | null | undefined>,

		/** Maximum webspace size in MB */
		max_size: FormControl<number | null | undefined>,

		/**
		 * Maximum webspace size in MB<br />
		 * Use max_size instead.
		 */
		max_webspace_size: FormControl<number | null | undefined>,

		/** The active php version for the hosting account. */
		php_version: FormControl<string | null | undefined>,

		/** Id of Linux hosting service package. */
		servicepack_id: FormControl<number | null | undefined>,

		/** Ssh host of the linux hosting account */
		ssh_host: FormControl<string | null | undefined>,

		/** Ssh username */
		ssh_username: FormControl<string | null | undefined>,

		/**
		 * Used webspace size in MB<br />
		 * Use actual_size instead.
		 */
		webspace_usage: FormControl<number | null | undefined>,
	}
	export function CreateLinuxHostingDetailFormGroup() {
		return new FormGroup<LinuxHostingDetailFormProperties>({
			actual_size: new FormControl<number | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			ftp_enabled: new FormControl<boolean | null | undefined>(undefined),
			ftp_username: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			ip_type: new FormControl<LinuxHostingDetailIp_type | null | undefined>(undefined),
			max_size: new FormControl<number | null | undefined>(undefined),
			max_webspace_size: new FormControl<number | null | undefined>(undefined),
			php_version: new FormControl<string | null | undefined>(undefined),
			servicepack_id: new FormControl<number | null | undefined>(undefined),
			ssh_host: new FormControl<string | null | undefined>(undefined),
			ssh_username: new FormControl<string | null | undefined>(undefined),
			webspace_usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LinuxHostingDetailIp_type { dedicated = 'dedicated', shared = 'shared' }

	export interface LinuxSite {

		/** Host headers for the website. */
		host_headers?: Array<HostHeader>;

		/** Indicates whether http/2 protocol is enabled for the website. */
		http2_enabled?: boolean | null;

		/** Indicates whether automatic https redirection is enabled for the website. */
		https_redirect_enabled?: boolean | null;

		/** The name of the website. */
		name?: string | null;

		/** The path of the website. */
		path?: string | null;

		/** Indicates whether ssl is enabled for the website. */
		ssl_enabled?: boolean | null;
	}
	export interface LinuxSiteFormProperties {

		/** Indicates whether http/2 protocol is enabled for the website. */
		http2_enabled: FormControl<boolean | null | undefined>,

		/** Indicates whether automatic https redirection is enabled for the website. */
		https_redirect_enabled: FormControl<boolean | null | undefined>,

		/** The name of the website. */
		name: FormControl<string | null | undefined>,

		/** The path of the website. */
		path: FormControl<string | null | undefined>,

		/** Indicates whether ssl is enabled for the website. */
		ssl_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLinuxSiteFormGroup() {
		return new FormGroup<LinuxSiteFormProperties>({
			http2_enabled: new FormControl<boolean | null | undefined>(undefined),
			https_redirect_enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			ssl_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Type of the hosting IP address (dedicated or shared) */
	export enum LinuxIpType { dedicated = 'dedicated', shared = 'shared' }

	export interface MailZone {

		/**
		 * List of aliases on the mail zone<br />
		 * An alias is an e-mail address (alias) that automatically forwards received e-mails to another e-mail address (destination).
		 */
		aliases?: Array<Alias>;
		anti_spam?: AntiSpam;

		/** List of mail zone accounts with their mailbox size. */
		available_accounts?: Array<MailZoneAccount>;
		catch_all?: CatchAll;

		/** Indicates whether the mail zone is enabled. */
		enabled?: boolean | null;
		name?: string | null;

		/**
		 * List of extra smtp domains on the mail zone<br />
		 * SMTP domain names allow you to link multiple domain names to a single e-mail address.<br />
		 * E-mails sent to an SMTP domain will be caught by the respective e-mail address on the main domain name.
		 */
		smtp_domains?: Array<SmtpDomain>;
	}
	export interface MailZoneFormProperties {

		/** Indicates whether the mail zone is enabled. */
		enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateMailZoneFormGroup() {
		return new FormGroup<MailZoneFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MailZoneAccount {

		/** Mail zone account id, use this value to create a mailbox */
		account_id?: number | null;

		/** Size of mailbox(es) in MB */
		size?: number | null;
	}
	export interface MailZoneAccountFormProperties {

		/** Mail zone account id, use this value to create a mailbox */
		account_id: FormControl<number | null | undefined>,

		/** Size of mailbox(es) in MB */
		size: FormControl<number | null | undefined>,
	}
	export function CreateMailZoneAccountFormGroup() {
		return new FormGroup<MailZoneAccountFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SmtpDomain {

		/** Enabled */
		enabled?: boolean | null;

		/** The smtp domain name */
		hostname?: string | null;
	}
	export interface SmtpDomainFormProperties {

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,

		/** The smtp domain name */
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateSmtpDomainFormGroup() {
		return new FormGroup<SmtpDomainFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Mailbox {

		/** Used size in MB */
		actual_size?: number | null;

		/** Maximum size in MB */
		max_size?: number | null;
		name?: string | null;
	}
	export interface MailboxFormProperties {

		/** Used size in MB */
		actual_size: FormControl<number | null | undefined>,

		/** Maximum size in MB */
		max_size: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateMailboxFormGroup() {
		return new FormGroup<MailboxFormProperties>({
			actual_size: new FormControl<number | null | undefined>(undefined),
			max_size: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MailboxDetail {

		/** Used size in MB */
		actual_size?: number | null;
		auto_forward?: AutoForward;
		auto_reply?: AutoReply;

		/** Login to connect with the mailbox */
		login?: string | null;

		/** Maximum size in MB */
		max_size?: number | null;
		name?: string | null;
	}
	export interface MailboxDetailFormProperties {

		/** Used size in MB */
		actual_size: FormControl<number | null | undefined>,

		/** Login to connect with the mailbox */
		login: FormControl<string | null | undefined>,

		/** Maximum size in MB */
		max_size: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateMailboxDetailFormGroup() {
		return new FormGroup<MailboxDetailFormProperties>({
			actual_size: new FormControl<number | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			max_size: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MySqlDatabase {

		/** The account id for the database. */
		account_id?: number | null;

		/** The actual size in MB for the database. */
		actual_size?: number | null;

		/** Hostname */
		hostname?: string | null;

		/** The maximim size in MB for the database. */
		max_size?: number | null;

		/** Database name */
		name?: string | null;

		/** The number of users. */
		user_count?: number | null;
	}
	export interface MySqlDatabaseFormProperties {

		/** The account id for the database. */
		account_id: FormControl<number | null | undefined>,

		/** The actual size in MB for the database. */
		actual_size: FormControl<number | null | undefined>,

		/** Hostname */
		hostname: FormControl<string | null | undefined>,

		/** The maximim size in MB for the database. */
		max_size: FormControl<number | null | undefined>,

		/** Database name */
		name: FormControl<string | null | undefined>,

		/** The number of users. */
		user_count: FormControl<number | null | undefined>,
	}
	export function CreateMySqlDatabaseFormGroup() {
		return new FormGroup<MySqlDatabaseFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined),
			actual_size: new FormControl<number | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			max_size: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			user_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MySqlUser {

		/** User status */
		enabled?: boolean | null;

		/** User name */
		name?: string | null;

		/** User rights */
		rights?: MySqlUserRights | null;
	}
	export interface MySqlUserFormProperties {

		/** User status */
		enabled: FormControl<boolean | null | undefined>,

		/** User name */
		name: FormControl<string | null | undefined>,

		/** User rights */
		rights: FormControl<MySqlUserRights | null | undefined>,
	}
	export function CreateMySqlUserFormGroup() {
		return new FormGroup<MySqlUserFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rights: new FormControl<MySqlUserRights | null | undefined>(undefined),
		});

	}

	export enum MySqlUserRights { read_and_write = 'read_and_write', read_only = 'read_only' }

	export interface PhpVersion {

		/** Php version */
		version?: string | null;
	}
	export interface PhpVersionFormProperties {

		/** Php version */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePhpVersionFormGroup() {
		return new FormGroup<PhpVersionFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisioningJobCompletion {

		/** The id of the job. */
		id?: string | null;

		/** Links to the created resource(s). */
		resource_links?: Array<string>;
	}
	export interface ProvisioningJobCompletionFormProperties {

		/** The id of the job. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningJobCompletionFormGroup() {
		return new FormGroup<ProvisioningJobCompletionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisioningJobInfo {
		completion?: CompletionEstimation;

		/** The id of the job. */
		id?: string | null;

		/** Current job status */
		status?: ProvisioningJobInfoStatus | null;
	}
	export interface ProvisioningJobInfoFormProperties {

		/** The id of the job. */
		id: FormControl<string | null | undefined>,

		/** Current job status */
		status: FormControl<ProvisioningJobInfoStatus | null | undefined>,
	}
	export function CreateProvisioningJobInfoFormGroup() {
		return new FormGroup<ProvisioningJobInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProvisioningJobInfoStatus | null | undefined>(undefined),
		});

	}

	export enum ProvisioningJobInfoStatus { ongoing = 'ongoing', cancelled = 'cancelled', failed = 'failed', finished = 'finished' }


	/** Current job status */
	export enum ProvisioningJobStatus { ongoing = 'ongoing', cancelled = 'cancelled', failed = 'failed', finished = 'finished' }

	export interface RegisterDomain {

		/**
		 * The domain name to register.<br />
		 * Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>
		 */
		domain_name?: string | null;

		/** List of name servers. When empty, the registation will be done on default name servers. */
		name_servers?: Array<string>;
		registrant?: RegistrantInput;
	}
	export interface RegisterDomainFormProperties {

		/**
		 * The domain name to register.<br />
		 * Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>
		 */
		domain_name: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDomainFormGroup() {
		return new FormGroup<RegisterDomainFormProperties>({
			domain_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegistrantInput {

		/** Address of the registrant. */
		address?: string | null;

		/** City of the registrant. */
		city?: string | null;

		/**
		 * Company name of the registrant.<br />
		 * The registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.
		 */
		company_name?: string | null;

		/**
		 * Country code of the registrant.
		 * Syntax: 'BE', 'NL, 'FR', ...
		 */
		country_code?: string | null;

		/** Email of the registrant. */
		email?: string | null;

		/**
		 * Enterprise number of the registrant.<br />
		 * Syntax: 'BE0123456789'
		 */
		enterprise_number?: string | null;

		/**
		 * List of registrant extra fields for the domain name.
		 * <table><tr><th>Extension</th><th>Registrant specifics</th><th>Required extra field(s)</th></tr><tr><td>.dk</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.fr</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.it</td><td>is an individual and has country code 'IT'</td><td>CodiceFiscal</td></tr><tr><td>.it</td><td>is an individual and has not country code 'IT'</td><td>PassportNumber</td></tr><tr><td>.nu</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.nu</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.se</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.se</td><td>is an individual</td><td>PassportNumber</td></tr></table>
		 */
		extra_fields?: Array<ExtraField>;

		/**
		 * Fax of the registrant.
		 * Syntax: '+32.123456789'
		 */
		fax?: string | null;

		/** First name of the registrant. */
		first_name?: string | null;

		/**
		 * Language code of the registrant.
		 * Syntax: 'nl', 'fr', 'en', 'de', ...
		 */
		language_code?: string | null;

		/** Last name of the registrant. */
		last_name?: string | null;

		/**
		 * Phone of the registrant.<br />
		 * Syntax: '+32.123456789'
		 */
		phone?: string | null;

		/** Postal code of the registrant. */
		postal_code?: string | null;
	}
	export interface RegistrantInputFormProperties {

		/** Address of the registrant. */
		address: FormControl<string | null | undefined>,

		/** City of the registrant. */
		city: FormControl<string | null | undefined>,

		/**
		 * Company name of the registrant.<br />
		 * The registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.
		 */
		company_name: FormControl<string | null | undefined>,

		/**
		 * Country code of the registrant.
		 * Syntax: 'BE', 'NL, 'FR', ...
		 */
		country_code: FormControl<string | null | undefined>,

		/** Email of the registrant. */
		email: FormControl<string | null | undefined>,

		/**
		 * Enterprise number of the registrant.<br />
		 * Syntax: 'BE0123456789'
		 */
		enterprise_number: FormControl<string | null | undefined>,

		/**
		 * Fax of the registrant.
		 * Syntax: '+32.123456789'
		 */
		fax: FormControl<string | null | undefined>,

		/** First name of the registrant. */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Language code of the registrant.
		 * Syntax: 'nl', 'fr', 'en', 'de', ...
		 */
		language_code: FormControl<string | null | undefined>,

		/** Last name of the registrant. */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Phone of the registrant.<br />
		 * Syntax: '+32.123456789'
		 */
		phone: FormControl<string | null | undefined>,

		/** Postal code of the registrant. */
		postal_code: FormControl<string | null | undefined>,
	}
	export function CreateRegistrantInputFormGroup() {
		return new FormGroup<RegistrantInputFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			enterprise_number: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			language_code: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledTask {

		/**
		 * Cron expression of scheduled task.<br />
		 * 5-digit expressions (5 * * * *) are required in the following sequence:<br /><ul><li>Minute (0 - 59, also 5, 10, 15 and 30 as every 5 minutes, every 10 minutes, every quarter or every half-hour are allowed)</li><li>Hour (0 - 23, also * as every hour is allowed)</li><li>Day of the month (1 - 31, also * as every day is allowed)</li><li>Month (1 - 12 as January to December, also * as every month is allowed)</li><li>Day of the week (1 - 7 as Monday to Sunday, also * as every day is allowed)</li></ul>
		 */
		cron_expression?: string | null;

		/** Enabled. */
		enabled?: boolean | null;

		/**
		 * The id of the scheduled task.<br />
		 * This value is ignored for creation of new scheduled tasks.
		 */
		id?: string | null;

		/** Absolute path from this linux hosting to execute. */
		script_location?: string | null;
	}
	export interface ScheduledTaskFormProperties {

		/**
		 * Cron expression of scheduled task.<br />
		 * 5-digit expressions (5 * * * *) are required in the following sequence:<br /><ul><li>Minute (0 - 59, also 5, 10, 15 and 30 as every 5 minutes, every 10 minutes, every quarter or every half-hour are allowed)</li><li>Hour (0 - 23, also * as every hour is allowed)</li><li>Day of the month (1 - 31, also * as every day is allowed)</li><li>Month (1 - 12 as January to December, also * as every month is allowed)</li><li>Day of the week (1 - 7 as Monday to Sunday, also * as every day is allowed)</li></ul>
		 */
		cron_expression: FormControl<string | null | undefined>,

		/** Enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The id of the scheduled task.<br />
		 * This value is ignored for creation of new scheduled tasks.
		 */
		id: FormControl<string | null | undefined>,

		/** Absolute path from this linux hosting to execute. */
		script_location: FormControl<string | null | undefined>,
	}
	export function CreateScheduledTaskFormGroup() {
		return new FormGroup<ScheduledTaskFormProperties>({
			cron_expression: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			script_location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A site binding identifies a web domain. */
	export interface SiteBinding {

		/** The certificate thumbprint of the site binding. */
		cert_thumbprint?: string | null;

		/** The host name of the site binding. */
		host_name?: string | null;

		/** The IP address of the site binding. */
		ip_address?: string | null;

		/** The port of the site binding. */
		port?: number | null;

		/** The protocol of the site binding. */
		protocol?: string | null;

		/** Indicates whether ssl is enabled for the binding. */
		ssl_enabled?: boolean | null;
	}

	/** A site binding identifies a web domain. */
	export interface SiteBindingFormProperties {

		/** The certificate thumbprint of the site binding. */
		cert_thumbprint: FormControl<string | null | undefined>,

		/** The host name of the site binding. */
		host_name: FormControl<string | null | undefined>,

		/** The IP address of the site binding. */
		ip_address: FormControl<string | null | undefined>,

		/** The port of the site binding. */
		port: FormControl<number | null | undefined>,

		/** The protocol of the site binding. */
		protocol: FormControl<string | null | undefined>,

		/** Indicates whether ssl is enabled for the binding. */
		ssl_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSiteBindingFormGroup() {
		return new FormGroup<SiteBindingFormProperties>({
			cert_thumbprint: new FormControl<string | null | undefined>(undefined),
			host_name: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			ssl_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SshConfiguration {

		/** Enable or disable SSH. */
		enabled?: boolean | null;
	}
	export interface SshConfigurationFormProperties {

		/** Enable or disable SSH. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSshConfigurationFormGroup() {
		return new FormGroup<SshConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SshKey {

		/**
		 * The fingerprint of the public key.<br />
		 * This value is ignored for creation of new SSH keys.
		 */
		fingerprint?: string | null;

		/** Public key */
		public_key?: string | null;
	}
	export interface SshKeyFormProperties {

		/**
		 * The fingerprint of the public key.<br />
		 * This value is ignored for creation of new SSH keys.
		 */
		fingerprint: FormControl<string | null | undefined>,

		/** Public key */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSshKeyFormGroup() {
		return new FormGroup<SshKeyFormProperties>({
			fingerprint: new FormControl<string | null | undefined>(undefined),
			public_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SshKeyDetail {

		/**
		 * The fingerprint of the public key.<br />
		 * This value is ignored for creation of new SSH keys.
		 */
		fingerprint?: string | null;

		/** List of Linux hostings where SSH key is attached */
		linux_hostings?: Array<string>;

		/** Public key */
		public_key?: string | null;
	}
	export interface SshKeyDetailFormProperties {

		/**
		 * The fingerprint of the public key.<br />
		 * This value is ignored for creation of new SSH keys.
		 */
		fingerprint: FormControl<string | null | undefined>,

		/** Public key */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSshKeyDetailFormGroup() {
		return new FormGroup<SshKeyDetailFormProperties>({
			fingerprint: new FormControl<string | null | undefined>(undefined),
			public_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SslCertificate {

		/** The common name (e.g. domain.com) of the certificate. */
		common_name?: string | null;

		/** The exact time the certificate will expire. */
		expires_after?: Date | null;

		/**
		 * The SHA-1 fingerprint of the certificate.<br />
		 * The fingerprint is a cryptographic hash which is a short unique identification of the certificate.
		 */
		sha1_fingerprint?: string | null;

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		type?: CreateSslCertificateRequestCertificate_type | null;

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level?: CreateSslCertificateRequestValidation_level | null;
	}
	export interface SslCertificateFormProperties {

		/** The common name (e.g. domain.com) of the certificate. */
		common_name: FormControl<string | null | undefined>,

		/** The exact time the certificate will expire. */
		expires_after: FormControl<Date | null | undefined>,

		/**
		 * The SHA-1 fingerprint of the certificate.<br />
		 * The fingerprint is a cryptographic hash which is a short unique identification of the certificate.
		 */
		sha1_fingerprint: FormControl<string | null | undefined>,

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		type: FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>,

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level: FormControl<CreateSslCertificateRequestValidation_level | null | undefined>,
	}
	export function CreateSslCertificateFormGroup() {
		return new FormGroup<SslCertificateFormProperties>({
			common_name: new FormControl<string | null | undefined>(undefined),
			expires_after: new FormControl<Date | null | undefined>(undefined),
			sha1_fingerprint: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>(undefined),
			validation_level: new FormControl<CreateSslCertificateRequestValidation_level | null | undefined>(undefined),
		});

	}

	export interface SslCertificateDetail {

		/** The common name (e.g. domain.com) of the certificate. */
		common_name?: string | null;

		/** The exact time the certificate will expire. */
		expires_after?: Date | null;

		/**
		 * The SHA-1 fingerprint of the certificate.<br />
		 * The fingerprint is a cryptographic hash which is a short unique identification of the certificate.
		 */
		sha1_fingerprint?: string | null;

		/** The list of all supported dns names in the certificate. */
		subject_alt_names?: Array<SslSubjectAltName>;

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		type?: CreateSslCertificateRequestCertificate_type | null;

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level?: CreateSslCertificateRequestValidation_level | null;
	}
	export interface SslCertificateDetailFormProperties {

		/** The common name (e.g. domain.com) of the certificate. */
		common_name: FormControl<string | null | undefined>,

		/** The exact time the certificate will expire. */
		expires_after: FormControl<Date | null | undefined>,

		/**
		 * The SHA-1 fingerprint of the certificate.<br />
		 * The fingerprint is a cryptographic hash which is a short unique identification of the certificate.
		 */
		sha1_fingerprint: FormControl<string | null | undefined>,

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		type: FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>,

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level: FormControl<CreateSslCertificateRequestValidation_level | null | undefined>,
	}
	export function CreateSslCertificateDetailFormGroup() {
		return new FormGroup<SslCertificateDetailFormProperties>({
			common_name: new FormControl<string | null | undefined>(undefined),
			expires_after: new FormControl<Date | null | undefined>(undefined),
			sha1_fingerprint: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>(undefined),
			validation_level: new FormControl<CreateSslCertificateRequestValidation_level | null | undefined>(undefined),
		});

	}

	export interface SslSubjectAltName {

		/**
		 * The type of the alt name:
		 * <ul><li>Dns</li><li>Ip</li></ul>
		 */
		type?: SslSubjectAltNameType | null;

		/** The value of the alt name. */
		value?: string | null;
	}
	export interface SslSubjectAltNameFormProperties {

		/**
		 * The type of the alt name:
		 * <ul><li>Dns</li><li>Ip</li></ul>
		 */
		type: FormControl<SslSubjectAltNameType | null | undefined>,

		/** The value of the alt name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSslSubjectAltNameFormGroup() {
		return new FormGroup<SslSubjectAltNameFormProperties>({
			type: new FormControl<SslSubjectAltNameType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SslSubjectAltNameType { dns = 'dns', ip = 'ip' }


	/**
	 * The file format of the returned file stream:
	 * <ul><li>PFX: Also known as PKCS #12, is a single, password protected certificate archive that contains the entire certificate chain plus the matching private key.</li></ul>
	 */
	export enum SslCertificateFileFormat { pfx = 'pfx' }

	export interface SslCertificateRequest {

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		certificate_type?: CreateSslCertificateRequestCertificate_type | null;

		/** The common name of the certificate request. */
		common_name?: string | null;

		/** The id of the certificate request. */
		id?: number | null;

		/** The order code of the certificate request. */
		order_code?: string | null;

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level?: CreateSslCertificateRequestValidation_level | null;

		/** The vendor of the certificate. */
		vendor?: SslCertificateRequestVendor | null;
	}
	export interface SslCertificateRequestFormProperties {

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		certificate_type: FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>,

		/** The common name of the certificate request. */
		common_name: FormControl<string | null | undefined>,

		/** The id of the certificate request. */
		id: FormControl<number | null | undefined>,

		/** The order code of the certificate request. */
		order_code: FormControl<string | null | undefined>,

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level: FormControl<CreateSslCertificateRequestValidation_level | null | undefined>,

		/** The vendor of the certificate. */
		vendor: FormControl<SslCertificateRequestVendor | null | undefined>,
	}
	export function CreateSslCertificateRequestFormGroup() {
		return new FormGroup<SslCertificateRequestFormProperties>({
			certificate_type: new FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>(undefined),
			common_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			order_code: new FormControl<string | null | undefined>(undefined),
			validation_level: new FormControl<CreateSslCertificateRequestValidation_level | null | undefined>(undefined),
			vendor: new FormControl<SslCertificateRequestVendor | null | undefined>(undefined),
		});

	}

	export enum SslCertificateRequestVendor { sectigo = 'sectigo' }

	export interface SslCertificateRequestDetail {

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		certificate_type?: CreateSslCertificateRequestCertificate_type | null;

		/** The common name of the certificate request. */
		common_name?: string | null;

		/** The id of the certificate request. */
		id?: number | null;

		/** The order code of the certificate request. */
		order_code?: string | null;

		/** The list of all supported domains in the certificate. */
		subject_alt_names?: Array<SslSubjectAltName>;

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level?: CreateSslCertificateRequestValidation_level | null;

		/** The list of dns names to be validated with the information related to domain verification. */
		validations?: Array<SslCertificateRequestValidation>;

		/** The vendor of the certificate. */
		vendor?: SslCertificateRequestVendor | null;
	}
	export interface SslCertificateRequestDetailFormProperties {

		/**
		 * The type of the certificate:
		 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
		 */
		certificate_type: FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>,

		/** The common name of the certificate request. */
		common_name: FormControl<string | null | undefined>,

		/** The id of the certificate request. */
		id: FormControl<number | null | undefined>,

		/** The order code of the certificate request. */
		order_code: FormControl<string | null | undefined>,

		/**
		 * The validation level of the certificate:
		 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
		 */
		validation_level: FormControl<CreateSslCertificateRequestValidation_level | null | undefined>,

		/** The vendor of the certificate. */
		vendor: FormControl<SslCertificateRequestVendor | null | undefined>,
	}
	export function CreateSslCertificateRequestDetailFormGroup() {
		return new FormGroup<SslCertificateRequestDetailFormProperties>({
			certificate_type: new FormControl<CreateSslCertificateRequestCertificate_type | null | undefined>(undefined),
			common_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			order_code: new FormControl<string | null | undefined>(undefined),
			validation_level: new FormControl<CreateSslCertificateRequestValidation_level | null | undefined>(undefined),
			vendor: new FormControl<SslCertificateRequestVendor | null | undefined>(undefined),
		});

	}

	export interface SslCertificateRequestValidation {

		/** Returns true if no user interaction is required and the domain validation will be verified automatic. */
		auto_validated?: boolean | null;

		/** The value-part (Point To) of the CNAME-record that must be created as part of domain verification. */
		cname_validation_content?: string | null;

		/** The host-part (Name) of the CNAME-record that must be created as part of domain verification. */
		cname_validation_name?: string | null;

		/** A domain name of the certificate. */
		dns_name?: string | null;

		/** An array of eligible domain verification email addresses. */
		email_addresses?: Array<string>;

		/** The content your verification file must contain, consisting of three lines of plain-text. */
		file_validation_content?: Array<string>;

		/** The URL (http format) your verification file must be uploaded to as part of domain verification. */
		file_validation_url_http?: string | null;

		/** The URL (https format) your verification file must be uploaded to as part of domain verification. */
		file_validation_url_https?: string | null;

		/** The domain validation verification type. */
		type?: SslCertificateRequestValidationType | null;
	}
	export interface SslCertificateRequestValidationFormProperties {

		/** Returns true if no user interaction is required and the domain validation will be verified automatic. */
		auto_validated: FormControl<boolean | null | undefined>,

		/** The value-part (Point To) of the CNAME-record that must be created as part of domain verification. */
		cname_validation_content: FormControl<string | null | undefined>,

		/** The host-part (Name) of the CNAME-record that must be created as part of domain verification. */
		cname_validation_name: FormControl<string | null | undefined>,

		/** A domain name of the certificate. */
		dns_name: FormControl<string | null | undefined>,

		/** The URL (http format) your verification file must be uploaded to as part of domain verification. */
		file_validation_url_http: FormControl<string | null | undefined>,

		/** The URL (https format) your verification file must be uploaded to as part of domain verification. */
		file_validation_url_https: FormControl<string | null | undefined>,

		/** The domain validation verification type. */
		type: FormControl<SslCertificateRequestValidationType | null | undefined>,
	}
	export function CreateSslCertificateRequestValidationFormGroup() {
		return new FormGroup<SslCertificateRequestValidationFormProperties>({
			auto_validated: new FormControl<boolean | null | undefined>(undefined),
			cname_validation_content: new FormControl<string | null | undefined>(undefined),
			cname_validation_name: new FormControl<string | null | undefined>(undefined),
			dns_name: new FormControl<string | null | undefined>(undefined),
			file_validation_url_http: new FormControl<string | null | undefined>(undefined),
			file_validation_url_https: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SslCertificateRequestValidationType | null | undefined>(undefined),
		});

	}

	export enum SslCertificateRequestValidationType { dns = 'dns', file = 'file', email = 'email' }


	/**
	 * The type of the certificate:
	 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
	 */
	export enum SslCertificateType { standard = 'standard', multi_domain = 'multi_domain', wildcard = 'wildcard' }


	/**
	 * The validation level of the certificate:
	 * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
	 */
	export enum SslCertificateValidationLevel { domain_validated = 'domain_validated', organization_validated = 'organization_validated', extended_validated = 'extended_validated' }


	/** The vendor of the certificate. */
	export enum SslCertificateVendor { sectigo = 'sectigo' }

	export interface TransferDomain {

		/** Authorization code which allows the transfer to execute. */
		auth_code?: string | null;

		/**
		 * The domain name to transfer.<br />
		 * Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>
		 */
		domain_name?: string | null;

		/** List of name servers. When empty, the transfer will be done on default name servers. */
		name_servers?: Array<string>;
		registrant?: RegistrantInput;
	}
	export interface TransferDomainFormProperties {

		/** Authorization code which allows the transfer to execute. */
		auth_code: FormControl<string | null | undefined>,

		/**
		 * The domain name to transfer.<br />
		 * Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>
		 */
		domain_name: FormControl<string | null | undefined>,
	}
	export function CreateTransferDomainFormGroup() {
		return new FormGroup<TransferDomainFormProperties>({
			auth_code: new FormControl<string | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAliasRequest {

		/** The alias destination e-mail addresses */
		destinations?: Array<string>;
	}
	export interface UpdateAliasRequestFormProperties {
	}
	export function CreateUpdateAliasRequestFormGroup() {
		return new FormGroup<UpdateAliasRequestFormProperties>({
		});

	}

	export interface UpdateAntiSpamRequest {

		/** Types of anti-spam scanning */
		type?: AntiSpamTypes | null;
	}
	export interface UpdateAntiSpamRequestFormProperties {

		/** Types of anti-spam scanning */
		type: FormControl<AntiSpamTypes | null | undefined>,
	}
	export function CreateUpdateAntiSpamRequestFormGroup() {
		return new FormGroup<UpdateAntiSpamRequestFormProperties>({
			type: new FormControl<AntiSpamTypes | null | undefined>(undefined),
		});

	}

	export interface UpdateMailboxPasswordRequest {

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password?: string | null;
	}
	export interface UpdateMailboxPasswordRequestFormProperties {

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMailboxPasswordRequestFormGroup() {
		return new FormGroup<UpdateMailboxPasswordRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhpAPcuRequest {

		/** The APcu size. */
		apcu_size?: number | null;

		/** Enables or disables APC. */
		enabled?: boolean | null;
	}
	export interface UpdatePhpAPcuRequestFormProperties {

		/** The APcu size. */
		apcu_size: FormControl<number | null | undefined>,

		/** Enables or disables APC. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePhpAPcuRequestFormGroup() {
		return new FormGroup<UpdatePhpAPcuRequestFormProperties>({
			apcu_size: new FormControl<number | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdatePhpMemoryLimitRequest {

		/** The php memory limit */
		memory_limit?: number | null;
	}
	export interface UpdatePhpMemoryLimitRequestFormProperties {

		/** The php memory limit */
		memory_limit: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePhpMemoryLimitRequestFormGroup() {
		return new FormGroup<UpdatePhpMemoryLimitRequestFormProperties>({
			memory_limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSmtpDomainRequest {

		/** Enabled */
		enabled?: boolean | null;
	}
	export interface UpdateSmtpDomainRequestFormProperties {

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSmtpDomainRequestFormGroup() {
		return new FormGroup<UpdateSmtpDomainRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPasswordRequest {

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password?: string | null;
	}
	export interface UpdateUserPasswordRequestFormProperties {

		/**
		 * The password for the database user.<br />
		 * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPasswordRequestFormGroup() {
		return new FormGroup<UpdateUserPasswordRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserStatusRequest {

		/** Enabled */
		enabled?: boolean | null;
	}
	export interface UpdateUserStatusRequestFormProperties {

		/** Enabled */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUserStatusRequestFormGroup() {
		return new FormGroup<UpdateUserStatusRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** User rights */
	export enum UserRights { read_and_write = 'read_and_write', read_only = 'read_only' }

	export interface WindowsHosting {

		/** Domain name for the Windows hosting account. */
		domain_name?: string | null;

		/** Id of Windows hosting service package. */
		servicepack_id?: number | null;
	}
	export interface WindowsHostingFormProperties {

		/** Domain name for the Windows hosting account. */
		domain_name: FormControl<string | null | undefined>,

		/** Id of Windows hosting service package. */
		servicepack_id: FormControl<number | null | undefined>,
	}
	export function CreateWindowsHostingFormGroup() {
		return new FormGroup<WindowsHostingFormProperties>({
			domain_name: new FormControl<string | null | undefined>(undefined),
			servicepack_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WindowsHostingDetail {

		/** Used webspace size in MB */
		actual_size?: number | null;

		/** The application pool for the hosting account. */
		application_pool?: ApplicationPool;

		/** Domain name for the Windows hosting account. */
		domain_name?: string | null;

		/** Ftp username */
		ftp_username?: string | null;

		/** Windows hosting IP address */
		ip?: string | null;

		/** Type of the hosting IP address (dedicated or shared) */
		ip_type?: LinuxHostingDetailIp_type | null;

		/** Maximum webspace size in MB */
		max_size?: number | null;

		/** A list of mssql databases linked to the hosting account.<br /> */
		mssql_database_names?: Array<string>;

		/** Id of Windows hosting service package. */
		servicepack_id?: number | null;

		/** A list of websites on the hosting account. */
		sites?: Array<WindowsSite>;
	}
	export interface WindowsHostingDetailFormProperties {

		/** Used webspace size in MB */
		actual_size: FormControl<number | null | undefined>,

		/** Domain name for the Windows hosting account. */
		domain_name: FormControl<string | null | undefined>,

		/** Ftp username */
		ftp_username: FormControl<string | null | undefined>,

		/** Windows hosting IP address */
		ip: FormControl<string | null | undefined>,

		/** Type of the hosting IP address (dedicated or shared) */
		ip_type: FormControl<LinuxHostingDetailIp_type | null | undefined>,

		/** Maximum webspace size in MB */
		max_size: FormControl<number | null | undefined>,

		/** Id of Windows hosting service package. */
		servicepack_id: FormControl<number | null | undefined>,
	}
	export function CreateWindowsHostingDetailFormGroup() {
		return new FormGroup<WindowsHostingDetailFormProperties>({
			actual_size: new FormControl<number | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			ftp_username: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			ip_type: new FormControl<LinuxHostingDetailIp_type | null | undefined>(undefined),
			max_size: new FormControl<number | null | undefined>(undefined),
			servicepack_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WindowsSite {

		/** The bindings for the website. */
		bindings?: Array<SiteBinding>;

		/** The name of the website. */
		name?: string | null;

		/** The path of the website. */
		path?: string | null;
	}
	export interface WindowsSiteFormProperties {

		/** The name of the website. */
		name: FormControl<string | null | undefined>,

		/** The path of the website. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateWindowsSiteFormGroup() {
		return new FormGroup<WindowsSiteFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type of the hosting IP address (dedicated or shared) */
	export enum WindowsIpType { dedicated = 'dedicated', shared = 'shared' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Overview of accounts
		 * Get accounts
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @param {AssetType} asset_type Filters the list, returning only accounts containing the specified asset type.
		 * @param {string} identifier Return only accounts, matching the specified identifier.
		 * @return {Array<Account>} Success
		 */
		GetAccounts(skip: number | null | undefined, take: number | null | undefined, asset_type: AssetType | null | undefined, identifier: string | null | undefined): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'accounts?skip=' + skip + '&take=' + take + '&asset_type=' + asset_type + '&identifier=' + (identifier == null ? '' : encodeURIComponent(identifier)), {});
		}

		/**
		 * Create a new account
		 * The creation of an account requires some background processing. There is no instant feedback of the creation status.
		 * Post accounts
		 * @return {void} 
		 */
		CreateAccount(requestBody: CreateAccount): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific account
		 * Get accounts/{accountId}
		 * @param {number} account_id The id of the account.
		 * @param {string} accountId Automatically added
		 * @return {AccountDetail} Success
		 */
		GetAccount(account_id: number, accountId: string): Observable<AccountDetail> {
			return this.http.get<AccountDetail>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '?account_id=' + account_id, {});
		}

		/**
		 * Get records
		 * Get dns/{domainName}/records
		 * @param {string} domain_name The domain name.
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @param {string} type Filters records matching the type. Most other filters only apply when this filter is specified.
		 * @param {string} record_name Filters records matching the record name. This filter only applies to lookups of A, CNAME, TXT, CAA, ALIAS and TLSA records.
		 * @param {string} service Filters records for the service. This filter only applies to lookups of SRV records.
		 * @param {string} domainName Automatically added
		 * @return {Array<DnsRecord>} Success
		 */
		DNS_recordsGetByDomain_nameAndSkipAndTakeAndTypeAndRecord_nameAndServiceAndDomainName(domain_name: string, skip: number | null | undefined, take: number | null | undefined, type: string | null | undefined, record_name: string | null | undefined, service: string | null | undefined, domainName: string): Observable<Array<DnsRecord>> {
			return this.http.get<Array<DnsRecord>>(this.baseUri + 'dns/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/records?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&skip=' + skip + '&take=' + take + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&record_name=' + (record_name == null ? '' : encodeURIComponent(record_name)) + '&service=' + (service == null ? '' : encodeURIComponent(service)), {});
		}

		/**
		 * Create a record
		 * Post dns/{domainName}/records
		 * @param {string} domain_name The domain name.
		 * @param {string} domainName Automatically added
		 * @param {DnsRecord} requestBody The record to create
		 * @return {void} 
		 */
		DNS_recordsPostByDomain_nameAndDomainName(domain_name: string, domainName: string, requestBody: DnsRecord): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dns/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/records?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a record
		 * Delete dns/{domainName}/records/{recordId}
		 * @param {string} domain_name The domain name.
		 * @param {string} record_id The id of the record.
		 * @param {string} domainName Automatically added
		 * @param {string} recordId Automatically added
		 * @return {void} 
		 */
		DNS_recordsDeleteByDomain_nameAndRecord_idAndDomainNameAndRecordId(domain_name: string, record_id: string, domainName: string, recordId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dns/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/records/' + (recordId == null ? '' : encodeURIComponent(recordId)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&record_id=' + (record_id == null ? '' : encodeURIComponent(record_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get specific record
		 * Get dns/{domainName}/records/{recordId}
		 * @param {string} domain_name The domain name.
		 * @param {string} record_id The id of the record.
		 * @param {string} domainName Automatically added
		 * @param {string} recordId Automatically added
		 * @return {DnsRecord} Success
		 */
		DNS_recordsGetByDomain_nameAndRecord_idAndDomainNameAndRecordId(domain_name: string, record_id: string, domainName: string, recordId: string): Observable<DnsRecord> {
			return this.http.get<DnsRecord>(this.baseUri + 'dns/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/records/' + (recordId == null ? '' : encodeURIComponent(recordId)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&record_id=' + (record_id == null ? '' : encodeURIComponent(record_id)), {});
		}

		/**
		 * Edit a record
		 * Put dns/{domainName}/records/{recordId}
		 * @param {string} domain_name The domain name.
		 * @param {string} record_id The id of the record.
		 * @param {string} domainName Automatically added
		 * @param {string} recordId Automatically added
		 * @param {DnsRecord} requestBody The record with updated values.
		 * @return {void} Success
		 */
		DNS_recordsPutByDomain_nameAndRecord_idAndDomainNameAndRecordId(domain_name: string, record_id: string, domainName: string, recordId: string, requestBody: DnsRecord): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'dns/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/records/' + (recordId == null ? '' : encodeURIComponent(recordId)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&record_id=' + (record_id == null ? '' : encodeURIComponent(record_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Overviews of domains
		 * Get domains
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @return {Array<Domain>} Success
		 */
		GetDomains(skip: number | null | undefined, take: number | null | undefined): Observable<Array<Domain>> {
			return this.http.get<Array<Domain>>(this.baseUri + 'domains?skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Register a domain
		 * Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.
		 * Post domains/registrations
		 * @return {void} 
		 */
		Register(requestBody: RegisterDomain): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domains/registrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer a domain
		 * Transfers a domain with a transfer authorization code.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.
		 * Post domains/transfers
		 * @return {void} 
		 */
		Transfer(requestBody: TransferDomain): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domains/transfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Details of a domain
		 * Get domains/{domainName}
		 * @param {string} domain_name The domain name
		 * @param {string} domainName Automatically added
		 * @return {DomainDetail} Success
		 */
		GetDomain(domain_name: string, domainName: string): Observable<DomainDetail> {
			return this.http.get<DomainDetail>(this.baseUri + 'domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Edit domain name servers
		 * Put domains/{domainName}/nameservers
		 * @param {string} domain_name The domain name
		 * @param {string} domainName Automatically added
		 * @return {void} 
		 */
		EditNameServers(domain_name: string, domainName: string, requestBody: EditNameServers): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/nameservers?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit domain name renew state
		 * Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
		 * Allowed if the requesting user has the finance role.
		 * Put domains/{domainName}/renew
		 * @param {string} domain_name The domain name
		 * @param {string} domainName Automatically added
		 * @param {EditDomainWillRenewRequest} requestBody Contains the domain renew information
		 * @return {void} 
		 */
		ConfigureDomain(domain_name: string, domainName: string, requestBody: EditDomainWillRenewRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/renew?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Overview of linux hostings
		 * Get linuxhostings
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @return {Array<LinuxHosting>} Success
		 */
		GetLinuxHostings(skip: number | null | undefined, take: number | null | undefined): Observable<Array<LinuxHosting>> {
			return this.http.get<Array<LinuxHosting>>(this.baseUri + 'linuxhostings?skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Linux hosting detail
		 * Get linuxhostings/{domainName}
		 * @param {string} domain_name The Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {LinuxHostingDetail} Success
		 */
		GetLinuxHosting(domain_name: string, domainName: string): Observable<LinuxHostingDetail> {
			return this.http.get<LinuxHostingDetail>(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Configure FTP
		 * Put linuxhostings/{domainName}/ftp/configuration
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {void} 
		 */
		ConfigureFtp(domain_name: string, domainName: string, requestBody: FtpConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/ftp/configuration?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure PHP APCu setting
		 * Put linuxhostings/{domainName}/phpsettings/apcu
		 * @param {string} domain_name Linux hosting domain name
		 * @param {string} domainName Automatically added
		 * @param {UpdatePhpAPcuRequest} requestBody Php APcu config
		 * @return {void} 
		 */
		ChangeApcu(domain_name: string, domainName: string, requestBody: UpdatePhpAPcuRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/phpsettings/apcu?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the available PHP versions.
		 * Get linuxhostings/{domainName}/phpsettings/availableversions
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {Array<PhpVersion>} Success
		 */
		GetAvailablePhpVersions(domain_name: string, domainName: string): Observable<Array<PhpVersion>> {
			return this.http.get<Array<PhpVersion>>(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/phpsettings/availableversions?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Configure PHP memory limit
		 * Put linuxhostings/{domainName}/phpsettings/memorylimit
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @param {UpdatePhpMemoryLimitRequest} requestBody Memory limit config
		 * @return {void} 
		 */
		ChangePhpMemoryLimit(domain_name: string, domainName: string, requestBody: UpdatePhpMemoryLimitRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/phpsettings/memorylimit?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the Linux hosting PHP version.
		 * Put linuxhostings/{domainName}/phpsettings/version
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @param {PhpVersion} requestBody The new PHP version.
		 * @return {void} 
		 */
		ChangePhpVersion(domain_name: string, domainName: string, requestBody: PhpVersion): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/phpsettings/version?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Overview of scheduled tasks
		 * Manage scheduled tasks which are also manageable via the control panel.
		 * Get linuxhostings/{domainName}/scheduledtasks
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {Array<ScheduledTask>} Success
		 */
		GetScheduledTasks(domain_name: string, domainName: string): Observable<Array<ScheduledTask>> {
			return this.http.get<Array<ScheduledTask>>(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/scheduledtasks?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Add a scheduled task
		 * Post linuxhostings/{domainName}/scheduledtasks
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {void} 
		 */
		AddScheduledTasks(domain_name: string, domainName: string, requestBody: ScheduledTask): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/scheduledtasks?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a scheduled task
		 * Delete linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} scheduled_task_id Id of the scheduled task.
		 * @param {string} domainName Automatically added
		 * @param {string} scheduledTaskId Automatically added
		 * @return {void} 
		 */
		DeleteScheduledTask(domain_name: string, scheduled_task_id: string, domainName: string, scheduledTaskId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/scheduledtasks/' + (scheduledTaskId == null ? '' : encodeURIComponent(scheduledTaskId)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&scheduled_task_id=' + (scheduled_task_id == null ? '' : encodeURIComponent(scheduled_task_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get scheduled task detail
		 * Get linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} scheduled_task_id Id of the scheduled task.
		 * @param {string} domainName Automatically added
		 * @param {string} scheduledTaskId Automatically added
		 * @return {ScheduledTask} Success
		 */
		GetScheduledTask(domain_name: string, scheduled_task_id: string, domainName: string, scheduledTaskId: string): Observable<ScheduledTask> {
			return this.http.get<ScheduledTask>(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/scheduledtasks/' + (scheduledTaskId == null ? '' : encodeURIComponent(scheduledTaskId)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&scheduled_task_id=' + (scheduled_task_id == null ? '' : encodeURIComponent(scheduled_task_id)), {});
		}

		/**
		 * Configure a scheduled task
		 * Put linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} scheduled_task_id Id of the scheduled task.
		 * @param {string} domainName Automatically added
		 * @param {string} scheduledTaskId Automatically added
		 * @return {void} 
		 */
		ConfigureScheduledTask(domain_name: string, scheduled_task_id: string, domainName: string, scheduledTaskId: string, requestBody: ScheduledTask): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/scheduledtasks/' + (scheduledTaskId == null ? '' : encodeURIComponent(scheduledTaskId)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&scheduled_task_id=' + (scheduled_task_id == null ? '' : encodeURIComponent(scheduled_task_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable/disable GZIP compression
		 * Put linuxhostings/{domainName}/settings/gzipcompression
		 * @param {string} domain_name Linux hosting domain name
		 * @param {string} domainName Automatically added
		 * @param {GzipConfig} requestBody Whether GZIP compression is enabled or not.
		 * @return {void} 
		 */
		ChangeGzipCompression(domain_name: string, domainName: string, requestBody: GzipConfig): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/settings/gzipcompression?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a host header
		 * Post linuxhostings/{domainName}/sites/{siteName}/hostheaders
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} site_name Name of the site on the linux hosting.
		 * @param {string} domainName Automatically added
		 * @param {string} siteName Automatically added
		 * @param {AddHostHeaderRequest} requestBody Add host header request
		 * @return {void} 
		 */
		CreateHostHeader(domain_name: string, site_name: string, domainName: string, siteName: string, requestBody: AddHostHeaderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/hostheaders?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&site_name=' + (site_name == null ? '' : encodeURIComponent(site_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure HTTP/2
		 * Put linuxhostings/{domainName}/sites/{siteName}/http2/configuration
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} site_name Site name where HTTP/2 should be configured.<br />
		 * For HTTP/2 to work correctly, the site must have ssl enabled.
		 * @param {string} domainName Automatically added
		 * @param {string} siteName Automatically added
		 * @return {void} 
		 */
		ConfigureHttp2(domain_name: string, site_name: string, domainName: string, siteName: string, requestBody: Http2Configuration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/http2/configuration?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&site_name=' + (site_name == null ? '' : encodeURIComponent(site_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure SSH
		 * Put linuxhostings/{domainName}/ssh/configuration
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {void} 
		 */
		ConfigureSsh(domain_name: string, domainName: string, requestBody: SshConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/ssh/configuration?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Overview of SSH keys
		 * Get linuxhostings/{domainName}/ssh/keys
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {Array<SshKey>} Success
		 */
		GetSshKeys(domain_name: string, domainName: string): Observable<Array<SshKey>> {
			return this.http.get<Array<SshKey>>(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/ssh/keys?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Add a SSH key
		 * Post linuxhostings/{domainName}/ssh/keys
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @param {AddSshKeyRequest} requestBody SSH key public key.
		 * @return {void} 
		 */
		AddSshKey(domain_name: string, domainName: string, requestBody: AddSshKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/ssh/keys?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a SSH key
		 * Delete linuxhostings/{domainName}/ssh/keys/{fingerprint}
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} fingerprint Fingerprint of public key.
		 * @param {string} domainName Automatically added
		 * @return {void} 
		 */
		DeleteSshKey(domain_name: string, fingerprint: string, domainName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/ssh/keys/' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure auto redirect
		 * Put linuxhostings/{domainName}/sslsettings/{hostname}/autoredirect
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} hostname Specific hostname.
		 * @param {string} domainName Automatically added
		 * @param {AutoRedirectConfig} requestBody Auto redirect config.
		 * @return {void} 
		 */
		ChangeAutoRedirect(domain_name: string, hostname: string, domainName: string, requestBody: AutoRedirectConfig): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/sslsettings/' + (hostname == null ? '' : encodeURIComponent(hostname)) + '/autoredirect?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure let's encrypt
		 * Put linuxhostings/{domainName}/sslsettings/{hostname}/letsencrypt
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} hostname Specific hostname.
		 * @param {string} domainName Automatically added
		 * @param {LetsEncryptConfig} requestBody Let's encrypt config.
		 * @return {void} 
		 */
		ChangeLetsEncrypt(domain_name: string, hostname: string, domainName: string, requestBody: LetsEncryptConfig): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/sslsettings/' + (hostname == null ? '' : encodeURIComponent(hostname)) + '/letsencrypt?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a subsite
		 * Post linuxhostings/{domainName}/subsites
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} domainName Automatically added
		 * @param {AddSubsiteRequest} requestBody Add subsite request
		 * @return {void} 
		 */
		CreateSubsite(domain_name: string, domainName: string, requestBody: AddSubsiteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/subsites?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a subsite
		 * Delete linuxhostings/{domainName}/subsites/{siteName}
		 * @param {string} domain_name Linux hosting domain name.
		 * @param {string} site_name Name of the site on the linux hosting.
		 * @param {string} domainName Automatically added
		 * @param {string} siteName Automatically added
		 * @return {void} 
		 */
		DeleteSubsite(domain_name: string, site_name: string, domainName: string, siteName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'linuxhostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/subsites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&site_name=' + (site_name == null ? '' : encodeURIComponent(site_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets your mailboxes.
		 * Currently only supports getting the mailboxes filtered by domain name.
		 * Get mailboxes
		 * @param {string} domain_name Obligated domain name for getting mailboxes.
		 * @return {Array<Mailbox>} Success
		 */
		GetMailboxes(domain_name: string | null | undefined): Observable<Array<Mailbox>> {
			return this.http.get<Array<Mailbox>>(this.baseUri + 'mailboxes?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Create a new mailbox.
		 * Post mailboxes
		 * @param {CreateMailboxRequest} requestBody The add mailbox request.
		 * @return {void} 
		 */
		CreateMailbox(requestBody: CreateMailboxRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mailboxes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a mailbox
		 * Delete mailboxes/{mailboxName}
		 * @param {string} mailbox_name Mailbox name.
		 * @param {string} mailboxName Automatically added
		 * @return {void} 
		 */
		DeleteMailbox(mailbox_name: string, mailboxName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mailboxes/' + (mailboxName == null ? '' : encodeURIComponent(mailboxName)) + '?mailbox_name=' + (mailbox_name == null ? '' : encodeURIComponent(mailbox_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific mailbox
		 * Get mailboxes/{mailboxName}
		 * @param {string} mailbox_name Mailbox name.
		 * @param {string} mailboxName Automatically added
		 * @return {MailboxDetail} Success
		 */
		GetMailbox(mailbox_name: string, mailboxName: string): Observable<MailboxDetail> {
			return this.http.get<MailboxDetail>(this.baseUri + 'mailboxes/' + (mailboxName == null ? '' : encodeURIComponent(mailboxName)) + '?mailbox_name=' + (mailbox_name == null ? '' : encodeURIComponent(mailbox_name)), {});
		}

		/**
		 * Configure auto-forward for mailbox
		 * Put mailboxes/{mailboxName}/autoforward
		 * @param {string} mailbox_name Mailbox name.
		 * @param {string} mailboxName Automatically added
		 * @param {AutoForward} requestBody Contains the auto-forward information.
		 * @return {void} 
		 */
		ConfigureMailboxAutoForward(mailbox_name: string, mailboxName: string, requestBody: AutoForward): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mailboxes/' + (mailboxName == null ? '' : encodeURIComponent(mailboxName)) + '/autoforward?mailbox_name=' + (mailbox_name == null ? '' : encodeURIComponent(mailbox_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure auto-reply for mailbox
		 * Put mailboxes/{mailboxName}/autoreply
		 * @param {string} mailbox_name Mailbox name.
		 * @param {string} mailboxName Automatically added
		 * @param {AutoReply} requestBody Contains the auto-reply information.
		 * @return {void} 
		 */
		ConfigureMailboxAutoReply(mailbox_name: string, mailboxName: string, requestBody: AutoReply): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mailboxes/' + (mailboxName == null ? '' : encodeURIComponent(mailboxName)) + '/autoreply?mailbox_name=' + (mailbox_name == null ? '' : encodeURIComponent(mailbox_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change password for mailbox
		 * Put mailboxes/{mailboxName}/password
		 * @param {string} mailbox_name Mailbox name.
		 * @param {string} mailboxName Automatically added
		 * @param {UpdateMailboxPasswordRequest} requestBody Contains the new password.
		 * @return {void} 
		 */
		ChangeMailboxPassword(mailbox_name: string, mailboxName: string, requestBody: UpdateMailboxPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mailboxes/' + (mailboxName == null ? '' : encodeURIComponent(mailboxName)) + '/password?mailbox_name=' + (mailbox_name == null ? '' : encodeURIComponent(mailbox_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the mail zone.
		 * Get mailzones/{domainName}
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} domainName Automatically added
		 * @return {MailZone} Success
		 */
		GetMailZone(domain_name: string, domainName: string): Observable<MailZone> {
			return this.http.get<MailZone>(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Create a new alias
		 * Post mailzones/{domainName}/aliases
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} domainName Automatically added
		 * @param {CreateAliasRequest} requestBody Contains the alias information.
		 * @return {void} 
		 */
		CreateAlias(domain_name: string, domainName: string, requestBody: CreateAliasRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/aliases?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a alias
		 * Delete mailzones/{domainName}/aliases/{emailAddress}
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} email_address Alias e-mail address.
		 * @param {string} domainName Automatically added
		 * @param {string} emailAddress Automatically added
		 * @return {void} 
		 */
		DeleteAlias(domain_name: string, email_address: string, domainName: string, emailAddress: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/aliases/' + (emailAddress == null ? '' : encodeURIComponent(emailAddress)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure a alias
		 * Put mailzones/{domainName}/aliases/{emailAddress}
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} email_address Alias e-mail address.
		 * @param {string} domainName Automatically added
		 * @param {string} emailAddress Automatically added
		 * @param {UpdateAliasRequest} requestBody Contains the alias information.
		 * @return {void} 
		 */
		ConfigureAlias(domain_name: string, email_address: string, domainName: string, emailAddress: string, requestBody: UpdateAliasRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/aliases/' + (emailAddress == null ? '' : encodeURIComponent(emailAddress)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure anti-spam for mail zone
		 * Put mailzones/{domainName}/antispam
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} domainName Automatically added
		 * @param {UpdateAntiSpamRequest} requestBody Contains the anti-spam information.
		 * @return {void} 
		 */
		ConfigureAntiSpam(domain_name: string, domainName: string, requestBody: UpdateAntiSpamRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/antispam?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a catch-all on the mail zone
		 * Post mailzones/{domainName}/catchall
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} domainName Automatically added
		 * @param {CreateCatchAllRequest} requestBody Contains the catch-all information.
		 * @return {void} 
		 */
		CreateCatchAll(domain_name: string, domainName: string, requestBody: CreateCatchAllRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/catchall?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a catch-all on the mail zone
		 * Delete mailzones/{domainName}/catchall/{emailAddress}
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} email_address E-mail address to which all e-mails are sent to inexistent mailboxes or aliases.
		 * @param {string} domainName Automatically added
		 * @param {string} emailAddress Automatically added
		 * @return {void} 
		 */
		DeleteCatchAll(domain_name: string, email_address: string, domainName: string, emailAddress: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/catchall/' + (emailAddress == null ? '' : encodeURIComponent(emailAddress)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an extra smtp domain
		 * Post mailzones/{domainName}/smtpdomains
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} domainName Automatically added
		 * @param {CreateSmtpDomainRequest} requestBody Contains the smtp domain information.
		 * @return {void} 
		 */
		CreateSmtpDomain(domain_name: string, domainName: string, requestBody: CreateSmtpDomainRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/smtpdomains?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an extra smtp domain
		 * Delete mailzones/{domainName}/smtpdomains/{hostname}
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} hostname Smtp domain name.
		 * @param {string} domainName Automatically added
		 * @return {void} 
		 */
		DeleteSmtpDomain(domain_name: string, hostname: string, domainName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/smtpdomains/' + (hostname == null ? '' : encodeURIComponent(hostname)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure an extra smtp domain
		 * Put mailzones/{domainName}/smtpdomains/{hostname}
		 * @param {string} domain_name Mail zone domain name.
		 * @param {string} hostname Smtp domain name.
		 * @param {string} domainName Automatically added
		 * @param {UpdateSmtpDomainRequest} requestBody Contains the smtp domain information.
		 * @return {void} 
		 */
		ConfigureSmtpDomain(domain_name: string, hostname: string, domainName: string, requestBody: UpdateSmtpDomainRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mailzones/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/smtpdomains/' + (hostname == null ? '' : encodeURIComponent(hostname)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Overview of mysql databases
		 * Get mysqldatabases
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @return {Array<MySqlDatabase>} Success
		 */
		GetMySqlDatabases(skip: number | null | undefined, take: number | null | undefined): Observable<Array<MySqlDatabase>> {
			return this.http.get<Array<MySqlDatabase>>(this.baseUri + 'mysqldatabases?skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Create a new mysql database
		 * Post mysqldatabases
		 * @return {void} 
		 */
		CreateMySqlDatabase(requestBody: CreateMySqlDatabase): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mysqldatabases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a mysql database
		 * Delete mysqldatabases/{databaseName}
		 * @param {string} database_name Name of the database.
		 * @param {string} databaseName Automatically added
		 * @return {void} 
		 */
		DeleteDatabase(database_name: string, databaseName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mysqldatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '?database_name=' + (database_name == null ? '' : encodeURIComponent(database_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific database
		 * Get mysqldatabases/{databaseName}
		 * @param {string} databaseName Automatically added
		 * @return {MySqlDatabase} Success
		 */
		GetMySqlDatabase(database_name: string, databaseName: string): Observable<MySqlDatabase> {
			return this.http.get<MySqlDatabase>(this.baseUri + 'mysqldatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '?database_name=' + (database_name == null ? '' : encodeURIComponent(database_name)), {});
		}

		/**
		 * Overview of mysql users
		 * Get mysqldatabases/{databaseName}/users
		 * @param {string} database_name Name of the database.
		 * @param {string} databaseName Automatically added
		 * @return {Array<MySqlUser>} Success
		 */
		GetDatabaseUsers(database_name: string, databaseName: string): Observable<Array<MySqlUser>> {
			return this.http.get<Array<MySqlUser>>(this.baseUri + 'mysqldatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/users?database_name=' + (database_name == null ? '' : encodeURIComponent(database_name)), {});
		}

		/**
		 * Create a new mysql user
		 * The creation of a new mysql user will result in a user with read_only rights.
		 * Post mysqldatabases/{databaseName}/users
		 * @param {string} database_name Name of the database.
		 * @param {string} databaseName Automatically added
		 * @return {void} 
		 */
		CreateMySqlUser(database_name: string, databaseName: string, requestBody: CreateMySqlUser): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mysqldatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/users?database_name=' + (database_name == null ? '' : encodeURIComponent(database_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a mysql user
		 * The deletion of a mysql user is allowed for users with read_only rights.
		 * Delete mysqldatabases/{databaseName}/users/{userName}
		 * @param {string} database_name Name of the database.
		 * @param {string} user_name Name of the user.
		 * @param {string} databaseName Automatically added
		 * @param {string} userName Automatically added
		 * @return {void} 
		 */
		DeleteDatabaseUser(database_name: string, user_name: string, databaseName: string, userName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mysqldatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '?database_name=' + (database_name == null ? '' : encodeURIComponent(database_name)) + '&user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change password for mysql user
		 * Put mysqldatabases/{databaseName}/users/{userName}/password
		 * @param {string} database_name Name of the database.
		 * @param {string} user_name Name of the user.
		 * @param {string} databaseName Automatically added
		 * @param {string} userName Automatically added
		 * @param {UpdateUserPasswordRequest} requestBody Contains the new password.
		 * @return {void} 
		 */
		ChangeDatabaseUserPassword(database_name: string, user_name: string, databaseName: string, userName: string, requestBody: UpdateUserPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mysqldatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/password?database_name=' + (database_name == null ? '' : encodeURIComponent(database_name)) + '&user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable/disable mysql user
		 * Put mysqldatabases/{databaseName}/users/{userName}/status
		 * @param {string} database_name Name of the database.
		 * @param {string} user_name Name of the user.
		 * @param {string} databaseName Automatically added
		 * @param {string} userName Automatically added
		 * @param {UpdateUserStatusRequest} requestBody Whether the user is enabled or not.
		 * @return {void} 
		 */
		ChangeDatabaseUserStatus(database_name: string, user_name: string, databaseName: string, userName: string, requestBody: UpdateUserStatusRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mysqldatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/status?database_name=' + (database_name == null ? '' : encodeURIComponent(database_name)) + '&user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Detail of a provisioning job
		 * Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
		 * Do NOT retry provisioning until the job reports finished or cancelled.
		 * Get provisioningjobs/{jobId}
		 * @param {string} jobId Automatically added
		 * @return {ProvisioningJobInfo} Success
		 */
		Provisioning_jobsGetByJob_idAndJobId(job_id: string, jobId: string): Observable<ProvisioningJobInfo> {
			return this.http.get<ProvisioningJobInfo>(this.baseUri + 'provisioningjobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '?job_id=' + (job_id == null ? '' : encodeURIComponent(job_id)), {});
		}

		/**
		 * Overview of service packs
		 * Get servicepacks
		 * @return {Array<Servicepack>} Success
		 */
		Servicepacks(): Observable<Array<Servicepack>> {
			return this.http.get<Array<Servicepack>>(this.baseUri + 'servicepacks', {});
		}

		/**
		 * Overview of SSH keys
		 * Get ssh
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @return {Array<SshKeyDetail>} Success
		 */
		GetAllSshKeys(skip: number | null | undefined, take: number | null | undefined): Observable<Array<SshKeyDetail>> {
			return this.http.get<Array<SshKeyDetail>>(this.baseUri + 'ssh?skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Overview of SSL certificate requests
		 * Get sslcertificaterequests
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @return {Array<SslCertificateRequest>} Success
		 */
		GetSslCertificateRequests(skip: number | null | undefined, take: number | null | undefined): Observable<Array<SslCertificateRequest>> {
			return this.http.get<Array<SslCertificateRequest>>(this.baseUri + 'sslcertificaterequests?skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Add a SSL certificate request
		 * Executing this method causes the purchase of a paying product.<br />
		 * Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
		 * Please note that promotional pricing does not apply for purchases made through our API.
		 * Post sslcertificaterequests
		 * @return {void} 
		 */
		AddSslCertificateRequest(requestBody: CreateSslCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sslcertificaterequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Detail of a SSL certificate request
		 * Get sslcertificaterequests/{id}
		 * @param {number} id The id of the certificate request.
		 * @return {SslCertificateRequestDetail} Success
		 */
		GetSslCertificateRequest(id: number): Observable<SslCertificateRequestDetail> {
			return this.http.get<SslCertificateRequestDetail>(this.baseUri + 'sslcertificaterequests/' + id, {});
		}

		/**
		 * Verify the SSL certificate request domain validations
		 * Put sslcertificaterequests/{id}
		 * @param {number} id The id of the certificate request.
		 * @return {void} 
		 */
		VerifySslCertificateRequestDomainValidations(id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sslcertificaterequests/' + id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Overview of SSL certificates
		 * Get sslcertificates
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @return {Array<SslCertificate>} Success
		 */
		GetSslCertificates(skip: number | null | undefined, take: number | null | undefined): Observable<Array<SslCertificate>> {
			return this.http.get<Array<SslCertificate>>(this.baseUri + 'sslcertificates?skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Detail of a SSL certificate
		 * Get sslcertificates/{sha1Fingerprint}
		 * @param {string} sha1_fingerprint The SHA-1 fingerprint of the certificate.
		 * @param {string} sha1Fingerprint Automatically added
		 * @return {SslCertificateDetail} Success
		 */
		GetSslCertificate(sha1_fingerprint: string, sha1Fingerprint: string): Observable<SslCertificateDetail> {
			return this.http.get<SslCertificateDetail>(this.baseUri + 'sslcertificates/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)) + '?sha1_fingerprint=' + (sha1_fingerprint == null ? '' : encodeURIComponent(sha1_fingerprint)), {});
		}

		/**
		 * Download a SSL certificate
		 * Returns the certifcate as binary data with the content-type and the filename information in the response headers.
		 * Get sslcertificates/{sha1Fingerprint}/download
		 * @param {string} sha1_fingerprint The SHA-1 fingerprint of the certificate.
		 * @param {SslCertificateFileFormat} file_format The file format of the returned file stream:
		 * <ul><li>PFX: Also known as PKCS #12, is a single, password protected certificate archive that contains the entire certificate chain plus the matching private key.</li></ul>
		 * @param {string} password The password used to protect the certificate file.<br />
		 * @param {string} sha1Fingerprint Automatically added
		 * @return {string} Success
		 */
		DownloadCertificate(sha1_fingerprint: string, file_format: SslCertificateFileFormat, password: string, sha1Fingerprint: string): Observable<string> {
			return this.http.get(this.baseUri + 'sslcertificates/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)) + '/download?sha1_fingerprint=' + (sha1_fingerprint == null ? '' : encodeURIComponent(sha1_fingerprint)) + '&file_format=' + file_format + '&password=' + (password == null ? '' : encodeURIComponent(password)), { responseType: 'text' });
		}

		/**
		 * Overview of windows hostings
		 * Get windowshostings
		 * @param {number} skip The number of items to skip in the resultset.
		 * @param {number} take The number of items to return in the resultset. The returned count can be equal or less than this number.
		 * @return {Array<WindowsHosting>} Success
		 */
		GetWindowsHostings(skip: number | null | undefined, take: number | null | undefined): Observable<Array<WindowsHosting>> {
			return this.http.get<Array<WindowsHosting>>(this.baseUri + 'windowshostings?skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Windows hosting detail
		 * Get windowshostings/{domainName}
		 * @param {string} domain_name The Windows hosting domain name.
		 * @param {string} domainName Automatically added
		 * @return {WindowsHostingDetail} Success
		 */
		GetWindowsHosting(domain_name: string, domainName: string): Observable<WindowsHostingDetail> {
			return this.http.get<WindowsHostingDetail>(this.baseUri + 'windowshostings/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '?domain_name=' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}
	}

}

