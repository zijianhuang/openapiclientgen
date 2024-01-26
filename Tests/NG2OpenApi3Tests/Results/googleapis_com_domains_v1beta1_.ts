import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Defines an authorization code. */
	export interface AuthorizationCode {

		/** The Authorization Code in ASCII. It can be used to transfer the domain to or from another registrar. */
		code?: string | null;
	}

	/** Defines an authorization code. */
	export interface AuthorizationCodeFormProperties {

		/** The Authorization Code in ASCII. It can be used to transfer the domain to or from another registrar. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationCodeFormGroup() {
		return new FormGroup<AuthorizationCodeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** Request for the `ConfigureContactSettings` method. */
	export interface ConfigureContactSettingsRequest {

		/** The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `contact_settings`. */
		contactNotices?: Array<string>;

		/** Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical. */
		contactSettings?: ContactSettings;

		/** Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the `update_mask` is `"registrant_contact"`. */
		updateMask?: string | null;

		/** Validate the request without actually updating the contact settings. */
		validateOnly?: boolean | null;
	}

	/** Request for the `ConfigureContactSettings` method. */
	export interface ConfigureContactSettingsRequestFormProperties {

		/** Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the `update_mask` is `"registrant_contact"`. */
		updateMask: FormControl<string | null | undefined>,

		/** Validate the request without actually updating the contact settings. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigureContactSettingsRequestFormGroup() {
		return new FormGroup<ConfigureContactSettingsRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical. */
	export interface ContactSettings {

		/** Details required for a contact associated with a `Registration`. */
		adminContact?: Contact;

		/** Required. Privacy setting for the contacts associated with the `Registration`. */
		privacy?: ContactSettingsPrivacy | null;

		/** Details required for a contact associated with a `Registration`. */
		registrantContact?: Contact;

		/** Details required for a contact associated with a `Registration`. */
		technicalContact?: Contact;
	}

	/** Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical. */
	export interface ContactSettingsFormProperties {

		/** Required. Privacy setting for the contacts associated with the `Registration`. */
		privacy: FormControl<ContactSettingsPrivacy | null | undefined>,
	}
	export function CreateContactSettingsFormGroup() {
		return new FormGroup<ContactSettingsFormProperties>({
			privacy: new FormControl<ContactSettingsPrivacy | null | undefined>(undefined),
		});

	}


	/** Details required for a contact associated with a `Registration`. */
	export interface Contact {

		/** Required. Email address of the contact. */
		email?: string | null;

		/** Fax number of the contact in international format. For example, `"+1-800-555-0123"`. */
		faxNumber?: string | null;

		/** Required. Phone number of the contact in international format. For example, `"+1-800-555-0123"`. */
		phoneNumber?: string | null;

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		postalAddress?: PostalAddress;
	}

	/** Details required for a contact associated with a `Registration`. */
	export interface ContactFormProperties {

		/** Required. Email address of the contact. */
		email: FormControl<string | null | undefined>,

		/** Fax number of the contact in international format. For example, `"+1-800-555-0123"`. */
		faxNumber: FormControl<string | null | undefined>,

		/** Required. Phone number of the contact in international format. For example, `"+1-800-555-0123"`. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			faxNumber: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddress {

		/** Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). */
		addressLines?: Array<string>;

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea?: string | null;

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode?: string | null;

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality?: string | null;

		/** Optional. The name of the organization at the address. */
		organization?: string | null;

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode?: string | null;

		/** Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. */
		recipients?: Array<string>;

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision?: number | null;

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode?: string | null;

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality?: string | null;
	}

	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddressFormProperties {

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality: FormControl<string | null | undefined>,

		/** Optional. The name of the organization at the address. */
		organization: FormControl<string | null | undefined>,

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode: FormControl<string | null | undefined>,

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode: FormControl<string | null | undefined>,

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision: FormControl<number | null | undefined>,

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode: FormControl<string | null | undefined>,

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sortingCode: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactSettingsPrivacy { CONTACT_PRIVACY_UNSPECIFIED = 0, PUBLIC_CONTACT_DATA = 1, PRIVATE_CONTACT_DATA = 2, REDACTED_CONTACT_DATA = 3 }


	/** Request for the `ConfigureDnsSettings` method. */
	export interface ConfigureDnsSettingsRequest {

		/** Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records. */
		dnsSettings?: DnsSettings;

		/** Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the `update_mask` is `"custom_dns.name_servers"`. When changing the DNS provider from one type to another, pass the new provider's field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the `update_mask` is `"custom_dns"`. // */
		updateMask?: string | null;

		/** Validate the request without actually updating the DNS settings. */
		validateOnly?: boolean | null;
	}

	/** Request for the `ConfigureDnsSettings` method. */
	export interface ConfigureDnsSettingsRequestFormProperties {

		/** Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the `update_mask` is `"custom_dns.name_servers"`. When changing the DNS provider from one type to another, pass the new provider's field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the `update_mask` is `"custom_dns"`. // */
		updateMask: FormControl<string | null | undefined>,

		/** Validate the request without actually updating the DNS settings. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigureDnsSettingsRequestFormGroup() {
		return new FormGroup<ConfigureDnsSettingsRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records. */
	export interface DnsSettings {

		/** Configuration for an arbitrary DNS provider. */
		customDns?: CustomDns;

		/** The list of glue records for this `Registration`. Commonly empty. */
		glueRecords?: Array<GlueRecord>;

		/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/). */
		googleDomainsDns?: GoogleDomainsDns;
	}

	/** Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records. */
	export interface DnsSettingsFormProperties {
	}
	export function CreateDnsSettingsFormGroup() {
		return new FormGroup<DnsSettingsFormProperties>({
		});

	}


	/** Configuration for an arbitrary DNS provider. */
	export interface CustomDns {

		/** The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide the values to set here. If this field is empty, DNSSEC is disabled. */
		dsRecords?: Array<DsRecord>;

		/** Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format. */
		nameServers?: Array<string>;
	}

	/** Configuration for an arbitrary DNS provider. */
	export interface CustomDnsFormProperties {
	}
	export function CreateCustomDnsFormGroup() {
		return new FormGroup<CustomDnsFormProperties>({
		});

	}


	/** Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone. */
	export interface DsRecord {

		/** The algorithm used to generate the referenced DNSKEY. */
		algorithm?: DsRecordAlgorithm | null;

		/** The digest generated from the referenced DNSKEY. */
		digest?: string | null;

		/** The hash function used to generate the digest of the referenced DNSKEY. */
		digestType?: DsRecordDigestType | null;

		/** The key tag of the record. Must be set in range 0 -- 65535. */
		keyTag?: number | null;
	}

	/** Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone. */
	export interface DsRecordFormProperties {

		/** The algorithm used to generate the referenced DNSKEY. */
		algorithm: FormControl<DsRecordAlgorithm | null | undefined>,

		/** The digest generated from the referenced DNSKEY. */
		digest: FormControl<string | null | undefined>,

		/** The hash function used to generate the digest of the referenced DNSKEY. */
		digestType: FormControl<DsRecordDigestType | null | undefined>,

		/** The key tag of the record. Must be set in range 0 -- 65535. */
		keyTag: FormControl<number | null | undefined>,
	}
	export function CreateDsRecordFormGroup() {
		return new FormGroup<DsRecordFormProperties>({
			algorithm: new FormControl<DsRecordAlgorithm | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			digestType: new FormControl<DsRecordDigestType | null | undefined>(undefined),
			keyTag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DsRecordAlgorithm { ALGORITHM_UNSPECIFIED = 0, RSAMD5 = 1, DH = 2, DSA = 3, ECC = 4, RSASHA1 = 5, DSANSEC3SHA1 = 6, RSASHA1NSEC3SHA1 = 7, RSASHA256 = 8, RSASHA512 = 9, ECCGOST = 10, ECDSAP256SHA256 = 11, ECDSAP384SHA384 = 12, ED25519 = 13, ED448 = 14, INDIRECT = 15, PRIVATEDNS = 16, PRIVATEOID = 17 }

	export enum DsRecordDigestType { DIGEST_TYPE_UNSPECIFIED = 0, SHA1 = 1, SHA256 = 2, GOST3411 = 3, SHA384 = 4 }


	/** Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference. */
	export interface GlueRecord {

		/** Required. Domain name of the host in Punycode format. */
		hostName?: string | null;

		/** List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. `198.51.100.1`). At least one of `ipv4_address` and `ipv6_address` must be set. */
		ipv4Addresses?: Array<string>;

		/** List of IPv6 addresses corresponding to this host in the standard hexadecimal format (e.g. `2001:db8::`). At least one of `ipv4_address` and `ipv6_address` must be set. */
		ipv6Addresses?: Array<string>;
	}

	/** Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference. */
	export interface GlueRecordFormProperties {

		/** Required. Domain name of the host in Punycode format. */
		hostName: FormControl<string | null | undefined>,
	}
	export function CreateGlueRecordFormGroup() {
		return new FormGroup<GlueRecordFormProperties>({
			hostName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/). */
	export interface GoogleDomainsDns {

		/** Output only. The list of DS records published for this domain. The list is automatically populated when `ds_state` is `DS_RECORDS_PUBLISHED`, otherwise it remains empty. */
		dsRecords?: Array<DsRecord>;

		/** Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC. */
		dsState?: GoogleDomainsDnsDsState | null;

		/** Output only. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format. This field is automatically populated with the name servers assigned to the Google Domains DNS zone. */
		nameServers?: Array<string>;
	}

	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/). */
	export interface GoogleDomainsDnsFormProperties {

		/** Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC. */
		dsState: FormControl<GoogleDomainsDnsDsState | null | undefined>,
	}
	export function CreateGoogleDomainsDnsFormGroup() {
		return new FormGroup<GoogleDomainsDnsFormProperties>({
			dsState: new FormControl<GoogleDomainsDnsDsState | null | undefined>(undefined),
		});

	}

	export enum GoogleDomainsDnsDsState { DS_STATE_UNSPECIFIED = 0, DS_RECORDS_UNPUBLISHED = 1, DS_RECORDS_PUBLISHED = 2 }


	/** Request for the `ConfigureManagementSettings` method. */
	export interface ConfigureManagementSettingsRequest {

		/** Defines renewal, billing, and transfer settings for a `Registration`. */
		managementSettings?: ManagementSettings;

		/** Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`. */
		updateMask?: string | null;
	}

	/** Request for the `ConfigureManagementSettings` method. */
	export interface ConfigureManagementSettingsRequestFormProperties {

		/** Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateConfigureManagementSettingsRequestFormGroup() {
		return new FormGroup<ConfigureManagementSettingsRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines renewal, billing, and transfer settings for a `Registration`. */
	export interface ManagementSettings {

		/** Optional. The desired renewal method for this `Registration`. The actual `renewal_method` is automatically updated to reflect this choice. If unset or equal to `RENEWAL_METHOD_UNSPECIFIED`, it will be treated as if it were set to `AUTOMATIC_RENEWAL`. Can't be set to `RENEWAL_DISABLED` during resource creation and can only be updated when the `Registration` resource has state `ACTIVE` or `SUSPENDED`. When `preferred_renewal_method` is set to `AUTOMATIC_RENEWAL` the actual `renewal_method` can be set to `RENEWAL_DISABLED` in case of e.g. problems with the Billing Account or reported domain abuse. In such cases check the `issues` field on the `Registration`. After the problem is resolved the `renewal_method` will be automatically updated to `preferred_renewal_method` in a few hours. */
		preferredRenewalMethod?: ManagementSettingsPreferredRenewalMethod | null;

		/** Output only. The actual renewal method for this `Registration`. When `preferred_renewal_method` is set to `AUTOMATIC_RENEWAL` the actual `renewal_method` can be equal to `RENEWAL_DISABLED` in case of e.g. problems with the Billing Account or reported domain abuse. In such cases check the `issues` field on the `Registration`. After the problem is resolved the `renewal_method` will be automatically updated to `preferred_renewal_method` in a few hours. */
		renewalMethod?: ManagementSettingsPreferredRenewalMethod | null;

		/** Controls whether the domain can be transferred to another registrar. */
		transferLockState?: ManagementSettingsTransferLockState | null;
	}

	/** Defines renewal, billing, and transfer settings for a `Registration`. */
	export interface ManagementSettingsFormProperties {

		/** Optional. The desired renewal method for this `Registration`. The actual `renewal_method` is automatically updated to reflect this choice. If unset or equal to `RENEWAL_METHOD_UNSPECIFIED`, it will be treated as if it were set to `AUTOMATIC_RENEWAL`. Can't be set to `RENEWAL_DISABLED` during resource creation and can only be updated when the `Registration` resource has state `ACTIVE` or `SUSPENDED`. When `preferred_renewal_method` is set to `AUTOMATIC_RENEWAL` the actual `renewal_method` can be set to `RENEWAL_DISABLED` in case of e.g. problems with the Billing Account or reported domain abuse. In such cases check the `issues` field on the `Registration`. After the problem is resolved the `renewal_method` will be automatically updated to `preferred_renewal_method` in a few hours. */
		preferredRenewalMethod: FormControl<ManagementSettingsPreferredRenewalMethod | null | undefined>,

		/** Output only. The actual renewal method for this `Registration`. When `preferred_renewal_method` is set to `AUTOMATIC_RENEWAL` the actual `renewal_method` can be equal to `RENEWAL_DISABLED` in case of e.g. problems with the Billing Account or reported domain abuse. In such cases check the `issues` field on the `Registration`. After the problem is resolved the `renewal_method` will be automatically updated to `preferred_renewal_method` in a few hours. */
		renewalMethod: FormControl<ManagementSettingsPreferredRenewalMethod | null | undefined>,

		/** Controls whether the domain can be transferred to another registrar. */
		transferLockState: FormControl<ManagementSettingsTransferLockState | null | undefined>,
	}
	export function CreateManagementSettingsFormGroup() {
		return new FormGroup<ManagementSettingsFormProperties>({
			preferredRenewalMethod: new FormControl<ManagementSettingsPreferredRenewalMethod | null | undefined>(undefined),
			renewalMethod: new FormControl<ManagementSettingsPreferredRenewalMethod | null | undefined>(undefined),
			transferLockState: new FormControl<ManagementSettingsTransferLockState | null | undefined>(undefined),
		});

	}

	export enum ManagementSettingsPreferredRenewalMethod { RENEWAL_METHOD_UNSPECIFIED = 0, AUTOMATIC_RENEWAL = 1, MANUAL_RENEWAL = 2, RENEWAL_DISABLED = 3 }

	export enum ManagementSettingsTransferLockState { TRANSFER_LOCK_STATE_UNSPECIFIED = 0, UNLOCKED = 1, LOCKED = 2 }


	/** A domain that the calling user manages in Google Domains. */
	export interface Domain {

		/** The domain name. Unicode domain names are expressed in Punycode format. */
		domainName?: string | null;

		/** The state of this domain as a `Registration` resource. */
		resourceState?: DomainResourceState | null;

		/** Represents an amount of money with its currency type. */
		yearlyPrice?: Money;
	}

	/** A domain that the calling user manages in Google Domains. */
	export interface DomainFormProperties {

		/** The domain name. Unicode domain names are expressed in Punycode format. */
		domainName: FormControl<string | null | undefined>,

		/** The state of this domain as a `Registration` resource. */
		resourceState: FormControl<DomainResourceState | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			resourceState: new FormControl<DomainResourceState | null | undefined>(undefined),
		});

	}

	export enum DomainResourceState { RESOURCE_STATE_UNSPECIFIED = 0, IMPORTABLE = 1, UNSUPPORTED = 2, SUSPENDED = 3, EXPIRED = 4, DELETED = 5 }


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Request for the `ExportRegistration` method. */
	export interface ExportRegistrationRequest {
	}

	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Request for the `ExportRegistration` method. */
	export interface ExportRegistrationRequestFormProperties {
	}
	export function CreateExportRegistrationRequestFormGroup() {
		return new FormGroup<ExportRegistrationRequestFormProperties>({
		});

	}


	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Request for the `ImportDomain` method. */
	export interface ImportDomainRequest {

		/** Required. The domain name. Unicode domain names must be expressed in Punycode format. */
		domainName?: string | null;

		/** Set of labels associated with the `Registration`. */
		labels?: {[id: string]: string };
	}

	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Request for the `ImportDomain` method. */
	export interface ImportDomainRequestFormProperties {

		/** Required. The domain name. Unicode domain names must be expressed in Punycode format. */
		domainName: FormControl<string | null | undefined>,

		/** Set of labels associated with the `Registration`. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateImportDomainRequestFormGroup() {
		return new FormGroup<ImportDomainRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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


	/** Response for the `ListRegistrations` method. */
	export interface ListRegistrationsResponse {

		/** When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results. */
		nextPageToken?: string | null;

		/** A list of `Registration`s. */
		registrations?: Array<Registration>;
	}

	/** Response for the `ListRegistrations` method. */
	export interface ListRegistrationsResponseFormProperties {

		/** When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegistrationsResponseFormGroup() {
		return new FormGroup<ListRegistrationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/) (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains. */
	export interface Registration {

		/** Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical. */
		contactSettings?: ContactSettings;

		/** Output only. The creation timestamp of the `Registration` resource. */
		createTime?: string | null;

		/** Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records. */
		dnsSettings?: DnsSettings;

		/** Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format. */
		domainName?: string | null;

		/** Output only. The expiration timestamp of the `Registration`. */
		expireTime?: string | null;

		/** Output only. The set of issues with the `Registration` that require attention. */
		issues?: Array<string>;

		/** Set of labels associated with the `Registration`. */
		labels?: {[id: string]: string };

		/** Defines renewal, billing, and transfer settings for a `Registration`. */
		managementSettings?: ManagementSettings;

		/** Output only. Name of the `Registration` resource, in the format `projects/locations/registrations/`. */
		name?: string | null;

		/** Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical. */
		pendingContactSettings?: ContactSettings;

		/** Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state. */
		registerFailureReason?: RegistrationRegisterFailureReason | null;

		/** Output only. The state of the `Registration` */
		state?: RegistrationState | null;

		/** Output only. Set of options for the `contact_settings.privacy` field that this `Registration` supports. */
		supportedPrivacy?: Array<ContactSettingsPrivacy>;

		/** Output only. Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state. */
		transferFailureReason?: RegistrationTransferFailureReason | null;
	}

	/** The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/) (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains. */
	export interface RegistrationFormProperties {

		/** Output only. The creation timestamp of the `Registration` resource. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format. */
		domainName: FormControl<string | null | undefined>,

		/** Output only. The expiration timestamp of the `Registration`. */
		expireTime: FormControl<string | null | undefined>,

		/** Set of labels associated with the `Registration`. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Name of the `Registration` resource, in the format `projects/locations/registrations/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state. */
		registerFailureReason: FormControl<RegistrationRegisterFailureReason | null | undefined>,

		/** Output only. The state of the `Registration` */
		state: FormControl<RegistrationState | null | undefined>,

		/** Output only. Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state. */
		transferFailureReason: FormControl<RegistrationTransferFailureReason | null | undefined>,
	}
	export function CreateRegistrationFormGroup() {
		return new FormGroup<RegistrationFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			registerFailureReason: new FormControl<RegistrationRegisterFailureReason | null | undefined>(undefined),
			state: new FormControl<RegistrationState | null | undefined>(undefined),
			transferFailureReason: new FormControl<RegistrationTransferFailureReason | null | undefined>(undefined),
		});

	}

	export enum RegistrationRegisterFailureReason { REGISTER_FAILURE_REASON_UNSPECIFIED = 0, REGISTER_FAILURE_REASON_UNKNOWN = 1, DOMAIN_NOT_AVAILABLE = 2, INVALID_CONTACTS = 3 }

	export enum RegistrationState { STATE_UNSPECIFIED = 0, REGISTRATION_PENDING = 1, REGISTRATION_FAILED = 2, TRANSFER_PENDING = 3, TRANSFER_FAILED = 4, IMPORT_PENDING = 5, ACTIVE = 6, SUSPENDED = 7, EXPORTED = 8, EXPIRED = 9 }

	export enum RegistrationTransferFailureReason { TRANSFER_FAILURE_REASON_UNSPECIFIED = 0, TRANSFER_FAILURE_REASON_UNKNOWN = 1, EMAIL_CONFIRMATION_FAILURE = 2, DOMAIN_NOT_REGISTERED = 3, DOMAIN_HAS_TRANSFER_LOCK = 4, INVALID_AUTHORIZATION_CODE = 5, TRANSFER_CANCELLED = 6, TRANSFER_REJECTED = 7, INVALID_REGISTRANT_EMAIL_ADDRESS = 8, DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER = 9, TRANSFER_ALREADY_PENDING = 10 }


	/** Represents the metadata of the long-running operation. Output only. */
	export interface OperationMetadata {

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Human-readable status of the operation, if any. */
		statusDetail?: string | null;

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

		/** Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

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
			statusDetail: new FormControl<string | null | undefined>(undefined),
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

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for the `RegisterDomain` method. */
	export interface RegisterDomainRequest {

		/** The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `registration.contact_settings`. */
		contactNotices?: Array<string>;

		/** The list of domain notices that you acknowledge. Call `RetrieveRegisterParameters` to see the notices that need acknowledgement. */
		domainNotices?: Array<string>;

		/** The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/) (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains. */
		registration?: Registration;

		/** When true, only validation is performed, without actually registering the domain. Follows: https://cloud.google.com/apis/design/design_patterns#request_validation */
		validateOnly?: boolean | null;

		/** Represents an amount of money with its currency type. */
		yearlyPrice?: Money;
	}

	/** Request for the `RegisterDomain` method. */
	export interface RegisterDomainRequestFormProperties {

		/** When true, only validation is performed, without actually registering the domain. Follows: https://cloud.google.com/apis/design/design_patterns#request_validation */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateRegisterDomainRequestFormGroup() {
		return new FormGroup<RegisterDomainRequestFormProperties>({
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Parameters required to register a new domain. */
	export interface RegisterParameters {

		/** Indicates whether the domain is available for registration. This value is accurate when obtained by calling `RetrieveRegisterParameters`, but is approximate when obtained by calling `SearchDomains`. */
		availability?: RegisterParametersAvailability | null;

		/** The domain name. Unicode domain names are expressed in Punycode format. */
		domainName?: string | null;

		/** Notices about special properties of the domain. */
		domainNotices?: Array<string>;

		/** Contact privacy options that the domain supports. */
		supportedPrivacy?: Array<ContactSettingsPrivacy>;

		/** Represents an amount of money with its currency type. */
		yearlyPrice?: Money;
	}

	/** Parameters required to register a new domain. */
	export interface RegisterParametersFormProperties {

		/** Indicates whether the domain is available for registration. This value is accurate when obtained by calling `RetrieveRegisterParameters`, but is approximate when obtained by calling `SearchDomains`. */
		availability: FormControl<RegisterParametersAvailability | null | undefined>,

		/** The domain name. Unicode domain names are expressed in Punycode format. */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterParametersFormGroup() {
		return new FormGroup<RegisterParametersFormProperties>({
			availability: new FormControl<RegisterParametersAvailability | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegisterParametersAvailability { AVAILABILITY_UNSPECIFIED = 0, AVAILABLE = 1, UNAVAILABLE = 2, UNSUPPORTED = 3, UNKNOWN = 4 }


	/** Request for the `ResetAuthorizationCode` method. */
	export interface ResetAuthorizationCodeRequest {
	}

	/** Request for the `ResetAuthorizationCode` method. */
	export interface ResetAuthorizationCodeRequestFormProperties {
	}
	export function CreateResetAuthorizationCodeRequestFormGroup() {
		return new FormGroup<ResetAuthorizationCodeRequestFormProperties>({
		});

	}


	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Response for the `RetrieveImportableDomains` method. */
	export interface RetrieveImportableDomainsResponse {

		/** A list of domains that the calling user manages in Google Domains. */
		domains?: Array<Domain>;

		/** When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results. */
		nextPageToken?: string | null;
	}

	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Response for the `RetrieveImportableDomains` method. */
	export interface RetrieveImportableDomainsResponseFormProperties {

		/** When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveImportableDomainsResponseFormGroup() {
		return new FormGroup<RetrieveImportableDomainsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `RetrieveRegisterParameters` method. */
	export interface RetrieveRegisterParametersResponse {

		/** Parameters required to register a new domain. */
		registerParameters?: RegisterParameters;
	}

	/** Response for the `RetrieveRegisterParameters` method. */
	export interface RetrieveRegisterParametersResponseFormProperties {
	}
	export function CreateRetrieveRegisterParametersResponseFormGroup() {
		return new FormGroup<RetrieveRegisterParametersResponseFormProperties>({
		});

	}


	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Response for the `RetrieveTransferParameters` method. */
	export interface RetrieveTransferParametersResponse {

		/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Parameters required to transfer a domain from another registrar. */
		transferParameters?: TransferParameters;
	}

	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Response for the `RetrieveTransferParameters` method. */
	export interface RetrieveTransferParametersResponseFormProperties {
	}
	export function CreateRetrieveTransferParametersResponseFormGroup() {
		return new FormGroup<RetrieveTransferParametersResponseFormProperties>({
		});

	}


	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Parameters required to transfer a domain from another registrar. */
	export interface TransferParameters {

		/** The registrar that currently manages the domain. */
		currentRegistrar?: string | null;

		/** The URL of the registrar that currently manages the domain. */
		currentRegistrarUri?: string | null;

		/** The domain name. Unicode domain names are expressed in Punycode format. */
		domainName?: string | null;

		/** The name servers that currently store the configuration of the domain. */
		nameServers?: Array<string>;

		/** Contact privacy options that the domain supports. */
		supportedPrivacy?: Array<ContactSettingsPrivacy>;

		/** Indicates whether the domain is protected by a transfer lock. For a transfer to succeed, this must show `UNLOCKED`. To unlock a domain, go to its current registrar. */
		transferLockState?: ManagementSettingsTransferLockState | null;

		/** Represents an amount of money with its currency type. */
		yearlyPrice?: Money;
	}

	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Parameters required to transfer a domain from another registrar. */
	export interface TransferParametersFormProperties {

		/** The registrar that currently manages the domain. */
		currentRegistrar: FormControl<string | null | undefined>,

		/** The URL of the registrar that currently manages the domain. */
		currentRegistrarUri: FormControl<string | null | undefined>,

		/** The domain name. Unicode domain names are expressed in Punycode format. */
		domainName: FormControl<string | null | undefined>,

		/** Indicates whether the domain is protected by a transfer lock. For a transfer to succeed, this must show `UNLOCKED`. To unlock a domain, go to its current registrar. */
		transferLockState: FormControl<ManagementSettingsTransferLockState | null | undefined>,
	}
	export function CreateTransferParametersFormGroup() {
		return new FormGroup<TransferParametersFormProperties>({
			currentRegistrar: new FormControl<string | null | undefined>(undefined),
			currentRegistrarUri: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			transferLockState: new FormControl<ManagementSettingsTransferLockState | null | undefined>(undefined),
		});

	}


	/** Response for the `SearchDomains` method. */
	export interface SearchDomainsResponse {

		/** Results of the domain name search. */
		registerParameters?: Array<RegisterParameters>;
	}

	/** Response for the `SearchDomains` method. */
	export interface SearchDomainsResponseFormProperties {
	}
	export function CreateSearchDomainsResponseFormGroup() {
		return new FormGroup<SearchDomainsResponseFormProperties>({
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


	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Request for the `TransferDomain` method. */
	export interface TransferDomainRequest {

		/** Defines an authorization code. */
		authorizationCode?: AuthorizationCode;

		/** The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`. */
		contactNotices?: Array<string>;

		/** The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/) (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains. */
		registration?: Registration;

		/** Validate the request without actually transferring the domain. */
		validateOnly?: boolean | null;

		/** Represents an amount of money with its currency type. */
		yearlyPrice?: Money;
	}

	/** Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Request for the `TransferDomain` method. */
	export interface TransferDomainRequestFormProperties {

		/** Validate the request without actually transferring the domain. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateTransferDomainRequestFormGroup() {
		return new FormGroup<TransferDomainRequestFormProperties>({
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.
		 * Get v1beta1/{location}/registrations:retrieveImportableDomains
		 * @param {string} location Required. The location. Must be in the format `projects/locations/*`.
		 * @param {number} pageSize Maximum number of results to return.
		 * @param {string} pageToken When set to the `next_page_token` from a prior response, provides the next page of results.
		 * @return {RetrieveImportableDomainsResponse} Successful response
		 */
		Domains_projects_locations_registrations_retrieveImportableDomains(location: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<RetrieveImportableDomainsResponse> {
			return this.http.get<RetrieveImportableDomainsResponse>(this.baseUri + 'v1beta1/' + (location == null ? '' : encodeURIComponent(location)) + '/registrations:retrieveImportableDomains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.
		 * Get v1beta1/{location}/registrations:retrieveRegisterParameters
		 * @param {string} location Required. The location. Must be in the format `projects/locations/*`.
		 * @param {string} domainName Required. The domain name. Unicode domain names must be expressed in Punycode format.
		 * @return {RetrieveRegisterParametersResponse} Successful response
		 */
		Domains_projects_locations_registrations_retrieveRegisterParameters(location: string, domainName: string | null | undefined): Observable<RetrieveRegisterParametersResponse> {
			return this.http.get<RetrieveRegisterParametersResponse>(this.baseUri + 'v1beta1/' + (location == null ? '' : encodeURIComponent(location)) + '/registrations:retrieveRegisterParameters&domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.
		 * Get v1beta1/{location}/registrations:retrieveTransferParameters
		 * @param {string} location Required. The location. Must be in the format `projects/locations/*`.
		 * @param {string} domainName Required. The domain name. Unicode domain names must be expressed in Punycode format.
		 * @return {RetrieveTransferParametersResponse} Successful response
		 */
		Domains_projects_locations_registrations_retrieveTransferParameters(location: string, domainName: string | null | undefined): Observable<RetrieveTransferParametersResponse> {
			return this.http.get<RetrieveTransferParametersResponse>(this.baseUri + 'v1beta1/' + (location == null ? '' : encodeURIComponent(location)) + '/registrations:retrieveTransferParameters&domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.
		 * Get v1beta1/{location}/registrations:searchDomains
		 * @param {string} location Required. The location. Must be in the format `projects/locations/*`.
		 * @param {string} query Required. String used to search for available domain names.
		 * @return {SearchDomainsResponse} Successful response
		 */
		Domains_projects_locations_registrations_searchDomains(location: string, query: string | null | undefined): Observable<SearchDomainsResponse> {
			return this.http.get<SearchDomainsResponse>(this.baseUri + 'v1beta1/' + (location == null ? '' : encodeURIComponent(location)) + '/registrations:searchDomains&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains. After January 2024 you will only be able to delete `Registration` resources when `state` is one of: `EXPORTED`, `EXPIRED`,`REGISTRATION_FAILED` or `TRANSFER_FAILED`. See [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) for more details.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The name of the `Registration` to delete, in the format `projects/locations/registrations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the details of a `Registration` resource.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The name of the `Registration` to get, in the format `projects/locations/registrations/*`.
		 * @return {Registration} Successful response
		 */
		Domains_projects_locations_registrations_get(name: string): Observable<Registration> {
			return this.http.get<Registration>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`
		 * Patch v1beta1/{name}
		 * @param {string} name Output only. Name of the `Registration` resource, in the format `projects/locations/registrations/`.
		 * @param {string} updateMask Required. The field mask describing which fields to update as a comma-separated list. For example, if only the labels are being updated, the `update_mask` is `"labels"`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_patch(name: string, updateMask: string | null | undefined, requestBody: Registration): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Domains_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Domains_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
		 * Post v1beta1/{name}:export
		 * @param {string} name Required. The name of the `Registration` to export, in the format `projects/locations/registrations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_export(name: string, requestBody: ExportRegistrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the `Registration` resources in a project.
		 * Get v1beta1/{parent}/registrations
		 * @param {string} parent Required. The project and location from which to list `Registration`s, specified in the format `projects/locations/*`.
		 * @param {string} filter Filter expression to restrict the `Registration`s returned. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, a boolean, or an enum value. The comparison operator should be one of =, !=, >, <, >=, <=, or : for prefix or wildcard matches. For example, to filter to a specific domain name, use an expression like `domainName="example.com"`. You can also check for the existence of a field; for example, to find domains using custom DNS settings, use an expression like `dnsSettings.customDns:*`. You can also create compound filters by combining expressions with the `AND` and `OR` operators. For example, to find domains that are suspended or have specific issues flagged, use an expression like `(state=SUSPENDED) OR (issue:*)`.
		 * @param {number} pageSize Maximum number of results to return.
		 * @param {string} pageToken When set to the `next_page_token` from a prior response, provides the next page of results.
		 * @return {ListRegistrationsResponse} Successful response
		 */
		Domains_projects_locations_registrations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRegistrationsResponse> {
			return this.http.get<ListRegistrationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/registrations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.
		 * Post v1beta1/{parent}/registrations:import
		 * @param {string} parent Required. The parent resource of the Registration. Must be in the format `projects/locations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_import(parent: string, requestBody: ImportDomainRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/registrations:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.
		 * Post v1beta1/{parent}/registrations:register
		 * @param {string} parent Required. The parent resource of the `Registration`. Must be in the format `projects/locations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_register(parent: string, requestBody: RegisterDomainRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/registrations:register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.
		 * Post v1beta1/{parent}/registrations:transfer
		 * @param {string} parent Required. The parent resource of the `Registration`. Must be in the format `projects/locations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_transfer(parent: string, requestBody: TransferDomainRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/registrations:transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .
		 * Post v1beta1/{registration}:configureContactSettings
		 * @param {string} registration Required. The name of the `Registration` whose contact settings are being updated, in the format `projects/locations/registrations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_configureContactSettings(registration: string, requestBody: ConfigureContactSettingsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (registration == null ? '' : encodeURIComponent(registration)) + ':configureContactSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a `Registration`'s DNS settings.
		 * Post v1beta1/{registration}:configureDnsSettings
		 * @param {string} registration Required. The name of the `Registration` whose DNS settings are being updated, in the format `projects/locations/registrations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_configureDnsSettings(registration: string, requestBody: ConfigureDnsSettingsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (registration == null ? '' : encodeURIComponent(registration)) + ':configureDnsSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a `Registration`'s management settings.
		 * Post v1beta1/{registration}:configureManagementSettings
		 * @param {string} registration Required. The name of the `Registration` whose management settings are being updated, in the format `projects/locations/registrations/*`.
		 * @return {Operation} Successful response
		 */
		Domains_projects_locations_registrations_configureManagementSettings(registration: string, requestBody: ConfigureManagementSettingsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (registration == null ? '' : encodeURIComponent(registration)) + ':configureManagementSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.
		 * Post v1beta1/{registration}:resetAuthorizationCode
		 * @param {string} registration Required. The name of the `Registration` whose authorization code is being reset, in the format `projects/locations/registrations/*`.
		 * @return {AuthorizationCode} Successful response
		 */
		Domains_projects_locations_registrations_resetAuthorizationCode(registration: string, requestBody: ResetAuthorizationCodeRequest): Observable<AuthorizationCode> {
			return this.http.post<AuthorizationCode>(this.baseUri + 'v1beta1/' + (registration == null ? '' : encodeURIComponent(registration)) + ':resetAuthorizationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.
		 * Get v1beta1/{registration}:retrieveAuthorizationCode
		 * @param {string} registration Required. The name of the `Registration` whose authorization code is being retrieved, in the format `projects/locations/registrations/*`.
		 * @return {AuthorizationCode} Successful response
		 */
		Domains_projects_locations_registrations_retrieveAuthorizationCode(registration: string): Observable<AuthorizationCode> {
			return this.http.get<AuthorizationCode>(this.baseUri + 'v1beta1/' + (registration == null ? '' : encodeURIComponent(registration)) + ':retrieveAuthorizationCode', {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Domains_projects_locations_registrations_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Domains_projects_locations_registrations_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Domains_projects_locations_registrations_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

