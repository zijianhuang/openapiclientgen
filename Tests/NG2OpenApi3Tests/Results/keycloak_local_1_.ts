import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessToken {
		acr?: string | null;
		address?: AddressClaimSet;
		'allowed-origins'?: Array<string>;
		at_hash?: string | null;
		auth_time?: number | null;
		authorization?: AccessToken_Authorization;
		azp?: string | null;
		birthdate?: string | null;
		c_hash?: string | null;
		category?: AccessTokenCategory | null;
		claims_locales?: string | null;
		cnf?: AccessToken_CertConf;
		email?: string | null;
		email_verified?: boolean | null;
		exp?: number | null;
		family_name?: string | null;
		gender?: string | null;
		given_name?: string | null;
		iat?: number | null;
		iss?: string | null;
		jti?: string | null;
		locale?: string | null;
		middle_name?: string | null;
		name?: string | null;
		nbf?: number | null;
		nickname?: string | null;
		nonce?: string | null;
		otherClaims?: string | null;
		phone_number?: string | null;
		phone_number_verified?: boolean | null;
		picture?: string | null;
		preferred_username?: string | null;
		profile?: string | null;
		realm_access?: AccessToken_Access;
		s_hash?: string | null;
		scope?: string | null;
		session_state?: string | null;
		sub?: string | null;
		'trusted-certs'?: Array<string>;
		typ?: string | null;
		updated_at?: number | null;
		website?: string | null;
		zoneinfo?: string | null;
	}
	export interface AccessTokenFormProperties {
		acr: FormControl<string | null | undefined>,
		at_hash: FormControl<string | null | undefined>,
		auth_time: FormControl<number | null | undefined>,
		azp: FormControl<string | null | undefined>,
		birthdate: FormControl<string | null | undefined>,
		c_hash: FormControl<string | null | undefined>,
		category: FormControl<AccessTokenCategory | null | undefined>,
		claims_locales: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		email_verified: FormControl<boolean | null | undefined>,
		exp: FormControl<number | null | undefined>,
		family_name: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		given_name: FormControl<string | null | undefined>,
		iat: FormControl<number | null | undefined>,
		iss: FormControl<string | null | undefined>,
		jti: FormControl<string | null | undefined>,
		locale: FormControl<string | null | undefined>,
		middle_name: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nbf: FormControl<number | null | undefined>,
		nickname: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		otherClaims: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		phone_number_verified: FormControl<boolean | null | undefined>,
		picture: FormControl<string | null | undefined>,
		preferred_username: FormControl<string | null | undefined>,
		profile: FormControl<string | null | undefined>,
		s_hash: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,
		session_state: FormControl<string | null | undefined>,
		sub: FormControl<string | null | undefined>,
		typ: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
		website: FormControl<string | null | undefined>,
		zoneinfo: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenFormGroup() {
		return new FormGroup<AccessTokenFormProperties>({
			acr: new FormControl<string | null | undefined>(undefined),
			at_hash: new FormControl<string | null | undefined>(undefined),
			auth_time: new FormControl<number | null | undefined>(undefined),
			azp: new FormControl<string | null | undefined>(undefined),
			birthdate: new FormControl<string | null | undefined>(undefined),
			c_hash: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<AccessTokenCategory | null | undefined>(undefined),
			claims_locales: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			email_verified: new FormControl<boolean | null | undefined>(undefined),
			exp: new FormControl<number | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			iat: new FormControl<number | null | undefined>(undefined),
			iss: new FormControl<string | null | undefined>(undefined),
			jti: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			otherClaims: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			phone_number_verified: new FormControl<boolean | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			preferred_username: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			s_hash: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			session_state: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
			typ: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			zoneinfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddressClaimSet {
		country?: string | null;
		formatted?: string | null;
		locality?: string | null;
		postal_code?: string | null;
		region?: string | null;
		street_address?: string | null;
	}
	export interface AddressClaimSetFormProperties {
		country: FormControl<string | null | undefined>,
		formatted: FormControl<string | null | undefined>,
		locality: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		street_address: FormControl<string | null | undefined>,
	}
	export function CreateAddressClaimSetFormGroup() {
		return new FormGroup<AddressClaimSetFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccessToken_Authorization {
		permissions?: Array<Permission>;
	}
	export interface AccessToken_AuthorizationFormProperties {
	}
	export function CreateAccessToken_AuthorizationFormGroup() {
		return new FormGroup<AccessToken_AuthorizationFormProperties>({
		});

	}

	export interface Permission {
		claims?: string | null;
		rsid?: string | null;
		rsname?: string | null;
		scopes?: Array<string>;
	}
	export interface PermissionFormProperties {
		claims: FormControl<string | null | undefined>,
		rsid: FormControl<string | null | undefined>,
		rsname: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			claims: new FormControl<string | null | undefined>(undefined),
			rsid: new FormControl<string | null | undefined>(undefined),
			rsname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessTokenCategory { INTERNAL = 'INTERNAL', ACCESS = 'ACCESS', ID = 'ID', ADMIN = 'ADMIN', USERINFO = 'USERINFO' }

	export interface AccessToken_CertConf {
		'x5t#S256'?: string | null;
	}
	export interface AccessToken_CertConfFormProperties {
		'x5t#S256': FormControl<string | null | undefined>,
	}
	export function CreateAccessToken_CertConfFormGroup() {
		return new FormGroup<AccessToken_CertConfFormProperties>({
			'x5t#S256': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccessToken_Access {
		roles?: Array<string>;
		verify_caller?: boolean | null;
	}
	export interface AccessToken_AccessFormProperties {
		verify_caller: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessToken_AccessFormGroup() {
		return new FormGroup<AccessToken_AccessFormProperties>({
			verify_caller: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AdminEventRepresentation {
		authDetails?: AuthDetailsRepresentation;
		error?: string | null;
		operationType?: string | null;
		realmId?: string | null;
		representation?: string | null;
		resourcePath?: string | null;
		resourceType?: string | null;
		time?: number | null;
	}
	export interface AdminEventRepresentationFormProperties {
		error: FormControl<string | null | undefined>,
		operationType: FormControl<string | null | undefined>,
		realmId: FormControl<string | null | undefined>,
		representation: FormControl<string | null | undefined>,
		resourcePath: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		time: FormControl<number | null | undefined>,
	}
	export function CreateAdminEventRepresentationFormGroup() {
		return new FormGroup<AdminEventRepresentationFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<string | null | undefined>(undefined),
			realmId: new FormControl<string | null | undefined>(undefined),
			representation: new FormControl<string | null | undefined>(undefined),
			resourcePath: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthDetailsRepresentation {
		clientId?: string | null;
		ipAddress?: string | null;
		realmId?: string | null;
		userId?: string | null;
	}
	export interface AuthDetailsRepresentationFormProperties {
		clientId: FormControl<string | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		realmId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAuthDetailsRepresentationFormGroup() {
		return new FormGroup<AuthDetailsRepresentationFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			realmId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationExecutionExportRepresentation {
		authenticator?: string | null;
		authenticatorConfig?: string | null;
		authenticatorFlow?: boolean | null;
		autheticatorFlow?: boolean | null;
		flowAlias?: string | null;
		priority?: number | null;
		requirement?: string | null;
		userSetupAllowed?: boolean | null;
	}
	export interface AuthenticationExecutionExportRepresentationFormProperties {
		authenticator: FormControl<string | null | undefined>,
		authenticatorConfig: FormControl<string | null | undefined>,
		authenticatorFlow: FormControl<boolean | null | undefined>,
		autheticatorFlow: FormControl<boolean | null | undefined>,
		flowAlias: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		requirement: FormControl<string | null | undefined>,
		userSetupAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthenticationExecutionExportRepresentationFormGroup() {
		return new FormGroup<AuthenticationExecutionExportRepresentationFormProperties>({
			authenticator: new FormControl<string | null | undefined>(undefined),
			authenticatorConfig: new FormControl<string | null | undefined>(undefined),
			authenticatorFlow: new FormControl<boolean | null | undefined>(undefined),
			autheticatorFlow: new FormControl<boolean | null | undefined>(undefined),
			flowAlias: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			requirement: new FormControl<string | null | undefined>(undefined),
			userSetupAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AuthenticationExecutionInfoRepresentation {
		alias?: string | null;
		authenticationConfig?: string | null;
		authenticationFlow?: boolean | null;
		configurable?: boolean | null;
		displayName?: string | null;
		flowId?: string | null;
		id?: string | null;
		index?: number | null;
		level?: number | null;
		providerId?: string | null;
		requirement?: string | null;
		requirementChoices?: Array<string>;
	}
	export interface AuthenticationExecutionInfoRepresentationFormProperties {
		alias: FormControl<string | null | undefined>,
		authenticationConfig: FormControl<string | null | undefined>,
		authenticationFlow: FormControl<boolean | null | undefined>,
		configurable: FormControl<boolean | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		flowId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		level: FormControl<number | null | undefined>,
		providerId: FormControl<string | null | undefined>,
		requirement: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationExecutionInfoRepresentationFormGroup() {
		return new FormGroup<AuthenticationExecutionInfoRepresentationFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			authenticationConfig: new FormControl<string | null | undefined>(undefined),
			authenticationFlow: new FormControl<boolean | null | undefined>(undefined),
			configurable: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			flowId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			requirement: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationExecutionRepresentation {
		authenticator?: string | null;
		authenticatorConfig?: string | null;
		authenticatorFlow?: boolean | null;
		autheticatorFlow?: boolean | null;
		flowId?: string | null;
		id?: string | null;
		parentFlow?: string | null;
		priority?: number | null;
		requirement?: string | null;
	}
	export interface AuthenticationExecutionRepresentationFormProperties {
		authenticator: FormControl<string | null | undefined>,
		authenticatorConfig: FormControl<string | null | undefined>,
		authenticatorFlow: FormControl<boolean | null | undefined>,
		autheticatorFlow: FormControl<boolean | null | undefined>,
		flowId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		parentFlow: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		requirement: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationExecutionRepresentationFormGroup() {
		return new FormGroup<AuthenticationExecutionRepresentationFormProperties>({
			authenticator: new FormControl<string | null | undefined>(undefined),
			authenticatorConfig: new FormControl<string | null | undefined>(undefined),
			authenticatorFlow: new FormControl<boolean | null | undefined>(undefined),
			autheticatorFlow: new FormControl<boolean | null | undefined>(undefined),
			flowId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			parentFlow: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			requirement: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationFlowRepresentation {
		alias?: string | null;
		authenticationExecutions?: Array<AuthenticationExecutionExportRepresentation>;
		builtIn?: boolean | null;
		description?: string | null;
		id?: string | null;
		providerId?: string | null;
		topLevel?: boolean | null;
	}
	export interface AuthenticationFlowRepresentationFormProperties {
		alias: FormControl<string | null | undefined>,
		builtIn: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
		topLevel: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthenticationFlowRepresentationFormGroup() {
		return new FormGroup<AuthenticationFlowRepresentationFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			builtIn: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			topLevel: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AuthenticatorConfigInfoRepresentation {
		helpText?: string | null;
		name?: string | null;
		properties?: Array<ConfigPropertyRepresentation>;
		providerId?: string | null;
	}
	export interface AuthenticatorConfigInfoRepresentationFormProperties {
		helpText: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticatorConfigInfoRepresentationFormGroup() {
		return new FormGroup<AuthenticatorConfigInfoRepresentationFormProperties>({
			helpText: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigPropertyRepresentation {
		defaultValue?: string | null;
		helpText?: string | null;
		label?: string | null;
		name?: string | null;
		options?: Array<string>;
		secret?: boolean | null;
		type?: string | null;
	}
	export interface ConfigPropertyRepresentationFormProperties {
		defaultValue: FormControl<string | null | undefined>,
		helpText: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		secret: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateConfigPropertyRepresentationFormGroup() {
		return new FormGroup<ConfigPropertyRepresentationFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			helpText: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticatorConfigRepresentation {
		alias?: string | null;
		config?: string | null;
		id?: string | null;
	}
	export interface AuthenticatorConfigRepresentationFormProperties {
		alias: FormControl<string | null | undefined>,
		config: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticatorConfigRepresentationFormGroup() {
		return new FormGroup<AuthenticatorConfigRepresentationFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateRepresentation {
		certificate?: string | null;
		kid?: string | null;
		privateKey?: string | null;
		publicKey?: string | null;
	}
	export interface CertificateRepresentationFormProperties {
		certificate: FormControl<string | null | undefined>,
		kid: FormControl<string | null | undefined>,
		privateKey: FormControl<string | null | undefined>,
		publicKey: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRepresentationFormGroup() {
		return new FormGroup<CertificateRepresentationFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			kid: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientInitialAccessCreatePresentation {
		count?: number | null;
		expiration?: number | null;
	}
	export interface ClientInitialAccessCreatePresentationFormProperties {
		count: FormControl<number | null | undefined>,
		expiration: FormControl<number | null | undefined>,
	}
	export function CreateClientInitialAccessCreatePresentationFormGroup() {
		return new FormGroup<ClientInitialAccessCreatePresentationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			expiration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientInitialAccessPresentation {
		count?: number | null;
		expiration?: number | null;
		id?: string | null;
		remainingCount?: number | null;
		timestamp?: number | null;
		token?: string | null;
	}
	export interface ClientInitialAccessPresentationFormProperties {
		count: FormControl<number | null | undefined>,
		expiration: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		remainingCount: FormControl<number | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateClientInitialAccessPresentationFormGroup() {
		return new FormGroup<ClientInitialAccessPresentationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			expiration: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			remainingCount: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientMappingsRepresentation {
		client?: string | null;
		id?: string | null;
		mappings?: Array<RoleRepresentation>;
	}
	export interface ClientMappingsRepresentationFormProperties {
		client: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateClientMappingsRepresentationFormGroup() {
		return new FormGroup<ClientMappingsRepresentationFormProperties>({
			client: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoleRepresentation {
		attributes?: string | null;
		clientRole?: boolean | null;
		composite?: boolean | null;
		composites?: RoleRepresentation_Composites;
		containerId?: string | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface RoleRepresentationFormProperties {
		attributes: FormControl<string | null | undefined>,
		clientRole: FormControl<boolean | null | undefined>,
		composite: FormControl<boolean | null | undefined>,
		containerId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleRepresentationFormGroup() {
		return new FormGroup<RoleRepresentationFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			clientRole: new FormControl<boolean | null | undefined>(undefined),
			composite: new FormControl<boolean | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoleRepresentation_Composites {
		client?: string | null;
		realm?: Array<string>;
	}
	export interface RoleRepresentation_CompositesFormProperties {
		client: FormControl<string | null | undefined>,
	}
	export function CreateRoleRepresentation_CompositesFormGroup() {
		return new FormGroup<RoleRepresentation_CompositesFormProperties>({
			client: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientRepresentation {
		access?: string | null;
		adminUrl?: string | null;
		alwaysDisplayInConsole?: boolean | null;
		attributes?: string | null;
		authenticationFlowBindingOverrides?: string | null;
		authorizationServicesEnabled?: boolean | null;
		authorizationSettings?: ResourceServerRepresentation;
		baseUrl?: string | null;
		bearerOnly?: boolean | null;
		clientAuthenticatorType?: string | null;
		clientId?: string | null;
		consentRequired?: boolean | null;
		defaultClientScopes?: Array<string>;
		defaultRoles?: Array<string>;
		description?: string | null;
		directAccessGrantsEnabled?: boolean | null;
		enabled?: boolean | null;
		frontchannelLogout?: boolean | null;
		fullScopeAllowed?: boolean | null;
		id?: string | null;
		implicitFlowEnabled?: boolean | null;
		name?: string | null;
		nodeReRegistrationTimeout?: number | null;
		notBefore?: number | null;
		optionalClientScopes?: Array<string>;
		origin?: string | null;
		protocol?: string | null;
		protocolMappers?: Array<ProtocolMapperRepresentation>;
		publicClient?: boolean | null;
		redirectUris?: Array<string>;
		registeredNodes?: string | null;
		registrationAccessToken?: string | null;
		rootUrl?: string | null;
		secret?: string | null;
		serviceAccountsEnabled?: boolean | null;
		standardFlowEnabled?: boolean | null;
		surrogateAuthRequired?: boolean | null;
		webOrigins?: Array<string>;
	}
	export interface ClientRepresentationFormProperties {
		access: FormControl<string | null | undefined>,
		adminUrl: FormControl<string | null | undefined>,
		alwaysDisplayInConsole: FormControl<boolean | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		authenticationFlowBindingOverrides: FormControl<string | null | undefined>,
		authorizationServicesEnabled: FormControl<boolean | null | undefined>,
		baseUrl: FormControl<string | null | undefined>,
		bearerOnly: FormControl<boolean | null | undefined>,
		clientAuthenticatorType: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		consentRequired: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		directAccessGrantsEnabled: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		frontchannelLogout: FormControl<boolean | null | undefined>,
		fullScopeAllowed: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		implicitFlowEnabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		nodeReRegistrationTimeout: FormControl<number | null | undefined>,
		notBefore: FormControl<number | null | undefined>,
		origin: FormControl<string | null | undefined>,
		protocol: FormControl<string | null | undefined>,
		publicClient: FormControl<boolean | null | undefined>,
		registeredNodes: FormControl<string | null | undefined>,
		registrationAccessToken: FormControl<string | null | undefined>,
		rootUrl: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,
		serviceAccountsEnabled: FormControl<boolean | null | undefined>,
		standardFlowEnabled: FormControl<boolean | null | undefined>,
		surrogateAuthRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateClientRepresentationFormGroup() {
		return new FormGroup<ClientRepresentationFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			adminUrl: new FormControl<string | null | undefined>(undefined),
			alwaysDisplayInConsole: new FormControl<boolean | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			authenticationFlowBindingOverrides: new FormControl<string | null | undefined>(undefined),
			authorizationServicesEnabled: new FormControl<boolean | null | undefined>(undefined),
			baseUrl: new FormControl<string | null | undefined>(undefined),
			bearerOnly: new FormControl<boolean | null | undefined>(undefined),
			clientAuthenticatorType: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			consentRequired: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			directAccessGrantsEnabled: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			frontchannelLogout: new FormControl<boolean | null | undefined>(undefined),
			fullScopeAllowed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			implicitFlowEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeReRegistrationTimeout: new FormControl<number | null | undefined>(undefined),
			notBefore: new FormControl<number | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			publicClient: new FormControl<boolean | null | undefined>(undefined),
			registeredNodes: new FormControl<string | null | undefined>(undefined),
			registrationAccessToken: new FormControl<string | null | undefined>(undefined),
			rootUrl: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			serviceAccountsEnabled: new FormControl<boolean | null | undefined>(undefined),
			standardFlowEnabled: new FormControl<boolean | null | undefined>(undefined),
			surrogateAuthRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResourceServerRepresentation {
		allowRemoteResourceManagement?: boolean | null;
		clientId?: string | null;
		decisionStrategy?: ResourceServerRepresentationDecisionStrategy | null;
		id?: string | null;
		name?: string | null;
		policies?: Array<PolicyRepresentation>;
		policyEnforcementMode?: ResourceServerRepresentationPolicyEnforcementMode | null;
		resources?: Array<ResourceRepresentation>;
		scopes?: Array<ScopeRepresentation>;
	}
	export interface ResourceServerRepresentationFormProperties {
		allowRemoteResourceManagement: FormControl<boolean | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		decisionStrategy: FormControl<ResourceServerRepresentationDecisionStrategy | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		policyEnforcementMode: FormControl<ResourceServerRepresentationPolicyEnforcementMode | null | undefined>,
	}
	export function CreateResourceServerRepresentationFormGroup() {
		return new FormGroup<ResourceServerRepresentationFormProperties>({
			allowRemoteResourceManagement: new FormControl<boolean | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			decisionStrategy: new FormControl<ResourceServerRepresentationDecisionStrategy | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyEnforcementMode: new FormControl<ResourceServerRepresentationPolicyEnforcementMode | null | undefined>(undefined),
		});

	}

	export enum ResourceServerRepresentationDecisionStrategy { AFFIRMATIVE = 'AFFIRMATIVE', UNANIMOUS = 'UNANIMOUS', CONSENSUS = 'CONSENSUS' }

	export interface PolicyRepresentation {
		config?: string | null;
		decisionStrategy?: ResourceServerRepresentationDecisionStrategy | null;
		description?: string | null;
		id?: string | null;
		logic?: PolicyRepresentationLogic | null;
		name?: string | null;
		owner?: string | null;
		policies?: Array<string>;
		resources?: Array<string>;
		resourcesData?: Array<ResourceRepresentation>;
		scopes?: Array<string>;
		scopesData?: Array<ScopeRepresentation>;
		type?: string | null;
	}
	export interface PolicyRepresentationFormProperties {
		config: FormControl<string | null | undefined>,
		decisionStrategy: FormControl<ResourceServerRepresentationDecisionStrategy | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		logic: FormControl<PolicyRepresentationLogic | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePolicyRepresentationFormGroup() {
		return new FormGroup<PolicyRepresentationFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			decisionStrategy: new FormControl<ResourceServerRepresentationDecisionStrategy | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logic: new FormControl<PolicyRepresentationLogic | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyRepresentationLogic { POSITIVE = 'POSITIVE', NEGATIVE = 'NEGATIVE' }

	export interface ResourceRepresentation {
		attributes?: string | null;
		displayName?: string | null;
		icon_uri?: string | null;
		id?: string | null;
		name?: string | null;
		ownerManagedAccess?: boolean | null;
		scopes?: Array<ScopeRepresentation>;
		type?: string | null;
		uris?: Array<string>;
	}
	export interface ResourceRepresentationFormProperties {
		attributes: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		icon_uri: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ownerManagedAccess: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceRepresentationFormGroup() {
		return new FormGroup<ResourceRepresentationFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			icon_uri: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerManagedAccess: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScopeRepresentation {
		displayName?: string | null;
		iconUri?: string | null;
		id?: string | null;
		name?: string | null;
		policies?: Array<PolicyRepresentation>;
		resources?: Array<ResourceRepresentation>;
	}
	export interface ScopeRepresentationFormProperties {
		displayName: FormControl<string | null | undefined>,
		iconUri: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateScopeRepresentationFormGroup() {
		return new FormGroup<ScopeRepresentationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			iconUri: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceServerRepresentationPolicyEnforcementMode { ENFORCING = 'ENFORCING', PERMISSIVE = 'PERMISSIVE', DISABLED = 'DISABLED' }

	export interface ProtocolMapperRepresentation {
		config?: string | null;
		id?: string | null;
		name?: string | null;
		protocol?: string | null;
		protocolMapper?: string | null;
	}
	export interface ProtocolMapperRepresentationFormProperties {
		config: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		protocol: FormControl<string | null | undefined>,
		protocolMapper: FormControl<string | null | undefined>,
	}
	export function CreateProtocolMapperRepresentationFormGroup() {
		return new FormGroup<ProtocolMapperRepresentationFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			protocolMapper: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientScopeEvaluateResource_ProtocolMapperEvaluationRepresentation {
		containerId?: string | null;
		containerName?: string | null;
		containerType?: string | null;
		mapperId?: string | null;
		mapperName?: string | null;
		protocolMapper?: string | null;
	}
	export interface ClientScopeEvaluateResource_ProtocolMapperEvaluationRepresentationFormProperties {
		containerId: FormControl<string | null | undefined>,
		containerName: FormControl<string | null | undefined>,
		containerType: FormControl<string | null | undefined>,
		mapperId: FormControl<string | null | undefined>,
		mapperName: FormControl<string | null | undefined>,
		protocolMapper: FormControl<string | null | undefined>,
	}
	export function CreateClientScopeEvaluateResource_ProtocolMapperEvaluationRepresentationFormGroup() {
		return new FormGroup<ClientScopeEvaluateResource_ProtocolMapperEvaluationRepresentationFormProperties>({
			containerId: new FormControl<string | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			containerType: new FormControl<string | null | undefined>(undefined),
			mapperId: new FormControl<string | null | undefined>(undefined),
			mapperName: new FormControl<string | null | undefined>(undefined),
			protocolMapper: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientScopeRepresentation {
		attributes?: string | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
		protocol?: string | null;
		protocolMappers?: Array<ProtocolMapperRepresentation>;
	}
	export interface ClientScopeRepresentationFormProperties {
		attributes: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		protocol: FormControl<string | null | undefined>,
	}
	export function CreateClientScopeRepresentationFormGroup() {
		return new FormGroup<ClientScopeRepresentationFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentExportRepresentation {
		config?: MultivaluedHashMap;
		id?: string | null;
		name?: string | null;
		providerId?: string | null;
		subComponents?: MultivaluedHashMap;
		subType?: string | null;
	}
	export interface ComponentExportRepresentationFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
		subType: FormControl<string | null | undefined>,
	}
	export function CreateComponentExportRepresentationFormGroup() {
		return new FormGroup<ComponentExportRepresentationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			subType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MultivaluedHashMap {
		empty?: boolean | null;
		loadFactor?: number | null;
		threshold?: number | null;
	}
	export interface MultivaluedHashMapFormProperties {
		empty: FormControl<boolean | null | undefined>,
		loadFactor: FormControl<number | null | undefined>,
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateMultivaluedHashMapFormGroup() {
		return new FormGroup<MultivaluedHashMapFormProperties>({
			empty: new FormControl<boolean | null | undefined>(undefined),
			loadFactor: new FormControl<number | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ComponentRepresentation {
		config?: MultivaluedHashMap;
		id?: string | null;
		name?: string | null;
		parentId?: string | null;
		providerId?: string | null;
		providerType?: string | null;
		subType?: string | null;
	}
	export interface ComponentRepresentationFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parentId: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
		providerType: FormControl<string | null | undefined>,
		subType: FormControl<string | null | undefined>,
	}
	export function CreateComponentRepresentationFormGroup() {
		return new FormGroup<ComponentRepresentationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			providerType: new FormControl<string | null | undefined>(undefined),
			subType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentTypeRepresentation {
		helpText?: string | null;
		id?: string | null;
		metadata?: string | null;
		properties?: Array<ConfigPropertyRepresentation>;
	}
	export interface ComponentTypeRepresentationFormProperties {
		helpText: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateComponentTypeRepresentationFormGroup() {
		return new FormGroup<ComponentTypeRepresentationFormProperties>({
			helpText: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialRepresentation {
		createdDate?: number | null;
		credentialData?: string | null;
		id?: string | null;
		priority?: number | null;
		secretData?: string | null;
		temporary?: boolean | null;
		type?: string | null;
		userLabel?: string | null;
		value?: string | null;
	}
	export interface CredentialRepresentationFormProperties {
		createdDate: FormControl<number | null | undefined>,
		credentialData: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		secretData: FormControl<string | null | undefined>,
		temporary: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
		userLabel: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCredentialRepresentationFormGroup() {
		return new FormGroup<CredentialRepresentationFormProperties>({
			createdDate: new FormControl<number | null | undefined>(undefined),
			credentialData: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			secretData: new FormControl<string | null | undefined>(undefined),
			temporary: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userLabel: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventRepresentation {
		clientId?: string | null;
		details?: string | null;
		error?: string | null;
		ipAddress?: string | null;
		realmId?: string | null;
		sessionId?: string | null;
		time?: number | null;
		type?: string | null;
		userId?: string | null;
	}
	export interface EventRepresentationFormProperties {
		clientId: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		realmId: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		time: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateEventRepresentationFormGroup() {
		return new FormGroup<EventRepresentationFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			realmId: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FederatedIdentityRepresentation {
		identityProvider?: string | null;
		userId?: string | null;
		userName?: string | null;
	}
	export interface FederatedIdentityRepresentationFormProperties {
		identityProvider: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateFederatedIdentityRepresentationFormGroup() {
		return new FormGroup<FederatedIdentityRepresentationFormProperties>({
			identityProvider: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlobalRequestResult {
		failedRequests?: Array<string>;
		successRequests?: Array<string>;
	}
	export interface GlobalRequestResultFormProperties {
	}
	export function CreateGlobalRequestResultFormGroup() {
		return new FormGroup<GlobalRequestResultFormProperties>({
		});

	}

	export interface GroupRepresentation {
		access?: string | null;
		attributes?: string | null;
		clientRoles?: string | null;
		id?: string | null;
		name?: string | null;
		path?: string | null;
		realmRoles?: Array<string>;
		subGroups?: Array<GroupRepresentation>;
	}
	export interface GroupRepresentationFormProperties {
		access: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		clientRoles: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateGroupRepresentationFormGroup() {
		return new FormGroup<GroupRepresentationFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			clientRoles: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdentityProviderMapperRepresentation {
		config?: string | null;
		id?: string | null;
		identityProviderAlias?: string | null;
		identityProviderMapper?: string | null;
		name?: string | null;
	}
	export interface IdentityProviderMapperRepresentationFormProperties {
		config: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		identityProviderAlias: FormControl<string | null | undefined>,
		identityProviderMapper: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateIdentityProviderMapperRepresentationFormGroup() {
		return new FormGroup<IdentityProviderMapperRepresentationFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			identityProviderAlias: new FormControl<string | null | undefined>(undefined),
			identityProviderMapper: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdentityProviderRepresentation {
		addReadTokenRoleOnCreate?: boolean | null;
		alias?: string | null;
		config?: string | null;
		displayName?: string | null;
		enabled?: boolean | null;
		firstBrokerLoginFlowAlias?: string | null;
		internalId?: string | null;
		linkOnly?: boolean | null;
		postBrokerLoginFlowAlias?: string | null;
		providerId?: string | null;
		storeToken?: boolean | null;
		trustEmail?: boolean | null;
	}
	export interface IdentityProviderRepresentationFormProperties {
		addReadTokenRoleOnCreate: FormControl<boolean | null | undefined>,
		alias: FormControl<string | null | undefined>,
		config: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		firstBrokerLoginFlowAlias: FormControl<string | null | undefined>,
		internalId: FormControl<string | null | undefined>,
		linkOnly: FormControl<boolean | null | undefined>,
		postBrokerLoginFlowAlias: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
		storeToken: FormControl<boolean | null | undefined>,
		trustEmail: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentityProviderRepresentationFormGroup() {
		return new FormGroup<IdentityProviderRepresentationFormProperties>({
			addReadTokenRoleOnCreate: new FormControl<boolean | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			firstBrokerLoginFlowAlias: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<string | null | undefined>(undefined),
			linkOnly: new FormControl<boolean | null | undefined>(undefined),
			postBrokerLoginFlowAlias: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			storeToken: new FormControl<boolean | null | undefined>(undefined),
			trustEmail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface KeyStoreConfig {
		format?: string | null;
		keyAlias?: string | null;
		keyPassword?: string | null;
		realmAlias?: string | null;
		realmCertificate?: boolean | null;
		storePassword?: string | null;
	}
	export interface KeyStoreConfigFormProperties {
		format: FormControl<string | null | undefined>,
		keyAlias: FormControl<string | null | undefined>,
		keyPassword: FormControl<string | null | undefined>,
		realmAlias: FormControl<string | null | undefined>,
		realmCertificate: FormControl<boolean | null | undefined>,
		storePassword: FormControl<string | null | undefined>,
	}
	export function CreateKeyStoreConfigFormGroup() {
		return new FormGroup<KeyStoreConfigFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			keyAlias: new FormControl<string | null | undefined>(undefined),
			keyPassword: new FormControl<string | null | undefined>(undefined),
			realmAlias: new FormControl<string | null | undefined>(undefined),
			realmCertificate: new FormControl<boolean | null | undefined>(undefined),
			storePassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeysMetadataRepresentation {
		active?: string | null;
		keys?: Array<KeysMetadataRepresentation_KeyMetadataRepresentation>;
	}
	export interface KeysMetadataRepresentationFormProperties {
		active: FormControl<string | null | undefined>,
	}
	export function CreateKeysMetadataRepresentationFormGroup() {
		return new FormGroup<KeysMetadataRepresentationFormProperties>({
			active: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeysMetadataRepresentation_KeyMetadataRepresentation {
		algorithm?: string | null;
		certificate?: string | null;
		kid?: string | null;
		providerId?: string | null;
		providerPriority?: number | null;
		publicKey?: string | null;
		status?: string | null;
		type?: string | null;
	}
	export interface KeysMetadataRepresentation_KeyMetadataRepresentationFormProperties {
		algorithm: FormControl<string | null | undefined>,
		certificate: FormControl<string | null | undefined>,
		kid: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
		providerPriority: FormControl<number | null | undefined>,
		publicKey: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateKeysMetadataRepresentation_KeyMetadataRepresentationFormGroup() {
		return new FormGroup<KeysMetadataRepresentation_KeyMetadataRepresentationFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined),
			kid: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			providerPriority: new FormControl<number | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagementPermissionReference {
		enabled?: boolean | null;
		resource?: string | null;
		scopePermissions?: string | null;
	}
	export interface ManagementPermissionReferenceFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		resource: FormControl<string | null | undefined>,
		scopePermissions: FormControl<string | null | undefined>,
	}
	export function CreateManagementPermissionReferenceFormGroup() {
		return new FormGroup<ManagementPermissionReferenceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			scopePermissions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MappingsRepresentation {
		clientMappings?: string | null;
		realmMappings?: Array<RoleRepresentation>;
	}
	export interface MappingsRepresentationFormProperties {
		clientMappings: FormControl<string | null | undefined>,
	}
	export function CreateMappingsRepresentationFormGroup() {
		return new FormGroup<MappingsRepresentationFormProperties>({
			clientMappings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemoryInfoRepresentation {
		free?: number | null;
		freeFormated?: string | null;
		freePercentage?: number | null;
		total?: number | null;
		totalFormated?: string | null;
		used?: number | null;
		usedFormated?: string | null;
	}
	export interface MemoryInfoRepresentationFormProperties {
		free: FormControl<number | null | undefined>,
		freeFormated: FormControl<string | null | undefined>,
		freePercentage: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalFormated: FormControl<string | null | undefined>,
		used: FormControl<number | null | undefined>,
		usedFormated: FormControl<string | null | undefined>,
	}
	export function CreateMemoryInfoRepresentationFormGroup() {
		return new FormGroup<MemoryInfoRepresentationFormProperties>({
			free: new FormControl<number | null | undefined>(undefined),
			freeFormated: new FormControl<string | null | undefined>(undefined),
			freePercentage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalFormated: new FormControl<string | null | undefined>(undefined),
			used: new FormControl<number | null | undefined>(undefined),
			usedFormated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartialImportRepresentation {
		clients?: Array<ClientRepresentation>;
		groups?: Array<GroupRepresentation>;
		identityProviders?: Array<IdentityProviderRepresentation>;
		ifResourceExists?: string | null;
		policy?: PartialImportRepresentationPolicy | null;
		roles?: RolesRepresentation;
		users?: Array<UserRepresentation>;
	}
	export interface PartialImportRepresentationFormProperties {
		ifResourceExists: FormControl<string | null | undefined>,
		policy: FormControl<PartialImportRepresentationPolicy | null | undefined>,
	}
	export function CreatePartialImportRepresentationFormGroup() {
		return new FormGroup<PartialImportRepresentationFormProperties>({
			ifResourceExists: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<PartialImportRepresentationPolicy | null | undefined>(undefined),
		});

	}

	export enum PartialImportRepresentationPolicy { SKIP = 'SKIP', OVERWRITE = 'OVERWRITE', FAIL = 'FAIL' }

	export interface RolesRepresentation {
		client?: string | null;
		realm?: Array<RoleRepresentation>;
	}
	export interface RolesRepresentationFormProperties {
		client: FormControl<string | null | undefined>,
	}
	export function CreateRolesRepresentationFormGroup() {
		return new FormGroup<RolesRepresentationFormProperties>({
			client: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserRepresentation {
		access?: string | null;
		attributes?: string | null;
		clientConsents?: Array<UserConsentRepresentation>;
		clientRoles?: string | null;
		createdTimestamp?: number | null;
		credentials?: Array<CredentialRepresentation>;
		disableableCredentialTypes?: Array<string>;
		email?: string | null;
		emailVerified?: boolean | null;
		enabled?: boolean | null;
		federatedIdentities?: Array<FederatedIdentityRepresentation>;
		federationLink?: string | null;
		firstName?: string | null;
		groups?: Array<string>;
		id?: string | null;
		lastName?: string | null;
		notBefore?: number | null;
		origin?: string | null;
		realmRoles?: Array<string>;
		requiredActions?: Array<string>;
		self?: string | null;
		serviceAccountClientId?: string | null;
		username?: string | null;
	}
	export interface UserRepresentationFormProperties {
		access: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		clientRoles: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<number | null | undefined>,
		email: FormControl<string | null | undefined>,
		emailVerified: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		federationLink: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		notBefore: FormControl<number | null | undefined>,
		origin: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		serviceAccountClientId: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserRepresentationFormGroup() {
		return new FormGroup<UserRepresentationFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			clientRoles: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			federationLink: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			notBefore: new FormControl<number | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			serviceAccountClientId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserConsentRepresentation {
		clientId?: string | null;
		createdDate?: number | null;
		grantedClientScopes?: Array<string>;
		lastUpdatedDate?: number | null;
	}
	export interface UserConsentRepresentationFormProperties {
		clientId: FormControl<string | null | undefined>,
		createdDate: FormControl<number | null | undefined>,
		lastUpdatedDate: FormControl<number | null | undefined>,
	}
	export function CreateUserConsentRepresentationFormGroup() {
		return new FormGroup<UserConsentRepresentationFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<number | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PasswordPolicyTypeRepresentation {
		configType?: string | null;
		defaultValue?: string | null;
		displayName?: string | null;
		id?: string | null;
		multipleSupported?: boolean | null;
	}
	export interface PasswordPolicyTypeRepresentationFormProperties {
		configType: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		multipleSupported: FormControl<boolean | null | undefined>,
	}
	export function CreatePasswordPolicyTypeRepresentationFormGroup() {
		return new FormGroup<PasswordPolicyTypeRepresentationFormProperties>({
			configType: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			multipleSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProfileInfoRepresentation {
		disabledFeatures?: Array<string>;
		experimentalFeatures?: Array<string>;
		name?: string | null;
		previewFeatures?: Array<string>;
	}
	export interface ProfileInfoRepresentationFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateProfileInfoRepresentationFormGroup() {
		return new FormGroup<ProfileInfoRepresentationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProviderRepresentation {
		operationalInfo?: string | null;
		order?: number | null;
	}
	export interface ProviderRepresentationFormProperties {
		operationalInfo: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
	}
	export function CreateProviderRepresentationFormGroup() {
		return new FormGroup<ProviderRepresentationFormProperties>({
			operationalInfo: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RealmEventsConfigRepresentation {
		adminEventsDetailsEnabled?: boolean | null;
		adminEventsEnabled?: boolean | null;
		enabledEventTypes?: Array<string>;
		eventsEnabled?: boolean | null;
		eventsExpiration?: number | null;
		eventsListeners?: Array<string>;
	}
	export interface RealmEventsConfigRepresentationFormProperties {
		adminEventsDetailsEnabled: FormControl<boolean | null | undefined>,
		adminEventsEnabled: FormControl<boolean | null | undefined>,
		eventsEnabled: FormControl<boolean | null | undefined>,
		eventsExpiration: FormControl<number | null | undefined>,
	}
	export function CreateRealmEventsConfigRepresentationFormGroup() {
		return new FormGroup<RealmEventsConfigRepresentationFormProperties>({
			adminEventsDetailsEnabled: new FormControl<boolean | null | undefined>(undefined),
			adminEventsEnabled: new FormControl<boolean | null | undefined>(undefined),
			eventsEnabled: new FormControl<boolean | null | undefined>(undefined),
			eventsExpiration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RealmRepresentation {
		accessCodeLifespan?: number | null;
		accessCodeLifespanLogin?: number | null;
		accessCodeLifespanUserAction?: number | null;
		accessTokenLifespan?: number | null;
		accessTokenLifespanForImplicitFlow?: number | null;
		accountTheme?: string | null;
		actionTokenGeneratedByAdminLifespan?: number | null;
		actionTokenGeneratedByUserLifespan?: number | null;
		adminEventsDetailsEnabled?: boolean | null;
		adminEventsEnabled?: boolean | null;
		adminTheme?: string | null;
		attributes?: string | null;
		authenticationFlows?: Array<AuthenticationFlowRepresentation>;
		authenticatorConfig?: Array<AuthenticatorConfigRepresentation>;
		browserFlow?: string | null;
		browserSecurityHeaders?: string | null;
		bruteForceProtected?: boolean | null;
		clientAuthenticationFlow?: string | null;
		clientScopeMappings?: string | null;
		clientScopes?: Array<ClientScopeRepresentation>;
		clientSessionIdleTimeout?: number | null;
		clientSessionMaxLifespan?: number | null;
		clients?: Array<ClientRepresentation>;
		components?: MultivaluedHashMap;
		defaultDefaultClientScopes?: Array<string>;
		defaultGroups?: Array<string>;
		defaultLocale?: string | null;
		defaultOptionalClientScopes?: Array<string>;
		defaultRoles?: Array<string>;
		defaultSignatureAlgorithm?: string | null;
		directGrantFlow?: string | null;
		displayName?: string | null;
		displayNameHtml?: string | null;
		dockerAuthenticationFlow?: string | null;
		duplicateEmailsAllowed?: boolean | null;
		editUsernameAllowed?: boolean | null;
		emailTheme?: string | null;
		enabled?: boolean | null;
		enabledEventTypes?: Array<string>;
		eventsEnabled?: boolean | null;
		eventsExpiration?: number | null;
		eventsListeners?: Array<string>;
		failureFactor?: number | null;
		federatedUsers?: Array<UserRepresentation>;
		groups?: Array<GroupRepresentation>;
		id?: string | null;
		identityProviderMappers?: Array<IdentityProviderMapperRepresentation>;
		identityProviders?: Array<IdentityProviderRepresentation>;
		internationalizationEnabled?: boolean | null;
		keycloakVersion?: string | null;
		loginTheme?: string | null;
		loginWithEmailAllowed?: boolean | null;
		maxDeltaTimeSeconds?: number | null;
		maxFailureWaitSeconds?: number | null;
		minimumQuickLoginWaitSeconds?: number | null;
		notBefore?: number | null;
		offlineSessionIdleTimeout?: number | null;
		offlineSessionMaxLifespan?: number | null;
		offlineSessionMaxLifespanEnabled?: boolean | null;
		otpPolicyAlgorithm?: string | null;
		otpPolicyDigits?: number | null;
		otpPolicyInitialCounter?: number | null;
		otpPolicyLookAheadWindow?: number | null;
		otpPolicyPeriod?: number | null;
		otpPolicyType?: string | null;
		otpSupportedApplications?: Array<string>;
		passwordPolicy?: string | null;
		permanentLockout?: boolean | null;
		protocolMappers?: Array<ProtocolMapperRepresentation>;
		quickLoginCheckMilliSeconds?: number | null;
		realm?: string | null;
		refreshTokenMaxReuse?: number | null;
		registrationAllowed?: boolean | null;
		registrationEmailAsUsername?: boolean | null;
		registrationFlow?: string | null;
		rememberMe?: boolean | null;
		requiredActions?: Array<RequiredActionProviderRepresentation>;
		resetCredentialsFlow?: string | null;
		resetPasswordAllowed?: boolean | null;
		revokeRefreshToken?: boolean | null;
		roles?: RolesRepresentation;
		scopeMappings?: Array<ScopeMappingRepresentation>;
		smtpServer?: string | null;
		sslRequired?: string | null;
		ssoSessionIdleTimeout?: number | null;
		ssoSessionIdleTimeoutRememberMe?: number | null;
		ssoSessionMaxLifespan?: number | null;
		ssoSessionMaxLifespanRememberMe?: number | null;
		supportedLocales?: Array<string>;
		userFederationMappers?: Array<UserFederationMapperRepresentation>;
		userFederationProviders?: Array<UserFederationProviderRepresentation>;
		userManagedAccessAllowed?: boolean | null;
		users?: Array<UserRepresentation>;
		verifyEmail?: boolean | null;
		waitIncrementSeconds?: number | null;
		webAuthnPolicyAcceptableAaguids?: Array<string>;
		webAuthnPolicyAttestationConveyancePreference?: string | null;
		webAuthnPolicyAuthenticatorAttachment?: string | null;
		webAuthnPolicyAvoidSameAuthenticatorRegister?: boolean | null;
		webAuthnPolicyCreateTimeout?: number | null;
		webAuthnPolicyPasswordlessAcceptableAaguids?: Array<string>;
		webAuthnPolicyPasswordlessAttestationConveyancePreference?: string | null;
		webAuthnPolicyPasswordlessAuthenticatorAttachment?: string | null;
		webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister?: boolean | null;
		webAuthnPolicyPasswordlessCreateTimeout?: number | null;
		webAuthnPolicyPasswordlessRequireResidentKey?: string | null;
		webAuthnPolicyPasswordlessRpEntityName?: string | null;
		webAuthnPolicyPasswordlessRpId?: string | null;
		webAuthnPolicyPasswordlessSignatureAlgorithms?: Array<string>;
		webAuthnPolicyPasswordlessUserVerificationRequirement?: string | null;
		webAuthnPolicyRequireResidentKey?: string | null;
		webAuthnPolicyRpEntityName?: string | null;
		webAuthnPolicyRpId?: string | null;
		webAuthnPolicySignatureAlgorithms?: Array<string>;
		webAuthnPolicyUserVerificationRequirement?: string | null;
	}
	export interface RealmRepresentationFormProperties {
		accessCodeLifespan: FormControl<number | null | undefined>,
		accessCodeLifespanLogin: FormControl<number | null | undefined>,
		accessCodeLifespanUserAction: FormControl<number | null | undefined>,
		accessTokenLifespan: FormControl<number | null | undefined>,
		accessTokenLifespanForImplicitFlow: FormControl<number | null | undefined>,
		accountTheme: FormControl<string | null | undefined>,
		actionTokenGeneratedByAdminLifespan: FormControl<number | null | undefined>,
		actionTokenGeneratedByUserLifespan: FormControl<number | null | undefined>,
		adminEventsDetailsEnabled: FormControl<boolean | null | undefined>,
		adminEventsEnabled: FormControl<boolean | null | undefined>,
		adminTheme: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		browserFlow: FormControl<string | null | undefined>,
		browserSecurityHeaders: FormControl<string | null | undefined>,
		bruteForceProtected: FormControl<boolean | null | undefined>,
		clientAuthenticationFlow: FormControl<string | null | undefined>,
		clientScopeMappings: FormControl<string | null | undefined>,
		clientSessionIdleTimeout: FormControl<number | null | undefined>,
		clientSessionMaxLifespan: FormControl<number | null | undefined>,
		defaultLocale: FormControl<string | null | undefined>,
		defaultSignatureAlgorithm: FormControl<string | null | undefined>,
		directGrantFlow: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		displayNameHtml: FormControl<string | null | undefined>,
		dockerAuthenticationFlow: FormControl<string | null | undefined>,
		duplicateEmailsAllowed: FormControl<boolean | null | undefined>,
		editUsernameAllowed: FormControl<boolean | null | undefined>,
		emailTheme: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		eventsEnabled: FormControl<boolean | null | undefined>,
		eventsExpiration: FormControl<number | null | undefined>,
		failureFactor: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		internationalizationEnabled: FormControl<boolean | null | undefined>,
		keycloakVersion: FormControl<string | null | undefined>,
		loginTheme: FormControl<string | null | undefined>,
		loginWithEmailAllowed: FormControl<boolean | null | undefined>,
		maxDeltaTimeSeconds: FormControl<number | null | undefined>,
		maxFailureWaitSeconds: FormControl<number | null | undefined>,
		minimumQuickLoginWaitSeconds: FormControl<number | null | undefined>,
		notBefore: FormControl<number | null | undefined>,
		offlineSessionIdleTimeout: FormControl<number | null | undefined>,
		offlineSessionMaxLifespan: FormControl<number | null | undefined>,
		offlineSessionMaxLifespanEnabled: FormControl<boolean | null | undefined>,
		otpPolicyAlgorithm: FormControl<string | null | undefined>,
		otpPolicyDigits: FormControl<number | null | undefined>,
		otpPolicyInitialCounter: FormControl<number | null | undefined>,
		otpPolicyLookAheadWindow: FormControl<number | null | undefined>,
		otpPolicyPeriod: FormControl<number | null | undefined>,
		otpPolicyType: FormControl<string | null | undefined>,
		passwordPolicy: FormControl<string | null | undefined>,
		permanentLockout: FormControl<boolean | null | undefined>,
		quickLoginCheckMilliSeconds: FormControl<number | null | undefined>,
		realm: FormControl<string | null | undefined>,
		refreshTokenMaxReuse: FormControl<number | null | undefined>,
		registrationAllowed: FormControl<boolean | null | undefined>,
		registrationEmailAsUsername: FormControl<boolean | null | undefined>,
		registrationFlow: FormControl<string | null | undefined>,
		rememberMe: FormControl<boolean | null | undefined>,
		resetCredentialsFlow: FormControl<string | null | undefined>,
		resetPasswordAllowed: FormControl<boolean | null | undefined>,
		revokeRefreshToken: FormControl<boolean | null | undefined>,
		smtpServer: FormControl<string | null | undefined>,
		sslRequired: FormControl<string | null | undefined>,
		ssoSessionIdleTimeout: FormControl<number | null | undefined>,
		ssoSessionIdleTimeoutRememberMe: FormControl<number | null | undefined>,
		ssoSessionMaxLifespan: FormControl<number | null | undefined>,
		ssoSessionMaxLifespanRememberMe: FormControl<number | null | undefined>,
		userManagedAccessAllowed: FormControl<boolean | null | undefined>,
		verifyEmail: FormControl<boolean | null | undefined>,
		waitIncrementSeconds: FormControl<number | null | undefined>,
		webAuthnPolicyAttestationConveyancePreference: FormControl<string | null | undefined>,
		webAuthnPolicyAuthenticatorAttachment: FormControl<string | null | undefined>,
		webAuthnPolicyAvoidSameAuthenticatorRegister: FormControl<boolean | null | undefined>,
		webAuthnPolicyCreateTimeout: FormControl<number | null | undefined>,
		webAuthnPolicyPasswordlessAttestationConveyancePreference: FormControl<string | null | undefined>,
		webAuthnPolicyPasswordlessAuthenticatorAttachment: FormControl<string | null | undefined>,
		webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister: FormControl<boolean | null | undefined>,
		webAuthnPolicyPasswordlessCreateTimeout: FormControl<number | null | undefined>,
		webAuthnPolicyPasswordlessRequireResidentKey: FormControl<string | null | undefined>,
		webAuthnPolicyPasswordlessRpEntityName: FormControl<string | null | undefined>,
		webAuthnPolicyPasswordlessRpId: FormControl<string | null | undefined>,
		webAuthnPolicyPasswordlessUserVerificationRequirement: FormControl<string | null | undefined>,
		webAuthnPolicyRequireResidentKey: FormControl<string | null | undefined>,
		webAuthnPolicyRpEntityName: FormControl<string | null | undefined>,
		webAuthnPolicyRpId: FormControl<string | null | undefined>,
		webAuthnPolicyUserVerificationRequirement: FormControl<string | null | undefined>,
	}
	export function CreateRealmRepresentationFormGroup() {
		return new FormGroup<RealmRepresentationFormProperties>({
			accessCodeLifespan: new FormControl<number | null | undefined>(undefined),
			accessCodeLifespanLogin: new FormControl<number | null | undefined>(undefined),
			accessCodeLifespanUserAction: new FormControl<number | null | undefined>(undefined),
			accessTokenLifespan: new FormControl<number | null | undefined>(undefined),
			accessTokenLifespanForImplicitFlow: new FormControl<number | null | undefined>(undefined),
			accountTheme: new FormControl<string | null | undefined>(undefined),
			actionTokenGeneratedByAdminLifespan: new FormControl<number | null | undefined>(undefined),
			actionTokenGeneratedByUserLifespan: new FormControl<number | null | undefined>(undefined),
			adminEventsDetailsEnabled: new FormControl<boolean | null | undefined>(undefined),
			adminEventsEnabled: new FormControl<boolean | null | undefined>(undefined),
			adminTheme: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			browserFlow: new FormControl<string | null | undefined>(undefined),
			browserSecurityHeaders: new FormControl<string | null | undefined>(undefined),
			bruteForceProtected: new FormControl<boolean | null | undefined>(undefined),
			clientAuthenticationFlow: new FormControl<string | null | undefined>(undefined),
			clientScopeMappings: new FormControl<string | null | undefined>(undefined),
			clientSessionIdleTimeout: new FormControl<number | null | undefined>(undefined),
			clientSessionMaxLifespan: new FormControl<number | null | undefined>(undefined),
			defaultLocale: new FormControl<string | null | undefined>(undefined),
			defaultSignatureAlgorithm: new FormControl<string | null | undefined>(undefined),
			directGrantFlow: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			displayNameHtml: new FormControl<string | null | undefined>(undefined),
			dockerAuthenticationFlow: new FormControl<string | null | undefined>(undefined),
			duplicateEmailsAllowed: new FormControl<boolean | null | undefined>(undefined),
			editUsernameAllowed: new FormControl<boolean | null | undefined>(undefined),
			emailTheme: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			eventsEnabled: new FormControl<boolean | null | undefined>(undefined),
			eventsExpiration: new FormControl<number | null | undefined>(undefined),
			failureFactor: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internationalizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			keycloakVersion: new FormControl<string | null | undefined>(undefined),
			loginTheme: new FormControl<string | null | undefined>(undefined),
			loginWithEmailAllowed: new FormControl<boolean | null | undefined>(undefined),
			maxDeltaTimeSeconds: new FormControl<number | null | undefined>(undefined),
			maxFailureWaitSeconds: new FormControl<number | null | undefined>(undefined),
			minimumQuickLoginWaitSeconds: new FormControl<number | null | undefined>(undefined),
			notBefore: new FormControl<number | null | undefined>(undefined),
			offlineSessionIdleTimeout: new FormControl<number | null | undefined>(undefined),
			offlineSessionMaxLifespan: new FormControl<number | null | undefined>(undefined),
			offlineSessionMaxLifespanEnabled: new FormControl<boolean | null | undefined>(undefined),
			otpPolicyAlgorithm: new FormControl<string | null | undefined>(undefined),
			otpPolicyDigits: new FormControl<number | null | undefined>(undefined),
			otpPolicyInitialCounter: new FormControl<number | null | undefined>(undefined),
			otpPolicyLookAheadWindow: new FormControl<number | null | undefined>(undefined),
			otpPolicyPeriod: new FormControl<number | null | undefined>(undefined),
			otpPolicyType: new FormControl<string | null | undefined>(undefined),
			passwordPolicy: new FormControl<string | null | undefined>(undefined),
			permanentLockout: new FormControl<boolean | null | undefined>(undefined),
			quickLoginCheckMilliSeconds: new FormControl<number | null | undefined>(undefined),
			realm: new FormControl<string | null | undefined>(undefined),
			refreshTokenMaxReuse: new FormControl<number | null | undefined>(undefined),
			registrationAllowed: new FormControl<boolean | null | undefined>(undefined),
			registrationEmailAsUsername: new FormControl<boolean | null | undefined>(undefined),
			registrationFlow: new FormControl<string | null | undefined>(undefined),
			rememberMe: new FormControl<boolean | null | undefined>(undefined),
			resetCredentialsFlow: new FormControl<string | null | undefined>(undefined),
			resetPasswordAllowed: new FormControl<boolean | null | undefined>(undefined),
			revokeRefreshToken: new FormControl<boolean | null | undefined>(undefined),
			smtpServer: new FormControl<string | null | undefined>(undefined),
			sslRequired: new FormControl<string | null | undefined>(undefined),
			ssoSessionIdleTimeout: new FormControl<number | null | undefined>(undefined),
			ssoSessionIdleTimeoutRememberMe: new FormControl<number | null | undefined>(undefined),
			ssoSessionMaxLifespan: new FormControl<number | null | undefined>(undefined),
			ssoSessionMaxLifespanRememberMe: new FormControl<number | null | undefined>(undefined),
			userManagedAccessAllowed: new FormControl<boolean | null | undefined>(undefined),
			verifyEmail: new FormControl<boolean | null | undefined>(undefined),
			waitIncrementSeconds: new FormControl<number | null | undefined>(undefined),
			webAuthnPolicyAttestationConveyancePreference: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyAuthenticatorAttachment: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyAvoidSameAuthenticatorRegister: new FormControl<boolean | null | undefined>(undefined),
			webAuthnPolicyCreateTimeout: new FormControl<number | null | undefined>(undefined),
			webAuthnPolicyPasswordlessAttestationConveyancePreference: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyPasswordlessAuthenticatorAttachment: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister: new FormControl<boolean | null | undefined>(undefined),
			webAuthnPolicyPasswordlessCreateTimeout: new FormControl<number | null | undefined>(undefined),
			webAuthnPolicyPasswordlessRequireResidentKey: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyPasswordlessRpEntityName: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyPasswordlessRpId: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyPasswordlessUserVerificationRequirement: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyRequireResidentKey: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyRpEntityName: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyRpId: new FormControl<string | null | undefined>(undefined),
			webAuthnPolicyUserVerificationRequirement: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequiredActionProviderRepresentation {
		alias?: string | null;
		config?: string | null;
		defaultAction?: boolean | null;
		enabled?: boolean | null;
		name?: string | null;
		priority?: number | null;
		providerId?: string | null;
	}
	export interface RequiredActionProviderRepresentationFormProperties {
		alias: FormControl<string | null | undefined>,
		config: FormControl<string | null | undefined>,
		defaultAction: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		providerId: FormControl<string | null | undefined>,
	}
	export function CreateRequiredActionProviderRepresentationFormGroup() {
		return new FormGroup<RequiredActionProviderRepresentationFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			defaultAction: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScopeMappingRepresentation {
		client?: string | null;
		clientScope?: string | null;
		roles?: Array<string>;
		self?: string | null;
	}
	export interface ScopeMappingRepresentationFormProperties {
		client: FormControl<string | null | undefined>,
		clientScope: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateScopeMappingRepresentationFormGroup() {
		return new FormGroup<ScopeMappingRepresentationFormProperties>({
			client: new FormControl<string | null | undefined>(undefined),
			clientScope: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserFederationMapperRepresentation {
		config?: string | null;
		federationMapperType?: string | null;
		federationProviderDisplayName?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UserFederationMapperRepresentationFormProperties {
		config: FormControl<string | null | undefined>,
		federationMapperType: FormControl<string | null | undefined>,
		federationProviderDisplayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserFederationMapperRepresentationFormGroup() {
		return new FormGroup<UserFederationMapperRepresentationFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			federationMapperType: new FormControl<string | null | undefined>(undefined),
			federationProviderDisplayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserFederationProviderRepresentation {
		changedSyncPeriod?: number | null;
		config?: string | null;
		displayName?: string | null;
		fullSyncPeriod?: number | null;
		id?: string | null;
		lastSync?: number | null;
		priority?: number | null;
		providerName?: string | null;
	}
	export interface UserFederationProviderRepresentationFormProperties {
		changedSyncPeriod: FormControl<number | null | undefined>,
		config: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		fullSyncPeriod: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastSync: FormControl<number | null | undefined>,
		priority: FormControl<number | null | undefined>,
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateUserFederationProviderRepresentationFormGroup() {
		return new FormGroup<UserFederationProviderRepresentationFormProperties>({
			changedSyncPeriod: new FormControl<number | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fullSyncPeriod: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastSync: new FormControl<number | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServerInfoRepresentation {
		builtinProtocolMappers?: string | null;
		clientImporters?: Array<string>;
		clientInstallations?: string | null;
		componentTypes?: string | null;
		enums?: string | null;
		identityProviders?: Array<string>;
		memoryInfo?: MemoryInfoRepresentation;
		passwordPolicies?: Array<PasswordPolicyTypeRepresentation>;
		profileInfo?: ProfileInfoRepresentation;
		protocolMapperTypes?: string | null;
		providers?: string | null;
		socialProviders?: Array<string>;
		systemInfo?: SystemInfoRepresentation;
		themes?: string | null;
	}
	export interface ServerInfoRepresentationFormProperties {
		builtinProtocolMappers: FormControl<string | null | undefined>,
		clientInstallations: FormControl<string | null | undefined>,
		componentTypes: FormControl<string | null | undefined>,
		enums: FormControl<string | null | undefined>,
		protocolMapperTypes: FormControl<string | null | undefined>,
		providers: FormControl<string | null | undefined>,
		themes: FormControl<string | null | undefined>,
	}
	export function CreateServerInfoRepresentationFormGroup() {
		return new FormGroup<ServerInfoRepresentationFormProperties>({
			builtinProtocolMappers: new FormControl<string | null | undefined>(undefined),
			clientInstallations: new FormControl<string | null | undefined>(undefined),
			componentTypes: new FormControl<string | null | undefined>(undefined),
			enums: new FormControl<string | null | undefined>(undefined),
			protocolMapperTypes: new FormControl<string | null | undefined>(undefined),
			providers: new FormControl<string | null | undefined>(undefined),
			themes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SystemInfoRepresentation {
		fileEncoding?: string | null;
		javaHome?: string | null;
		javaRuntime?: string | null;
		javaVendor?: string | null;
		javaVersion?: string | null;
		javaVm?: string | null;
		javaVmVersion?: string | null;
		osArchitecture?: string | null;
		osName?: string | null;
		osVersion?: string | null;
		serverTime?: string | null;
		uptime?: string | null;
		uptimeMillis?: number | null;
		userDir?: string | null;
		userLocale?: string | null;
		userName?: string | null;
		userTimezone?: string | null;
		version?: string | null;
	}
	export interface SystemInfoRepresentationFormProperties {
		fileEncoding: FormControl<string | null | undefined>,
		javaHome: FormControl<string | null | undefined>,
		javaRuntime: FormControl<string | null | undefined>,
		javaVendor: FormControl<string | null | undefined>,
		javaVersion: FormControl<string | null | undefined>,
		javaVm: FormControl<string | null | undefined>,
		javaVmVersion: FormControl<string | null | undefined>,
		osArchitecture: FormControl<string | null | undefined>,
		osName: FormControl<string | null | undefined>,
		osVersion: FormControl<string | null | undefined>,
		serverTime: FormControl<string | null | undefined>,
		uptime: FormControl<string | null | undefined>,
		uptimeMillis: FormControl<number | null | undefined>,
		userDir: FormControl<string | null | undefined>,
		userLocale: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
		userTimezone: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateSystemInfoRepresentationFormGroup() {
		return new FormGroup<SystemInfoRepresentationFormProperties>({
			fileEncoding: new FormControl<string | null | undefined>(undefined),
			javaHome: new FormControl<string | null | undefined>(undefined),
			javaRuntime: new FormControl<string | null | undefined>(undefined),
			javaVendor: new FormControl<string | null | undefined>(undefined),
			javaVersion: new FormControl<string | null | undefined>(undefined),
			javaVm: new FormControl<string | null | undefined>(undefined),
			javaVmVersion: new FormControl<string | null | undefined>(undefined),
			osArchitecture: new FormControl<string | null | undefined>(undefined),
			osName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			serverTime: new FormControl<string | null | undefined>(undefined),
			uptime: new FormControl<string | null | undefined>(undefined),
			uptimeMillis: new FormControl<number | null | undefined>(undefined),
			userDir: new FormControl<string | null | undefined>(undefined),
			userLocale: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			userTimezone: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SpiInfoRepresentation {
		internal?: boolean | null;
		providers?: string | null;
	}
	export interface SpiInfoRepresentationFormProperties {
		internal: FormControl<boolean | null | undefined>,
		providers: FormControl<string | null | undefined>,
	}
	export function CreateSpiInfoRepresentationFormGroup() {
		return new FormGroup<SpiInfoRepresentationFormProperties>({
			internal: new FormControl<boolean | null | undefined>(undefined),
			providers: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SynchronizationResult {
		added?: number | null;
		failed?: number | null;
		ignored?: boolean | null;
		removed?: number | null;
		status?: string | null;
		updated?: number | null;
	}
	export interface SynchronizationResultFormProperties {
		added: FormControl<number | null | undefined>,
		failed: FormControl<number | null | undefined>,
		ignored: FormControl<boolean | null | undefined>,
		removed: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		updated: FormControl<number | null | undefined>,
	}
	export function CreateSynchronizationResultFormGroup() {
		return new FormGroup<SynchronizationResultFormProperties>({
			added: new FormControl<number | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			ignored: new FormControl<boolean | null | undefined>(undefined),
			removed: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TestLdapConnectionRepresentation {
		action?: string | null;
		bindCredential?: string | null;
		bindDn?: string | null;
		componentId?: string | null;
		connectionTimeout?: string | null;
		connectionUrl?: string | null;
		startTls?: string | null;
		useTruststoreSpi?: string | null;
	}
	export interface TestLdapConnectionRepresentationFormProperties {
		action: FormControl<string | null | undefined>,
		bindCredential: FormControl<string | null | undefined>,
		bindDn: FormControl<string | null | undefined>,
		componentId: FormControl<string | null | undefined>,
		connectionTimeout: FormControl<string | null | undefined>,
		connectionUrl: FormControl<string | null | undefined>,
		startTls: FormControl<string | null | undefined>,
		useTruststoreSpi: FormControl<string | null | undefined>,
	}
	export function CreateTestLdapConnectionRepresentationFormGroup() {
		return new FormGroup<TestLdapConnectionRepresentationFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			bindCredential: new FormControl<string | null | undefined>(undefined),
			bindDn: new FormControl<string | null | undefined>(undefined),
			componentId: new FormControl<string | null | undefined>(undefined),
			connectionTimeout: new FormControl<string | null | undefined>(undefined),
			connectionUrl: new FormControl<string | null | undefined>(undefined),
			startTls: new FormControl<string | null | undefined>(undefined),
			useTruststoreSpi: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserSessionRepresentation {
		clients?: string | null;
		id?: string | null;
		ipAddress?: string | null;
		lastAccess?: number | null;
		start?: number | null;
		userId?: string | null;
		username?: string | null;
	}
	export interface UserSessionRepresentationFormProperties {
		clients: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		lastAccess: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserSessionRepresentationFormGroup() {
		return new FormGroup<UserSessionRepresentationFormProperties>({
			clients: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			lastAccess: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get themes, social providers, auth providers, and event listeners available on this server
		 * Get 
		 * @return {void} 
		 */
		Get(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Import a realm   Imports a realm from a full representation of that realm.
		 * Post 
		 * @param {RealmRepresentation} requestBody JSON representation of the realm
		 * @return {void} 
		 */
		Post(requestBody: RealmRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
		 * Get {id}/name
		 * @return {void} 
		 */
		_idNameGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{id}/name', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the realm
		 * Delete {realm}
		 * @return {void} 
		 */
		_realmDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the top-level representation of the realm   It will not include nested information like User and Client representations.
		 * Get {realm}
		 * @return {void} 
		 */
		_realmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
		 * Put {realm}
		 * @return {void} 
		 */
		_realmPut(requestBody: RealmRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all admin events
		 * Delete {realm}/admin-events
		 * @return {void} 
		 */
		_realmAdmin_eventsDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/admin-events', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
		 * Get {realm}/admin-events
		 * @param {string} authUser user id
		 * @param {number} max Maximum results size (defaults to 100)
		 * @return {void} 
		 */
		_realmAdmin_eventsGetByAuthClientAndAuthIpAddressAndAuthRealmAndAuthUserAndDateFromAndDateToAndFirstAndMaxAndOperationTypesAndResourcePathAndResourceTypes(authClient: string | null | undefined, authIpAddress: string | null | undefined, authRealm: string | null | undefined, authUser: string | null | undefined, dateFrom: string | null | undefined, dateTo: string | null | undefined, first: number | null | undefined, max: number | null | undefined, operationTypes: Array<string> | null | undefined, resourcePath: string | null | undefined, resourceTypes: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/admin-events?authClient=' + (authClient == null ? '' : encodeURIComponent(authClient)) + '&authIpAddress=' + (authIpAddress == null ? '' : encodeURIComponent(authIpAddress)) + '&authRealm=' + (authRealm == null ? '' : encodeURIComponent(authRealm)) + '&authUser=' + (authUser == null ? '' : encodeURIComponent(authUser)) + '&dateFrom=' + (dateFrom == null ? '' : encodeURIComponent(dateFrom)) + '&dateTo=' + (dateTo == null ? '' : encodeURIComponent(dateTo)) + '&first=' + first + '&max=' + max + '&' + operationTypes?.map(z => `operationTypes=${encodeURIComponent(z)}`).join('&') + '&resourcePath=' + (resourcePath == null ? '' : encodeURIComponent(resourcePath)) + '&' + resourceTypes?.map(z => `resourceTypes=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear any user login failures for all users   This can release temporary disabled users
		 * Delete {realm}/attack-detection/brute-force/users
		 * @return {void} 
		 */
		_realmAttack_detectionBrute_forceUsersDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/attack-detection/brute-force/users', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear any user login failures for the user   This can release temporary disabled user
		 * Delete {realm}/attack-detection/brute-force/users/{userId}
		 * @return {void} 
		 */
		_realmAttack_detectionBrute_forceUsers_userIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/attack-detection/brute-force/users/{userId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get status of a username in brute force detection
		 * Get {realm}/attack-detection/brute-force/users/{userId}
		 * @return {void} 
		 */
		_realmAttack_detectionBrute_forceUsers_userIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/attack-detection/brute-force/users/{userId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authenticator providers   Returns a list of authenticator providers.
		 * Get {realm}/authentication/authenticator-providers
		 * @return {void} 
		 */
		_realmAuthenticationAuthenticator_providersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/authenticator-providers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get client authenticator providers   Returns a list of client authenticator providers.
		 * Get {realm}/authentication/client-authenticator-providers
		 * @return {void} 
		 */
		_realmAuthenticationClient_authenticator_providersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/client-authenticator-providers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authenticator provider’s configuration description
		 * Get {realm}/authentication/config-description/{providerId}
		 * @return {void} 
		 */
		_realmAuthenticationConfig_description_providerIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/config-description/{providerId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete authenticator configuration
		 * Delete {realm}/authentication/config/{id}
		 * @return {void} 
		 */
		_realmAuthenticationConfig_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/authentication/config/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authenticator configuration
		 * Get {realm}/authentication/config/{id}
		 * @return {void} 
		 */
		_realmAuthenticationConfig_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/config/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update authenticator configuration
		 * Put {realm}/authentication/config/{id}
		 * @param {AuthenticatorConfigRepresentation} requestBody JSON describing new state of authenticator configuration
		 * @return {void} 
		 */
		_realmAuthenticationConfig_idPut(requestBody: AuthenticatorConfigRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/authentication/config/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Add new authentication execution
		 * Post {realm}/authentication/executions
		 * @param {AuthenticationExecutionRepresentation} requestBody JSON model describing authentication execution
		 * @return {void} 
		 */
		_realmAuthenticationExecutionsPost(requestBody: AuthenticationExecutionRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/executions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete execution
		 * Delete {realm}/authentication/executions/{executionId}
		 * @return {void} 
		 */
		_realmAuthenticationExecutions_executionIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/authentication/executions/{executionId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Single Execution
		 * Get {realm}/authentication/executions/{executionId}
		 * @return {void} 
		 */
		_realmAuthenticationExecutions_executionIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/executions/{executionId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update execution with new configuration
		 * Post {realm}/authentication/executions/{executionId}/config
		 * @param {AuthenticatorConfigRepresentation} requestBody JSON with new configuration
		 * @return {void} 
		 */
		_realmAuthenticationExecutions_executionIdConfigPost(requestBody: AuthenticatorConfigRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/executions/{executionId}/config', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Lower execution’s priority
		 * Post {realm}/authentication/executions/{executionId}/lower-priority
		 * @return {void} 
		 */
		_realmAuthenticationExecutions_executionIdLower_priorityPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/executions/{executionId}/lower-priority', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Raise execution’s priority
		 * Post {realm}/authentication/executions/{executionId}/raise-priority
		 * @return {void} 
		 */
		_realmAuthenticationExecutions_executionIdRaise_priorityPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/executions/{executionId}/raise-priority', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authentication flows   Returns a list of authentication flows.
		 * Get {realm}/authentication/flows
		 * @return {void} 
		 */
		_realmAuthenticationFlowsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/flows', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new authentication flow
		 * Post {realm}/authentication/flows
		 * @param {AuthenticationFlowRepresentation} requestBody Authentication flow representation
		 * @return {void} 
		 */
		_realmAuthenticationFlowsPost(requestBody: AuthenticationFlowRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/flows', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
		 * Post {realm}/authentication/flows/{flowAlias}/copy
		 * @param {string} requestBody JSON containing 'newName' attribute
		 * @return {void} 
		 */
		_realmAuthenticationFlows_flowAliasCopyPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/flows/{flowAlias}/copy', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authentication executions for a flow
		 * Get {realm}/authentication/flows/{flowAlias}/executions
		 * @return {void} 
		 */
		_realmAuthenticationFlows_flowAliasExecutionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/flows/{flowAlias}/executions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update authentication executions of a flow
		 * Put {realm}/authentication/flows/{flowAlias}/executions
		 * @return {void} 
		 */
		_realmAuthenticationFlows_flowAliasExecutionsPut(requestBody: AuthenticationExecutionInfoRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/authentication/flows/{flowAlias}/executions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Add new authentication execution to a flow
		 * Post {realm}/authentication/flows/{flowAlias}/executions/execution
		 * @param {string} requestBody New execution JSON data containing 'provider' attribute
		 * @return {void} 
		 */
		_realmAuthenticationFlows_flowAliasExecutionsExecutionPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/flows/{flowAlias}/executions/execution', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Add new flow with new execution to existing flow
		 * Post {realm}/authentication/flows/{flowAlias}/executions/flow
		 * @param {string} requestBody New authentication flow / execution JSON data containing 'alias', 'type', 'provider', and 'description' attributes
		 * @return {void} 
		 */
		_realmAuthenticationFlows_flowAliasExecutionsFlowPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/flows/{flowAlias}/executions/flow', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an authentication flow
		 * Delete {realm}/authentication/flows/{id}
		 * @return {void} 
		 */
		_realmAuthenticationFlows_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/authentication/flows/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authentication flow for id
		 * Get {realm}/authentication/flows/{id}
		 * @return {void} 
		 */
		_realmAuthenticationFlows_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/flows/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an authentication flow
		 * Put {realm}/authentication/flows/{id}
		 * @param {AuthenticationFlowRepresentation} requestBody Authentication flow representation
		 * @return {void} 
		 */
		_realmAuthenticationFlows_idPut(requestBody: AuthenticationFlowRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/authentication/flows/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get form action providers   Returns a list of form action providers.
		 * Get {realm}/authentication/form-action-providers
		 * @return {void} 
		 */
		_realmAuthenticationForm_action_providersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/form-action-providers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get form providers   Returns a list of form providers.
		 * Get {realm}/authentication/form-providers
		 * @return {void} 
		 */
		_realmAuthenticationForm_providersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/form-providers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get configuration descriptions for all clients
		 * Get {realm}/authentication/per-client-config-description
		 * @return {void} 
		 */
		_realmAuthenticationPer_client_config_descriptionGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/per-client-config-description', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Register a new required actions
		 * Post {realm}/authentication/register-required-action
		 * @param {string} requestBody JSON containing 'providerId', and 'name' attributes.
		 * @return {void} 
		 */
		_realmAuthenticationRegister_required_actionPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/register-required-action', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get required actions   Returns a list of required actions.
		 * Get {realm}/authentication/required-actions
		 * @return {void} 
		 */
		_realmAuthenticationRequired_actionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/required-actions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete required action
		 * Delete {realm}/authentication/required-actions/{alias}
		 * @return {void} 
		 */
		_realmAuthenticationRequired_actions_aliasDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/authentication/required-actions/{alias}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get required action for alias
		 * Get {realm}/authentication/required-actions/{alias}
		 * @return {void} 
		 */
		_realmAuthenticationRequired_actions_aliasGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/required-actions/{alias}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update required action
		 * Put {realm}/authentication/required-actions/{alias}
		 * @param {RequiredActionProviderRepresentation} requestBody JSON describing new state of required action
		 * @return {void} 
		 */
		_realmAuthenticationRequired_actions_aliasPut(requestBody: RequiredActionProviderRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/authentication/required-actions/{alias}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Lower required action’s priority
		 * Post {realm}/authentication/required-actions/{alias}/lower-priority
		 * @return {void} 
		 */
		_realmAuthenticationRequired_actions_aliasLower_priorityPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/required-actions/{alias}/lower-priority', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Raise required action’s priority
		 * Post {realm}/authentication/required-actions/{alias}/raise-priority
		 * @return {void} 
		 */
		_realmAuthenticationRequired_actions_aliasRaise_priorityPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/authentication/required-actions/{alias}/raise-priority', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get unregistered required actions   Returns a list of unregistered required actions.
		 * Get {realm}/authentication/unregistered-required-actions
		 * @return {void} 
		 */
		_realmAuthenticationUnregistered_required_actionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/authentication/unregistered-required-actions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear cache of external public keys (Public keys of clients or Identity providers)
		 * Post {realm}/clear-keys-cache
		 * @return {void} 
		 */
		_realmClear_keys_cachePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clear-keys-cache', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear realm cache
		 * Post {realm}/clear-realm-cache
		 * @return {void} 
		 */
		_realmClear_realm_cachePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clear-realm-cache', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear user cache
		 * Post {realm}/clear-user-cache
		 * @return {void} 
		 */
		_realmClear_user_cachePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clear-user-cache', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Base path for retrieve providers with the configProperties properly filled
		 * Get {realm}/client-registration-policy/providers
		 * @return {void} 
		 */
		_realmClient_registration_policyProvidersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-registration-policy/providers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
		 * Get {realm}/client-scopes
		 * @return {void} 
		 */
		_realmClient_scopesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new client scope   Client Scope’s name must be unique!
		 * Post {realm}/client-scopes
		 * @return {void} 
		 */
		_realmClient_scopesPost(requestBody: ClientScopeRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/client-scopes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the mapper
		 * Delete {realm}/client-scopes/{id1}/protocol-mappers/models/{id2}
		 * @return {void} 
		 */
		_realmClient_scopes_id1Protocol_mappersModels_id2Delete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mapper by id
		 * Get {realm}/client-scopes/{id1}/protocol-mappers/models/{id2}
		 * @return {void} 
		 */
		_realmClient_scopes_id1Protocol_mappersModels_id2Get(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the mapper
		 * Put {realm}/client-scopes/{id1}/protocol-mappers/models/{id2}
		 * @return {void} 
		 */
		_realmClient_scopes_id1Protocol_mappersModels_id2Put(requestBody: ProtocolMapperRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the client scope
		 * Delete {realm}/client-scopes/{id}
		 * @return {void} 
		 */
		_realmClient_scopes_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/client-scopes/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get representation of the client scope
		 * Get {realm}/client-scopes/{id}
		 * @return {void} 
		 */
		_realmClient_scopes_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the client scope
		 * Put {realm}/client-scopes/{id}
		 * @return {void} 
		 */
		_realmClient_scopes_idPut(requestBody: ClientScopeRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/client-scopes/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create multiple mappers
		 * Post {realm}/client-scopes/{id}/protocol-mappers/add-models
		 * @return {void} 
		 */
		_realmClient_scopes_idProtocol_mappersAdd_modelsPost(requestBody: Array<ProtocolMapperRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/client-scopes/{id}/protocol-mappers/add-models', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mappers
		 * Get {realm}/client-scopes/{id}/protocol-mappers/models
		 * @return {void} 
		 */
		_realmClient_scopes_idProtocol_mappersModelsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/protocol-mappers/models', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a mapper
		 * Post {realm}/client-scopes/{id}/protocol-mappers/models
		 * @return {void} 
		 */
		_realmClient_scopes_idProtocol_mappersModelsPost(requestBody: ProtocolMapperRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/client-scopes/{id}/protocol-mappers/models', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mappers by name for a specific protocol
		 * Get {realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}
		 * @return {void} 
		 */
		_realmClient_scopes_idProtocol_mappersProtocol_protocolGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all scope mappings for the client
		 * Get {realm}/client-scopes/{id}/scope-mappings
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove client-level roles from the client’s scope.
		 * Delete {realm}/client-scopes/{id}/scope-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsClients_clientDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the roles associated with a client’s scope   Returns roles for the client.
		 * Get {realm}/client-scopes/{id}/scope-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsClients_clientGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add client-level roles to the client’s scope
		 * Post {realm}/client-scopes/{id}/scope-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsClients_clientPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/clients/{client}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
		 * Get {realm}/client-scopes/{id}/scope-mappings/clients/{client}/available
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsClients_clientAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
		 * Get {realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsClients_clientCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a set of realm-level roles from the client’s scope
		 * Delete {realm}/client-scopes/{id}/scope-mappings/realm
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsRealmDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles associated with the client’s scope
		 * Get {realm}/client-scopes/{id}/scope-mappings/realm
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsRealmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a set of realm-level roles to the client’s scope
		 * Post {realm}/client-scopes/{id}/scope-mappings/realm
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsRealmPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/realm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles that are available to attach to this client’s scope
		 * Get {realm}/client-scopes/{id}/scope-mappings/realm/available
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsRealmAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/realm/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
		 * Get {realm}/client-scopes/{id}/scope-mappings/realm/composite
		 * @return {void} 
		 */
		_realmClient_scopes_idScope_mappingsRealmCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-scopes/{id}/scope-mappings/realm/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get client session stats   Returns a JSON map.
		 * Get {realm}/client-session-stats
		 * @return {void} 
		 */
		_realmClient_session_statsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/client-session-stats', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get clients belonging to the realm   Returns a list of clients belonging to the realm
		 * Get {realm}/clients
		 * @param {string} clientId filter by clientId
		 * @param {number} first the first result
		 * @param {number} max the max results to return
		 * @param {boolean} search whether this is a search query or a getClientById query
		 * @param {boolean} viewableOnly filter clients that cannot be viewed in full by admin
		 * @return {void} 
		 */
		_realmClientsGetByClientIdAndFirstAndMaxAndSearchAndViewableOnly(clientId: string | null | undefined, first: number | null | undefined, max: number | null | undefined, search: boolean | null | undefined, viewableOnly: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients?clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&first=' + first + '&max=' + max + '&search=' + search + '&viewableOnly=' + viewableOnly, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new client   Client’s client_id must be unique!
		 * Post {realm}/clients
		 * @return {void} 
		 */
		_realmClientsPost(requestBody: ClientRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/clients-initial-access
		 * @return {void} 
		 */
		_realmClients_initial_accessGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients-initial-access', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new initial access token.
		 * Post {realm}/clients-initial-access
		 * @return {void} 
		 */
		_realmClients_initial_accessPost(requestBody: ClientInitialAccessCreatePresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients-initial-access', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/clients-initial-access/{id}
		 * @return {void} 
		 */
		_realmClients_initial_access_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients-initial-access/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the mapper
		 * Delete {realm}/clients/{id1}/protocol-mappers/models/{id2}
		 * @return {void} 
		 */
		_realmClients_id1Protocol_mappersModels_id2Delete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id1}/protocol-mappers/models/{id2}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mapper by id
		 * Get {realm}/clients/{id1}/protocol-mappers/models/{id2}
		 * @return {void} 
		 */
		_realmClients_id1Protocol_mappersModels_id2Get(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id1}/protocol-mappers/models/{id2}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the mapper
		 * Put {realm}/clients/{id1}/protocol-mappers/models/{id2}
		 * @return {void} 
		 */
		_realmClients_id1Protocol_mappersModels_id2Put(requestBody: ProtocolMapperRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/clients/{id1}/protocol-mappers/models/{id2}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the client
		 * Delete {realm}/clients/{id}
		 * @return {void} 
		 */
		_realmClients_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get representation of the client
		 * Get {realm}/clients/{id}
		 * @return {void} 
		 */
		_realmClients_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the client
		 * Put {realm}/clients/{id}
		 * @return {void} 
		 */
		_realmClients_idPut(requestBody: ClientRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/clients/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get key info
		 * Get {realm}/clients/{id}/certificates/{attr}
		 * @return {void} 
		 */
		_realmClients_idCertificates_attrGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/certificates/{attr}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a keystore file for the client, containing private key and public certificate
		 * Post {realm}/clients/{id}/certificates/{attr}/download
		 * @param {KeyStoreConfig} requestBody Keystore configuration as JSON
		 * @return {void} 
		 */
		_realmClients_idCertificates_attrDownloadPost(requestBody: KeyStoreConfig, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/certificates/{attr}/download', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a new certificate with new key pair
		 * Post {realm}/clients/{id}/certificates/{attr}/generate
		 * @return {void} 
		 */
		_realmClients_idCertificates_attrGeneratePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/certificates/{attr}/generate', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
		 * Post {realm}/clients/{id}/certificates/{attr}/generate-and-download
		 * @param {KeyStoreConfig} requestBody Keystore configuration as JSON
		 * @return {void} 
		 */
		_realmClients_idCertificates_attrGenerate_and_downloadPost(requestBody: KeyStoreConfig, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/certificates/{attr}/generate-and-download', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload certificate and eventually private key
		 * Post {realm}/clients/{id}/certificates/{attr}/upload
		 * @return {void} 
		 */
		_realmClients_idCertificates_attrUploadPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/certificates/{attr}/upload', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload only certificate, not private key
		 * Post {realm}/clients/{id}/certificates/{attr}/upload-certificate
		 * @return {void} 
		 */
		_realmClients_idCertificates_attrUpload_certificatePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/certificates/{attr}/upload-certificate', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the client secret
		 * Get {realm}/clients/{id}/client-secret
		 * @return {void} 
		 */
		_realmClients_idClient_secretGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/client-secret', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a new secret for the client
		 * Post {realm}/clients/{id}/client-secret
		 * @return {void} 
		 */
		_realmClients_idClient_secretPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/client-secret', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get default client scopes.
		 * Get {realm}/clients/{id}/default-client-scopes
		 * @return {void} 
		 */
		_realmClients_idDefault_client_scopesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/default-client-scopes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/clients/{id}/default-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmClients_idDefault_client_scopes_clientScopeIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}/default-client-scopes/{clientScopeId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/clients/{id}/default-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmClients_idDefault_client_scopes_clientScopeIdPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/clients/{id}/default-client-scopes/{clientScopeId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create JSON with payload of example access token
		 * Get {realm}/clients/{id}/evaluate-scopes/generate-example-access-token
		 * @return {void} 
		 */
		_realmClients_idEvaluate_scopesGenerate_example_access_tokenGetByScopeAndUserId(scope: string | null | undefined, userId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/evaluate-scopes/generate-example-access-token?scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
		 * Get {realm}/clients/{id}/evaluate-scopes/protocol-mappers
		 * @return {void} 
		 */
		_realmClients_idEvaluate_scopesProtocol_mappersGetByScope(scope: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/evaluate-scopes/protocol-mappers?scope=' + (scope == null ? '' : encodeURIComponent(scope)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
		 * Get {realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted
		 * @return {void} 
		 */
		_realmClients_idEvaluate_scopesScope_mappings_roleContainerIdGrantedGetByScope(scope: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted?scope=' + (scope == null ? '' : encodeURIComponent(scope)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
		 * Get {realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted
		 * @return {void} 
		 */
		_realmClients_idEvaluate_scopesScope_mappings_roleContainerIdNot_grantedGetByScope(scope: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted?scope=' + (scope == null ? '' : encodeURIComponent(scope)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/clients/{id}/installation/providers/{providerId}
		 * @return {void} 
		 */
		_realmClients_idInstallationProviders_providerIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/installation/providers/{providerId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether client Authorization permissions have been initialized or not and a reference
		 * Get {realm}/clients/{id}/management/permissions
		 * @return {void} 
		 */
		_realmClients_idManagementPermissionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/management/permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether client Authorization permissions have been initialized or not and a reference
		 * Put {realm}/clients/{id}/management/permissions
		 * @return {void} 
		 */
		_realmClients_idManagementPermissionsPut(requestBody: ManagementPermissionReference, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/clients/{id}/management/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
		 * Post {realm}/clients/{id}/nodes
		 * @return {void} 
		 */
		_realmClients_idNodesPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/nodes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Unregister a cluster node from the client
		 * Delete {realm}/clients/{id}/nodes/{node}
		 * @return {void} 
		 */
		_realmClients_idNodes_nodeDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}/nodes/{node}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
		 * Get {realm}/clients/{id}/offline-session-count
		 * @return {void} 
		 */
		_realmClients_idOffline_session_countGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/offline-session-count', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get offline sessions for client   Returns a list of offline user sessions associated with this client
		 * Get {realm}/clients/{id}/offline-sessions
		 * @param {number} first Paging offset
		 * @param {number} max Maximum results size (defaults to 100)
		 * @return {void} 
		 */
		_realmClients_idOffline_sessionsGetByFirstAndMax(first: number | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/offline-sessions?first=' + first + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get optional client scopes.
		 * Get {realm}/clients/{id}/optional-client-scopes
		 * @return {void} 
		 */
		_realmClients_idOptional_client_scopesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/optional-client-scopes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/clients/{id}/optional-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmClients_idOptional_client_scopes_clientScopeIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}/optional-client-scopes/{clientScopeId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/clients/{id}/optional-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmClients_idOptional_client_scopes_clientScopeIdPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/clients/{id}/optional-client-scopes/{clientScopeId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create multiple mappers
		 * Post {realm}/clients/{id}/protocol-mappers/add-models
		 * @return {void} 
		 */
		_realmClients_idProtocol_mappersAdd_modelsPost(requestBody: Array<ProtocolMapperRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/protocol-mappers/add-models', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mappers
		 * Get {realm}/clients/{id}/protocol-mappers/models
		 * @return {void} 
		 */
		_realmClients_idProtocol_mappersModelsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/protocol-mappers/models', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a mapper
		 * Post {realm}/clients/{id}/protocol-mappers/models
		 * @return {void} 
		 */
		_realmClients_idProtocol_mappersModelsPost(requestBody: ProtocolMapperRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/protocol-mappers/models', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mappers by name for a specific protocol
		 * Get {realm}/clients/{id}/protocol-mappers/protocol/{protocol}
		 * @return {void} 
		 */
		_realmClients_idProtocol_mappersProtocol_protocolGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/protocol-mappers/protocol/{protocol}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
		 * Post {realm}/clients/{id}/push-revocation
		 * @return {void} 
		 */
		_realmClients_idPush_revocationPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/push-revocation', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a new registration access token for the client
		 * Post {realm}/clients/{id}/registration-access-token
		 * @return {void} 
		 */
		_realmClients_idRegistration_access_tokenPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/registration-access-token', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all roles for the realm or client
		 * Get {realm}/clients/{id}/roles
		 * @return {void} 
		 */
		_realmClients_idRolesGetByBriefRepresentationAndFirstAndMaxAndSearch(briefRepresentation: boolean | null | undefined, first: number | null | undefined, max: number | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles?briefRepresentation=' + briefRepresentation + '&first=' + first + '&max=' + max + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new role for the realm or client
		 * Post {realm}/clients/{id}/roles
		 * @return {void} 
		 */
		_realmClients_idRolesPost(requestBody: RoleRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/roles', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a role by name
		 * Delete {realm}/clients/{id}/roles/{role_name}
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}/roles/{role_name}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a role by name
		 * Get {realm}/clients/{id}/roles/{role_name}
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles/{role_name}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a role by name
		 * Put {realm}/clients/{id}/roles/{role_name}
		 * @return {void} 
		 */
		_realmClients_idRoles_role_namePut(requestBody: RoleRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/clients/{id}/roles/{role_name}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove roles from the role’s composite
		 * Delete {realm}/clients/{id}/roles/{role_name}/composites
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameCompositesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/composites', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get composites of the role
		 * Get {realm}/clients/{id}/roles/{role_name}/composites
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameCompositesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/composites', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a composite to the role
		 * Post {realm}/clients/{id}/roles/{role_name}/composites
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameCompositesPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/composites', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * An app-level roles for the specified app for the role’s composite
		 * Get {realm}/clients/{id}/roles/{role_name}/composites/clients/{client}
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameCompositesClients_clientGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/composites/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles of the role’s composite
		 * Get {realm}/clients/{id}/roles/{role_name}/composites/realm
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameCompositesRealmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/composites/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return List of Groups that have the specified role name
		 * Get {realm}/clients/{id}/roles/{role_name}/groups
		 * @param {boolean} briefRepresentation if false, return a full representation of the GroupRepresentation objects
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameGroupsGetByBriefRepresentationAndFirstAndMax(briefRepresentation: boolean | null | undefined, first: number | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/groups?briefRepresentation=' + briefRepresentation + '&first=' + first + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
		 * Get {realm}/clients/{id}/roles/{role_name}/management/permissions
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameManagementPermissionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/management/permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
		 * Put {realm}/clients/{id}/roles/{role_name}/management/permissions
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameManagementPermissionsPut(requestBody: ManagementPermissionReference, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/management/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Return List of Users that have the specified role name
		 * Get {realm}/clients/{id}/roles/{role_name}/users
		 * @return {void} 
		 */
		_realmClients_idRoles_role_nameUsersGetByFirstAndMax(first: number | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/roles/{role_name}/users?first=' + first + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all scope mappings for the client
		 * Get {realm}/clients/{id}/scope-mappings
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/scope-mappings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove client-level roles from the client’s scope.
		 * Delete {realm}/clients/{id}/scope-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsClients_clientDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}/scope-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the roles associated with a client’s scope   Returns roles for the client.
		 * Get {realm}/clients/{id}/scope-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsClients_clientGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/scope-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add client-level roles to the client’s scope
		 * Post {realm}/clients/{id}/scope-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsClients_clientPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/scope-mappings/clients/{client}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
		 * Get {realm}/clients/{id}/scope-mappings/clients/{client}/available
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsClients_clientAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/scope-mappings/clients/{client}/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
		 * Get {realm}/clients/{id}/scope-mappings/clients/{client}/composite
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsClients_clientCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/scope-mappings/clients/{client}/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a set of realm-level roles from the client’s scope
		 * Delete {realm}/clients/{id}/scope-mappings/realm
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsRealmDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/clients/{id}/scope-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles associated with the client’s scope
		 * Get {realm}/clients/{id}/scope-mappings/realm
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsRealmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/scope-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a set of realm-level roles to the client’s scope
		 * Post {realm}/clients/{id}/scope-mappings/realm
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsRealmPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/clients/{id}/scope-mappings/realm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles that are available to attach to this client’s scope
		 * Get {realm}/clients/{id}/scope-mappings/realm/available
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsRealmAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/scope-mappings/realm/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
		 * Get {realm}/clients/{id}/scope-mappings/realm/composite
		 * @return {void} 
		 */
		_realmClients_idScope_mappingsRealmCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/scope-mappings/realm/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user dedicated to the service account
		 * Get {realm}/clients/{id}/service-account-user
		 * @return {void} 
		 */
		_realmClients_idService_account_userGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/service-account-user', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
		 * Get {realm}/clients/{id}/session-count
		 * @return {void} 
		 */
		_realmClients_idSession_countGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/session-count', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
		 * Get {realm}/clients/{id}/test-nodes-available
		 * @return {void} 
		 */
		_realmClients_idTest_nodes_availableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/test-nodes-available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user sessions for client   Returns a list of user sessions associated with this client
		 * Get {realm}/clients/{id}/user-sessions
		 * @param {number} first Paging offset
		 * @param {number} max Maximum results size (defaults to 100)
		 * @return {void} 
		 */
		_realmClients_idUser_sessionsGetByFirstAndMax(first: number | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/clients/{id}/user-sessions?first=' + first + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/components
		 * @return {void} 
		 */
		_realmComponentsGetByNameAndParentAndType(name: string | null | undefined, parent: string | null | undefined, type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/components?name=' + (name == null ? '' : encodeURIComponent(name)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post {realm}/components
		 * @return {void} 
		 */
		_realmComponentsPost(requestBody: ComponentRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/components', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/components/{id}
		 * @return {void} 
		 */
		_realmComponents_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/components/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/components/{id}
		 * @return {void} 
		 */
		_realmComponents_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/components/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/components/{id}
		 * @return {void} 
		 */
		_realmComponents_idPut(requestBody: ComponentRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/components/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List of subcomponent types that are available to configure for a particular parent component.
		 * Get {realm}/components/{id}/sub-component-types
		 * @return {void} 
		 */
		_realmComponents_idSub_component_typesGetByType(type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/components/{id}/sub-component-types?type=' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/credential-registrators
		 * @return {void} 
		 */
		_realmCredential_registratorsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/credential-registrators', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm default client scopes.
		 * Get {realm}/default-default-client-scopes
		 * @return {void} 
		 */
		_realmDefault_default_client_scopesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/default-default-client-scopes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/default-default-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmDefault_default_client_scopes_clientScopeIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/default-default-client-scopes/{clientScopeId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/default-default-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmDefault_default_client_scopes_clientScopeIdPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/default-default-client-scopes/{clientScopeId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get group hierarchy.
		 * Get {realm}/default-groups
		 * @return {void} 
		 */
		_realmDefault_groupsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/default-groups', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/default-groups/{groupId}
		 * @return {void} 
		 */
		_realmDefault_groups_groupIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/default-groups/{groupId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/default-groups/{groupId}
		 * @return {void} 
		 */
		_realmDefault_groups_groupIdPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/default-groups/{groupId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm optional client scopes.
		 * Get {realm}/default-optional-client-scopes
		 * @return {void} 
		 */
		_realmDefault_optional_client_scopesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/default-optional-client-scopes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/default-optional-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmDefault_optional_client_scopes_clientScopeIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/default-optional-client-scopes/{clientScopeId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/default-optional-client-scopes/{clientScopeId}
		 * @return {void} 
		 */
		_realmDefault_optional_client_scopes_clientScopeIdPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/default-optional-client-scopes/{clientScopeId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all events
		 * Delete {realm}/events
		 * @return {void} 
		 */
		_realmEventsDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/events', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get events   Returns all events, or filters them based on URL query parameters listed here
		 * Get {realm}/events
		 * @param {string} client App or oauth client name
		 * @param {string} dateFrom From date
		 * @param {string} dateTo To date
		 * @param {number} first Paging offset
		 * @param {string} ipAddress IP address
		 * @param {number} max Maximum results size (defaults to 100)
		 * @param {Array<string>} type The types of events to return
		 * @param {string} user User id
		 * @return {void} 
		 */
		_realmEventsGetByClientAndDateFromAndDateToAndFirstAndIpAddressAndMaxAndTypeAndUser(client: string | null | undefined, dateFrom: string | null | undefined, dateTo: string | null | undefined, first: number | null | undefined, ipAddress: string | null | undefined, max: number | null | undefined, type: Array<string> | null | undefined, user: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/events?client=' + (client == null ? '' : encodeURIComponent(client)) + '&dateFrom=' + (dateFrom == null ? '' : encodeURIComponent(dateFrom)) + '&dateTo=' + (dateTo == null ? '' : encodeURIComponent(dateTo)) + '&first=' + first + '&ipAddress=' + (ipAddress == null ? '' : encodeURIComponent(ipAddress)) + '&max=' + max + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&user=' + (user == null ? '' : encodeURIComponent(user)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the events provider configuration   Returns JSON object with events provider configuration
		 * Get {realm}/events/config
		 * @return {void} 
		 */
		_realmEventsConfigGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/events/config', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the events provider   Change the events provider and/or its configuration
		 * Put {realm}/events/config
		 * @return {void} 
		 */
		_realmEventsConfigPut(requestBody: RealmEventsConfigRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/events/config', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/group-by-path/{path}
		 * @return {void} 
		 */
		_realmGroup_by_path_pathGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/group-by-path/{path}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get group hierarchy.
		 * Get {realm}/groups
		 * @return {void} 
		 */
		_realmGroupsGetByBriefRepresentationAndFirstAndMaxAndSearch(briefRepresentation: boolean | null | undefined, first: number | null | undefined, max: number | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups?briefRepresentation=' + briefRepresentation + '&first=' + first + '&max=' + max + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * create or add a top level realm groupSet or create child.
		 * Post {realm}/groups
		 * @return {void} 
		 */
		_realmGroupsPost(requestBody: GroupRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/groups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the groups counts.
		 * Get {realm}/groups/count
		 * @return {void} 
		 */
		_realmGroupsCountGetBySearchAndTop(search: string | null | undefined, top: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/count?search=' + (search == null ? '' : encodeURIComponent(search)) + '&top=' + top, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/groups/{id}
		 * @return {void} 
		 */
		_realmGroups_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/groups/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/groups/{id}
		 * @return {void} 
		 */
		_realmGroups_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update group, ignores subgroups.
		 * Put {realm}/groups/{id}
		 * @return {void} 
		 */
		_realmGroups_idPut(requestBody: GroupRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/groups/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Set or create child.
		 * Post {realm}/groups/{id}/children
		 * @return {void} 
		 */
		_realmGroups_idChildrenPost(requestBody: GroupRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/groups/{id}/children', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether client Authorization permissions have been initialized or not and a reference
		 * Get {realm}/groups/{id}/management/permissions
		 * @return {void} 
		 */
		_realmGroups_idManagementPermissionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/management/permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether client Authorization permissions have been initialized or not and a reference
		 * Put {realm}/groups/{id}/management/permissions
		 * @return {void} 
		 */
		_realmGroups_idManagementPermissionsPut(requestBody: ManagementPermissionReference, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/groups/{id}/management/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users   Returns a list of users, filtered according to query parameters
		 * Get {realm}/groups/{id}/members
		 * @param {boolean} briefRepresentation Only return basic information (only guaranteed to return id, username, created, first and last name,
		 *  email, enabled state, email verification state, federation link, and access.
		 *  Note that it means that namely user attributes, required actions, and not before are not returned.)
		 * @param {number} first Pagination offset
		 * @param {number} max Maximum results size (defaults to 100)
		 * @return {void} 
		 */
		_realmGroups_idMembersGetByBriefRepresentationAndFirstAndMax(briefRepresentation: boolean | null | undefined, first: number | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/members?briefRepresentation=' + briefRepresentation + '&first=' + first + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get role mappings
		 * Get {realm}/groups/{id}/role-mappings
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/role-mappings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete client-level roles from user role mapping
		 * Delete {realm}/groups/{id}/role-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsClients_clientDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/groups/{id}/role-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get client-level role mappings for the user, and the app
		 * Get {realm}/groups/{id}/role-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsClients_clientGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/role-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add client-level roles to the user role mapping
		 * Post {realm}/groups/{id}/role-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsClients_clientPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/groups/{id}/role-mappings/clients/{client}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available client-level roles that can be mapped to the user
		 * Get {realm}/groups/{id}/role-mappings/clients/{client}/available
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsClients_clientAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/role-mappings/clients/{client}/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective client-level role mappings   This recurses any composite roles
		 * Get {realm}/groups/{id}/role-mappings/clients/{client}/composite
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsClients_clientCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/role-mappings/clients/{client}/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete realm-level role mappings
		 * Delete {realm}/groups/{id}/role-mappings/realm
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsRealmDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/groups/{id}/role-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level role mappings
		 * Get {realm}/groups/{id}/role-mappings/realm
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsRealmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/role-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add realm-level role mappings to the user
		 * Post {realm}/groups/{id}/role-mappings/realm
		 * @param {Array<RoleRepresentation>} requestBody Roles to add
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsRealmPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/groups/{id}/role-mappings/realm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles that can be mapped
		 * Get {realm}/groups/{id}/role-mappings/realm/available
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsRealmAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/role-mappings/realm/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective realm-level role mappings   This will recurse all composite roles to get the result.
		 * Get {realm}/groups/{id}/role-mappings/realm/composite
		 * @return {void} 
		 */
		_realmGroups_idRole_mappingsRealmCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/groups/{id}/role-mappings/realm/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Import identity provider from uploaded JSON file
		 * Post {realm}/identity-provider/import-config
		 * @return {void} 
		 */
		_realmIdentity_providerImport_configPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/identity-provider/import-config', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get identity providers
		 * Get {realm}/identity-provider/instances
		 * @return {void} 
		 */
		_realmIdentity_providerInstancesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/instances', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new identity provider
		 * Post {realm}/identity-provider/instances
		 * @param {IdentityProviderRepresentation} requestBody JSON body
		 * @return {void} 
		 */
		_realmIdentity_providerInstancesPost(requestBody: IdentityProviderRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/identity-provider/instances', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the identity provider
		 * Delete {realm}/identity-provider/instances/{alias}
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/identity-provider/instances/{alias}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the identity provider
		 * Get {realm}/identity-provider/instances/{alias}
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/instances/{alias}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the identity provider
		 * Put {realm}/identity-provider/instances/{alias}
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasPut(requestBody: IdentityProviderRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/identity-provider/instances/{alias}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Export public broker configuration for identity provider
		 * Get {realm}/identity-provider/instances/{alias}/export
		 * @param {string} format Format to use
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasExportGetByFormat(format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/instances/{alias}/export?format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether client Authorization permissions have been initialized or not and a reference
		 * Get {realm}/identity-provider/instances/{alias}/management/permissions
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasManagementPermissionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/instances/{alias}/management/permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether client Authorization permissions have been initialized or not and a reference
		 * Put {realm}/identity-provider/instances/{alias}/management/permissions
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasManagementPermissionsPut(requestBody: ManagementPermissionReference, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/identity-provider/instances/{alias}/management/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mapper types for identity provider
		 * Get {realm}/identity-provider/instances/{alias}/mapper-types
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasMapper_typesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/instances/{alias}/mapper-types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mappers for identity provider
		 * Get {realm}/identity-provider/instances/{alias}/mappers
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasMappersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/instances/{alias}/mappers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a mapper to identity provider
		 * Post {realm}/identity-provider/instances/{alias}/mappers
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasMappersPost(requestBody: IdentityProviderMapperRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/identity-provider/instances/{alias}/mappers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a mapper for the identity provider
		 * Delete {realm}/identity-provider/instances/{alias}/mappers/{id}
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasMappers_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/identity-provider/instances/{alias}/mappers/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mapper by id for the identity provider
		 * Get {realm}/identity-provider/instances/{alias}/mappers/{id}
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasMappers_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/instances/{alias}/mappers/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a mapper for the identity provider
		 * Put {realm}/identity-provider/instances/{alias}/mappers/{id}
		 * @return {void} 
		 */
		_realmIdentity_providerInstances_aliasMappers_idPut(requestBody: IdentityProviderMapperRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/identity-provider/instances/{alias}/mappers/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get identity providers
		 * Get {realm}/identity-provider/providers/{provider_id}
		 * @return {void} 
		 */
		_realmIdentity_providerProviders_provider_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/identity-provider/providers/{provider_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/keys
		 * @return {void} 
		 */
		_realmKeysGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/keys', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes all user sessions.
		 * Post {realm}/logout-all
		 * @return {void} 
		 */
		_realmLogout_allPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/logout-all', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Partial export of existing realm into a JSON file.
		 * Post {realm}/partial-export
		 * @return {void} 
		 */
		_realmPartial_exportPostByExportClientsAndExportGroupsAndRoles(exportClients: boolean | null | undefined, exportGroupsAndRoles: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/partial-export?exportClients=' + exportClients + '&exportGroupsAndRoles=' + exportGroupsAndRoles, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Partial import from a JSON file to an existing realm.
		 * Post {realm}/partialImport
		 * @return {void} 
		 */
		_realmPartialImportPost(requestBody: PartialImportRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/partialImport', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Push the realm’s revocation policy to any client that has an admin url associated with it.
		 * Post {realm}/push-revocation
		 * @return {void} 
		 */
		_realmPush_revocationPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/push-revocation', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all roles for the realm or client
		 * Get {realm}/roles
		 * @return {void} 
		 */
		_realmRolesGetByBriefRepresentationAndFirstAndMaxAndSearch(briefRepresentation: boolean | null | undefined, first: number | null | undefined, max: number | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles?briefRepresentation=' + briefRepresentation + '&first=' + first + '&max=' + max + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new role for the realm or client
		 * Post {realm}/roles
		 * @return {void} 
		 */
		_realmRolesPost(requestBody: RoleRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/roles', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the role
		 * Delete {realm}/roles-by-id/{role_id}
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/roles-by-id/{role_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific role’s representation
		 * Get {realm}/roles-by-id/{role_id}
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles-by-id/{role_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the role
		 * Put {realm}/roles-by-id/{role_id}
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idPut(requestBody: RoleRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/roles-by-id/{role_id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a set of roles from the role’s composite
		 * Delete {realm}/roles-by-id/{role_id}/composites
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idCompositesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/roles-by-id/{role_id}/composites', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get role’s children   Returns a set of role’s children provided the role is a composite.
		 * Get {realm}/roles-by-id/{role_id}/composites
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idCompositesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles-by-id/{role_id}/composites', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Make the role a composite role by associating some child roles
		 * Post {realm}/roles-by-id/{role_id}/composites
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idCompositesPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/roles-by-id/{role_id}/composites', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get client-level roles for the client that are in the role’s composite
		 * Get {realm}/roles-by-id/{role_id}/composites/clients/{client}
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idCompositesClients_clientGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles-by-id/{role_id}/composites/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles that are in the role’s composite
		 * Get {realm}/roles-by-id/{role_id}/composites/realm
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idCompositesRealmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles-by-id/{role_id}/composites/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
		 * Get {realm}/roles-by-id/{role_id}/management/permissions
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idManagementPermissionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles-by-id/{role_id}/management/permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
		 * Put {realm}/roles-by-id/{role_id}/management/permissions
		 * @return {void} 
		 */
		_realmRoles_by_id_role_idManagementPermissionsPut(requestBody: ManagementPermissionReference, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/roles-by-id/{role_id}/management/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a role by name
		 * Delete {realm}/roles/{role_name}
		 * @return {void} 
		 */
		_realmRoles_role_nameDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/roles/{role_name}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a role by name
		 * Get {realm}/roles/{role_name}
		 * @return {void} 
		 */
		_realmRoles_role_nameGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles/{role_name}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a role by name
		 * Put {realm}/roles/{role_name}
		 * @return {void} 
		 */
		_realmRoles_role_namePut(requestBody: RoleRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/roles/{role_name}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove roles from the role’s composite
		 * Delete {realm}/roles/{role_name}/composites
		 * @return {void} 
		 */
		_realmRoles_role_nameCompositesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/roles/{role_name}/composites', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get composites of the role
		 * Get {realm}/roles/{role_name}/composites
		 * @return {void} 
		 */
		_realmRoles_role_nameCompositesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles/{role_name}/composites', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a composite to the role
		 * Post {realm}/roles/{role_name}/composites
		 * @return {void} 
		 */
		_realmRoles_role_nameCompositesPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/roles/{role_name}/composites', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * An app-level roles for the specified app for the role’s composite
		 * Get {realm}/roles/{role_name}/composites/clients/{client}
		 * @return {void} 
		 */
		_realmRoles_role_nameCompositesClients_clientGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles/{role_name}/composites/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles of the role’s composite
		 * Get {realm}/roles/{role_name}/composites/realm
		 * @return {void} 
		 */
		_realmRoles_role_nameCompositesRealmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles/{role_name}/composites/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return List of Groups that have the specified role name
		 * Get {realm}/roles/{role_name}/groups
		 * @param {boolean} briefRepresentation if false, return a full representation of the GroupRepresentation objects
		 * @return {void} 
		 */
		_realmRoles_role_nameGroupsGetByBriefRepresentationAndFirstAndMax(briefRepresentation: boolean | null | undefined, first: number | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles/{role_name}/groups?briefRepresentation=' + briefRepresentation + '&first=' + first + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
		 * Get {realm}/roles/{role_name}/management/permissions
		 * @return {void} 
		 */
		_realmRoles_role_nameManagementPermissionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles/{role_name}/management/permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
		 * Put {realm}/roles/{role_name}/management/permissions
		 * @return {void} 
		 */
		_realmRoles_role_nameManagementPermissionsPut(requestBody: ManagementPermissionReference, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/roles/{role_name}/management/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Return List of Users that have the specified role name
		 * Get {realm}/roles/{role_name}/users
		 * @return {void} 
		 */
		_realmRoles_role_nameUsersGetByFirstAndMax(first: number | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/roles/{role_name}/users?first=' + first + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific user session.
		 * Delete {realm}/sessions/{session}
		 * @return {void} 
		 */
		_realmSessions_sessionDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/sessions/{session}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test LDAP connection
		 * Post {realm}/testLDAPConnection
		 * @return {void} 
		 */
		_realmTestLDAPConnectionPost(requestBody: TestLdapConnectionRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/testLDAPConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post {realm}/testSMTPConnection
		 * @return {void} 
		 */
		_realmTestSMTPConnectionPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/testSMTPConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
		 * Get {realm}/user-storage/{id}/name
		 * @return {void} 
		 */
		_realmUser_storage_idNameGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/user-storage/{id}/name', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove imported users
		 * Post {realm}/user-storage/{id}/remove-imported-users
		 * @return {void} 
		 */
		_realmUser_storage_idRemove_imported_usersPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/user-storage/{id}/remove-imported-users', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
		 * Post {realm}/user-storage/{id}/sync
		 * @return {void} 
		 */
		_realmUser_storage_idSyncPostByAction(action: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/user-storage/{id}/sync?action=' + (action == null ? '' : encodeURIComponent(action)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unlink imported users from a storage provider
		 * Post {realm}/user-storage/{id}/unlink-users
		 * @return {void} 
		 */
		_realmUser_storage_idUnlink_usersPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/user-storage/{id}/unlink-users', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
		 * Post {realm}/user-storage/{parentId}/mappers/{id}/sync
		 * @return {void} 
		 */
		_realmUser_storage_parentIdMappers_idSyncPostByDirection(direction: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/user-storage/{parentId}/mappers/{id}/sync?direction=' + (direction == null ? '' : encodeURIComponent(direction)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users   Returns a list of users, filtered according to query parameters
		 * Get {realm}/users
		 * @param {number} max Maximum results size (defaults to 100)
		 * @param {string} search A String contained in username, first or last name, or email
		 * @return {void} 
		 */
		_realmUsersGetByBriefRepresentationAndEmailAndFirstAndFirstNameAndLastNameAndMaxAndSearchAndUsername(briefRepresentation: boolean | null | undefined, email: string | null | undefined, first: number | null | undefined, firstName: string | null | undefined, lastName: string | null | undefined, max: number | null | undefined, search: string | null | undefined, username: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users?briefRepresentation=' + briefRepresentation + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&first=' + first + '&firstName=' + (firstName == null ? '' : encodeURIComponent(firstName)) + '&lastName=' + (lastName == null ? '' : encodeURIComponent(lastName)) + '&max=' + max + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new user   Username must be unique.
		 * Post {realm}/users
		 * @return {void} 
		 */
		_realmUsersPost(requestBody: UserRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/users-management-permissions
		 * @return {void} 
		 */
		_realmUsers_management_permissionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users-management-permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/users-management-permissions
		 * @return {void} 
		 */
		_realmUsers_management_permissionsPut(requestBody: ManagementPermissionReference, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/users-management-permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the number of users that match the given criteria.
		 * Get {realm}/users/count
		 * @param {string} email email filter
		 * @param {string} firstName first name filter
		 * @param {string} lastName last name filter
		 * @param {string} search arbitrary search string for all the fields below
		 * @param {string} username username filter
		 * @return {void} 
		 */
		_realmUsersCountGetByEmailAndFirstNameAndLastNameAndSearchAndUsername(email: string | null | undefined, firstName: string | null | undefined, lastName: string | null | undefined, search: string | null | undefined, username: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/count?email=' + (email == null ? '' : encodeURIComponent(email)) + '&firstName=' + (firstName == null ? '' : encodeURIComponent(firstName)) + '&lastName=' + (lastName == null ? '' : encodeURIComponent(lastName)) + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the user
		 * Delete {realm}/users/{id}
		 * @return {void} 
		 */
		_realmUsers_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/users/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get representation of the user
		 * Get {realm}/users/{id}
		 * @return {void} 
		 */
		_realmUsers_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the user
		 * Put {realm}/users/{id}
		 * @return {void} 
		 */
		_realmUsers_idPut(requestBody: UserRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/users/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Return credential types, which are provided by the user storage where user is stored.
		 * Get {realm}/users/{id}/configured-user-storage-credential-types
		 * @return {void} 
		 */
		_realmUsers_idConfigured_user_storage_credential_typesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/configured-user-storage-credential-types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get consents granted by the user
		 * Get {realm}/users/{id}/consents
		 * @return {void} 
		 */
		_realmUsers_idConsentsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/consents', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke consent and offline tokens for particular client from user
		 * Delete {realm}/users/{id}/consents/{client}
		 * @return {void} 
		 */
		_realmUsers_idConsents_clientDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/users/{id}/consents/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/users/{id}/credentials
		 * @return {void} 
		 */
		_realmUsers_idCredentialsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/credentials', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a credential for a user
		 * Delete {realm}/users/{id}/credentials/{credentialId}
		 * @return {void} 
		 */
		_realmUsers_idCredentials_credentialIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/users/{id}/credentials/{credentialId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Move a credential to a position behind another credential
		 * Post {realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}
		 * @return {void} 
		 */
		_realmUsers_idCredentials_credentialIdMoveAfter_newPreviousCredentialIdPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Move a credential to a first position in the credentials list of the user
		 * Post {realm}/users/{id}/credentials/{credentialId}/moveToFirst
		 * @return {void} 
		 */
		_realmUsers_idCredentials_credentialIdMoveToFirstPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users/{id}/credentials/{credentialId}/moveToFirst', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable all credentials for a user of a specific type
		 * Put {realm}/users/{id}/disable-credential-types
		 * @return {void} 
		 */
		_realmUsers_idDisable_credential_typesPut(requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/users/{id}/disable-credential-types', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
		 * Put {realm}/users/{id}/execute-actions-email
		 * @param {string} client_id Client id
		 * @param {number} lifespan Number of seconds after which the generated token expires
		 * @param {string} redirect_uri Redirect uri
		 * @param {Array<string>} requestBody required actions the user needs to complete
		 * @return {void} 
		 */
		_realmUsers_idExecute_actions_emailPutByClient_idAndLifespanAndRedirect_uri(client_id: string | null | undefined, lifespan: number | null | undefined, redirect_uri: string | null | undefined, requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/users/{id}/execute-actions-email?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&lifespan=' + lifespan + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get social logins associated with the user
		 * Get {realm}/users/{id}/federated-identity
		 * @return {void} 
		 */
		_realmUsers_idFederated_identityGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/federated-identity', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a social login provider from user
		 * Delete {realm}/users/{id}/federated-identity/{provider}
		 * @return {void} 
		 */
		_realmUsers_idFederated_identity_providerDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/users/{id}/federated-identity/{provider}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a social login provider to the user
		 * Post {realm}/users/{id}/federated-identity/{provider}
		 * @return {void} 
		 */
		_realmUsers_idFederated_identity_providerPost(requestBody: FederatedIdentityRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users/{id}/federated-identity/{provider}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/users/{id}/groups
		 * @return {void} 
		 */
		_realmUsers_idGroupsGetByBriefRepresentationAndFirstAndMaxAndSearch(briefRepresentation: boolean | null | undefined, first: number | null | undefined, max: number | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/groups?briefRepresentation=' + briefRepresentation + '&first=' + first + '&max=' + max + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {realm}/users/{id}/groups/count
		 * @return {void} 
		 */
		_realmUsers_idGroupsCountGetBySearch(search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/groups/count?search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {realm}/users/{id}/groups/{groupId}
		 * @return {void} 
		 */
		_realmUsers_idGroups_groupIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/users/{id}/groups/{groupId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {realm}/users/{id}/groups/{groupId}
		 * @return {void} 
		 */
		_realmUsers_idGroups_groupIdPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/users/{id}/groups/{groupId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Impersonate the user
		 * Post {realm}/users/{id}/impersonation
		 * @return {void} 
		 */
		_realmUsers_idImpersonationPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users/{id}/impersonation', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
		 * Post {realm}/users/{id}/logout
		 * @return {void} 
		 */
		_realmUsers_idLogoutPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users/{id}/logout', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get offline sessions associated with the user and client
		 * Get {realm}/users/{id}/offline-sessions/{clientId}
		 * @return {void} 
		 */
		_realmUsers_idOffline_sessions_clientIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/offline-sessions/{clientId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set up a new password for the user.
		 * Put {realm}/users/{id}/reset-password
		 * @param {CredentialRepresentation} requestBody The representation must contain a rawPassword with the plain-text password
		 * @return {void} 
		 */
		_realmUsers_idReset_passwordPut(requestBody: CredentialRepresentation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/users/{id}/reset-password', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get role mappings
		 * Get {realm}/users/{id}/role-mappings
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/role-mappings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete client-level roles from user role mapping
		 * Delete {realm}/users/{id}/role-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsClients_clientDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/users/{id}/role-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get client-level role mappings for the user, and the app
		 * Get {realm}/users/{id}/role-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsClients_clientGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/role-mappings/clients/{client}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add client-level roles to the user role mapping
		 * Post {realm}/users/{id}/role-mappings/clients/{client}
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsClients_clientPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users/{id}/role-mappings/clients/{client}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available client-level roles that can be mapped to the user
		 * Get {realm}/users/{id}/role-mappings/clients/{client}/available
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsClients_clientAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/role-mappings/clients/{client}/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective client-level role mappings   This recurses any composite roles
		 * Get {realm}/users/{id}/role-mappings/clients/{client}/composite
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsClients_clientCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/role-mappings/clients/{client}/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete realm-level role mappings
		 * Delete {realm}/users/{id}/role-mappings/realm
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsRealmDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{realm}/users/{id}/role-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level role mappings
		 * Get {realm}/users/{id}/role-mappings/realm
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsRealmGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/role-mappings/realm', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add realm-level role mappings to the user
		 * Post {realm}/users/{id}/role-mappings/realm
		 * @param {Array<RoleRepresentation>} requestBody Roles to add
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsRealmPost(requestBody: Array<RoleRepresentation>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{realm}/users/{id}/role-mappings/realm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get realm-level roles that can be mapped
		 * Get {realm}/users/{id}/role-mappings/realm/available
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsRealmAvailableGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/role-mappings/realm/available', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get effective realm-level role mappings   This will recurse all composite roles to get the result.
		 * Get {realm}/users/{id}/role-mappings/realm/composite
		 * @return {void} 
		 */
		_realmUsers_idRole_mappingsRealmCompositeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/role-mappings/realm/composite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
		 * Put {realm}/users/{id}/send-verify-email
		 * @param {string} client_id Client id
		 * @param {string} redirect_uri Redirect uri
		 * @return {void} 
		 */
		_realmUsers_idSend_verify_emailPutByClient_idAndRedirect_uri(client_id: string | null | undefined, redirect_uri: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{realm}/users/{id}/send-verify-email?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sessions associated with the user
		 * Get {realm}/users/{id}/sessions
		 * @return {void} 
		 */
		_realmUsers_idSessionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '{realm}/users/{id}/sessions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

