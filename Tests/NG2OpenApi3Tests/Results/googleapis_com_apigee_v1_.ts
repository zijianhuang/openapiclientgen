import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes why a bundle is invalid. Intended for use in error details. */
	export interface EdgeConfigstoreBundleBadBundle {

		/** Describes all precondition violations. */
		violations?: Array<EdgeConfigstoreBundleBadBundleViolation>;
	}

	/** Describes why a bundle is invalid. Intended for use in error details. */
	export interface EdgeConfigstoreBundleBadBundleFormProperties {
	}
	export function CreateEdgeConfigstoreBundleBadBundleFormGroup() {
		return new FormGroup<EdgeConfigstoreBundleBadBundleFormProperties>({
		});

	}


	/** A message type used to describe a single bundle validation error. */
	export interface EdgeConfigstoreBundleBadBundleViolation {

		/** A description of why the bundle is invalid and how to fix it. */
		description?: string | null;

		/** The filename (including relative path from the bundle root) in which the error occurred. */
		filename?: string | null;
	}

	/** A message type used to describe a single bundle validation error. */
	export interface EdgeConfigstoreBundleBadBundleViolationFormProperties {

		/** A description of why the bundle is invalid and how to fix it. */
		description: FormControl<string | null | undefined>,

		/** The filename (including relative path from the bundle root) in which the error occurred. */
		filename: FormControl<string | null | undefined>,
	}
	export function CreateEdgeConfigstoreBundleBadBundleViolationFormGroup() {
		return new FormGroup<EdgeConfigstoreBundleBadBundleViolationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApiHttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApiHttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateGoogleApiHttpBodyFormGroup() {
		return new FormGroup<GoogleApiHttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** APIProductAssociation has the API product and its administrative state association. */
	export interface GoogleCloudApigeeV1APIProductAssociation {

		/** API product to be associated with the credential. */
		apiproduct?: string | null;

		/** The API product credential associated status. Valid values are `approved` or `revoked`. */
		status?: string | null;
	}

	/** APIProductAssociation has the API product and its administrative state association. */
	export interface GoogleCloudApigeeV1APIProductAssociationFormProperties {

		/** API product to be associated with the credential. */
		apiproduct: FormControl<string | null | undefined>,

		/** The API product credential associated status. Valid values are `approved` or `revoked`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1APIProductAssociationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1APIProductAssociationFormProperties>({
			apiproduct: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1Access {

		/** Get action. For example, "Get" : { "name" : "target.name", "value" : "default" } */
		Get?: GoogleCloudApigeeV1AccessGet;

		/** Remove action. For example, "Remove" : { "name" : "target.name", "success" : true } */
		Remove?: GoogleCloudApigeeV1AccessRemove;

		/** Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" } */
		Set?: GoogleCloudApigeeV1AccessSet;
	}
	export interface GoogleCloudApigeeV1AccessFormProperties {
	}
	export function CreateGoogleCloudApigeeV1AccessFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AccessFormProperties>({
		});

	}


	/** Get action. For example, "Get" : { "name" : "target.name", "value" : "default" } */
	export interface GoogleCloudApigeeV1AccessGet {
		name?: string | null;
		value?: string | null;
	}

	/** Get action. For example, "Get" : { "name" : "target.name", "value" : "default" } */
	export interface GoogleCloudApigeeV1AccessGetFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AccessGetFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AccessGetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Remove action. For example, "Remove" : { "name" : "target.name", "success" : true } */
	export interface GoogleCloudApigeeV1AccessRemove {
		name?: string | null;
		success?: boolean | null;
	}

	/** Remove action. For example, "Remove" : { "name" : "target.name", "success" : true } */
	export interface GoogleCloudApigeeV1AccessRemoveFormProperties {
		name: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AccessRemoveFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AccessRemoveFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" } */
	export interface GoogleCloudApigeeV1AccessSet {
		name?: string | null;
		success?: boolean | null;
		value?: string | null;
	}

	/** Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" } */
	export interface GoogleCloudApigeeV1AccessSetFormProperties {
		name: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AccessSetFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AccessSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for ActivateNatAddressRequest. Activate the nat address request. */
	export interface GoogleCloudApigeeV1ActivateNatAddressRequest {
	}

	/** Request for ActivateNatAddressRequest. Activate the nat address request. */
	export interface GoogleCloudApigeeV1ActivateNatAddressRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ActivateNatAddressRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ActivateNatAddressRequestFormProperties>({
		});

	}


	/** Add-on configurations for the Apigee organization. */
	export interface GoogleCloudApigeeV1AddonsConfig {

		/** Configuration for the Advanced API Ops add-on. */
		advancedApiOpsConfig?: GoogleCloudApigeeV1AdvancedApiOpsConfig;

		/** Configuration for the Analytics add-on. */
		analyticsConfig?: GoogleCloudApigeeV1AnalyticsConfig;

		/** Configurations of the API Security add-on. */
		apiSecurityConfig?: GoogleCloudApigeeV1ApiSecurityConfig;

		/** Configuration for the Connectors Platform add-on. */
		connectorsPlatformConfig?: GoogleCloudApigeeV1ConnectorsPlatformConfig;

		/** Configuration for the Integration add-on. */
		integrationConfig?: GoogleCloudApigeeV1IntegrationConfig;

		/** Configuration for the Monetization add-on. */
		monetizationConfig?: GoogleCloudApigeeV1MonetizationConfig;
	}

	/** Add-on configurations for the Apigee organization. */
	export interface GoogleCloudApigeeV1AddonsConfigFormProperties {
	}
	export function CreateGoogleCloudApigeeV1AddonsConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AddonsConfigFormProperties>({
		});

	}


	/** Configuration for the Advanced API Ops add-on. */
	export interface GoogleCloudApigeeV1AdvancedApiOpsConfig {

		/** Flag that specifies whether the Advanced API Ops add-on is enabled. */
		enabled?: boolean | null;
	}

	/** Configuration for the Advanced API Ops add-on. */
	export interface GoogleCloudApigeeV1AdvancedApiOpsConfigFormProperties {

		/** Flag that specifies whether the Advanced API Ops add-on is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AdvancedApiOpsConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AdvancedApiOpsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the Analytics add-on. */
	export interface GoogleCloudApigeeV1AnalyticsConfig {

		/** Whether the Analytics add-on is enabled. */
		enabled?: boolean | null;

		/** Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire. */
		expireTimeMillis?: string | null;

		/** Output only. The state of the Analytics add-on. */
		state?: GoogleCloudApigeeV1AnalyticsConfigState | null;

		/** Output only. The latest update time. */
		updateTime?: string | null;
	}

	/** Configuration for the Analytics add-on. */
	export interface GoogleCloudApigeeV1AnalyticsConfigFormProperties {

		/** Whether the Analytics add-on is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire. */
		expireTimeMillis: FormControl<string | null | undefined>,

		/** Output only. The state of the Analytics add-on. */
		state: FormControl<GoogleCloudApigeeV1AnalyticsConfigState | null | undefined>,

		/** Output only. The latest update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AnalyticsConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AnalyticsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expireTimeMillis: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1AnalyticsConfigState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1AnalyticsConfigState { ADDON_STATE_UNSPECIFIED = 'ADDON_STATE_UNSPECIFIED', ENABLING = 'ENABLING', ENABLED = 'ENABLED', DISABLING = 'DISABLING', DISABLED = 'DISABLED' }


	/** Configurations of the API Security add-on. */
	export interface GoogleCloudApigeeV1ApiSecurityConfig {

		/** Flag that specifies whether the API security add-on is enabled. */
		enabled?: boolean | null;

		/** Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire. */
		expiresAt?: string | null;
	}

	/** Configurations of the API Security add-on. */
	export interface GoogleCloudApigeeV1ApiSecurityConfigFormProperties {

		/** Flag that specifies whether the API security add-on is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire. */
		expiresAt: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiSecurityConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiSecurityConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expiresAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the Connectors Platform add-on. */
	export interface GoogleCloudApigeeV1ConnectorsPlatformConfig {

		/** Flag that specifies whether the Connectors Platform add-on is enabled. */
		enabled?: boolean | null;

		/** Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire. */
		expiresAt?: string | null;
	}

	/** Configuration for the Connectors Platform add-on. */
	export interface GoogleCloudApigeeV1ConnectorsPlatformConfigFormProperties {

		/** Flag that specifies whether the Connectors Platform add-on is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire. */
		expiresAt: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ConnectorsPlatformConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ConnectorsPlatformConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expiresAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the Integration add-on. */
	export interface GoogleCloudApigeeV1IntegrationConfig {

		/** Flag that specifies whether the Integration add-on is enabled. */
		enabled?: boolean | null;
	}

	/** Configuration for the Integration add-on. */
	export interface GoogleCloudApigeeV1IntegrationConfigFormProperties {

		/** Flag that specifies whether the Integration add-on is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1IntegrationConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1IntegrationConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the Monetization add-on. */
	export interface GoogleCloudApigeeV1MonetizationConfig {

		/** Flag that specifies whether the Monetization add-on is enabled. */
		enabled?: boolean | null;
	}

	/** Configuration for the Monetization add-on. */
	export interface GoogleCloudApigeeV1MonetizationConfigFormProperties {

		/** Flag that specifies whether the Monetization add-on is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1MonetizationConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1MonetizationConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request for AdjustDeveloperBalance. */
	export interface GoogleCloudApigeeV1AdjustDeveloperBalanceRequest {

		/** Represents an amount of money with its currency type. */
		adjustment?: GoogleTypeMoney;
	}

	/** Request for AdjustDeveloperBalance. */
	export interface GoogleCloudApigeeV1AdjustDeveloperBalanceRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1AdjustDeveloperBalanceRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AdjustDeveloperBalanceRequestFormProperties>({
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoney {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeMoneyFormGroup() {
		return new FormGroup<GoogleTypeMoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to a certificate or key/certificate pair. */
	export interface GoogleCloudApigeeV1Alias {

		/** Resource ID for this alias. Values must match the regular expression `[^/]{1,255}`. */
		alias?: string | null;
		certsInfo?: GoogleCloudApigeeV1Certificate;

		/** Type of alias. */
		type?: GoogleCloudApigeeV1AliasType | null;
	}

	/** Reference to a certificate or key/certificate pair. */
	export interface GoogleCloudApigeeV1AliasFormProperties {

		/** Resource ID for this alias. Values must match the regular expression `[^/]{1,255}`. */
		alias: FormControl<string | null | undefined>,

		/** Type of alias. */
		type: FormControl<GoogleCloudApigeeV1AliasType | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AliasFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AliasFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudApigeeV1AliasType | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1Certificate {

		/** Chain of certificates under this name. */
		certInfo?: Array<GoogleCloudApigeeV1CertInfo>;
	}
	export interface GoogleCloudApigeeV1CertificateFormProperties {
	}
	export function CreateGoogleCloudApigeeV1CertificateFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CertificateFormProperties>({
		});

	}


	/** X.509 certificate as defined in RFC 5280. */
	export interface GoogleCloudApigeeV1CertInfo {

		/** X.509 basic constraints extension. */
		basicConstraints?: string | null;

		/** X.509 `notAfter` validity period in milliseconds since epoch. */
		expiryDate?: string | null;

		/** Flag that specifies whether the certificate is valid. Flag is set to `Yes` if the certificate is valid, `No` if expired, or `Not yet` if not yet valid. */
		isValid?: string | null;

		/** X.509 issuer. */
		issuer?: string | null;

		/** Public key component of the X.509 subject public key info. */
		publicKey?: string | null;

		/** X.509 serial number. */
		serialNumber?: string | null;

		/** X.509 signatureAlgorithm. */
		sigAlgName?: string | null;

		/** X.509 subject. */
		subject?: string | null;

		/** X.509 subject alternative names (SANs) extension. */
		subjectAlternativeNames?: Array<string>;

		/** X.509 `notBefore` validity period in milliseconds since epoch. */
		validFrom?: string | null;

		/**
		 * X.509 version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** X.509 certificate as defined in RFC 5280. */
	export interface GoogleCloudApigeeV1CertInfoFormProperties {

		/** X.509 basic constraints extension. */
		basicConstraints: FormControl<string | null | undefined>,

		/** X.509 `notAfter` validity period in milliseconds since epoch. */
		expiryDate: FormControl<string | null | undefined>,

		/** Flag that specifies whether the certificate is valid. Flag is set to `Yes` if the certificate is valid, `No` if expired, or `Not yet` if not yet valid. */
		isValid: FormControl<string | null | undefined>,

		/** X.509 issuer. */
		issuer: FormControl<string | null | undefined>,

		/** Public key component of the X.509 subject public key info. */
		publicKey: FormControl<string | null | undefined>,

		/** X.509 serial number. */
		serialNumber: FormControl<string | null | undefined>,

		/** X.509 signatureAlgorithm. */
		sigAlgName: FormControl<string | null | undefined>,

		/** X.509 subject. */
		subject: FormControl<string | null | undefined>,

		/** X.509 `notBefore` validity period in milliseconds since epoch. */
		validFrom: FormControl<string | null | undefined>,

		/**
		 * X.509 version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CertInfoFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CertInfoFormProperties>({
			basicConstraints: new FormControl<string | null | undefined>(undefined),
			expiryDate: new FormControl<string | null | undefined>(undefined),
			isValid: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			sigAlgName: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			validFrom: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1AliasType { ALIAS_TYPE_UNSPECIFIED = 'ALIAS_TYPE_UNSPECIFIED', CERT = 'CERT', KEY_CERT = 'KEY_CERT' }

	export interface GoogleCloudApigeeV1AliasRevisionConfig {

		/** Location of the alias file. For example, a Google Cloud Storage URI. */
		location?: string | null;

		/** Name of the alias revision included in the keystore in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}` */
		name?: string | null;
		type?: GoogleCloudApigeeV1AliasType | null;
	}
	export interface GoogleCloudApigeeV1AliasRevisionConfigFormProperties {

		/** Location of the alias file. For example, a Google Cloud Storage URI. */
		location: FormControl<string | null | undefined>,

		/** Name of the alias revision included in the keystore in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}` */
		name: FormControl<string | null | undefined>,
		type: FormControl<GoogleCloudApigeeV1AliasType | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AliasRevisionConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AliasRevisionConfigFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudApigeeV1AliasType | null | undefined>(undefined),
		});

	}


	/** `ApiCategory` represents an API category. [Catalog items](/apigee/docs/reference/apis/apigee/rest/v1/organizations.sites.apidocs) can be tagged with API categories; users viewing the API catalog in the portal will have the option to browse the catalog by category. */
	export interface GoogleCloudApigeeV1ApiCategory {

		/** ID of the category (a UUID). */
		id?: string | null;

		/** Name of the category. */
		name?: string | null;

		/** Name of the portal. */
		siteId?: string | null;

		/** Time the category was last modified in milliseconds since epoch. */
		updateTime?: string | null;
	}

	/** `ApiCategory` represents an API category. [Catalog items](/apigee/docs/reference/apis/apigee/rest/v1/organizations.sites.apidocs) can be tagged with API categories; users viewing the API catalog in the portal will have the option to browse the catalog by category. */
	export interface GoogleCloudApigeeV1ApiCategoryFormProperties {

		/** ID of the category (a UUID). */
		id: FormControl<string | null | undefined>,

		/** Name of the category. */
		name: FormControl<string | null | undefined>,

		/** Name of the portal. */
		siteId: FormControl<string | null | undefined>,

		/** Time the category was last modified in milliseconds since epoch. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiCategoryFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API category resource wrapped with response status, error_code, etc. */
	export interface GoogleCloudApigeeV1ApiCategoryResponse {

		/** `ApiCategory` represents an API category. [Catalog items](/apigee/docs/reference/apis/apigee/rest/v1/organizations.sites.apidocs) can be tagged with API categories; users viewing the API catalog in the portal will have the option to browse the catalog by category. */
		data?: GoogleCloudApigeeV1ApiCategory;

		/** Unique error code for the request, if any. */
		errorCode?: string | null;

		/** Description of the operation. */
		message?: string | null;

		/** Unique ID of the request. */
		requestId?: string | null;

		/** Status of the operation. */
		status?: string | null;
	}

	/** The API category resource wrapped with response status, error_code, etc. */
	export interface GoogleCloudApigeeV1ApiCategoryResponseFormProperties {

		/** Unique error code for the request, if any. */
		errorCode: FormControl<string | null | undefined>,

		/** Description of the operation. */
		message: FormControl<string | null | undefined>,

		/** Unique ID of the request. */
		requestId: FormControl<string | null | undefined>,

		/** Status of the operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiCategoryResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiCategoryResponseFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1ApiProduct {

		/** Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the `apiResources` element is defined to be `/forecastrss` and the base path defined for the API proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on. For more information, see Managing API products. */
		apiResources?: Array<string>;

		/** Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities. */
		approvalType?: string | null;

		/** Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either `public`, `private`, or `internal`. Only products marked `public` are available to developers in the Apigee developer portal. For example, you can set a product to `internal` while it is in development and then change access to `public` when it is ready to release on the portal. API products marked as `private` do not appear on the portal, but can be accessed by external developers. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Response only. Creation time of this environment as milliseconds since epoch. */
		createdAt?: string | null;

		/** Description of the API product. Include key information about the API product that is not captured by other fields. */
		description?: string | null;

		/** Name displayed in the UI or developer portal to developers registering for API access. */
		displayName?: string | null;

		/** Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in `prod` from being accessed by API proxies deployed in `test`. */
		environments?: Array<string>;

		/** List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy. */
		graphqlOperationGroup?: GoogleCloudApigeeV1GraphQLOperationGroup;

		/** List of gRPC operation configuration details associated with Apigee API proxies. */
		grpcOperationGroup?: GoogleCloudApigeeV1GrpcOperationGroup;

		/** Response only. Modified time of this environment as milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product. */
		name?: string | null;

		/** List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy. */
		operationGroup?: GoogleCloudApigeeV1OperationGroup;

		/** Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation. */
		proxies?: Array<string>;

		/** Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours. */
		quota?: string | null;

		/** Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. */
		quotaCounterScope?: GoogleCloudApigeeV1ApiProductQuotaCounterScope | null;

		/** Time interval over which the number of request messages is calculated. */
		quotaInterval?: string | null;

		/** Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`. */
		quotaTimeUnit?: string | null;

		/** Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product. */
		scopes?: Array<string>;
	}
	export interface GoogleCloudApigeeV1ApiProductFormProperties {

		/** Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities. */
		approvalType: FormControl<string | null | undefined>,

		/** Response only. Creation time of this environment as milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Description of the API product. Include key information about the API product that is not captured by other fields. */
		description: FormControl<string | null | undefined>,

		/** Name displayed in the UI or developer portal to developers registering for API access. */
		displayName: FormControl<string | null | undefined>,

		/** Response only. Modified time of this environment as milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product. */
		name: FormControl<string | null | undefined>,

		/** Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours. */
		quota: FormControl<string | null | undefined>,

		/** Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. */
		quotaCounterScope: FormControl<GoogleCloudApigeeV1ApiProductQuotaCounterScope | null | undefined>,

		/** Time interval over which the number of request messages is calculated. */
		quotaInterval: FormControl<string | null | undefined>,

		/** Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`. */
		quotaTimeUnit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiProductFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiProductFormProperties>({
			approvalType: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quota: new FormControl<string | null | undefined>(undefined),
			quotaCounterScope: new FormControl<GoogleCloudApigeeV1ApiProductQuotaCounterScope | null | undefined>(undefined),
			quotaInterval: new FormControl<string | null | undefined>(undefined),
			quotaTimeUnit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key-value pair to store extra metadata. */
	export interface GoogleCloudApigeeV1Attribute {

		/** API key of the attribute. */
		name?: string | null;

		/** Value of the attribute. */
		value?: string | null;
	}

	/** Key-value pair to store extra metadata. */
	export interface GoogleCloudApigeeV1AttributeFormProperties {

		/** API key of the attribute. */
		name: FormControl<string | null | undefined>,

		/** Value of the attribute. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AttributeFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy. */
	export interface GoogleCloudApigeeV1GraphQLOperationGroup {

		/** Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product. */
		operationConfigType?: string | null;

		/** Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product. */
		operationConfigs?: Array<GoogleCloudApigeeV1GraphQLOperationConfig>;
	}

	/** List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy. */
	export interface GoogleCloudApigeeV1GraphQLOperationGroupFormProperties {

		/** Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product. */
		operationConfigType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1GraphQLOperationGroupFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GraphQLOperationGroupFormProperties>({
			operationConfigType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement. */
	export interface GoogleCloudApigeeV1GraphQLOperationConfig {

		/** Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. */
		apiSource?: string | null;

		/** Custom attributes associated with the operation. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of the GraphQL name. **Note**: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail. */
		operations?: Array<GoogleCloudApigeeV1GraphQLOperation>;

		/** Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters. */
		quota?: GoogleCloudApigeeV1Quota;
	}

	/** Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement. */
	export interface GoogleCloudApigeeV1GraphQLOperationConfigFormProperties {

		/** Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. */
		apiSource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1GraphQLOperationConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GraphQLOperationConfigFormProperties>({
			apiSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the pairing of GraphQL operation types and the GraphQL operation name. */
	export interface GoogleCloudApigeeV1GraphQLOperation {

		/** GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload. */
		operation?: string | null;

		/** Required. GraphQL operation types. Valid values include `query` or `mutation`. **Note**: Apigee does not currently support `subscription` types. */
		operationTypes?: Array<string>;
	}

	/** Represents the pairing of GraphQL operation types and the GraphQL operation name. */
	export interface GoogleCloudApigeeV1GraphQLOperationFormProperties {

		/** GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload. */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1GraphQLOperationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GraphQLOperationFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters. */
	export interface GoogleCloudApigeeV1Quota {

		/** Required. Time interval over which the number of request messages is calculated. */
		interval?: string | null;

		/** Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. */
		limit?: string | null;

		/** Time unit defined for the `interval`. Valid values include `minute`, `hour`, `day`, or `month`. If `limit` and `interval` are valid, the default value is `hour`; otherwise, the default is null. */
		timeUnit?: string | null;
	}

	/** Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters. */
	export interface GoogleCloudApigeeV1QuotaFormProperties {

		/** Required. Time interval over which the number of request messages is calculated. */
		interval: FormControl<string | null | undefined>,

		/** Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. */
		limit: FormControl<string | null | undefined>,

		/** Time unit defined for the `interval`. Valid values include `minute`, `hour`, `day`, or `month`. If `limit` and `interval` are valid, the default value is `hour`; otherwise, the default is null. */
		timeUnit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QuotaFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QuotaFormProperties>({
			interval: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			timeUnit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of gRPC operation configuration details associated with Apigee API proxies. */
	export interface GoogleCloudApigeeV1GrpcOperationGroup {

		/** Required. List of operation configurations for either Apigee API proxies that are associated with this API product. */
		operationConfigs?: Array<GoogleCloudApigeeV1GrpcOperationConfig>;
	}

	/** List of gRPC operation configuration details associated with Apigee API proxies. */
	export interface GoogleCloudApigeeV1GrpcOperationGroupFormProperties {
	}
	export function CreateGoogleCloudApigeeV1GrpcOperationGroupFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GrpcOperationGroupFormProperties>({
		});

	}


	/** Binds the resources in a proxy or remote service with the gRPC operation and its associated quota enforcement. */
	export interface GoogleCloudApigeeV1GrpcOperationConfig {

		/** Required. Name of the API proxy with which the gRPC operation and quota are associated. */
		apiSource?: string | null;

		/** Custom attributes associated with the operation. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** List of unqualified gRPC method names for the proxy to which quota will be applied. If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy. Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"]. */
		methods?: Array<string>;

		/** Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters. */
		quota?: GoogleCloudApigeeV1Quota;

		/** Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon. */
		service?: string | null;
	}

	/** Binds the resources in a proxy or remote service with the gRPC operation and its associated quota enforcement. */
	export interface GoogleCloudApigeeV1GrpcOperationConfigFormProperties {

		/** Required. Name of the API proxy with which the gRPC operation and quota are associated. */
		apiSource: FormControl<string | null | undefined>,

		/** Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1GrpcOperationConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GrpcOperationConfigFormProperties>({
			apiSource: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy. */
	export interface GoogleCloudApigeeV1OperationGroup {

		/** Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product. */
		operationConfigType?: string | null;

		/** Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product. */
		operationConfigs?: Array<GoogleCloudApigeeV1OperationConfig>;
	}

	/** List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy. */
	export interface GoogleCloudApigeeV1OperationGroupFormProperties {

		/** Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product. */
		operationConfigType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OperationGroupFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OperationGroupFormProperties>({
			operationConfigType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement. */
	export interface GoogleCloudApigeeV1OperationConfig {

		/** Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. */
		apiSource?: string | null;

		/** Custom attributes associated with the operation. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** List of resource/method pairs for the API proxy or remote service to which quota will applied. **Note**: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided. */
		operations?: Array<GoogleCloudApigeeV1Operation>;

		/** Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters. */
		quota?: GoogleCloudApigeeV1Quota;
	}

	/** Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement. */
	export interface GoogleCloudApigeeV1OperationConfigFormProperties {

		/** Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. */
		apiSource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OperationConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OperationConfigFormProperties>({
			apiSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path. */
	export interface GoogleCloudApigeeV1Operation {

		/** methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed. */
		methods?: Array<string>;

		/** Required. REST resource path associated with the API proxy or remote service. */
		resource?: string | null;
	}

	/** Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path. */
	export interface GoogleCloudApigeeV1OperationFormProperties {

		/** Required. REST resource path associated with the API proxy or remote service. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OperationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OperationFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1ApiProductQuotaCounterScope { QUOTA_COUNTER_SCOPE_UNSPECIFIED = 'QUOTA_COUNTER_SCOPE_UNSPECIFIED', PROXY = 'PROXY', OPERATION = 'OPERATION' }

	export interface GoogleCloudApigeeV1ApiProductRef {

		/** Name of the API product. */
		apiproduct?: string | null;

		/** Status of the API product. Valid values are `approved` or `revoked`. */
		status?: string | null;
	}
	export interface GoogleCloudApigeeV1ApiProductRefFormProperties {

		/** Name of the API product. */
		apiproduct: FormControl<string | null | undefined>,

		/** Status of the API product. Valid values are `approved` or `revoked`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiProductRefFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiProductRefFormProperties>({
			apiproduct: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing the API proxy */
	export interface GoogleCloudApigeeV1ApiProxy {

		/** Output only. The type of the API proxy. */
		apiProxyType?: GoogleCloudApigeeV1ApiProxyApiProxyType | null;

		/** User labels applied to this API Proxy. */
		labels?: {[id: string]: string };

		/** Output only. The id of the most recently created revision for this api proxy. */
		latestRevisionId?: string | null;

		/** Metadata common to many entities in this API. */
		metaData?: GoogleCloudApigeeV1EntityMetadata;

		/** Output only. Name of the API proxy. */
		name?: string | null;

		/** Output only. Whether this proxy is read-only. A read-only proxy cannot have new revisions created through calls to CreateApiProxyRevision. A proxy is read-only if it was generated by an archive. */
		readOnly?: boolean | null;

		/** Output only. List of revisions defined for the API proxy. */
		revision?: Array<string>;
	}

	/** Metadata describing the API proxy */
	export interface GoogleCloudApigeeV1ApiProxyFormProperties {

		/** Output only. The type of the API proxy. */
		apiProxyType: FormControl<GoogleCloudApigeeV1ApiProxyApiProxyType | null | undefined>,

		/** User labels applied to this API Proxy. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The id of the most recently created revision for this api proxy. */
		latestRevisionId: FormControl<string | null | undefined>,

		/** Output only. Name of the API proxy. */
		name: FormControl<string | null | undefined>,

		/** Output only. Whether this proxy is read-only. A read-only proxy cannot have new revisions created through calls to CreateApiProxyRevision. A proxy is read-only if it was generated by an archive. */
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiProxyFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiProxyFormProperties>({
			apiProxyType: new FormControl<GoogleCloudApigeeV1ApiProxyApiProxyType | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			latestRevisionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1ApiProxyApiProxyType { API_PROXY_TYPE_UNSPECIFIED = 'API_PROXY_TYPE_UNSPECIFIED', PROGRAMMABLE = 'PROGRAMMABLE', CONFIGURABLE = 'CONFIGURABLE' }


	/** Metadata common to many entities in this API. */
	export interface GoogleCloudApigeeV1EntityMetadata {

		/** Time at which the API proxy was created, in milliseconds since epoch. */
		createdAt?: string | null;

		/** Time at which the API proxy was most recently modified, in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** The type of entity described */
		subType?: string | null;
	}

	/** Metadata common to many entities in this API. */
	export interface GoogleCloudApigeeV1EntityMetadataFormProperties {

		/** Time at which the API proxy was created, in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Time at which the API proxy was most recently modified, in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** The type of entity described */
		subType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EntityMetadataFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EntityMetadataFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			subType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** API proxy revision. */
	export interface GoogleCloudApigeeV1ApiProxyRevision {

		/** Output only. The archive that generated this proxy revision. This field is only present on proxy revisions that were generated by an archive. Proxies generated by archives cannot be updated, deleted, or deployed to other environments. Format: `organizations/environments/archiveDeployments/*` */
		archive?: string | null;

		/** Base URL of the API proxy. */
		basepaths?: Array<string>;

		/** Version of the API proxy configuration schema. Currently, only 4.0 is supported. */
		configurationVersion?: GoogleCloudApigeeV1ConfigVersion;

		/** Revision number, app name, and organization for the API proxy. */
		contextInfo?: string | null;

		/** Time that the API proxy revision was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** Description of the API proxy revision. */
		description?: string | null;

		/** Human-readable name of the API proxy. */
		displayName?: string | null;

		/** Metadata describing the API proxy revision as a key-value map. */
		entityMetaDataAsProperties?: {[id: string]: string };

		/** Output only. This field will be marked as true if revision contains any policies marked as extensible. */
		hasExtensiblePolicy?: boolean | null;

		/** List of IntegrationEndpoints in the '/integration-endpoints' directory of the API proxy. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy. */
		integrationEndpoints?: Array<string>;

		/** Time that the API proxy revision was last modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Name of the API proxy. */
		name?: string | null;

		/** List of policy names included in the API proxy revision.. */
		policies?: Array<string>;

		/** List of proxy names included in the API proxy revision. */
		proxies?: Array<string>;

		/** List of ProxyEndpoints in the `/proxies` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy. */
		proxyEndpoints?: Array<string>;

		/** List of resource files. */
		resourceFiles?: GoogleCloudApigeeV1ResourceFiles;

		/** List of the resources included in the API proxy revision formatted as "{type}://{name}". */
		resources?: Array<string>;

		/** API proxy revision. */
		revision?: string | null;

		/** List of the shared flows included in the API proxy revision. */
		sharedFlows?: Array<string>;

		/** OpenAPI Specification that is associated with the API proxy. The value is set to a URL or to a path in the specification store. */
		spec?: string | null;

		/** List of TargetEndpoints in the `/targets` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy. */
		targetEndpoints?: Array<string>;

		/** List of TargetServers referenced in any TargetEndpoint in the API proxy. Typically, you will see this element only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy. */
		targetServers?: Array<string>;

		/** List of the targets included in the API proxy revision. */
		targets?: Array<string>;

		/** List of the teams included in the API proxy revision. */
		teams?: Array<string>;

		/** Type. Set to `Application`. Maintained for compatibility with the Apigee Edge API. */
		type?: string | null;
	}

	/** API proxy revision. */
	export interface GoogleCloudApigeeV1ApiProxyRevisionFormProperties {

		/** Output only. The archive that generated this proxy revision. This field is only present on proxy revisions that were generated by an archive. Proxies generated by archives cannot be updated, deleted, or deployed to other environments. Format: `organizations/environments/archiveDeployments/*` */
		archive: FormControl<string | null | undefined>,

		/** Revision number, app name, and organization for the API proxy. */
		contextInfo: FormControl<string | null | undefined>,

		/** Time that the API proxy revision was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Description of the API proxy revision. */
		description: FormControl<string | null | undefined>,

		/** Human-readable name of the API proxy. */
		displayName: FormControl<string | null | undefined>,

		/** Metadata describing the API proxy revision as a key-value map. */
		entityMetaDataAsProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. This field will be marked as true if revision contains any policies marked as extensible. */
		hasExtensiblePolicy: FormControl<boolean | null | undefined>,

		/** Time that the API proxy revision was last modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Name of the API proxy. */
		name: FormControl<string | null | undefined>,

		/** API proxy revision. */
		revision: FormControl<string | null | undefined>,

		/** OpenAPI Specification that is associated with the API proxy. The value is set to a URL or to a path in the specification store. */
		spec: FormControl<string | null | undefined>,

		/** Type. Set to `Application`. Maintained for compatibility with the Apigee Edge API. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiProxyRevisionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiProxyRevisionFormProperties>({
			archive: new FormControl<string | null | undefined>(undefined),
			contextInfo: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityMetaDataAsProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			hasExtensiblePolicy: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version of the API proxy configuration schema. Currently, only 4.0 is supported. */
	export interface GoogleCloudApigeeV1ConfigVersion {

		/**
		 * Major version of the API proxy configuration schema.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		majorVersion?: number | null;

		/**
		 * Minor version of the API proxy configuration schema.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minorVersion?: number | null;
	}

	/** Version of the API proxy configuration schema. Currently, only 4.0 is supported. */
	export interface GoogleCloudApigeeV1ConfigVersionFormProperties {

		/**
		 * Major version of the API proxy configuration schema.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		majorVersion: FormControl<number | null | undefined>,

		/**
		 * Minor version of the API proxy configuration schema.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minorVersion: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ConfigVersionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ConfigVersionFormProperties>({
			majorVersion: new FormControl<number | null | undefined>(undefined),
			minorVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of resource files. */
	export interface GoogleCloudApigeeV1ResourceFiles {

		/** List of resource files. */
		resourceFile?: Array<GoogleCloudApigeeV1ResourceFile>;
	}

	/** List of resource files. */
	export interface GoogleCloudApigeeV1ResourceFilesFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ResourceFilesFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ResourceFilesFormProperties>({
		});

	}


	/** Metadata about a resource file. */
	export interface GoogleCloudApigeeV1ResourceFile {

		/** ID of the resource file. */
		name?: string | null;

		/** Resource file type. {{ resource_file_type }} */
		type?: string | null;
	}

	/** Metadata about a resource file. */
	export interface GoogleCloudApigeeV1ResourceFileFormProperties {

		/** ID of the resource file. */
		name: FormControl<string | null | undefined>,

		/** Resource file type. {{ resource_file_type }} */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ResourceFileFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ResourceFileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig]. */
	export interface GoogleCloudApigeeV1ApiSecurityRuntimeConfig {

		/** A list of up to 5 Cloud Storage Blobs that contain SecurityActions. */
		location?: Array<string>;

		/** Name of the environment API Security Runtime configuration resource. Format: `organizations/{org}/environments/{env}/apiSecurityRuntimeConfig` */
		name?: string | null;

		/** Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration was deployed. */
		revisionId?: string | null;

		/** Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and recreated. */
		uid?: string | null;

		/** Time that the API Security Runtime configuration was updated. */
		updateTime?: string | null;
	}

	/** Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig]. */
	export interface GoogleCloudApigeeV1ApiSecurityRuntimeConfigFormProperties {

		/** Name of the environment API Security Runtime configuration resource. Format: `organizations/{org}/environments/{env}/apiSecurityRuntimeConfig` */
		name: FormControl<string | null | undefined>,

		/** Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration was deployed. */
		revisionId: FormControl<string | null | undefined>,

		/** Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and recreated. */
		uid: FormControl<string | null | undefined>,

		/** Time that the API Security Runtime configuration was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ApiSecurityRuntimeConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ApiSecurityRuntimeConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1App {

		/** List of API products associated with the app. */
		apiProducts?: Array<GoogleCloudApigeeV1ApiProductRef>;

		/** Name of the AppGroup */
		appGroup?: string | null;

		/** ID of the app. */
		appId?: string | null;

		/** List of attributes. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps. */
		callbackUrl?: string | null;

		/** Name of the company that owns the app. */
		companyName?: string | null;

		/** Output only. Unix time when the app was created. */
		createdAt?: string | null;

		/** Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API products. */
		credentials?: Array<GoogleCloudApigeeV1Credential>;

		/** Email of the developer. */
		developerEmail?: string | null;

		/** ID of the developer. */
		developerId?: string | null;

		/** Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn */
		keyExpiresIn?: string | null;

		/** Output only. Last modified time as milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Name of the app. */
		name?: string | null;

		/** Scopes to apply to the app. The specified scope names must already exist on the API product that you associate with the app. */
		scopes?: Array<string>;

		/** Status of the credential. */
		status?: string | null;
	}
	export interface GoogleCloudApigeeV1AppFormProperties {

		/** Name of the AppGroup */
		appGroup: FormControl<string | null | undefined>,

		/** ID of the app. */
		appId: FormControl<string | null | undefined>,

		/** Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps. */
		callbackUrl: FormControl<string | null | undefined>,

		/** Name of the company that owns the app. */
		companyName: FormControl<string | null | undefined>,

		/** Output only. Unix time when the app was created. */
		createdAt: FormControl<string | null | undefined>,

		/** Email of the developer. */
		developerEmail: FormControl<string | null | undefined>,

		/** ID of the developer. */
		developerId: FormControl<string | null | undefined>,

		/** Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn */
		keyExpiresIn: FormControl<string | null | undefined>,

		/** Output only. Last modified time as milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Name of the app. */
		name: FormControl<string | null | undefined>,

		/** Status of the credential. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AppFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AppFormProperties>({
			appGroup: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			developerEmail: new FormControl<string | null | undefined>(undefined),
			developerId: new FormControl<string | null | undefined>(undefined),
			keyExpiresIn: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1Credential {

		/** List of API products this credential can be used for. */
		apiProducts?: Array<GoogleCloudApigeeV1ApiProductRef>;

		/** List of attributes associated with this credential. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Consumer key. */
		consumerKey?: string | null;

		/** Secret key. */
		consumerSecret?: string | null;

		/** Time the credential will expire in milliseconds since epoch. */
		expiresAt?: string | null;

		/** Time the credential was issued in milliseconds since epoch. */
		issuedAt?: string | null;

		/** List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app. */
		scopes?: Array<string>;

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status?: string | null;
	}
	export interface GoogleCloudApigeeV1CredentialFormProperties {

		/** Consumer key. */
		consumerKey: FormControl<string | null | undefined>,

		/** Secret key. */
		consumerSecret: FormControl<string | null | undefined>,

		/** Time the credential will expire in milliseconds since epoch. */
		expiresAt: FormControl<string | null | undefined>,

		/** Time the credential was issued in milliseconds since epoch. */
		issuedAt: FormControl<string | null | undefined>,

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CredentialFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CredentialFormProperties>({
			consumerKey: new FormControl<string | null | undefined>(undefined),
			consumerSecret: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<string | null | undefined>(undefined),
			issuedAt: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AppGroup contains the request/response fields representing the logical grouping of apps. Note that appgroup_id, create_time and update_time cannot be changed by the user, and gets updated by the system. The name and the organization once provided cannot be edited subsequently. */
	export interface GoogleCloudApigeeV1AppGroup {

		/** Output only. Internal identifier that cannot be edited */
		appGroupId?: string | null;

		/** A list of attributes */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** channel identifier identifies the owner maintaing this grouping. */
		channelId?: string | null;

		/** A reference to the associated storefront/marketplace. */
		channelUri?: string | null;

		/** Output only. Created time as milliseconds since epoch. */
		createdAt?: string | null;

		/** app group name displayed in the UI */
		displayName?: string | null;

		/** Output only. Modified time as milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\-$ %. */
		name?: string | null;

		/** Immutable. the org the app group is created */
		organization?: string | null;

		/** Valid values are `active` or `inactive`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as `active` or `inactive`. */
		status?: string | null;
	}

	/** AppGroup contains the request/response fields representing the logical grouping of apps. Note that appgroup_id, create_time and update_time cannot be changed by the user, and gets updated by the system. The name and the organization once provided cannot be edited subsequently. */
	export interface GoogleCloudApigeeV1AppGroupFormProperties {

		/** Output only. Internal identifier that cannot be edited */
		appGroupId: FormControl<string | null | undefined>,

		/** channel identifier identifies the owner maintaing this grouping. */
		channelId: FormControl<string | null | undefined>,

		/** A reference to the associated storefront/marketplace. */
		channelUri: FormControl<string | null | undefined>,

		/** Output only. Created time as milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** app group name displayed in the UI */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Modified time as milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\-$ %. */
		name: FormControl<string | null | undefined>,

		/** Immutable. the org the app group is created */
		organization: FormControl<string | null | undefined>,

		/** Valid values are `active` or `inactive`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as `active` or `inactive`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AppGroupFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AppGroupFormProperties>({
			appGroupId: new FormControl<string | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			channelUri: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for [GetAppGroupApp].[AppGroupApps.GetAppGroupApp], [CreateAppGroupAppRequest].[AppGroupApp.CreateAppGroupAppRequest] and [DeleteAppGroupApp].[AppGroupApp.DeleteAppGroupApp] */
	export interface GoogleCloudApigeeV1AppGroupApp {

		/** List of API products associated with the AppGroup app. */
		apiProducts?: Array<string>;

		/** Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/appgroups/*). */
		appGroup?: string | null;

		/** Immutable. ID of the AppGroup app. */
		appId?: string | null;

		/** List of attributes for the AppGroup app. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps. */
		callbackUrl?: string | null;

		/** Output only. Time the AppGroup app was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret pairs associated with the API products. */
		credentials?: Array<GoogleCloudApigeeV1Credential>;

		/** Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		keyExpiresIn?: string | null;

		/** Output only. Time the AppGroup app was modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/appgroups/apps/*). */
		name?: string | null;

		/** Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you associate with the AppGroup app. */
		scopes?: Array<string>;

		/** Status of the App. Valid values include `approved` or `revoked`. */
		status?: string | null;
	}

	/** Response for [GetAppGroupApp].[AppGroupApps.GetAppGroupApp], [CreateAppGroupAppRequest].[AppGroupApp.CreateAppGroupAppRequest] and [DeleteAppGroupApp].[AppGroupApp.DeleteAppGroupApp] */
	export interface GoogleCloudApigeeV1AppGroupAppFormProperties {

		/** Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/appgroups/*). */
		appGroup: FormControl<string | null | undefined>,

		/** Immutable. ID of the AppGroup app. */
		appId: FormControl<string | null | undefined>,

		/** Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps. */
		callbackUrl: FormControl<string | null | undefined>,

		/** Output only. Time the AppGroup app was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		keyExpiresIn: FormControl<string | null | undefined>,

		/** Output only. Time the AppGroup app was modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/appgroups/apps/*). */
		name: FormControl<string | null | undefined>,

		/** Status of the App. Valid values include `approved` or `revoked`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AppGroupAppFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AppGroupAppFormProperties>({
			appGroup: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			keyExpiresIn: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AppGroupAppKey contains all the information associated with the credentials. */
	export interface GoogleCloudApigeeV1AppGroupAppKey {

		/** Output only. List of API products and its status for which the credential can be used. **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created. */
		apiProducts?: Array<GoogleCloudApigeeV1APIProductAssociation>;

		/** List of attributes associated with the credential. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Immutable. Consumer key. */
		consumerKey?: string | null;

		/** Secret key. */
		consumerSecret?: string | null;

		/** Output only. Time the AppGroup app expires in milliseconds since epoch. */
		expiresAt?: string | null;

		/** Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		expiresInSeconds?: string | null;

		/** Output only. Time the AppGroup app was created in milliseconds since epoch. */
		issuedAt?: string | null;

		/** Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app. */
		scopes?: Array<string>;

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status?: string | null;
	}

	/** AppGroupAppKey contains all the information associated with the credentials. */
	export interface GoogleCloudApigeeV1AppGroupAppKeyFormProperties {

		/** Immutable. Consumer key. */
		consumerKey: FormControl<string | null | undefined>,

		/** Secret key. */
		consumerSecret: FormControl<string | null | undefined>,

		/** Output only. Time the AppGroup app expires in milliseconds since epoch. */
		expiresAt: FormControl<string | null | undefined>,

		/** Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		expiresInSeconds: FormControl<string | null | undefined>,

		/** Output only. Time the AppGroup app was created in milliseconds since epoch. */
		issuedAt: FormControl<string | null | undefined>,

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AppGroupAppKeyFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AppGroupAppKeyFormProperties>({
			consumerKey: new FormControl<string | null | undefined>(undefined),
			consumerSecret: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<string | null | undefined>(undefined),
			expiresInSeconds: new FormControl<string | null | undefined>(undefined),
			issuedAt: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Archive Deployment information. */
	export interface GoogleCloudApigeeV1ArchiveDeployment {

		/** Output only. The time at which the Archive Deployment was created in milliseconds since the epoch. */
		createdAt?: string | null;

		/** Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file. */
		gcsUri?: string | null;

		/** User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels?: {[id: string]: string };

		/** Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`. */
		name?: string | null;

		/** Output only. A reference to the LRO that created this Archive Deployment in the following format: `organizations/{org}/operations/{id}` */
		operation?: string | null;

		/** Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch. */
		updatedAt?: string | null;
	}

	/** Archive Deployment information. */
	export interface GoogleCloudApigeeV1ArchiveDeploymentFormProperties {

		/** Output only. The time at which the Archive Deployment was created in milliseconds since the epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file. */
		gcsUri: FormControl<string | null | undefined>,

		/** User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. A reference to the LRO that created this Archive Deployment in the following format: `organizations/{org}/operations/{id}` */
		operation: FormControl<string | null | undefined>,

		/** Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch. */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ArchiveDeploymentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ArchiveDeploymentFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1AsyncQuery {

		/** Creation time of the query. */
		created?: string | null;

		/** Hostname is available only when query is executed at host level. */
		envgroupHostname?: string | null;

		/** Error is set when query fails. */
		error?: string | null;

		/** ExecutionTime is available only after the query is completed. */
		executionTime?: string | null;

		/** Asynchronous Query Name. */
		name?: string | null;
		queryParams?: GoogleCloudApigeeV1QueryMetadata;

		/** Asynchronous Report ID. */
		reportDefinitionId?: string | null;
		result?: GoogleCloudApigeeV1AsyncQueryResult;

		/** ResultFileSize is available only after the query is completed. */
		resultFileSize?: string | null;

		/** ResultRows is available only after the query is completed. */
		resultRows?: string | null;

		/** Self link of the query. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` */
		self?: string | null;

		/** Query state could be "enqueued", "running", "completed", "failed". */
		state?: string | null;

		/** Last updated timestamp for the query. */
		updated?: string | null;
	}
	export interface GoogleCloudApigeeV1AsyncQueryFormProperties {

		/** Creation time of the query. */
		created: FormControl<string | null | undefined>,

		/** Hostname is available only when query is executed at host level. */
		envgroupHostname: FormControl<string | null | undefined>,

		/** Error is set when query fails. */
		error: FormControl<string | null | undefined>,

		/** ExecutionTime is available only after the query is completed. */
		executionTime: FormControl<string | null | undefined>,

		/** Asynchronous Query Name. */
		name: FormControl<string | null | undefined>,

		/** Asynchronous Report ID. */
		reportDefinitionId: FormControl<string | null | undefined>,

		/** ResultFileSize is available only after the query is completed. */
		resultFileSize: FormControl<string | null | undefined>,

		/** ResultRows is available only after the query is completed. */
		resultRows: FormControl<string | null | undefined>,

		/** Self link of the query. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` */
		self: FormControl<string | null | undefined>,

		/** Query state could be "enqueued", "running", "completed", "failed". */
		state: FormControl<string | null | undefined>,

		/** Last updated timestamp for the query. */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AsyncQueryFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AsyncQueryFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			envgroupHostname: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			executionTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reportDefinitionId: new FormControl<string | null | undefined>(undefined),
			resultFileSize: new FormControl<string | null | undefined>(undefined),
			resultRows: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1QueryMetadata {

		/** Dimensions of the AsyncQuery. */
		dimensions?: Array<string>;

		/** End timestamp of the query range. */
		endTimestamp?: string | null;

		/** Metrics of the AsyncQuery. Example: ["name:message_count,func:sum,alias:sum_message_count"] */
		metrics?: Array<string>;

		/** Output format. */
		outputFormat?: string | null;

		/** Start timestamp of the query range. */
		startTimestamp?: string | null;

		/** Query GroupBy time unit. */
		timeUnit?: string | null;
	}
	export interface GoogleCloudApigeeV1QueryMetadataFormProperties {

		/** End timestamp of the query range. */
		endTimestamp: FormControl<string | null | undefined>,

		/** Output format. */
		outputFormat: FormControl<string | null | undefined>,

		/** Start timestamp of the query range. */
		startTimestamp: FormControl<string | null | undefined>,

		/** Query GroupBy time unit. */
		timeUnit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryMetadataFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryMetadataFormProperties>({
			endTimestamp: new FormControl<string | null | undefined>(undefined),
			outputFormat: new FormControl<string | null | undefined>(undefined),
			startTimestamp: new FormControl<string | null | undefined>(undefined),
			timeUnit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1AsyncQueryResult {

		/** Query result will be unaccessable after this time. */
		expires?: string | null;

		/** Self link of the query results. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` */
		self?: string | null;
	}
	export interface GoogleCloudApigeeV1AsyncQueryResultFormProperties {

		/** Query result will be unaccessable after this time. */
		expires: FormControl<string | null | undefined>,

		/** Self link of the query results. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` */
		self: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AsyncQueryResultFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AsyncQueryResultFormProperties>({
			expires: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1AsyncQueryResultView {

		/**
		 * Error code when there is a failure.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** Error message when there is a failure. */
		error?: string | null;
		metadata?: GoogleCloudApigeeV1QueryMetadata;

		/** Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…} */
		rows?: Array<string>;

		/** State of retrieving ResultView. */
		state?: string | null;
	}
	export interface GoogleCloudApigeeV1AsyncQueryResultViewFormProperties {

		/**
		 * Error code when there is a failure.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** Error message when there is a failure. */
		error: FormControl<string | null | undefined>,

		/** State of retrieving ResultView. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1AsyncQueryResultViewFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AsyncQueryResultViewFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1Attributes {

		/** List of attributes. */
		attribute?: Array<GoogleCloudApigeeV1Attribute>;
	}
	export interface GoogleCloudApigeeV1AttributesFormProperties {
	}
	export function CreateGoogleCloudApigeeV1AttributesFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1AttributesFormProperties>({
		});

	}


	/** Request for BatchUpdateSecurityIncident. */
	export interface GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest {

		/** Optional. Required. The request message specifying the resources to update. A maximum of 1000 can be modified in a batch. */
		requests?: Array<GoogleCloudApigeeV1UpdateSecurityIncidentRequest>;
	}

	/** Request for BatchUpdateSecurityIncident. */
	export interface GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequestFormProperties>({
		});

	}


	/** Request for UpdateSecurityIncident. */
	export interface GoogleCloudApigeeV1UpdateSecurityIncidentRequest {

		/** Represents an SecurityIncident resource. */
		securityIncident?: GoogleCloudApigeeV1SecurityIncident;

		/** Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange() */
		updateMask?: string | null;
	}

	/** Request for UpdateSecurityIncident. */
	export interface GoogleCloudApigeeV1UpdateSecurityIncidentRequestFormProperties {

		/** Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange() */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1UpdateSecurityIncidentRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1UpdateSecurityIncidentRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an SecurityIncident resource. */
	export interface GoogleCloudApigeeV1SecurityIncident {

		/** Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection. */
		detectionTypes?: Array<string>;

		/** Optional. Display name of the security incident. */
		displayName?: string | null;

		/** Output only. The time when events associated with the incident were first detected. */
		firstDetectedTime?: string | null;

		/** Output only. The time when events associated with the incident were last detected. */
		lastDetectedTime?: string | null;

		/** Output only. The time when the incident observability was last changed. */
		lastObservabilityChangeTime?: string | null;

		/** Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111 */
		name?: string | null;

		/** Optional. Indicates if the user archived this incident. */
		observability?: GoogleCloudApigeeV1SecurityIncidentObservability | null;

		/** Output only. Risk level of the incident. */
		riskLevel?: GoogleCloudApigeeV1SecurityIncidentRiskLevel | null;

		/** Total traffic detected as part of the incident. */
		trafficCount?: string | null;
	}

	/** Represents an SecurityIncident resource. */
	export interface GoogleCloudApigeeV1SecurityIncidentFormProperties {

		/** Optional. Display name of the security incident. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The time when events associated with the incident were first detected. */
		firstDetectedTime: FormControl<string | null | undefined>,

		/** Output only. The time when events associated with the incident were last detected. */
		lastDetectedTime: FormControl<string | null | undefined>,

		/** Output only. The time when the incident observability was last changed. */
		lastObservabilityChangeTime: FormControl<string | null | undefined>,

		/** Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111 */
		name: FormControl<string | null | undefined>,

		/** Optional. Indicates if the user archived this incident. */
		observability: FormControl<GoogleCloudApigeeV1SecurityIncidentObservability | null | undefined>,

		/** Output only. Risk level of the incident. */
		riskLevel: FormControl<GoogleCloudApigeeV1SecurityIncidentRiskLevel | null | undefined>,

		/** Total traffic detected as part of the incident. */
		trafficCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityIncidentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityIncidentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			firstDetectedTime: new FormControl<string | null | undefined>(undefined),
			lastDetectedTime: new FormControl<string | null | undefined>(undefined),
			lastObservabilityChangeTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observability: new FormControl<GoogleCloudApigeeV1SecurityIncidentObservability | null | undefined>(undefined),
			riskLevel: new FormControl<GoogleCloudApigeeV1SecurityIncidentRiskLevel | null | undefined>(undefined),
			trafficCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1SecurityIncidentObservability { OBSERVABILITY_UNSPECIFIED = 'OBSERVABILITY_UNSPECIFIED', ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED' }

	export enum GoogleCloudApigeeV1SecurityIncidentRiskLevel { RISK_LEVEL_UNSPECIFIED = 'RISK_LEVEL_UNSPECIFIED', LOW = 'LOW', MODERATE = 'MODERATE', SEVERE = 'SEVERE' }


	/** Response for BatchUpdateSecurityIncident. */
	export interface GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse {

		/** Output only. Updated security incidents */
		securityIncidents?: Array<GoogleCloudApigeeV1SecurityIncident>;
	}

	/** Response for BatchUpdateSecurityIncident. */
	export interface GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponseFormProperties>({
		});

	}


	/** CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests. */
	export interface GoogleCloudApigeeV1CanaryEvaluation {

		/** Required. The stable version that is serving requests. */
		control?: string | null;

		/** Output only. Create time of the canary evaluation. */
		createTime?: string | null;

		/** Required. End time for the evaluation's analysis. */
		endTime?: string | null;

		/** Labels that can be used to filter Apigee metrics. */
		metricLabels?: GoogleCloudApigeeV1CanaryEvaluationMetricLabels;

		/** Output only. Name of the canary evalution. */
		name?: string | null;

		/** Required. Start time for the canary evaluation's analysis. */
		startTime?: string | null;

		/** Output only. The current state of the canary evaluation. */
		state?: GoogleCloudApigeeV1CanaryEvaluationState | null;

		/** Required. The newer version that is serving requests. */
		treatment?: string | null;

		/** Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL. */
		verdict?: GoogleCloudApigeeV1CanaryEvaluationVerdict | null;
	}

	/** CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests. */
	export interface GoogleCloudApigeeV1CanaryEvaluationFormProperties {

		/** Required. The stable version that is serving requests. */
		control: FormControl<string | null | undefined>,

		/** Output only. Create time of the canary evaluation. */
		createTime: FormControl<string | null | undefined>,

		/** Required. End time for the evaluation's analysis. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Name of the canary evalution. */
		name: FormControl<string | null | undefined>,

		/** Required. Start time for the canary evaluation's analysis. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The current state of the canary evaluation. */
		state: FormControl<GoogleCloudApigeeV1CanaryEvaluationState | null | undefined>,

		/** Required. The newer version that is serving requests. */
		treatment: FormControl<string | null | undefined>,

		/** Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL. */
		verdict: FormControl<GoogleCloudApigeeV1CanaryEvaluationVerdict | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CanaryEvaluationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CanaryEvaluationFormProperties>({
			control: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1CanaryEvaluationState | null | undefined>(undefined),
			treatment: new FormControl<string | null | undefined>(undefined),
			verdict: new FormControl<GoogleCloudApigeeV1CanaryEvaluationVerdict | null | undefined>(undefined),
		});

	}


	/** Labels that can be used to filter Apigee metrics. */
	export interface GoogleCloudApigeeV1CanaryEvaluationMetricLabels {

		/** The environment ID associated with the metrics. */
		env?: string | null;

		/** Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation. */
		instance_id?: string | null;

		/** Required. The location associated with the metrics. */
		location?: string | null;
	}

	/** Labels that can be used to filter Apigee metrics. */
	export interface GoogleCloudApigeeV1CanaryEvaluationMetricLabelsFormProperties {

		/** The environment ID associated with the metrics. */
		env: FormControl<string | null | undefined>,

		/** Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation. */
		instance_id: FormControl<string | null | undefined>,

		/** Required. The location associated with the metrics. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CanaryEvaluationMetricLabelsFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CanaryEvaluationMetricLabelsFormProperties>({
			env: new FormControl<string | null | undefined>(undefined),
			instance_id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1CanaryEvaluationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED' }

	export enum GoogleCloudApigeeV1CanaryEvaluationVerdict { VERDICT_UNSPECIFIED = 'VERDICT_UNSPECIFIED', NONE = 'NONE', FAIL = 'FAIL', PASS = 'PASS' }

	export interface GoogleCloudApigeeV1CommonNameConfig {
		matchWildCards?: boolean | null;
		name?: string | null;
	}
	export interface GoogleCloudApigeeV1CommonNameConfigFormProperties {
		matchWildCards: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CommonNameConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CommonNameConfigFormProperties>({
			matchWildCards: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for ComputeEnvironmentScores. */
	export interface GoogleCloudApigeeV1ComputeEnvironmentScoresRequest {

		/** Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" }, { "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target", }] This will return components with path: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" OR "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target" */
		filters?: Array<GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter>;

		/**
		 * Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Optional. A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		pageToken?: string | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		timeRange?: GoogleTypeInterval;
	}

	/** Request for ComputeEnvironmentScores. */
	export interface GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFormProperties {

		/**
		 * Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ComputeEnvironmentScoresRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable. */
	export interface GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter {

		/** Optional. Return scores for this component. Example: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" */
		scorePath?: string | null;
	}

	/** Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable. */
	export interface GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterFormProperties {

		/** Optional. Return scores for this component. Example: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" */
		scorePath: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterFormProperties>({
			scorePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface GoogleTypeInterval {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime?: string | null;

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime?: string | null;
	}

	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface GoogleTypeIntervalFormProperties {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeIntervalFormGroup() {
		return new FormGroup<GoogleTypeIntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ComputeEnvironmentScores. */
	export interface GoogleCloudApigeeV1ComputeEnvironmentScoresResponse {

		/** A page token, received from a previous `ComputeScore` call. Provide this to retrieve the subsequent page. */
		nextPageToken?: string | null;

		/** List of scores. One score per day. */
		scores?: Array<GoogleCloudApigeeV1Score>;
	}

	/** Response for ComputeEnvironmentScores. */
	export interface GoogleCloudApigeeV1ComputeEnvironmentScoresResponseFormProperties {

		/** A page token, received from a previous `ComputeScore` call. Provide this to retrieve the subsequent page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ComputeEnvironmentScoresResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ComputeEnvironmentScoresResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents Security Score. */
	export interface GoogleCloudApigeeV1Score {

		/** Component is an individual security element that is scored. */
		component?: GoogleCloudApigeeV1ScoreComponent;

		/** List of all the drilldown score components. */
		subcomponents?: Array<GoogleCloudApigeeV1ScoreComponent>;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		timeRange?: GoogleTypeInterval;
	}

	/** Represents Security Score. */
	export interface GoogleCloudApigeeV1ScoreFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ScoreFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ScoreFormProperties>({
		});

	}


	/** Component is an individual security element that is scored. */
	export interface GoogleCloudApigeeV1ScoreComponent {

		/** Time when score was calculated. */
		calculateTime?: string | null;

		/** Time in the requested time period when data was last captured to compute the score. */
		dataCaptureTime?: string | null;

		/** List of paths for next components. */
		drilldownPaths?: Array<string>;

		/** List of recommendations to improve API security. */
		recommendations?: Array<GoogleCloudApigeeV1ScoreComponentRecommendation>;

		/**
		 * Score for the component.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score?: number | null;

		/** Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy */
		scorePath?: string | null;
	}

	/** Component is an individual security element that is scored. */
	export interface GoogleCloudApigeeV1ScoreComponentFormProperties {

		/** Time when score was calculated. */
		calculateTime: FormControl<string | null | undefined>,

		/** Time in the requested time period when data was last captured to compute the score. */
		dataCaptureTime: FormControl<string | null | undefined>,

		/**
		 * Score for the component.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,

		/** Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy */
		scorePath: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ScoreComponentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ScoreComponentFormProperties>({
			calculateTime: new FormControl<string | null | undefined>(undefined),
			dataCaptureTime: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			scorePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recommendation based on security concerns and score. */
	export interface GoogleCloudApigeeV1ScoreComponentRecommendation {

		/** Actions for the recommendation to improve the security score. */
		actions?: Array<GoogleCloudApigeeV1ScoreComponentRecommendationAction>;

		/** Description of the recommendation. */
		description?: string | null;

		/**
		 * Potential impact of this recommendation on the overall score. This denotes how important this recommendation is to improve the score.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		impact?: number | null;

		/** Title represents recommendation title. */
		title?: string | null;
	}

	/** Recommendation based on security concerns and score. */
	export interface GoogleCloudApigeeV1ScoreComponentRecommendationFormProperties {

		/** Description of the recommendation. */
		description: FormControl<string | null | undefined>,

		/**
		 * Potential impact of this recommendation on the overall score. This denotes how important this recommendation is to improve the score.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		impact: FormControl<number | null | undefined>,

		/** Title represents recommendation title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ScoreComponentRecommendationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ScoreComponentRecommendationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			impact: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action to improve security score. */
	export interface GoogleCloudApigeeV1ScoreComponentRecommendationAction {

		/** Action context are all the relevant details for the action. */
		actionContext?: GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext;

		/** Description of the action. */
		description?: string | null;
	}

	/** Action to improve security score. */
	export interface GoogleCloudApigeeV1ScoreComponentRecommendationActionFormProperties {

		/** Description of the action. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ScoreComponentRecommendationActionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ScoreComponentRecommendationActionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action context are all the relevant details for the action. */
	export interface GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext {

		/** Documentation link for the action. */
		documentationLink?: string | null;
	}

	/** Action context are all the relevant details for the action. */
	export interface GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContextFormProperties {

		/** Documentation link for the action. */
		documentationLink: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ScoreComponentRecommendationActionActionContextFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContextFormProperties>({
			documentationLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for CreditDeveloperBalance. */
	export interface GoogleCloudApigeeV1CreditDeveloperBalanceRequest {

		/** Represents an amount of money with its currency type. */
		transactionAmount?: GoogleTypeMoney;

		/** Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered. */
		transactionId?: string | null;
	}

	/** Request for CreditDeveloperBalance. */
	export interface GoogleCloudApigeeV1CreditDeveloperBalanceRequestFormProperties {

		/** Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CreditDeveloperBalanceRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CreditDeveloperBalanceRequestFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1CustomReport {

		/** This field contains the chart type for the report */
		chartType?: string | null;

		/** Legacy field: not used. This field contains a list of comments associated with custom report */
		comments?: Array<string>;

		/** Output only. Unix time when the app was created json key: createdAt */
		createdAt?: string | null;

		/** This contains the list of dimensions for the report */
		dimensions?: Array<string>;

		/** This is the display name for the report */
		displayName?: string | null;

		/** Output only. Environment name */
		environment?: string | null;

		/** This field contains the filter expression */
		filter?: string | null;

		/** Legacy field: not used. Contains the from time for the report */
		fromTime?: string | null;

		/** Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt */
		lastModifiedAt?: string | null;

		/** Output only. Last viewed time of this entity as milliseconds since epoch */
		lastViewedAt?: string | null;

		/** Legacy field: not used This field contains the limit for the result retrieved */
		limit?: string | null;

		/** Required. This contains the list of metrics */
		metrics?: Array<GoogleCloudApigeeV1CustomReportMetric>;

		/** Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id */
		name?: string | null;

		/** Legacy field: not used. This field contains the offset for the data */
		offset?: string | null;

		/** Output only. Organization name */
		organization?: string | null;

		/** This field contains report properties such as ui metadata etc. */
		properties?: Array<GoogleCloudApigeeV1ReportProperty>;

		/** Legacy field: not used much. Contains the list of sort by columns */
		sortByCols?: Array<string>;

		/** Legacy field: not used much. Contains the sort order for the sort columns */
		sortOrder?: string | null;

		/** Legacy field: not used. This field contains a list of tags associated with custom report */
		tags?: Array<string>;

		/** This field contains the time unit of aggregation for the report */
		timeUnit?: string | null;

		/** Legacy field: not used. Contains the end time for the report */
		toTime?: string | null;

		/** Legacy field: not used. This field contains the top k parameter value for restricting the result */
		topk?: string | null;
	}
	export interface GoogleCloudApigeeV1CustomReportFormProperties {

		/** This field contains the chart type for the report */
		chartType: FormControl<string | null | undefined>,

		/** Output only. Unix time when the app was created json key: createdAt */
		createdAt: FormControl<string | null | undefined>,

		/** This is the display name for the report */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Environment name */
		environment: FormControl<string | null | undefined>,

		/** This field contains the filter expression */
		filter: FormControl<string | null | undefined>,

		/** Legacy field: not used. Contains the from time for the report */
		fromTime: FormControl<string | null | undefined>,

		/** Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Output only. Last viewed time of this entity as milliseconds since epoch */
		lastViewedAt: FormControl<string | null | undefined>,

		/** Legacy field: not used This field contains the limit for the result retrieved */
		limit: FormControl<string | null | undefined>,

		/** Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id */
		name: FormControl<string | null | undefined>,

		/** Legacy field: not used. This field contains the offset for the data */
		offset: FormControl<string | null | undefined>,

		/** Output only. Organization name */
		organization: FormControl<string | null | undefined>,

		/** Legacy field: not used much. Contains the sort order for the sort columns */
		sortOrder: FormControl<string | null | undefined>,

		/** This field contains the time unit of aggregation for the report */
		timeUnit: FormControl<string | null | undefined>,

		/** Legacy field: not used. Contains the end time for the report */
		toTime: FormControl<string | null | undefined>,

		/** Legacy field: not used. This field contains the top k parameter value for restricting the result */
		topk: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CustomReportFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CustomReportFormProperties>({
			chartType: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			fromTime: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			lastViewedAt: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<string | null | undefined>(undefined),
			timeUnit: new FormControl<string | null | undefined>(undefined),
			toTime: new FormControl<string | null | undefined>(undefined),
			topk: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum */
	export interface GoogleCloudApigeeV1CustomReportMetric {

		/** aggregate function */
		function?: string | null;

		/** name of the metric */
		name?: string | null;
	}

	/** This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum */
	export interface GoogleCloudApigeeV1CustomReportMetricFormProperties {

		/** aggregate function */
		function: FormControl<string | null | undefined>,

		/** name of the metric */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1CustomReportMetricFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1CustomReportMetricFormProperties>({
			function: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1ReportProperty {

		/** name of the property */
		property?: string | null;

		/** property values */
		value?: Array<GoogleCloudApigeeV1Attribute>;
	}
	export interface GoogleCloudApigeeV1ReportPropertyFormProperties {

		/** name of the property */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ReportPropertyFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ReportPropertyFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data collector configuration. */
	export interface GoogleCloudApigeeV1DataCollector {

		/** Output only. The time at which the data collector was created in milliseconds since the epoch. */
		createdAt?: string | null;

		/** A description of the data collector. */
		description?: string | null;

		/** Output only. The time at which the Data Collector was last updated in milliseconds since the epoch. */
		lastModifiedAt?: string | null;

		/** ID of the data collector. Must begin with `dc_`. */
		name?: string | null;

		/** Immutable. The type of data this data collector will collect. */
		type?: GoogleCloudApigeeV1DataCollectorType | null;
	}

	/** Data collector configuration. */
	export interface GoogleCloudApigeeV1DataCollectorFormProperties {

		/** Output only. The time at which the data collector was created in milliseconds since the epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** A description of the data collector. */
		description: FormControl<string | null | undefined>,

		/** Output only. The time at which the Data Collector was last updated in milliseconds since the epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** ID of the data collector. Must begin with `dc_`. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The type of data this data collector will collect. */
		type: FormControl<GoogleCloudApigeeV1DataCollectorType | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DataCollectorFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DataCollectorFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudApigeeV1DataCollectorType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1DataCollectorType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', INTEGER = 'INTEGER', FLOAT = 'FLOAT', STRING = 'STRING', BOOLEAN = 'BOOLEAN', DATETIME = 'DATETIME' }


	/** Data collector and its configuration. */
	export interface GoogleCloudApigeeV1DataCollectorConfig {

		/** Name of the data collector in the following format: `organizations/{org}/datacollectors/{datacollector}` */
		name?: string | null;

		/** Data type accepted by the data collector. */
		type?: GoogleCloudApigeeV1DataCollectorType | null;
	}

	/** Data collector and its configuration. */
	export interface GoogleCloudApigeeV1DataCollectorConfigFormProperties {

		/** Name of the data collector in the following format: `organizations/{org}/datacollectors/{datacollector}` */
		name: FormControl<string | null | undefined>,

		/** Data type accepted by the data collector. */
		type: FormControl<GoogleCloudApigeeV1DataCollectorType | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DataCollectorConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DataCollectorConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudApigeeV1DataCollectorType | null | undefined>(undefined),
		});

	}


	/** The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository. */
	export interface GoogleCloudApigeeV1Datastore {

		/** Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z */
		createTime?: string | null;

		/** Configuration detail for datastore */
		datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig;

		/** Required. Display name in UI */
		displayName?: string | null;

		/** Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z */
		lastUpdateTime?: string | null;

		/** Output only. Organization that the datastore belongs to */
		org?: string | null;

		/** Output only. Resource link of Datastore. Example: `/organizations/{org}/analytics/datastores/{uuid}` */
		self?: string | null;

		/** Destination storage type. Supported types `gcs` or `bigquery`. */
		targetType?: string | null;
	}

	/** The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository. */
	export interface GoogleCloudApigeeV1DatastoreFormProperties {

		/** Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z */
		createTime: FormControl<string | null | undefined>,

		/** Required. Display name in UI */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Output only. Organization that the datastore belongs to */
		org: FormControl<string | null | undefined>,

		/** Output only. Resource link of Datastore. Example: `/organizations/{org}/analytics/datastores/{uuid}` */
		self: FormControl<string | null | undefined>,

		/** Destination storage type. Supported types `gcs` or `bigquery`. */
		targetType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DatastoreFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DatastoreFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration detail for datastore */
	export interface GoogleCloudApigeeV1DatastoreConfig {

		/** Name of the Cloud Storage bucket. Required for `gcs` target_type. */
		bucketName?: string | null;

		/** BigQuery dataset name Required for `bigquery` target_type. */
		datasetName?: string | null;

		/** Path of Cloud Storage bucket Required for `gcs` target_type. */
		path?: string | null;

		/** Required. GCP project in which the datastore exists */
		projectId?: string | null;

		/** Prefix of BigQuery table Required for `bigquery` target_type. */
		tablePrefix?: string | null;
	}

	/** Configuration detail for datastore */
	export interface GoogleCloudApigeeV1DatastoreConfigFormProperties {

		/** Name of the Cloud Storage bucket. Required for `gcs` target_type. */
		bucketName: FormControl<string | null | undefined>,

		/** BigQuery dataset name Required for `bigquery` target_type. */
		datasetName: FormControl<string | null | undefined>,

		/** Path of Cloud Storage bucket Required for `gcs` target_type. */
		path: FormControl<string | null | undefined>,

		/** Required. GCP project in which the datastore exists */
		projectId: FormControl<string | null | undefined>,

		/** Prefix of BigQuery table Required for `bigquery` target_type. */
		tablePrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DatastoreConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DatastoreConfigFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			datasetName: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tablePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Date range of the data to export. */
	export interface GoogleCloudApigeeV1DateRange {

		/** Required. End date (exclusive) of the data to export in the format `yyyy-mm-dd`. The date range ends at 00:00:00 UTC on the end date- which will not be in the output. */
		end?: string | null;

		/** Required. Start date of the data to export in the format `yyyy-mm-dd`. The date range begins at 00:00:00 UTC on the start date. */
		start?: string | null;
	}

	/** Date range of the data to export. */
	export interface GoogleCloudApigeeV1DateRangeFormProperties {

		/** Required. End date (exclusive) of the data to export in the format `yyyy-mm-dd`. The date range ends at 00:00:00 UTC on the end date- which will not be in the output. */
		end: FormControl<string | null | undefined>,

		/** Required. Start date of the data to export in the format `yyyy-mm-dd`. The date range begins at 00:00:00 UTC on the start date. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DateRangeFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DateRangeFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1DebugMask {

		/** List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows. */
		faultJSONPaths?: Array<string>;

		/** List of XPaths that specify the XML elements to be filtered from XML payloads in error flows. */
		faultXPaths?: Array<string>;

		/** Name of the debug mask. */
		name?: string | null;

		/** Map of namespaces to URIs. */
		namespaces?: {[id: string]: string };

		/** List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads. */
		requestJSONPaths?: Array<string>;

		/** List of XPaths that specify the XML elements to be filtered from XML request message payloads. */
		requestXPaths?: Array<string>;

		/** List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads. */
		responseJSONPaths?: Array<string>;

		/** List of XPaths that specify the XML elements to be filtered from XML response message payloads. */
		responseXPaths?: Array<string>;

		/** List of variables that should be masked from the debug output. */
		variables?: Array<string>;
	}
	export interface GoogleCloudApigeeV1DebugMaskFormProperties {

		/** Name of the debug mask. */
		name: FormControl<string | null | undefined>,

		/** Map of namespaces to URIs. */
		namespaces: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DebugMaskFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DebugMaskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			namespaces: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1DebugSession {

		/**
		 * Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Output only. The first transaction creation timestamp, recorded by UAP. */
		createTime?: string | null;

		/** Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition. */
		filter?: string | null;

		/** A unique ID for this DebugSession. */
		name?: string | null;

		/** Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided. */
		timeout?: string | null;

		/**
		 * Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tracesize?: number | null;

		/**
		 * Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		validity?: number | null;
	}
	export interface GoogleCloudApigeeV1DebugSessionFormProperties {

		/**
		 * Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Output only. The first transaction creation timestamp, recorded by UAP. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition. */
		filter: FormControl<string | null | undefined>,

		/** A unique ID for this DebugSession. */
		name: FormControl<string | null | undefined>,

		/** Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided. */
		timeout: FormControl<string | null | undefined>,

		/**
		 * Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tracesize: FormControl<number | null | undefined>,

		/**
		 * Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		validity: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DebugSessionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DebugSessionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			tracesize: new FormControl<number | null | undefined>(undefined),
			validity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy. */
	export interface GoogleCloudApigeeV1DebugSessionTransaction {

		/** Flag indicating whether a transaction is completed or not */
		completed?: boolean | null;

		/** List of debug data collected by runtime plane at various defined points in the flow. */
		point?: Array<GoogleCloudApigeeV1Point>;
	}

	/** A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy. */
	export interface GoogleCloudApigeeV1DebugSessionTransactionFormProperties {

		/** Flag indicating whether a transaction is completed or not */
		completed: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DebugSessionTransactionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DebugSessionTransactionFormProperties>({
			completed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Point is a group of information collected by runtime plane at critical points of the message flow of the processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category, debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of results. */
	export interface GoogleCloudApigeeV1Point {

		/** Name of a step in the transaction. */
		id?: string | null;

		/** List of results extracted from a given debug point. */
		results?: Array<GoogleCloudApigeeV1Result>;
	}

	/** Point is a group of information collected by runtime plane at critical points of the message flow of the processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category, debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of results. */
	export interface GoogleCloudApigeeV1PointFormProperties {

		/** Name of a step in the transaction. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1PointFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1PointFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result is short for "action result", could be different types identified by "action_result" field. Supported types: 1. DebugInfo : generic debug info collected by runtime recorded as a list of properties. For example, the contents could be virtual host info, state change result, or execution metadata. Required fields : properties, timestamp 2. RequestMessage: information of a http request. Contains headers, request URI and http methods type.Required fields : headers, uri, verb 3. ResponseMessage: information of a http response. Contains headers, reason phrase and http status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information of a http error message. Contains detail error message, reason phrase and status code. Required fields : content, headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access actions, can be Get, Set and Remove. Required fields : accessList */
	export interface GoogleCloudApigeeV1Result {

		/** Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage, ErrorMessage, VariableAccess */
		ActionResult?: string | null;

		/** A list of variable access actions agaist the api proxy. Supported values: Get, Set, Remove. */
		accessList?: Array<GoogleCloudApigeeV1Access>;

		/** Error message content. for example, "content" : "{\"fault\":{\"faultstring\":\"API timed out\",\"detail\":{\"errorcode\":\"flow.APITimedOut\"}}}" */
		content?: string | null;

		/** A list of HTTP headers. for example, '"headers" : [ { "name" : "Content-Length", "value" : "83" }, { "name" : "Content-Type", "value" : "application/json" } ]' */
		headers?: Array<GoogleCloudApigeeV1Property>;

		/** Message for compatibility with legacy Edge specification for Java Properties object in JSON. */
		properties?: GoogleCloudApigeeV1Properties;

		/** HTTP response phrase */
		reasonPhrase?: string | null;

		/** HTTP response code */
		statusCode?: string | null;

		/** Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example, `"timestamp" : "12-08-19 00:31:59:960"` */
		timestamp?: string | null;

		/** The relative path of the api proxy. for example, `"uRI" : "/iloveapis"` */
		uRI?: string | null;

		/** HTTP method verb */
		verb?: string | null;
	}

	/** Result is short for "action result", could be different types identified by "action_result" field. Supported types: 1. DebugInfo : generic debug info collected by runtime recorded as a list of properties. For example, the contents could be virtual host info, state change result, or execution metadata. Required fields : properties, timestamp 2. RequestMessage: information of a http request. Contains headers, request URI and http methods type.Required fields : headers, uri, verb 3. ResponseMessage: information of a http response. Contains headers, reason phrase and http status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information of a http error message. Contains detail error message, reason phrase and status code. Required fields : content, headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access actions, can be Get, Set and Remove. Required fields : accessList */
	export interface GoogleCloudApigeeV1ResultFormProperties {

		/** Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage, ErrorMessage, VariableAccess */
		ActionResult: FormControl<string | null | undefined>,

		/** Error message content. for example, "content" : "{\"fault\":{\"faultstring\":\"API timed out\",\"detail\":{\"errorcode\":\"flow.APITimedOut\"}}}" */
		content: FormControl<string | null | undefined>,

		/** HTTP response phrase */
		reasonPhrase: FormControl<string | null | undefined>,

		/** HTTP response code */
		statusCode: FormControl<string | null | undefined>,

		/** Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example, `"timestamp" : "12-08-19 00:31:59:960"` */
		timestamp: FormControl<string | null | undefined>,

		/** The relative path of the api proxy. for example, `"uRI" : "/iloveapis"` */
		uRI: FormControl<string | null | undefined>,

		/** HTTP method verb */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ResultFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ResultFormProperties>({
			ActionResult: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			reasonPhrase: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			uRI: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single property entry in the Properties message. */
	export interface GoogleCloudApigeeV1Property {

		/** The property key */
		name?: string | null;

		/** The property value */
		value?: string | null;
	}

	/** A single property entry in the Properties message. */
	export interface GoogleCloudApigeeV1PropertyFormProperties {

		/** The property key */
		name: FormControl<string | null | undefined>,

		/** The property value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1PropertyFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1PropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for compatibility with legacy Edge specification for Java Properties object in JSON. */
	export interface GoogleCloudApigeeV1Properties {

		/** List of all properties in the object */
		property?: Array<GoogleCloudApigeeV1Property>;
	}

	/** Message for compatibility with legacy Edge specification for Java Properties object in JSON. */
	export interface GoogleCloudApigeeV1PropertiesFormProperties {
	}
	export function CreateGoogleCloudApigeeV1PropertiesFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1PropertiesFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1DeleteCustomReportResponse {

		/** The response contains only a message field. */
		message?: string | null;
	}
	export interface GoogleCloudApigeeV1DeleteCustomReportResponseFormProperties {

		/** The response contains only a message field. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeleteCustomReportResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeleteCustomReportResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for certain delete operations. */
	export interface GoogleCloudApigeeV1DeleteResponse {

		/** Unique error code for the request, if any. */
		errorCode?: string | null;

		/** Google Cloud name of deleted resource. */
		gcpResource?: string | null;

		/** Description of the operation. */
		message?: string | null;

		/** Unique ID of the request. */
		requestId?: string | null;

		/** Status of the operation. */
		status?: string | null;
	}

	/** Response for certain delete operations. */
	export interface GoogleCloudApigeeV1DeleteResponseFormProperties {

		/** Unique error code for the request, if any. */
		errorCode: FormControl<string | null | undefined>,

		/** Google Cloud name of deleted resource. */
		gcpResource: FormControl<string | null | undefined>,

		/** Description of the operation. */
		message: FormControl<string | null | undefined>,

		/** Unique ID of the request. */
		requestId: FormControl<string | null | undefined>,

		/** Status of the operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeleteResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeleteResponseFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			gcpResource: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1Deployment {

		/** API proxy. */
		apiProxy?: string | null;

		/** Time the API proxy was marked `deployed` in the control plane in millisconds since epoch. */
		deployStartTime?: string | null;

		/** Environment. */
		environment?: string | null;

		/** Errors reported for this deployment. Populated only when state == ERROR. **Note**: This field is displayed only when viewing deployment status. */
		errors?: Array<GoogleRpcStatus>;

		/** Status reported by each runtime instance. **Note**: This field is displayed only when viewing deployment status. */
		instances?: Array<GoogleCloudApigeeV1InstanceDeploymentStatus>;

		/** Status reported by runtime pods. **Note**: **This field is deprecated**. Runtime versions 1.3 and above report instance level status rather than pod status. */
		pods?: Array<GoogleCloudApigeeV1PodStatus>;

		/** Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment supports flowhooks and flow hook is configured. */
		proxyDeploymentType?: GoogleCloudApigeeV1DeploymentProxyDeploymentType | null;

		/** API proxy revision. */
		revision?: string | null;

		/** Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be `ERROR`, but it will mean that some of the deployment's base paths are not routed to its environment. If the conflicts change, the state will transition to `PROGRESSING` until the latest configuration is rolled out to all instances. **Note**: This field is displayed only when viewing deployment status. */
		routeConflicts?: Array<GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict>;

		/** The full resource name of Cloud IAM Service Account that this deployment is using, eg, `projects/-/serviceAccounts/{email}`. */
		serviceAccount?: string | null;

		/** Current state of the deployment. **Note**: This field is displayed only when viewing deployment status. */
		state?: GoogleCloudApigeeV1DeploymentState | null;
	}
	export interface GoogleCloudApigeeV1DeploymentFormProperties {

		/** API proxy. */
		apiProxy: FormControl<string | null | undefined>,

		/** Time the API proxy was marked `deployed` in the control plane in millisconds since epoch. */
		deployStartTime: FormControl<string | null | undefined>,

		/** Environment. */
		environment: FormControl<string | null | undefined>,

		/** Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment supports flowhooks and flow hook is configured. */
		proxyDeploymentType: FormControl<GoogleCloudApigeeV1DeploymentProxyDeploymentType | null | undefined>,

		/** API proxy revision. */
		revision: FormControl<string | null | undefined>,

		/** The full resource name of Cloud IAM Service Account that this deployment is using, eg, `projects/-/serviceAccounts/{email}`. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Current state of the deployment. **Note**: This field is displayed only when viewing deployment status. */
		state: FormControl<GoogleCloudApigeeV1DeploymentState | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeploymentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeploymentFormProperties>({
			apiProxy: new FormControl<string | null | undefined>(undefined),
			deployStartTime: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			proxyDeploymentType: new FormControl<GoogleCloudApigeeV1DeploymentProxyDeploymentType | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1DeploymentState | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

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
	export interface GoogleRpcStatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a deployment as reported by a single instance. */
	export interface GoogleCloudApigeeV1InstanceDeploymentStatus {

		/** Revisions currently deployed in MPs. */
		deployedRevisions?: Array<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision>;

		/** Current routes deployed in the ingress routing table. A route which is missing will appear in `missing_routes`. */
		deployedRoutes?: Array<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute>;

		/** ID of the instance reporting the status. */
		instance?: string | null;
	}

	/** The status of a deployment as reported by a single instance. */
	export interface GoogleCloudApigeeV1InstanceDeploymentStatusFormProperties {

		/** ID of the instance reporting the status. */
		instance: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1InstanceDeploymentStatusFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1InstanceDeploymentStatusFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Revisions deployed in the MPs. */
	export interface GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision {

		/**
		 * Percentage of MP replicas reporting this revision.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;

		/** API proxy revision reported as deployed. */
		revision?: string | null;
	}

	/** Revisions deployed in the MPs. */
	export interface GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionFormProperties {

		/**
		 * Percentage of MP replicas reporting this revision.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,

		/** API proxy revision reported as deployed. */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionFormProperties>({
			percentage: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Route deployed in the ingress routing table. */
	export interface GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute {

		/** Base path in the routing table. */
		basepath?: string | null;

		/** Environment group where this route is installed. */
		envgroup?: string | null;

		/** Destination environment. This will be empty if the route is not yet reported. */
		environment?: string | null;

		/**
		 * Percentage of ingress replicas reporting this route.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;
	}

	/** Route deployed in the ingress routing table. */
	export interface GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteFormProperties {

		/** Base path in the routing table. */
		basepath: FormControl<string | null | undefined>,

		/** Environment group where this route is installed. */
		envgroup: FormControl<string | null | undefined>,

		/** Destination environment. This will be empty if the route is not yet reported. */
		environment: FormControl<string | null | undefined>,

		/**
		 * Percentage of ingress replicas reporting this route.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteFormProperties>({
			basepath: new FormControl<string | null | undefined>(undefined),
			envgroup: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1PodStatus {

		/** Version of the application running in the pod. */
		appVersion?: string | null;

		/** Status of the deployment. Valid values include: - `deployed`: Successful. - `error` : Failed. - `pending` : Pod has not yet reported on the deployment. */
		deploymentStatus?: string | null;

		/** Time the deployment status was reported in milliseconds since epoch. */
		deploymentStatusTime?: string | null;

		/** Time the proxy was deployed in milliseconds since epoch. */
		deploymentTime?: string | null;

		/** Name of the pod which is reporting the status. */
		podName?: string | null;

		/** Overall status of the pod (not this specific deployment). Valid values include: - `active`: Up to date. - `stale` : Recently out of date. Pods that have not reported status in a long time are excluded from the output. */
		podStatus?: string | null;

		/** Time the pod status was reported in milliseconds since epoch. */
		podStatusTime?: string | null;

		/** Code associated with the deployment status. */
		statusCode?: string | null;

		/** Human-readable message associated with the status code. */
		statusCodeDetails?: string | null;
	}
	export interface GoogleCloudApigeeV1PodStatusFormProperties {

		/** Version of the application running in the pod. */
		appVersion: FormControl<string | null | undefined>,

		/** Status of the deployment. Valid values include: - `deployed`: Successful. - `error` : Failed. - `pending` : Pod has not yet reported on the deployment. */
		deploymentStatus: FormControl<string | null | undefined>,

		/** Time the deployment status was reported in milliseconds since epoch. */
		deploymentStatusTime: FormControl<string | null | undefined>,

		/** Time the proxy was deployed in milliseconds since epoch. */
		deploymentTime: FormControl<string | null | undefined>,

		/** Name of the pod which is reporting the status. */
		podName: FormControl<string | null | undefined>,

		/** Overall status of the pod (not this specific deployment). Valid values include: - `active`: Up to date. - `stale` : Recently out of date. Pods that have not reported status in a long time are excluded from the output. */
		podStatus: FormControl<string | null | undefined>,

		/** Time the pod status was reported in milliseconds since epoch. */
		podStatusTime: FormControl<string | null | undefined>,

		/** Code associated with the deployment status. */
		statusCode: FormControl<string | null | undefined>,

		/** Human-readable message associated with the status code. */
		statusCodeDetails: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1PodStatusFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1PodStatusFormProperties>({
			appVersion: new FormControl<string | null | undefined>(undefined),
			deploymentStatus: new FormControl<string | null | undefined>(undefined),
			deploymentStatusTime: new FormControl<string | null | undefined>(undefined),
			deploymentTime: new FormControl<string | null | undefined>(undefined),
			podName: new FormControl<string | null | undefined>(undefined),
			podStatus: new FormControl<string | null | undefined>(undefined),
			podStatusTime: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			statusCodeDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1DeploymentProxyDeploymentType { PROXY_DEPLOYMENT_TYPE_UNSPECIFIED = 'PROXY_DEPLOYMENT_TYPE_UNSPECIFIED', STANDARD = 'STANDARD', EXTENSIBLE = 'EXTENSIBLE' }


	/** Describes a routing conflict that may cause a deployment not to receive traffic at some base path. */
	export interface GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict {

		/** Tuple representing a base path and the deployment containing it. */
		conflictingDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;

		/** Human-readable description of this conflict. */
		description?: string | null;

		/** Name of the environment group in which this conflict exists. */
		environmentGroup?: string | null;
	}

	/** Describes a routing conflict that may cause a deployment not to receive traffic at some base path. */
	export interface GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictFormProperties {

		/** Human-readable description of this conflict. */
		description: FormControl<string | null | undefined>,

		/** Name of the environment group in which this conflict exists. */
		environmentGroup: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeploymentChangeReportRoutingConflictFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			environmentGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tuple representing a base path and the deployment containing it. */
	export interface GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment {

		/** Name of the deployed API proxy revision containing the base path. */
		apiProxy?: string | null;

		/** Base path receiving traffic. */
		basepath?: string | null;

		/** Name of the environment in which the proxy is deployed. */
		environment?: string | null;

		/** Name of the deployed API proxy revision containing the base path. */
		revision?: string | null;
	}

	/** Tuple representing a base path and the deployment containing it. */
	export interface GoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentFormProperties {

		/** Name of the deployed API proxy revision containing the base path. */
		apiProxy: FormControl<string | null | undefined>,

		/** Base path receiving traffic. */
		basepath: FormControl<string | null | undefined>,

		/** Name of the environment in which the proxy is deployed. */
		environment: FormControl<string | null | undefined>,

		/** Name of the deployed API proxy revision containing the base path. */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentFormProperties>({
			apiProxy: new FormControl<string | null | undefined>(undefined),
			basepath: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1DeploymentState { RUNTIME_STATE_UNSPECIFIED = 'RUNTIME_STATE_UNSPECIFIED', READY = 'READY', PROGRESSING = 'PROGRESSING', ERROR = 'ERROR' }


	/** Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected. */
	export interface GoogleCloudApigeeV1DeploymentChangeReport {

		/** All routing changes that may result from a deployment request. */
		routingChanges?: Array<GoogleCloudApigeeV1DeploymentChangeReportRoutingChange>;

		/** All base path conflicts detected for a deployment request. */
		routingConflicts?: Array<GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict>;

		/** Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message. */
		validationErrors?: GoogleRpcPreconditionFailure;
	}

	/** Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected. */
	export interface GoogleCloudApigeeV1DeploymentChangeReportFormProperties {
	}
	export function CreateGoogleCloudApigeeV1DeploymentChangeReportFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeploymentChangeReportFormProperties>({
		});

	}


	/** Describes a potential routing change that may occur as a result of some deployment operation. */
	export interface GoogleCloudApigeeV1DeploymentChangeReportRoutingChange {

		/** Human-readable description of this routing change. */
		description?: string | null;

		/** Name of the environment group affected by this routing change. */
		environmentGroup?: string | null;

		/** Tuple representing a base path and the deployment containing it. */
		fromDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;

		/** Set to `true` if using sequenced rollout would make this routing change safer. **Note**: This does not necessarily imply that automated sequenced rollout mode is supported for the operation. */
		shouldSequenceRollout?: boolean | null;

		/** Tuple representing a base path and the deployment containing it. */
		toDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;
	}

	/** Describes a potential routing change that may occur as a result of some deployment operation. */
	export interface GoogleCloudApigeeV1DeploymentChangeReportRoutingChangeFormProperties {

		/** Human-readable description of this routing change. */
		description: FormControl<string | null | undefined>,

		/** Name of the environment group affected by this routing change. */
		environmentGroup: FormControl<string | null | undefined>,

		/** Set to `true` if using sequenced rollout would make this routing change safer. **Note**: This does not necessarily imply that automated sequenced rollout mode is supported for the operation. */
		shouldSequenceRollout: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeploymentChangeReportRoutingChangeFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeploymentChangeReportRoutingChangeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			environmentGroup: new FormControl<string | null | undefined>(undefined),
			shouldSequenceRollout: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message. */
	export interface GoogleRpcPreconditionFailure {

		/** Describes all precondition violations. */
		violations?: Array<GoogleRpcPreconditionFailureViolation>;
	}

	/** Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message. */
	export interface GoogleRpcPreconditionFailureFormProperties {
	}
	export function CreateGoogleRpcPreconditionFailureFormGroup() {
		return new FormGroup<GoogleRpcPreconditionFailureFormProperties>({
		});

	}


	/** A message type used to describe a single precondition failure. */
	export interface GoogleRpcPreconditionFailureViolation {

		/** A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted". */
		description?: string | null;

		/** The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced. */
		subject?: string | null;

		/** The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation". */
		type?: string | null;
	}

	/** A message type used to describe a single precondition failure. */
	export interface GoogleRpcPreconditionFailureViolationFormProperties {

		/** A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted". */
		description: FormControl<string | null | undefined>,

		/** The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced. */
		subject: FormControl<string | null | undefined>,

		/** The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcPreconditionFailureViolationFormGroup() {
		return new FormGroup<GoogleRpcPreconditionFailureViolationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NEXT ID: 11 */
	export interface GoogleCloudApigeeV1DeploymentConfig {

		/** Additional key-value metadata for the deployment. */
		attributes?: {[id: string]: string };

		/** Base path where the application will be hosted. Defaults to "/". */
		basePath?: string | null;

		/** The list of deployment groups in which this proxy should be deployed. Not currently populated for shared flows. */
		deploymentGroups?: Array<string>;

		/** A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows. */
		endpoints?: {[id: string]: string };

		/** Location of the API proxy bundle as a URI. */
		location?: string | null;

		/** Name of the API or shared flow revision to be deployed in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` or `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}` */
		name?: string | null;

		/** Unique ID of the API proxy revision. */
		proxyUid?: string | null;

		/** The service account identity associated with this deployment. If non-empty, will be in the following format: `projects/-/serviceAccounts/{account_email}` */
		serviceAccount?: string | null;

		/** Unique ID. The ID will only change if the deployment is deleted and recreated. */
		uid?: string | null;
	}

	/** NEXT ID: 11 */
	export interface GoogleCloudApigeeV1DeploymentConfigFormProperties {

		/** Additional key-value metadata for the deployment. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Base path where the application will be hosted. Defaults to "/". */
		basePath: FormControl<string | null | undefined>,

		/** A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows. */
		endpoints: FormControl<{[id: string]: string } | null | undefined>,

		/** Location of the API proxy bundle as a URI. */
		location: FormControl<string | null | undefined>,

		/** Name of the API or shared flow revision to be deployed in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` or `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}` */
		name: FormControl<string | null | undefined>,

		/** Unique ID of the API proxy revision. */
		proxyUid: FormControl<string | null | undefined>,

		/** The service account identity associated with this deployment. If non-empty, will be in the following format: `projects/-/serviceAccounts/{account_email}` */
		serviceAccount: FormControl<string | null | undefined>,

		/** Unique ID. The ID will only change if the deployment is deleted and recreated. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeploymentConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeploymentConfigFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			basePath: new FormControl<string | null | undefined>(undefined),
			endpoints: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			proxyUid: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DeploymentGroupConfig represents a deployment group that should be present in a particular environment. */
	export interface GoogleCloudApigeeV1DeploymentGroupConfig {

		/** Type of the deployment group, which will be either Standard or Extensible. */
		deploymentGroupType?: GoogleCloudApigeeV1DeploymentGroupConfigDeploymentGroupType | null;

		/** Name of the deployment group in the following format: `organizations/{org}/environments/{env}/deploymentGroups/{group}`. */
		name?: string | null;

		/** Revision number which can be used by the runtime to detect if the deployment group has changed between two versions. */
		revisionId?: string | null;

		/** Unique ID. The ID will only change if the deployment group is deleted and recreated. */
		uid?: string | null;
	}

	/** DeploymentGroupConfig represents a deployment group that should be present in a particular environment. */
	export interface GoogleCloudApigeeV1DeploymentGroupConfigFormProperties {

		/** Type of the deployment group, which will be either Standard or Extensible. */
		deploymentGroupType: FormControl<GoogleCloudApigeeV1DeploymentGroupConfigDeploymentGroupType | null | undefined>,

		/** Name of the deployment group in the following format: `organizations/{org}/environments/{env}/deploymentGroups/{group}`. */
		name: FormControl<string | null | undefined>,

		/** Revision number which can be used by the runtime to detect if the deployment group has changed between two versions. */
		revisionId: FormControl<string | null | undefined>,

		/** Unique ID. The ID will only change if the deployment group is deleted and recreated. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeploymentGroupConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeploymentGroupConfigFormProperties>({
			deploymentGroupType: new FormControl<GoogleCloudApigeeV1DeploymentGroupConfigDeploymentGroupType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1DeploymentGroupConfigDeploymentGroupType { DEPLOYMENT_GROUP_TYPE_UNSPECIFIED = 'DEPLOYMENT_GROUP_TYPE_UNSPECIFIED', STANDARD = 'STANDARD', EXTENSIBLE = 'EXTENSIBLE' }

	export interface GoogleCloudApigeeV1Developer {

		/** Access type. */
		accessType?: string | null;

		/** Developer app family. */
		appFamily?: string | null;

		/** List of apps associated with the developer. */
		apps?: Array<string>;

		/** Optional. Developer attributes (name/value pairs). The custom attribute limit is 18. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** List of companies associated with the developer. */
		companies?: Array<string>;

		/** Output only. Time at which the developer was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time. */
		developerId?: string | null;

		/** Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only. */
		email?: string | null;

		/** Required. First name of the developer. */
		firstName?: string | null;

		/** Output only. Time at which the developer was last modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Required. Last name of the developer. */
		lastName?: string | null;

		/** Output only. Name of the Apigee organization in which the developer resides. */
		organizationName?: string | null;

		/** Output only. Status of the developer. Valid values are `active` and `inactive`. */
		status?: string | null;

		/** Required. User name of the developer. Not used by Apigee hybrid. */
		userName?: string | null;
	}
	export interface GoogleCloudApigeeV1DeveloperFormProperties {

		/** Access type. */
		accessType: FormControl<string | null | undefined>,

		/** Developer app family. */
		appFamily: FormControl<string | null | undefined>,

		/** Output only. Time at which the developer was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time. */
		developerId: FormControl<string | null | undefined>,

		/** Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only. */
		email: FormControl<string | null | undefined>,

		/** Required. First name of the developer. */
		firstName: FormControl<string | null | undefined>,

		/** Output only. Time at which the developer was last modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Required. Last name of the developer. */
		lastName: FormControl<string | null | undefined>,

		/** Output only. Name of the Apigee organization in which the developer resides. */
		organizationName: FormControl<string | null | undefined>,

		/** Output only. Status of the developer. Valid values are `active` and `inactive`. */
		status: FormControl<string | null | undefined>,

		/** Required. User name of the developer. Not used by Apigee hybrid. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeveloperFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeveloperFormProperties>({
			accessType: new FormControl<string | null | undefined>(undefined),
			appFamily: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			developerId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			organizationName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1DeveloperApp {

		/** List of API products associated with the developer app. */
		apiProducts?: Array<string>;

		/** Developer app family. */
		appFamily?: string | null;

		/** ID of the developer app. */
		appId?: string | null;

		/** List of attributes for the developer app. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. */
		callbackUrl?: string | null;

		/** Output only. Time the developer app was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products. */
		credentials?: Array<GoogleCloudApigeeV1Credential>;

		/** ID of the developer. */
		developerId?: string | null;

		/** Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		keyExpiresIn?: string | null;

		/** Output only. Time the developer app was modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Name of the developer app. */
		name?: string | null;

		/** Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app. */
		scopes?: Array<string>;

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status?: string | null;
	}
	export interface GoogleCloudApigeeV1DeveloperAppFormProperties {

		/** Developer app family. */
		appFamily: FormControl<string | null | undefined>,

		/** ID of the developer app. */
		appId: FormControl<string | null | undefined>,

		/** Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. */
		callbackUrl: FormControl<string | null | undefined>,

		/** Output only. Time the developer app was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** ID of the developer. */
		developerId: FormControl<string | null | undefined>,

		/** Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		keyExpiresIn: FormControl<string | null | undefined>,

		/** Output only. Time the developer app was modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Name of the developer app. */
		name: FormControl<string | null | undefined>,

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeveloperAppFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeveloperAppFormProperties>({
			appFamily: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			developerId: new FormControl<string | null | undefined>(undefined),
			keyExpiresIn: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1DeveloperAppKey {

		/** List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. */
		apiProducts?: Array<string>;

		/** List of attributes associated with the credential. */
		attributes?: Array<GoogleCloudApigeeV1Attribute>;

		/** Consumer key. */
		consumerKey?: string | null;

		/** Secret key. */
		consumerSecret?: string | null;

		/** Time the developer app expires in milliseconds since epoch. */
		expiresAt?: string | null;

		/** Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		expiresInSeconds?: string | null;

		/** Time the developer app was created in milliseconds since epoch. */
		issuedAt?: string | null;

		/** Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app. */
		scopes?: Array<string>;

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status?: string | null;
	}
	export interface GoogleCloudApigeeV1DeveloperAppKeyFormProperties {

		/** Consumer key. */
		consumerKey: FormControl<string | null | undefined>,

		/** Secret key. */
		consumerSecret: FormControl<string | null | undefined>,

		/** Time the developer app expires in milliseconds since epoch. */
		expiresAt: FormControl<string | null | undefined>,

		/** Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set. */
		expiresInSeconds: FormControl<string | null | undefined>,

		/** Time the developer app was created in milliseconds since epoch. */
		issuedAt: FormControl<string | null | undefined>,

		/** Status of the credential. Valid values include `approved` or `revoked`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeveloperAppKeyFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeveloperAppKeyFormProperties>({
			consumerKey: new FormControl<string | null | undefined>(undefined),
			consumerSecret: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<string | null | undefined>(undefined),
			expiresInSeconds: new FormControl<string | null | undefined>(undefined),
			issuedAt: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account balance for the developer. */
	export interface GoogleCloudApigeeV1DeveloperBalance {

		/** Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency. */
		wallets?: Array<GoogleCloudApigeeV1DeveloperBalanceWallet>;
	}

	/** Account balance for the developer. */
	export interface GoogleCloudApigeeV1DeveloperBalanceFormProperties {
	}
	export function CreateGoogleCloudApigeeV1DeveloperBalanceFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeveloperBalanceFormProperties>({
		});

	}


	/** Wallet used to manage an account balance for a particular currency. */
	export interface GoogleCloudApigeeV1DeveloperBalanceWallet {

		/** Represents an amount of money with its currency type. */
		balance?: GoogleTypeMoney;

		/** Output only. Time at which the developer last added credit to the account in milliseconds since epoch. */
		lastCreditTime?: string | null;
	}

	/** Wallet used to manage an account balance for a particular currency. */
	export interface GoogleCloudApigeeV1DeveloperBalanceWalletFormProperties {

		/** Output only. Time at which the developer last added credit to the account in milliseconds since epoch. */
		lastCreditTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeveloperBalanceWalletFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeveloperBalanceWalletFormProperties>({
			lastCreditTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Monetization configuration for the developer. */
	export interface GoogleCloudApigeeV1DeveloperMonetizationConfig {

		/** Billing type. */
		billingType?: GoogleCloudApigeeV1DeveloperMonetizationConfigBillingType | null;
	}

	/** Monetization configuration for the developer. */
	export interface GoogleCloudApigeeV1DeveloperMonetizationConfigFormProperties {

		/** Billing type. */
		billingType: FormControl<GoogleCloudApigeeV1DeveloperMonetizationConfigBillingType | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeveloperMonetizationConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeveloperMonetizationConfigFormProperties>({
			billingType: new FormControl<GoogleCloudApigeeV1DeveloperMonetizationConfigBillingType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1DeveloperMonetizationConfigBillingType { BILLING_TYPE_UNSPECIFIED = 'BILLING_TYPE_UNSPECIFIED', PREPAID = 'PREPAID', POSTPAID = 'POSTPAID' }


	/** Structure of a DeveloperSubscription. */
	export interface GoogleCloudApigeeV1DeveloperSubscription {

		/** Name of the API product for which the developer is purchasing a subscription. */
		apiproduct?: string | null;

		/** Output only. Time when the API product subscription was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** Time when the API product subscription ends in milliseconds since epoch. */
		endTime?: string | null;

		/** Output only. Time when the API product subscription was last modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Output only. Name of the API product subscription. */
		name?: string | null;

		/** Time when the API product subscription starts in milliseconds since epoch. */
		startTime?: string | null;
	}

	/** Structure of a DeveloperSubscription. */
	export interface GoogleCloudApigeeV1DeveloperSubscriptionFormProperties {

		/** Name of the API product for which the developer is purchasing a subscription. */
		apiproduct: FormControl<string | null | undefined>,

		/** Output only. Time when the API product subscription was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Time when the API product subscription ends in milliseconds since epoch. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Time when the API product subscription was last modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Output only. Name of the API product subscription. */
		name: FormControl<string | null | undefined>,

		/** Time when the API product subscription starts in milliseconds since epoch. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DeveloperSubscriptionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DeveloperSubscriptionFormProperties>({
			apiproduct: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a metric grouped by dimension. */
	export interface GoogleCloudApigeeV1DimensionMetric {

		/** Individual dimension names. E.g. ["dim1_name", "dim2_name"]. */
		individualNames?: Array<string>;

		/** List of metrics. */
		metrics?: Array<GoogleCloudApigeeV1Metric>;

		/** Comma joined dimension names. E.g. "dim1_name,dim2_name". Deprecated. If name already has comma before join, we may get wrong splits. Please use individual_names. */
		name?: string | null;
	}

	/** Encapsulates a metric grouped by dimension. */
	export interface GoogleCloudApigeeV1DimensionMetricFormProperties {

		/** Comma joined dimension names. E.g. "dim1_name,dim2_name". Deprecated. If name already has comma before join, we may get wrong splits. Please use individual_names. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1DimensionMetricFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DimensionMetricFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates the metric data point. For example: ```{ "name": "sum(message_count)", "values" : [ { "timestamp": 1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" } ] }``` or ```{ "name": "sum(message_count)", "values" : ["39.0"] }``` */
	export interface GoogleCloudApigeeV1Metric {

		/** Metric name. */
		name?: string | null;

		/** List of metric values. Possible value formats include: `"values":["39.0"]` or `"values":[ { "value": "39.0", "timestamp": 1232434354} ]` */
		values?: Array<string>;
	}

	/** Encapsulates the metric data point. For example: ```{ "name": "sum(message_count)", "values" : [ { "timestamp": 1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" } ] }``` or ```{ "name": "sum(message_count)", "values" : ["39.0"] }``` */
	export interface GoogleCloudApigeeV1MetricFormProperties {

		/** Metric name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1MetricFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1MetricFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message to disable an enabled SecurityAction. */
	export interface GoogleCloudApigeeV1DisableSecurityActionRequest {
	}

	/** Message to disable an enabled SecurityAction. */
	export interface GoogleCloudApigeeV1DisableSecurityActionRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1DisableSecurityActionRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1DisableSecurityActionRequestFormProperties>({
		});

	}


	/** Message to enable a disabled SecurityAction. */
	export interface GoogleCloudApigeeV1EnableSecurityActionRequest {
	}

	/** Message to enable a disabled SecurityAction. */
	export interface GoogleCloudApigeeV1EnableSecurityActionRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1EnableSecurityActionRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EnableSecurityActionRequestFormProperties>({
		});

	}


	/** Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints). */
	export interface GoogleCloudApigeeV1EndpointAttachment {

		/** Output only. State of the endpoint attachment connection to the service attachment. */
		connectionState?: GoogleCloudApigeeV1EndpointAttachmentConnectionState | null;

		/** Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server. */
		host?: string | null;

		/** Required. Location of the endpoint attachment. */
		location?: string | null;

		/** Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}` */
		name?: string | null;

		/** Format: projects/regions/serviceAttachments/* */
		serviceAttachment?: string | null;

		/** Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is not ready to use. */
		state?: GoogleCloudApigeeV1EndpointAttachmentState | null;
	}

	/** Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints). */
	export interface GoogleCloudApigeeV1EndpointAttachmentFormProperties {

		/** Output only. State of the endpoint attachment connection to the service attachment. */
		connectionState: FormControl<GoogleCloudApigeeV1EndpointAttachmentConnectionState | null | undefined>,

		/** Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server. */
		host: FormControl<string | null | undefined>,

		/** Required. Location of the endpoint attachment. */
		location: FormControl<string | null | undefined>,

		/** Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}` */
		name: FormControl<string | null | undefined>,

		/** Format: projects/regions/serviceAttachments/* */
		serviceAttachment: FormControl<string | null | undefined>,

		/** Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is not ready to use. */
		state: FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EndpointAttachmentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EndpointAttachmentFormProperties>({
			connectionState: new FormControl<GoogleCloudApigeeV1EndpointAttachmentConnectionState | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAttachment: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1EndpointAttachmentConnectionState { CONNECTION_STATE_UNSPECIFIED = 'CONNECTION_STATE_UNSPECIFIED', UNAVAILABLE = 'UNAVAILABLE', PENDING = 'PENDING', ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED', CLOSED = 'CLOSED', FROZEN = 'FROZEN', NEEDS_ATTENTION = 'NEEDS_ATTENTION' }

	export enum GoogleCloudApigeeV1EndpointAttachmentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', UPDATING = 'UPDATING' }


	/** EndpointChainingRule specifies the proxies contained in a particular deployment group, so that other deployment groups can find them in chaining calls. */
	export interface GoogleCloudApigeeV1EndpointChainingRule {

		/** The deployment group to target for cross-shard chaining calls to these proxies. */
		deploymentGroup?: string | null;

		/** List of proxy ids which may be found in the given deployment group. */
		proxyIds?: Array<string>;
	}

	/** EndpointChainingRule specifies the proxies contained in a particular deployment group, so that other deployment groups can find them in chaining calls. */
	export interface GoogleCloudApigeeV1EndpointChainingRuleFormProperties {

		/** The deployment group to target for cross-shard chaining calls to these proxies. */
		deploymentGroup: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EndpointChainingRuleFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EndpointChainingRuleFormProperties>({
			deploymentGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1Environment {

		/** Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed. */
		apiProxyType?: GoogleCloudApigeeV1ApiProxyApiProxyType | null;

		/** Output only. Creation time of this environment as milliseconds since epoch. */
		createdAt?: string | null;

		/** Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers */
		deploymentType?: GoogleCloudApigeeV1EnvironmentDeploymentType | null;

		/** Optional. Description of the environment. */
		description?: string | null;

		/** Optional. Display name for this environment. */
		displayName?: string | null;

		/** Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request. */
		forwardProxyUri?: string | null;
		hasAttachedFlowHooks?: boolean | null;

		/** Output only. Last modification time of this environment as milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Required. Name of the environment. Values must match the regular expression `^[.\\p{Alnum}-_]{1,255}$` */
		name?: string | null;

		/** NodeConfig for setting the min/max number of nodes associated with the environment. */
		nodeConfig?: GoogleCloudApigeeV1NodeConfig;

		/** Message for compatibility with legacy Edge specification for Java Properties object in JSON. */
		properties?: GoogleCloudApigeeV1Properties;

		/** Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use. */
		state?: GoogleCloudApigeeV1EndpointAttachmentState | null;

		/** Optional. EnvironmentType selected for the environment. */
		type?: GoogleCloudApigeeV1EnvironmentType | null;
	}
	export interface GoogleCloudApigeeV1EnvironmentFormProperties {

		/** Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed. */
		apiProxyType: FormControl<GoogleCloudApigeeV1ApiProxyApiProxyType | null | undefined>,

		/** Output only. Creation time of this environment as milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers */
		deploymentType: FormControl<GoogleCloudApigeeV1EnvironmentDeploymentType | null | undefined>,

		/** Optional. Description of the environment. */
		description: FormControl<string | null | undefined>,

		/** Optional. Display name for this environment. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request. */
		forwardProxyUri: FormControl<string | null | undefined>,
		hasAttachedFlowHooks: FormControl<boolean | null | undefined>,

		/** Output only. Last modification time of this environment as milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Required. Name of the environment. Values must match the regular expression `^[.\\p{Alnum}-_]{1,255}$` */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use. */
		state: FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>,

		/** Optional. EnvironmentType selected for the environment. */
		type: FormControl<GoogleCloudApigeeV1EnvironmentType | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EnvironmentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EnvironmentFormProperties>({
			apiProxyType: new FormControl<GoogleCloudApigeeV1ApiProxyApiProxyType | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			deploymentType: new FormControl<GoogleCloudApigeeV1EnvironmentDeploymentType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			forwardProxyUri: new FormControl<string | null | undefined>(undefined),
			hasAttachedFlowHooks: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>(undefined),
			type: new FormControl<GoogleCloudApigeeV1EnvironmentType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1EnvironmentDeploymentType { DEPLOYMENT_TYPE_UNSPECIFIED = 'DEPLOYMENT_TYPE_UNSPECIFIED', PROXY = 'PROXY', ARCHIVE = 'ARCHIVE' }


	/** NodeConfig for setting the min/max number of nodes associated with the environment. */
	export interface GoogleCloudApigeeV1NodeConfig {

		/** Output only. The current total number of gateway nodes that each environment currently has across all instances. */
		currentAggregateNodeCount?: string | null;

		/** Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway. */
		maxNodeCount?: string | null;

		/** Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway. */
		minNodeCount?: string | null;
	}

	/** NodeConfig for setting the min/max number of nodes associated with the environment. */
	export interface GoogleCloudApigeeV1NodeConfigFormProperties {

		/** Output only. The current total number of gateway nodes that each environment currently has across all instances. */
		currentAggregateNodeCount: FormControl<string | null | undefined>,

		/** Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway. */
		maxNodeCount: FormControl<string | null | undefined>,

		/** Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway. */
		minNodeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1NodeConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1NodeConfigFormProperties>({
			currentAggregateNodeCount: new FormControl<string | null | undefined>(undefined),
			maxNodeCount: new FormControl<string | null | undefined>(undefined),
			minNodeCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1EnvironmentType { ENVIRONMENT_TYPE_UNSPECIFIED = 'ENVIRONMENT_TYPE_UNSPECIFIED', BASE = 'BASE', INTERMEDIATE = 'INTERMEDIATE', COMPREHENSIVE = 'COMPREHENSIVE' }

	export interface GoogleCloudApigeeV1EnvironmentConfig {

		/** RuntimeAddonsConfig defines the runtime configurations for add-ons in an environment. */
		addonsConfig?: GoogleCloudApigeeV1RuntimeAddonsConfig;

		/** The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways. */
		arcConfigLocation?: string | null;

		/** Time that the environment configuration was created. */
		createTime?: string | null;

		/** List of data collectors used by the deployments in the environment. */
		dataCollectors?: Array<GoogleCloudApigeeV1DataCollectorConfig>;
		debugMask?: GoogleCloudApigeeV1DebugMask;

		/** List of deployment groups in the environment. */
		deploymentGroups?: Array<GoogleCloudApigeeV1DeploymentGroupConfig>;

		/** List of deployments in the environment. */
		deployments?: Array<GoogleCloudApigeeV1DeploymentConfig>;

		/** Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will increment any time a resource not scoped to a deployment group changes. */
		envScopedRevisionId?: string | null;

		/** Feature flags inherited from the organization and environment. */
		featureFlags?: {[id: string]: string };

		/** List of flow hooks in the environment. */
		flowhooks?: Array<GoogleCloudApigeeV1FlowHookConfig>;

		/** The forward proxy's url to be used by the runtime. When set, runtime will send requests to the target via the given forward proxy. This is only used by programmable gateways. */
		forwardProxyUri?: string | null;

		/** The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways. */
		gatewayConfigLocation?: string | null;

		/** List of keystores in the environment. */
		keystores?: Array<GoogleCloudApigeeV1KeystoreConfig>;

		/** Name of the environment configuration in the following format: `organizations/{org}/environments/{env}/configs/{config}` */
		name?: string | null;

		/** Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging. */
		provider?: string | null;

		/** Name of the PubSub topic for the environment. */
		pubsubTopic?: string | null;

		/** List of resource references in the environment. */
		resourceReferences?: Array<GoogleCloudApigeeV1ReferenceConfig>;

		/** List of resource versions in the environment. */
		resources?: Array<GoogleCloudApigeeV1ResourceConfig>;

		/** Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed. */
		revisionId?: string | null;

		/** DEPRECATED: Use revision_id. */
		sequenceNumber?: string | null;

		/** List of target servers in the environment. Disabled target servers are not displayed. */
		targets?: Array<GoogleCloudApigeeV1TargetServerConfig>;

		/** NEXT ID: 8 RuntimeTraceConfig defines the configurations for distributed trace in an environment. */
		traceConfig?: GoogleCloudApigeeV1RuntimeTraceConfig;

		/** Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated. */
		uid?: string | null;
	}
	export interface GoogleCloudApigeeV1EnvironmentConfigFormProperties {

		/** The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways. */
		arcConfigLocation: FormControl<string | null | undefined>,

		/** Time that the environment configuration was created. */
		createTime: FormControl<string | null | undefined>,

		/** Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will increment any time a resource not scoped to a deployment group changes. */
		envScopedRevisionId: FormControl<string | null | undefined>,

		/** Feature flags inherited from the organization and environment. */
		featureFlags: FormControl<{[id: string]: string } | null | undefined>,

		/** The forward proxy's url to be used by the runtime. When set, runtime will send requests to the target via the given forward proxy. This is only used by programmable gateways. */
		forwardProxyUri: FormControl<string | null | undefined>,

		/** The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways. */
		gatewayConfigLocation: FormControl<string | null | undefined>,

		/** Name of the environment configuration in the following format: `organizations/{org}/environments/{env}/configs/{config}` */
		name: FormControl<string | null | undefined>,

		/** Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging. */
		provider: FormControl<string | null | undefined>,

		/** Name of the PubSub topic for the environment. */
		pubsubTopic: FormControl<string | null | undefined>,

		/** Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed. */
		revisionId: FormControl<string | null | undefined>,

		/** DEPRECATED: Use revision_id. */
		sequenceNumber: FormControl<string | null | undefined>,

		/** Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EnvironmentConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EnvironmentConfigFormProperties>({
			arcConfigLocation: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			envScopedRevisionId: new FormControl<string | null | undefined>(undefined),
			featureFlags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			forwardProxyUri: new FormControl<string | null | undefined>(undefined),
			gatewayConfigLocation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			sequenceNumber: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RuntimeAddonsConfig defines the runtime configurations for add-ons in an environment. */
	export interface GoogleCloudApigeeV1RuntimeAddonsConfig {

		/** Runtime configuration for the Analytics add-on. */
		analyticsConfig?: GoogleCloudApigeeV1RuntimeAnalyticsConfig;

		/** Runtime configuration for the API Security add-on. */
		apiSecurityConfig?: GoogleCloudApigeeV1RuntimeApiSecurityConfig;

		/** Name of the addons config in the format: `organizations/{org}/environments/{env}/addonsConfig` */
		name?: string | null;

		/** Revision number used by the runtime to detect config changes. */
		revisionId?: string | null;

		/** UID is to detect if config is recreated after deletion. The add-on config will only be deleted when the environment itself gets deleted, thus it will always be the same as the UID of EnvironmentConfig. */
		uid?: string | null;
	}

	/** RuntimeAddonsConfig defines the runtime configurations for add-ons in an environment. */
	export interface GoogleCloudApigeeV1RuntimeAddonsConfigFormProperties {

		/** Name of the addons config in the format: `organizations/{org}/environments/{env}/addonsConfig` */
		name: FormControl<string | null | undefined>,

		/** Revision number used by the runtime to detect config changes. */
		revisionId: FormControl<string | null | undefined>,

		/** UID is to detect if config is recreated after deletion. The add-on config will only be deleted when the environment itself gets deleted, thus it will always be the same as the UID of EnvironmentConfig. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RuntimeAddonsConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RuntimeAddonsConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Runtime configuration for the Analytics add-on. */
	export interface GoogleCloudApigeeV1RuntimeAnalyticsConfig {

		/** If Runtime should send billing data to AX or not. */
		billingPipelineEnabled?: boolean | null;

		/** If the Analytics is enabled or not. */
		enabled?: boolean | null;
	}

	/** Runtime configuration for the Analytics add-on. */
	export interface GoogleCloudApigeeV1RuntimeAnalyticsConfigFormProperties {

		/** If Runtime should send billing data to AX or not. */
		billingPipelineEnabled: FormControl<boolean | null | undefined>,

		/** If the Analytics is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RuntimeAnalyticsConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RuntimeAnalyticsConfigFormProperties>({
			billingPipelineEnabled: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Runtime configuration for the API Security add-on. */
	export interface GoogleCloudApigeeV1RuntimeApiSecurityConfig {

		/** If the API Security is enabled or not. */
		enabled?: boolean | null;
	}

	/** Runtime configuration for the API Security add-on. */
	export interface GoogleCloudApigeeV1RuntimeApiSecurityConfigFormProperties {

		/** If the API Security is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RuntimeApiSecurityConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RuntimeApiSecurityConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1FlowHookConfig {

		/** Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to `true` (continue on error). */
		continueOnError?: boolean | null;

		/** Name of the flow hook in the following format: `organizations/{org}/environments/{env}/flowhooks/{point}`. Valid `point` values include: `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, and `PostTargetFlowHook` */
		name?: string | null;

		/** Name of the shared flow to invoke in the following format: `organizations/{org}/sharedflows/{sharedflow}` */
		sharedFlowName?: string | null;
	}
	export interface GoogleCloudApigeeV1FlowHookConfigFormProperties {

		/** Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to `true` (continue on error). */
		continueOnError: FormControl<boolean | null | undefined>,

		/** Name of the flow hook in the following format: `organizations/{org}/environments/{env}/flowhooks/{point}`. Valid `point` values include: `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, and `PostTargetFlowHook` */
		name: FormControl<string | null | undefined>,

		/** Name of the shared flow to invoke in the following format: `organizations/{org}/sharedflows/{sharedflow}` */
		sharedFlowName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1FlowHookConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1FlowHookConfigFormProperties>({
			continueOnError: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sharedFlowName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1KeystoreConfig {

		/** Aliases in the keystore. */
		aliases?: Array<GoogleCloudApigeeV1AliasRevisionConfig>;

		/** Resource name in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` */
		name?: string | null;
	}
	export interface GoogleCloudApigeeV1KeystoreConfigFormProperties {

		/** Resource name in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1KeystoreConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1KeystoreConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1ReferenceConfig {

		/** Name of the reference in the following format: `organizations/{org}/environments/{env}/references/{reference}` */
		name?: string | null;

		/** Name of the referenced resource in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` Only references to keystore resources are supported. */
		resourceName?: string | null;
	}
	export interface GoogleCloudApigeeV1ReferenceConfigFormProperties {

		/** Name of the reference in the following format: `organizations/{org}/environments/{env}/references/{reference}` */
		name: FormControl<string | null | undefined>,

		/** Name of the referenced resource in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` Only references to keystore resources are supported. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ReferenceConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ReferenceConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1ResourceConfig {

		/** Location of the resource as a URI. */
		location?: string | null;

		/** Resource name in the following format: `organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}` Only environment-scoped resource files are supported. */
		name?: string | null;
	}
	export interface GoogleCloudApigeeV1ResourceConfigFormProperties {

		/** Location of the resource as a URI. */
		location: FormControl<string | null | undefined>,

		/** Resource name in the following format: `organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}` Only environment-scoped resource files are supported. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ResourceConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ResourceConfigFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1TargetServerConfig {

		/** Whether the target server is enabled. An empty/omitted value for this field should be interpreted as true. */
		enabled?: boolean | null;

		/** Host name of the target server. */
		host?: string | null;

		/** Target server revision name in the following format: `organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}` */
		name?: string | null;

		/**
		 * Port number for the target server.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** The protocol used by this target server. */
		protocol?: GoogleCloudApigeeV1TargetServerConfigProtocol | null;
		tlsInfo?: GoogleCloudApigeeV1TlsInfoConfig;
	}
	export interface GoogleCloudApigeeV1TargetServerConfigFormProperties {

		/** Whether the target server is enabled. An empty/omitted value for this field should be interpreted as true. */
		enabled: FormControl<boolean | null | undefined>,

		/** Host name of the target server. */
		host: FormControl<string | null | undefined>,

		/** Target server revision name in the following format: `organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}` */
		name: FormControl<string | null | undefined>,

		/**
		 * Port number for the target server.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** The protocol used by this target server. */
		protocol: FormControl<GoogleCloudApigeeV1TargetServerConfigProtocol | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TargetServerConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TargetServerConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<GoogleCloudApigeeV1TargetServerConfigProtocol | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1TargetServerConfigProtocol { PROTOCOL_UNSPECIFIED = 'PROTOCOL_UNSPECIFIED', HTTP = 'HTTP', HTTP2 = 'HTTP2', GRPC_TARGET = 'GRPC_TARGET', GRPC = 'GRPC', EXTERNAL_CALLOUT = 'EXTERNAL_CALLOUT' }

	export interface GoogleCloudApigeeV1TlsInfoConfig {

		/** List of ciphers that are granted access. */
		ciphers?: Array<string>;

		/** Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS. */
		clientAuthEnabled?: boolean | null;
		commonName?: GoogleCloudApigeeV1CommonNameConfig;

		/** Flag that specifies whether one-way TLS is enabled. Set to `true` to enable one-way TLS. */
		enabled?: boolean | null;

		/** Flag that specifies whether to ignore TLS certificate validation errors. Set to `true` to ignore errors. */
		ignoreValidationErrors?: boolean | null;

		/** Name of the alias used for client-side authentication in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}` */
		keyAlias?: string | null;
		keyAliasReference?: GoogleCloudApigeeV1KeyAliasReference;

		/** List of TLS protocols that are granted access. */
		protocols?: Array<string>;

		/** Name of the keystore or keystore reference containing trusted certificates for the server in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` or `organizations/{org}/environments/{env}/references/{reference}` */
		trustStore?: string | null;
	}
	export interface GoogleCloudApigeeV1TlsInfoConfigFormProperties {

		/** Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS. */
		clientAuthEnabled: FormControl<boolean | null | undefined>,

		/** Flag that specifies whether one-way TLS is enabled. Set to `true` to enable one-way TLS. */
		enabled: FormControl<boolean | null | undefined>,

		/** Flag that specifies whether to ignore TLS certificate validation errors. Set to `true` to ignore errors. */
		ignoreValidationErrors: FormControl<boolean | null | undefined>,

		/** Name of the alias used for client-side authentication in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}` */
		keyAlias: FormControl<string | null | undefined>,

		/** Name of the keystore or keystore reference containing trusted certificates for the server in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` or `organizations/{org}/environments/{env}/references/{reference}` */
		trustStore: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TlsInfoConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TlsInfoConfigFormProperties>({
			clientAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			ignoreValidationErrors: new FormControl<boolean | null | undefined>(undefined),
			keyAlias: new FormControl<string | null | undefined>(undefined),
			trustStore: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1KeyAliasReference {

		/** Alias ID. Must exist in the keystore referred to by the reference. */
		aliasId?: string | null;

		/** Reference name in the following format: `organizations/{org}/environments/{env}/references/{reference}` */
		reference?: string | null;
	}
	export interface GoogleCloudApigeeV1KeyAliasReferenceFormProperties {

		/** Alias ID. Must exist in the keystore referred to by the reference. */
		aliasId: FormControl<string | null | undefined>,

		/** Reference name in the following format: `organizations/{org}/environments/{env}/references/{reference}` */
		reference: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1KeyAliasReferenceFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1KeyAliasReferenceFormProperties>({
			aliasId: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NEXT ID: 8 RuntimeTraceConfig defines the configurations for distributed trace in an environment. */
	export interface GoogleCloudApigeeV1RuntimeTraceConfig {

		/** Endpoint of the exporter. */
		endpoint?: string | null;

		/** Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters. */
		exporter?: GoogleCloudApigeeV1RuntimeTraceConfigExporter | null;

		/** Name of the trace config in the following format: `organizations/{org}/environment/{env}/traceConfig` */
		name?: string | null;

		/** List of trace configuration overrides for spicific API proxies. */
		overrides?: Array<GoogleCloudApigeeV1RuntimeTraceConfigOverride>;

		/** The timestamp that the revision was created or updated. */
		revisionCreateTime?: string | null;

		/** Revision number which can be used by the runtime to detect if the trace config has changed between two versions. */
		revisionId?: string | null;

		/** NEXT ID: 3 RuntimeTraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
		samplingConfig?: GoogleCloudApigeeV1RuntimeTraceSamplingConfig;
	}

	/** NEXT ID: 8 RuntimeTraceConfig defines the configurations for distributed trace in an environment. */
	export interface GoogleCloudApigeeV1RuntimeTraceConfigFormProperties {

		/** Endpoint of the exporter. */
		endpoint: FormControl<string | null | undefined>,

		/** Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters. */
		exporter: FormControl<GoogleCloudApigeeV1RuntimeTraceConfigExporter | null | undefined>,

		/** Name of the trace config in the following format: `organizations/{org}/environment/{env}/traceConfig` */
		name: FormControl<string | null | undefined>,

		/** The timestamp that the revision was created or updated. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Revision number which can be used by the runtime to detect if the trace config has changed between two versions. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RuntimeTraceConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RuntimeTraceConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			exporter: new FormControl<GoogleCloudApigeeV1RuntimeTraceConfigExporter | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1RuntimeTraceConfigExporter { EXPORTER_UNSPECIFIED = 'EXPORTER_UNSPECIFIED', JAEGER = 'JAEGER', CLOUD_TRACE = 'CLOUD_TRACE' }


	/** NEXT ID: 7 Trace configuration override for a specific API proxy in an environment. */
	export interface GoogleCloudApigeeV1RuntimeTraceConfigOverride {

		/** Name of the API proxy that will have its trace configuration overridden following format: `organizations/{org}/apis/{api}` */
		apiProxy?: string | null;

		/** Name of the trace config override in the following format: `organizations/{org}/environment/{env}/traceConfig/overrides/{override}` */
		name?: string | null;

		/** The timestamp that the revision was created or updated. */
		revisionCreateTime?: string | null;

		/** Revision number which can be used by the runtime to detect if the trace config override has changed between two versions. */
		revisionId?: string | null;

		/** NEXT ID: 3 RuntimeTraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
		samplingConfig?: GoogleCloudApigeeV1RuntimeTraceSamplingConfig;

		/** Unique ID for the configuration override. The ID will only change if the override is deleted and recreated. Corresponds to name's "override" field. */
		uid?: string | null;
	}

	/** NEXT ID: 7 Trace configuration override for a specific API proxy in an environment. */
	export interface GoogleCloudApigeeV1RuntimeTraceConfigOverrideFormProperties {

		/** Name of the API proxy that will have its trace configuration overridden following format: `organizations/{org}/apis/{api}` */
		apiProxy: FormControl<string | null | undefined>,

		/** Name of the trace config override in the following format: `organizations/{org}/environment/{env}/traceConfig/overrides/{override}` */
		name: FormControl<string | null | undefined>,

		/** The timestamp that the revision was created or updated. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Revision number which can be used by the runtime to detect if the trace config override has changed between two versions. */
		revisionId: FormControl<string | null | undefined>,

		/** Unique ID for the configuration override. The ID will only change if the override is deleted and recreated. Corresponds to name's "override" field. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RuntimeTraceConfigOverrideFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RuntimeTraceConfigOverrideFormProperties>({
			apiProxy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NEXT ID: 3 RuntimeTraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
	export interface GoogleCloudApigeeV1RuntimeTraceSamplingConfig {

		/** Sampler of distributed tracing. OFF is the default value. */
		sampler?: GoogleCloudApigeeV1RuntimeTraceSamplingConfigSampler | null;

		/**
		 * Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.
		 * Type: float
		 */
		samplingRate?: number | null;
	}

	/** NEXT ID: 3 RuntimeTraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
	export interface GoogleCloudApigeeV1RuntimeTraceSamplingConfigFormProperties {

		/** Sampler of distributed tracing. OFF is the default value. */
		sampler: FormControl<GoogleCloudApigeeV1RuntimeTraceSamplingConfigSampler | null | undefined>,

		/**
		 * Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.
		 * Type: float
		 */
		samplingRate: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RuntimeTraceSamplingConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RuntimeTraceSamplingConfigFormProperties>({
			sampler: new FormControl<GoogleCloudApigeeV1RuntimeTraceSamplingConfigSampler | null | undefined>(undefined),
			samplingRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1RuntimeTraceSamplingConfigSampler { SAMPLER_UNSPECIFIED = 'SAMPLER_UNSPECIFIED', OFF = 'OFF', PROBABILITY = 'PROBABILITY' }


	/** EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name. */
	export interface GoogleCloudApigeeV1EnvironmentGroup {

		/** Output only. The time at which the environment group was created as milliseconds since epoch. */
		createdAt?: string | null;

		/** Required. Host names for this environment group. */
		hostnames?: Array<string>;

		/** Output only. The time at which the environment group was last updated as milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** ID of the environment group. */
		name?: string | null;

		/** Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use. */
		state?: GoogleCloudApigeeV1EndpointAttachmentState | null;
	}

	/** EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name. */
	export interface GoogleCloudApigeeV1EnvironmentGroupFormProperties {

		/** Output only. The time at which the environment group was created as milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Output only. The time at which the environment group was last updated as milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** ID of the environment group. */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use. */
		state: FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EnvironmentGroupFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EnvironmentGroupFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>(undefined),
		});

	}


	/** EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an environment group. */
	export interface GoogleCloudApigeeV1EnvironmentGroupAttachment {

		/** Output only. The time at which the environment group attachment was created as milliseconds since epoch. */
		createdAt?: string | null;

		/** Required. ID of the attached environment. */
		environment?: string | null;

		/** Output only. ID of the environment group. */
		environmentGroupId?: string | null;

		/** ID of the environment group attachment. */
		name?: string | null;
	}

	/** EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an environment group. */
	export interface GoogleCloudApigeeV1EnvironmentGroupAttachmentFormProperties {

		/** Output only. The time at which the environment group attachment was created as milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Required. ID of the attached environment. */
		environment: FormControl<string | null | undefined>,

		/** Output only. ID of the environment group. */
		environmentGroupId: FormControl<string | null | undefined>,

		/** ID of the environment group attachment. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EnvironmentGroupAttachmentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EnvironmentGroupAttachmentFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			environmentGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules. */
	export interface GoogleCloudApigeeV1EnvironmentGroupConfig {

		/** A list of proxies in each deployment group for proxy chaining calls. */
		endpointChainingRules?: Array<GoogleCloudApigeeV1EndpointChainingRule>;

		/** Host names for the environment group. */
		hostnames?: Array<string>;

		/** When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group. */
		location?: string | null;

		/** Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`. */
		name?: string | null;

		/** Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed. */
		revisionId?: string | null;

		/** Ordered list of routing rules defining how traffic to this environment group's hostnames should be routed to different environments. */
		routingRules?: Array<GoogleCloudApigeeV1RoutingRule>;

		/** A unique id for the environment group config that will only change if the environment group is deleted and recreated. */
		uid?: string | null;
	}

	/** EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules. */
	export interface GoogleCloudApigeeV1EnvironmentGroupConfigFormProperties {

		/** When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group. */
		location: FormControl<string | null | undefined>,

		/** Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`. */
		name: FormControl<string | null | undefined>,

		/** Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed. */
		revisionId: FormControl<string | null | undefined>,

		/** A unique id for the environment group config that will only change if the environment group is deleted and recreated. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1EnvironmentGroupConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1EnvironmentGroupConfigFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1RoutingRule {

		/** URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path segments consisting of a single `*` character will match any string. */
		basepath?: string | null;

		/** Name of a deployment group in an environment bound to the environment group in the following format: `organizations/{org}/environment/{env}/deploymentGroups/{group}` Only one of environment or deployment_group will be set. */
		deploymentGroup?: string | null;

		/** The env group config revision_id when this rule was added or last updated. This value is set when the rule is created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL. */
		envGroupRevision?: string | null;

		/** Name of an environment bound to the environment group in the following format: `organizations/{org}/environments/{env}`. Only one of environment or deployment_group will be set. */
		environment?: string | null;

		/** Conflicting targets, which will be resource names specifying either deployment groups or environments. */
		otherTargets?: Array<string>;

		/** The resource name of the proxy revision that is receiving this basepath in the following format: `organizations/{org}/apis/{api}/revisions/{rev}`. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL. */
		receiver?: string | null;

		/** The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL. */
		updateTime?: string | null;
	}
	export interface GoogleCloudApigeeV1RoutingRuleFormProperties {

		/** URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path segments consisting of a single `*` character will match any string. */
		basepath: FormControl<string | null | undefined>,

		/** Name of a deployment group in an environment bound to the environment group in the following format: `organizations/{org}/environment/{env}/deploymentGroups/{group}` Only one of environment or deployment_group will be set. */
		deploymentGroup: FormControl<string | null | undefined>,

		/** The env group config revision_id when this rule was added or last updated. This value is set when the rule is created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL. */
		envGroupRevision: FormControl<string | null | undefined>,

		/** Name of an environment bound to the environment group in the following format: `organizations/{org}/environments/{env}`. Only one of environment or deployment_group will be set. */
		environment: FormControl<string | null | undefined>,

		/** The resource name of the proxy revision that is receiving this basepath in the following format: `organizations/{org}/apis/{api}/revisions/{rev}`. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL. */
		receiver: FormControl<string | null | undefined>,

		/** The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RoutingRuleFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RoutingRuleFormProperties>({
			basepath: new FormControl<string | null | undefined>(undefined),
			deploymentGroup: new FormControl<string | null | undefined>(undefined),
			envGroupRevision: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			receiver: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for ExpireDeveloperSubscription. */
	export interface GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest {
	}

	/** Request for ExpireDeveloperSubscription. */
	export interface GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ExpireDeveloperSubscriptionRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequestFormProperties>({
		});

	}


	/** Details of an export job. */
	export interface GoogleCloudApigeeV1Export {

		/** Output only. Time the export job was created. */
		created?: string | null;

		/** Name of the datastore that is the destination of the export job [datastore] */
		datastoreName?: string | null;

		/** Description of the export job. */
		description?: string | null;

		/** Output only. Error is set when export fails */
		error?: string | null;

		/** Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since`created`, in seconds. Else, it will set to (`updated` - `created`), in seconds. */
		executionTime?: string | null;

		/** Display name of the export job. */
		name?: string | null;

		/** Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: `/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` */
		self?: string | null;

		/** Output only. Status of the export job. Valid values include `enqueued`, `running`, `completed`, and `failed`. */
		state?: string | null;

		/** Output only. Time the export job was last updated. */
		updated?: string | null;
	}

	/** Details of an export job. */
	export interface GoogleCloudApigeeV1ExportFormProperties {

		/** Output only. Time the export job was created. */
		created: FormControl<string | null | undefined>,

		/** Name of the datastore that is the destination of the export job [datastore] */
		datastoreName: FormControl<string | null | undefined>,

		/** Description of the export job. */
		description: FormControl<string | null | undefined>,

		/** Output only. Error is set when export fails */
		error: FormControl<string | null | undefined>,

		/** Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since`created`, in seconds. Else, it will set to (`updated` - `created`), in seconds. */
		executionTime: FormControl<string | null | undefined>,

		/** Display name of the export job. */
		name: FormControl<string | null | undefined>,

		/** Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: `/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` */
		self: FormControl<string | null | undefined>,

		/** Output only. Status of the export job. Valid values include `enqueued`, `running`, `completed`, and `failed`. */
		state: FormControl<string | null | undefined>,

		/** Output only. Time the export job was last updated. */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ExportFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ExportFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			datastoreName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			executionTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for [CreateExportRequest] */
	export interface GoogleCloudApigeeV1ExportRequest {

		/** Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`). */
		csvDelimiter?: string | null;

		/** Required. Name of the preconfigured datastore. */
		datastoreName?: string | null;

		/** Date range of the data to export. */
		dateRange?: GoogleCloudApigeeV1DateRange;

		/** Optional. Description of the export job. */
		description?: string | null;

		/** Required. Display name of the export job. */
		name?: string | null;

		/** Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property. */
		outputFormat?: string | null;
	}

	/** Request body for [CreateExportRequest] */
	export interface GoogleCloudApigeeV1ExportRequestFormProperties {

		/** Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`). */
		csvDelimiter: FormControl<string | null | undefined>,

		/** Required. Name of the preconfigured datastore. */
		datastoreName: FormControl<string | null | undefined>,

		/** Optional. Description of the export job. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name of the export job. */
		name: FormControl<string | null | undefined>,

		/** Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property. */
		outputFormat: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ExportRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ExportRequestFormProperties>({
			csvDelimiter: new FormControl<string | null | undefined>(undefined),
			datastoreName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			outputFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1FlowHook {

		/** Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow hook throws an exception. Defaults to `true`. */
		continueOnError?: boolean | null;

		/** Description of the flow hook. */
		description?: string | null;

		/** Output only. Where in the API call flow the flow hook is invoked. Must be one of `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`. */
		flowHookPoint?: string | null;

		/** Shared flow attached to this flow hook, or empty if there is none attached. */
		sharedFlow?: string | null;
	}
	export interface GoogleCloudApigeeV1FlowHookFormProperties {

		/** Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow hook throws an exception. Defaults to `true`. */
		continueOnError: FormControl<boolean | null | undefined>,

		/** Description of the flow hook. */
		description: FormControl<string | null | undefined>,

		/** Output only. Where in the API call flow the flow hook is invoked. Must be one of `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`. */
		flowHookPoint: FormControl<string | null | undefined>,

		/** Shared flow attached to this flow hook, or empty if there is none attached. */
		sharedFlow: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1FlowHookFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1FlowHookFormProperties>({
			continueOnError: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			flowHookPoint: new FormControl<string | null | undefined>(undefined),
			sharedFlow: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for GenerateDownloadUrl method. */
	export interface GoogleCloudApigeeV1GenerateDownloadUrlRequest {
	}

	/** Request for GenerateDownloadUrl method. */
	export interface GoogleCloudApigeeV1GenerateDownloadUrlRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1GenerateDownloadUrlRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GenerateDownloadUrlRequestFormProperties>({
		});

	}


	/** Response for GenerateDownloadUrl method. */
	export interface GoogleCloudApigeeV1GenerateDownloadUrlResponse {

		/** The Google Cloud Storage signed URL that can be used to download the Archive zip file. */
		downloadUri?: string | null;
	}

	/** Response for GenerateDownloadUrl method. */
	export interface GoogleCloudApigeeV1GenerateDownloadUrlResponseFormProperties {

		/** The Google Cloud Storage signed URL that can be used to download the Archive zip file. */
		downloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1GenerateDownloadUrlResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GenerateDownloadUrlResponseFormProperties>({
			downloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for GenerateUploadUrl method. */
	export interface GoogleCloudApigeeV1GenerateUploadUrlRequest {
	}

	/** Request for GenerateUploadUrl method. */
	export interface GoogleCloudApigeeV1GenerateUploadUrlRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1GenerateUploadUrlRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GenerateUploadUrlRequestFormProperties>({
		});

	}


	/** Response for GenerateUploadUrl method. */
	export interface GoogleCloudApigeeV1GenerateUploadUrlResponse {

		/** The Google Cloud Storage signed URL that can be used to upload a new Archive zip file. */
		uploadUri?: string | null;
	}

	/** Response for GenerateUploadUrl method. */
	export interface GoogleCloudApigeeV1GenerateUploadUrlResponseFormProperties {

		/** The Google Cloud Storage signed URL that can be used to upload a new Archive zip file. */
		uploadUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1GenerateUploadUrlResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GenerateUploadUrlResponseFormProperties>({
			uploadUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for GetAsyncQueryResultUrl */
	export interface GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse {

		/** The list of Signed URLs generated by the CreateAsyncQuery request */
		urls?: Array<GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo>;
	}

	/** The response for GetAsyncQueryResultUrl */
	export interface GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1GetAsyncQueryResultUrlResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseFormProperties>({
		});

	}


	/** A Signed URL and the relevant metadata associated with it. */
	export interface GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo {

		/** The MD5 Hash of the JSON data */
		md5?: string | null;

		/** The size of the returned file in bytes */
		sizeBytes?: string | null;

		/** The signed URL of the JSON data. Will be of the form `https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount .com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4_request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7` */
		uri?: string | null;
	}

	/** A Signed URL and the relevant metadata associated with it. */
	export interface GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfoFormProperties {

		/** The MD5 Hash of the JSON data */
		md5: FormControl<string | null | undefined>,

		/** The size of the returned file in bytes */
		sizeBytes: FormControl<string | null | undefined>,

		/** The signed URL of the JSON data. Will be of the form `https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount .com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4_request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7` */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfoFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfoFormProperties>({
			md5: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for GetSyncAuthorization. */
	export interface GoogleCloudApigeeV1GetSyncAuthorizationRequest {
	}

	/** Request for GetSyncAuthorization. */
	export interface GoogleCloudApigeeV1GetSyncAuthorizationRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1GetSyncAuthorizationRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1GetSyncAuthorizationRequestFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1IngressConfig {

		/** List of environment groups in the organization. */
		environmentGroups?: Array<GoogleCloudApigeeV1EnvironmentGroupConfig>;

		/** Name of the resource in the following format: `organizations/{org}/deployedIngressConfig`. */
		name?: string | null;

		/** Time at which the IngressConfig revision was created. */
		revisionCreateTime?: string | null;

		/** Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed. */
		revisionId?: string | null;

		/** A unique id for the ingress config that will only change if the organization is deleted and recreated. */
		uid?: string | null;
	}
	export interface GoogleCloudApigeeV1IngressConfigFormProperties {

		/** Name of the resource in the following format: `organizations/{org}/deployedIngressConfig`. */
		name: FormControl<string | null | undefined>,

		/** Time at which the IngressConfig revision was created. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed. */
		revisionId: FormControl<string | null | undefined>,

		/** A unique id for the ingress config that will only change if the organization is deleted and recreated. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1IngressConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1IngressConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Apigee runtime instance. */
	export interface GoogleCloudApigeeV1Instance {

		/** Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list. */
		consumerAcceptList?: Array<string>;

		/** Output only. Time the instance was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** Optional. Description of the instance. */
		description?: string | null;

		/** Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)` */
		diskEncryptionKeyName?: string | null;

		/** Optional. Display name for the instance. */
		displayName?: string | null;

		/** Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service. */
		host?: string | null;

		/** Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28` */
		ipRange?: string | null;

		/** Output only. Time the instance was last modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Required. Compute Engine location where the instance resides. */
		location?: string | null;

		/** Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\d]$`. */
		name?: string | null;

		/** Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`. */
		peeringCidrRange?: GoogleCloudApigeeV1InstancePeeringCidrRange | null;

		/** Output only. Port number of the exposed Apigee endpoint. */
		port?: string | null;

		/** Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments. */
		runtimeVersion?: string | null;

		/** Output only. Resource name of the service attachment created for the instance in the format: `projects/regions/serviceAttachments/*` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints. */
		serviceAttachment?: string | null;

		/** Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use. */
		state?: GoogleCloudApigeeV1EndpointAttachmentState | null;
	}

	/** Apigee runtime instance. */
	export interface GoogleCloudApigeeV1InstanceFormProperties {

		/** Output only. Time the instance was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Optional. Description of the instance. */
		description: FormControl<string | null | undefined>,

		/** Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)` */
		diskEncryptionKeyName: FormControl<string | null | undefined>,

		/** Optional. Display name for the instance. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service. */
		host: FormControl<string | null | undefined>,

		/** Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28` */
		ipRange: FormControl<string | null | undefined>,

		/** Output only. Time the instance was last modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Required. Compute Engine location where the instance resides. */
		location: FormControl<string | null | undefined>,

		/** Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\d]$`. */
		name: FormControl<string | null | undefined>,

		/** Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`. */
		peeringCidrRange: FormControl<GoogleCloudApigeeV1InstancePeeringCidrRange | null | undefined>,

		/** Output only. Port number of the exposed Apigee endpoint. */
		port: FormControl<string | null | undefined>,

		/** Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments. */
		runtimeVersion: FormControl<string | null | undefined>,

		/** Output only. Resource name of the service attachment created for the instance in the format: `projects/regions/serviceAttachments/*` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints. */
		serviceAttachment: FormControl<string | null | undefined>,

		/** Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use. */
		state: FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1InstanceFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1InstanceFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			diskEncryptionKeyName: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			ipRange: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			peeringCidrRange: new FormControl<GoogleCloudApigeeV1InstancePeeringCidrRange | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			serviceAttachment: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1InstancePeeringCidrRange { CIDR_RANGE_UNSPECIFIED = 'CIDR_RANGE_UNSPECIFIED', SLASH_16 = 'SLASH_16', SLASH_17 = 'SLASH_17', SLASH_18 = 'SLASH_18', SLASH_19 = 'SLASH_19', SLASH_20 = 'SLASH_20', SLASH_22 = 'SLASH_22', SLASH_23 = 'SLASH_23' }


	/** InstanceAttachment represents the installation of an environment onto an instance. */
	export interface GoogleCloudApigeeV1InstanceAttachment {

		/** Output only. Time the attachment was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** ID of the attached environment. */
		environment?: string | null;

		/** Output only. ID of the attachment. */
		name?: string | null;
	}

	/** InstanceAttachment represents the installation of an environment onto an instance. */
	export interface GoogleCloudApigeeV1InstanceAttachmentFormProperties {

		/** Output only. Time the attachment was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** ID of the attached environment. */
		environment: FormControl<string | null | undefined>,

		/** Output only. ID of the attachment. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1InstanceAttachmentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1InstanceAttachmentFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported for Apigee hybrid 1.8.x and higher. */
	export interface GoogleCloudApigeeV1KeyValueEntry {

		/** Resource URI that can be used to identify the scope of the key value map entries. */
		name?: string | null;

		/** Required. Data or payload that is being retrieved and associated with the unique key. */
		value?: string | null;
	}

	/** Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported for Apigee hybrid 1.8.x and higher. */
	export interface GoogleCloudApigeeV1KeyValueEntryFormProperties {

		/** Resource URI that can be used to identify the scope of the key value map entries. */
		name: FormControl<string | null | undefined>,

		/** Required. Data or payload that is being retrieved and associated with the unique key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1KeyValueEntryFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1KeyValueEntryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of key/value string pairs. */
	export interface GoogleCloudApigeeV1KeyValueMap {

		/** Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps. */
		encrypted?: boolean | null;

		/** Required. ID of the key value map. */
		name?: string | null;
	}

	/** Collection of key/value string pairs. */
	export interface GoogleCloudApigeeV1KeyValueMapFormProperties {

		/** Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps. */
		encrypted: FormControl<boolean | null | undefined>,

		/** Required. ID of the key value map. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1KeyValueMapFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1KeyValueMapFormProperties>({
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Datastore for Certificates and Aliases. */
	export interface GoogleCloudApigeeV1Keystore {

		/** Output only. Aliases in this keystore. */
		aliases?: Array<string>;

		/** Required. Resource ID for this keystore. Values must match the regular expression `[\w[:space:].-]{1,255}`. */
		name?: string | null;
	}

	/** Datastore for Certificates and Aliases. */
	export interface GoogleCloudApigeeV1KeystoreFormProperties {

		/** Required. Resource ID for this keystore. Values must match the regular expression `[\w[:space:].-]{1,255}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1KeystoreFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1KeystoreFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for `ListApiCategoriesRequest`. Next ID: 6 */
	export interface GoogleCloudApigeeV1ListApiCategoriesResponse {

		/** The API category resources. */
		data?: Array<GoogleCloudApigeeV1ApiCategory>;

		/** Unique error code for the request, if any. */
		errorCode?: string | null;

		/** Description of the operation. */
		message?: string | null;

		/** Unique ID of the request. */
		requestId?: string | null;

		/** Status of the operation. */
		status?: string | null;
	}

	/** The response for `ListApiCategoriesRequest`. Next ID: 6 */
	export interface GoogleCloudApigeeV1ListApiCategoriesResponseFormProperties {

		/** Unique error code for the request, if any. */
		errorCode: FormControl<string | null | undefined>,

		/** Description of the operation. */
		message: FormControl<string | null | undefined>,

		/** Unique ID of the request. */
		requestId: FormControl<string | null | undefined>,

		/** Status of the operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListApiCategoriesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListApiCategoriesResponseFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1ListApiProductsResponse {

		/** Lists all API product names defined for an organization. */
		apiProduct?: Array<GoogleCloudApigeeV1ApiProduct>;
	}
	export interface GoogleCloudApigeeV1ListApiProductsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListApiProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListApiProductsResponseFormProperties>({
		});

	}


	/** To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui */
	export interface GoogleCloudApigeeV1ListApiProxiesResponse {
		proxies?: Array<GoogleCloudApigeeV1ApiProxy>;
	}

	/** To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui */
	export interface GoogleCloudApigeeV1ListApiProxiesResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListApiProxiesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListApiProxiesResponseFormProperties>({
		});

	}


	/** Response for ListAppGroupApps */
	export interface GoogleCloudApigeeV1ListAppGroupAppsResponse {

		/** List of AppGroup apps and their credentials. */
		appGroupApps?: Array<GoogleCloudApigeeV1AppGroupApp>;

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for ListAppGroupApps */
	export interface GoogleCloudApigeeV1ListAppGroupAppsResponseFormProperties {

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListAppGroupAppsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListAppGroupAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListAppGroupsResponse contains the 0 or more AppGroups, along with the optional page token and the total count of apps. */
	export interface GoogleCloudApigeeV1ListAppGroupsResponse {

		/** List of AppGroups. */
		appGroups?: Array<GoogleCloudApigeeV1AppGroup>;

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/**
		 * Total count of AppGroups.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize?: number | null;
	}

	/** ListAppGroupsResponse contains the 0 or more AppGroups, along with the optional page token and the total count of apps. */
	export interface GoogleCloudApigeeV1ListAppGroupsResponseFormProperties {

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Total count of AppGroups.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListAppGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListAppGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1ListAppsResponse {
		app?: Array<GoogleCloudApigeeV1App>;

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/**
		 * Total count of Apps.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize?: number | null;
	}
	export interface GoogleCloudApigeeV1ListAppsResponseFormProperties {

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Total count of Apps.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListAppsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for ListArchiveDeployments method. */
	export interface GoogleCloudApigeeV1ListArchiveDeploymentsResponse {

		/** Archive Deployments in the specified environment. */
		archiveDeployments?: Array<GoogleCloudApigeeV1ArchiveDeployment>;

		/** Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListArchiveDeployments method. */
	export interface GoogleCloudApigeeV1ListArchiveDeploymentsResponseFormProperties {

		/** Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListArchiveDeploymentsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListArchiveDeploymentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListAsyncQueries. */
	export interface GoogleCloudApigeeV1ListAsyncQueriesResponse {

		/** The asynchronous queries belong to requested resource name. */
		queries?: Array<GoogleCloudApigeeV1AsyncQuery>;
	}

	/** The response for ListAsyncQueries. */
	export interface GoogleCloudApigeeV1ListAsyncQueriesResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListAsyncQueriesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListAsyncQueriesResponseFormProperties>({
		});

	}


	/** This message encapsulates a list of custom report definitions */
	export interface GoogleCloudApigeeV1ListCustomReportsResponse {
		qualifier?: Array<GoogleCloudApigeeV1CustomReport>;
	}

	/** This message encapsulates a list of custom report definitions */
	export interface GoogleCloudApigeeV1ListCustomReportsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListCustomReportsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListCustomReportsResponseFormProperties>({
		});

	}


	/** Response for ListDataCollectors. */
	export interface GoogleCloudApigeeV1ListDataCollectorsResponse {

		/** Data collectors in the specified organization. */
		dataCollectors?: Array<GoogleCloudApigeeV1DataCollector>;

		/** Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListDataCollectors. */
	export interface GoogleCloudApigeeV1ListDataCollectorsResponseFormProperties {

		/** Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListDataCollectorsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListDataCollectorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListDatastores */
	export interface GoogleCloudApigeeV1ListDatastoresResponse {

		/** A list of datastores */
		datastores?: Array<GoogleCloudApigeeV1Datastore>;
	}

	/** The response for ListDatastores */
	export interface GoogleCloudApigeeV1ListDatastoresResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListDatastoresResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListDatastoresResponseFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1ListDebugSessionsResponse {

		/** Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;

		/** Session info that includes debug session ID and the first transaction creation timestamp. */
		sessions?: Array<GoogleCloudApigeeV1Session>;
	}
	export interface GoogleCloudApigeeV1ListDebugSessionsResponseFormProperties {

		/** Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListDebugSessionsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListDebugSessionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Session carries the debug session id and its creation time. */
	export interface GoogleCloudApigeeV1Session {

		/** The debug session ID. */
		id?: string | null;

		/** The first transaction creation timestamp in millisecond, recorded by UAP. */
		timestampMs?: string | null;
	}

	/** Session carries the debug session id and its creation time. */
	export interface GoogleCloudApigeeV1SessionFormProperties {

		/** The debug session ID. */
		id: FormControl<string | null | undefined>,

		/** The first transaction creation timestamp in millisecond, recorded by UAP. */
		timestampMs: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SessionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SessionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			timestampMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1ListDeploymentsResponse {

		/** List of deployments. */
		deployments?: Array<GoogleCloudApigeeV1Deployment>;
	}
	export interface GoogleCloudApigeeV1ListDeploymentsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListDeploymentsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListDeploymentsResponseFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1ListDeveloperAppsResponse {

		/** List of developer apps and their credentials. */
		app?: Array<GoogleCloudApigeeV1DeveloperApp>;
	}
	export interface GoogleCloudApigeeV1ListDeveloperAppsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListDeveloperAppsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListDeveloperAppsResponseFormProperties>({
		});

	}


	/** Response for ListDeveloperSubscriptions. */
	export interface GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse {

		/** List of all subscriptions. */
		developerSubscriptions?: Array<GoogleCloudApigeeV1DeveloperSubscription>;

		/** Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages. */
		nextStartKey?: string | null;
	}

	/** Response for ListDeveloperSubscriptions. */
	export interface GoogleCloudApigeeV1ListDeveloperSubscriptionsResponseFormProperties {

		/** Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages. */
		nextStartKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListDeveloperSubscriptionsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponseFormProperties>({
			nextStartKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListEndpointAttachments method. */
	export interface GoogleCloudApigeeV1ListEndpointAttachmentsResponse {

		/** Endpoint attachments in the specified organization. */
		endpointAttachments?: Array<GoogleCloudApigeeV1EndpointAttachment>;

		/** Page token that you can include in an `ListEndpointAttachments` request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListEndpointAttachments method. */
	export interface GoogleCloudApigeeV1ListEndpointAttachmentsResponseFormProperties {

		/** Page token that you can include in an `ListEndpointAttachments` request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListEndpointAttachmentsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListEndpointAttachmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListEnvironmentGroupAttachments. */
	export interface GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse {

		/** EnvironmentGroupAttachments for the specified environment group. */
		environmentGroupAttachments?: Array<GoogleCloudApigeeV1EnvironmentGroupAttachment>;

		/** Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListEnvironmentGroupAttachments. */
	export interface GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponseFormProperties {

		/** Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListEnvironmentGroups. */
	export interface GoogleCloudApigeeV1ListEnvironmentGroupsResponse {

		/** EnvironmentGroups in the specified organization. */
		environmentGroups?: Array<GoogleCloudApigeeV1EnvironmentGroup>;

		/** Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListEnvironmentGroups. */
	export interface GoogleCloudApigeeV1ListEnvironmentGroupsResponseFormProperties {

		/** Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListEnvironmentGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListEnvironmentGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListEnvironmentResources */
	export interface GoogleCloudApigeeV1ListEnvironmentResourcesResponse {

		/** List of resources files. */
		resourceFile?: Array<GoogleCloudApigeeV1ResourceFile>;
	}

	/** Response for ListEnvironmentResources */
	export interface GoogleCloudApigeeV1ListEnvironmentResourcesResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListEnvironmentResourcesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListEnvironmentResourcesResponseFormProperties>({
		});

	}


	/** The response for ListExports */
	export interface GoogleCloudApigeeV1ListExportsResponse {

		/** Details of the export jobs. */
		exports?: Array<GoogleCloudApigeeV1Export>;
	}

	/** The response for ListExports */
	export interface GoogleCloudApigeeV1ListExportsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListExportsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListExportsResponseFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1ListHybridIssuersResponse {

		/** Lists of hybrid services and its trusted issuer email ids. */
		issuers?: Array<GoogleCloudApigeeV1ServiceIssuersMapping>;
	}
	export interface GoogleCloudApigeeV1ListHybridIssuersResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListHybridIssuersResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListHybridIssuersResponseFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1ServiceIssuersMapping {

		/** List of trusted issuer email ids. */
		emailIds?: Array<string>;

		/** String indicating the Apigee service name. */
		service?: string | null;
	}
	export interface GoogleCloudApigeeV1ServiceIssuersMappingFormProperties {

		/** String indicating the Apigee service name. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ServiceIssuersMappingFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ServiceIssuersMappingFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListInstanceAttachments. */
	export interface GoogleCloudApigeeV1ListInstanceAttachmentsResponse {

		/** Attachments for the instance. */
		attachments?: Array<GoogleCloudApigeeV1InstanceAttachment>;

		/** Page token that you can include in a ListInstanceAttachments request to retrieve the next page of content. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListInstanceAttachments. */
	export interface GoogleCloudApigeeV1ListInstanceAttachmentsResponseFormProperties {

		/** Page token that you can include in a ListInstanceAttachments request to retrieve the next page of content. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListInstanceAttachmentsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListInstanceAttachmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListInstances. */
	export interface GoogleCloudApigeeV1ListInstancesResponse {

		/** Instances in the specified organization. */
		instances?: Array<GoogleCloudApigeeV1Instance>;

		/** Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListInstances. */
	export interface GoogleCloudApigeeV1ListInstancesResponseFormProperties {

		/** Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListInstancesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListInstancesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request structure for listing key value map keys and its corresponding values. */
	export interface GoogleCloudApigeeV1ListKeyValueEntriesResponse {

		/** One or more key value map keys and values. */
		keyValueEntries?: Array<GoogleCloudApigeeV1KeyValueEntry>;

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The request structure for listing key value map keys and its corresponding values. */
	export interface GoogleCloudApigeeV1ListKeyValueEntriesResponseFormProperties {

		/** Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListKeyValueEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListKeyValueEntriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListNatAddresses. */
	export interface GoogleCloudApigeeV1ListNatAddressesResponse {

		/** List of NAT Addresses for the instance. */
		natAddresses?: Array<GoogleCloudApigeeV1NatAddress>;

		/** Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted, no subsequent pages exist. */
		nextPageToken?: string | null;
	}

	/** Response for ListNatAddresses. */
	export interface GoogleCloudApigeeV1ListNatAddressesResponseFormProperties {

		/** Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted, no subsequent pages exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListNatAddressesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListNatAddressesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic. */
	export interface GoogleCloudApigeeV1NatAddress {

		/** Output only. The static IPV4 address. */
		ipAddress?: string | null;

		/** Required. Resource ID of the NAT address. */
		name?: string | null;

		/** Output only. State of the nat address. */
		state?: GoogleCloudApigeeV1NatAddressState | null;
	}

	/** Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic. */
	export interface GoogleCloudApigeeV1NatAddressFormProperties {

		/** Output only. The static IPV4 address. */
		ipAddress: FormControl<string | null | undefined>,

		/** Required. Resource ID of the NAT address. */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the nat address. */
		state: FormControl<GoogleCloudApigeeV1NatAddressState | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1NatAddressFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1NatAddressFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1NatAddressState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1NatAddressState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', RESERVED = 'RESERVED', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }

	export interface GoogleCloudApigeeV1ListOfDevelopersResponse {

		/** List of developers. */
		developer?: Array<GoogleCloudApigeeV1Developer>;
	}
	export interface GoogleCloudApigeeV1ListOfDevelopersResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListOfDevelopersResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListOfDevelopersResponseFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1ListOrganizationsResponse {

		/** List of Apigee organizations and associated Google Cloud projects. */
		organizations?: Array<GoogleCloudApigeeV1OrganizationProjectMapping>;
	}
	export interface GoogleCloudApigeeV1ListOrganizationsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListOrganizationsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListOrganizationsResponseFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1OrganizationProjectMapping {

		/** Output only. The Google Cloud region where control plane data is located. For more information, see https://cloud.google.com/about/locations/. */
		location?: string | null;

		/** Name of the Apigee organization. */
		organization?: string | null;

		/** Google Cloud project associated with the Apigee organization */
		projectId?: string | null;

		/** DEPRECATED: Use `project_id`. An Apigee Organization is mapped to a single project. */
		projectIds?: Array<string>;
	}
	export interface GoogleCloudApigeeV1OrganizationProjectMappingFormProperties {

		/** Output only. The Google Cloud region where control plane data is located. For more information, see https://cloud.google.com/about/locations/. */
		location: FormControl<string | null | undefined>,

		/** Name of the Apigee organization. */
		organization: FormControl<string | null | undefined>,

		/** Google Cloud project associated with the Apigee organization */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OrganizationProjectMappingFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OrganizationProjectMappingFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListRatePlans. */
	export interface GoogleCloudApigeeV1ListRatePlansResponse {

		/** Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages. */
		nextStartKey?: string | null;

		/** List of rate plans in an organization. */
		ratePlans?: Array<GoogleCloudApigeeV1RatePlan>;
	}

	/** Response for ListRatePlans. */
	export interface GoogleCloudApigeeV1ListRatePlansResponseFormProperties {

		/** Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages. */
		nextStartKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListRatePlansResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListRatePlansResponseFormProperties>({
			nextStartKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rate plan details. */
	export interface GoogleCloudApigeeV1RatePlan {

		/** Name of the API product that the rate plan is associated with. */
		apiproduct?: string | null;

		/** Frequency at which the customer will be billed. */
		billingPeriod?: GoogleCloudApigeeV1RatePlanBillingPeriod | null;

		/** API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is `STAIRSTEP` and the ranges are defined as follows: ``` { "start": 1, "end": 100, "fee": 75 }, { "start": 101, "end": 200, "fee": 100 }, } ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200. */
		consumptionPricingRates?: Array<GoogleCloudApigeeV1RateRange>;

		/** Pricing model used for consumption-based charges. */
		consumptionPricingType?: GoogleCloudApigeeV1RatePlanConsumptionPricingType | null;

		/** Output only. Time that the rate plan was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard. */
		currencyCode?: string | null;

		/** Description of the rate plan. */
		description?: string | null;

		/** Display name of the rate plan. */
		displayName?: string | null;

		/** Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire. */
		endTime?: string | null;

		/**
		 * Frequency at which the fixed fee is charged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedFeeFrequency?: number | null;

		/** Represents an amount of money with its currency type. */
		fixedRecurringFee?: GoogleTypeMoney;

		/** Output only. Time the rate plan was last modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Output only. Name of the rate plan. */
		name?: string | null;

		/** DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or postpaid. */
		paymentFundingModel?: GoogleCloudApigeeV1RatePlanPaymentFundingModel | null;

		/** Details of the revenue sharing model. */
		revenueShareRates?: Array<GoogleCloudApigeeV1RevenueShareRange>;

		/** Method used to calculate the revenue that is shared with developers. */
		revenueShareType?: GoogleCloudApigeeV1RatePlanRevenueShareType | null;

		/** Represents an amount of money with its currency type. */
		setupFee?: GoogleTypeMoney;

		/** Time when the rate plan becomes active in milliseconds since epoch. */
		startTime?: string | null;

		/** Current state of the rate plan (draft or published). */
		state?: GoogleCloudApigeeV1RatePlanState | null;
	}

	/** Rate plan details. */
	export interface GoogleCloudApigeeV1RatePlanFormProperties {

		/** Name of the API product that the rate plan is associated with. */
		apiproduct: FormControl<string | null | undefined>,

		/** Frequency at which the customer will be billed. */
		billingPeriod: FormControl<GoogleCloudApigeeV1RatePlanBillingPeriod | null | undefined>,

		/** Pricing model used for consumption-based charges. */
		consumptionPricingType: FormControl<GoogleCloudApigeeV1RatePlanConsumptionPricingType | null | undefined>,

		/** Output only. Time that the rate plan was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard. */
		currencyCode: FormControl<string | null | undefined>,

		/** Description of the rate plan. */
		description: FormControl<string | null | undefined>,

		/** Display name of the rate plan. */
		displayName: FormControl<string | null | undefined>,

		/** Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire. */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Frequency at which the fixed fee is charged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedFeeFrequency: FormControl<number | null | undefined>,

		/** Output only. Time the rate plan was last modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Output only. Name of the rate plan. */
		name: FormControl<string | null | undefined>,

		/** DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or postpaid. */
		paymentFundingModel: FormControl<GoogleCloudApigeeV1RatePlanPaymentFundingModel | null | undefined>,

		/** Method used to calculate the revenue that is shared with developers. */
		revenueShareType: FormControl<GoogleCloudApigeeV1RatePlanRevenueShareType | null | undefined>,

		/** Time when the rate plan becomes active in milliseconds since epoch. */
		startTime: FormControl<string | null | undefined>,

		/** Current state of the rate plan (draft or published). */
		state: FormControl<GoogleCloudApigeeV1RatePlanState | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RatePlanFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RatePlanFormProperties>({
			apiproduct: new FormControl<string | null | undefined>(undefined),
			billingPeriod: new FormControl<GoogleCloudApigeeV1RatePlanBillingPeriod | null | undefined>(undefined),
			consumptionPricingType: new FormControl<GoogleCloudApigeeV1RatePlanConsumptionPricingType | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			fixedFeeFrequency: new FormControl<number | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paymentFundingModel: new FormControl<GoogleCloudApigeeV1RatePlanPaymentFundingModel | null | undefined>(undefined),
			revenueShareType: new FormControl<GoogleCloudApigeeV1RatePlanRevenueShareType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1RatePlanState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1RatePlanBillingPeriod { BILLING_PERIOD_UNSPECIFIED = 'BILLING_PERIOD_UNSPECIFIED', WEEKLY = 'WEEKLY', MONTHLY = 'MONTHLY' }


	/** API call volume range and the fees charged when the total number of API calls is within the range. */
	export interface GoogleCloudApigeeV1RateRange {

		/** Ending value of the range. Set to 0 or `null` for the last range of values. */
		end?: string | null;

		/** Represents an amount of money with its currency type. */
		fee?: GoogleTypeMoney;

		/** Starting value of the range. Set to 0 or `null` for the initial range of values. */
		start?: string | null;
	}

	/** API call volume range and the fees charged when the total number of API calls is within the range. */
	export interface GoogleCloudApigeeV1RateRangeFormProperties {

		/** Ending value of the range. Set to 0 or `null` for the last range of values. */
		end: FormControl<string | null | undefined>,

		/** Starting value of the range. Set to 0 or `null` for the initial range of values. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RateRangeFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RateRangeFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1RatePlanConsumptionPricingType { CONSUMPTION_PRICING_TYPE_UNSPECIFIED = 'CONSUMPTION_PRICING_TYPE_UNSPECIFIED', FIXED_PER_UNIT = 'FIXED_PER_UNIT', BANDED = 'BANDED', TIERED = 'TIERED', STAIRSTEP = 'STAIRSTEP' }

	export enum GoogleCloudApigeeV1RatePlanPaymentFundingModel { PAYMENT_FUNDING_MODEL_UNSPECIFIED = 'PAYMENT_FUNDING_MODEL_UNSPECIFIED', PREPAID = 'PREPAID', POSTPAID = 'POSTPAID' }


	/** API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range. */
	export interface GoogleCloudApigeeV1RevenueShareRange {

		/** Ending value of the range. Set to 0 or `null` for the last range of values. */
		end?: string | null;

		/**
		 * Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.
		 * Type: double
		 */
		sharePercentage?: number | null;

		/** Starting value of the range. Set to 0 or `null` for the initial range of values. */
		start?: string | null;
	}

	/** API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range. */
	export interface GoogleCloudApigeeV1RevenueShareRangeFormProperties {

		/** Ending value of the range. Set to 0 or `null` for the last range of values. */
		end: FormControl<string | null | undefined>,

		/**
		 * Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.
		 * Type: double
		 */
		sharePercentage: FormControl<number | null | undefined>,

		/** Starting value of the range. Set to 0 or `null` for the initial range of values. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RevenueShareRangeFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RevenueShareRangeFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			sharePercentage: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1RatePlanRevenueShareType { REVENUE_SHARE_TYPE_UNSPECIFIED = 'REVENUE_SHARE_TYPE_UNSPECIFIED', FIXED = 'FIXED', VOLUME_BANDED = 'VOLUME_BANDED' }

	export enum GoogleCloudApigeeV1RatePlanState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', DRAFT = 'DRAFT', PUBLISHED = 'PUBLISHED' }


	/** Contains a list of SecurityActions in response to a ListSecurityActionRequest. */
	export interface GoogleCloudApigeeV1ListSecurityActionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The SecurityActions for the specified environment. */
		securityActions?: Array<GoogleCloudApigeeV1SecurityAction>;
	}

	/** Contains a list of SecurityActions in response to a ListSecurityActionRequest. */
	export interface GoogleCloudApigeeV1ListSecurityActionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListSecurityActionsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListSecurityActionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SecurityAction is rule that can be enforced at an environment level. The result is one of: - A denied API call - An explicitly allowed API call - A flagged API call (HTTP headers added before the target receives it) At least one condition is required to create a SecurityAction. */
	export interface GoogleCloudApigeeV1SecurityAction {

		/** Message that should be set in case of an Allow Action. This does not have any fields. */
		allow?: GoogleCloudApigeeV1SecurityActionAllow;

		/** The following are a list of conditions. A valid SecurityAction must contain at least one condition. Within a condition, each element is ORed. Across conditions elements are ANDed. For example if a SecurityAction has the following: api_keys: ["key1", "key2"] and developers: ["dev1", "dev2"] then this is interpreted as: enforce the action if the incoming request has ((api_key = "key1" OR api_key="key") AND (developer="dev1" OR developer="dev2")) */
		conditionConfig?: GoogleCloudApigeeV1SecurityActionConditionConfig;

		/** Output only. The create time for this SecurityAction. */
		createTime?: string | null;

		/** Message that should be set in case of a Deny Action. */
		deny?: GoogleCloudApigeeV1SecurityActionDeny;

		/** Optional. An optional user provided description of the SecurityAction. */
		description?: string | null;

		/** The expiration for this SecurityAction. */
		expireTime?: string | null;

		/** The message that should be set in the case of a Flag action. */
		flag?: GoogleCloudApigeeV1SecurityActionFlag;

		/** Immutable. This field is ignored during creation as per AIP-133. Please set the `security_action_id` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action} */
		name?: string | null;

		/** Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced. */
		state?: GoogleCloudApigeeV1SecurityActionState | null;

		/** Input only. The TTL for this SecurityAction. */
		ttl?: string | null;

		/** Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states. */
		updateTime?: string | null;
	}

	/** A SecurityAction is rule that can be enforced at an environment level. The result is one of: - A denied API call - An explicitly allowed API call - A flagged API call (HTTP headers added before the target receives it) At least one condition is required to create a SecurityAction. */
	export interface GoogleCloudApigeeV1SecurityActionFormProperties {

		/** Output only. The create time for this SecurityAction. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. An optional user provided description of the SecurityAction. */
		description: FormControl<string | null | undefined>,

		/** The expiration for this SecurityAction. */
		expireTime: FormControl<string | null | undefined>,

		/** Immutable. This field is ignored during creation as per AIP-133. Please set the `security_action_id` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action} */
		name: FormControl<string | null | undefined>,

		/** Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced. */
		state: FormControl<GoogleCloudApigeeV1SecurityActionState | null | undefined>,

		/** Input only. The TTL for this SecurityAction. */
		ttl: FormControl<string | null | undefined>,

		/** Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityActionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityActionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1SecurityActionState | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message that should be set in case of an Allow Action. This does not have any fields. */
	export interface GoogleCloudApigeeV1SecurityActionAllow {
	}

	/** Message that should be set in case of an Allow Action. This does not have any fields. */
	export interface GoogleCloudApigeeV1SecurityActionAllowFormProperties {
	}
	export function CreateGoogleCloudApigeeV1SecurityActionAllowFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityActionAllowFormProperties>({
		});

	}


	/** The following are a list of conditions. A valid SecurityAction must contain at least one condition. Within a condition, each element is ORed. Across conditions elements are ANDed. For example if a SecurityAction has the following: api_keys: ["key1", "key2"] and developers: ["dev1", "dev2"] then this is interpreted as: enforce the action if the incoming request has ((api_key = "key1" OR api_key="key") AND (developer="dev1" OR developer="dev2")) */
	export interface GoogleCloudApigeeV1SecurityActionConditionConfig {

		/** Optional. A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content Scraper, OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection and Advanced API Scraper. */
		botReasons?: Array<string>;

		/** Optional. A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. */
		ipAddressRanges?: Array<string>;
	}

	/** The following are a list of conditions. A valid SecurityAction must contain at least one condition. Within a condition, each element is ORed. Across conditions elements are ANDed. For example if a SecurityAction has the following: api_keys: ["key1", "key2"] and developers: ["dev1", "dev2"] then this is interpreted as: enforce the action if the incoming request has ((api_key = "key1" OR api_key="key") AND (developer="dev1" OR developer="dev2")) */
	export interface GoogleCloudApigeeV1SecurityActionConditionConfigFormProperties {
	}
	export function CreateGoogleCloudApigeeV1SecurityActionConditionConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityActionConditionConfigFormProperties>({
		});

	}


	/** Message that should be set in case of a Deny Action. */
	export interface GoogleCloudApigeeV1SecurityActionDeny {

		/**
		 * Optional. The HTTP response code if the Action = DENY.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseCode?: number | null;
	}

	/** Message that should be set in case of a Deny Action. */
	export interface GoogleCloudApigeeV1SecurityActionDenyFormProperties {

		/**
		 * Optional. The HTTP response code if the Action = DENY.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseCode: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityActionDenyFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityActionDenyFormProperties>({
			responseCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The message that should be set in the case of a Flag action. */
	export interface GoogleCloudApigeeV1SecurityActionFlag {

		/** Optional. A list of HTTP headers to be sent to the target in case of a FLAG SecurityAction. Limit 5 headers per SecurityAction. At least one is mandatory. */
		headers?: Array<GoogleCloudApigeeV1SecurityActionHttpHeader>;
	}

	/** The message that should be set in the case of a Flag action. */
	export interface GoogleCloudApigeeV1SecurityActionFlagFormProperties {
	}
	export function CreateGoogleCloudApigeeV1SecurityActionFlagFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityActionFlagFormProperties>({
		});

	}


	/** An HTTP header. */
	export interface GoogleCloudApigeeV1SecurityActionHttpHeader {

		/** The header name to be sent to the target. */
		name?: string | null;

		/** The header value to be sent to the target. */
		value?: string | null;
	}

	/** An HTTP header. */
	export interface GoogleCloudApigeeV1SecurityActionHttpHeaderFormProperties {

		/** The header name to be sent to the target. */
		name: FormControl<string | null | undefined>,

		/** The header value to be sent to the target. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityActionHttpHeaderFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityActionHttpHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1SecurityActionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Response for ListSecurityIncidents. */
	export interface GoogleCloudApigeeV1ListSecurityIncidentsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of security incidents in the organization */
		securityIncidents?: Array<GoogleCloudApigeeV1SecurityIncident>;
	}

	/** Response for ListSecurityIncidents. */
	export interface GoogleCloudApigeeV1ListSecurityIncidentsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListSecurityIncidentsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListSecurityIncidentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListSecurityProfileRevisions. */
	export interface GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of security profile revisions. The revisions may be attached or unattached to any environment. */
		securityProfiles?: Array<GoogleCloudApigeeV1SecurityProfile>;
	}

	/** Response for ListSecurityProfileRevisions. */
	export interface GoogleCloudApigeeV1ListSecurityProfileRevisionsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListSecurityProfileRevisionsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a SecurityProfile resource. */
	export interface GoogleCloudApigeeV1SecurityProfile {

		/** Description of the security profile. */
		description?: string | null;

		/** DEPRECATED: DO NOT USE Display name of the security profile. */
		displayName?: string | null;

		/** List of environments attached to security profile. */
		environments?: Array<GoogleCloudApigeeV1SecurityProfileEnvironment>;

		/**
		 * Output only. Maximum security score that can be generated by this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxScore?: number | null;

		/**
		 * Output only. Minimum security score that can be generated by this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minScore?: number | null;

		/** Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile} */
		name?: string | null;

		/** ProfileConfig defines a set of categories and policies which will be used to compute security score. */
		profileConfig?: GoogleCloudApigeeV1ProfileConfig;

		/** Output only. The time when revision was created. */
		revisionCreateTime?: string | null;

		/** Output only. Revision ID of the security profile. */
		revisionId?: string | null;

		/** Output only. DEPRECATED: DO NOT USE The time when revision was published. Once published, the security profile revision cannot be updated further and can be attached to environments. */
		revisionPublishTime?: string | null;

		/** Output only. The time when revision was updated. */
		revisionUpdateTime?: string | null;

		/** List of profile scoring configs in this revision. */
		scoringConfigs?: Array<GoogleCloudApigeeV1SecurityProfileScoringConfig>;
	}

	/** Represents a SecurityProfile resource. */
	export interface GoogleCloudApigeeV1SecurityProfileFormProperties {

		/** Description of the security profile. */
		description: FormControl<string | null | undefined>,

		/** DEPRECATED: DO NOT USE Display name of the security profile. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. Maximum security score that can be generated by this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxScore: FormControl<number | null | undefined>,

		/**
		 * Output only. Minimum security score that can be generated by this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minScore: FormControl<number | null | undefined>,

		/** Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile} */
		name: FormControl<string | null | undefined>,

		/** Output only. The time when revision was created. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Output only. Revision ID of the security profile. */
		revisionId: FormControl<string | null | undefined>,

		/** Output only. DEPRECATED: DO NOT USE The time when revision was published. Once published, the security profile revision cannot be updated further and can be attached to environments. */
		revisionPublishTime: FormControl<string | null | undefined>,

		/** Output only. The time when revision was updated. */
		revisionUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityProfileFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityProfileFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			maxScore: new FormControl<number | null | undefined>(undefined),
			minScore: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			revisionPublishTime: new FormControl<string | null | undefined>(undefined),
			revisionUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile. */
	export interface GoogleCloudApigeeV1SecurityProfileEnvironment {

		/** Output only. Time at which environment was attached to the security profile. */
		attachTime?: string | null;

		/** Output only. Name of the environment. */
		environment?: string | null;
	}

	/** Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile. */
	export interface GoogleCloudApigeeV1SecurityProfileEnvironmentFormProperties {

		/** Output only. Time at which environment was attached to the security profile. */
		attachTime: FormControl<string | null | undefined>,

		/** Output only. Name of the environment. */
		environment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityProfileEnvironmentFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityProfileEnvironmentFormProperties>({
			attachTime: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ProfileConfig defines a set of categories and policies which will be used to compute security score. */
	export interface GoogleCloudApigeeV1ProfileConfig {

		/** List of categories of profile config. */
		categories?: Array<GoogleCloudApigeeV1ProfileConfigCategory>;
	}

	/** ProfileConfig defines a set of categories and policies which will be used to compute security score. */
	export interface GoogleCloudApigeeV1ProfileConfigFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigFormProperties>({
		});

	}


	/** Advanced API Security provides security profile that scores the following categories. */
	export interface GoogleCloudApigeeV1ProfileConfigCategory {

		/** Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for, such as high volumes of requests, data scraping, and abuse related to authorization. */
		abuse?: GoogleCloudApigeeV1ProfileConfigAbuse;

		/** By default, following policies will be included: - JWS - JWT - OAuth - BasicAuth - APIKey */
		authorization?: GoogleCloudApigeeV1ProfileConfigAuthorization;

		/** Checks to see if you have CORS policy in place. */
		cors?: GoogleCloudApigeeV1ProfileConfigCORS;

		/** By default, following policies will be included: - OASValidation - SOAPMessageValidation */
		mediation?: GoogleCloudApigeeV1ProfileConfigMediation;

		/** Checks to see if you have configured mTLS for the target server. */
		mtls?: GoogleCloudApigeeV1ProfileConfigMTLS;

		/** By default, following policies will be included: - XMLThreatProtection - JSONThreatProtection */
		threat?: GoogleCloudApigeeV1ProfileConfigThreat;
	}

	/** Advanced API Security provides security profile that scores the following categories. */
	export interface GoogleCloudApigeeV1ProfileConfigCategoryFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigCategoryFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigCategoryFormProperties>({
		});

	}


	/** Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for, such as high volumes of requests, data scraping, and abuse related to authorization. */
	export interface GoogleCloudApigeeV1ProfileConfigAbuse {
	}

	/** Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for, such as high volumes of requests, data scraping, and abuse related to authorization. */
	export interface GoogleCloudApigeeV1ProfileConfigAbuseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigAbuseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigAbuseFormProperties>({
		});

	}


	/** By default, following policies will be included: - JWS - JWT - OAuth - BasicAuth - APIKey */
	export interface GoogleCloudApigeeV1ProfileConfigAuthorization {
	}

	/** By default, following policies will be included: - JWS - JWT - OAuth - BasicAuth - APIKey */
	export interface GoogleCloudApigeeV1ProfileConfigAuthorizationFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigAuthorizationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigAuthorizationFormProperties>({
		});

	}


	/** Checks to see if you have CORS policy in place. */
	export interface GoogleCloudApigeeV1ProfileConfigCORS {
	}

	/** Checks to see if you have CORS policy in place. */
	export interface GoogleCloudApigeeV1ProfileConfigCORSFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigCORSFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigCORSFormProperties>({
		});

	}


	/** By default, following policies will be included: - OASValidation - SOAPMessageValidation */
	export interface GoogleCloudApigeeV1ProfileConfigMediation {
	}

	/** By default, following policies will be included: - OASValidation - SOAPMessageValidation */
	export interface GoogleCloudApigeeV1ProfileConfigMediationFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigMediationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigMediationFormProperties>({
		});

	}


	/** Checks to see if you have configured mTLS for the target server. */
	export interface GoogleCloudApigeeV1ProfileConfigMTLS {
	}

	/** Checks to see if you have configured mTLS for the target server. */
	export interface GoogleCloudApigeeV1ProfileConfigMTLSFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigMTLSFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigMTLSFormProperties>({
		});

	}


	/** By default, following policies will be included: - XMLThreatProtection - JSONThreatProtection */
	export interface GoogleCloudApigeeV1ProfileConfigThreat {
	}

	/** By default, following policies will be included: - XMLThreatProtection - JSONThreatProtection */
	export interface GoogleCloudApigeeV1ProfileConfigThreatFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ProfileConfigThreatFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProfileConfigThreatFormProperties>({
		});

	}


	/** Security configurations to manage scoring. */
	export interface GoogleCloudApigeeV1SecurityProfileScoringConfig {

		/** Description of the config. */
		description?: string | null;

		/** Path of the component config used for scoring. */
		scorePath?: string | null;

		/** Title of the config. */
		title?: string | null;
	}

	/** Security configurations to manage scoring. */
	export interface GoogleCloudApigeeV1SecurityProfileScoringConfigFormProperties {

		/** Description of the config. */
		description: FormControl<string | null | undefined>,

		/** Path of the component config used for scoring. */
		scorePath: FormControl<string | null | undefined>,

		/** Title of the config. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityProfileScoringConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityProfileScoringConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			scorePath: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListSecurityProfiles. */
	export interface GoogleCloudApigeeV1ListSecurityProfilesResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of security profiles in the organization. The profiles may be attached or unattached to any environment. This will return latest revision of each profile. */
		securityProfiles?: Array<GoogleCloudApigeeV1SecurityProfile>;
	}

	/** Response for ListSecurityProfiles. */
	export interface GoogleCloudApigeeV1ListSecurityProfilesResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListSecurityProfilesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListSecurityProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for SecurityReports. */
	export interface GoogleCloudApigeeV1ListSecurityReportsResponse {

		/** If the number of security reports exceeded the page size requested, the token can be used to fetch the next page in a subsequent call. If the response is the last page and there are no more reports to return this field is left empty. */
		nextPageToken?: string | null;

		/** The security reports belong to requested resource name. */
		securityReports?: Array<GoogleCloudApigeeV1SecurityReport>;
	}

	/** The response for SecurityReports. */
	export interface GoogleCloudApigeeV1ListSecurityReportsResponseFormProperties {

		/** If the number of security reports exceeded the page size requested, the token can be used to fetch the next page in a subsequent call. If the response is the last page and there are no more reports to return this field is left empty. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListSecurityReportsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListSecurityReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SecurityReport saves all the information about the created security report. */
	export interface GoogleCloudApigeeV1SecurityReport {

		/** Creation time of the query. */
		created?: string | null;

		/** Display Name specified by the user. */
		displayName?: string | null;

		/** Hostname is available only when query is executed at host level. */
		envgroupHostname?: string | null;

		/** Error is set when query fails. */
		error?: string | null;

		/** ExecutionTime is available only after the query is completed. */
		executionTime?: string | null;

		/** Metadata for the security report. */
		queryParams?: GoogleCloudApigeeV1SecurityReportMetadata;

		/** Report Definition ID. */
		reportDefinitionId?: string | null;

		/** Contains informations about the security report results. */
		result?: GoogleCloudApigeeV1SecurityReportResultMetadata;

		/** ResultFileSize is available only after the query is completed. */
		resultFileSize?: string | null;

		/** ResultRows is available only after the query is completed. */
		resultRows?: string | null;

		/** Self link of the query. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` */
		self?: string | null;

		/** Query state could be "enqueued", "running", "completed", "expired" and "failed". */
		state?: string | null;

		/** Output only. Last updated timestamp for the query. */
		updated?: string | null;
	}

	/** SecurityReport saves all the information about the created security report. */
	export interface GoogleCloudApigeeV1SecurityReportFormProperties {

		/** Creation time of the query. */
		created: FormControl<string | null | undefined>,

		/** Display Name specified by the user. */
		displayName: FormControl<string | null | undefined>,

		/** Hostname is available only when query is executed at host level. */
		envgroupHostname: FormControl<string | null | undefined>,

		/** Error is set when query fails. */
		error: FormControl<string | null | undefined>,

		/** ExecutionTime is available only after the query is completed. */
		executionTime: FormControl<string | null | undefined>,

		/** Report Definition ID. */
		reportDefinitionId: FormControl<string | null | undefined>,

		/** ResultFileSize is available only after the query is completed. */
		resultFileSize: FormControl<string | null | undefined>,

		/** ResultRows is available only after the query is completed. */
		resultRows: FormControl<string | null | undefined>,

		/** Self link of the query. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` */
		self: FormControl<string | null | undefined>,

		/** Query state could be "enqueued", "running", "completed", "expired" and "failed". */
		state: FormControl<string | null | undefined>,

		/** Output only. Last updated timestamp for the query. */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityReportFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityReportFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			envgroupHostname: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			executionTime: new FormControl<string | null | undefined>(undefined),
			reportDefinitionId: new FormControl<string | null | undefined>(undefined),
			resultFileSize: new FormControl<string | null | undefined>(undefined),
			resultRows: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for the security report. */
	export interface GoogleCloudApigeeV1SecurityReportMetadata {

		/** Dimensions of the SecurityReport. */
		dimensions?: Array<string>;

		/** End timestamp of the query range. */
		endTimestamp?: string | null;

		/** Metrics of the SecurityReport. Example: ["name:bot_count,func:sum,alias:sum_bot_count"] */
		metrics?: Array<string>;

		/** MIME type / Output format. */
		mimeType?: string | null;

		/** Start timestamp of the query range. */
		startTimestamp?: string | null;

		/** Query GroupBy time unit. Example: "seconds", "minute", "hour" */
		timeUnit?: string | null;
	}

	/** Metadata for the security report. */
	export interface GoogleCloudApigeeV1SecurityReportMetadataFormProperties {

		/** End timestamp of the query range. */
		endTimestamp: FormControl<string | null | undefined>,

		/** MIME type / Output format. */
		mimeType: FormControl<string | null | undefined>,

		/** Start timestamp of the query range. */
		startTimestamp: FormControl<string | null | undefined>,

		/** Query GroupBy time unit. Example: "seconds", "minute", "hour" */
		timeUnit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityReportMetadataFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityReportMetadataFormProperties>({
			endTimestamp: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			startTimestamp: new FormControl<string | null | undefined>(undefined),
			timeUnit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains informations about the security report results. */
	export interface GoogleCloudApigeeV1SecurityReportResultMetadata {

		/** Output only. Expire_time is set to 7 days after report creation. Query result will be unaccessable after this time. Example: "2021-05-04T13:38:52-07:00" */
		expires?: string | null;

		/** Self link of the query results. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` */
		self?: string | null;
	}

	/** Contains informations about the security report results. */
	export interface GoogleCloudApigeeV1SecurityReportResultMetadataFormProperties {

		/** Output only. Expire_time is set to 7 days after report creation. Query result will be unaccessable after this time. Example: "2021-05-04T13:38:52-07:00" */
		expires: FormControl<string | null | undefined>,

		/** Self link of the query results. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` */
		self: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityReportResultMetadataFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityReportResultMetadataFormProperties>({
			expires: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui */
	export interface GoogleCloudApigeeV1ListSharedFlowsResponse {
		sharedFlows?: Array<GoogleCloudApigeeV1SharedFlow>;
	}

	/** To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui */
	export interface GoogleCloudApigeeV1ListSharedFlowsResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ListSharedFlowsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListSharedFlowsResponseFormProperties>({
		});

	}


	/** The metadata describing a shared flow */
	export interface GoogleCloudApigeeV1SharedFlow {

		/** The id of the most recently created revision for this shared flow. */
		latestRevisionId?: string | null;

		/** Metadata common to many entities in this API. */
		metaData?: GoogleCloudApigeeV1EntityMetadata;

		/** The ID of the shared flow. */
		name?: string | null;

		/** A list of revisions of this shared flow. */
		revision?: Array<string>;
	}

	/** The metadata describing a shared flow */
	export interface GoogleCloudApigeeV1SharedFlowFormProperties {

		/** The id of the most recently created revision for this shared flow. */
		latestRevisionId: FormControl<string | null | undefined>,

		/** The ID of the shared flow. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SharedFlowFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SharedFlowFormProperties>({
			latestRevisionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListTraceConfigOverrides. */
	export interface GoogleCloudApigeeV1ListTraceConfigOverridesResponse {

		/** Token value that can be passed as `page_token` to retrieve the next page of content. */
		nextPageToken?: string | null;

		/** List all trace configuration overrides in an environment. */
		traceConfigOverrides?: Array<GoogleCloudApigeeV1TraceConfigOverride>;
	}

	/** Response for ListTraceConfigOverrides. */
	export interface GoogleCloudApigeeV1ListTraceConfigOverridesResponseFormProperties {

		/** Token value that can be passed as `page_token` to retrieve the next page of content. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ListTraceConfigOverridesResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ListTraceConfigOverridesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a configuration override. */
	export interface GoogleCloudApigeeV1TraceConfigOverride {

		/** ID of the API proxy that will have its trace configuration overridden. */
		apiProxy?: string | null;

		/** ID of the trace configuration override specified as a system-generated UUID. */
		name?: string | null;

		/** TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
		samplingConfig?: GoogleCloudApigeeV1TraceSamplingConfig;
	}

	/** A representation of a configuration override. */
	export interface GoogleCloudApigeeV1TraceConfigOverrideFormProperties {

		/** ID of the API proxy that will have its trace configuration overridden. */
		apiProxy: FormControl<string | null | undefined>,

		/** ID of the trace configuration override specified as a system-generated UUID. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TraceConfigOverrideFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TraceConfigOverrideFormProperties>({
			apiProxy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
	export interface GoogleCloudApigeeV1TraceSamplingConfig {

		/** Sampler of distributed tracing. OFF is the default value. */
		sampler?: GoogleCloudApigeeV1RuntimeTraceSamplingConfigSampler | null;

		/**
		 * Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.
		 * Type: float
		 */
		samplingRate?: number | null;
	}

	/** TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
	export interface GoogleCloudApigeeV1TraceSamplingConfigFormProperties {

		/** Sampler of distributed tracing. OFF is the default value. */
		sampler: FormControl<GoogleCloudApigeeV1RuntimeTraceSamplingConfigSampler | null | undefined>,

		/**
		 * Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.
		 * Type: float
		 */
		samplingRate: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TraceSamplingConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TraceSamplingConfigFormProperties>({
			sampler: new FormControl<GoogleCloudApigeeV1RuntimeTraceSamplingConfigSampler | null | undefined>(undefined),
			samplingRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Encapsulates additional information about query execution. */
	export interface GoogleCloudApigeeV1Metadata {

		/** List of error messages as strings. */
		errors?: Array<string>;

		/** List of additional information such as data source, if result was truncated. For example: ``` "notices": [ "Source:Postgres", "PG Host:uappg0rw.e2e.apigeeks.net", "query served by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed", "Table used: edge.api.uapgroup2.agg_api" ]``` */
		notices?: Array<string>;
	}

	/** Encapsulates additional information about query execution. */
	export interface GoogleCloudApigeeV1MetadataFormProperties {
	}
	export function CreateGoogleCloudApigeeV1MetadataFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1MetadataFormProperties>({
		});

	}


	/** The optionally aggregated metric to query with its ordering. */
	export interface GoogleCloudApigeeV1MetricAggregation {

		/** Aggregation function associated with the metric. */
		aggregation?: GoogleCloudApigeeV1MetricAggregationAggregation | null;

		/** Name of the metric */
		name?: string | null;

		/** Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values. */
		order?: GoogleCloudApigeeV1MetricAggregationOrder | null;
	}

	/** The optionally aggregated metric to query with its ordering. */
	export interface GoogleCloudApigeeV1MetricAggregationFormProperties {

		/** Aggregation function associated with the metric. */
		aggregation: FormControl<GoogleCloudApigeeV1MetricAggregationAggregation | null | undefined>,

		/** Name of the metric */
		name: FormControl<string | null | undefined>,

		/** Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values. */
		order: FormControl<GoogleCloudApigeeV1MetricAggregationOrder | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1MetricAggregationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1MetricAggregationFormProperties>({
			aggregation: new FormControl<GoogleCloudApigeeV1MetricAggregationAggregation | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<GoogleCloudApigeeV1MetricAggregationOrder | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1MetricAggregationAggregation { AGGREGATION_FUNCTION_UNSPECIFIED = 'AGGREGATION_FUNCTION_UNSPECIFIED', AVG = 'AVG', SUM = 'SUM', MIN = 'MIN', MAX = 'MAX', COUNT_DISTINCT = 'COUNT_DISTINCT' }

	export enum GoogleCloudApigeeV1MetricAggregationOrder { ORDER_UNSPECIFIED = 'ORDER_UNSPECIFIED', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


	/** Metadata describing an Operation. */
	export interface GoogleCloudApigeeV1OperationMetadata {
		operationType?: GoogleCloudApigeeV1OperationMetadataOperationType | null;

		/** Information about operation progress. */
		progress?: GoogleCloudApigeeV1OperationMetadataProgress;
		state?: GoogleCloudApigeeV1OperationMetadataProgressState | null;

		/** Name of the resource for which the operation is operating on. */
		targetResourceName?: string | null;

		/** Warnings encountered while executing the operation. */
		warnings?: Array<string>;
	}

	/** Metadata describing an Operation. */
	export interface GoogleCloudApigeeV1OperationMetadataFormProperties {
		operationType: FormControl<GoogleCloudApigeeV1OperationMetadataOperationType | null | undefined>,
		state: FormControl<GoogleCloudApigeeV1OperationMetadataProgressState | null | undefined>,

		/** Name of the resource for which the operation is operating on. */
		targetResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OperationMetadataFormProperties>({
			operationType: new FormControl<GoogleCloudApigeeV1OperationMetadataOperationType | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1OperationMetadataProgressState | null | undefined>(undefined),
			targetResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1OperationMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', INSERT = 'INSERT', DELETE = 'DELETE', UPDATE = 'UPDATE' }


	/** Information about operation progress. */
	export interface GoogleCloudApigeeV1OperationMetadataProgress {

		/** Description of the operation's progress. */
		description?: string | null;

		/** The additional details of the progress. */
		details?: {[id: string]: any };

		/**
		 * The percentage of the operation progress.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentDone?: number | null;

		/** State of the operation. */
		state?: GoogleCloudApigeeV1OperationMetadataProgressState | null;
	}

	/** Information about operation progress. */
	export interface GoogleCloudApigeeV1OperationMetadataProgressFormProperties {

		/** Description of the operation's progress. */
		description: FormControl<string | null | undefined>,

		/** The additional details of the progress. */
		details: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The percentage of the operation progress.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentDone: FormControl<number | null | undefined>,

		/** State of the operation. */
		state: FormControl<GoogleCloudApigeeV1OperationMetadataProgressState | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OperationMetadataProgressFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OperationMetadataProgressFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			percentDone: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1OperationMetadataProgressState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1OperationMetadataProgressState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', NOT_STARTED = 'NOT_STARTED', IN_PROGRESS = 'IN_PROGRESS', FINISHED = 'FINISHED' }

	export interface GoogleCloudApigeeV1OptimizedStats {

		/** Encapsulates a response format for JavaScript Optimized Scenario. */
		Response?: GoogleCloudApigeeV1OptimizedStatsResponse;
	}
	export interface GoogleCloudApigeeV1OptimizedStatsFormProperties {
	}
	export function CreateGoogleCloudApigeeV1OptimizedStatsFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OptimizedStatsFormProperties>({
		});

	}


	/** Encapsulates a response format for JavaScript Optimized Scenario. */
	export interface GoogleCloudApigeeV1OptimizedStatsResponse {

		/** List of time unit values. Time unit refers to an epoch timestamp value. */
		TimeUnit?: Array<string>;

		/** Encapsulates additional information about query execution. */
		metaData?: GoogleCloudApigeeV1Metadata;

		/** Boolean flag that indicates whether the results were truncated based on the limit parameter. */
		resultTruncated?: boolean | null;

		/** Encapsulates a data node as represented below: ``` { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] }``` or ``` { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }``` Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics. */
		stats?: GoogleCloudApigeeV1OptimizedStatsNode;
	}

	/** Encapsulates a response format for JavaScript Optimized Scenario. */
	export interface GoogleCloudApigeeV1OptimizedStatsResponseFormProperties {

		/** Boolean flag that indicates whether the results were truncated based on the limit parameter. */
		resultTruncated: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OptimizedStatsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OptimizedStatsResponseFormProperties>({
			resultTruncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Encapsulates a data node as represented below: ``` { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] }``` or ``` { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }``` Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics. */
	export interface GoogleCloudApigeeV1OptimizedStatsNode {
		data?: Array<string>;
	}

	/** Encapsulates a data node as represented below: ``` { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] }``` or ``` { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }``` Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics. */
	export interface GoogleCloudApigeeV1OptimizedStatsNodeFormProperties {
	}
	export function CreateGoogleCloudApigeeV1OptimizedStatsNodeFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OptimizedStatsNodeFormProperties>({
		});

	}

	export interface GoogleCloudApigeeV1Organization {

		/** Add-on configurations for the Apigee organization. */
		addonsConfig?: GoogleCloudApigeeV1AddonsConfig;

		/** Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). */
		analyticsRegion?: string | null;

		/** Cloud KMS key name used for encrypting API consumer data. Required for US/EU regions when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION` or the region is not US/EU, a Google-Managed encryption key will be used. Format: `projects/locations/keyRings/cryptoKeys/*` */
		apiConsumerDataEncryptionKeyName?: string | null;

		/** This field is needed only for customers with control plane in US or EU. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU. */
		apiConsumerDataLocation?: string | null;

		/** Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee. */
		apigeeProjectId?: string | null;

		/** Not used by Apigee. */
		attributes?: Array<string>;

		/** Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid. */
		authorizedNetwork?: string | null;

		/** Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). */
		billingType?: GoogleCloudApigeeV1OrganizationBillingType | null;

		/** Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`. */
		caCertificate?: string | null;

		/** Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Required when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/locations/keyRings/cryptoKeys/*` */
		controlPlaneEncryptionKeyName?: string | null;

		/** Output only. Time that the Apigee organization was created in milliseconds since epoch. */
		createdAt?: string | null;

		/** Not used by Apigee. */
		customerName?: string | null;

		/** Description of the Apigee organization. */
		description?: string | null;

		/** Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid. */
		disableVpcPeering?: boolean | null;

		/** Display name for the Apigee organization. Unused, but reserved for future use. */
		displayName?: string | null;

		/** Output only. List of environments in the Apigee organization. */
		environments?: Array<string>;

		/** Output only. Time that the Apigee organization is scheduled for deletion. */
		expiresAt?: string | null;

		/** Output only. Time that the Apigee organization was last modified in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** Output only. Name of the Apigee organization. */
		name?: string | null;

		/** Configuration for the Portals settings. */
		portalDisabled?: boolean | null;

		/** Output only. Project ID associated with the Apigee organization. */
		projectId?: string | null;

		/** Message for compatibility with legacy Edge specification for Java Properties object in JSON. */
		properties?: GoogleCloudApigeeV1Properties;

		/** Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when [RuntimeType](#RuntimeType) is `CLOUD`. If not specified when [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid. */
		runtimeDatabaseEncryptionKeyName?: string | null;

		/** Required. Runtime type of the Apigee organization based on the Apigee subscription purchased. */
		runtimeType?: GoogleCloudApigeeV1OrganizationRuntimeType | null;

		/** Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use. */
		state?: GoogleCloudApigeeV1EndpointAttachmentState | null;

		/** Output only. Subscription plan that the customer has purchased. Output only. */
		subscriptionPlan?: GoogleCloudApigeeV1OrganizationSubscriptionPlan | null;

		/** Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/). */
		subscriptionType?: GoogleCloudApigeeV1OrganizationSubscriptionType | null;

		/** Not used by Apigee. */
		type?: GoogleCloudApigeeV1OrganizationType | null;
	}
	export interface GoogleCloudApigeeV1OrganizationFormProperties {

		/** Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). */
		analyticsRegion: FormControl<string | null | undefined>,

		/** Cloud KMS key name used for encrypting API consumer data. Required for US/EU regions when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION` or the region is not US/EU, a Google-Managed encryption key will be used. Format: `projects/locations/keyRings/cryptoKeys/*` */
		apiConsumerDataEncryptionKeyName: FormControl<string | null | undefined>,

		/** This field is needed only for customers with control plane in US or EU. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU. */
		apiConsumerDataLocation: FormControl<string | null | undefined>,

		/** Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee. */
		apigeeProjectId: FormControl<string | null | undefined>,

		/** Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid. */
		authorizedNetwork: FormControl<string | null | undefined>,

		/** Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). */
		billingType: FormControl<GoogleCloudApigeeV1OrganizationBillingType | null | undefined>,

		/** Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`. */
		caCertificate: FormControl<string | null | undefined>,

		/** Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Required when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/locations/keyRings/cryptoKeys/*` */
		controlPlaneEncryptionKeyName: FormControl<string | null | undefined>,

		/** Output only. Time that the Apigee organization was created in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Not used by Apigee. */
		customerName: FormControl<string | null | undefined>,

		/** Description of the Apigee organization. */
		description: FormControl<string | null | undefined>,

		/** Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid. */
		disableVpcPeering: FormControl<boolean | null | undefined>,

		/** Display name for the Apigee organization. Unused, but reserved for future use. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Time that the Apigee organization is scheduled for deletion. */
		expiresAt: FormControl<string | null | undefined>,

		/** Output only. Time that the Apigee organization was last modified in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** Output only. Name of the Apigee organization. */
		name: FormControl<string | null | undefined>,

		/** Configuration for the Portals settings. */
		portalDisabled: FormControl<boolean | null | undefined>,

		/** Output only. Project ID associated with the Apigee organization. */
		projectId: FormControl<string | null | undefined>,

		/** Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when [RuntimeType](#RuntimeType) is `CLOUD`. If not specified when [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid. */
		runtimeDatabaseEncryptionKeyName: FormControl<string | null | undefined>,

		/** Required. Runtime type of the Apigee organization based on the Apigee subscription purchased. */
		runtimeType: FormControl<GoogleCloudApigeeV1OrganizationRuntimeType | null | undefined>,

		/** Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use. */
		state: FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>,

		/** Output only. Subscription plan that the customer has purchased. Output only. */
		subscriptionPlan: FormControl<GoogleCloudApigeeV1OrganizationSubscriptionPlan | null | undefined>,

		/** Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/). */
		subscriptionType: FormControl<GoogleCloudApigeeV1OrganizationSubscriptionType | null | undefined>,

		/** Not used by Apigee. */
		type: FormControl<GoogleCloudApigeeV1OrganizationType | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1OrganizationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1OrganizationFormProperties>({
			analyticsRegion: new FormControl<string | null | undefined>(undefined),
			apiConsumerDataEncryptionKeyName: new FormControl<string | null | undefined>(undefined),
			apiConsumerDataLocation: new FormControl<string | null | undefined>(undefined),
			apigeeProjectId: new FormControl<string | null | undefined>(undefined),
			authorizedNetwork: new FormControl<string | null | undefined>(undefined),
			billingType: new FormControl<GoogleCloudApigeeV1OrganizationBillingType | null | undefined>(undefined),
			caCertificate: new FormControl<string | null | undefined>(undefined),
			controlPlaneEncryptionKeyName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disableVpcPeering: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<string | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			portalDisabled: new FormControl<boolean | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			runtimeDatabaseEncryptionKeyName: new FormControl<string | null | undefined>(undefined),
			runtimeType: new FormControl<GoogleCloudApigeeV1OrganizationRuntimeType | null | undefined>(undefined),
			state: new FormControl<GoogleCloudApigeeV1EndpointAttachmentState | null | undefined>(undefined),
			subscriptionPlan: new FormControl<GoogleCloudApigeeV1OrganizationSubscriptionPlan | null | undefined>(undefined),
			subscriptionType: new FormControl<GoogleCloudApigeeV1OrganizationSubscriptionType | null | undefined>(undefined),
			type: new FormControl<GoogleCloudApigeeV1OrganizationType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1OrganizationBillingType { BILLING_TYPE_UNSPECIFIED = 'BILLING_TYPE_UNSPECIFIED', SUBSCRIPTION = 'SUBSCRIPTION', EVALUATION = 'EVALUATION', PAYG = 'PAYG' }

	export enum GoogleCloudApigeeV1OrganizationRuntimeType { RUNTIME_TYPE_UNSPECIFIED = 'RUNTIME_TYPE_UNSPECIFIED', CLOUD = 'CLOUD', HYBRID = 'HYBRID' }

	export enum GoogleCloudApigeeV1OrganizationSubscriptionPlan { SUBSCRIPTION_PLAN_UNSPECIFIED = 'SUBSCRIPTION_PLAN_UNSPECIFIED', SUBSCRIPTION_2021 = 'SUBSCRIPTION_2021', SUBSCRIPTION_2024 = 'SUBSCRIPTION_2024' }

	export enum GoogleCloudApigeeV1OrganizationSubscriptionType { SUBSCRIPTION_TYPE_UNSPECIFIED = 'SUBSCRIPTION_TYPE_UNSPECIFIED', PAID = 'PAID', TRIAL = 'TRIAL' }

	export enum GoogleCloudApigeeV1OrganizationType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TYPE_TRIAL = 'TYPE_TRIAL', TYPE_PAID = 'TYPE_PAID', TYPE_INTERNAL = 'TYPE_INTERNAL' }


	/** Request for ProvisionOrganization. */
	export interface GoogleCloudApigeeV1ProvisionOrganizationRequest {

		/** Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to `us-west1`. */
		analyticsRegion?: string | null;

		/** Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` */
		authorizedNetwork?: string | null;

		/** Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid. */
		disableVpcPeering?: boolean | null;

		/** Cloud Platform location for the runtime instance. Defaults to zone `us-west1-a`. If a region is provided, `EVAL` organizations will use the region for automatically selecting a zone for the runtime instance. */
		runtimeLocation?: string | null;
	}

	/** Request for ProvisionOrganization. */
	export interface GoogleCloudApigeeV1ProvisionOrganizationRequestFormProperties {

		/** Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to `us-west1`. */
		analyticsRegion: FormControl<string | null | undefined>,

		/** Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` */
		authorizedNetwork: FormControl<string | null | undefined>,

		/** Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid. */
		disableVpcPeering: FormControl<boolean | null | undefined>,

		/** Cloud Platform location for the runtime instance. Defaults to zone `us-west1-a`. If a region is provided, `EVAL` organizations will use the region for automatically selecting a zone for the runtime instance. */
		runtimeLocation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ProvisionOrganizationRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ProvisionOrganizationRequestFormProperties>({
			analyticsRegion: new FormControl<string | null | undefined>(undefined),
			authorizedNetwork: new FormControl<string | null | undefined>(undefined),
			disableVpcPeering: new FormControl<boolean | null | undefined>(undefined),
			runtimeLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1Query {

		/** Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`). */
		csvDelimiter?: string | null;

		/** A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions */
		dimensions?: Array<string>;

		/** Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname. */
		envgroupHostname?: string | null;

		/** Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax */
		filter?: string | null;

		/** Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision. */
		groupByTimeUnit?: string | null;

		/**
		 * Maximum number of rows that can be returned in the result.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** A list of Metrics. */
		metrics?: Array<GoogleCloudApigeeV1QueryMetric>;

		/** Asynchronous Query Name. */
		name?: string | null;

		/** Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property. */
		outputFormat?: string | null;

		/** Asynchronous Report ID. */
		reportDefinitionId?: string | null;

		/** Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" } */
		timeRange?: any;
	}
	export interface GoogleCloudApigeeV1QueryFormProperties {

		/** Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`). */
		csvDelimiter: FormControl<string | null | undefined>,

		/** Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname. */
		envgroupHostname: FormControl<string | null | undefined>,

		/** Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax */
		filter: FormControl<string | null | undefined>,

		/** Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision. */
		groupByTimeUnit: FormControl<string | null | undefined>,

		/**
		 * Maximum number of rows that can be returned in the result.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** Asynchronous Query Name. */
		name: FormControl<string | null | undefined>,

		/** Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property. */
		outputFormat: FormControl<string | null | undefined>,

		/** Asynchronous Report ID. */
		reportDefinitionId: FormControl<string | null | undefined>,

		/** Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" } */
		timeRange: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryFormProperties>({
			csvDelimiter: new FormControl<string | null | undefined>(undefined),
			envgroupHostname: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			groupByTimeUnit: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			outputFormat: new FormControl<string | null | undefined>(undefined),
			reportDefinitionId: new FormControl<string | null | undefined>(undefined),
			timeRange: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics */
	export interface GoogleCloudApigeeV1QueryMetric {

		/** Alias for the metric. Alias will be used to replace metric name in query results. */
		alias?: string | null;

		/** Aggregation function: avg, min, max, or sum. */
		function?: string | null;

		/** Required. Metric name. */
		name?: string | null;

		/** One of `+`, `-`, `/`, `%`, `*`. */
		operator?: string | null;

		/** Operand value should be provided when operator is set. */
		value?: string | null;
	}

	/** More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics */
	export interface GoogleCloudApigeeV1QueryMetricFormProperties {

		/** Alias for the metric. Alias will be used to replace metric name in query results. */
		alias: FormControl<string | null | undefined>,

		/** Aggregation function: avg, min, max, or sum. */
		function: FormControl<string | null | undefined>,

		/** Required. Metric name. */
		name: FormControl<string | null | undefined>,

		/** One of `+`, `-`, `/`, `%`, `*`. */
		operator: FormControl<string | null | undefined>,

		/** Operand value should be provided when operator is set. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryMetricFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryMetricFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request payload representing the query to be run for fetching security statistics as rows. */
	export interface GoogleCloudApigeeV1QueryTabularStatsRequest {

		/** Required. List of dimension names to group the aggregations by. */
		dimensions?: Array<string>;

		/** Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters */
		filter?: string | null;

		/** Required. List of metrics and their aggregations. */
		metrics?: Array<GoogleCloudApigeeV1MetricAggregation>;

		/**
		 * Page size represents the number of rows.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Identifies a sequence of rows. */
		pageToken?: string | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		timeRange?: GoogleTypeInterval;
	}

	/** Request payload representing the query to be run for fetching security statistics as rows. */
	export interface GoogleCloudApigeeV1QueryTabularStatsRequestFormProperties {

		/** Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters */
		filter: FormControl<string | null | undefined>,

		/**
		 * Page size represents the number of rows.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Identifies a sequence of rows. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryTabularStatsRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryTabularStatsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values. */
	export interface GoogleCloudApigeeV1QueryTabularStatsResponse {

		/** Column names corresponding to the same order as the inner values in the stats field. */
		columns?: Array<string>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Resultant rows from the executed query. */
		values?: Array<string>;
	}

	/** Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values. */
	export interface GoogleCloudApigeeV1QueryTabularStatsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryTabularStatsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryTabularStatsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values. */
	export interface GoogleCloudApigeeV1QueryTimeSeriesStatsRequest {

		/** List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line representing the requested metric aggregations grouped by environment is returned. */
		dimensions?: Array<string>;

		/** Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters */
		filter?: string | null;

		/** Required. List of metrics and their aggregations. */
		metrics?: Array<GoogleCloudApigeeV1MetricAggregation>;

		/**
		 * Page size represents the number of time series sequences, one per unique set of dimensions and their values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Page token stands for a specific collection of time series sequences. */
		pageToken?: string | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		timeRange?: GoogleTypeInterval;

		/** Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first). */
		timestampOrder?: GoogleCloudApigeeV1MetricAggregationOrder | null;

		/** Time buckets to group the stats by. */
		windowSize?: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSize | null;
	}

	/** QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values. */
	export interface GoogleCloudApigeeV1QueryTimeSeriesStatsRequestFormProperties {

		/** Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters */
		filter: FormControl<string | null | undefined>,

		/**
		 * Page size represents the number of time series sequences, one per unique set of dimensions and their values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Page token stands for a specific collection of time series sequences. */
		pageToken: FormControl<string | null | undefined>,

		/** Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first). */
		timestampOrder: FormControl<GoogleCloudApigeeV1MetricAggregationOrder | null | undefined>,

		/** Time buckets to group the stats by. */
		windowSize: FormControl<GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSize | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryTimeSeriesStatsRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryTimeSeriesStatsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			timestampOrder: new FormControl<GoogleCloudApigeeV1MetricAggregationOrder | null | undefined>(undefined),
			windowSize: new FormControl<GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSize | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSize { WINDOW_SIZE_UNSPECIFIED = 'WINDOW_SIZE_UNSPECIFIED', MINUTE = 'MINUTE', HOUR = 'HOUR', DAY = 'DAY', MONTH = 'MONTH' }


	/** Represents security stats result as a collection of time series sequences. */
	export interface GoogleCloudApigeeV1QueryTimeSeriesStatsResponse {

		/** Column names corresponding to the same order as the inner values in the stats field. */
		columns?: Array<string>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Results of the query returned as a JSON array. */
		values?: Array<GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence>;
	}

	/** Represents security stats result as a collection of time series sequences. */
	export interface GoogleCloudApigeeV1QueryTimeSeriesStatsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryTimeSeriesStatsResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryTimeSeriesStatsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A sequence of time series. */
	export interface GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence {

		/** Map of dimensions and their values that uniquely identifies a time series sequence. */
		dimensions?: {[id: string]: string };

		/** List of points. First value of each inner list is a timestamp. */
		points?: Array<string>;
	}

	/** A sequence of time series. */
	export interface GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceFormProperties {

		/** Map of dimensions and their values that uniquely identifies a time series sequence. */
		dimensions: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceFormProperties>({
			dimensions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A Reference configuration. References must refer to a keystore that also exists in the parent environment. */
	export interface GoogleCloudApigeeV1Reference {

		/** Optional. A human-readable description of this reference. */
		description?: string | null;

		/** Required. The resource id of this reference. Values must match the regular expression [\w\s\-.]+. */
		name?: string | null;

		/** Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type. */
		refers?: string | null;

		/** The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'. */
		resourceType?: string | null;
	}

	/** A Reference configuration. References must refer to a keystore that also exists in the parent environment. */
	export interface GoogleCloudApigeeV1ReferenceFormProperties {

		/** Optional. A human-readable description of this reference. */
		description: FormControl<string | null | undefined>,

		/** Required. The resource id of this reference. Values must match the regular expression [\w\s\-.]+. */
		name: FormControl<string | null | undefined>,

		/** Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type. */
		refers: FormControl<string | null | undefined>,

		/** The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ReferenceFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ReferenceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refers: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for ReportInstanceStatus. */
	export interface GoogleCloudApigeeV1ReportInstanceStatusRequest {

		/** A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID. */
		instanceUid?: string | null;

		/** The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor. */
		reportTime?: string | null;

		/** Status for config resources */
		resources?: Array<GoogleCloudApigeeV1ResourceStatus>;
	}

	/** Request for ReportInstanceStatus. */
	export interface GoogleCloudApigeeV1ReportInstanceStatusRequestFormProperties {

		/** A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID. */
		instanceUid: FormControl<string | null | undefined>,

		/** The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ReportInstanceStatusRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ReportInstanceStatusRequestFormProperties>({
			instanceUid: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a resource loaded in the runtime. */
	export interface GoogleCloudApigeeV1ResourceStatus {

		/** The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig */
		resource?: string | null;

		/** Revisions of the resource currently deployed in the instance. */
		revisions?: Array<GoogleCloudApigeeV1RevisionStatus>;

		/**
		 * The total number of replicas that should have this resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalReplicas?: number | null;

		/** The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses. */
		uid?: string | null;
	}

	/** The status of a resource loaded in the runtime. */
	export interface GoogleCloudApigeeV1ResourceStatusFormProperties {

		/** The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig */
		resource: FormControl<string | null | undefined>,

		/**
		 * The total number of replicas that should have this resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalReplicas: FormControl<number | null | undefined>,

		/** The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1ResourceStatusFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ResourceStatusFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
			totalReplicas: new FormControl<number | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a specific resource revision. */
	export interface GoogleCloudApigeeV1RevisionStatus {

		/** Errors reported when attempting to load this revision. */
		errors?: Array<GoogleCloudApigeeV1UpdateError>;

		/** The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits. */
		jsonSpec?: string | null;

		/**
		 * The number of replicas that have successfully loaded this revision.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicas?: number | null;

		/** The revision of the resource. */
		revisionId?: string | null;
	}

	/** The status of a specific resource revision. */
	export interface GoogleCloudApigeeV1RevisionStatusFormProperties {

		/** The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits. */
		jsonSpec: FormControl<string | null | undefined>,

		/**
		 * The number of replicas that have successfully loaded this revision.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicas: FormControl<number | null | undefined>,

		/** The revision of the resource. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RevisionStatusFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RevisionStatusFormProperties>({
			jsonSpec: new FormControl<string | null | undefined>(undefined),
			replicas: new FormControl<number | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on why a resource update failed in the runtime. */
	export interface GoogleCloudApigeeV1UpdateError {

		/** Status code. */
		code?: GoogleCloudApigeeV1UpdateErrorCode | null;

		/** User-friendly error message. */
		message?: string | null;

		/** The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource. */
		resource?: string | null;

		/** A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances. */
		type?: string | null;
	}

	/** Details on why a resource update failed in the runtime. */
	export interface GoogleCloudApigeeV1UpdateErrorFormProperties {

		/** Status code. */
		code: FormControl<GoogleCloudApigeeV1UpdateErrorCode | null | undefined>,

		/** User-friendly error message. */
		message: FormControl<string | null | undefined>,

		/** The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource. */
		resource: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1UpdateErrorFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1UpdateErrorFormProperties>({
			code: new FormControl<GoogleCloudApigeeV1UpdateErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudApigeeV1UpdateErrorCode { OK = 'OK', CANCELLED = 'CANCELLED', UNKNOWN = 'UNKNOWN', INVALID_ARGUMENT = 'INVALID_ARGUMENT', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', NOT_FOUND = 'NOT_FOUND', ALREADY_EXISTS = 'ALREADY_EXISTS', PERMISSION_DENIED = 'PERMISSION_DENIED', UNAUTHENTICATED = 'UNAUTHENTICATED', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', FAILED_PRECONDITION = 'FAILED_PRECONDITION', ABORTED = 'ABORTED', OUT_OF_RANGE = 'OUT_OF_RANGE', UNIMPLEMENTED = 'UNIMPLEMENTED', INTERNAL = 'INTERNAL', UNAVAILABLE = 'UNAVAILABLE', DATA_LOSS = 'DATA_LOSS' }


	/** Placeholder for future enhancements to status reporting protocol */
	export interface GoogleCloudApigeeV1ReportInstanceStatusResponse {
	}

	/** Placeholder for future enhancements to status reporting protocol */
	export interface GoogleCloudApigeeV1ReportInstanceStatusResponseFormProperties {
	}
	export function CreateGoogleCloudApigeeV1ReportInstanceStatusResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1ReportInstanceStatusResponseFormProperties>({
		});

	}


	/** Runtime configuration for the organization. Response for GetRuntimeConfig. */
	export interface GoogleCloudApigeeV1RuntimeConfig {

		/** Cloud Storage bucket used for uploading Analytics records. */
		analyticsBucket?: string | null;

		/** Name of the resource in the following format: `organizations/{org}/runtimeConfig`. */
		name?: string | null;

		/** Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty if the tenant project hasn't been created yet. */
		tenantProjectId?: string | null;

		/** Cloud Storage bucket used for uploading Trace records. */
		traceBucket?: string | null;
	}

	/** Runtime configuration for the organization. Response for GetRuntimeConfig. */
	export interface GoogleCloudApigeeV1RuntimeConfigFormProperties {

		/** Cloud Storage bucket used for uploading Analytics records. */
		analyticsBucket: FormControl<string | null | undefined>,

		/** Name of the resource in the following format: `organizations/{org}/runtimeConfig`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty if the tenant project hasn't been created yet. */
		tenantProjectId: FormControl<string | null | undefined>,

		/** Cloud Storage bucket used for uploading Trace records. */
		traceBucket: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1RuntimeConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1RuntimeConfigFormProperties>({
			analyticsBucket: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tenantProjectId: new FormControl<string | null | undefined>(undefined),
			traceBucket: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for Schema call */
	export interface GoogleCloudApigeeV1Schema {

		/** List of schema fields grouped as dimensions. */
		dimensions?: Array<GoogleCloudApigeeV1SchemaSchemaElement>;

		/** Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of strings. */
		meta?: Array<string>;

		/** List of schema fields grouped as dimensions that can be used with an aggregate function such as `sum`, `avg`, `min`, and `max`. */
		metrics?: Array<GoogleCloudApigeeV1SchemaSchemaElement>;
	}

	/** Response for Schema call */
	export interface GoogleCloudApigeeV1SchemaFormProperties {
	}
	export function CreateGoogleCloudApigeeV1SchemaFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SchemaFormProperties>({
		});

	}


	/** Message type for the schema element */
	export interface GoogleCloudApigeeV1SchemaSchemaElement {

		/** Name of the field. */
		name?: string | null;

		/** Properties for the schema field. */
		properties?: GoogleCloudApigeeV1SchemaSchemaProperty;
	}

	/** Message type for the schema element */
	export interface GoogleCloudApigeeV1SchemaSchemaElementFormProperties {

		/** Name of the field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SchemaSchemaElementFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SchemaSchemaElementFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for the schema field. */
	export interface GoogleCloudApigeeV1SchemaSchemaProperty {

		/** Time the field was created in RFC3339 string form. For example: `2016-02-26T10:23:09.592Z`. */
		createTime?: string | null;

		/** Flag that specifies whether the field is standard in the dataset or a custom field created by the customer. `true` indicates that it is a custom field. */
		custom?: string | null;

		/** Data type of the field. */
		type?: string | null;
	}

	/** Properties for the schema field. */
	export interface GoogleCloudApigeeV1SchemaSchemaPropertyFormProperties {

		/** Time the field was created in RFC3339 string form. For example: `2016-02-26T10:23:09.592Z`. */
		createTime: FormControl<string | null | undefined>,

		/** Flag that specifies whether the field is standard in the dataset or a custom field created by the customer. `true` indicates that it is a custom field. */
		custom: FormControl<string | null | undefined>,

		/** Data type of the field. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SchemaSchemaPropertyFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SchemaSchemaPropertyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			custom: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SecurityActionsConfig reflects the current state of the SecurityActions feature. This is a singleton resource: https://google.aip.dev/156 */
	export interface GoogleCloudApigeeV1SecurityActionsConfig {

		/** The flag that controls whether this feature is enabled. This is `unset` by default. When this flag is `false`, even if individual rules are enabled, no SecurityActions will be enforced. */
		enabled?: boolean | null;

		/** This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: `organizations/{org}/environments/{env}/security_actions_config` */
		name?: string | null;

		/** Output only. The update time for configuration. */
		updateTime?: string | null;
	}

	/** SecurityActionsConfig reflects the current state of the SecurityActions feature. This is a singleton resource: https://google.aip.dev/156 */
	export interface GoogleCloudApigeeV1SecurityActionsConfigFormProperties {

		/** The flag that controls whether this feature is enabled. This is `unset` by default. When this flag is `false`, even if individual rules are enabled, no SecurityActions will be enforced. */
		enabled: FormControl<boolean | null | undefined>,

		/** This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: `organizations/{org}/environments/{env}/security_actions_config` */
		name: FormControl<string | null | undefined>,

		/** Output only. The update time for configuration. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityActionsConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityActionsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a SecurityProfileEnvironmentAssociation resource. */
	export interface GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation {

		/** Output only. The time when environment was attached to the security profile. */
		attachTime?: string | null;

		/** Immutable. Name of the environment that the profile is attached to. */
		name?: string | null;

		/** DEPRECATED: DO NOT USE Revision ID of the security profile. */
		securityProfileRevisionId?: string | null;
	}

	/** Represents a SecurityProfileEnvironmentAssociation resource. */
	export interface GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationFormProperties {

		/** Output only. The time when environment was attached to the security profile. */
		attachTime: FormControl<string | null | undefined>,

		/** Immutable. Name of the environment that the profile is attached to. */
		name: FormControl<string | null | undefined>,

		/** DEPRECATED: DO NOT USE Revision ID of the security profile. */
		securityProfileRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityProfileEnvironmentAssociationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationFormProperties>({
			attachTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			securityProfileRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Body structure when user makes a request to create a security report. */
	export interface GoogleCloudApigeeV1SecurityReportQuery {

		/** Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`). */
		csvDelimiter?: string | null;

		/** A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions */
		dimensions?: Array<string>;

		/** Security Report display name which users can specify. */
		displayName?: string | null;

		/** Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname. */
		envgroupHostname?: string | null;

		/** Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax */
		filter?: string | null;

		/** Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision. */
		groupByTimeUnit?: string | null;

		/**
		 * Maximum number of rows that can be returned in the result.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** A list of Metrics. */
		metrics?: Array<GoogleCloudApigeeV1SecurityReportQueryMetric>;

		/** Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property. */
		mimeType?: string | null;

		/** Report Definition ID. */
		reportDefinitionId?: string | null;

		/** Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" } */
		timeRange?: any;
	}

	/** Body structure when user makes a request to create a security report. */
	export interface GoogleCloudApigeeV1SecurityReportQueryFormProperties {

		/** Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`). */
		csvDelimiter: FormControl<string | null | undefined>,

		/** Security Report display name which users can specify. */
		displayName: FormControl<string | null | undefined>,

		/** Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname. */
		envgroupHostname: FormControl<string | null | undefined>,

		/** Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax */
		filter: FormControl<string | null | undefined>,

		/** Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision. */
		groupByTimeUnit: FormControl<string | null | undefined>,

		/**
		 * Maximum number of rows that can be returned in the result.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property. */
		mimeType: FormControl<string | null | undefined>,

		/** Report Definition ID. */
		reportDefinitionId: FormControl<string | null | undefined>,

		/** Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" } */
		timeRange: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityReportQueryFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityReportQueryFormProperties>({
			csvDelimiter: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			envgroupHostname: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			groupByTimeUnit: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			reportDefinitionId: new FormControl<string | null | undefined>(undefined),
			timeRange: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Metric of the Query */
	export interface GoogleCloudApigeeV1SecurityReportQueryMetric {

		/** Aggregation function: avg, min, max, or sum. */
		aggregationFunction?: string | null;

		/** Alias for the metric. Alias will be used to replace metric name in query results. */
		alias?: string | null;

		/** Required. Metric name. */
		name?: string | null;

		/** One of `+`, `-`, `/`, `%`, `*`. */
		operator?: string | null;

		/** Operand value should be provided when operator is set. */
		value?: string | null;
	}

	/** Metric of the Query */
	export interface GoogleCloudApigeeV1SecurityReportQueryMetricFormProperties {

		/** Aggregation function: avg, min, max, or sum. */
		aggregationFunction: FormControl<string | null | undefined>,

		/** Alias for the metric. Alias will be used to replace metric name in query results. */
		alias: FormControl<string | null | undefined>,

		/** Required. Metric name. */
		name: FormControl<string | null | undefined>,

		/** One of `+`, `-`, `/`, `%`, `*`. */
		operator: FormControl<string | null | undefined>,

		/** Operand value should be provided when operator is set. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityReportQueryMetricFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityReportQueryMetricFormProperties>({
			aggregationFunction: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for security report result view APIs. */
	export interface GoogleCloudApigeeV1SecurityReportResultView {

		/**
		 * Error code when there is a failure.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** Error message when there is a failure. */
		error?: string | null;

		/** Metadata for the security report. */
		metadata?: GoogleCloudApigeeV1SecurityReportMetadata;

		/** Rows of security report result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…} */
		rows?: Array<string>;

		/** State of retrieving ResultView. */
		state?: string | null;
	}

	/** The response for security report result view APIs. */
	export interface GoogleCloudApigeeV1SecurityReportResultViewFormProperties {

		/**
		 * Error code when there is a failure.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** Error message when there is a failure. */
		error: FormControl<string | null | undefined>,

		/** State of retrieving ResultView. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecurityReportResultViewFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecurityReportResultViewFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SecuritySettings reflects the current state of the SecuritySettings feature. */
	export interface GoogleCloudApigeeV1SecuritySettings {

		/** Optional. If true the user consents to the use of ML models for Abuse detection. */
		mlRetrainingFeedbackEnabled?: boolean | null;

		/** Identifier. Full resource name is always `organizations/{org}/securitySettings`. */
		name?: string | null;
	}

	/** SecuritySettings reflects the current state of the SecuritySettings feature. */
	export interface GoogleCloudApigeeV1SecuritySettingsFormProperties {

		/** Optional. If true the user consents to the use of ML models for Abuse detection. */
		mlRetrainingFeedbackEnabled: FormControl<boolean | null | undefined>,

		/** Identifier. Full resource name is always `organizations/{org}/securitySettings`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SecuritySettingsFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SecuritySettingsFormProperties>({
			mlRetrainingFeedbackEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for SetAddonEnablement. */
	export interface GoogleCloudApigeeV1SetAddonEnablementRequest {

		/** If the Analytics should be enabled in the environment. */
		analyticsEnabled?: boolean | null;

		/** If the API Security should be enabled in the environment. */
		apiSecurityEnabled?: boolean | null;
	}

	/** Request for SetAddonEnablement. */
	export interface GoogleCloudApigeeV1SetAddonEnablementRequestFormProperties {

		/** If the Analytics should be enabled in the environment. */
		analyticsEnabled: FormControl<boolean | null | undefined>,

		/** If the API Security should be enabled in the environment. */
		apiSecurityEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SetAddonEnablementRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SetAddonEnablementRequestFormProperties>({
			analyticsEnabled: new FormControl<boolean | null | undefined>(undefined),
			apiSecurityEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request for SetAddons. */
	export interface GoogleCloudApigeeV1SetAddonsRequest {

		/** Add-on configurations for the Apigee organization. */
		addonsConfig?: GoogleCloudApigeeV1AddonsConfig;
	}

	/** Request for SetAddons. */
	export interface GoogleCloudApigeeV1SetAddonsRequestFormProperties {
	}
	export function CreateGoogleCloudApigeeV1SetAddonsRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SetAddonsRequestFormProperties>({
		});

	}


	/** The metadata describing a shared flow revision. */
	export interface GoogleCloudApigeeV1SharedFlowRevision {

		/** Version of the API proxy configuration schema. Currently, only 4.0 is supported. */
		configurationVersion?: GoogleCloudApigeeV1ConfigVersion;

		/** A textual description of the shared flow revision. */
		contextInfo?: string | null;

		/** Time at which this shared flow revision was created, in milliseconds since epoch. */
		createdAt?: string | null;

		/** Description of the shared flow revision. */
		description?: string | null;

		/** The human readable name of this shared flow. */
		displayName?: string | null;

		/** A Key-Value map of metadata about this shared flow revision. */
		entityMetaDataAsProperties?: {[id: string]: string };

		/** Time at which this shared flow revision was most recently modified, in milliseconds since epoch. */
		lastModifiedAt?: string | null;

		/** The resource ID of the parent shared flow. */
		name?: string | null;

		/** A list of policy names included in this shared flow revision. */
		policies?: Array<string>;

		/** List of resource files. */
		resourceFiles?: GoogleCloudApigeeV1ResourceFiles;

		/** A list of the resources included in this shared flow revision formatted as "{type}://{name}". */
		resources?: Array<string>;

		/** The resource ID of this revision. */
		revision?: string | null;

		/** A list of the shared flow names included in this shared flow revision. */
		sharedFlows?: Array<string>;

		/** The string "Application" */
		type?: string | null;
	}

	/** The metadata describing a shared flow revision. */
	export interface GoogleCloudApigeeV1SharedFlowRevisionFormProperties {

		/** A textual description of the shared flow revision. */
		contextInfo: FormControl<string | null | undefined>,

		/** Time at which this shared flow revision was created, in milliseconds since epoch. */
		createdAt: FormControl<string | null | undefined>,

		/** Description of the shared flow revision. */
		description: FormControl<string | null | undefined>,

		/** The human readable name of this shared flow. */
		displayName: FormControl<string | null | undefined>,

		/** A Key-Value map of metadata about this shared flow revision. */
		entityMetaDataAsProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Time at which this shared flow revision was most recently modified, in milliseconds since epoch. */
		lastModifiedAt: FormControl<string | null | undefined>,

		/** The resource ID of the parent shared flow. */
		name: FormControl<string | null | undefined>,

		/** The resource ID of this revision. */
		revision: FormControl<string | null | undefined>,

		/** The string "Application" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SharedFlowRevisionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SharedFlowRevisionFormProperties>({
			contextInfo: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityMetaDataAsProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastModifiedAt: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a `stats` response. */
	export interface GoogleCloudApigeeV1Stats {

		/** List of query results on the environment level. */
		environments?: Array<GoogleCloudApigeeV1StatsEnvironmentStats>;

		/** List of query results grouped by host. */
		hosts?: Array<GoogleCloudApigeeV1StatsHostStats>;

		/** Encapsulates additional information about query execution. */
		metaData?: GoogleCloudApigeeV1Metadata;
	}

	/** Encapsulates a `stats` response. */
	export interface GoogleCloudApigeeV1StatsFormProperties {
	}
	export function CreateGoogleCloudApigeeV1StatsFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1StatsFormProperties>({
		});

	}


	/** Encapsulates the environment wrapper: ``` "environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "prod" } ]``` */
	export interface GoogleCloudApigeeV1StatsEnvironmentStats {

		/** List of metrics grouped under dimensions. */
		dimensions?: Array<GoogleCloudApigeeV1DimensionMetric>;

		/** In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only top-level metrics is provided. If dimensions are included, then there will be a top-level dimensions field under environments which will contain metrics values and the dimension name. Example: ``` "environments": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "prod" } ]``` or ```"environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "prod" } ]``` List of metric values. */
		metrics?: Array<GoogleCloudApigeeV1Metric>;

		/** Name of the environment. */
		name?: string | null;
	}

	/** Encapsulates the environment wrapper: ``` "environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "prod" } ]``` */
	export interface GoogleCloudApigeeV1StatsEnvironmentStatsFormProperties {

		/** Name of the environment. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1StatsEnvironmentStatsFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1StatsEnvironmentStatsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates the hostname wrapper: ``` "hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "example.com" } ]``` */
	export interface GoogleCloudApigeeV1StatsHostStats {

		/** List of metrics grouped under dimensions. */
		dimensions?: Array<GoogleCloudApigeeV1DimensionMetric>;

		/** In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only the top-level metrics are provided. If dimensions are included, then there will be a top-level dimensions field under hostnames which will contain metrics values and the dimension name. Example: ``` "hosts": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "example.com" } ]``` OR ```"hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "example.com" } ]``` List of metric values. */
		metrics?: Array<GoogleCloudApigeeV1Metric>;

		/** Hostname used in query. */
		name?: string | null;
	}

	/** Encapsulates the hostname wrapper: ``` "hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "example.com" } ]``` */
	export interface GoogleCloudApigeeV1StatsHostStatsFormProperties {

		/** Hostname used in query. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1StatsHostStatsFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1StatsHostStatsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pub/Sub subscription of an environment. */
	export interface GoogleCloudApigeeV1Subscription {

		/** Full name of the Pub/Sub subcription. Use the following structure in your request: `subscription "projects/foo/subscription/bar"` */
		name?: string | null;
	}

	/** Pub/Sub subscription of an environment. */
	export interface GoogleCloudApigeeV1SubscriptionFormProperties {

		/** Full name of the Pub/Sub subcription. Use the following structure in your request: `subscription "projects/foo/subscription/bar"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SubscriptionFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SubscriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1SyncAuthorization {

		/** Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions. */
		etag?: string | null;

		/** Required. Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:` service-account-name. The service-account-name is formatted like an email address. For example: `my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com` You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts). */
		identities?: Array<string>;
	}
	export interface GoogleCloudApigeeV1SyncAuthorizationFormProperties {

		/** Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1SyncAuthorizationFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1SyncAuthorizationFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from concrete URLs for backend services. */
	export interface GoogleCloudApigeeV1TargetServer {

		/** Optional. A human-readable description of this TargetServer. */
		description?: string | null;

		/** Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123. */
		host?: string | null;

		/** Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true. */
		isEnabled?: boolean | null;

		/** Required. The resource id of this target server. Values must match the regular expression */
		name?: string | null;

		/**
		 * Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Immutable. The protocol used by this TargetServer. */
		protocol?: GoogleCloudApigeeV1TargetServerConfigProtocol | null;

		/** TLS configuration information for virtual hosts and TargetServers. */
		sSLInfo?: GoogleCloudApigeeV1TlsInfo;
	}

	/** TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from concrete URLs for backend services. */
	export interface GoogleCloudApigeeV1TargetServerFormProperties {

		/** Optional. A human-readable description of this TargetServer. */
		description: FormControl<string | null | undefined>,

		/** Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123. */
		host: FormControl<string | null | undefined>,

		/** Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true. */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Required. The resource id of this target server. Values must match the regular expression */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Immutable. The protocol used by this TargetServer. */
		protocol: FormControl<GoogleCloudApigeeV1TargetServerConfigProtocol | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TargetServerFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TargetServerFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<GoogleCloudApigeeV1TargetServerConfigProtocol | null | undefined>(undefined),
		});

	}


	/** TLS configuration information for virtual hosts and TargetServers. */
	export interface GoogleCloudApigeeV1TlsInfo {

		/** The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3. */
		ciphers?: Array<string>;

		/** Optional. Enables two-way TLS. */
		clientAuthEnabled?: boolean | null;
		commonName?: GoogleCloudApigeeV1TlsInfoCommonName;

		/** Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled. */
		enabled?: boolean | null;

		/** If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails. */
		ignoreValidationErrors?: boolean | null;

		/** Required if `client_auth_enabled` is true. The resource ID for the alias containing the private key and cert. */
		keyAlias?: string | null;

		/** Required if `client_auth_enabled` is true. The resource ID of the keystore. */
		keyStore?: string | null;

		/** The TLS versioins to be used. */
		protocols?: Array<string>;

		/** The resource ID of the truststore. */
		trustStore?: string | null;
	}

	/** TLS configuration information for virtual hosts and TargetServers. */
	export interface GoogleCloudApigeeV1TlsInfoFormProperties {

		/** Optional. Enables two-way TLS. */
		clientAuthEnabled: FormControl<boolean | null | undefined>,

		/** Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails. */
		ignoreValidationErrors: FormControl<boolean | null | undefined>,

		/** Required if `client_auth_enabled` is true. The resource ID for the alias containing the private key and cert. */
		keyAlias: FormControl<string | null | undefined>,

		/** Required if `client_auth_enabled` is true. The resource ID of the keystore. */
		keyStore: FormControl<string | null | undefined>,

		/** The resource ID of the truststore. */
		trustStore: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TlsInfoFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TlsInfoFormProperties>({
			clientAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			ignoreValidationErrors: new FormControl<boolean | null | undefined>(undefined),
			keyAlias: new FormControl<string | null | undefined>(undefined),
			keyStore: new FormControl<string | null | undefined>(undefined),
			trustStore: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudApigeeV1TlsInfoCommonName {

		/** The TLS Common Name string of the certificate. */
		value?: string | null;

		/** Indicates whether the cert should be matched against as a wildcard cert. */
		wildcardMatch?: boolean | null;
	}
	export interface GoogleCloudApigeeV1TlsInfoCommonNameFormProperties {

		/** The TLS Common Name string of the certificate. */
		value: FormControl<string | null | undefined>,

		/** Indicates whether the cert should be matched against as a wildcard cert. */
		wildcardMatch: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TlsInfoCommonNameFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TlsInfoCommonNameFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			wildcardMatch: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response for TestDatastore */
	export interface GoogleCloudApigeeV1TestDatastoreResponse {

		/** Output only. Error message of test connection failure */
		error?: string | null;

		/** Output only. It could be `completed` or `failed` */
		state?: string | null;
	}

	/** The response for TestDatastore */
	export interface GoogleCloudApigeeV1TestDatastoreResponseFormProperties {

		/** Output only. Error message of test connection failure */
		error: FormControl<string | null | undefined>,

		/** Output only. It could be `completed` or `failed` */
		state: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TestDatastoreResponseFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TestDatastoreResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TraceConfig defines the configurations in an environment of distributed trace. */
	export interface GoogleCloudApigeeV1TraceConfig {

		/** Required. Endpoint of the exporter. */
		endpoint?: string | null;

		/** Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters. */
		exporter?: GoogleCloudApigeeV1RuntimeTraceConfigExporter | null;

		/** TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs. */
		samplingConfig?: GoogleCloudApigeeV1TraceSamplingConfig;
	}

	/** TraceConfig defines the configurations in an environment of distributed trace. */
	export interface GoogleCloudApigeeV1TraceConfigFormProperties {

		/** Required. Endpoint of the exporter. */
		endpoint: FormControl<string | null | undefined>,

		/** Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters. */
		exporter: FormControl<GoogleCloudApigeeV1RuntimeTraceConfigExporter | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1TraceConfigFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1TraceConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			exporter: new FormControl<GoogleCloudApigeeV1RuntimeTraceConfigExporter | null | undefined>(undefined),
		});

	}


	/** Request for UpdateAppGroupAppKey */
	export interface GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest {

		/** Approve or revoke the consumer key by setting this value to `approve` or `revoke` respectively. The `Content-Type` header, if set, must be set to `application/octet-stream`, with empty body. */
		action?: string | null;

		/** The list of API products that will be associated with the credential. This list will be appended to the existing list of associated API Products for this App Key. Duplicates will be ignored. */
		apiProducts?: Array<string>;

		/** AppGroupAppKey contains all the information associated with the credentials. */
		appGroupAppKey?: GoogleCloudApigeeV1AppGroupAppKey;
	}

	/** Request for UpdateAppGroupAppKey */
	export interface GoogleCloudApigeeV1UpdateAppGroupAppKeyRequestFormProperties {

		/** Approve or revoke the consumer key by setting this value to `approve` or `revoke` respectively. The `Content-Type` header, if set, must be set to `application/octet-stream`, with empty body. */
		action: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudApigeeV1UpdateAppGroupAppKeyRequestFormGroup() {
		return new FormGroup<GoogleCloudApigeeV1UpdateAppGroupAppKeyRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<GoogleIamV1AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1AuditConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: GoogleIamV1AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>,
	}
	export function CreateGoogleIamV1AuditLogConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditLogConfigFormProperties>({
			logType: new FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingFormGroup() {
		return new FormGroup<GoogleIamV1BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExpr {

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
	export interface GoogleTypeExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeExprFormGroup() {
		return new FormGroup<GoogleTypeExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<GoogleIamV1AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<GoogleIamV1Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1PolicyFormGroup() {
		return new FormGroup<GoogleIamV1PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: GoogleIamV1Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1SetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequestFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsRequestFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponseFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsResponseFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsResponseFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
		 * Post v1/organizations
		 * @param {string} parent Required. Name of the Google Cloud project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: `projects/`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_create(parent: string | null | undefined, requestBody: GoogleCloudApigeeV1Organization): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/organizations?parent=' + (parent == null ? '' : encodeURIComponent(parent)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports the latest status for a runtime instance.
		 * Post v1/{instance}:reportStatus
		 * @param {string} instance The name of the instance reporting this status. For SaaS the request will be rejected if no instance exists under this name. Format is organizations/{org}/instances/{instance}
		 * @return {GoogleCloudApigeeV1ReportInstanceStatusResponse} Successful response
		 */
		Apigee_organizations_instances_reportStatus(instance: string, requestBody: GoogleCloudApigeeV1ReportInstanceStatusRequest): Observable<GoogleCloudApigeeV1ReportInstanceStatusResponse> {
			return this.http.post<GoogleCloudApigeeV1ReportInstanceStatusResponse>(this.baseUri + 'v1/' + (instance == null ? '' : encodeURIComponent(instance)) + ':reportStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an API category.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
		 * @param {Apigee_organizations_sites_apicategories_deleteRetention} retention Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType is not EVALUATION). It controls how long Organization data will be retained after the initial delete operation completes. During this period, the Organization may be restored to its last known state. After this period, the Organization will no longer be able to be restored.
		 * @return {GoogleCloudApigeeV1DeleteResponse} Successful response
		 */
		Apigee_organizations_sites_apicategories_delete(name: string, retention: Apigee_organizations_sites_apicategories_deleteRetention | null | undefined): Observable<GoogleCloudApigeeV1DeleteResponse> {
			return this.http.delete<GoogleCloudApigeeV1DeleteResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&retention=' + retention, {});
		}

		/**
		 * Gets an API category.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
		 * @param {Apigee_organizations_sites_apicategories_getFormat} format Specify `bundle` to export the contents of the shared flow bundle. Otherwise, the bundle metadata is returned.
		 * @param {string} envgroupHostname Required. Hostname for which the interactive query will be executed.
		 * @param {string} filter Filter that enables you to drill-down on specific dimension values.
		 * @param {string} limit Maximum number of result items to return. The default and maximum value that can be returned is 14400.
		 * @param {string} offset Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`.
		 * @param {boolean} realtime No longer used by Apigee. Supported for backwards compatibility.
		 * @param {string} select Required. Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)`
		 * @param {string} sort Flag that specifies whether the sort order should be ascending or descending. Valid values include `DESC` and `ASC`.
		 * @param {string} sortby Comma-separated list of columns used to sort the final result.
		 * @param {string} timeRange Required. Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`.
		 * @param {string} timeUnit Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`.
		 * @param {string} topk Top number of results to return. For example, to return the top 5 results, set `topk=5`.
		 * @param {boolean} tsAscending Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`.
		 * @param {string} tzo Timezone offset value.
		 * @return {GoogleCloudApigeeV1ApiCategoryResponse} Successful response
		 */
		Apigee_organizations_sites_apicategories_get(name: string, format: Apigee_organizations_sites_apicategories_getFormat | null | undefined, envgroupHostname: string | null | undefined, filter: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, realtime: boolean | null | undefined, select: string | null | undefined, sort: string | null | undefined, sortby: string | null | undefined, timeRange: string | null | undefined, timeUnit: string | null | undefined, topk: string | null | undefined, tsAscending: boolean | null | undefined, tzo: string | null | undefined): Observable<GoogleCloudApigeeV1ApiCategoryResponse> {
			return this.http.get<GoogleCloudApigeeV1ApiCategoryResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&format=' + format + '&envgroupHostname=' + (envgroupHostname == null ? '' : encodeURIComponent(envgroupHostname)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&realtime=' + realtime + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sortby=' + (sortby == null ? '' : encodeURIComponent(sortby)) + '&timeRange=' + (timeRange == null ? '' : encodeURIComponent(timeRange)) + '&timeUnit=' + (timeUnit == null ? '' : encodeURIComponent(timeUnit)) + '&topk=' + (topk == null ? '' : encodeURIComponent(topk)) + '&tsAscending=' + tsAscending + '&tzo=' + (tzo == null ? '' : encodeURIComponent(tzo)), {});
		}

		/**
		 * Updates an API category.
		 * Patch v1/{name}
		 * @param {string} name Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
		 * @param {string} updateMask Required. The list of fields to update.
		 * @return {GoogleCloudApigeeV1ApiCategoryResponse} Successful response
		 */
		Apigee_organizations_sites_apicategories_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudApigeeV1ApiCategory): Observable<GoogleCloudApigeeV1ApiCategoryResponse> {
			return this.http.patch<GoogleCloudApigeeV1ApiCategoryResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.
		 * Post v1/{name}
		 * @param {string} name Required. The name of the shared flow revision to update. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}`
		 * @param {boolean} validate Ignored. All uploads are validated regardless of the value of this field. It is kept for compatibility with existing APIs. Must be `true` or `false` if provided.
		 * @return {GoogleCloudApigeeV1SharedFlowRevision} Successful response
		 */
		Apigee_organizations_sharedflows_revisions_updateSharedFlowRevision(name: string, validate: boolean | null | undefined, requestBody: GoogleApiHttpBody): Observable<GoogleCloudApigeeV1SharedFlowRevision> {
			return this.http.post<GoogleCloudApigeeV1SharedFlowRevision>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&validate=' + validate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an existing custom report definition
		 * Put v1/{name}
		 * @param {string} name Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}`
		 * @param {boolean} ignoreExpiryValidation Required. Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.
		 * @param {boolean} ignoreNewlineValidation Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.
		 * @return {GoogleCloudApigeeV1CustomReport} Successful response
		 */
		Apigee_organizations_reports_update(name: string, ignoreExpiryValidation: boolean | null | undefined, ignoreNewlineValidation: boolean | null | undefined, requestBody: GoogleCloudApigeeV1CustomReport): Observable<GoogleCloudApigeeV1CustomReport> {
			return this.http.put<GoogleCloudApigeeV1CustomReport>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&ignoreExpiryValidation=' + ignoreExpiryValidation + '&ignoreNewlineValidation=' + ignoreNewlineValidation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.
		 * Post v1/{name}/attributes
		 * @param {string} name Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
		 * @return {GoogleCloudApigeeV1Attributes} Successful response
		 */
		Apigee_organizations_developers_apps_attributes(name: string, requestBody: GoogleCloudApigeeV1Attributes): Observable<GoogleCloudApigeeV1Attributes> {
			return this.http.post<GoogleCloudApigeeV1Attributes>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the certificate from an alias in PEM-encoded form.
		 * Get v1/{name}/certificate
		 * @param {string} name Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.
		 * @return {GoogleApiHttpBody} Successful response
		 */
		Apigee_organizations_environments_keystores_aliases_getCertificate(name: string): Observable<GoogleApiHttpBody> {
			return this.http.get<GoogleApiHttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/certificate', {});
		}

		/**
		 * Generates a PKCS #10 Certificate Signing Request for the private key in an alias.
		 * Get v1/{name}/csr
		 * @param {string} name Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.
		 * @return {GoogleApiHttpBody} Successful response
		 */
		Apigee_organizations_environments_keystores_aliases_csr(name: string): Observable<GoogleApiHttpBody> {
			return this.http.get<GoogleApiHttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/csr', {});
		}

		/**
		 * Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.
		 * Delete v1/{name}/data
		 * @param {string} name Required. The name of the debug session to delete. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debugsession}`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Apigee_organizations_environments_apis_revisions_debugsessions_deleteData(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/data', {});
		}

		/**
		 * Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
		 * Delete v1/{name}/deployments
		 * @param {string} name Required. Name of the shared flow revision to undeploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`
		 * @param {boolean} sequencedRollout Flag that specifies whether to enable sequenced rollout. If set to `true`, the environment group routing rules corresponding to this deployment will be removed before removing the deployment from the runtime. This is likely to be a rare use case; it is only needed when the intended effect of undeploying this proxy is to cause the traffic it currently handles to be rerouted to some other existing proxy in the environment group. The GenerateUndeployChangeReport API may be used to examine routing changes before issuing the undeployment request, and its response will indicate if a sequenced rollout is recommended for the undeployment.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Apigee_organizations_environments_sharedflows_revisions_undeploy(name: string, sequencedRollout: boolean | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments&sequencedRollout=' + sequencedRollout, {});
		}

		/**
		 * Gets the deployment of a shared flow revision and actual state reported by runtime pods.
		 * Get v1/{name}/deployments
		 * @param {string} name Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`
		 * @return {GoogleCloudApigeeV1Deployment} Successful response
		 */
		Apigee_organizations_environments_sharedflows_revisions_getDeployments(name: string): Observable<GoogleCloudApigeeV1Deployment> {
			return this.http.get<GoogleCloudApigeeV1Deployment>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments', {});
		}

		/**
		 * Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
		 * Post v1/{name}/deployments
		 * @param {string} name Required. Name of the shared flow revision to deploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`
		 * @param {boolean} override Flag that specifies whether the new deployment replaces other deployed revisions of the shared flow in the environment. Set `override` to `true` to replace other deployed revisions. By default, `override` is `false` and the deployment is rejected if other revisions of the shared flow are deployed in the environment.
		 * @param {string} serviceAccount Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be `{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`.
		 * @return {GoogleCloudApigeeV1Deployment} Successful response
		 */
		Apigee_organizations_environments_sharedflows_revisions_deploy(name: string, override: boolean | null | undefined, serviceAccount: string | null | undefined): Observable<GoogleCloudApigeeV1Deployment> {
			return this.http.post<GoogleCloudApigeeV1Deployment>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments&override=' + override + '&serviceAccount=' + (serviceAccount == null ? '' : encodeURIComponent(serviceAccount)), null, {});
		}

		/**
		 * Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
		 * Post v1/{name}/deployments:generateDeployChangeReport
		 * @param {string} name Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`
		 * @param {boolean} override Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks.
		 * @return {GoogleCloudApigeeV1DeploymentChangeReport} Successful response
		 */
		Apigee_organizations_environments_apis_revisions_deployments_generateDeployChangeReport(name: string, override: boolean | null | undefined): Observable<GoogleCloudApigeeV1DeploymentChangeReport> {
			return this.http.post<GoogleCloudApigeeV1DeploymentChangeReport>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments:generateDeployChangeReport&override=' + override, null, {});
		}

		/**
		 * Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
		 * Post v1/{name}/deployments:generateUndeployChangeReport
		 * @param {string} name Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`
		 * @return {GoogleCloudApigeeV1DeploymentChangeReport} Successful response
		 */
		Apigee_organizations_environments_apis_revisions_deployments_generateUndeployChangeReport(name: string): Observable<GoogleCloudApigeeV1DeploymentChangeReport> {
			return this.http.post<GoogleCloudApigeeV1DeploymentChangeReport>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments:generateUndeployChangeReport', null, {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Apigee_organizations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.
		 * Post v1/{name}:activate
		 * @param {string} name Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}``
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_instances_natAddresses_activate(name: string, requestBody: GoogleCloudApigeeV1ActivateNatAddressRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.
		 * Post v1/{name}:adjust
		 * @param {string} name Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`
		 * @return {GoogleCloudApigeeV1DeveloperBalance} Successful response
		 */
		Apigee_organizations_developers_balance_adjust(name: string, requestBody: GoogleCloudApigeeV1AdjustDeveloperBalanceRequest): Observable<GoogleCloudApigeeV1DeveloperBalance> {
			return this.http.post<GoogleCloudApigeeV1DeveloperBalance>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':adjust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Credits the account balance for the developer.
		 * Post v1/{name}:credit
		 * @param {string} name Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`
		 * @return {GoogleCloudApigeeV1DeveloperBalance} Successful response
		 */
		Apigee_organizations_developers_balance_credit(name: string, requestBody: GoogleCloudApigeeV1CreditDeveloperBalanceRequest): Observable<GoogleCloudApigeeV1DeveloperBalance> {
			return this.http.post<GoogleCloudApigeeV1DeveloperBalance>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':credit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a SecurityAction. The `state` of the SecurityAction after disabling is `DISABLED`. `DisableSecurityAction` can be called on SecurityActions in the state `ENABLED`; SecurityActions in a different state (including `DISABLED`) return an error.
		 * Post v1/{name}:disable
		 * @param {string} name Required. The name of the SecurityAction to disable. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
		 * @return {GoogleCloudApigeeV1SecurityAction} Successful response
		 */
		Apigee_organizations_environments_securityActions_disable(name: string, requestBody: GoogleCloudApigeeV1DisableSecurityActionRequest): Observable<GoogleCloudApigeeV1SecurityAction> {
			return this.http.post<GoogleCloudApigeeV1SecurityAction>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable a SecurityAction. The `state` of the SecurityAction after enabling is `ENABLED`. `EnableSecurityAction` can be called on SecurityActions in the state `DISABLED`; SecurityActions in a different state (including `ENABLED) return an error.
		 * Post v1/{name}:enable
		 * @param {string} name Required. The name of the SecurityAction to enable. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
		 * @return {GoogleCloudApigeeV1SecurityAction} Successful response
		 */
		Apigee_organizations_environments_securityActions_enable(name: string, requestBody: GoogleCloudApigeeV1EnableSecurityActionRequest): Observable<GoogleCloudApigeeV1SecurityAction> {
			return this.http.post<GoogleCloudApigeeV1SecurityAction>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Expires an API product subscription immediately.
		 * Post v1/{name}:expire
		 * @param {string} name Required. Name of the API product subscription. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/subscriptions/{subscription}`
		 * @return {GoogleCloudApigeeV1DeveloperSubscription} Successful response
		 */
		Apigee_organizations_developers_subscriptions_expire(name: string, requestBody: GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest): Observable<GoogleCloudApigeeV1DeveloperSubscription> {
			return this.http.post<GoogleCloudApigeeV1DeveloperSubscription>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':expire', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.
		 * Post v1/{name}:generateDownloadUrl
		 * @param {string} name Required. The name of the Archive Deployment you want to download.
		 * @return {GoogleCloudApigeeV1GenerateDownloadUrlResponse} Successful response
		 */
		Apigee_organizations_environments_archiveDeployments_generateDownloadUrl(name: string, requestBody: GoogleCloudApigeeV1GenerateDownloadUrlRequest): Observable<GoogleCloudApigeeV1GenerateDownloadUrlResponse> {
			return this.http.post<GoogleCloudApigeeV1GenerateDownloadUrlResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':generateDownloadUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the project ID and region for an Apigee organization.
		 * Get v1/{name}:getProjectMapping
		 * @param {string} name Required. Apigee organization name in the following format: `organizations/{org}`
		 * @return {GoogleCloudApigeeV1OrganizationProjectMapping} Successful response
		 */
		Apigee_organizations_getProjectMapping(name: string): Observable<GoogleCloudApigeeV1OrganizationProjectMapping> {
			return this.http.get<GoogleCloudApigeeV1OrganizationProjectMapping>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getProjectMapping', {});
		}

		/**
		 * Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
		 * Post v1/{name}:getSyncAuthorization
		 * @param {string} name Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`
		 * @return {GoogleCloudApigeeV1SyncAuthorization} Successful response
		 */
		Apigee_organizations_getSyncAuthorization(name: string, requestBody: GoogleCloudApigeeV1GetSyncAuthorizationRequest): Observable<GoogleCloudApigeeV1SyncAuthorization> {
			return this.http.post<GoogleCloudApigeeV1SyncAuthorization>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getSyncAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListSecurityProfileRevisions lists all the revisions of the security profile.
		 * Get v1/{name}:listRevisions
		 * @param {string} name Required. For a specific profile, list all the revisions. Format: `organizations/{org}/securityProfiles/{profile}`
		 * @param {number} pageSize The maximum number of profile revisions to return. The service may return fewer than this value. If unspecified, at most 50 revisions will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListSecurityProfileRevisions` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse} Successful response
		 */
		Apigee_organizations_securityProfiles_listRevisions(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':listRevisions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates an add-on enablement status of an environment.
		 * Post v1/{name}:setAddonEnablement
		 * @param {string} name Required. Name of the add-ons config. Must be in the format of `/organizations/{org}/environments/{env}/addonsConfig`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_environments_addonsConfig_setAddonEnablement(name: string, requestBody: GoogleCloudApigeeV1SetAddonEnablementRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setAddonEnablement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
		 * Post v1/{name}:setSyncAuthorization
		 * @param {string} name Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`
		 * @return {GoogleCloudApigeeV1SyncAuthorization} Successful response
		 */
		Apigee_organizations_setSyncAuthorization(name: string, requestBody: GoogleCloudApigeeV1SyncAuthorization): Observable<GoogleCloudApigeeV1SyncAuthorization> {
			return this.http.post<GoogleCloudApigeeV1SyncAuthorization>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setSyncAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve security statistics as tabular rows.
		 * Post v1/{orgenv}/securityStats:queryTabularStats
		 * @param {string} orgenv Required. Should be of the form organizations//environments/.
		 * @return {GoogleCloudApigeeV1QueryTabularStatsResponse} Successful response
		 */
		Apigee_organizations_environments_securityStats_queryTabularStats(orgenv: string, requestBody: GoogleCloudApigeeV1QueryTabularStatsRequest): Observable<GoogleCloudApigeeV1QueryTabularStatsResponse> {
			return this.http.post<GoogleCloudApigeeV1QueryTabularStatsResponse>(this.baseUri + 'v1/' + (orgenv == null ? '' : encodeURIComponent(orgenv)) + '/securityStats:queryTabularStats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve security statistics as a collection of time series.
		 * Post v1/{orgenv}/securityStats:queryTimeSeriesStats
		 * @param {string} orgenv Required. Should be of the form organizations//environments/.
		 * @return {GoogleCloudApigeeV1QueryTimeSeriesStatsResponse} Successful response
		 */
		Apigee_organizations_environments_securityStats_queryTimeSeriesStats(orgenv: string, requestBody: GoogleCloudApigeeV1QueryTimeSeriesStatsRequest): Observable<GoogleCloudApigeeV1QueryTimeSeriesStatsResponse> {
			return this.http.post<GoogleCloudApigeeV1QueryTimeSeriesStatsResponse>(this.baseUri + 'v1/' + (orgenv == null ? '' : encodeURIComponent(orgenv)) + '/securityStats:queryTimeSeriesStats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.
		 * Post v1/{org}:setAddons
		 * @param {string} org Required. Name of the organization. Use the following structure in your request: `organizations/{org}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_setAddons(org: string, requestBody: GoogleCloudApigeeV1SetAddonsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (org == null ? '' : encodeURIComponent(org)) + ':setAddons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).
		 * Get v1/{parent}
		 * @param {string} parent Required. Use the following structure in your request: `organizations`
		 * @return {GoogleCloudApigeeV1ListOrganizationsResponse} Successful response
		 */
		Apigee_organizations_list(parent: string): Observable<GoogleCloudApigeeV1ListOrganizationsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListOrganizationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.
		 * Post v1/{parent}/aliases
		 * @param {string} parent Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`.
		 * @param {string} _password DEPRECATED: For improved security, specify the password in the request body instead of using the query parameter. To specify the password in the request body, set `Content-type: multipart/form-data` part with name `password`. Password for the private key file, if required.
		 * @param {string} alias Alias for the key/certificate pair. Values must match the regular expression `[\w\s-.]{1,255}`. This must be provided for all formats except `selfsignedcert`; self-signed certs may specify the alias in either this parameter or the JSON body.
		 * @param {string} format Required. Format of the data. Valid values include: `selfsignedcert`, `keycertfile`, or `pkcs12`
		 * @param {boolean} ignoreExpiryValidation Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.
		 * @param {boolean} ignoreNewlineValidation Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.
		 * @return {GoogleCloudApigeeV1Alias} Successful response
		 */
		Apigee_organizations_environments_keystores_aliases_create(parent: string, _password: string | null | undefined, alias: string | null | undefined, format: string | null | undefined, ignoreExpiryValidation: boolean | null | undefined, ignoreNewlineValidation: boolean | null | undefined, requestBody: GoogleApiHttpBody): Observable<GoogleCloudApigeeV1Alias> {
			return this.http.post<GoogleCloudApigeeV1Alias>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/aliases&_password=' + (_password == null ? '' : encodeURIComponent(_password)) + '&alias=' + (alias == null ? '' : encodeURIComponent(alias)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&ignoreExpiryValidation=' + ignoreExpiryValidation + '&ignoreNewlineValidation=' + ignoreNewlineValidation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Datastores
		 * Get v1/{parent}/analytics/datastores
		 * @param {string} parent Required. The parent organization name. Must be of the form `organizations/{org}`.
		 * @param {string} targetType Optional. TargetType is used to fetch all Datastores that match the type
		 * @return {GoogleCloudApigeeV1ListDatastoresResponse} Successful response
		 */
		Apigee_organizations_analytics_datastores_list(parent: string, targetType: string | null | undefined): Observable<GoogleCloudApigeeV1ListDatastoresResponse> {
			return this.http.get<GoogleCloudApigeeV1ListDatastoresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/analytics/datastores&targetType=' + (targetType == null ? '' : encodeURIComponent(targetType)), {});
		}

		/**
		 * Create a Datastore for an org
		 * Post v1/{parent}/analytics/datastores
		 * @param {string} parent Required. The parent organization name. Must be of the form `organizations/{org}`.
		 * @return {GoogleCloudApigeeV1Datastore} Successful response
		 */
		Apigee_organizations_analytics_datastores_create(parent: string, requestBody: GoogleCloudApigeeV1Datastore): Observable<GoogleCloudApigeeV1Datastore> {
			return this.http.post<GoogleCloudApigeeV1Datastore>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/analytics/datastores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage
		 * Post v1/{parent}/analytics/datastores:test
		 * @param {string} parent Required. The parent organization name Must be of the form `organizations/{org}`
		 * @return {GoogleCloudApigeeV1TestDatastoreResponse} Successful response
		 */
		Apigee_organizations_analytics_datastores_test(parent: string, requestBody: GoogleCloudApigeeV1Datastore): Observable<GoogleCloudApigeeV1TestDatastoreResponse> {
			return this.http.post<GoogleCloudApigeeV1TestDatastoreResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/analytics/datastores:test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the details and status of all analytics export jobs belonging to the parent organization and environment.
		 * Get v1/{parent}/analytics/exports
		 * @param {string} parent Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.
		 * @return {GoogleCloudApigeeV1ListExportsResponse} Successful response
		 */
		Apigee_organizations_environments_analytics_exports_list(parent: string): Observable<GoogleCloudApigeeV1ListExportsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListExportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/analytics/exports', {});
		}

		/**
		 * Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".
		 * Post v1/{parent}/analytics/exports
		 * @param {string} parent Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.
		 * @return {GoogleCloudApigeeV1Export} Successful response
		 */
		Apigee_organizations_environments_analytics_exports_create(parent: string, requestBody: GoogleCloudApigeeV1ExportRequest): Observable<GoogleCloudApigeeV1Export> {
			return this.http.post<GoogleCloudApigeeV1Export>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/analytics/exports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the API categories associated with a portal.
		 * Get v1/{parent}/apicategories
		 * @param {string} parent Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
		 * @return {GoogleCloudApigeeV1ListApiCategoriesResponse} Successful response
		 */
		Apigee_organizations_sites_apicategories_list(parent: string): Observable<GoogleCloudApigeeV1ListApiCategoriesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListApiCategoriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apicategories', {});
		}

		/**
		 * Creates a new API category.
		 * Post v1/{parent}/apicategories
		 * @param {string} parent Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
		 * @return {GoogleCloudApigeeV1ApiCategoryResponse} Successful response
		 */
		Apigee_organizations_sites_apicategories_create(parent: string, requestBody: GoogleCloudApigeeV1ApiCategory): Observable<GoogleCloudApigeeV1ApiCategoryResponse> {
			return this.http.post<GoogleCloudApigeeV1ApiCategoryResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apicategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters.
		 * Get v1/{parent}/apiproducts
		 * @param {string} parent Required. Name of the organization. Use the following structure in your request: `organizations/{org}`
		 * @param {string} attributename Name of the attribute used to filter the search.
		 * @param {string} attributevalue Value of the attribute used to filter the search.
		 * @param {string} count Enter the number of API products you want returned in the API call. The limit is 1000.
		 * @param {boolean} expand Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API.
		 * @param {string} startKey Gets a list of API products starting with a specific API product in the list. For example, if you're returning 50 API products at a time (using the `count` query parameter), you can view products 50-99 by entering the name of the 50th API product in the first API (without using `startKey`). Product name is case sensitive.
		 * @return {GoogleCloudApigeeV1ListApiProductsResponse} Successful response
		 */
		Apigee_organizations_apiproducts_list(parent: string, attributename: string | null | undefined, attributevalue: string | null | undefined, count: string | null | undefined, expand: boolean | null | undefined, startKey: string | null | undefined): Observable<GoogleCloudApigeeV1ListApiProductsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListApiProductsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apiproducts&attributename=' + (attributename == null ? '' : encodeURIComponent(attributename)) + '&attributevalue=' + (attributevalue == null ? '' : encodeURIComponent(attributevalue)) + '&count=' + (count == null ? '' : encodeURIComponent(count)) + '&expand=' + expand + '&startKey=' + (startKey == null ? '' : encodeURIComponent(startKey)), {});
		}

		/**
		 * Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?
		 * Post v1/{parent}/apiproducts
		 * @param {string} parent Required. Name of the organization in which the API product will be created. Use the following structure in your request: `organizations/{org}`
		 * @return {GoogleCloudApigeeV1ApiProduct} Successful response
		 */
		Apigee_organizations_apiproducts_create(parent: string, requestBody: GoogleCloudApigeeV1ApiProduct): Observable<GoogleCloudApigeeV1ApiProduct> {
			return this.http.post<GoogleCloudApigeeV1ApiProduct>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apiproducts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.
		 * Get v1/{parent}/apis
		 * @param {string} parent Required. Name of the organization in the following format: `organizations/{org}`
		 * @param {boolean} includeMetaData Flag that specifies whether to include API proxy metadata in the response.
		 * @param {boolean} includeRevisions Flag that specifies whether to include a list of revisions in the response.
		 * @return {GoogleCloudApigeeV1ListApiProxiesResponse} Successful response
		 */
		Apigee_organizations_apis_list(parent: string, includeMetaData: boolean | null | undefined, includeRevisions: boolean | null | undefined): Observable<GoogleCloudApigeeV1ListApiProxiesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListApiProxiesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apis&includeMetaData=' + includeMetaData + '&includeRevisions=' + includeRevisions, {});
		}

		/**
		 * Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.
		 * Post v1/{parent}/apis
		 * @param {string} parent Required. Name of the organization in the following format: `organizations/{org}`
		 * @param {string} action Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values: * `import` to import the API proxy configuration bundle. * `validate` to validate the API proxy configuration bundle without importing it.
		 * @param {string} name Name of the API proxy. Restrict the characters used to: A-Za-z0-9._-
		 * @param {boolean} validate Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.
		 * @return {GoogleCloudApigeeV1ApiProxyRevision} Successful response
		 */
		Apigee_organizations_apis_create(parent: string, action: string | null | undefined, name: string | null | undefined, validate: boolean | null | undefined, requestBody: GoogleApiHttpBody): Observable<GoogleCloudApigeeV1ApiProxyRevision> {
			return this.http.post<GoogleCloudApigeeV1ApiProxyRevision>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apis&action=' + (action == null ? '' : encodeURIComponent(action)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&validate=' + validate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all AppGroups in an organization. A maximum of 1000 AppGroups are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.
		 * Get v1/{parent}/appgroups
		 * @param {string} parent Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`.
		 * @param {string} filter The filter expression to be used to get the list of AppGroups, where filtering can be done on status, channelId or channelUri of the app group. Examples: filter=status=active", filter=channelId=, filter=channelUri=
		 * @param {number} pageSize Count of AppGroups a single page can have in the response. If unspecified, at most 1000 AppGroups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The starting index record for listing the AppGroups.
		 * @return {GoogleCloudApigeeV1ListAppGroupsResponse} Successful response
		 */
		Apigee_organizations_appgroups_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListAppGroupsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListAppGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appgroups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as `active`.
		 * Post v1/{parent}/appgroups
		 * @param {string} parent Required. Name of the Apigee organization in which the AppGroup is created. Use the following structure in your request: `organizations/{org}`.
		 * @return {GoogleCloudApigeeV1AppGroup} Successful response
		 */
		Apigee_organizations_appgroups_create(parent: string, requestBody: GoogleCloudApigeeV1AppGroup): Observable<GoogleCloudApigeeV1AppGroup> {
			return this.http.post<GoogleCloudApigeeV1AppGroup>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appgroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.
		 * Get v1/{parent}/apps
		 * @param {string} parent Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
		 * @param {string} count Number of developer apps to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.
		 * @param {boolean} expand Optional. Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.
		 * @param {boolean} shallowExpand Optional. Specifies whether to expand the results in shallow mode. Set to `true` to expand the results in shallow mode.
		 * @param {string} startKey **Note**: Must be used in conjunction with the `count` parameter. Name of the developer app from which to start displaying the list of developer apps. For example, if you're returning 50 developer apps at a time (using the `count` query parameter), you can view developer apps 50-99 by entering the name of the 50th developer app. The developer app name is case sensitive.
		 * @param {string} ids Optional. Comma-separated list of app IDs on which to filter.
		 * @param {boolean} includeCred Optional. Flag that specifies whether to include credentials in the response.
		 * @param {string} keyStatus Optional. Key status of the app. Valid values include `approved` or `revoked`. Defaults to `approved`.
		 * @param {number} pageSize Optional. Count of apps a single page can have in the response. If unspecified, at most 100 apps will be returned. The maximum value is 100; values above 100 will be coerced to 100. "page_size" is supported from ver 1.10.0 and above.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The starting index record for listing the developers. "page_token" is supported from ver 1.10.0 and above.
		 * @param {string} rows Optional. Maximum number of app IDs to return. Defaults to 10000.
		 * @param {string} status Optional. Filter by the status of the app. Valid values are `approved` or `revoked`. Defaults to `approved`.
		 * @return {GoogleCloudApigeeV1ListDeveloperAppsResponse} Successful response
		 */
		Apigee_organizations_developers_apps_list(parent: string, count: string | null | undefined, expand: boolean | null | undefined, shallowExpand: boolean | null | undefined, startKey: string | null | undefined, ids: string | null | undefined, includeCred: boolean | null | undefined, keyStatus: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, rows: string | null | undefined, status: string | null | undefined): Observable<GoogleCloudApigeeV1ListDeveloperAppsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListDeveloperAppsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps&count=' + (count == null ? '' : encodeURIComponent(count)) + '&expand=' + expand + '&shallowExpand=' + shallowExpand + '&startKey=' + (startKey == null ? '' : encodeURIComponent(startKey)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&includeCred=' + includeCred + '&keyStatus=' + (keyStatus == null ? '' : encodeURIComponent(keyStatus)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rows=' + (rows == null ? '' : encodeURIComponent(rows)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), {});
		}

		/**
		 * Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.
		 * Post v1/{parent}/apps
		 * @param {string} parent Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
		 * @return {GoogleCloudApigeeV1DeveloperApp} Successful response
		 */
		Apigee_organizations_developers_apps_create(parent: string, requestBody: GoogleCloudApigeeV1DeveloperApp): Observable<GoogleCloudApigeeV1DeveloperApp> {
			return this.http.post<GoogleCloudApigeeV1DeveloperApp>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the ArchiveDeployments in the specified Environment.
		 * Get v1/{parent}/archiveDeployments
		 * @param {string} parent Required. Name of the Environment for which to list Archive Deployments in the format: `organizations/{org}/environments/{env}`.
		 * @param {string} filter Optional. An optional query used to return a subset of Archive Deployments using the semantics defined in https://google.aip.dev/160.
		 * @param {number} pageSize Optional. Maximum number of Archive Deployments to return. If unspecified, at most 25 deployments will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Page token, returned from a previous ListArchiveDeployments call, that you can use to retrieve the next page.
		 * @return {GoogleCloudApigeeV1ListArchiveDeploymentsResponse} Successful response
		 */
		Apigee_organizations_environments_archiveDeployments_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListArchiveDeploymentsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListArchiveDeploymentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/archiveDeployments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ArchiveDeployment.
		 * Post v1/{parent}/archiveDeployments
		 * @param {string} parent Required. The Environment this Archive Deployment will be created in.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_environments_archiveDeployments_create(parent: string, requestBody: GoogleCloudApigeeV1ArchiveDeployment): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/archiveDeployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
		 * Post v1/{parent}/archiveDeployments:generateUploadUrl
		 * @param {string} parent Required. The organization and environment to upload to.
		 * @return {GoogleCloudApigeeV1GenerateUploadUrlResponse} Successful response
		 */
		Apigee_organizations_environments_archiveDeployments_generateUploadUrl(parent: string, requestBody: GoogleCloudApigeeV1GenerateUploadUrlRequest): Observable<GoogleCloudApigeeV1GenerateUploadUrlResponse> {
			return this.http.post<GoogleCloudApigeeV1GenerateUploadUrlResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/archiveDeployments:generateUploadUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.
		 * Get v1/{parent}/attachments
		 * @param {string} parent Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`
		 * @param {number} pageSize Maximum number of instance attachments to return. Defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, returned by a previous ListInstanceAttachments call, that you can use to retrieve the next page of content.
		 * @return {GoogleCloudApigeeV1ListInstanceAttachmentsResponse} Successful response
		 */
		Apigee_organizations_instances_attachments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListInstanceAttachmentsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListInstanceAttachmentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attachments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.
		 * Post v1/{parent}/attachments
		 * @param {string} parent Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_instances_attachments_create(parent: string, requestBody: GoogleCloudApigeeV1InstanceAttachment): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all developer attributes.
		 * Get v1/{parent}/attributes
		 * @param {string} parent Required. Email address of the developer for which attributes are being listed. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
		 * @return {GoogleCloudApigeeV1Attributes} Successful response
		 */
		Apigee_organizations_developers_attributes_list(parent: string): Observable<GoogleCloudApigeeV1Attributes> {
			return this.http.get<GoogleCloudApigeeV1Attributes>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attributes', {});
		}

		/**
		 * Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
		 * Post v1/{parent}/attributes
		 * @param {string} parent Required. Email address of the developer for which attributes are being updated. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
		 * @return {GoogleCloudApigeeV1Attributes} Successful response
		 */
		Apigee_organizations_developers_attributes(parent: string, requestBody: GoogleCloudApigeeV1Attributes): Observable<GoogleCloudApigeeV1Attributes> {
			return this.http.post<GoogleCloudApigeeV1Attributes>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new canary evaluation for an organization.
		 * Post v1/{parent}/canaryevaluations
		 * @param {string} parent Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_instances_canaryevaluations_create(parent: string, requestBody: GoogleCloudApigeeV1CanaryEvaluation): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/canaryevaluations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all data collectors.
		 * Get v1/{parent}/datacollectors
		 * @param {string} parent Required. Name of the organization for which to list data collectors in the following format: `organizations/{org}`.
		 * @param {number} pageSize Maximum number of data collectors to return. The page size defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, returned from a previous ListDataCollectors call, that you can use to retrieve the next page.
		 * @return {GoogleCloudApigeeV1ListDataCollectorsResponse} Successful response
		 */
		Apigee_organizations_datacollectors_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListDataCollectorsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListDataCollectorsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datacollectors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new data collector.
		 * Post v1/{parent}/datacollectors
		 * @param {string} parent Required. Name of the organization in which to create the data collector in the following format: `organizations/{org}`.
		 * @param {string} dataCollectorId ID of the data collector. Overrides any ID in the data collector resource. Must be a string beginning with `dc_` that contains only letters, numbers, and underscores.
		 * @return {GoogleCloudApigeeV1DataCollector} Successful response
		 */
		Apigee_organizations_datacollectors_create(parent: string, dataCollectorId: string | null | undefined, requestBody: GoogleCloudApigeeV1DataCollector): Observable<GoogleCloudApigeeV1DataCollector> {
			return this.http.post<GoogleCloudApigeeV1DataCollector>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datacollectors&dataCollectorId=' + (dataCollectorId == null ? '' : encodeURIComponent(dataCollectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists debug sessions that are currently active in the given API Proxy revision.
		 * Get v1/{parent}/debugsessions
		 * @param {string} parent Required. The name of the API Proxy revision deployment for which to list debug sessions. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.
		 * @param {number} pageSize Maximum number of debug sessions to return. The page size defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, returned from a previous ListDebugSessions call, that you can use to retrieve the next page.
		 * @return {GoogleCloudApigeeV1ListDebugSessionsResponse} Successful response
		 */
		Apigee_organizations_environments_apis_revisions_debugsessions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListDebugSessionsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListDebugSessionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/debugsessions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a debug session for a deployed API Proxy revision.
		 * Post v1/{parent}/debugsessions
		 * @param {string} parent Required. The resource name of the API Proxy revision deployment for which to create the DebugSession. Must be of the form `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.
		 * @param {string} timeout Optional. The time in seconds after which this DebugSession should end. A timeout specified in DebugSession will overwrite this value.
		 * @return {GoogleCloudApigeeV1DebugSession} Successful response
		 */
		Apigee_organizations_environments_apis_revisions_debugsessions_create(parent: string, timeout: string | null | undefined, requestBody: GoogleCloudApigeeV1DebugSession): Observable<GoogleCloudApigeeV1DebugSession> {
			return this.http.post<GoogleCloudApigeeV1DebugSession>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/debugsessions&timeout=' + (timeout == null ? '' : encodeURIComponent(timeout)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all deployments of a shared flow revision.
		 * Get v1/{parent}/deployments
		 * @param {string} parent Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`.
		 * @param {boolean} sharedFlows Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`.
		 * @return {GoogleCloudApigeeV1ListDeploymentsResponse} Successful response
		 */
		Apigee_organizations_sharedflows_revisions_deployments_list(parent: string, sharedFlows: boolean | null | undefined): Observable<GoogleCloudApigeeV1ListDeploymentsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListDeploymentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deployments&sharedFlows=' + sharedFlows, {});
		}

		/**
		 * Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.
		 * Get v1/{parent}/developers
		 * @param {string} parent Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`.
		 * @param {string} app Optional. List only Developers that are associated with the app. Note that start_key, count are not applicable for this filter criteria.
		 * @param {string} count Optional. Number of developers to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.
		 * @param {boolean} expand Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.
		 * @param {string} ids Optional. List of IDs to include, separated by commas.
		 * @param {boolean} includeCompany Flag that specifies whether to include company details in the response.
		 * @param {string} startKey **Note**: Must be used in conjunction with the `count` parameter. Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns: ``` westley@example.com fezzik@example.com buttercup@example.com ``` and your `startKey` is `fezzik@example.com`, the list returned will be ``` fezzik@example.com buttercup@example.com ```
		 * @return {GoogleCloudApigeeV1ListOfDevelopersResponse} Successful response
		 */
		Apigee_organizations_developers_list(parent: string, app: string | null | undefined, count: string | null | undefined, expand: boolean | null | undefined, ids: string | null | undefined, includeCompany: boolean | null | undefined, startKey: string | null | undefined): Observable<GoogleCloudApigeeV1ListOfDevelopersResponse> {
			return this.http.get<GoogleCloudApigeeV1ListOfDevelopersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/developers&app=' + (app == null ? '' : encodeURIComponent(app)) + '&count=' + (count == null ? '' : encodeURIComponent(count)) + '&expand=' + expand + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&includeCompany=' + includeCompany + '&startKey=' + (startKey == null ? '' : encodeURIComponent(startKey)), {});
		}

		/**
		 * Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.
		 * Post v1/{parent}/developers
		 * @param {string} parent Required. Name of the Apigee organization in which the developer is created. Use the following structure in your request: `organizations/{org}`.
		 * @return {GoogleCloudApigeeV1Developer} Successful response
		 */
		Apigee_organizations_developers_create(parent: string, requestBody: GoogleCloudApigeeV1Developer): Observable<GoogleCloudApigeeV1Developer> {
			return this.http.post<GoogleCloudApigeeV1Developer>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/developers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the endpoint attachments in an organization.
		 * Get v1/{parent}/endpointAttachments
		 * @param {string} parent Required. Name of the organization for which to list endpoint attachments. Use the following structure in your request: `organizations/{org}`
		 * @param {number} pageSize Optional. Maximum number of endpoint attachments to return. If unspecified, at most 25 attachments will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Page token, returned from a previous `ListEndpointAttachments` call, that you can use to retrieve the next page.
		 * @return {GoogleCloudApigeeV1ListEndpointAttachmentsResponse} Successful response
		 */
		Apigee_organizations_endpointAttachments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListEndpointAttachmentsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListEndpointAttachmentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpointAttachments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.
		 * Post v1/{parent}/endpointAttachments
		 * @param {string} parent Required. Organization the endpoint attachment will be created in.
		 * @param {string} endpointAttachmentId ID to use for the endpoint attachment. ID must start with a lowercase letter followed by up to 31 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. The minimum length is 2.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_endpointAttachments_create(parent: string, endpointAttachmentId: string | null | undefined, requestBody: GoogleCloudApigeeV1EndpointAttachment): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpointAttachments&endpointAttachmentId=' + (endpointAttachmentId == null ? '' : encodeURIComponent(endpointAttachmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
		 * Get v1/{parent}/entries
		 * @param {string} parent Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`.
		 * @param {number} pageSize Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page.
		 * @return {GoogleCloudApigeeV1ListKeyValueEntriesResponse} Successful response
		 */
		Apigee_organizations_keyvaluemaps_entries_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListKeyValueEntriesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListKeyValueEntriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
		 * Post v1/{parent}/entries
		 * @param {string} parent Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`.
		 * @return {GoogleCloudApigeeV1KeyValueEntry} Successful response
		 */
		Apigee_organizations_keyvaluemaps_entries_create(parent: string, requestBody: GoogleCloudApigeeV1KeyValueEntry): Observable<GoogleCloudApigeeV1KeyValueEntry> {
			return this.http.post<GoogleCloudApigeeV1KeyValueEntry>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all environment groups.
		 * Get v1/{parent}/envgroups
		 * @param {string} parent Required. Name of the organization for which to list environment groups in the following format: `organizations/{org}`.
		 * @param {number} pageSize Maximum number of environment groups to return. The page size defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, returned from a previous ListEnvironmentGroups call, that you can use to retrieve the next page.
		 * @return {GoogleCloudApigeeV1ListEnvironmentGroupsResponse} Successful response
		 */
		Apigee_organizations_envgroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListEnvironmentGroupsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListEnvironmentGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/envgroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new environment group.
		 * Post v1/{parent}/envgroups
		 * @param {string} parent Required. Name of the organization in which to create the environment group in the following format: `organizations/{org}`.
		 * @param {string} name ID of the environment group. Overrides any ID in the environment_group resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_envgroups_create(parent: string, name: string | null | undefined, requestBody: GoogleCloudApigeeV1EnvironmentGroup): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/envgroups&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.
		 * Post v1/{parent}/environments
		 * @param {string} parent Required. Name of organization and security profile ID. Format: organizations/{org}/securityProfiles/{profile}
		 * @param {string} name Optional. Name of the environment.
		 * @return {GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation} Successful response
		 */
		Apigee_organizations_securityProfiles_environments_create(parent: string, name: string | null | undefined, requestBody: GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation): Observable<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation> {
			return this.http.post<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of Asynchronous Queries at host level.
		 * Get v1/{parent}/hostQueries
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}`.
		 * @param {string} dataset Filter response list by dataset. Example: `api`, `mint`
		 * @param {string} envgroupHostname Required. Filter response list by hostname.
		 * @param {string} from Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
		 * @param {string} inclQueriesWithoutReport Flag to include asynchronous queries that don't have a report denifition.
		 * @param {string} status Filter response list by asynchronous query status.
		 * @param {string} submittedBy Filter response list by user who submitted queries.
		 * @param {string} to Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
		 * @return {GoogleCloudApigeeV1ListAsyncQueriesResponse} Successful response
		 */
		Apigee_organizations_hostQueries_list(parent: string, dataset: string | null | undefined, envgroupHostname: string | null | undefined, from: string | null | undefined, inclQueriesWithoutReport: string | null | undefined, status: string | null | undefined, submittedBy: string | null | undefined, to: string | null | undefined): Observable<GoogleCloudApigeeV1ListAsyncQueriesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListAsyncQueriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hostQueries&dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&envgroupHostname=' + (envgroupHostname == null ? '' : encodeURIComponent(envgroupHostname)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&inclQueriesWithoutReport=' + (inclQueriesWithoutReport == null ? '' : encodeURIComponent(inclQueriesWithoutReport)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&submittedBy=' + (submittedBy == null ? '' : encodeURIComponent(submittedBy)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), {});
		}

		/**
		 * Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
		 * Post v1/{parent}/hostQueries
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}`.
		 * @return {GoogleCloudApigeeV1AsyncQuery} Successful response
		 */
		Apigee_organizations_hostQueries_create(parent: string, requestBody: GoogleCloudApigeeV1Query): Observable<GoogleCloudApigeeV1AsyncQuery> {
			return this.http.post<GoogleCloudApigeeV1AsyncQuery>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hostQueries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of Security Reports at host level.
		 * Get v1/{parent}/hostSecurityReports
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}`.
		 * @param {string} dataset Filter response list by dataset. Example: `api`, `mint`
		 * @param {string} envgroupHostname Required. Filter response list by hostname.
		 * @param {string} from Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
		 * @param {number} pageSize The maximum number of security report to return in the list response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from the previous list response to fetch the next page.
		 * @param {string} status Filter response list by security report status.
		 * @param {string} submittedBy Filter response list by user who submitted queries.
		 * @param {string} to Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
		 * @return {GoogleCloudApigeeV1ListSecurityReportsResponse} Successful response
		 */
		Apigee_organizations_hostSecurityReports_list(parent: string, dataset: string | null | undefined, envgroupHostname: string | null | undefined, from: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, status: string | null | undefined, submittedBy: string | null | undefined, to: string | null | undefined): Observable<GoogleCloudApigeeV1ListSecurityReportsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListSecurityReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hostSecurityReports&dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&envgroupHostname=' + (envgroupHostname == null ? '' : encodeURIComponent(envgroupHostname)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&submittedBy=' + (submittedBy == null ? '' : encodeURIComponent(submittedBy)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), {});
		}

		/**
		 * Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
		 * Post v1/{parent}/hostSecurityReports
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}`.
		 * @return {GoogleCloudApigeeV1SecurityReport} Successful response
		 */
		Apigee_organizations_hostSecurityReports_create(parent: string, requestBody: GoogleCloudApigeeV1SecurityReportQuery): Observable<GoogleCloudApigeeV1SecurityReport> {
			return this.http.post<GoogleCloudApigeeV1SecurityReport>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hostSecurityReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.
		 * @param {number} pageSize Maximum number of instances to return. Defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, returned from a previous ListInstances call, that you can use to retrieve the next page of content.
		 * @return {GoogleCloudApigeeV1ListInstancesResponse} Successful response
		 */
		Apigee_organizations_instances_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListInstancesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListInstancesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_instances_create(parent: string, requestBody: GoogleCloudApigeeV1Instance): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.
		 * Post v1/{parent}/keys
		 * @param {string} parent Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`
		 * @return {GoogleCloudApigeeV1DeveloperAppKey} Successful response
		 */
		Apigee_organizations_developers_apps_keys_create(parent: string, requestBody: GoogleCloudApigeeV1DeveloperAppKey): Observable<GoogleCloudApigeeV1DeveloperAppKey> {
			return this.http.post<GoogleCloudApigeeV1DeveloperAppKey>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.
		 * Post v1/{parent}/keys/create
		 * @param {string} parent Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`
		 * @return {GoogleCloudApigeeV1DeveloperAppKey} Successful response
		 */
		Apigee_organizations_developers_apps_keys_create_create(parent: string, requestBody: GoogleCloudApigeeV1DeveloperAppKey): Observable<GoogleCloudApigeeV1DeveloperAppKey> {
			return this.http.post<GoogleCloudApigeeV1DeveloperAppKey>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.
		 * Post v1/{parent}/keystores
		 * @param {string} parent Required. Name of the environment in which to create the keystore. Use the following format in your request: `organizations/{org}/environments/{env}`
		 * @param {string} name Optional. Name of the keystore. Overrides the value in Keystore.
		 * @return {GoogleCloudApigeeV1Keystore} Successful response
		 */
		Apigee_organizations_environments_keystores_create(parent: string, name: string | null | undefined, requestBody: GoogleCloudApigeeV1Keystore): Observable<GoogleCloudApigeeV1Keystore> {
			return this.http.post<GoogleCloudApigeeV1Keystore>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keystores&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a key value map in an organization.
		 * Post v1/{parent}/keyvaluemaps
		 * @param {string} parent Required. Name of the organization in which to create the key value map file. Use the following structure in your request: `organizations/{org}`
		 * @return {GoogleCloudApigeeV1KeyValueMap} Successful response
		 */
		Apigee_organizations_keyvaluemaps_create(parent: string, requestBody: GoogleCloudApigeeV1KeyValueMap): Observable<GoogleCloudApigeeV1KeyValueMap> {
			return this.http.post<GoogleCloudApigeeV1KeyValueMap>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keyvaluemaps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.
		 * Get v1/{parent}/natAddresses
		 * @param {string} parent Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`
		 * @param {number} pageSize Maximum number of natAddresses to return. Defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, returned from a previous ListNatAddresses call, that you can use to retrieve the next page of content.
		 * @return {GoogleCloudApigeeV1ListNatAddressesResponse} Successful response
		 */
		Apigee_organizations_instances_natAddresses_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListNatAddressesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListNatAddressesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/natAddresses&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.
		 * Post v1/{parent}/natAddresses
		 * @param {string} parent Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_organizations_instances_natAddresses_create(parent: string, requestBody: GoogleCloudApigeeV1NatAddress): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/natAddresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the distributed trace configuration overrides in an environment.
		 * Get v1/{parent}/overrides
		 * @param {string} parent Required. Parent resource of the trace configuration override. Use the following structure in your request: "organizations/environments/traceConfig".
		 * @param {number} pageSize Maximum number of trace configuration overrides to return. If not specified, the maximum number returned is 25. The maximum number cannot exceed 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, returned from a previous `ListTraceConfigOverrides` call. Token value that can be used to retrieve the subsequent page. When paginating, all other parameters provided to `ListTraceConfigOverrides` must match those specified in the call to obtain the page token.
		 * @return {GoogleCloudApigeeV1ListTraceConfigOverridesResponse} Successful response
		 */
		Apigee_organizations_environments_traceConfig_overrides_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListTraceConfigOverridesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListTraceConfigOverridesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/overrides&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.
		 * Post v1/{parent}/overrides
		 * @param {string} parent Required. Parent resource of the trace configuration override. Use the following structure in your request. "organizations/environments/traceConfig".
		 * @return {GoogleCloudApigeeV1TraceConfigOverride} Successful response
		 */
		Apigee_organizations_environments_traceConfig_overrides_create(parent: string, requestBody: GoogleCloudApigeeV1TraceConfigOverride): Observable<GoogleCloudApigeeV1TraceConfigOverride> {
			return this.http.post<GoogleCloudApigeeV1TraceConfigOverride>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/overrides', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of Asynchronous Queries
		 * Get v1/{parent}/queries
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
		 * @param {string} dataset Filter response list by dataset. Example: `api`, `mint`
		 * @param {string} from Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
		 * @param {string} inclQueriesWithoutReport Flag to include asynchronous queries that don't have a report denifition.
		 * @param {string} status Filter response list by asynchronous query status.
		 * @param {string} submittedBy Filter response list by user who submitted queries.
		 * @param {string} to Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
		 * @return {GoogleCloudApigeeV1ListAsyncQueriesResponse} Successful response
		 */
		Apigee_organizations_environments_queries_list(parent: string, dataset: string | null | undefined, from: string | null | undefined, inclQueriesWithoutReport: string | null | undefined, status: string | null | undefined, submittedBy: string | null | undefined, to: string | null | undefined): Observable<GoogleCloudApigeeV1ListAsyncQueriesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListAsyncQueriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/queries&dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&inclQueriesWithoutReport=' + (inclQueriesWithoutReport == null ? '' : encodeURIComponent(inclQueriesWithoutReport)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&submittedBy=' + (submittedBy == null ? '' : encodeURIComponent(submittedBy)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), {});
		}

		/**
		 * Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
		 * Post v1/{parent}/queries
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
		 * @return {GoogleCloudApigeeV1AsyncQuery} Successful response
		 */
		Apigee_organizations_environments_queries_create(parent: string, requestBody: GoogleCloudApigeeV1Query): Observable<GoogleCloudApigeeV1AsyncQuery> {
			return this.http.post<GoogleCloudApigeeV1AsyncQuery>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/queries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the rate plans for an API product.
		 * Get v1/{parent}/rateplans
		 * @param {string} parent Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` Use `organizations/{org}/apiproducts/-` to return rate plans for all API products within the organization.
		 * @param {number} count Number of rate plans to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The maximum limit is 1000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} expand Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API. Defaults to `false`.
		 * @param {string} orderBy Name of the attribute used for sorting. Valid values include: * `name`: Name of the rate plan. * `state`: State of the rate plan (`DRAFT`, `PUBLISHED`). * `startTime`: Time when the rate plan becomes active. * `endTime`: Time when the rate plan expires. **Note**: Not supported by Apigee at this time.
		 * @param {string} startKey Name of the rate plan from which to start displaying the list of rate plans. If omitted, the list starts from the first item. For example, to view the rate plans from 51-150, set the value of `startKey` to the name of the 51st rate plan and set the value of `count` to 100.
		 * @param {GoogleCloudApigeeV1RatePlanState} state State of the rate plans (`DRAFT`, `PUBLISHED`) that you want to display.
		 * @return {GoogleCloudApigeeV1ListRatePlansResponse} Successful response
		 */
		Apigee_organizations_apiproducts_rateplans_list(parent: string, count: number | null | undefined, expand: boolean | null | undefined, orderBy: string | null | undefined, startKey: string | null | undefined, state: GoogleCloudApigeeV1RatePlanState | null | undefined): Observable<GoogleCloudApigeeV1ListRatePlansResponse> {
			return this.http.get<GoogleCloudApigeeV1ListRatePlansResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rateplans&count=' + count + '&expand=' + expand + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&startKey=' + (startKey == null ? '' : encodeURIComponent(startKey)) + '&state=' + state, {});
		}

		/**
		 * Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.
		 * Post v1/{parent}/rateplans
		 * @param {string} parent Required. Name of the API product that is associated with the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}`
		 * @return {GoogleCloudApigeeV1RatePlan} Successful response
		 */
		Apigee_organizations_apiproducts_rateplans_create(parent: string, requestBody: GoogleCloudApigeeV1RatePlan): Observable<GoogleCloudApigeeV1RatePlan> {
			return this.http.post<GoogleCloudApigeeV1RatePlan>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rateplans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Reference in the specified environment.
		 * Post v1/{parent}/references
		 * @param {string} parent Required. The parent environment name under which the Reference will be created. Must be of the form `organizations/{org}/environments/{env}`.
		 * @return {GoogleCloudApigeeV1Reference} Successful response
		 */
		Apigee_organizations_environments_references_create(parent: string, requestBody: GoogleCloudApigeeV1Reference): Observable<GoogleCloudApigeeV1Reference> {
			return this.http.post<GoogleCloudApigeeV1Reference>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/references', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of Custom Reports
		 * Get v1/{parent}/reports
		 * @param {string} parent Required. The parent organization name under which the API product will be listed `organizations/{organization_id}/reports`
		 * @param {boolean} expand Set to 'true' to get expanded details about each custom report.
		 * @return {GoogleCloudApigeeV1ListCustomReportsResponse} Successful response
		 */
		Apigee_organizations_reports_list(parent: string, expand: boolean | null | undefined): Observable<GoogleCloudApigeeV1ListCustomReportsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListCustomReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reports&expand=' + expand, {});
		}

		/**
		 * Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.
		 * Post v1/{parent}/reports
		 * @param {string} parent Required. The parent organization name under which the Custom Report will be created. Must be of the form: `organizations/{organization_id}/reports`
		 * @return {GoogleCloudApigeeV1CustomReport} Successful response
		 */
		Apigee_organizations_reports_create(parent: string, requestBody: GoogleCloudApigeeV1CustomReport): Observable<GoogleCloudApigeeV1CustomReport> {
			return this.http.post<GoogleCloudApigeeV1CustomReport>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
		 * Get v1/{parent}/resourcefiles
		 * @param {string} parent Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.
		 * @param {string} type Optional. Type of resource files to list. {{ resource_file_type }}
		 * @return {GoogleCloudApigeeV1ListEnvironmentResourcesResponse} Successful response
		 */
		Apigee_organizations_environments_resourcefiles_list(parent: string, type: string | null | undefined): Observable<GoogleCloudApigeeV1ListEnvironmentResourcesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListEnvironmentResourcesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcefiles&type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
		 * Post v1/{parent}/resourcefiles
		 * @param {string} parent Required. Name of the environment in which to create the resource file in the following format: `organizations/{org}/environments/{env}`.
		 * @param {string} name Required. Name of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
		 * @param {string} type Required. Resource file type. {{ resource_file_type }}
		 * @return {GoogleCloudApigeeV1ResourceFile} Successful response
		 */
		Apigee_organizations_environments_resourcefiles_create(parent: string, name: string | null | undefined, type: string | null | undefined, requestBody: GoogleApiHttpBody): Observable<GoogleCloudApigeeV1ResourceFile> {
			return this.http.post<GoogleCloudApigeeV1ResourceFile>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcefiles&name=' + (name == null ? '' : encodeURIComponent(name)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
		 * Get v1/{parent}/resourcefiles/{type}
		 * @param {string} parent Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.
		 * @param {string} type Optional. Type of resource files to list. {{ resource_file_type }}
		 * @return {GoogleCloudApigeeV1ListEnvironmentResourcesResponse} Successful response
		 */
		Apigee_organizations_environments_resourcefiles_listEnvironmentResources(parent: string, type: string): Observable<GoogleCloudApigeeV1ListEnvironmentResourcesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListEnvironmentResourcesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcefiles/' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
		 * Delete v1/{parent}/resourcefiles/{type}/{name}
		 * @param {string} parent Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
		 * @param {string} type Required. Resource file type. {{ resource_file_type }}
		 * @param {string} name Required. ID of the resource file to delete. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
		 * @return {GoogleCloudApigeeV1ResourceFile} Successful response
		 */
		Apigee_organizations_environments_resourcefiles_delete(parent: string, type: string, name: string): Observable<GoogleCloudApigeeV1ResourceFile> {
			return this.http.delete<GoogleCloudApigeeV1ResourceFile>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcefiles/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
		 * Get v1/{parent}/resourcefiles/{type}/{name}
		 * @param {string} parent Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
		 * @param {string} type Required. Resource file type. {{ resource_file_type }}
		 * @param {string} name Required. ID of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
		 * @return {GoogleApiHttpBody} Successful response
		 */
		Apigee_organizations_environments_resourcefiles_get(parent: string, type: string, name: string): Observable<GoogleApiHttpBody> {
			return this.http.get<GoogleApiHttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcefiles/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
		 * Put v1/{parent}/resourcefiles/{type}/{name}
		 * @param {string} parent Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
		 * @param {string} type Required. Resource file type. {{ resource_file_type }}
		 * @param {string} name Required. ID of the resource file to update. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
		 * @return {GoogleCloudApigeeV1ResourceFile} Successful response
		 */
		Apigee_organizations_environments_resourcefiles_update(parent: string, type: string, name: string, requestBody: GoogleApiHttpBody): Observable<GoogleCloudApigeeV1ResourceFile> {
			return this.http.put<GoogleCloudApigeeV1ResourceFile>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcefiles/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of SecurityActions. This returns both enabled and disabled actions.
		 * Get v1/{parent}/securityActions
		 * @param {string} parent Required. The parent, which owns this collection of SecurityActions. Format: organizations/{org}/environments/{env}
		 * @param {string} filter The filter expression to filter List results. https://google.aip.dev/160. Allows for filtering over: state and api_proxies. E.g.: state = ACTIVE AND apiProxies:foo. Filtering by action is not supported https://github.com/aip-dev/google.aip.dev/issues/624
		 * @param {number} pageSize The maximum number of SecurityActions to return. If unspecified, at most 50 SecurityActions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListSecurityActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSecurityActions` must match the call that provided the page token.
		 * @return {GoogleCloudApigeeV1ListSecurityActionsResponse} Successful response
		 */
		Apigee_organizations_environments_securityActions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListSecurityActionsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListSecurityActionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityActions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * CreateSecurityAction creates a SecurityAction.
		 * Post v1/{parent}/securityActions
		 * @param {string} parent Required. The organization and environment that this SecurityAction applies to. Format: organizations/{org}/environments/{env}
		 * @param {string} securityActionId Required. The ID to use for the SecurityAction, which will become the final component of the action's resource name. This value should be 0-61 characters, and valid format is (^[a-z]([a-z0-9-]{​0,61}[a-z0-9])?$).
		 * @return {GoogleCloudApigeeV1SecurityAction} Successful response
		 */
		Apigee_organizations_environments_securityActions_create(parent: string, securityActionId: string | null | undefined, requestBody: GoogleCloudApigeeV1SecurityAction): Observable<GoogleCloudApigeeV1SecurityAction> {
			return this.http.post<GoogleCloudApigeeV1SecurityAction>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityActions&securityActionId=' + (securityActionId == null ? '' : encodeURIComponent(securityActionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListSecurityIncidents lists all the security incident associated with the environment.
		 * Get v1/{parent}/securityIncidents
		 * @param {string} parent Required. For a specific organization, list of all the security incidents. Format: `organizations/{org}/environments/{environment}`
		 * @param {string} filter The filter expression to be used to get the list of security incidents, where filtering can be done on API Proxies. Example: filter = "api_proxy = /", "first_detected_time >", "last_detected_time <"
		 * @param {number} pageSize Optional. The maximum number of incidents to return. The service may return fewer than this value. If unspecified, at most 50 incidents will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListSecurityIncident` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudApigeeV1ListSecurityIncidentsResponse} Successful response
		 */
		Apigee_organizations_environments_securityIncidents_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListSecurityIncidentsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListSecurityIncidentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityIncidents&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * BatchUpdateSecurityIncident updates multiple existing security incidents.
		 * Post v1/{parent}/securityIncidents:batchUpdate
		 * @param {string} parent Optional. The parent resource shared by all security incidents being updated. If this is set, the parent field in the UpdateSecurityIncidentRequest messages must either be empty or match this field.
		 * @return {GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse} Successful response
		 */
		Apigee_organizations_environments_securityIncidents_batchUpdate(parent: string, requestBody: GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest): Observable<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse> {
			return this.http.post<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityIncidents:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.
		 * Get v1/{parent}/securityProfiles
		 * @param {string} parent Required. For a specific organization, list of all the security profiles. Format: `organizations/{org}`
		 * @param {number} pageSize The maximum number of profiles to return. The service may return fewer than this value. If unspecified, at most 50 profiles will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListSecurityProfiles` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudApigeeV1ListSecurityProfilesResponse} Successful response
		 */
		Apigee_organizations_securityProfiles_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudApigeeV1ListSecurityProfilesResponse> {
			return this.http.get<GoogleCloudApigeeV1ListSecurityProfilesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityProfiles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * CreateSecurityProfile create a new custom security profile.
		 * Post v1/{parent}/securityProfiles
		 * @param {string} parent Required. Name of organization. Format: organizations/{org}
		 * @param {string} securityProfileId Required. The ID to use for the SecurityProfile, which will become the final component of the action's resource name. This value should be 1-63 characters and validated by "(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$)".
		 * @return {GoogleCloudApigeeV1SecurityProfile} Successful response
		 */
		Apigee_organizations_securityProfiles_create(parent: string, securityProfileId: string | null | undefined, requestBody: GoogleCloudApigeeV1SecurityProfile): Observable<GoogleCloudApigeeV1SecurityProfile> {
			return this.http.post<GoogleCloudApigeeV1SecurityProfile>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityProfiles&securityProfileId=' + (securityProfileId == null ? '' : encodeURIComponent(securityProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of Security Reports
		 * Get v1/{parent}/securityReports
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
		 * @param {string} dataset Filter response list by dataset. Example: `api`, `mint`
		 * @param {string} from Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
		 * @param {number} pageSize The maximum number of security report to return in the list response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from the previous list response to fetch the next page.
		 * @param {string} status Filter response list by security reports status.
		 * @param {string} submittedBy Filter response list by user who submitted queries.
		 * @param {string} to Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
		 * @return {GoogleCloudApigeeV1ListSecurityReportsResponse} Successful response
		 */
		Apigee_organizations_environments_securityReports_list(parent: string, dataset: string | null | undefined, from: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, status: string | null | undefined, submittedBy: string | null | undefined, to: string | null | undefined): Observable<GoogleCloudApigeeV1ListSecurityReportsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListSecurityReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityReports&dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&submittedBy=' + (submittedBy == null ? '' : encodeURIComponent(submittedBy)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), {});
		}

		/**
		 * Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.
		 * Post v1/{parent}/securityReports
		 * @param {string} parent Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
		 * @return {GoogleCloudApigeeV1SecurityReport} Successful response
		 */
		Apigee_organizations_environments_securityReports_create(parent: string, requestBody: GoogleCloudApigeeV1SecurityReportQuery): Observable<GoogleCloudApigeeV1SecurityReport> {
			return this.http.post<GoogleCloudApigeeV1SecurityReport>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securityReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all shared flows in the organization.
		 * Get v1/{parent}/sharedflows
		 * @param {string} parent Required. The name of the parent organization under which to get shared flows. Must be of the form: `organizations/{organization_id}`
		 * @param {boolean} includeMetaData Indicates whether to include shared flow metadata in the response.
		 * @param {boolean} includeRevisions Indicates whether to include a list of revisions in the response.
		 * @return {GoogleCloudApigeeV1ListSharedFlowsResponse} Successful response
		 */
		Apigee_organizations_sharedflows_list(parent: string, includeMetaData: boolean | null | undefined, includeRevisions: boolean | null | undefined): Observable<GoogleCloudApigeeV1ListSharedFlowsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListSharedFlowsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sharedflows&includeMetaData=' + includeMetaData + '&includeRevisions=' + includeRevisions, {});
		}

		/**
		 * Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.
		 * Post v1/{parent}/sharedflows
		 * @param {string} parent Required. The name of the parent organization under which to create the shared flow. Must be of the form: `organizations/{organization_id}`
		 * @param {string} action Required. Must be set to either `import` or `validate`.
		 * @param {string} name Required. The name to give the shared flow
		 * @return {GoogleCloudApigeeV1SharedFlowRevision} Successful response
		 */
		Apigee_organizations_sharedflows_create(parent: string, action: string | null | undefined, name: string | null | undefined, requestBody: GoogleApiHttpBody): Observable<GoogleCloudApigeeV1SharedFlowRevision> {
			return this.http.post<GoogleCloudApigeeV1SharedFlowRevision>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sharedflows&action=' + (action == null ? '' : encodeURIComponent(action)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all API product subscriptions for a developer.
		 * Get v1/{parent}/subscriptions
		 * @param {string} parent Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
		 * @param {number} count Number of API product subscriptions to return in the API call. Use with `startKey` to provide more targeted filtering. Defaults to 100. The maximum limit is 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} startKey Name of the API product subscription from which to start displaying the list of subscriptions. If omitted, the list starts from the first item. For example, to view the API product subscriptions from 51-150, set the value of `startKey` to the name of the 51st subscription and set the value of `count` to 100.
		 * @return {GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse} Successful response
		 */
		Apigee_organizations_developers_subscriptions_list(parent: string, count: number | null | undefined, startKey: string | null | undefined): Observable<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse> {
			return this.http.get<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subscriptions&count=' + count + '&startKey=' + (startKey == null ? '' : encodeURIComponent(startKey)), {});
		}

		/**
		 * Creates a subscription to an API product.
		 * Post v1/{parent}/subscriptions
		 * @param {string} parent Required. Email address of the developer that is purchasing a subscription to the API product. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
		 * @return {GoogleCloudApigeeV1DeveloperSubscription} Successful response
		 */
		Apigee_organizations_developers_subscriptions_create(parent: string, requestBody: GoogleCloudApigeeV1DeveloperSubscription): Observable<GoogleCloudApigeeV1DeveloperSubscription> {
			return this.http.post<GoogleCloudApigeeV1DeveloperSubscription>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a TargetServer in the specified environment.
		 * Post v1/{parent}/targetservers
		 * @param {string} parent Required. The parent environment name under which the TargetServer will be created. Must be of the form `organizations/{org}/environments/{env}`.
		 * @param {string} name Optional. The ID to give the TargetServer. This will overwrite the value in TargetServer.
		 * @return {GoogleCloudApigeeV1TargetServer} Successful response
		 */
		Apigee_organizations_environments_targetservers_create(parent: string, name: string | null | undefined, requestBody: GoogleCloudApigeeV1TargetServer): Observable<GoogleCloudApigeeV1TargetServer> {
			return this.http.post<GoogleCloudApigeeV1TargetServer>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/targetservers&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.
		 * Post v1/{parent}:subscribe
		 * @param {string} parent Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
		 * @return {GoogleCloudApigeeV1Subscription} Successful response
		 */
		Apigee_organizations_environments_subscribe(parent: string): Observable<GoogleCloudApigeeV1Subscription> {
			return this.http.post<GoogleCloudApigeeV1Subscription>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':subscribe', null, {});
		}

		/**
		 * Deletes a subscription for the environment's Pub/Sub topic.
		 * Post v1/{parent}:unsubscribe
		 * @param {string} parent Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Apigee_organizations_environments_unsubscribe(parent: string, requestBody: GoogleCloudApigeeV1Subscription): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':unsubscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.
		 * Post v1/{profileEnvironment}:computeEnvironmentScores
		 * @param {string} profileEnvironment Required. Name of organization and environment and profile id for which score needs to be computed. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}
		 * @return {GoogleCloudApigeeV1ComputeEnvironmentScoresResponse} Successful response
		 */
		Apigee_organizations_securityProfiles_environments_computeEnvironmentScores(profileEnvironment: string, requestBody: GoogleCloudApigeeV1ComputeEnvironmentScoresRequest): Observable<GoogleCloudApigeeV1ComputeEnvironmentScoresResponse> {
			return this.http.post<GoogleCloudApigeeV1ComputeEnvironmentScoresResponse>(this.baseUri + 'v1/' + (profileEnvironment == null ? '' : encodeURIComponent(profileEnvironment)) + ':computeEnvironmentScores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.
		 * Post v1/{project}:provisionOrganization
		 * @param {string} project Required. Name of the GCP project with which to associate the Apigee organization.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Apigee_projects_provisionOrganization(project: string, requestBody: GoogleCloudApigeeV1ProvisionOrganizationRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + ':provisionOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Apigee_organizations_environments_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<GoogleIamV1Policy> {
			return this.http.get<GoogleIamV1Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Apigee_organizations_environments_setIamPolicy(resource: string, requestBody: GoogleIamV1SetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1TestIamPermissionsResponse} Successful response
		 */
		Apigee_organizations_environments_testIamPermissions(resource: string, requestBody: GoogleIamV1TestIamPermissionsRequest): Observable<GoogleIamV1TestIamPermissionsResponse> {
			return this.http.post<GoogleIamV1TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Apigee_organizations_sites_apicategories_deleteRetention { DELETION_RETENTION_UNSPECIFIED = 'DELETION_RETENTION_UNSPECIFIED', MINIMUM = 'MINIMUM' }

	export enum Apigee_organizations_sites_apicategories_getFormat { INGRESS_CONFIG_VIEW_UNSPECIFIED = 'INGRESS_CONFIG_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}

