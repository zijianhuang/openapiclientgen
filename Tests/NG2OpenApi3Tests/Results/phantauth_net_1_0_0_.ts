import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Country name component. */
		country?: string | null;

		/** Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		formatted?: string | null;

		/** City or locality component. */
		locality?: string | null;

		/** Zip code or postal code component. */
		postal_code?: string | null;

		/** State, province, prefecture, or region component. */
		region?: string | null;

		/** Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		street_address?: string | null;
	}
	export interface AddressFormProperties {

		/** Country name component. */
		country: FormControl<string | null | undefined>,

		/** Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		formatted: FormControl<string | null | undefined>,

		/** City or locality component. */
		locality: FormControl<string | null | undefined>,

		/** Zip code or postal code component. */
		postal_code: FormControl<string | null | undefined>,

		/** State, province, prefecture, or region component. */
		region: FormControl<string | null | undefined>,

		/** Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		street_address: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Client {

		/** URL of the Client's JSON representation. */
		'@id'?: string | null;

		/**
		 * OAuth 2.0 client identifier string.
		 * Required
		 */
		client_id: string;

		/** Human-readable string name of the client to be presented to the end-user during authorization. */
		client_name?: string | null;

		/** OAuth 2.0 client secret string. */
		client_secret?: string | null;

		/** URL string of a web page providing information about the client. */
		client_uri?: string | null;

		/** Array of strings representing ways to contact people responsible for this client, typically email addresses. */
		contacts?: Array<string>;

		/** Array of OAuth 2.0 grant type strings that the client can use at the token endpoint. */
		grant_types?: Array<string>;

		/** Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set. */
		jwks?: Array<string>;

		/** URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys. */
		jwks_uri?: string | null;

		/** An email address used to generate a gravatar.com logo_uri. */
		logo_email?: string | null;

		/** URL string that references a logo for the client. */
		logo_uri?: string | null;

		/** URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data. */
		policy_uri?: string | null;

		/** Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows. */
		redirect_uris?: Array<string>;

		/** Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint. */
		response_types?: Array<string>;

		/** String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens. */
		scope?: string | null;

		/** A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered. */
		software_id?: string | null;

		/** A version identifier string for the client software identified by software_id. */
		software_version?: string | null;

		/** String indicator of the requested authentication method for the token endpoint. */
		token_endpoint_auth_method?: string | null;

		/** URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client. */
		tos_uri?: string | null;
	}
	export interface ClientFormProperties {

		/** URL of the Client's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/**
		 * OAuth 2.0 client identifier string.
		 * Required
		 */
		client_id: FormControl<string | null | undefined>,

		/** Human-readable string name of the client to be presented to the end-user during authorization. */
		client_name: FormControl<string | null | undefined>,

		/** OAuth 2.0 client secret string. */
		client_secret: FormControl<string | null | undefined>,

		/** URL string of a web page providing information about the client. */
		client_uri: FormControl<string | null | undefined>,

		/** URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys. */
		jwks_uri: FormControl<string | null | undefined>,

		/** An email address used to generate a gravatar.com logo_uri. */
		logo_email: FormControl<string | null | undefined>,

		/** URL string that references a logo for the client. */
		logo_uri: FormControl<string | null | undefined>,

		/** URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data. */
		policy_uri: FormControl<string | null | undefined>,

		/** String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens. */
		scope: FormControl<string | null | undefined>,

		/** A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered. */
		software_id: FormControl<string | null | undefined>,

		/** A version identifier string for the client software identified by software_id. */
		software_version: FormControl<string | null | undefined>,

		/** String indicator of the requested authentication method for the token endpoint. */
		token_endpoint_auth_method: FormControl<string | null | undefined>,

		/** URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client. */
		tos_uri: FormControl<string | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_name: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			client_uri: new FormControl<string | null | undefined>(undefined),
			jwks_uri: new FormControl<string | null | undefined>(undefined),
			logo_email: new FormControl<string | null | undefined>(undefined),
			logo_uri: new FormControl<string | null | undefined>(undefined),
			policy_uri: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			software_id: new FormControl<string | null | undefined>(undefined),
			software_version: new FormControl<string | null | undefined>(undefined),
			token_endpoint_auth_method: new FormControl<string | null | undefined>(undefined),
			tos_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Domain {

		/** The URL of the domain's JSON representation. */
		'@id'?: string | null;

		/** The URL of the domain logo. The image from this address is displayed on the webpage of the domain. */
		logo?: string | null;

		/** The tenants included in a domain. */
		members?: Array<string>;

		/** The displayed domain name. */
		name?: string | null;

		/** The URL of the domain's webpage. */
		profile?: string | null;

		/** The fully qualified DNS name of the domain (e.g. phantauth.net). */
		sub?: string | null;
	}
	export interface DomainFormProperties {

		/** The URL of the domain's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The URL of the domain logo. The image from this address is displayed on the webpage of the domain. */
		logo: FormControl<string | null | undefined>,

		/** The displayed domain name. */
		name: FormControl<string | null | undefined>,

		/** The URL of the domain's webpage. */
		profile: FormControl<string | null | undefined>,

		/** The fully qualified DNS name of the domain (e.g. phantauth.net). */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fleet {

		/** URL of the Fleet's JSON representation. */
		'@id'?: string | null;

		/** The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo?: string | null;

		/** The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address. */
		logo_email?: string | null;

		/** The client objects included in a fleet. */
		members?: Array<string>;

		/** The displayed fleet name. */
		name?: string | null;

		/** The URL of the Fleet profile. */
		profile?: string | null;

		/**
		 * The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: string;
	}
	export interface FleetFormProperties {

		/** URL of the Fleet's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo: FormControl<string | null | undefined>,

		/** The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address. */
		logo_email: FormControl<string | null | undefined>,

		/** The displayed fleet name. */
		name: FormControl<string | null | undefined>,

		/** The URL of the Fleet profile. */
		profile: FormControl<string | null | undefined>,

		/**
		 * The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			logo_email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Team {

		/** URL of the Teams's JSON representation. */
		'@id'?: string | null;

		/** The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo?: string | null;

		/** The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address. */
		logo_email?: string | null;

		/** The user objects that generate a team member. */
		members?: Array<string>;

		/** The displayed team name. */
		name?: string | null;

		/** The URL of the Team profile. */
		profile?: string | null;

		/**
		 * The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: string;
	}
	export interface TeamFormProperties {

		/** URL of the Teams's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo: FormControl<string | null | undefined>,

		/** The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address. */
		logo_email: FormControl<string | null | undefined>,

		/** The displayed team name. */
		name: FormControl<string | null | undefined>,

		/** The URL of the Team profile. */
		profile: FormControl<string | null | undefined>,

		/**
		 * The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			logo_email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Tenant {

		/** The URL of the tenant's JSON representation. */
		'@id'?: string | null;

		/** A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description. */
		about?: string | null;

		/** The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links. */
		attribution?: string | null;

		/**
		 * It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter.
		 * The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		depot?: string | null;

		/** A list of resource types supported by the external CSV set in `depot`. */
		depots?: Array<string>;

		/** True in the case of a domain tenant collecting several tenants, otherwise false. */
		domain?: boolean | null;

		/** A list of resource types supported by the external generator set in `factory`. */
		factories?: Array<string>;

		/**
		 * The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.
		 */
		factory?: string | null;

		/** The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages. */
		favicon?: string | null;

		/**
		 * The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
		 * As a webpage, it contains information on the use if the given tenant.
		 * Required
		 */
		issuer: string;

		/** The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants. */
		logo?: string | null;

		/** The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages. */
		name?: string | null;

		/** The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages. */
		script?: string | null;

		/**
		 * It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		sheet?: string | null;

		/**
		 * The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).
		 * Required
		 */
		sub: string;

		/** True in the case of a tenant referred to in a domain tenant, otherwise false. */
		subtenant?: boolean | null;

		/** A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text. */
		summary?: string | null;

		/**
		 * It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.
		 */
		template?: string | null;

		/**
		 * The URL of the CSS style sheet used for the tenant's webpages.
		 * The default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.
		 */
		theme?: string | null;
		userinfo?: string | null;

		/** The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property. */
		website?: string | null;
	}
	export interface TenantFormProperties {

		/** The URL of the tenant's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description. */
		about: FormControl<string | null | undefined>,

		/** The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links. */
		attribution: FormControl<string | null | undefined>,

		/**
		 * It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter.
		 * The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		depot: FormControl<string | null | undefined>,

		/** True in the case of a domain tenant collecting several tenants, otherwise false. */
		domain: FormControl<boolean | null | undefined>,

		/**
		 * The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.
		 */
		factory: FormControl<string | null | undefined>,

		/** The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages. */
		favicon: FormControl<string | null | undefined>,

		/**
		 * The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
		 * As a webpage, it contains information on the use if the given tenant.
		 * Required
		 */
		issuer: FormControl<string | null | undefined>,

		/** The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants. */
		logo: FormControl<string | null | undefined>,

		/** The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages. */
		name: FormControl<string | null | undefined>,

		/** The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages. */
		script: FormControl<string | null | undefined>,

		/**
		 * It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		sheet: FormControl<string | null | undefined>,

		/**
		 * The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).
		 * Required
		 */
		sub: FormControl<string | null | undefined>,

		/** True in the case of a tenant referred to in a domain tenant, otherwise false. */
		subtenant: FormControl<boolean | null | undefined>,

		/** A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text. */
		summary: FormControl<string | null | undefined>,

		/**
		 * It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * The URL of the CSS style sheet used for the tenant's webpages.
		 * The default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.
		 */
		theme: FormControl<string | null | undefined>,
		userinfo: FormControl<string | null | undefined>,

		/** The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateTenantFormGroup() {
		return new FormGroup<TenantFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			about: new FormControl<string | null | undefined>(undefined),
			attribution: new FormControl<string | null | undefined>(undefined),
			depot: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<boolean | null | undefined>(undefined),
			factory: new FormControl<string | null | undefined>(undefined),
			favicon: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			sheet: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtenant: new FormControl<boolean | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			theme: new FormControl<string | null | undefined>(undefined),
			userinfo: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {

		/** The URL of the user's JSON representation. */
		'@id'?: string | null;
		address?: Address;

		/** The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. */
		birthdate?: string | null;

		/** The user's preferred email address. */
		email?: string | null;

		/** True if the user's e-mail address has been verified; otherwise false. */
		email_verified?: boolean | null;

		/** The user's surname(s) or last name(s). */
		family_name?: string | null;

		/** The enduser's gender. Possible values are: female, male, and unknown. */
		gender?: string | null;

		/** The user's given name(s) or first name(s). */
		given_name?: string | null;

		/** The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash. */
		locale?: string | null;

		/** The simplified URL of the user's profile page. */
		me?: string | null;

		/** The user's middle name(s). */
		middle_name?: string | null;

		/** The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences. */
		name?: string | null;

		/** A casual name of the User that may or may not be the same as the given_name. */
		nickname?: string | null;

		/** The user's generated password. */
		password?: string | null;

		/** The user's preferred telephone number. */
		phone_number?: string | null;

		/** True if the enduser's phone number has been verified; otherwise false. */
		phone_number_verified?: boolean | null;

		/** The URL of the user's profile picture. */
		picture?: string | null;

		/** A shorthand name by which the user wishes to be referred to at the Relying Party. */
		preferred_username?: string | null;

		/** The URL of the user's profile page. */
		profile?: string | null;

		/**
		 * Subject - User identifier at the issuer.
		 * Required
		 */
		sub: string;

		/** The user's simplified, shortened identifier at the Issuer. */
		uid?: string | null;

		/** The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. */
		updated_at?: number | null;

		/** The URL of user's mailbox in a webmail application. */
		webmail?: string | null;

		/** The URL of the user's webpage or blog. */
		website?: string | null;

		/** A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles. */
		zoneinfo?: string | null;
	}
	export interface UserFormProperties {

		/** The URL of the user's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. */
		birthdate: FormControl<string | null | undefined>,

		/** The user's preferred email address. */
		email: FormControl<string | null | undefined>,

		/** True if the user's e-mail address has been verified; otherwise false. */
		email_verified: FormControl<boolean | null | undefined>,

		/** The user's surname(s) or last name(s). */
		family_name: FormControl<string | null | undefined>,

		/** The enduser's gender. Possible values are: female, male, and unknown. */
		gender: FormControl<string | null | undefined>,

		/** The user's given name(s) or first name(s). */
		given_name: FormControl<string | null | undefined>,

		/** The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash. */
		locale: FormControl<string | null | undefined>,

		/** The simplified URL of the user's profile page. */
		me: FormControl<string | null | undefined>,

		/** The user's middle name(s). */
		middle_name: FormControl<string | null | undefined>,

		/** The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences. */
		name: FormControl<string | null | undefined>,

		/** A casual name of the User that may or may not be the same as the given_name. */
		nickname: FormControl<string | null | undefined>,

		/** The user's generated password. */
		password: FormControl<string | null | undefined>,

		/** The user's preferred telephone number. */
		phone_number: FormControl<string | null | undefined>,

		/** True if the enduser's phone number has been verified; otherwise false. */
		phone_number_verified: FormControl<boolean | null | undefined>,

		/** The URL of the user's profile picture. */
		picture: FormControl<string | null | undefined>,

		/** A shorthand name by which the user wishes to be referred to at the Relying Party. */
		preferred_username: FormControl<string | null | undefined>,

		/** The URL of the user's profile page. */
		profile: FormControl<string | null | undefined>,

		/**
		 * Subject - User identifier at the issuer.
		 * Required
		 */
		sub: FormControl<string | null | undefined>,

		/** The user's simplified, shortened identifier at the Issuer. */
		uid: FormControl<string | null | undefined>,

		/** The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. */
		updated_at: FormControl<number | null | undefined>,

		/** The URL of user's mailbox in a webmail application. */
		webmail: FormControl<string | null | undefined>,

		/** The URL of the user's webpage or blog. */
		website: FormControl<string | null | undefined>,

		/** A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles. */
		zoneinfo: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			birthdate: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			email_verified: new FormControl<boolean | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			me: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			phone_number_verified: new FormControl<boolean | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			preferred_username: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uid: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			webmail: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			zoneinfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a Client Selfie
		 * To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
		 * Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
		 * By the use of a selfie token, you can use your own client objects in the authentication process.
		 * Post client
		 * @return {void} OK
		 */
		ClientPost(requestBody: ClientPostPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'client', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Client
		 * Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
		 * In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
		 * In lack of a client ID, all calls generate a different client object to the randomly generated client ID.
		 * By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.
		 * If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`
		 * The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
		 * The members of a fleet are clients randomly generated from the fleet name.
		 * Get client/{client_id}
		 * @param {string} client_id A client ID or email.
		 * @return {ClientGetByClient_idReturn} OK
		 */
		ClientGetByClient_id(client_id: string): Observable<ClientGetByClient_idReturn> {
			return this.http.get<ClientGetByClient_idReturn>(this.baseUri + 'client/' + (client_id == null ? '' : encodeURIComponent(client_id)), {});
		}

		/**
		 * Get a Client Token
		 * It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
		 * It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
		 * Get client/{client_id}/token/{kind}
		 * @param {string} client_id A client ID or email.
		 * @param {ClientGetByClient_idAndKindKind} kind Token type
		 * @return {void} OK
		 */
		ClientGetByClient_idAndKind(client_id: string, kind: ClientGetByClient_idAndKindKind): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'client/' + (client_id == null ? '' : encodeURIComponent(client_id)) + '/token/' + kind, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Domain
		 * This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
		 * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
		 * Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).
		 * Get domain/{domainname}
		 * @param {string} domainname The domain ID integrated in the `sub` property.
		 * @return {DomainGetByDomainnameReturn} OK
		 */
		DomainGetByDomainname(domainname: string): Observable<DomainGetByDomainnameReturn> {
			return this.http.get<DomainGetByDomainnameReturn>(this.baseUri + 'domain/' + (domainname == null ? '' : encodeURIComponent(domainname)), {});
		}

		/**
		 * Get a Fleet
		 * Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
		 * In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
		 * In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.
		 * Get fleet/{fleetname}
		 * @param {string} fleetname 
		 * The identifier or email address of the fleet; it is integrated in the `sub` property and is the basis of the other generated properties.
		 * @return {FleetGetByFleetnameReturn} OK
		 */
		FleetGetByFleetname(fleetname: string): Observable<FleetGetByFleetnameReturn> {
			return this.http.get<FleetGetByFleetnameReturn>(this.baseUri + 'fleet/' + (fleetname == null ? '' : encodeURIComponent(fleetname)), {});
		}

		/**
		 * Get a Team
		 * Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
		 * In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
		 * In lack of a team name, all calls generate a different team object to the randomly generated team name.
		 * Get team/{teamname}
		 * @param {string} teamname 
		 * The identifier or email address of the team; it is integrated in the `sub` property and is the basis of the other generated properties.
		 * @return {TeamGetByTeamnameReturn} OK
		 */
		TeamGetByTeamname(teamname: string): Observable<TeamGetByTeamnameReturn> {
			return this.http.get<TeamGetByTeamnameReturn>(this.baseUri + 'team/' + (teamname == null ? '' : encodeURIComponent(teamname)), {});
		}

		/**
		 * Get a Tenant
		 * This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.
		 * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
		 * Tenantname is the name of the full DNS domain of the tenant you get.
		 * In the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).
		 * Get tenant/{tenantname}
		 * @param {string} tenantname The tenant ID integrated in the `sub` property.
		 * @return {TenantGetByTenantnameReturn} OK
		 */
		TenantGetByTenantname(tenantname: string): Observable<TenantGetByTenantnameReturn> {
			return this.http.get<TenantGetByTenantnameReturn>(this.baseUri + 'tenant/' + (tenantname == null ? '' : encodeURIComponent(tenantname)), {});
		}

		/**
		 * Create a User Selfie
		 * To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
		 * Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
		 * By the use of a selfie token, you can use your own user objects during the authentication process.
		 * Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
		 * Post user
		 * @return {void} OK
		 */
		UserPost(requestBody: UserPostPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a User
		 * Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
		 * In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
		 * In lack of a user name, all calls generate a different user object to the randomly generated user name.
		 * By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.
		 * If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
		 * In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`
		 * The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
		 * The members of a team are users randomly generated from the team name.
		 * Get user/{username}
		 * @param {string} username The username or email used for generation purposes.
		 * @return {UserGetByUsernameReturn} OK
		 */
		UserGetByUsername(username: string): Observable<UserGetByUsernameReturn> {
			return this.http.get<UserGetByUsernameReturn>(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Get a User Token
		 * It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
		 * This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
		 * Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
		 * Get user/{username}/token/{kind}
		 * @param {string} username A username or email.
		 * @param {UserGetByUsernameAndKindAndScopeKind} kind Token type
		 * @param {string} scope OpenID Connect scope
		 * @return {void} OK
		 */
		UserGetByUsernameAndKindAndScope(username: string, kind: UserGetByUsernameAndKindAndScopeKind, scope: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)) + '/token/' + kind + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface ClientPostPostBody {

		/** URL of the Client's JSON representation. */
		'@id'?: string | null;

		/**
		 * OAuth 2.0 client identifier string.
		 * Required
		 */
		client_id: string;

		/** Human-readable string name of the client to be presented to the end-user during authorization. */
		client_name?: string | null;

		/** OAuth 2.0 client secret string. */
		client_secret?: string | null;

		/** URL string of a web page providing information about the client. */
		client_uri?: string | null;

		/** Array of strings representing ways to contact people responsible for this client, typically email addresses. */
		contacts?: Array<string>;

		/** Array of OAuth 2.0 grant type strings that the client can use at the token endpoint. */
		grant_types?: Array<string>;

		/** Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set. */
		jwks?: Array<string>;

		/** URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys. */
		jwks_uri?: string | null;

		/** An email address used to generate a gravatar.com logo_uri. */
		logo_email?: string | null;

		/** URL string that references a logo for the client. */
		logo_uri?: string | null;

		/** URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data. */
		policy_uri?: string | null;

		/** Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows. */
		redirect_uris?: Array<string>;

		/** Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint. */
		response_types?: Array<string>;

		/** String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens. */
		scope?: string | null;

		/** A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered. */
		software_id?: string | null;

		/** A version identifier string for the client software identified by software_id. */
		software_version?: string | null;

		/** String indicator of the requested authentication method for the token endpoint. */
		token_endpoint_auth_method?: string | null;

		/** URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client. */
		tos_uri?: string | null;
	}
	export interface ClientPostPostBodyFormProperties {

		/** URL of the Client's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/**
		 * OAuth 2.0 client identifier string.
		 * Required
		 */
		client_id: FormControl<string | null | undefined>,

		/** Human-readable string name of the client to be presented to the end-user during authorization. */
		client_name: FormControl<string | null | undefined>,

		/** OAuth 2.0 client secret string. */
		client_secret: FormControl<string | null | undefined>,

		/** URL string of a web page providing information about the client. */
		client_uri: FormControl<string | null | undefined>,

		/** URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys. */
		jwks_uri: FormControl<string | null | undefined>,

		/** An email address used to generate a gravatar.com logo_uri. */
		logo_email: FormControl<string | null | undefined>,

		/** URL string that references a logo for the client. */
		logo_uri: FormControl<string | null | undefined>,

		/** URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data. */
		policy_uri: FormControl<string | null | undefined>,

		/** String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens. */
		scope: FormControl<string | null | undefined>,

		/** A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered. */
		software_id: FormControl<string | null | undefined>,

		/** A version identifier string for the client software identified by software_id. */
		software_version: FormControl<string | null | undefined>,

		/** String indicator of the requested authentication method for the token endpoint. */
		token_endpoint_auth_method: FormControl<string | null | undefined>,

		/** URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client. */
		tos_uri: FormControl<string | null | undefined>,
	}
	export function CreateClientPostPostBodyFormGroup() {
		return new FormGroup<ClientPostPostBodyFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_name: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			client_uri: new FormControl<string | null | undefined>(undefined),
			jwks_uri: new FormControl<string | null | undefined>(undefined),
			logo_email: new FormControl<string | null | undefined>(undefined),
			logo_uri: new FormControl<string | null | undefined>(undefined),
			policy_uri: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			software_id: new FormControl<string | null | undefined>(undefined),
			software_version: new FormControl<string | null | undefined>(undefined),
			token_endpoint_auth_method: new FormControl<string | null | undefined>(undefined),
			tos_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientGetByClient_idReturn {

		/** URL of the Client's JSON representation. */
		'@id'?: string | null;

		/**
		 * OAuth 2.0 client identifier string.
		 * Required
		 */
		client_id: string;

		/** Human-readable string name of the client to be presented to the end-user during authorization. */
		client_name?: string | null;

		/** OAuth 2.0 client secret string. */
		client_secret?: string | null;

		/** URL string of a web page providing information about the client. */
		client_uri?: string | null;

		/** Array of strings representing ways to contact people responsible for this client, typically email addresses. */
		contacts?: Array<string>;

		/** Array of OAuth 2.0 grant type strings that the client can use at the token endpoint. */
		grant_types?: Array<string>;

		/** Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set. */
		jwks?: Array<string>;

		/** URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys. */
		jwks_uri?: string | null;

		/** An email address used to generate a gravatar.com logo_uri. */
		logo_email?: string | null;

		/** URL string that references a logo for the client. */
		logo_uri?: string | null;

		/** URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data. */
		policy_uri?: string | null;

		/** Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows. */
		redirect_uris?: Array<string>;

		/** Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint. */
		response_types?: Array<string>;

		/** String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens. */
		scope?: string | null;

		/** A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered. */
		software_id?: string | null;

		/** A version identifier string for the client software identified by software_id. */
		software_version?: string | null;

		/** String indicator of the requested authentication method for the token endpoint. */
		token_endpoint_auth_method?: string | null;

		/** URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client. */
		tos_uri?: string | null;
	}
	export interface ClientGetByClient_idReturnFormProperties {

		/** URL of the Client's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/**
		 * OAuth 2.0 client identifier string.
		 * Required
		 */
		client_id: FormControl<string | null | undefined>,

		/** Human-readable string name of the client to be presented to the end-user during authorization. */
		client_name: FormControl<string | null | undefined>,

		/** OAuth 2.0 client secret string. */
		client_secret: FormControl<string | null | undefined>,

		/** URL string of a web page providing information about the client. */
		client_uri: FormControl<string | null | undefined>,

		/** URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys. */
		jwks_uri: FormControl<string | null | undefined>,

		/** An email address used to generate a gravatar.com logo_uri. */
		logo_email: FormControl<string | null | undefined>,

		/** URL string that references a logo for the client. */
		logo_uri: FormControl<string | null | undefined>,

		/** URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data. */
		policy_uri: FormControl<string | null | undefined>,

		/** String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens. */
		scope: FormControl<string | null | undefined>,

		/** A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered. */
		software_id: FormControl<string | null | undefined>,

		/** A version identifier string for the client software identified by software_id. */
		software_version: FormControl<string | null | undefined>,

		/** String indicator of the requested authentication method for the token endpoint. */
		token_endpoint_auth_method: FormControl<string | null | undefined>,

		/** URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client. */
		tos_uri: FormControl<string | null | undefined>,
	}
	export function CreateClientGetByClient_idReturnFormGroup() {
		return new FormGroup<ClientGetByClient_idReturnFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_name: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			client_uri: new FormControl<string | null | undefined>(undefined),
			jwks_uri: new FormControl<string | null | undefined>(undefined),
			logo_email: new FormControl<string | null | undefined>(undefined),
			logo_uri: new FormControl<string | null | undefined>(undefined),
			policy_uri: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			software_id: new FormControl<string | null | undefined>(undefined),
			software_version: new FormControl<string | null | undefined>(undefined),
			token_endpoint_auth_method: new FormControl<string | null | undefined>(undefined),
			tos_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClientGetByClient_idAndKindKind { '\'registration\'' = 0, '\'selfie\'' = 1, '\'plain\'' = 2 }

	export interface DomainGetByDomainnameReturn {

		/** The URL of the domain's JSON representation. */
		'@id'?: string | null;

		/** The URL of the domain logo. The image from this address is displayed on the webpage of the domain. */
		logo?: string | null;

		/** The tenants included in a domain. */
		members?: Array<string>;

		/** The displayed domain name. */
		name?: string | null;

		/** The URL of the domain's webpage. */
		profile?: string | null;

		/** The fully qualified DNS name of the domain (e.g. phantauth.net). */
		sub?: string | null;
	}
	export interface DomainGetByDomainnameReturnFormProperties {

		/** The URL of the domain's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The URL of the domain logo. The image from this address is displayed on the webpage of the domain. */
		logo: FormControl<string | null | undefined>,

		/** The displayed domain name. */
		name: FormControl<string | null | undefined>,

		/** The URL of the domain's webpage. */
		profile: FormControl<string | null | undefined>,

		/** The fully qualified DNS name of the domain (e.g. phantauth.net). */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateDomainGetByDomainnameReturnFormGroup() {
		return new FormGroup<DomainGetByDomainnameReturnFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FleetGetByFleetnameReturn {

		/** URL of the Fleet's JSON representation. */
		'@id'?: string | null;

		/** The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo?: string | null;

		/** The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address. */
		logo_email?: string | null;

		/** The client objects included in a fleet. */
		members?: Array<string>;

		/** The displayed fleet name. */
		name?: string | null;

		/** The URL of the Fleet profile. */
		profile?: string | null;

		/**
		 * The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: string;
	}
	export interface FleetGetByFleetnameReturnFormProperties {

		/** URL of the Fleet's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo: FormControl<string | null | undefined>,

		/** The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address. */
		logo_email: FormControl<string | null | undefined>,

		/** The displayed fleet name. */
		name: FormControl<string | null | undefined>,

		/** The URL of the Fleet profile. */
		profile: FormControl<string | null | undefined>,

		/**
		 * The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateFleetGetByFleetnameReturnFormGroup() {
		return new FormGroup<FleetGetByFleetnameReturnFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			logo_email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TeamGetByTeamnameReturn {

		/** URL of the Teams's JSON representation. */
		'@id'?: string | null;

		/** The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo?: string | null;

		/** The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address. */
		logo_email?: string | null;

		/** The user objects that generate a team member. */
		members?: Array<string>;

		/** The displayed team name. */
		name?: string | null;

		/** The URL of the Team profile. */
		profile?: string | null;

		/**
		 * The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: string;
	}
	export interface TeamGetByTeamnameReturnFormProperties {

		/** URL of the Teams's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property. */
		logo: FormControl<string | null | undefined>,

		/** The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address. */
		logo_email: FormControl<string | null | undefined>,

		/** The displayed team name. */
		name: FormControl<string | null | undefined>,

		/** The URL of the Team profile. */
		profile: FormControl<string | null | undefined>,

		/**
		 * The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.
		 * Required
		 */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateTeamGetByTeamnameReturnFormGroup() {
		return new FormGroup<TeamGetByTeamnameReturnFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			logo_email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TenantGetByTenantnameReturn {

		/** The URL of the tenant's JSON representation. */
		'@id'?: string | null;

		/** A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description. */
		about?: string | null;

		/** The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links. */
		attribution?: string | null;

		/**
		 * It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter.
		 * The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		depot?: string | null;

		/** A list of resource types supported by the external CSV set in `depot`. */
		depots?: Array<string>;

		/** True in the case of a domain tenant collecting several tenants, otherwise false. */
		domain?: boolean | null;

		/** A list of resource types supported by the external generator set in `factory`. */
		factories?: Array<string>;

		/**
		 * The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.
		 */
		factory?: string | null;

		/** The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages. */
		favicon?: string | null;

		/**
		 * The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
		 * As a webpage, it contains information on the use if the given tenant.
		 * Required
		 */
		issuer: string;

		/** The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants. */
		logo?: string | null;

		/** The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages. */
		name?: string | null;

		/** The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages. */
		script?: string | null;

		/**
		 * It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		sheet?: string | null;

		/**
		 * The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).
		 * Required
		 */
		sub: string;

		/** True in the case of a tenant referred to in a domain tenant, otherwise false. */
		subtenant?: boolean | null;

		/** A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text. */
		summary?: string | null;

		/**
		 * It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.
		 */
		template?: string | null;

		/**
		 * The URL of the CSS style sheet used for the tenant's webpages.
		 * The default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.
		 */
		theme?: string | null;
		userinfo?: string | null;

		/** The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property. */
		website?: string | null;
	}
	export interface TenantGetByTenantnameReturnFormProperties {

		/** The URL of the tenant's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description. */
		about: FormControl<string | null | undefined>,

		/** The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links. */
		attribution: FormControl<string | null | undefined>,

		/**
		 * It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter.
		 * The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		depot: FormControl<string | null | undefined>,

		/** True in the case of a domain tenant collecting several tenants, otherwise false. */
		domain: FormControl<boolean | null | undefined>,

		/**
		 * The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.
		 */
		factory: FormControl<string | null | undefined>,

		/** The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages. */
		favicon: FormControl<string | null | undefined>,

		/**
		 * The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
		 * As a webpage, it contains information on the use if the given tenant.
		 * Required
		 */
		issuer: FormControl<string | null | undefined>,

		/** The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants. */
		logo: FormControl<string | null | undefined>,

		/** The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages. */
		name: FormControl<string | null | undefined>,

		/** The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages. */
		script: FormControl<string | null | undefined>,

		/**
		 * It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.
		 * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
		 */
		sheet: FormControl<string | null | undefined>,

		/**
		 * The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).
		 * Required
		 */
		sub: FormControl<string | null | undefined>,

		/** True in the case of a tenant referred to in a domain tenant, otherwise false. */
		subtenant: FormControl<boolean | null | undefined>,

		/** A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text. */
		summary: FormControl<string | null | undefined>,

		/**
		 * It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
		 * The URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * The URL of the CSS style sheet used for the tenant's webpages.
		 * The default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.
		 */
		theme: FormControl<string | null | undefined>,
		userinfo: FormControl<string | null | undefined>,

		/** The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateTenantGetByTenantnameReturnFormGroup() {
		return new FormGroup<TenantGetByTenantnameReturnFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			about: new FormControl<string | null | undefined>(undefined),
			attribution: new FormControl<string | null | undefined>(undefined),
			depot: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<boolean | null | undefined>(undefined),
			factory: new FormControl<string | null | undefined>(undefined),
			favicon: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			sheet: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtenant: new FormControl<boolean | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			theme: new FormControl<string | null | undefined>(undefined),
			userinfo: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserPostPostBody {

		/** The URL of the user's JSON representation. */
		'@id'?: string | null;

		/** The user's preferred postal address. */
		address?: UserPostPostBodyAddress;

		/** The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. */
		birthdate?: string | null;

		/** The user's preferred email address. */
		email?: string | null;

		/** True if the user's e-mail address has been verified; otherwise false. */
		email_verified?: boolean | null;

		/** The user's surname(s) or last name(s). */
		family_name?: string | null;

		/** The enduser's gender. Possible values are: female, male, and unknown. */
		gender?: string | null;

		/** The user's given name(s) or first name(s). */
		given_name?: string | null;

		/** The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash. */
		locale?: string | null;

		/** The simplified URL of the user's profile page. */
		me?: string | null;

		/** The user's middle name(s). */
		middle_name?: string | null;

		/** The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences. */
		name?: string | null;

		/** A casual name of the User that may or may not be the same as the given_name. */
		nickname?: string | null;

		/** The user's generated password. */
		password?: string | null;

		/** The user's preferred telephone number. */
		phone_number?: string | null;

		/** True if the enduser's phone number has been verified; otherwise false. */
		phone_number_verified?: boolean | null;

		/** The URL of the user's profile picture. */
		picture?: string | null;

		/** A shorthand name by which the user wishes to be referred to at the Relying Party. */
		preferred_username?: string | null;

		/** The URL of the user's profile page. */
		profile?: string | null;

		/**
		 * Subject - User identifier at the issuer.
		 * Required
		 */
		sub: string;

		/** The user's simplified, shortened identifier at the Issuer. */
		uid?: string | null;

		/** The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. */
		updated_at?: number | null;

		/** The URL of user's mailbox in a webmail application. */
		webmail?: string | null;

		/** The URL of the user's webpage or blog. */
		website?: string | null;

		/** A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles. */
		zoneinfo?: string | null;
	}
	export interface UserPostPostBodyFormProperties {

		/** The URL of the user's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. */
		birthdate: FormControl<string | null | undefined>,

		/** The user's preferred email address. */
		email: FormControl<string | null | undefined>,

		/** True if the user's e-mail address has been verified; otherwise false. */
		email_verified: FormControl<boolean | null | undefined>,

		/** The user's surname(s) or last name(s). */
		family_name: FormControl<string | null | undefined>,

		/** The enduser's gender. Possible values are: female, male, and unknown. */
		gender: FormControl<string | null | undefined>,

		/** The user's given name(s) or first name(s). */
		given_name: FormControl<string | null | undefined>,

		/** The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash. */
		locale: FormControl<string | null | undefined>,

		/** The simplified URL of the user's profile page. */
		me: FormControl<string | null | undefined>,

		/** The user's middle name(s). */
		middle_name: FormControl<string | null | undefined>,

		/** The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences. */
		name: FormControl<string | null | undefined>,

		/** A casual name of the User that may or may not be the same as the given_name. */
		nickname: FormControl<string | null | undefined>,

		/** The user's generated password. */
		password: FormControl<string | null | undefined>,

		/** The user's preferred telephone number. */
		phone_number: FormControl<string | null | undefined>,

		/** True if the enduser's phone number has been verified; otherwise false. */
		phone_number_verified: FormControl<boolean | null | undefined>,

		/** The URL of the user's profile picture. */
		picture: FormControl<string | null | undefined>,

		/** A shorthand name by which the user wishes to be referred to at the Relying Party. */
		preferred_username: FormControl<string | null | undefined>,

		/** The URL of the user's profile page. */
		profile: FormControl<string | null | undefined>,

		/**
		 * Subject - User identifier at the issuer.
		 * Required
		 */
		sub: FormControl<string | null | undefined>,

		/** The user's simplified, shortened identifier at the Issuer. */
		uid: FormControl<string | null | undefined>,

		/** The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. */
		updated_at: FormControl<number | null | undefined>,

		/** The URL of user's mailbox in a webmail application. */
		webmail: FormControl<string | null | undefined>,

		/** The URL of the user's webpage or blog. */
		website: FormControl<string | null | undefined>,

		/** A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles. */
		zoneinfo: FormControl<string | null | undefined>,
	}
	export function CreateUserPostPostBodyFormGroup() {
		return new FormGroup<UserPostPostBodyFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			birthdate: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			email_verified: new FormControl<boolean | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			me: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			phone_number_verified: new FormControl<boolean | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			preferred_username: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uid: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			webmail: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			zoneinfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserPostPostBodyAddress {

		/** Country name component. */
		country?: string | null;

		/** Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		formatted?: string | null;

		/** City or locality component. */
		locality?: string | null;

		/** Zip code or postal code component. */
		postal_code?: string | null;

		/** State, province, prefecture, or region component. */
		region?: string | null;

		/** Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		street_address?: string | null;
	}
	export interface UserPostPostBodyAddressFormProperties {

		/** Country name component. */
		country: FormControl<string | null | undefined>,

		/** Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		formatted: FormControl<string | null | undefined>,

		/** City or locality component. */
		locality: FormControl<string | null | undefined>,

		/** Zip code or postal code component. */
		postal_code: FormControl<string | null | undefined>,

		/** State, province, prefecture, or region component. */
		region: FormControl<string | null | undefined>,

		/** Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		street_address: FormControl<string | null | undefined>,
	}
	export function CreateUserPostPostBodyAddressFormGroup() {
		return new FormGroup<UserPostPostBodyAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserGetByUsernameReturn {

		/** The URL of the user's JSON representation. */
		'@id'?: string | null;

		/** The user's preferred postal address. */
		address?: UserGetByUsernameReturnAddress;

		/** The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. */
		birthdate?: string | null;

		/** The user's preferred email address. */
		email?: string | null;

		/** True if the user's e-mail address has been verified; otherwise false. */
		email_verified?: boolean | null;

		/** The user's surname(s) or last name(s). */
		family_name?: string | null;

		/** The enduser's gender. Possible values are: female, male, and unknown. */
		gender?: string | null;

		/** The user's given name(s) or first name(s). */
		given_name?: string | null;

		/** The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash. */
		locale?: string | null;

		/** The simplified URL of the user's profile page. */
		me?: string | null;

		/** The user's middle name(s). */
		middle_name?: string | null;

		/** The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences. */
		name?: string | null;

		/** A casual name of the User that may or may not be the same as the given_name. */
		nickname?: string | null;

		/** The user's generated password. */
		password?: string | null;

		/** The user's preferred telephone number. */
		phone_number?: string | null;

		/** True if the enduser's phone number has been verified; otherwise false. */
		phone_number_verified?: boolean | null;

		/** The URL of the user's profile picture. */
		picture?: string | null;

		/** A shorthand name by which the user wishes to be referred to at the Relying Party. */
		preferred_username?: string | null;

		/** The URL of the user's profile page. */
		profile?: string | null;

		/**
		 * Subject - User identifier at the issuer.
		 * Required
		 */
		sub: string;

		/** The user's simplified, shortened identifier at the Issuer. */
		uid?: string | null;

		/** The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. */
		updated_at?: number | null;

		/** The URL of user's mailbox in a webmail application. */
		webmail?: string | null;

		/** The URL of the user's webpage or blog. */
		website?: string | null;

		/** A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles. */
		zoneinfo?: string | null;
	}
	export interface UserGetByUsernameReturnFormProperties {

		/** The URL of the user's JSON representation. */
		'@id': FormControl<string | null | undefined>,

		/** The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. */
		birthdate: FormControl<string | null | undefined>,

		/** The user's preferred email address. */
		email: FormControl<string | null | undefined>,

		/** True if the user's e-mail address has been verified; otherwise false. */
		email_verified: FormControl<boolean | null | undefined>,

		/** The user's surname(s) or last name(s). */
		family_name: FormControl<string | null | undefined>,

		/** The enduser's gender. Possible values are: female, male, and unknown. */
		gender: FormControl<string | null | undefined>,

		/** The user's given name(s) or first name(s). */
		given_name: FormControl<string | null | undefined>,

		/** The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash. */
		locale: FormControl<string | null | undefined>,

		/** The simplified URL of the user's profile page. */
		me: FormControl<string | null | undefined>,

		/** The user's middle name(s). */
		middle_name: FormControl<string | null | undefined>,

		/** The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences. */
		name: FormControl<string | null | undefined>,

		/** A casual name of the User that may or may not be the same as the given_name. */
		nickname: FormControl<string | null | undefined>,

		/** The user's generated password. */
		password: FormControl<string | null | undefined>,

		/** The user's preferred telephone number. */
		phone_number: FormControl<string | null | undefined>,

		/** True if the enduser's phone number has been verified; otherwise false. */
		phone_number_verified: FormControl<boolean | null | undefined>,

		/** The URL of the user's profile picture. */
		picture: FormControl<string | null | undefined>,

		/** A shorthand name by which the user wishes to be referred to at the Relying Party. */
		preferred_username: FormControl<string | null | undefined>,

		/** The URL of the user's profile page. */
		profile: FormControl<string | null | undefined>,

		/**
		 * Subject - User identifier at the issuer.
		 * Required
		 */
		sub: FormControl<string | null | undefined>,

		/** The user's simplified, shortened identifier at the Issuer. */
		uid: FormControl<string | null | undefined>,

		/** The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. */
		updated_at: FormControl<number | null | undefined>,

		/** The URL of user's mailbox in a webmail application. */
		webmail: FormControl<string | null | undefined>,

		/** The URL of the user's webpage or blog. */
		website: FormControl<string | null | undefined>,

		/** A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles. */
		zoneinfo: FormControl<string | null | undefined>,
	}
	export function CreateUserGetByUsernameReturnFormGroup() {
		return new FormGroup<UserGetByUsernameReturnFormProperties>({
			'@id': new FormControl<string | null | undefined>(undefined),
			birthdate: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			email_verified: new FormControl<boolean | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			me: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			phone_number_verified: new FormControl<boolean | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			preferred_username: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uid: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			webmail: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			zoneinfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserGetByUsernameReturnAddress {

		/** Country name component. */
		country?: string | null;

		/** Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		formatted?: string | null;

		/** City or locality component. */
		locality?: string | null;

		/** Zip code or postal code component. */
		postal_code?: string | null;

		/** State, province, prefecture, or region component. */
		region?: string | null;

		/** Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		street_address?: string | null;
	}
	export interface UserGetByUsernameReturnAddressFormProperties {

		/** Country name component. */
		country: FormControl<string | null | undefined>,

		/** Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		formatted: FormControl<string | null | undefined>,

		/** City or locality component. */
		locality: FormControl<string | null | undefined>,

		/** Zip code or postal code component. */
		postal_code: FormControl<string | null | undefined>,

		/** State, province, prefecture, or region component. */
		region: FormControl<string | null | undefined>,

		/** Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character. */
		street_address: FormControl<string | null | undefined>,
	}
	export function CreateUserGetByUsernameReturnAddressFormGroup() {
		return new FormGroup<UserGetByUsernameReturnAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserGetByUsernameAndKindAndScopeKind { '\'access\'' = 0, '\'refresh\'' = 1, '\'authorization\'' = 2, '\'id\'' = 3, '\'selfie\'' = 4, '\'plain\'' = 5 }

}

