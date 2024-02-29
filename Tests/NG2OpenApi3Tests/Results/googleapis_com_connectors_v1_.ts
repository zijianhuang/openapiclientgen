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

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** AuthConfig defines details of a authentication type. */
	export interface AuthConfig {

		/** List containing additional auth configs. */
		additionalVariables?: Array<ConfigVariable>;

		/** Identifier key for auth config */
		authKey?: string | null;

		/** The type of authentication configured. */
		authType?: AuthConfigAuthType | null;

		/** Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details. */
		oauth2AuthCodeFlow?: Oauth2AuthCodeFlow;

		/** Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details. */
		oauth2ClientCredentials?: Oauth2ClientCredentials;

		/** Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details. */
		oauth2JwtBearer?: Oauth2JwtBearer;

		/** Parameters to support Ssh public key Authentication. */
		sshPublicKey?: SshPublicKey;

		/** Parameters to support Username and Password Authentication. */
		userPassword?: UserPassword;
	}

	/** AuthConfig defines details of a authentication type. */
	export interface AuthConfigFormProperties {

		/** Identifier key for auth config */
		authKey: FormControl<string | null | undefined>,

		/** The type of authentication configured. */
		authType: FormControl<AuthConfigAuthType | null | undefined>,
	}
	export function CreateAuthConfigFormGroup() {
		return new FormGroup<AuthConfigFormProperties>({
			authKey: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthConfigAuthType | null | undefined>(undefined),
		});

	}


	/** ConfigVariable represents a configuration variable present in a Connection. or AuthConfig. */
	export interface ConfigVariable {

		/** Value is a bool. */
		boolValue?: boolean | null;

		/** Encryption Key value. */
		encryptionKeyValue?: EncryptionKey;

		/** Value is an integer */
		intValue?: string | null;

		/** Key of the config variable. */
		key?: string | null;

		/** Secret provides a reference to entries in Secret Manager. */
		secretValue?: Secret;

		/** Value is a string. */
		stringValue?: string | null;
	}

	/** ConfigVariable represents a configuration variable present in a Connection. or AuthConfig. */
	export interface ConfigVariableFormProperties {

		/** Value is a bool. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Value is an integer */
		intValue: FormControl<string | null | undefined>,

		/** Key of the config variable. */
		key: FormControl<string | null | undefined>,

		/** Value is a string. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateConfigVariableFormGroup() {
		return new FormGroup<ConfigVariableFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encryption Key value. */
	export interface EncryptionKey {

		/** The [KMS key name] with which the content of the Operation is encrypted. The expected format: `projects/locations/keyRings/cryptoKeys/*`. Will be empty string if google managed. */
		kmsKeyName?: string | null;

		/** Type. */
		type?: EncryptionKeyType | null;
	}

	/** Encryption Key value. */
	export interface EncryptionKeyFormProperties {

		/** The [KMS key name] with which the content of the Operation is encrypted. The expected format: `projects/locations/keyRings/cryptoKeys/*`. Will be empty string if google managed. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Type. */
		type: FormControl<EncryptionKeyType | null | undefined>,
	}
	export function CreateEncryptionKeyFormGroup() {
		return new FormGroup<EncryptionKeyFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EncryptionKeyType | null | undefined>(undefined),
		});

	}

	export enum EncryptionKeyType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GOOGLE_MANAGED = 'GOOGLE_MANAGED', CUSTOMER_MANAGED = 'CUSTOMER_MANAGED' }


	/** Secret provides a reference to entries in Secret Manager. */
	export interface Secret {

		/** The resource name of the secret version in the format, format as: `projects/secrets/versions/*`. */
		secretVersion?: string | null;
	}

	/** Secret provides a reference to entries in Secret Manager. */
	export interface SecretFormProperties {

		/** The resource name of the secret version in the format, format as: `projects/secrets/versions/*`. */
		secretVersion: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			secretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthConfigAuthType { AUTH_TYPE_UNSPECIFIED = 'AUTH_TYPE_UNSPECIFIED', USER_PASSWORD = 'USER_PASSWORD', OAUTH2_JWT_BEARER = 'OAUTH2_JWT_BEARER', OAUTH2_CLIENT_CREDENTIALS = 'OAUTH2_CLIENT_CREDENTIALS', SSH_PUBLIC_KEY = 'SSH_PUBLIC_KEY', OAUTH2_AUTH_CODE_FLOW = 'OAUTH2_AUTH_CODE_FLOW', GOOGLE_AUTHENTICATION = 'GOOGLE_AUTHENTICATION' }


	/** Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details. */
	export interface Oauth2AuthCodeFlow {

		/** Authorization code to be exchanged for access and refresh tokens. */
		authCode?: string | null;

		/** Auth URL for Authorization Code Flow */
		authUri?: string | null;

		/** Client ID for user-provided OAuth app. */
		clientId?: string | null;

		/** Secret provides a reference to entries in Secret Manager. */
		clientSecret?: Secret;

		/** Whether to enable PKCE when the user performs the auth code flow. */
		enablePkce?: boolean | null;

		/** PKCE verifier to be used during the auth code exchange. */
		pkceVerifier?: string | null;

		/** Redirect URI to be provided during the auth code exchange. */
		redirectUri?: string | null;

		/** Scopes the connection will request when the user performs the auth code flow. */
		scopes?: Array<string>;
	}

	/** Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details. */
	export interface Oauth2AuthCodeFlowFormProperties {

		/** Authorization code to be exchanged for access and refresh tokens. */
		authCode: FormControl<string | null | undefined>,

		/** Auth URL for Authorization Code Flow */
		authUri: FormControl<string | null | undefined>,

		/** Client ID for user-provided OAuth app. */
		clientId: FormControl<string | null | undefined>,

		/** Whether to enable PKCE when the user performs the auth code flow. */
		enablePkce: FormControl<boolean | null | undefined>,

		/** PKCE verifier to be used during the auth code exchange. */
		pkceVerifier: FormControl<string | null | undefined>,

		/** Redirect URI to be provided during the auth code exchange. */
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateOauth2AuthCodeFlowFormGroup() {
		return new FormGroup<Oauth2AuthCodeFlowFormProperties>({
			authCode: new FormControl<string | null | undefined>(undefined),
			authUri: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			enablePkce: new FormControl<boolean | null | undefined>(undefined),
			pkceVerifier: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details. */
	export interface Oauth2ClientCredentials {

		/** The client identifier. */
		clientId?: string | null;

		/** Secret provides a reference to entries in Secret Manager. */
		clientSecret?: Secret;
	}

	/** Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details. */
	export interface Oauth2ClientCredentialsFormProperties {

		/** The client identifier. */
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateOauth2ClientCredentialsFormGroup() {
		return new FormGroup<Oauth2ClientCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details. */
	export interface Oauth2JwtBearer {

		/** Secret provides a reference to entries in Secret Manager. */
		clientKey?: Secret;

		/** JWT claims used for the jwt-bearer authorization grant. */
		jwtClaims?: JwtClaims;
	}

	/** Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details. */
	export interface Oauth2JwtBearerFormProperties {
	}
	export function CreateOauth2JwtBearerFormGroup() {
		return new FormGroup<Oauth2JwtBearerFormProperties>({
		});

	}


	/** JWT claims used for the jwt-bearer authorization grant. */
	export interface JwtClaims {

		/** Value for the "aud" claim. */
		audience?: string | null;

		/** Value for the "iss" claim. */
		issuer?: string | null;

		/** Value for the "sub" claim. */
		subject?: string | null;
	}

	/** JWT claims used for the jwt-bearer authorization grant. */
	export interface JwtClaimsFormProperties {

		/** Value for the "aud" claim. */
		audience: FormControl<string | null | undefined>,

		/** Value for the "iss" claim. */
		issuer: FormControl<string | null | undefined>,

		/** Value for the "sub" claim. */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateJwtClaimsFormGroup() {
		return new FormGroup<JwtClaimsFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support Ssh public key Authentication. */
	export interface SshPublicKey {

		/** Format of SSH Client cert. */
		certType?: string | null;

		/** Secret provides a reference to entries in Secret Manager. */
		sshClientCert?: Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		sshClientCertPass?: Secret;

		/** The user account used to authenticate. */
		username?: string | null;
	}

	/** Parameters to support Ssh public key Authentication. */
	export interface SshPublicKeyFormProperties {

		/** Format of SSH Client cert. */
		certType: FormControl<string | null | undefined>,

		/** The user account used to authenticate. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSshPublicKeyFormGroup() {
		return new FormGroup<SshPublicKeyFormProperties>({
			certType: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support Username and Password Authentication. */
	export interface UserPassword {

		/** Secret provides a reference to entries in Secret Manager. */
		password?: Secret;

		/** Username. */
		username?: string | null;
	}

	/** Parameters to support Username and Password Authentication. */
	export interface UserPasswordFormProperties {

		/** Username. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserPasswordFormGroup() {
		return new FormGroup<UserPasswordFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AuthConfigTemplate defines required field over an authentication type. */
	export interface AuthConfigTemplate {

		/** Identifier key for auth config */
		authKey?: string | null;

		/** The type of authentication configured. */
		authType?: AuthConfigAuthType | null;

		/** Config variables to describe an `AuthConfig` for a `Connection`. */
		configVariableTemplates?: Array<ConfigVariableTemplate>;

		/** Connector specific description for an authentication template. */
		description?: string | null;

		/** Display name for authentication template. */
		displayName?: string | null;
	}

	/** AuthConfigTemplate defines required field over an authentication type. */
	export interface AuthConfigTemplateFormProperties {

		/** Identifier key for auth config */
		authKey: FormControl<string | null | undefined>,

		/** The type of authentication configured. */
		authType: FormControl<AuthConfigAuthType | null | undefined>,

		/** Connector specific description for an authentication template. */
		description: FormControl<string | null | undefined>,

		/** Display name for authentication template. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateAuthConfigTemplateFormGroup() {
		return new FormGroup<AuthConfigTemplateFormProperties>({
			authKey: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthConfigAuthType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection. */
	export interface ConfigVariableTemplate {

		/** This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow. */
		authorizationCodeLink?: AuthorizationCodeLink;

		/** Description. */
		description?: string | null;

		/** Display name of the parameter. */
		displayName?: string | null;

		/** Enum options. To be populated if `ValueType` is `ENUM` */
		enumOptions?: Array<EnumOption>;

		/** Indicates if current template is part of advanced settings */
		isAdvanced?: boolean | null;

		/** Key of the config variable. */
		key?: string | null;

		/** Optional. Location Tyep denotes where this value should be sent in BYOC connections. */
		locationType?: ConfigVariableTemplateLocationType | null;

		/** Flag represents that this `ConfigVariable` must be provided for a connection. */
		required?: boolean | null;

		/** Struct for representing boolean expressions. */
		requiredCondition?: LogicalExpression;

		/** This configuration defines all the Cloud IAM roles that needs to be granted to a particular Google Cloud resource for the selected principal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user. */
		roleGrant?: RoleGrant;

		/** State of the config variable. */
		state?: ConfigVariableTemplateState | null;

		/** Regular expression in RE2 syntax used for validating the `value` of a `ConfigVariable`. */
		validationRegex?: string | null;

		/** Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation. */
		valueType?: ConfigVariableTemplateValueType | null;
	}

	/** ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection. */
	export interface ConfigVariableTemplateFormProperties {

		/** Description. */
		description: FormControl<string | null | undefined>,

		/** Display name of the parameter. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if current template is part of advanced settings */
		isAdvanced: FormControl<boolean | null | undefined>,

		/** Key of the config variable. */
		key: FormControl<string | null | undefined>,

		/** Optional. Location Tyep denotes where this value should be sent in BYOC connections. */
		locationType: FormControl<ConfigVariableTemplateLocationType | null | undefined>,

		/** Flag represents that this `ConfigVariable` must be provided for a connection. */
		required: FormControl<boolean | null | undefined>,

		/** State of the config variable. */
		state: FormControl<ConfigVariableTemplateState | null | undefined>,

		/** Regular expression in RE2 syntax used for validating the `value` of a `ConfigVariable`. */
		validationRegex: FormControl<string | null | undefined>,

		/** Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation. */
		valueType: FormControl<ConfigVariableTemplateValueType | null | undefined>,
	}
	export function CreateConfigVariableTemplateFormGroup() {
		return new FormGroup<ConfigVariableTemplateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isAdvanced: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			locationType: new FormControl<ConfigVariableTemplateLocationType | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<ConfigVariableTemplateState | null | undefined>(undefined),
			validationRegex: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<ConfigVariableTemplateValueType | null | undefined>(undefined),
		});

	}


	/** This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow. */
	export interface AuthorizationCodeLink {

		/** The client ID assigned to the Google Cloud Connectors OAuth app for the connector data source. */
		clientId?: string | null;

		/** Whether to enable PKCE for the auth code flow. */
		enablePkce?: boolean | null;

		/** The scopes for which the user will authorize Google Cloud Connectors on the connector data source. */
		scopes?: Array<string>;

		/** The base URI the user must click to trigger the authorization code login flow. */
		uri?: string | null;
	}

	/** This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow. */
	export interface AuthorizationCodeLinkFormProperties {

		/** The client ID assigned to the Google Cloud Connectors OAuth app for the connector data source. */
		clientId: FormControl<string | null | undefined>,

		/** Whether to enable PKCE for the auth code flow. */
		enablePkce: FormControl<boolean | null | undefined>,

		/** The base URI the user must click to trigger the authorization code login flow. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationCodeLinkFormGroup() {
		return new FormGroup<AuthorizationCodeLinkFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			enablePkce: new FormControl<boolean | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnumOption definition */
	export interface EnumOption {

		/** Display name of the option. */
		displayName?: string | null;

		/** Id of the option. */
		id?: string | null;
	}

	/** EnumOption definition */
	export interface EnumOptionFormProperties {

		/** Display name of the option. */
		displayName: FormControl<string | null | undefined>,

		/** Id of the option. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateEnumOptionFormGroup() {
		return new FormGroup<EnumOptionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigVariableTemplateLocationType { LOCATION_TYPE_UNSPECIFIED = 'LOCATION_TYPE_UNSPECIFIED', HEADER = 'HEADER', PAYLOAD = 'PAYLOAD', QUERY_PARAM = 'QUERY_PARAM', PATH_PARAM = 'PATH_PARAM' }


	/** Struct for representing boolean expressions. */
	export interface LogicalExpression {

		/** A list of fields to be compared. */
		fieldComparisons?: Array<FieldComparison>;

		/** A list of nested conditions to be compared. */
		logicalExpressions?: Array<LogicalExpression>;

		/** The logical operator to use between the fields and conditions. */
		logicalOperator?: LogicalExpressionLogicalOperator | null;
	}

	/** Struct for representing boolean expressions. */
	export interface LogicalExpressionFormProperties {

		/** The logical operator to use between the fields and conditions. */
		logicalOperator: FormControl<LogicalExpressionLogicalOperator | null | undefined>,
	}
	export function CreateLogicalExpressionFormGroup() {
		return new FormGroup<LogicalExpressionFormProperties>({
			logicalOperator: new FormControl<LogicalExpressionLogicalOperator | null | undefined>(undefined),
		});

	}


	/** Field that needs to be compared. */
	export interface FieldComparison {

		/** Boolean value */
		boolValue?: boolean | null;

		/** Comparator to use for comparing the field value. */
		comparator?: FieldComparisonComparator | null;

		/** Integer value */
		intValue?: string | null;

		/** Key of the field. */
		key?: string | null;

		/** String value */
		stringValue?: string | null;
	}

	/** Field that needs to be compared. */
	export interface FieldComparisonFormProperties {

		/** Boolean value */
		boolValue: FormControl<boolean | null | undefined>,

		/** Comparator to use for comparing the field value. */
		comparator: FormControl<FieldComparisonComparator | null | undefined>,

		/** Integer value */
		intValue: FormControl<string | null | undefined>,

		/** Key of the field. */
		key: FormControl<string | null | undefined>,

		/** String value */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateFieldComparisonFormGroup() {
		return new FormGroup<FieldComparisonFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			comparator: new FormControl<FieldComparisonComparator | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldComparisonComparator { COMPARATOR_UNSPECIFIED = 'COMPARATOR_UNSPECIFIED', EQUALS = 'EQUALS', NOT_EQUALS = 'NOT_EQUALS' }

	export enum LogicalExpressionLogicalOperator { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', AND = 'AND', OR = 'OR' }


	/** This configuration defines all the Cloud IAM roles that needs to be granted to a particular Google Cloud resource for the selected principal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user. */
	export interface RoleGrant {

		/** Template that UI can use to provide helper text to customers. */
		helperTextTemplate?: string | null;

		/** Prinicipal/Identity for whom the role need to assigned. */
		principal?: RoleGrantPrincipal | null;

		/** Resource definition */
		resource?: Resource;

		/** List of roles that need to be granted. */
		roles?: Array<string>;
	}

	/** This configuration defines all the Cloud IAM roles that needs to be granted to a particular Google Cloud resource for the selected principal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user. */
	export interface RoleGrantFormProperties {

		/** Template that UI can use to provide helper text to customers. */
		helperTextTemplate: FormControl<string | null | undefined>,

		/** Prinicipal/Identity for whom the role need to assigned. */
		principal: FormControl<RoleGrantPrincipal | null | undefined>,
	}
	export function CreateRoleGrantFormGroup() {
		return new FormGroup<RoleGrantFormProperties>({
			helperTextTemplate: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<RoleGrantPrincipal | null | undefined>(undefined),
		});

	}

	export enum RoleGrantPrincipal { PRINCIPAL_UNSPECIFIED = 'PRINCIPAL_UNSPECIFIED', CONNECTOR_SA = 'CONNECTOR_SA' }


	/** Resource definition */
	export interface Resource {

		/** Template to uniquely represent a Google Cloud resource in a format IAM expects This is a template that can have references to other values provided in the config variable template. */
		pathTemplate?: string | null;

		/** Different types of resource supported. */
		type?: ResourceType | null;
	}

	/** Resource definition */
	export interface ResourceFormProperties {

		/** Template to uniquely represent a Google Cloud resource in a format IAM expects This is a template that can have references to other values provided in the config variable template. */
		pathTemplate: FormControl<string | null | undefined>,

		/** Different types of resource supported. */
		type: FormControl<ResourceType | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			pathTemplate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	export enum ResourceType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GCP_PROJECT = 'GCP_PROJECT', GCP_RESOURCE = 'GCP_RESOURCE', GCP_SECRETMANAGER_SECRET = 'GCP_SECRETMANAGER_SECRET', GCP_SECRETMANAGER_SECRET_VERSION = 'GCP_SECRETMANAGER_SECRET_VERSION' }

	export enum ConfigVariableTemplateState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DEPRECATED = 'DEPRECATED' }

	export enum ConfigVariableTemplateValueType { VALUE_TYPE_UNSPECIFIED = 'VALUE_TYPE_UNSPECIFIED', STRING = 'STRING', INT = 'INT', BOOL = 'BOOL', SECRET = 'SECRET', ENUM = 'ENUM', AUTHORIZATION_CODE = 'AUTHORIZATION_CODE', ENCRYPTION_KEY = 'ENCRYPTION_KEY' }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
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


	/** Connection represents an instance of connector. */
	export interface Connection {

		/** AuthConfig defines details of a authentication type. */
		authConfig?: AuthConfig;

		/** Optional. Configuration for configuring the connection with an external system. */
		configVariables?: Array<ConfigVariable>;

		/** Output only. Connection revision. This field is only updated when the connection is created or updated by User. */
		connectionRevision?: string | null;

		/** Required. Connector version on which the connection is created. The format is: projects/locations/providers/connectors/versions/* Only global location is supported for ConnectorVersion resource. */
		connectorVersion?: string | null;

		/** This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version */
		connectorVersionInfraConfig?: ConnectorVersionInfraConfig;

		/** Output only. Flag to mark the version indicating the launch stage. */
		connectorVersionLaunchStage?: ConnectionConnectorVersionLaunchStage | null;

		/** Output only. Created time. */
		createTime?: string | null;

		/** Optional. Description of the resource. */
		description?: string | null;

		/** Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s). */
		destinationConfigs?: Array<DestinationConfig>;

		/** Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		envoyImageLocation?: string | null;

		/** Eventing Configuration of a connection */
		eventingConfig?: EventingConfig;

		/** Optional. Eventing enablement type. Will be nil if eventing is not enabled. */
		eventingEnablementType?: ConnectionEventingEnablementType | null;

		/** Eventing runtime data has the details related to eventing managed by the system. */
		eventingRuntimeData?: EventingRuntimeData;

		/** Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		imageLocation?: string | null;

		/** Output only. Is trusted tester program enabled for the project. */
		isTrustedTester?: boolean | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Determines whether or no a connection is locked. If locked, a reason must be specified. */
		lockConfig?: LockConfig;

		/** Log configuration for the connection. */
		logConfig?: ConnectorsLogConfig;

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
		name?: string | null;

		/** Node configuration for the connection. */
		nodeConfig?: NodeConfig;

		/** Optional. Service account needed for runtime plane to access Google Cloud resources. */
		serviceAccount?: string | null;

		/** Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors" */
		serviceDirectory?: string | null;

		/** SSL Configuration of a connection */
		sslConfig?: SslConfig;

		/** ConnectionStatus indicates the state of the connection. */
		status?: ConnectionStatus;

		/** Output only. This subscription type enum states the subscription type of the project. */
		subscriptionType?: ConnectionSubscriptionType | null;

		/** Optional. Suspended indicates if a user has suspended a connection or not. */
		suspended?: boolean | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** Connection represents an instance of connector. */
	export interface ConnectionFormProperties {

		/** Output only. Connection revision. This field is only updated when the connection is created or updated by User. */
		connectionRevision: FormControl<string | null | undefined>,

		/** Required. Connector version on which the connection is created. The format is: projects/locations/providers/connectors/versions/* Only global location is supported for ConnectorVersion resource. */
		connectorVersion: FormControl<string | null | undefined>,

		/** Output only. Flag to mark the version indicating the launch stage. */
		connectorVersionLaunchStage: FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>,

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		envoyImageLocation: FormControl<string | null | undefined>,

		/** Optional. Eventing enablement type. Will be nil if eventing is not enabled. */
		eventingEnablementType: FormControl<ConnectionEventingEnablementType | null | undefined>,

		/** Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		imageLocation: FormControl<string | null | undefined>,

		/** Output only. Is trusted tester program enabled for the project. */
		isTrustedTester: FormControl<boolean | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
		name: FormControl<string | null | undefined>,

		/** Optional. Service account needed for runtime plane to access Google Cloud resources. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors" */
		serviceDirectory: FormControl<string | null | undefined>,

		/** Output only. This subscription type enum states the subscription type of the project. */
		subscriptionType: FormControl<ConnectionSubscriptionType | null | undefined>,

		/** Optional. Suspended indicates if a user has suspended a connection or not. */
		suspended: FormControl<boolean | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			connectionRevision: new FormControl<string | null | undefined>(undefined),
			connectorVersion: new FormControl<string | null | undefined>(undefined),
			connectorVersionLaunchStage: new FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			envoyImageLocation: new FormControl<string | null | undefined>(undefined),
			eventingEnablementType: new FormControl<ConnectionEventingEnablementType | null | undefined>(undefined),
			imageLocation: new FormControl<string | null | undefined>(undefined),
			isTrustedTester: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			serviceDirectory: new FormControl<string | null | undefined>(undefined),
			subscriptionType: new FormControl<ConnectionSubscriptionType | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version */
	export interface ConnectorVersionInfraConfig {

		/** Output only. The window used for ratelimiting runtime requests to connections. */
		connectionRatelimitWindowSeconds?: string | null;

		/** Optional. Indicates whether connector is deployed on GKE/CloudRun */
		deploymentModel?: ConnectorVersionInfraConfigDeploymentModel | null;

		/** Autoscaling config for connector deployment system metrics. */
		hpaConfig?: HPAConfig;

		/** Output only. Max QPS supported for internal requests originating from Connd. */
		internalclientRatelimitThreshold?: string | null;

		/** Output only. Max QPS supported by the connector version before throttling of requests. */
		ratelimitThreshold?: string | null;

		/** Resource limits defined for connection pods of a given connector type. */
		resourceLimits?: ResourceLimits;

		/** Resource requests defined for connection pods of a given connector type. */
		resourceRequests?: ResourceRequests;

		/** Output only. The name of shared connector deployment. */
		sharedDeployment?: string | null;
	}

	/** This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version */
	export interface ConnectorVersionInfraConfigFormProperties {

		/** Output only. The window used for ratelimiting runtime requests to connections. */
		connectionRatelimitWindowSeconds: FormControl<string | null | undefined>,

		/** Optional. Indicates whether connector is deployed on GKE/CloudRun */
		deploymentModel: FormControl<ConnectorVersionInfraConfigDeploymentModel | null | undefined>,

		/** Output only. Max QPS supported for internal requests originating from Connd. */
		internalclientRatelimitThreshold: FormControl<string | null | undefined>,

		/** Output only. Max QPS supported by the connector version before throttling of requests. */
		ratelimitThreshold: FormControl<string | null | undefined>,

		/** Output only. The name of shared connector deployment. */
		sharedDeployment: FormControl<string | null | undefined>,
	}
	export function CreateConnectorVersionInfraConfigFormGroup() {
		return new FormGroup<ConnectorVersionInfraConfigFormProperties>({
			connectionRatelimitWindowSeconds: new FormControl<string | null | undefined>(undefined),
			deploymentModel: new FormControl<ConnectorVersionInfraConfigDeploymentModel | null | undefined>(undefined),
			internalclientRatelimitThreshold: new FormControl<string | null | undefined>(undefined),
			ratelimitThreshold: new FormControl<string | null | undefined>(undefined),
			sharedDeployment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorVersionInfraConfigDeploymentModel { DEPLOYMENT_MODEL_UNSPECIFIED = 'DEPLOYMENT_MODEL_UNSPECIFIED', GKE_MST = 'GKE_MST', CLOUD_RUN_MST = 'CLOUD_RUN_MST' }


	/** Autoscaling config for connector deployment system metrics. */
	export interface HPAConfig {

		/** Output only. Percent CPU utilization where HPA triggers autoscaling. */
		cpuUtilizationThreshold?: string | null;

		/** Output only. Percent Memory utilization where HPA triggers autoscaling. */
		memoryUtilizationThreshold?: string | null;
	}

	/** Autoscaling config for connector deployment system metrics. */
	export interface HPAConfigFormProperties {

		/** Output only. Percent CPU utilization where HPA triggers autoscaling. */
		cpuUtilizationThreshold: FormControl<string | null | undefined>,

		/** Output only. Percent Memory utilization where HPA triggers autoscaling. */
		memoryUtilizationThreshold: FormControl<string | null | undefined>,
	}
	export function CreateHPAConfigFormGroup() {
		return new FormGroup<HPAConfigFormProperties>({
			cpuUtilizationThreshold: new FormControl<string | null | undefined>(undefined),
			memoryUtilizationThreshold: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource limits defined for connection pods of a given connector type. */
	export interface ResourceLimits {

		/** Output only. CPU limit. */
		cpu?: string | null;

		/** Output only. Memory limit. */
		memory?: string | null;
	}

	/** Resource limits defined for connection pods of a given connector type. */
	export interface ResourceLimitsFormProperties {

		/** Output only. CPU limit. */
		cpu: FormControl<string | null | undefined>,

		/** Output only. Memory limit. */
		memory: FormControl<string | null | undefined>,
	}
	export function CreateResourceLimitsFormGroup() {
		return new FormGroup<ResourceLimitsFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource requests defined for connection pods of a given connector type. */
	export interface ResourceRequests {

		/** Output only. CPU request. */
		cpu?: string | null;

		/** Output only. Memory request. */
		memory?: string | null;
	}

	/** Resource requests defined for connection pods of a given connector type. */
	export interface ResourceRequestsFormProperties {

		/** Output only. CPU request. */
		cpu: FormControl<string | null | undefined>,

		/** Output only. Memory request. */
		memory: FormControl<string | null | undefined>,
	}
	export function CreateResourceRequestsFormGroup() {
		return new FormGroup<ResourceRequestsFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionConnectorVersionLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 'LAUNCH_STAGE_UNSPECIFIED', PREVIEW = 'PREVIEW', GA = 'GA', DEPRECATED = 'DEPRECATED', PRIVATE_PREVIEW = 'PRIVATE_PREVIEW' }


	/** Define the Connectors target endpoint. */
	export interface DestinationConfig {

		/** The destinations for the key. */
		destinations?: Array<Destination>;

		/** The key is the destination identifier that is supported by the Connector. */
		key?: string | null;
	}

	/** Define the Connectors target endpoint. */
	export interface DestinationConfigFormProperties {

		/** The key is the destination identifier that is supported by the Connector. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateDestinationConfigFormGroup() {
		return new FormGroup<DestinationConfigFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Destination {

		/** For publicly routable host. */
		host?: string | null;

		/**
		 * The port is the target port number that is accepted by the destination.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** PSC service attachments. Format: projects/regions/serviceAttachments/* */
		serviceAttachment?: string | null;
	}
	export interface DestinationFormProperties {

		/** For publicly routable host. */
		host: FormControl<string | null | undefined>,

		/**
		 * The port is the target port number that is accepted by the destination.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** PSC service attachments. Format: projects/regions/serviceAttachments/* */
		serviceAttachment: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			serviceAttachment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Eventing Configuration of a connection */
	export interface EventingConfig {

		/** Additional eventing related field values */
		additionalVariables?: Array<ConfigVariable>;

		/** AuthConfig defines details of a authentication type. */
		authConfig?: AuthConfig;

		/** Dead Letter configuration details provided by the user. */
		deadLetterConfig?: DeadLetterConfig;

		/** Enrichment Enabled. */
		enrichmentEnabled?: boolean | null;

		/** Optional. Ingress endpoint of the event listener. This is used only when private connectivity is enabled. */
		eventsListenerIngressEndpoint?: string | null;

		/** AuthConfig defines details of a authentication type. */
		listenerAuthConfig?: AuthConfig;

		/** Optional. Private Connectivity Enabled. */
		privateConnectivityEnabled?: boolean | null;

		/** Define the Connectors target endpoint. */
		registrationDestinationConfig?: DestinationConfig;
	}

	/** Eventing Configuration of a connection */
	export interface EventingConfigFormProperties {

		/** Enrichment Enabled. */
		enrichmentEnabled: FormControl<boolean | null | undefined>,

		/** Optional. Ingress endpoint of the event listener. This is used only when private connectivity is enabled. */
		eventsListenerIngressEndpoint: FormControl<string | null | undefined>,

		/** Optional. Private Connectivity Enabled. */
		privateConnectivityEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventingConfigFormGroup() {
		return new FormGroup<EventingConfigFormProperties>({
			enrichmentEnabled: new FormControl<boolean | null | undefined>(undefined),
			eventsListenerIngressEndpoint: new FormControl<string | null | undefined>(undefined),
			privateConnectivityEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Dead Letter configuration details provided by the user. */
	export interface DeadLetterConfig {

		/** Optional. Project which has the topic given. */
		projectId?: string | null;

		/** Optional. Topic to push events which couldn't be processed. */
		topic?: string | null;
	}

	/** Dead Letter configuration details provided by the user. */
	export interface DeadLetterConfigFormProperties {

		/** Optional. Project which has the topic given. */
		projectId: FormControl<string | null | undefined>,

		/** Optional. Topic to push events which couldn't be processed. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateDeadLetterConfigFormGroup() {
		return new FormGroup<DeadLetterConfigFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionEventingEnablementType { EVENTING_ENABLEMENT_TYPE_UNSPECIFIED = 'EVENTING_ENABLEMENT_TYPE_UNSPECIFIED', EVENTING_AND_CONNECTION = 'EVENTING_AND_CONNECTION', ONLY_EVENTING = 'ONLY_EVENTING' }


	/** Eventing runtime data has the details related to eventing managed by the system. */
	export interface EventingRuntimeData {

		/** Output only. Events listener endpoint. The value will populated after provisioning the events listener. */
		eventsListenerEndpoint?: string | null;

		/** Output only. Events listener PSC Service attachment. The value will be populated after provisioning the events listener with private connectivity enabled. */
		eventsListenerPscSa?: string | null;

		/** EventingStatus indicates the state of eventing. */
		status?: EventingStatus;
	}

	/** Eventing runtime data has the details related to eventing managed by the system. */
	export interface EventingRuntimeDataFormProperties {

		/** Output only. Events listener endpoint. The value will populated after provisioning the events listener. */
		eventsListenerEndpoint: FormControl<string | null | undefined>,

		/** Output only. Events listener PSC Service attachment. The value will be populated after provisioning the events listener with private connectivity enabled. */
		eventsListenerPscSa: FormControl<string | null | undefined>,
	}
	export function CreateEventingRuntimeDataFormGroup() {
		return new FormGroup<EventingRuntimeDataFormProperties>({
			eventsListenerEndpoint: new FormControl<string | null | undefined>(undefined),
			eventsListenerPscSa: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EventingStatus indicates the state of eventing. */
	export interface EventingStatus {

		/** Output only. Description of error if State is set to "ERROR". */
		description?: string | null;

		/** Output only. State. */
		state?: EventingStatusState | null;
	}

	/** EventingStatus indicates the state of eventing. */
	export interface EventingStatusFormProperties {

		/** Output only. Description of error if State is set to "ERROR". */
		description: FormControl<string | null | undefined>,

		/** Output only. State. */
		state: FormControl<EventingStatusState | null | undefined>,
	}
	export function CreateEventingStatusFormGroup() {
		return new FormGroup<EventingStatusFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventingStatusState | null | undefined>(undefined),
		});

	}

	export enum EventingStatusState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', ERROR = 'ERROR', INGRESS_ENDPOINT_REQUIRED = 'INGRESS_ENDPOINT_REQUIRED' }


	/** Determines whether or no a connection is locked. If locked, a reason must be specified. */
	export interface LockConfig {

		/** Indicates whether or not the connection is locked. */
		locked?: boolean | null;

		/** Describes why a connection is locked. */
		reason?: string | null;
	}

	/** Determines whether or no a connection is locked. If locked, a reason must be specified. */
	export interface LockConfigFormProperties {

		/** Indicates whether or not the connection is locked. */
		locked: FormControl<boolean | null | undefined>,

		/** Describes why a connection is locked. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateLockConfigFormGroup() {
		return new FormGroup<LockConfigFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Log configuration for the connection. */
	export interface ConnectorsLogConfig {

		/** Enabled represents whether logging is enabled or not for a connection. */
		enabled?: boolean | null;
	}

	/** Log configuration for the connection. */
	export interface ConnectorsLogConfigFormProperties {

		/** Enabled represents whether logging is enabled or not for a connection. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectorsLogConfigFormGroup() {
		return new FormGroup<ConnectorsLogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Node configuration for the connection. */
	export interface NodeConfig {

		/**
		 * Maximum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNodeCount?: number | null;

		/**
		 * Minimum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minNodeCount?: number | null;
	}

	/** Node configuration for the connection. */
	export interface NodeConfigFormProperties {

		/**
		 * Maximum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNodeCount: FormControl<number | null | undefined>,

		/**
		 * Minimum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minNodeCount: FormControl<number | null | undefined>,
	}
	export function CreateNodeConfigFormGroup() {
		return new FormGroup<NodeConfigFormProperties>({
			maxNodeCount: new FormControl<number | null | undefined>(undefined),
			minNodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** SSL Configuration of a connection */
	export interface SslConfig {

		/** Additional SSL related field values */
		additionalVariables?: Array<ConfigVariable>;

		/** Type of Client Cert (PEM/JKS/.. etc.) */
		clientCertType?: SslConfigClientCertType | null;

		/** Secret provides a reference to entries in Secret Manager. */
		clientCertificate?: Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		clientPrivateKey?: Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		clientPrivateKeyPass?: Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		privateServerCertificate?: Secret;

		/** Type of Server Cert (PEM/JKS/.. etc.) */
		serverCertType?: SslConfigClientCertType | null;

		/** Trust Model of the SSL connection */
		trustModel?: SslConfigTrustModel | null;

		/** Controls the ssl type for the given connector version. */
		type?: SslConfigType | null;

		/** Bool for enabling SSL */
		useSsl?: boolean | null;
	}

	/** SSL Configuration of a connection */
	export interface SslConfigFormProperties {

		/** Type of Client Cert (PEM/JKS/.. etc.) */
		clientCertType: FormControl<SslConfigClientCertType | null | undefined>,

		/** Type of Server Cert (PEM/JKS/.. etc.) */
		serverCertType: FormControl<SslConfigClientCertType | null | undefined>,

		/** Trust Model of the SSL connection */
		trustModel: FormControl<SslConfigTrustModel | null | undefined>,

		/** Controls the ssl type for the given connector version. */
		type: FormControl<SslConfigType | null | undefined>,

		/** Bool for enabling SSL */
		useSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateSslConfigFormGroup() {
		return new FormGroup<SslConfigFormProperties>({
			clientCertType: new FormControl<SslConfigClientCertType | null | undefined>(undefined),
			serverCertType: new FormControl<SslConfigClientCertType | null | undefined>(undefined),
			trustModel: new FormControl<SslConfigTrustModel | null | undefined>(undefined),
			type: new FormControl<SslConfigType | null | undefined>(undefined),
			useSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SslConfigClientCertType { CERT_TYPE_UNSPECIFIED = 'CERT_TYPE_UNSPECIFIED', PEM = 'PEM' }

	export enum SslConfigTrustModel { PUBLIC = 'PUBLIC', PRIVATE = 'PRIVATE', INSECURE = 'INSECURE' }

	export enum SslConfigType { SSL_TYPE_UNSPECIFIED = 'SSL_TYPE_UNSPECIFIED', TLS = 'TLS', MTLS = 'MTLS' }


	/** ConnectionStatus indicates the state of the connection. */
	export interface ConnectionStatus {

		/** Description. */
		description?: string | null;

		/** State. */
		state?: ConnectionStatusState | null;

		/** Status provides detailed information for the state. */
		status?: string | null;
	}

	/** ConnectionStatus indicates the state of the connection. */
	export interface ConnectionStatusFormProperties {

		/** Description. */
		description: FormControl<string | null | undefined>,

		/** State. */
		state: FormControl<ConnectionStatusState | null | undefined>,

		/** Status provides detailed information for the state. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateConnectionStatusFormGroup() {
		return new FormGroup<ConnectionStatusFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConnectionStatusState | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionStatusState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', DELETING = 'DELETING', UPDATING = 'UPDATING', ERROR = 'ERROR', AUTHORIZATION_REQUIRED = 'AUTHORIZATION_REQUIRED' }

	export enum ConnectionSubscriptionType { SUBSCRIPTION_TYPE_UNSPECIFIED = 'SUBSCRIPTION_TYPE_UNSPECIFIED', PAY_G = 'PAY_G', PAID = 'PAID' }


	/** ConnectionSchemaMetadata is the singleton resource of each connection. It includes the entity and action names of runtime resources exposed by a connection backend. */
	export interface ConnectionSchemaMetadata {

		/** Output only. List of actions. */
		actions?: Array<string>;

		/** Output only. List of entity names. */
		entities?: Array<string>;

		/** Error message for users. */
		errorMessage?: string | null;

		/** Output only. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
		name?: string | null;

		/** Output only. Timestamp when the connection runtime schema refresh was triggered. */
		refreshTime?: string | null;

		/** Output only. The current state of runtime schema. */
		state?: ConnectionSchemaMetadataState | null;

		/** Output only. Timestamp when the connection runtime schema was updated. */
		updateTime?: string | null;
	}

	/** ConnectionSchemaMetadata is the singleton resource of each connection. It includes the entity and action names of runtime resources exposed by a connection backend. */
	export interface ConnectionSchemaMetadataFormProperties {

		/** Error message for users. */
		errorMessage: FormControl<string | null | undefined>,

		/** Output only. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the connection runtime schema refresh was triggered. */
		refreshTime: FormControl<string | null | undefined>,

		/** Output only. The current state of runtime schema. */
		state: FormControl<ConnectionSchemaMetadataState | null | undefined>,

		/** Output only. Timestamp when the connection runtime schema was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConnectionSchemaMetadataFormGroup() {
		return new FormGroup<ConnectionSchemaMetadataFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refreshTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConnectionSchemaMetadataState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionSchemaMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', REFRESHING = 'REFRESHING', UPDATED = 'UPDATED', REFRESHING_SCHEMA_METADATA = 'REFRESHING_SCHEMA_METADATA', UPDATED_SCHEMA_METADATA = 'UPDATED_SCHEMA_METADATA', REFRESH_SCHEMA_METADATA_FAILED = 'REFRESH_SCHEMA_METADATA_FAILED', REFRESHING_FULL_SCHEMA = 'REFRESHING_FULL_SCHEMA', UPDATED_FULL_SCHEMA = 'UPDATED_FULL_SCHEMA' }


	/** Connectors indicates a specific connector type, e.x. Salesforce, SAP etc. */
	export interface Connector {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Output only. Description of the resource. */
		description?: string | null;

		/** Output only. Display name. */
		displayName?: string | null;

		/** Output only. Link to documentation page. */
		documentationUri?: string | null;

		/** Eventing Details message. */
		eventingDetails?: EventingDetails;

		/** Output only. Link to external page. */
		externalUri?: string | null;

		/** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Output only. Flag to mark the version indicating the launch stage. */
		launchStage?: ConnectionConnectorVersionLaunchStage | null;

		/** Output only. Resource name of the Connector. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector} Only global location is supported for Connector resource. */
		name?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;

		/** Output only. Cloud storage location of icons etc consumed by UI. */
		webAssetsLocation?: string | null;
	}

	/** Connectors indicates a specific connector type, e.x. Salesforce, SAP etc. */
	export interface ConnectorFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Link to documentation page. */
		documentationUri: FormControl<string | null | undefined>,

		/** Output only. Link to external page. */
		externalUri: FormControl<string | null | undefined>,

		/** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Flag to mark the version indicating the launch stage. */
		launchStage: FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>,

		/** Output only. Resource name of the Connector. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector} Only global location is supported for Connector resource. */
		name: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. Cloud storage location of icons etc consumed by UI. */
		webAssetsLocation: FormControl<string | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			documentationUri: new FormControl<string | null | undefined>(undefined),
			externalUri: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			launchStage: new FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			webAssetsLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Eventing Details message. */
	export interface EventingDetails {

		/** Output only. Custom Event Types. */
		customEventTypes?: boolean | null;

		/** Output only. Description. */
		description?: string | null;

		/** Output only. Link to public documentation. */
		documentationLink?: string | null;

		/** Output only. Cloud storage location of the icon. */
		iconLocation?: string | null;

		/** Output only. Eventing Launch Stage. */
		launchStage?: ConnectionConnectorVersionLaunchStage | null;

		/** Output only. Name of the Eventing trigger. */
		name?: string | null;

		/** Output only. Array of search keywords. */
		searchTags?: Array<string>;

		/** Output only. The type of the event listener for a specific connector. */
		type?: EventingDetailsType | null;
	}

	/** Eventing Details message. */
	export interface EventingDetailsFormProperties {

		/** Output only. Custom Event Types. */
		customEventTypes: FormControl<boolean | null | undefined>,

		/** Output only. Description. */
		description: FormControl<string | null | undefined>,

		/** Output only. Link to public documentation. */
		documentationLink: FormControl<string | null | undefined>,

		/** Output only. Cloud storage location of the icon. */
		iconLocation: FormControl<string | null | undefined>,

		/** Output only. Eventing Launch Stage. */
		launchStage: FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>,

		/** Output only. Name of the Eventing trigger. */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of the event listener for a specific connector. */
		type: FormControl<EventingDetailsType | null | undefined>,
	}
	export function CreateEventingDetailsFormGroup() {
		return new FormGroup<EventingDetailsFormProperties>({
			customEventTypes: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentationLink: new FormControl<string | null | undefined>(undefined),
			iconLocation: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventingDetailsType | null | undefined>(undefined),
		});

	}

	export enum EventingDetailsType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', WEBHOOK = 'WEBHOOK', JMS = 'JMS' }


	/** This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version */
	export interface ConnectorInfraConfig {

		/** The window used for ratelimiting runtime requests to connections. */
		connectionRatelimitWindowSeconds?: string | null;

		/** Indicate whether connector is deployed on GKE/CloudRun */
		deploymentModel?: ConnectorVersionInfraConfigDeploymentModel | null;

		/** Autoscaling config for connector deployment system metrics. */
		hpaConfig?: HPAConfig;

		/** Max QPS supported for internal requests originating from Connd. */
		internalclientRatelimitThreshold?: string | null;

		/** Max QPS supported by the connector version before throttling of requests. */
		ratelimitThreshold?: string | null;

		/** Resource limits defined for connection pods of a given connector type. */
		resourceLimits?: ResourceLimits;

		/** Resource requests defined for connection pods of a given connector type. */
		resourceRequests?: ResourceRequests;

		/** The name of shared connector deployment. */
		sharedDeployment?: string | null;
	}

	/** This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version */
	export interface ConnectorInfraConfigFormProperties {

		/** The window used for ratelimiting runtime requests to connections. */
		connectionRatelimitWindowSeconds: FormControl<string | null | undefined>,

		/** Indicate whether connector is deployed on GKE/CloudRun */
		deploymentModel: FormControl<ConnectorVersionInfraConfigDeploymentModel | null | undefined>,

		/** Max QPS supported for internal requests originating from Connd. */
		internalclientRatelimitThreshold: FormControl<string | null | undefined>,

		/** Max QPS supported by the connector version before throttling of requests. */
		ratelimitThreshold: FormControl<string | null | undefined>,

		/** The name of shared connector deployment. */
		sharedDeployment: FormControl<string | null | undefined>,
	}
	export function CreateConnectorInfraConfigFormGroup() {
		return new FormGroup<ConnectorInfraConfigFormProperties>({
			connectionRatelimitWindowSeconds: new FormControl<string | null | undefined>(undefined),
			deploymentModel: new FormControl<ConnectorVersionInfraConfigDeploymentModel | null | undefined>(undefined),
			internalclientRatelimitThreshold: new FormControl<string | null | undefined>(undefined),
			ratelimitThreshold: new FormControl<string | null | undefined>(undefined),
			sharedDeployment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ConnectorVersion indicates a specific version of a connector. */
	export interface ConnectorVersion {

		/** Output only. List of auth configs supported by the Connector Version. */
		authConfigTemplates?: Array<AuthConfigTemplate>;

		/** Output only. List of config variables needed to create a connection. */
		configVariableTemplates?: Array<ConfigVariableTemplate>;

		/** This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version */
		connectorInfraConfig?: ConnectorInfraConfig;

		/** Output only. Created time. */
		createTime?: string | null;

		/** Output only. List of destination configs needed to create a connection. */
		destinationConfigTemplates?: Array<DestinationConfigTemplate>;

		/** Output only. Display name. */
		displayName?: string | null;

		/** Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource. */
		egressControlConfig?: EgressControlConfig;

		/** Eventing Config details of a connector version. */
		eventingConfigTemplate?: EventingConfigTemplate;

		/** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Output only. Flag to mark the version indicating the launch stage. */
		launchStage?: ConnectionConnectorVersionLaunchStage | null;

		/** Output only. Resource name of the Version. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} Only global location is supported for Connector resource. */
		name?: string | null;

		/** Output only. ReleaseVersion of the connector, for example: "1.0.1-alpha". */
		releaseVersion?: string | null;

		/** This configuration defines all the Cloud IAM roles that needs to be granted to a particular Google Cloud resource for the selected principal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user. */
		roleGrant?: RoleGrant;

		/** Output only. Role grant configurations for this connector version. */
		roleGrants?: Array<RoleGrant>;

		/** Ssl config details of a connector version */
		sslConfigTemplate?: SslConfigTemplate;

		/** Supported runtime features of a connector version. */
		supportedRuntimeFeatures?: SupportedRuntimeFeatures;

		/** Output only. Unsupported connection types. */
		unsupportedConnectionTypes?: Array<string>;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** ConnectorVersion indicates a specific version of a connector. */
	export interface ConnectorVersionFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Flag to mark the version indicating the launch stage. */
		launchStage: FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>,

		/** Output only. Resource name of the Version. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} Only global location is supported for Connector resource. */
		name: FormControl<string | null | undefined>,

		/** Output only. ReleaseVersion of the connector, for example: "1.0.1-alpha". */
		releaseVersion: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConnectorVersionFormGroup() {
		return new FormGroup<ConnectorVersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			launchStage: new FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DestinationConfigTemplate defines required destinations supported by the Connector. */
	export interface DestinationConfigTemplate {

		/**
		 * The default port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultPort?: number | null;

		/** Description. */
		description?: string | null;

		/** Display name of the parameter. */
		displayName?: string | null;

		/** Whether the current destination tempalate is part of Advanced settings */
		isAdvanced?: boolean | null;

		/** Key of the destination. */
		key?: string | null;

		/**
		 * The maximum number of destinations supported for this key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max?: number | null;

		/**
		 * The minimum number of destinations supported for this key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min?: number | null;

		/** Whether port number should be provided by customers. */
		portFieldType?: DestinationConfigTemplatePortFieldType | null;

		/** Regex pattern for host. */
		regexPattern?: string | null;
	}

	/** DestinationConfigTemplate defines required destinations supported by the Connector. */
	export interface DestinationConfigTemplateFormProperties {

		/**
		 * The default port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultPort: FormControl<number | null | undefined>,

		/** Description. */
		description: FormControl<string | null | undefined>,

		/** Display name of the parameter. */
		displayName: FormControl<string | null | undefined>,

		/** Whether the current destination tempalate is part of Advanced settings */
		isAdvanced: FormControl<boolean | null | undefined>,

		/** Key of the destination. */
		key: FormControl<string | null | undefined>,

		/**
		 * The maximum number of destinations supported for this key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * The minimum number of destinations supported for this key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min: FormControl<number | null | undefined>,

		/** Whether port number should be provided by customers. */
		portFieldType: FormControl<DestinationConfigTemplatePortFieldType | null | undefined>,

		/** Regex pattern for host. */
		regexPattern: FormControl<string | null | undefined>,
	}
	export function CreateDestinationConfigTemplateFormGroup() {
		return new FormGroup<DestinationConfigTemplateFormProperties>({
			defaultPort: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isAdvanced: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			portFieldType: new FormControl<DestinationConfigTemplatePortFieldType | null | undefined>(undefined),
			regexPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DestinationConfigTemplatePortFieldType { FIELD_TYPE_UNSPECIFIED = 'FIELD_TYPE_UNSPECIFIED', REQUIRED = 'REQUIRED', OPTIONAL = 'OPTIONAL', NOT_USED = 'NOT_USED' }


	/** Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource. */
	export interface EgressControlConfig {

		/** Static Comma separated backends which are common for all Connection resources. Supported formats for each backend are host:port or just host (host can be ip address or domain name). */
		backends?: string | null;

		/** Extraction Rules to identity the backends from customer provided configuration in Connection resource. */
		extractionRules?: ExtractionRules;
	}

	/** Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource. */
	export interface EgressControlConfigFormProperties {

		/** Static Comma separated backends which are common for all Connection resources. Supported formats for each backend are host:port or just host (host can be ip address or domain name). */
		backends: FormControl<string | null | undefined>,
	}
	export function CreateEgressControlConfigFormGroup() {
		return new FormGroup<EgressControlConfigFormProperties>({
			backends: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Extraction Rules to identity the backends from customer provided configuration in Connection resource. */
	export interface ExtractionRules {

		/** Collection of Extraction Rule. */
		extractionRule?: Array<ExtractionRule>;
	}

	/** Extraction Rules to identity the backends from customer provided configuration in Connection resource. */
	export interface ExtractionRulesFormProperties {
	}
	export function CreateExtractionRulesFormGroup() {
		return new FormGroup<ExtractionRulesFormProperties>({
		});

	}


	/** Extraction Rule. */
	export interface ExtractionRule {

		/** Regex used to extract backend details from source. If empty, whole source value will be used. */
		extractionRegex?: string | null;

		/** Source to extract the backend from. */
		source?: Source;
	}

	/** Extraction Rule. */
	export interface ExtractionRuleFormProperties {

		/** Regex used to extract backend details from source. If empty, whole source value will be used. */
		extractionRegex: FormControl<string | null | undefined>,
	}
	export function CreateExtractionRuleFormGroup() {
		return new FormGroup<ExtractionRuleFormProperties>({
			extractionRegex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source to extract the backend from. */
	export interface Source {

		/** Field identifier. For example config vaiable name. */
		fieldId?: string | null;

		/** Type of the source. */
		sourceType?: SourceSourceType | null;
	}

	/** Source to extract the backend from. */
	export interface SourceFormProperties {

		/** Field identifier. For example config vaiable name. */
		fieldId: FormControl<string | null | undefined>,

		/** Type of the source. */
		sourceType: FormControl<SourceSourceType | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<SourceSourceType | null | undefined>(undefined),
		});

	}

	export enum SourceSourceType { SOURCE_TYPE_UNSPECIFIED = 'SOURCE_TYPE_UNSPECIFIED', CONFIG_VARIABLE = 'CONFIG_VARIABLE' }


	/** Eventing Config details of a connector version. */
	export interface EventingConfigTemplate {

		/** Additional fields that need to be rendered. */
		additionalVariables?: Array<ConfigVariableTemplate>;

		/** AuthConfigTemplates represents the auth values for the webhook adapter. */
		authConfigTemplates?: Array<AuthConfigTemplate>;

		/** Auto refresh to extend webhook life. */
		autoRefresh?: boolean | null;

		/** Auto Registration supported. */
		autoRegistrationSupported?: boolean | null;

		/** ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection. */
		encryptionKeyTemplate?: ConfigVariableTemplate;

		/** Enrichment Supported. */
		enrichmentSupported?: boolean | null;

		/** The type of the event listener for a specific connector. */
		eventListenerType?: EventingConfigTemplateEventListenerType | null;

		/** Is Eventing Supported. */
		isEventingSupported?: boolean | null;

		/** ListenerAuthConfigTemplates represents the auth values for the event listener. */
		listenerAuthConfigTemplates?: Array<AuthConfigTemplate>;

		/** DestinationConfigTemplate defines required destinations supported by the Connector. */
		registrationDestinationConfig?: DestinationConfigTemplate;
	}

	/** Eventing Config details of a connector version. */
	export interface EventingConfigTemplateFormProperties {

		/** Auto refresh to extend webhook life. */
		autoRefresh: FormControl<boolean | null | undefined>,

		/** Auto Registration supported. */
		autoRegistrationSupported: FormControl<boolean | null | undefined>,

		/** Enrichment Supported. */
		enrichmentSupported: FormControl<boolean | null | undefined>,

		/** The type of the event listener for a specific connector. */
		eventListenerType: FormControl<EventingConfigTemplateEventListenerType | null | undefined>,

		/** Is Eventing Supported. */
		isEventingSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateEventingConfigTemplateFormGroup() {
		return new FormGroup<EventingConfigTemplateFormProperties>({
			autoRefresh: new FormControl<boolean | null | undefined>(undefined),
			autoRegistrationSupported: new FormControl<boolean | null | undefined>(undefined),
			enrichmentSupported: new FormControl<boolean | null | undefined>(undefined),
			eventListenerType: new FormControl<EventingConfigTemplateEventListenerType | null | undefined>(undefined),
			isEventingSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EventingConfigTemplateEventListenerType { EVENT_LISTENER_TYPE_UNSPECIFIED = 'EVENT_LISTENER_TYPE_UNSPECIFIED', WEBHOOK_LISTENER = 'WEBHOOK_LISTENER', JMS_LISTENER = 'JMS_LISTENER' }


	/** Ssl config details of a connector version */
	export interface SslConfigTemplate {

		/** Any additional fields that need to be rendered */
		additionalVariables?: Array<ConfigVariableTemplate>;

		/** List of supported Client Cert Types */
		clientCertType?: Array<SslConfigClientCertType>;

		/** Boolean for determining if the connector version mandates TLS. */
		isTlsMandatory?: boolean | null;

		/** List of supported Server Cert Types */
		serverCertType?: Array<SslConfigClientCertType>;

		/** Controls the ssl type for the given connector version */
		sslType?: SslConfigType | null;
	}

	/** Ssl config details of a connector version */
	export interface SslConfigTemplateFormProperties {

		/** Boolean for determining if the connector version mandates TLS. */
		isTlsMandatory: FormControl<boolean | null | undefined>,

		/** Controls the ssl type for the given connector version */
		sslType: FormControl<SslConfigType | null | undefined>,
	}
	export function CreateSslConfigTemplateFormGroup() {
		return new FormGroup<SslConfigTemplateFormProperties>({
			isTlsMandatory: new FormControl<boolean | null | undefined>(undefined),
			sslType: new FormControl<SslConfigType | null | undefined>(undefined),
		});

	}


	/** Supported runtime features of a connector version. */
	export interface SupportedRuntimeFeatures {

		/** Specifies if the connector supports action apis like 'executeAction'. */
		actionApis?: boolean | null;

		/** Specifies if the connector supports entity apis like 'createEntity'. */
		entityApis?: boolean | null;

		/** Specifies if the connector supports 'ExecuteSqlQuery' operation. */
		sqlQuery?: boolean | null;
	}

	/** Supported runtime features of a connector version. */
	export interface SupportedRuntimeFeaturesFormProperties {

		/** Specifies if the connector supports action apis like 'executeAction'. */
		actionApis: FormControl<boolean | null | undefined>,

		/** Specifies if the connector supports entity apis like 'createEntity'. */
		entityApis: FormControl<boolean | null | undefined>,

		/** Specifies if the connector supports 'ExecuteSqlQuery' operation. */
		sqlQuery: FormControl<boolean | null | undefined>,
	}
	export function CreateSupportedRuntimeFeaturesFormGroup() {
		return new FormGroup<SupportedRuntimeFeaturesFormProperties>({
			actionApis: new FormControl<boolean | null | undefined>(undefined),
			entityApis: new FormControl<boolean | null | undefined>(undefined),
			sqlQuery: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** CustomConnector represents the custom connector defined by the customer as part of byoc. */
	export interface CustomConnector {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Required. Type of the custom connector. */
		customConnectorType?: CustomConnectorCustomConnectorType | null;

		/** Optional. Description of the resource. */
		description?: string | null;

		/** Optional. Display name. */
		displayName?: string | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Optional. Logo of the resource. */
		logo?: string | null;

		/** Identifier. Resource name of the CustomConnector. Format: projects/{project}/locations/{location}/customConnectors/{connector} */
		name?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** CustomConnector represents the custom connector defined by the customer as part of byoc. */
	export interface CustomConnectorFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Type of the custom connector. */
		customConnectorType: FormControl<CustomConnectorCustomConnectorType | null | undefined>,

		/** Optional. Description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Logo of the resource. */
		logo: FormControl<string | null | undefined>,

		/** Identifier. Resource name of the CustomConnector. Format: projects/{project}/locations/{location}/customConnectors/{connector} */
		name: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCustomConnectorFormGroup() {
		return new FormGroup<CustomConnectorFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			customConnectorType: new FormControl<CustomConnectorCustomConnectorType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomConnectorCustomConnectorType { CUSTOM_CONNECTOR_TYPE_UNSPECIFIED = 'CUSTOM_CONNECTOR_TYPE_UNSPECIFIED', OPEN_API = 'OPEN_API', PROTO = 'PROTO' }


	/** CustomConnectorVersion indicates a specific version of a connector. */
	export interface CustomConnectorVersion {

		/** AuthConfig defines details of a authentication type. */
		authConfig?: AuthConfig;

		/** Optional. Backend variables config templates. This translates to additional variable templates in connection. */
		backendVariableTemplates?: Array<ConfigVariableTemplate>;

		/** Output only. Created time. */
		createTime?: string | null;

		/** Optional. Destination config(s) for accessing connector facade/ proxy. This is used only when enable_backend_destination_config is true. */
		destinationConfigs?: Array<DestinationConfig>;

		/** Optional. When enabled, the connector will be a facade/ proxy, and connects to the destination provided during connection creation. */
		enableBackendDestinationConfig?: boolean | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Output only. Identifier. Resource name of the Version. Format: projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version} */
		name?: string | null;

		/** Required. Service account used by runtime plane to access auth config secrets. */
		serviceAccount?: string | null;

		/** Optional. Location of the custom connector spec. */
		specLocation?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** CustomConnectorVersion indicates a specific version of a connector. */
	export interface CustomConnectorVersionFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. When enabled, the connector will be a facade/ proxy, and connects to the destination provided during connection creation. */
		enableBackendDestinationConfig: FormControl<boolean | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Identifier. Resource name of the Version. Format: projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version} */
		name: FormControl<string | null | undefined>,

		/** Required. Service account used by runtime plane to access auth config secrets. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. Location of the custom connector spec. */
		specLocation: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCustomConnectorVersionFormGroup() {
		return new FormGroup<CustomConnectorVersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			enableBackendDestinationConfig: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			specLocation: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Time window specified for daily operations. */
	export interface DailyCycle {

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Time window specified for daily operations. */
	export interface DailyCycleFormProperties {

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateDailyCycleFormGroup() {
		return new FormGroup<DailyCycleFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		time?: TimeOfDay;
	}

	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriodFormProperties {
	}
	export function CreateDenyMaintenancePeriodFormGroup() {
		return new FormGroup<DenyMaintenancePeriodFormProperties>({
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


	/** Regional encryption config for CMEK details. */
	export interface EncryptionConfig {

		/** Optional. Encryption type for the region. */
		encryptionType?: EncryptionConfigEncryptionType | null;

		/** Optional. KMS crypto key. This field accepts identifiers of the form `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/ {crypto_key}` */
		kmsKeyName?: string | null;
	}

	/** Regional encryption config for CMEK details. */
	export interface EncryptionConfigFormProperties {

		/** Optional. Encryption type for the region. */
		encryptionType: FormControl<EncryptionConfigEncryptionType | null | undefined>,

		/** Optional. KMS crypto key. This field accepts identifiers of the form `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/ {crypto_key}` */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			encryptionType: new FormControl<EncryptionConfigEncryptionType | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionConfigEncryptionType { ENCRYPTION_TYPE_UNSPECIFIED = 'ENCRYPTION_TYPE_UNSPECIFIED', GMEK = 'GMEK', CMEK = 'CMEK' }


	/** Endpoint message includes details of the Destination endpoint. */
	export interface EndPoint {

		/** The URI of the Endpoint. */
		endpointUri?: string | null;

		/** List of Header to be added to the Endpoint. */
		headers?: Array<Header>;
	}

	/** Endpoint message includes details of the Destination endpoint. */
	export interface EndPointFormProperties {

		/** The URI of the Endpoint. */
		endpointUri: FormControl<string | null | undefined>,
	}
	export function CreateEndPointFormGroup() {
		return new FormGroup<EndPointFormProperties>({
			endpointUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Header details for a given header to be added to Endpoint. */
	export interface Header {

		/** Key of Header. */
		key?: string | null;

		/** Value of Header. */
		value?: string | null;
	}

	/** Header details for a given header to be added to Endpoint. */
	export interface HeaderFormProperties {

		/** Key of Header. */
		key: FormControl<string | null | undefined>,

		/** Value of Header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHeaderFormGroup() {
		return new FormGroup<HeaderFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** represents the Connector's Endpoint Attachment resource */
	export interface EndpointAttachment {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Optional. Description of the resource. */
		description?: string | null;

		/** Output only. The Private Service Connect connection endpoint ip */
		endpointIp?: string | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Output only. Resource name of the Endpoint Attachment. Format: projects/{project}/locations/{location}/endpointAttachments/{endpoint_attachment} */
		name?: string | null;

		/** Required. The path of the service attachment */
		serviceAttachment?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** represents the Connector's Endpoint Attachment resource */
	export interface EndpointAttachmentFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. The Private Service Connect connection endpoint ip */
		endpointIp: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Resource name of the Endpoint Attachment. Format: projects/{project}/locations/{location}/endpointAttachments/{endpoint_attachment} */
		name: FormControl<string | null | undefined>,

		/** Required. The path of the service attachment */
		serviceAttachment: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateEndpointAttachmentFormGroup() {
		return new FormGroup<EndpointAttachmentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointIp: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAttachment: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** represents the Connector's EventSubscription resource */
	export interface EventSubscription {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Message for EventSubscription Destination to act on receiving an event */
		destinations?: EventSubscriptionDestination;

		/** Optional. Event type id of the event of current EventSubscription. */
		eventTypeId?: string | null;

		/** JMS message denotes the source of the event */
		jms?: JMS;

		/** Required. Resource name of the EventSubscription. Format: projects/{project}/locations/{location}/connections/{connection}/eventSubscriptions/{event_subscription} */
		name?: string | null;

		/** EventSubscription Status denotes the status of the EventSubscription resource. */
		status?: EventSubscriptionStatus;

		/** Optional. name of the Subscriber for the current EventSubscription. */
		subscriber?: string | null;

		/** Optional. Link for Subscriber of the current EventSubscription. */
		subscriberLink?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** represents the Connector's EventSubscription resource */
	export interface EventSubscriptionFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Event type id of the event of current EventSubscription. */
		eventTypeId: FormControl<string | null | undefined>,

		/** Required. Resource name of the EventSubscription. Format: projects/{project}/locations/{location}/connections/{connection}/eventSubscriptions/{event_subscription} */
		name: FormControl<string | null | undefined>,

		/** Optional. name of the Subscriber for the current EventSubscription. */
		subscriber: FormControl<string | null | undefined>,

		/** Optional. Link for Subscriber of the current EventSubscription. */
		subscriberLink: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			eventTypeId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subscriber: new FormControl<string | null | undefined>(undefined),
			subscriberLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for EventSubscription Destination to act on receiving an event */
	export interface EventSubscriptionDestination {

		/** Endpoint message includes details of the Destination endpoint. */
		endpoint?: EndPoint;

		/** Service account needed for runtime plane to trigger IP workflow. */
		serviceAccount?: string | null;

		/** type of the destination */
		type?: EventSubscriptionDestinationType | null;
	}

	/** Message for EventSubscription Destination to act on receiving an event */
	export interface EventSubscriptionDestinationFormProperties {

		/** Service account needed for runtime plane to trigger IP workflow. */
		serviceAccount: FormControl<string | null | undefined>,

		/** type of the destination */
		type: FormControl<EventSubscriptionDestinationType | null | undefined>,
	}
	export function CreateEventSubscriptionDestinationFormGroup() {
		return new FormGroup<EventSubscriptionDestinationFormProperties>({
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventSubscriptionDestinationType | null | undefined>(undefined),
		});

	}

	export enum EventSubscriptionDestinationType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', ENDPOINT = 'ENDPOINT' }


	/** JMS message denotes the source of the event */
	export interface JMS {

		/** Optional. Name of the JMS source. i.e. queueName or topicName */
		name?: string | null;

		/** Optional. Type of the JMS Source. i.e. Queue or Topic */
		type?: JMSType | null;
	}

	/** JMS message denotes the source of the event */
	export interface JMSFormProperties {

		/** Optional. Name of the JMS source. i.e. queueName or topicName */
		name: FormControl<string | null | undefined>,

		/** Optional. Type of the JMS Source. i.e. Queue or Topic */
		type: FormControl<JMSType | null | undefined>,
	}
	export function CreateJMSFormGroup() {
		return new FormGroup<JMSFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JMSType | null | undefined>(undefined),
		});

	}

	export enum JMSType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', QUEUE = 'QUEUE', TOPIC = 'TOPIC' }


	/** EventSubscription Status denotes the status of the EventSubscription resource. */
	export interface EventSubscriptionStatus {

		/** Output only. Description of the state. */
		description?: string | null;

		/** Output only. State of Event Subscription resource. */
		state?: EventSubscriptionStatusState | null;
	}

	/** EventSubscription Status denotes the status of the EventSubscription resource. */
	export interface EventSubscriptionStatusFormProperties {

		/** Output only. Description of the state. */
		description: FormControl<string | null | undefined>,

		/** Output only. State of Event Subscription resource. */
		state: FormControl<EventSubscriptionStatusState | null | undefined>,
	}
	export function CreateEventSubscriptionStatusFormGroup() {
		return new FormGroup<EventSubscriptionStatusFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventSubscriptionStatusState | null | undefined>(undefined),
		});

	}

	export enum EventSubscriptionStatusState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', UPDATING = 'UPDATING', ACTIVE = 'ACTIVE', SUSPENDED = 'SUSPENDED', ERROR = 'ERROR' }


	/** EventType includes fields. */
	export interface EventType {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Output only. Schema of the event payload after enriched. Will be null if read before send is not supported. */
		enrichedEventPayloadSchema?: string | null;

		/** Output only. Runtime entity type name. Will be null if entity type map is not available. Used for read before send feature. */
		entityType?: string | null;

		/** Output only. Schema of webhook event payload. */
		eventPayloadSchema?: string | null;

		/** Output only. Event type id. Example: `ticket.created`. */
		eventTypeId?: string | null;

		/** Output only. Id path denotes the path of id in webhook payload. */
		idPath?: string | null;

		/** Output only. Resource name of the eventtype. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version}/eventtypes/{eventtype} Only global location is supported for Connector resource. */
		name?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** EventType includes fields. */
	export interface EventTypeFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Schema of the event payload after enriched. Will be null if read before send is not supported. */
		enrichedEventPayloadSchema: FormControl<string | null | undefined>,

		/** Output only. Runtime entity type name. Will be null if entity type map is not available. Used for read before send feature. */
		entityType: FormControl<string | null | undefined>,

		/** Output only. Schema of webhook event payload. */
		eventPayloadSchema: FormControl<string | null | undefined>,

		/** Output only. Event type id. Example: `ticket.created`. */
		eventTypeId: FormControl<string | null | undefined>,

		/** Output only. Id path denotes the path of id in webhook payload. */
		idPath: FormControl<string | null | undefined>,

		/** Output only. Resource name of the eventtype. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version}/eventtypes/{eventtype} Only global location is supported for Connector resource. */
		name: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateEventTypeFormGroup() {
		return new FormGroup<EventTypeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			enrichedEventPayloadSchema: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			eventPayloadSchema: new FormControl<string | null | undefined>(undefined),
			eventTypeId: new FormControl<string | null | undefined>(undefined),
			idPath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an entity field. */
	export interface Field {

		/** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
		additionalDetails?: {[id: string]: any };

		/** The data type of the Field. */
		dataType?: FieldDataType | null;

		/** The following field specifies the default value of the Field provided by the external system if a value is not provided. */
		defaultValue?: any;

		/** A brief description of the Field. */
		description?: string | null;

		/** Name of the Field. */
		field?: string | null;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;

		/** The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity. */
		key?: boolean | null;

		/** Specifies whether a null value is allowed. */
		nullable?: boolean | null;

		/** Specifies if the Field is readonly. */
		readonly?: boolean | null;
	}

	/** Metadata of an entity field. */
	export interface FieldFormProperties {

		/** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
		additionalDetails: FormControl<{[id: string]: any } | null | undefined>,

		/** The data type of the Field. */
		dataType: FormControl<FieldDataType | null | undefined>,

		/** The following field specifies the default value of the Field provided by the external system if a value is not provided. */
		defaultValue: FormControl<any | null | undefined>,

		/** A brief description of the Field. */
		description: FormControl<string | null | undefined>,

		/** Name of the Field. */
		field: FormControl<string | null | undefined>,

		/** The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity. */
		key: FormControl<boolean | null | undefined>,

		/** Specifies whether a null value is allowed. */
		nullable: FormControl<boolean | null | undefined>,

		/** Specifies if the Field is readonly. */
		readonly: FormControl<boolean | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			additionalDetails: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			dataType: new FormControl<FieldDataType | null | undefined>(undefined),
			defaultValue: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<boolean | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
			readonly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FieldDataType { DATA_TYPE_UNSPECIFIED = 'DATA_TYPE_UNSPECIFIED', DATA_TYPE_INT = 'DATA_TYPE_INT', DATA_TYPE_SMALLINT = 'DATA_TYPE_SMALLINT', DATA_TYPE_DOUBLE = 'DATA_TYPE_DOUBLE', DATA_TYPE_DATE = 'DATA_TYPE_DATE', DATA_TYPE_DATETIME = 'DATA_TYPE_DATETIME', DATA_TYPE_TIME = 'DATA_TYPE_TIME', DATA_TYPE_STRING = 'DATA_TYPE_STRING', DATA_TYPE_LONG = 'DATA_TYPE_LONG', DATA_TYPE_BOOLEAN = 'DATA_TYPE_BOOLEAN', DATA_TYPE_DECIMAL = 'DATA_TYPE_DECIMAL', DATA_TYPE_UUID = 'DATA_TYPE_UUID', DATA_TYPE_BLOB = 'DATA_TYPE_BLOB', DATA_TYPE_BIT = 'DATA_TYPE_BIT', DATA_TYPE_TINYINT = 'DATA_TYPE_TINYINT', DATA_TYPE_INTEGER = 'DATA_TYPE_INTEGER', DATA_TYPE_BIGINT = 'DATA_TYPE_BIGINT', DATA_TYPE_FLOAT = 'DATA_TYPE_FLOAT', DATA_TYPE_REAL = 'DATA_TYPE_REAL', DATA_TYPE_NUMERIC = 'DATA_TYPE_NUMERIC', DATA_TYPE_CHAR = 'DATA_TYPE_CHAR', DATA_TYPE_VARCHAR = 'DATA_TYPE_VARCHAR', DATA_TYPE_LONGVARCHAR = 'DATA_TYPE_LONGVARCHAR', DATA_TYPE_TIMESTAMP = 'DATA_TYPE_TIMESTAMP', DATA_TYPE_NCHAR = 'DATA_TYPE_NCHAR', DATA_TYPE_NVARCHAR = 'DATA_TYPE_NVARCHAR', DATA_TYPE_LONGNVARCHAR = 'DATA_TYPE_LONGNVARCHAR', DATA_TYPE_NULL = 'DATA_TYPE_NULL', DATA_TYPE_OTHER = 'DATA_TYPE_OTHER', DATA_TYPE_JAVA_OBJECT = 'DATA_TYPE_JAVA_OBJECT', DATA_TYPE_DISTINCT = 'DATA_TYPE_DISTINCT', DATA_TYPE_STRUCT = 'DATA_TYPE_STRUCT', DATA_TYPE_ARRAY = 'DATA_TYPE_ARRAY', DATA_TYPE_CLOB = 'DATA_TYPE_CLOB', DATA_TYPE_REF = 'DATA_TYPE_REF', DATA_TYPE_DATALINK = 'DATA_TYPE_DATALINK', DATA_TYPE_ROWID = 'DATA_TYPE_ROWID', DATA_TYPE_BINARY = 'DATA_TYPE_BINARY', DATA_TYPE_VARBINARY = 'DATA_TYPE_VARBINARY', DATA_TYPE_LONGVARBINARY = 'DATA_TYPE_LONGVARBINARY', DATA_TYPE_NCLOB = 'DATA_TYPE_NCLOB', DATA_TYPE_SQLXML = 'DATA_TYPE_SQLXML', DATA_TYPE_REF_CURSOR = 'DATA_TYPE_REF_CURSOR', DATA_TYPE_TIME_WITH_TIMEZONE = 'DATA_TYPE_TIME_WITH_TIMEZONE', DATA_TYPE_TIMESTAMP_WITH_TIMEZONE = 'DATA_TYPE_TIMESTAMP_WITH_TIMEZONE' }


	/** JsonSchema representation of schema metadata */
	export interface JsonSchema {

		/** A description of this schema. */
		description?: string | null;

		/** Possible values for an enumeration. This works in conjunction with `type` to represent types with a fixed set of legal values */
		enum?: Array<string>;

		/** Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format */
		format?: string | null;

		/** JsonSchema representation of schema metadata */
		items?: JsonSchema;

		/** JDBC datatype of the field. */
		jdbcType?: FieldDataType | null;

		/** The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property */
		properties?: {[id: string]: JsonSchema };

		/** Whether this property is required. */
		required?: Array<string>;

		/** JSON Schema Validation: A Vocabulary for Structural Validation of JSON */
		type?: Array<string>;
	}

	/** JsonSchema representation of schema metadata */
	export interface JsonSchemaFormProperties {

		/** A description of this schema. */
		description: FormControl<string | null | undefined>,

		/** Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format */
		format: FormControl<string | null | undefined>,

		/** JDBC datatype of the field. */
		jdbcType: FormControl<FieldDataType | null | undefined>,

		/** The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property */
		properties: FormControl<{[id: string]: JsonSchema } | null | undefined>,
	}
	export function CreateJsonSchemaFormGroup() {
		return new FormGroup<JsonSchemaFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			jdbcType: new FormControl<FieldDataType | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: JsonSchema } | null | undefined>(undefined),
		});

	}


	/** Metadata of an input parameter. */
	export interface InputParameter {

		/** The data type of the Parameter. */
		dataType?: FieldDataType | null;

		/** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
		defaultValue?: any;

		/** A brief description of the Parameter. */
		description?: string | null;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;

		/** Specifies whether a null value is allowed. */
		nullable?: boolean | null;

		/** Name of the Parameter. */
		parameter?: string | null;
	}

	/** Metadata of an input parameter. */
	export interface InputParameterFormProperties {

		/** The data type of the Parameter. */
		dataType: FormControl<FieldDataType | null | undefined>,

		/** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
		defaultValue: FormControl<any | null | undefined>,

		/** A brief description of the Parameter. */
		description: FormControl<string | null | undefined>,

		/** Specifies whether a null value is allowed. */
		nullable: FormControl<boolean | null | undefined>,

		/** Name of the Parameter. */
		parameter: FormControl<string | null | undefined>,
	}
	export function CreateInputParameterFormGroup() {
		return new FormGroup<InputParameterFormProperties>({
			dataType: new FormControl<FieldDataType | null | undefined>(undefined),
			defaultValue: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface Instance {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName?: string | null;

		/** Output only. Timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames?: {[id: string]: string };

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules?: {[id: string]: MaintenanceSchedule };

		/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
		maintenanceSettings?: MaintenanceSettings;

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name?: string | null;

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters?: {[id: string]: NotificationParameter };

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata?: {[id: string]: string };

		/** Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata. */
		provisionedResources?: Array<ProvisionedResource>;

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate?: string | null;

		/** SloMetadata contains resources required for proper SLO classification of the instance. */
		sloMetadata?: SloMetadata;

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions?: {[id: string]: string };

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state?: InstanceState | null;

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId?: string | null;

		/** Output only. Timestamp when the resource was last modified. */
		updateTime?: string | null;
	}

	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface InstanceFormProperties {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames: FormControl<{[id: string]: string } | null | undefined>,

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules: FormControl<{[id: string]: MaintenanceSchedule } | null | undefined>,

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name: FormControl<string | null | undefined>,

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters: FormControl<{[id: string]: NotificationParameter } | null | undefined>,

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate: FormControl<string | null | undefined>,

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			consumerDefinedName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenancePolicyNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenanceSchedules: new FormControl<{[id: string]: MaintenanceSchedule } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationParameters: new FormControl<{[id: string]: NotificationParameter } | null | undefined>(undefined),
			producerMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			slmInstanceTemplate: new FormControl<string | null | undefined>(undefined),
			softwareVersions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			tenantProjectId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface MaintenanceSchedule {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule?: boolean | null;

		/** The scheduled end time for the maintenance. */
		endTime?: string | null;

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy?: string | null;

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime?: string | null;

		/** The scheduled start time for the maintenance. */
		startTime?: string | null;
	}

	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface MaintenanceScheduleFormProperties {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule: FormControl<boolean | null | undefined>,

		/** The scheduled end time for the maintenance. */
		endTime: FormControl<string | null | undefined>,

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy: FormControl<string | null | undefined>,

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime: FormControl<string | null | undefined>,

		/** The scheduled start time for the maintenance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceScheduleFormGroup() {
		return new FormGroup<MaintenanceScheduleFormProperties>({
			canReschedule: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			rolloutManagementPolicy: new FormControl<string | null | undefined>(undefined),
			scheduleDeadlineTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface MaintenanceSettings {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude?: boolean | null;

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback?: boolean | null;

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies?: {[id: string]: MaintenancePolicy };
	}

	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface MaintenanceSettingsFormProperties {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude: FormControl<boolean | null | undefined>,

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback: FormControl<boolean | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies: FormControl<{[id: string]: MaintenancePolicy } | null | undefined>,
	}
	export function CreateMaintenanceSettingsFormGroup() {
		return new FormGroup<MaintenanceSettingsFormProperties>({
			exclude: new FormControl<boolean | null | undefined>(undefined),
			isRollback: new FormControl<boolean | null | undefined>(undefined),
			maintenancePolicies: new FormControl<{[id: string]: MaintenancePolicy } | null | undefined>(undefined),
		});

	}


	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicy {

		/** Output only. The time when the resource was created. */
		createTime?: string | null;

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name?: string | null;

		/** Optional. The state of the policy. */
		state?: MaintenancePolicyState | null;

		/** Maintenance policy applicable to instance updates. */
		updatePolicy?: UpdatePolicy;

		/** Output only. The time when the resource was updated. */
		updateTime?: string | null;
	}

	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicyFormProperties {

		/** Output only. The time when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name: FormControl<string | null | undefined>,

		/** Optional. The state of the policy. */
		state: FormControl<MaintenancePolicyState | null | undefined>,

		/** Output only. The time when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenancePolicyFormGroup() {
		return new FormGroup<MaintenancePolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MaintenancePolicyState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenancePolicyState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', READY = 'READY', DELETING = 'DELETING' }


	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicy {

		/** Optional. Relative scheduling channel applied to resource. */
		channel?: UpdatePolicyChannel | null;

		/** Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one. */
		denyMaintenancePeriods?: Array<DenyMaintenancePeriod>;

		/** MaintenanceWindow definition. */
		window?: MaintenanceWindow;
	}

	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicyFormProperties {

		/** Optional. Relative scheduling channel applied to resource. */
		channel: FormControl<UpdatePolicyChannel | null | undefined>,
	}
	export function CreateUpdatePolicyFormGroup() {
		return new FormGroup<UpdatePolicyFormProperties>({
			channel: new FormControl<UpdatePolicyChannel | null | undefined>(undefined),
		});

	}

	export enum UpdatePolicyChannel { UPDATE_CHANNEL_UNSPECIFIED = 'UPDATE_CHANNEL_UNSPECIFIED', EARLIER = 'EARLIER', LATER = 'LATER', WEEK1 = 'WEEK1', WEEK2 = 'WEEK2', WEEK5 = 'WEEK5' }


	/** MaintenanceWindow definition. */
	export interface MaintenanceWindow {

		/** Time window specified for daily operations. */
		dailyCycle?: DailyCycle;

		/** Time window specified for weekly operations. */
		weeklyCycle?: WeeklyCycle;
	}

	/** MaintenanceWindow definition. */
	export interface MaintenanceWindowFormProperties {
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
		});

	}


	/** Time window specified for weekly operations. */
	export interface WeeklyCycle {

		/** User can specify multiple windows in a week. Minimum of 1 window. */
		schedule?: Array<Schedule>;
	}

	/** Time window specified for weekly operations. */
	export interface WeeklyCycleFormProperties {
	}
	export function CreateWeeklyCycleFormGroup() {
		return new FormGroup<WeeklyCycleFormProperties>({
		});

	}


	/** Configure the schedule. */
	export interface Schedule {

		/** Allows to define schedule that runs specified day of the week. */
		day?: ScheduleDay | null;

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Configure the schedule. */
	export interface ScheduleFormProperties {

		/** Allows to define schedule that runs specified day of the week. */
		day: FormControl<ScheduleDay | null | undefined>,

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			day: new FormControl<ScheduleDay | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleDay { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Contains notification related data. */
	export interface NotificationParameter {

		/** Optional. Array of string values. e.g. instance's replica information. */
		values?: Array<string>;
	}

	/** Contains notification related data. */
	export interface NotificationParameterFormProperties {
	}
	export function CreateNotificationParameterFormGroup() {
		return new FormGroup<NotificationParameterFormProperties>({
		});

	}


	/** Describes provisioned dataplane resources. */
	export interface ProvisionedResource {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType?: string | null;

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl?: string | null;
	}

	/** Describes provisioned dataplane resources. */
	export interface ProvisionedResourceFormProperties {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType: FormControl<string | null | undefined>,

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedResourceFormGroup() {
		return new FormGroup<ProvisionedResourceFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface SloMetadata {

		/** Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch. */
		nodes?: Array<NodeSloMetadata>;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: PerSliSloEligibility;

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier?: string | null;
	}

	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface SloMetadataFormProperties {

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSloMetadataFormGroup() {
		return new FormGroup<SloMetadataFormProperties>({
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface NodeSloMetadata {

		/** The location of the node, if different from instance location. */
		location?: string | null;

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId?: string | null;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: PerSliSloEligibility;
	}

	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface NodeSloMetadataFormProperties {

		/** The location of the node, if different from instance location. */
		location: FormControl<string | null | undefined>,

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId: FormControl<string | null | undefined>,
	}
	export function CreateNodeSloMetadataFormGroup() {
		return new FormGroup<NodeSloMetadataFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface PerSliSloEligibility {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities?: {[id: string]: SloEligibility };
	}

	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface PerSliSloEligibilityFormProperties {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities: FormControl<{[id: string]: SloEligibility } | null | undefined>,
	}
	export function CreatePerSliSloEligibilityFormGroup() {
		return new FormGroup<PerSliSloEligibilityFormProperties>({
			eligibilities: new FormControl<{[id: string]: SloEligibility } | null | undefined>(undefined),
		});

	}


	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface SloEligibility {

		/** Whether an instance is eligible or ineligible. */
		eligible?: boolean | null;

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason?: string | null;
	}

	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface SloEligibilityFormProperties {

		/** Whether an instance is eligible or ineligible. */
		eligible: FormControl<boolean | null | undefined>,

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateSloEligibilityFormGroup() {
		return new FormGroup<SloEligibilityFormProperties>({
			eligible: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', UPDATING = 'UPDATING', REPAIRING = 'REPAIRING', DELETING = 'DELETING', ERROR = 'ERROR' }


	/** Response message for ListActions API */
	export interface ListActionsResponse {

		/** list of actions */
		actions?: Array<RuntimeActionSchema>;

		/** token for next page */
		nextPageToken?: string | null;
	}

	/** Response message for ListActions API */
	export interface ListActionsResponseFormProperties {

		/** token for next page */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionsResponseFormGroup() {
		return new FormGroup<ListActionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of a runtime action. */
	export interface RuntimeActionSchema {

		/** Output only. Name of the action. */
		action?: string | null;

		/** Output only. Brief Description of action */
		description?: string | null;

		/** Output only. Display Name of action to be shown on client side */
		displayName?: string | null;

		/** JsonSchema representation of schema metadata */
		inputJsonSchema?: JsonSchema;

		/** Output only. List of input parameter metadata for the action. */
		inputParameters?: Array<InputParameter>;

		/** JsonSchema representation of schema metadata */
		resultJsonSchema?: JsonSchema;

		/** Output only. List of result field metadata. */
		resultMetadata?: Array<ResultMetadata>;
	}

	/** Schema of a runtime action. */
	export interface RuntimeActionSchemaFormProperties {

		/** Output only. Name of the action. */
		action: FormControl<string | null | undefined>,

		/** Output only. Brief Description of action */
		description: FormControl<string | null | undefined>,

		/** Output only. Display Name of action to be shown on client side */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeActionSchemaFormGroup() {
		return new FormGroup<RuntimeActionSchemaFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of result field. */
	export interface ResultMetadata {

		/** The data type of the field. */
		dataType?: FieldDataType | null;

		/** A brief description of the field. */
		description?: string | null;

		/** Name of the result field. */
		field?: string | null;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;
	}

	/** Metadata of result field. */
	export interface ResultMetadataFormProperties {

		/** The data type of the field. */
		dataType: FormControl<FieldDataType | null | undefined>,

		/** A brief description of the field. */
		description: FormControl<string | null | undefined>,

		/** Name of the result field. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateResultMetadataFormGroup() {
		return new FormGroup<ResultMetadataFormProperties>({
			dataType: new FormControl<FieldDataType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ConnectorsService.ListConnections */
	export interface ListConnectionsResponse {

		/** Connections. */
		connections?: Array<Connection>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for ConnectorsService.ListConnections */
	export interface ListConnectionsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsResponseFormGroup() {
		return new FormGroup<ListConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Connectors.ListConnectorVersions. */
	export interface ListConnectorVersionsResponse {

		/** A list of connector versions. */
		connectorVersions?: Array<ConnectorVersion>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for Connectors.ListConnectorVersions. */
	export interface ListConnectorVersionsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorVersionsResponseFormGroup() {
		return new FormGroup<ListConnectorVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Connectors.ListConnectors. */
	export interface ListConnectorsResponse {

		/** A list of connectors. */
		connectors?: Array<Connector>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for Connectors.ListConnectors. */
	export interface ListConnectorsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsResponseFormGroup() {
		return new FormGroup<ListConnectorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Connectors.ListCustomConnectorVersions. */
	export interface ListCustomConnectorVersionsResponse {

		/** A list of connector versions. */
		customConnectorVersions?: Array<CustomConnectorVersion>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for Connectors.ListCustomConnectorVersions. */
	export interface ListCustomConnectorVersionsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomConnectorVersionsResponseFormGroup() {
		return new FormGroup<ListCustomConnectorVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Connectors.ListCustomConnectors. */
	export interface ListCustomConnectorsResponse {

		/** A list of customConnectors. */
		customConnectors?: Array<CustomConnector>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for Connectors.ListCustomConnectors. */
	export interface ListCustomConnectorsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomConnectorsResponseFormGroup() {
		return new FormGroup<ListCustomConnectorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ConnectorsService.ListEndpointAttachments */
	export interface ListEndpointAttachmentsResponse {

		/** EndpointAttachments. */
		endpointAttachments?: Array<EndpointAttachment>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for ConnectorsService.ListEndpointAttachments */
	export interface ListEndpointAttachmentsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointAttachmentsResponseFormGroup() {
		return new FormGroup<ListEndpointAttachmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListEntityTypes API */
	export interface ListEntityTypesResponse {

		/** list of entity types */
		entityTypes?: Array<RuntimeEntitySchema>;

		/** token for next page */
		nextPageToken?: string | null;
	}

	/** Response message for ListEntityTypes API */
	export interface ListEntityTypesResponseFormProperties {

		/** token for next page */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntityTypesResponseFormGroup() {
		return new FormGroup<ListEntityTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of a runtime entity. */
	export interface RuntimeEntitySchema {

		/** Output only. Name of the entity. */
		entity?: string | null;

		/** Output only. List of fields in the entity. */
		fields?: Array<Field>;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;
	}

	/** Schema of a runtime entity. */
	export interface RuntimeEntitySchemaFormProperties {

		/** Output only. Name of the entity. */
		entity: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeEntitySchemaFormGroup() {
		return new FormGroup<RuntimeEntitySchemaFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ConnectorsService.ListEventSubscriptions */
	export interface ListEventSubscriptionsResponse {

		/** Subscriptions. */
		eventSubscriptions?: Array<EventSubscription>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for ConnectorsService.ListEventSubscriptions */
	export interface ListEventSubscriptionsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventSubscriptionsResponseFormGroup() {
		return new FormGroup<ListEventSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Connectors.ListEventTypes. */
	export interface ListEventTypesResponse {

		/** A list of connector versions. */
		eventTypes?: Array<EventType>;

		/** Next page token. */
		nextPageToken?: string | null;
	}

	/** Response message for Connectors.ListEventTypes. */
	export interface ListEventTypesResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventTypesResponseFormGroup() {
		return new FormGroup<ListEventTypesResponseFormProperties>({
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


	/** Response message for ConnectorsService.ListManagedZones */
	export interface ListManagedZonesResponse {

		/** ManagedZones. */
		managedZones?: Array<ManagedZone>;

		/** Next page token. */
		nextPageToken?: string | null;
	}

	/** Response message for ConnectorsService.ListManagedZones */
	export interface ListManagedZonesResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedZonesResponseFormGroup() {
		return new FormGroup<ListManagedZonesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** represents the Connector's Managed Zone resource */
	export interface ManagedZone {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Optional. Description of the resource. */
		description?: string | null;

		/** Required. DNS Name of the resource */
		dns?: string | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone} */
		name?: string | null;

		/** Required. The name of the Target Project */
		targetProject?: string | null;

		/** Required. The name of the Target Project VPC Network */
		targetVpc?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** represents the Connector's Managed Zone resource */
	export interface ManagedZoneFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Required. DNS Name of the resource */
		dns: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone} */
		name: FormControl<string | null | undefined>,

		/** Required. The name of the Target Project */
		targetProject: FormControl<string | null | undefined>,

		/** Required. The name of the Target Project VPC Network */
		targetVpc: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateManagedZoneFormGroup() {
		return new FormGroup<ManagedZoneFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dns: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetProject: new FormControl<string | null | undefined>(undefined),
			targetVpc: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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


	/** Response message for Connectors.ListProviders. */
	export interface ListProvidersResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** A list of providers. */
		providers?: Array<Provider>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for Connectors.ListProviders. */
	export interface ListProvidersResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvidersResponseFormGroup() {
		return new FormGroup<ListProvidersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provider indicates the owner who provides the connectors. */
	export interface Provider {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Output only. Description of the resource. */
		description?: string | null;

		/** Output only. Display name. */
		displayName?: string | null;

		/** Output only. Link to documentation page. */
		documentationUri?: string | null;

		/** Output only. Link to external page. */
		externalUri?: string | null;

		/** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Output only. Flag to mark the version indicating the launch stage. */
		launchStage?: ConnectionConnectorVersionLaunchStage | null;

		/** Output only. Resource name of the Provider. Format: projects/{project}/locations/{location}/providers/{provider} Only global location is supported for Provider resource. */
		name?: string | null;

		/** Output only. Updated time. */
		updateTime?: string | null;

		/** Output only. Cloud storage location of icons etc consumed by UI. */
		webAssetsLocation?: string | null;
	}

	/** Provider indicates the owner who provides the connectors. */
	export interface ProviderFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Link to documentation page. */
		documentationUri: FormControl<string | null | undefined>,

		/** Output only. Link to external page. */
		externalUri: FormControl<string | null | undefined>,

		/** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Flag to mark the version indicating the launch stage. */
		launchStage: FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>,

		/** Output only. Resource name of the Provider. Format: projects/{project}/locations/{location}/providers/{provider} Only global location is supported for Provider resource. */
		name: FormControl<string | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. Cloud storage location of icons etc consumed by UI. */
		webAssetsLocation: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			documentationUri: new FormControl<string | null | undefined>(undefined),
			externalUri: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			launchStage: new FormControl<ConnectionConnectorVersionLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			webAssetsLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ConnectorsService.ListRuntimeActionSchemas. */
	export interface ListRuntimeActionSchemasResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** Runtime action schemas. */
		runtimeActionSchemas?: Array<RuntimeActionSchema>;
	}

	/** Response message for ConnectorsService.ListRuntimeActionSchemas. */
	export interface ListRuntimeActionSchemasResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuntimeActionSchemasResponseFormGroup() {
		return new FormGroup<ListRuntimeActionSchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ConnectorsService.ListRuntimeEntitySchemas. */
	export interface ListRuntimeEntitySchemasResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** Runtime entity schemas. */
		runtimeEntitySchemas?: Array<RuntimeEntitySchema>;
	}

	/** Response message for ConnectorsService.ListRuntimeEntitySchemas. */
	export interface ListRuntimeEntitySchemasResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuntimeEntitySchemasResponseFormGroup() {
		return new FormGroup<ListRuntimeEntitySchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Expected request for ListenEvent API. */
	export interface ListenEventRequest {

		/** Optional. Request payload. */
		payload?: {[id: string]: any };
	}

	/** Expected request for ListenEvent API. */
	export interface ListenEventRequestFormProperties {

		/** Optional. Request payload. */
		payload: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateListenEventRequestFormGroup() {
		return new FormGroup<ListenEventRequestFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Expected response for ListenEvent API. */
	export interface ListenEventResponse {
	}

	/** Expected response for ListenEvent API. */
	export interface ListenEventResponseFormProperties {
	}
	export function CreateListenEventResponseFormGroup() {
		return new FormGroup<ListenEventResponseFormProperties>({
		});

	}


	/** Regional Network Config. */
	export interface NetworkConfig {

		/** Output only. Egress IPs */
		egressIps?: Array<string>;

		/** Optional. Egress mode for the network. */
		egressMode?: NetworkConfigEgressMode | null;
	}

	/** Regional Network Config. */
	export interface NetworkConfigFormProperties {

		/** Optional. Egress mode for the network. */
		egressMode: FormControl<NetworkConfigEgressMode | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			egressMode: new FormControl<NetworkConfigEgressMode | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigEgressMode { NETWORK_EGRESS_MODE_UNSPECIFIED = 'NETWORK_EGRESS_MODE_UNSPECIFIED', AUTO_IP = 'AUTO_IP', STATIC_IP = 'STATIC_IP' }


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


	/** Request message for ConnectorsService.RefreshConnectionSchemaMetadata. */
	export interface RefreshConnectionSchemaMetadataRequest {
	}

	/** Request message for ConnectorsService.RefreshConnectionSchemaMetadata. */
	export interface RefreshConnectionSchemaMetadataRequestFormProperties {
	}
	export function CreateRefreshConnectionSchemaMetadataRequestFormGroup() {
		return new FormGroup<RefreshConnectionSchemaMetadataRequestFormProperties>({
		});

	}


	/** Regional Settings details. */
	export interface RegionalSettings {

		/** Regional encryption config for CMEK details. */
		encryptionConfig?: EncryptionConfig;

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings */
		name?: string | null;

		/** Regional Network Config. */
		networkConfig?: NetworkConfig;
	}

	/** Regional Settings details. */
	export interface RegionalSettingsFormProperties {

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionalSettingsFormGroup() {
		return new FormGroup<RegionalSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ConnectorsService.RepairEventing */
	export interface RepairEventingRequest {
	}

	/** Request message for ConnectorsService.RepairEventing */
	export interface RepairEventingRequestFormProperties {
	}
	export function CreateRepairEventingRequestFormGroup() {
		return new FormGroup<RepairEventingRequestFormProperties>({
		});

	}


	/** Request message for ConnectorsService.RefreshEventSubscription */
	export interface RetryEventSubscriptionRequest {
	}

	/** Request message for ConnectorsService.RefreshEventSubscription */
	export interface RetryEventSubscriptionRequestFormProperties {
	}
	export function CreateRetryEventSubscriptionRequestFormGroup() {
		return new FormGroup<RetryEventSubscriptionRequestFormProperties>({
		});

	}


	/** RuntimeConfig is the singleton resource of each location. It includes generic resource configs consumed by control plane and runtime plane like: pub/sub topic/subscription resource name, Cloud Storage location storing schema etc. */
	export interface RuntimeConfig {

		/** Output only. Pub/Sub subscription for connd to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} */
		conndSubscription?: string | null;

		/** Output only. Pub/Sub topic for connd to send message. E.g. projects/{project-id}/topics/{topic-id} */
		conndTopic?: string | null;

		/** Output only. Pub/Sub subscription for control plane to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} */
		controlPlaneSubscription?: string | null;

		/** Output only. Pub/Sub topic for control plne to send message. communication. E.g. projects/{project-id}/topics/{topic-id} */
		controlPlaneTopic?: string | null;

		/** Output only. location_id of the runtime location. E.g. "us-west1". */
		locationId?: string | null;

		/** Output only. Name of the runtimeConfig resource. Format: projects/{project}/locations/{location}/runtimeConfig */
		name?: string | null;

		/** Output only. The endpoint of the connectors runtime ingress. */
		runtimeEndpoint?: string | null;

		/** Output only. The Cloud Storage bucket that stores connector's schema reports. */
		schemaGcsBucket?: string | null;

		/** Output only. The name of the Service Directory service name. */
		serviceDirectory?: string | null;

		/** Output only. The state of the location. */
		state?: RuntimeConfigState | null;
	}

	/** RuntimeConfig is the singleton resource of each location. It includes generic resource configs consumed by control plane and runtime plane like: pub/sub topic/subscription resource name, Cloud Storage location storing schema etc. */
	export interface RuntimeConfigFormProperties {

		/** Output only. Pub/Sub subscription for connd to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} */
		conndSubscription: FormControl<string | null | undefined>,

		/** Output only. Pub/Sub topic for connd to send message. E.g. projects/{project-id}/topics/{topic-id} */
		conndTopic: FormControl<string | null | undefined>,

		/** Output only. Pub/Sub subscription for control plane to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} */
		controlPlaneSubscription: FormControl<string | null | undefined>,

		/** Output only. Pub/Sub topic for control plne to send message. communication. E.g. projects/{project-id}/topics/{topic-id} */
		controlPlaneTopic: FormControl<string | null | undefined>,

		/** Output only. location_id of the runtime location. E.g. "us-west1". */
		locationId: FormControl<string | null | undefined>,

		/** Output only. Name of the runtimeConfig resource. Format: projects/{project}/locations/{location}/runtimeConfig */
		name: FormControl<string | null | undefined>,

		/** Output only. The endpoint of the connectors runtime ingress. */
		runtimeEndpoint: FormControl<string | null | undefined>,

		/** Output only. The Cloud Storage bucket that stores connector's schema reports. */
		schemaGcsBucket: FormControl<string | null | undefined>,

		/** Output only. The name of the Service Directory service name. */
		serviceDirectory: FormControl<string | null | undefined>,

		/** Output only. The state of the location. */
		state: FormControl<RuntimeConfigState | null | undefined>,
	}
	export function CreateRuntimeConfigFormGroup() {
		return new FormGroup<RuntimeConfigFormProperties>({
			conndSubscription: new FormControl<string | null | undefined>(undefined),
			conndTopic: new FormControl<string | null | undefined>(undefined),
			controlPlaneSubscription: new FormControl<string | null | undefined>(undefined),
			controlPlaneTopic: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			runtimeEndpoint: new FormControl<string | null | undefined>(undefined),
			schemaGcsBucket: new FormControl<string | null | undefined>(undefined),
			serviceDirectory: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RuntimeConfigState | null | undefined>(undefined),
		});

	}

	export enum RuntimeConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INACTIVE = 'INACTIVE', ACTIVATING = 'ACTIVATING', ACTIVE = 'ACTIVE', CREATING = 'CREATING', DELETING = 'DELETING', UPDATING = 'UPDATING' }


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


	/** Global Settings details. */
	export interface Settings {

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings} */
		name?: string | null;

		/** Output only. Flag indicates if user is in PayG model */
		payg?: boolean | null;

		/** Output only. Tenant project id of the consumer project. */
		tenantProjectId?: string | null;

		/** Optional. Flag indicates whether vpc-sc is enabled. */
		vpcsc?: boolean | null;
	}

	/** Global Settings details. */
	export interface SettingsFormProperties {

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings} */
		name: FormControl<string | null | undefined>,

		/** Output only. Flag indicates if user is in PayG model */
		payg: FormControl<boolean | null | undefined>,

		/** Output only. Tenant project id of the consumer project. */
		tenantProjectId: FormControl<string | null | undefined>,

		/** Optional. Flag indicates whether vpc-sc is enabled. */
		vpcsc: FormControl<boolean | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			payg: new FormControl<boolean | null | undefined>(undefined),
			tenantProjectId: new FormControl<string | null | undefined>(undefined),
			vpcsc: new FormControl<boolean | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {boolean} force Optional. If set to true, any customConnectorVersion which is a child resource will also be deleted. https://aip.dev/135#cascading-delete
		 * @return {Empty} Successful response
		 */
		Connectors_projects_locations_operations_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets details of a single event type.
		 * Get v1/{name}
		 * @param {string} name Required. Resource name of the form: `projects/locations/providers/connectors/versions/eventtypes/*` Only global location is supported for EventType resource.
		 * @param {Connectors_projects_locations_providers_connectors_versions_eventtypes_getView} view Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `CUSTOMER` view.
		 * @return {EventType} Successful response
		 */
		Connectors_projects_locations_providers_connectors_versions_eventtypes_get(name: string, view: Connectors_projects_locations_providers_connectors_versions_eventtypes_getView | null | undefined): Observable<EventType> {
			return this.http.get<EventType>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates the parameters of a single ManagedZone.
		 * Patch v1/{name}
		 * @param {string} name Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone}
		 * @param {string} updateMask Required. The list of fields to update. Fields are specified relative to the managedZone. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the managedZone details: * `description` * `labels` * `target_project` * `target_network`
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_global_managedZones_patch(name: string, updateMask: string | null | undefined, requestBody: ManagedZone): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		Connectors_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
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
		Connectors_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Connectors_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get action.
		 * Get v1/{name}:getAction
		 * @param {string} name Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
		 * @param {string} actionId Required. Id of the action.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_connections_connectionSchemaMetadata_getAction(name: string, actionId: string | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getAction&actionId=' + (actionId == null ? '' : encodeURIComponent(actionId)), {});
		}

		/**
		 * Get entity type.
		 * Get v1/{name}:getEntityType
		 * @param {string} name Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
		 * @param {string} entityId Required. Id of the entity type.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_connections_connectionSchemaMetadata_getEntityType(name: string, entityId: string | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getEntityType&entityId=' + (entityId == null ? '' : encodeURIComponent(entityId)), {});
		}

		/**
		 * List actions.
		 * Get v1/{name}:listActions
		 * @param {string} name Required. Resource name format. projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
		 * @param {string} filter Required. Filter Wildcards are not supported in the filter currently.
		 * @param {number} pageSize Page size. If unspecified, at most 50 actions will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @param {Connectors_projects_locations_connections_connectionSchemaMetadata_listActionsView} view Specifies which fields are returned in response. Defaults to BASIC view.
		 * @return {ListActionsResponse} Successful response
		 */
		Connectors_projects_locations_connections_connectionSchemaMetadata_listActions(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Connectors_projects_locations_connections_connectionSchemaMetadata_listActionsView | null | undefined): Observable<ListActionsResponse> {
			return this.http.get<ListActionsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':listActions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * List entity types.
		 * Get v1/{name}:listEntityTypes
		 * @param {string} name Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
		 * @param {string} filter Required. Filter Wildcards are not supported in the filter currently.
		 * @param {number} pageSize Page size. If unspecified, at most 50 entity types will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @param {Connectors_projects_locations_connections_connectionSchemaMetadata_listActionsView} view Specifies which fields are returned in response. Defaults to BASIC view.
		 * @return {ListEntityTypesResponse} Successful response
		 */
		Connectors_projects_locations_connections_connectionSchemaMetadata_listEntityTypes(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Connectors_projects_locations_connections_connectionSchemaMetadata_listActionsView | null | undefined): Observable<ListEntityTypesResponse> {
			return this.http.get<ListEntityTypesResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':listEntityTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Refresh runtime schema of a connection.
		 * Post v1/{name}:refresh
		 * @param {string} name Required. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_connections_connectionSchemaMetadata_refresh(name: string, requestBody: RefreshConnectionSchemaMetadataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':refresh', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * RepaiEventing tries to repair eventing related event subscriptions.
		 * Post v1/{name}:repairEventing
		 * @param {string} name Required. Resource name of the form: `projects/locations/connections/*`
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_connections_repairEventing(name: string, requestBody: RepairEventingRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':repairEventing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * RetryEventSubscription retries the registration of Subscription.
		 * Post v1/{name}:retry
		 * @param {string} name Required. Resource name of the form: `projects/locations/connections/eventSubscriptions/*`
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_connections_eventSubscriptions_retry(name: string, requestBody: RetryEventSubscriptionRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':retry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Connections in a given project and location.
		 * Get v1/{parent}/connections
		 * @param {string} parent Required. Parent resource of the Connection, of the form: `projects/locations/*`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @param {Connectors_projects_locations_connections_listView} view Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
		 * @return {ListConnectionsResponse} Successful response
		 */
		Connectors_projects_locations_connections_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Connectors_projects_locations_connections_listView | null | undefined): Observable<ListConnectionsResponse> {
			return this.http.get<ListConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connections&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new Connection in a given project and location.
		 * Post v1/{parent}/connections
		 * @param {string} parent Required. Parent resource of the Connection, of the form: `projects/locations/*`
		 * @param {string} connectionId Required. Identifier to assign to the Connection. Must be unique within scope of the parent resource.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_connections_create(parent: string, connectionId: string | null | undefined, requestBody: Connection): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connections&connectionId=' + (connectionId == null ? '' : encodeURIComponent(connectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Connectors in a given project and location.
		 * Get v1/{parent}/connectors
		 * @param {string} parent Required. Parent resource of the connectors, of the form: `projects/locations/providers/*` Only global location is supported for Connector resource.
		 * @param {string} filter Filter string.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListConnectorsResponse} Successful response
		 */
		Connectors_projects_locations_providers_connectors_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConnectorsResponse> {
			return this.http.get<ListConnectorsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectors&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List CustomConnectorVersions in a given project
		 * Get v1/{parent}/customConnectorVersions
		 * @param {string} parent Required. Parent resource of the connectors, of the form: `projects/locations/{location}/customConnectors/customConnectorVersions/*`
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListCustomConnectorVersionsResponse} Successful response
		 */
		Connectors_projects_locations_global_customConnectors_customConnectorVersions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCustomConnectorVersionsResponse> {
			return this.http.get<ListCustomConnectorVersionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customConnectorVersions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new CustomConnectorVersion in a given project and location.
		 * Post v1/{parent}/customConnectorVersions
		 * @param {string} parent Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}`
		 * @param {string} customConnectorVersionId Required. Identifier to assign to the CreateCustomConnectorVersion. Must be unique within scope of the parent resource.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_global_customConnectors_customConnectorVersions_create(parent: string, customConnectorVersionId: string | null | undefined, requestBody: CustomConnectorVersion): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customConnectorVersions&customConnectorVersionId=' + (customConnectorVersionId == null ? '' : encodeURIComponent(customConnectorVersionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List CustomConnectorVersions in a given project
		 * Get v1/{parent}/customConnectors
		 * @param {string} parent Required. Parent resource of the custom connectors, of the form: `projects/locations/*` Only global location is supported for CustomConnector resource.
		 * @param {string} filter Filter string.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListCustomConnectorsResponse} Successful response
		 */
		Connectors_projects_locations_global_customConnectors_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCustomConnectorsResponse> {
			return this.http.get<ListCustomConnectorsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customConnectors&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new CustomConnector in a given project and location.
		 * Post v1/{parent}/customConnectors
		 * @param {string} parent Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/*`
		 * @param {string} customConnectorId Required. Identifier to assign to the CreateCustomConnector. Must be unique within scope of the parent resource.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_global_customConnectors_create(parent: string, customConnectorId: string | null | undefined, requestBody: CustomConnector): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customConnectors&customConnectorId=' + (customConnectorId == null ? '' : encodeURIComponent(customConnectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List EndpointAttachments in a given project
		 * Get v1/{parent}/endpointAttachments
		 * @param {string} parent Required. Parent resource od the EndpointAttachment, of the form: `projects/locations/*`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListEndpointAttachmentsResponse} Successful response
		 */
		Connectors_projects_locations_endpointAttachments_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEndpointAttachmentsResponse> {
			return this.http.get<ListEndpointAttachmentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpointAttachments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new EndpointAttachment in a given project and location.
		 * Post v1/{parent}/endpointAttachments
		 * @param {string} parent Required. Parent resource of the EndpointAttachment, of the form: `projects/locations/*`
		 * @param {string} endpointAttachmentId Required. Identifier to assign to the EndpointAttachment. Must be unique within scope of the parent resource.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_endpointAttachments_create(parent: string, endpointAttachmentId: string | null | undefined, requestBody: EndpointAttachment): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpointAttachments&endpointAttachmentId=' + (endpointAttachmentId == null ? '' : encodeURIComponent(endpointAttachmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List EventSubscriptions in a given project,location and connection.
		 * Get v1/{parent}/eventSubscriptions
		 * @param {string} parent Required. Parent resource of the EventSubscription, of the form: `projects/locations/connections/*`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListEventSubscriptionsResponse} Successful response
		 */
		Connectors_projects_locations_connections_eventSubscriptions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEventSubscriptionsResponse> {
			return this.http.get<ListEventSubscriptionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/eventSubscriptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new EventSubscription in a given project,location and connection.
		 * Post v1/{parent}/eventSubscriptions
		 * @param {string} parent Required. Parent resource of the EventSubscription, of the form: `projects/locations/connections/*`
		 * @param {string} eventSubscriptionId Required. Identifier to assign to the Event Subscription. Must be unique within scope of the parent resource.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_connections_eventSubscriptions_create(parent: string, eventSubscriptionId: string | null | undefined, requestBody: EventSubscription): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/eventSubscriptions&eventSubscriptionId=' + (eventSubscriptionId == null ? '' : encodeURIComponent(eventSubscriptionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Event Types in a given Connector Version.
		 * Get v1/{parent}/eventtypes
		 * @param {string} parent Required. Parent resource of the connectors, of the form: `projects/locations/providers/connectors/versions/*` Only global location is supported for EventType resource.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListEventTypesResponse} Successful response
		 */
		Connectors_projects_locations_providers_connectors_versions_eventtypes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEventTypesResponse> {
			return this.http.get<ListEventTypesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/eventtypes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List ManagedZones in a given project
		 * Get v1/{parent}/managedZones
		 * @param {string} parent Required. Parent resource of the Managed Zone, of the form: `projects/locations/global`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListManagedZonesResponse} Successful response
		 */
		Connectors_projects_locations_global_managedZones_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListManagedZonesResponse> {
			return this.http.get<ListManagedZonesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/managedZones&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ManagedZone in a given project and location.
		 * Post v1/{parent}/managedZones
		 * @param {string} parent Required. Parent resource of the ManagedZone, of the form: `projects/locations/global`
		 * @param {string} managedZoneId Required. Identifier to assign to the ManagedZone. Must be unique within scope of the parent resource.
		 * @return {Operation} Successful response
		 */
		Connectors_projects_locations_global_managedZones_create(parent: string, managedZoneId: string | null | undefined, requestBody: ManagedZone): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/managedZones&managedZoneId=' + (managedZoneId == null ? '' : encodeURIComponent(managedZoneId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Providers in a given project and location.
		 * Get v1/{parent}/providers
		 * @param {string} parent Required. Parent resource of the API, of the form: `projects/locations/*` Only global location is supported for Provider resource.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListProvidersResponse} Successful response
		 */
		Connectors_projects_locations_providers_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProvidersResponse> {
			return this.http.get<ListProvidersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/providers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List schema of a runtime actions filtered by action name.
		 * Get v1/{parent}/runtimeActionSchemas
		 * @param {string} parent Required. Parent resource of RuntimeActionSchema Format: projects/{project}/locations/{location}/connections/{connection}
		 * @param {string} filter Required. Filter Format: action="{actionId}" Only action field is supported with literal equality operator. Accepted filter example: action="CancelOrder" Wildcards are not supported in the filter currently.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListRuntimeActionSchemasResponse} Successful response
		 */
		Connectors_projects_locations_connections_runtimeActionSchemas_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRuntimeActionSchemasResponse> {
			return this.http.get<ListRuntimeActionSchemasResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimeActionSchemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List schema of a runtime entities filtered by entity name.
		 * Get v1/{parent}/runtimeEntitySchemas
		 * @param {string} parent Required. Parent resource of RuntimeEntitySchema Format: projects/{project}/locations/{location}/connections/{connection}
		 * @param {string} filter Required. Filter Format: entity="{entityId}" Only entity field is supported with literal equality operator. Accepted filter example: entity="Order" Wildcards are not supported in the filter currently.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {ListRuntimeEntitySchemasResponse} Successful response
		 */
		Connectors_projects_locations_connections_runtimeEntitySchemas_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRuntimeEntitySchemasResponse> {
			return this.http.get<ListRuntimeEntitySchemasResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimeEntitySchemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Connector Versions in a given project and location.
		 * Get v1/{parent}/versions
		 * @param {string} parent Required. Parent resource of the connectors, of the form: `projects/locations/providers/connectors/*` Only global location is supported for ConnectorVersion resource.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @param {Connectors_projects_locations_providers_connectors_versions_eventtypes_getView} view Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view.
		 * @return {ListConnectorVersionsResponse} Successful response
		 */
		Connectors_projects_locations_providers_connectors_versions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Connectors_projects_locations_providers_connectors_versions_eventtypes_getView | null | undefined): Observable<ListConnectorVersionsResponse> {
			return this.http.get<ListConnectorVersionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * ListenEvent listens to the event.
		 * Post v1/{resourcePath}:listenEvent
		 * @param {string} resourcePath Required. Resource path for request.
		 * @return {ListenEventResponse} Successful response
		 */
		Connectors_projects_locations_connections_listenEvent(resourcePath: string, requestBody: ListenEventRequest): Observable<ListenEventResponse> {
			return this.http.post<ListenEventResponse>(this.baseUri + 'v1/' + (resourcePath == null ? '' : encodeURIComponent(resourcePath)) + ':listenEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Connectors_projects_locations_providers_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Connectors_projects_locations_providers_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Connectors_projects_locations_providers_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Connectors_projects_locations_providers_connectors_versions_eventtypes_getView { CONNECTOR_VERSION_VIEW_UNSPECIFIED = 'CONNECTOR_VERSION_VIEW_UNSPECIFIED', CONNECTOR_VERSION_VIEW_BASIC = 'CONNECTOR_VERSION_VIEW_BASIC', CONNECTOR_VERSION_VIEW_FULL = 'CONNECTOR_VERSION_VIEW_FULL' }

	export enum Connectors_projects_locations_connections_connectionSchemaMetadata_listActionsView { VIEW_UNSPECIFIED = 'VIEW_UNSPECIFIED', BASIC = 'BASIC' }

	export enum Connectors_projects_locations_connections_listView { CONNECTION_VIEW_UNSPECIFIED = 'CONNECTION_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}

