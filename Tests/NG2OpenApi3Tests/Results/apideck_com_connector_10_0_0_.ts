import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Api {

		/** Link to the API reference of the API. */
		api_reference_url?: string | null;

		/** List of categories the API belongs to. */
		categories?: Array<string>;

		/** Description of the API. */
		description?: string | null;

		/** List of event types this API supports. */
		events?: Array<string>;

		/** ID of the API. */
		id?: string | null;

		/** Name of the API. */
		name?: string | null;

		/** ID of the Postman collection of the API. */
		postman_collection_id?: string | null;

		/** List of resources supported in this API. */
		ApiResources?: Array<ApiResources>;

		/** Link to the latest OpenAPI specification of the API. */
		spec_url?: string | null;

		/** Status of the API. APIs with status live or beta are callable. */
		status?: ApiStatus | null;

		/** Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API. */
		type?: ApiType | null;
	}
	export interface ApiFormProperties {

		/** Link to the API reference of the API. */
		api_reference_url: FormControl<string | null | undefined>,

		/** Description of the API. */
		description: FormControl<string | null | undefined>,

		/** ID of the API. */
		id: FormControl<string | null | undefined>,

		/** Name of the API. */
		name: FormControl<string | null | undefined>,

		/** ID of the Postman collection of the API. */
		postman_collection_id: FormControl<string | null | undefined>,

		/** Link to the latest OpenAPI specification of the API. */
		spec_url: FormControl<string | null | undefined>,

		/** Status of the API. APIs with status live or beta are callable. */
		status: FormControl<ApiStatus | null | undefined>,

		/** Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API. */
		type: FormControl<ApiType | null | undefined>,
	}
	export function CreateApiFormGroup() {
		return new FormGroup<ApiFormProperties>({
			api_reference_url: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postman_collection_id: new FormControl<string | null | undefined>(undefined),
			spec_url: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiStatus | null | undefined>(undefined),
			type: new FormControl<ApiType | null | undefined>(undefined),
		});

	}

	export interface ApiResources {

		/** Exclude from mapping coverage */
		excluded_from_coverage?: boolean | null;

		/** ID of the resource, typically a lowercased version of its name. */
		id?: string | null;

		/** Name of the resource (plural) */
		name?: string | null;

		/** Status of the resource. Resources with status live or beta are callable. */
		status?: ApiResourcesStatus | null;
	}
	export interface ApiResourcesFormProperties {

		/** Exclude from mapping coverage */
		excluded_from_coverage: FormControl<boolean | null | undefined>,

		/** ID of the resource, typically a lowercased version of its name. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource (plural) */
		name: FormControl<string | null | undefined>,

		/** Status of the resource. Resources with status live or beta are callable. */
		status: FormControl<ApiResourcesStatus | null | undefined>,
	}
	export function CreateApiResourcesFormGroup() {
		return new FormGroup<ApiResourcesFormProperties>({
			excluded_from_coverage: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiResourcesStatus | null | undefined>(undefined),
		});

	}

	export enum ApiResourcesStatus { live = 0, beta = 1, development = 2, upcoming = 3, considering = 4 }

	export enum ApiStatus { live = 0, beta = 1, development = 2, considering = 3 }

	export enum ApiType { platform = 0, unified = 1 }

	export interface ApiResource {

		/** ID of the resource, typically a lowercased version of name. */
		id?: string | null;

		/** List of linked resources. */
		ApiResourceLinked_resources?: Array<ApiResourceLinked_resources>;

		/** Name of the resource (plural) */
		name?: string | null;

		/** JSON Schema of the resource in our Unified API */
		schema?: string | null;

		/** Status of the resource. Resources with status live or beta are callable. */
		status?: ApiResourcesStatus | null;
	}
	export interface ApiResourceFormProperties {

		/** ID of the resource, typically a lowercased version of name. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource (plural) */
		name: FormControl<string | null | undefined>,

		/** JSON Schema of the resource in our Unified API */
		schema: FormControl<string | null | undefined>,

		/** Status of the resource. Resources with status live or beta are callable. */
		status: FormControl<ApiResourcesStatus | null | undefined>,
	}
	export function CreateApiResourceFormGroup() {
		return new FormGroup<ApiResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiResourcesStatus | null | undefined>(undefined),
		});

	}

	export interface ApiResourceLinked_resources {

		/** ID of the resource, typically a lowercased version of name. */
		id?: string | null;

		/** Name of the property in our Unified API. */
		unified_property?: string | null;
	}
	export interface ApiResourceLinked_resourcesFormProperties {

		/** ID of the resource, typically a lowercased version of name. */
		id: FormControl<string | null | undefined>,

		/** Name of the property in our Unified API. */
		unified_property: FormControl<string | null | undefined>,
	}
	export function CreateApiResourceLinked_resourcesFormGroup() {
		return new FormGroup<ApiResourceLinked_resourcesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			unified_property: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiResourceCoverage {
		ApiResourceCoverageCoverage?: Array<ApiResourceCoverageCoverage>;

		/** ID of the resource, typically a lowercased version of name. */
		id?: string | null;

		/** Name of the resource (plural) */
		name?: string | null;

		/** Status of the resource. Resources with status live or beta are callable. */
		status?: ApiResourcesStatus | null;
	}
	export interface ApiResourceCoverageFormProperties {

		/** ID of the resource, typically a lowercased version of name. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource (plural) */
		name: FormControl<string | null | undefined>,

		/** Status of the resource. Resources with status live or beta are callable. */
		status: FormControl<ApiResourcesStatus | null | undefined>,
	}
	export function CreateApiResourceCoverageFormGroup() {
		return new FormGroup<ApiResourceCoverageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiResourcesStatus | null | undefined>(undefined),
		});

	}

	export interface ApiResourceCoverageCoverage {

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id?: string | null;

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name?: string | null;
		pagination?: PaginationCoverage;

		/** Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. */
		pagination_supported?: boolean | null;

		/** Supported fields on the detail endpoint. */
		supported_fields?: Array<SupportedProperty>;

		/** Supported filters on the list endpoint of the resource. */
		supported_filters?: Array<string>;

		/** Supported fields on the list endpoint. */
		supported_list_fields?: Array<SupportedProperty>;

		/** List of supported operations on the resource. */
		supported_operations?: Array<string>;

		/** Supported sorting properties on the list endpoint of the resource. */
		supported_sort_by?: Array<string>;
	}
	export interface ApiResourceCoverageCoverageFormProperties {

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id: FormControl<string | null | undefined>,

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name: FormControl<string | null | undefined>,

		/** Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. */
		pagination_supported: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResourceCoverageCoverageFormGroup() {
		return new FormGroup<ApiResourceCoverageCoverageFormProperties>({
			downstream_id: new FormControl<string | null | undefined>(undefined),
			downstream_name: new FormControl<string | null | undefined>(undefined),
			pagination_supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PaginationCoverage {

		/** Indicates whether the connector supports changing the page size by using the limit parameter. */
		limit_support?: boolean | null;

		/** How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it. */
		mode?: PaginationCoverageMode | null;

		/** Indicates whether the connector supports paging through results using the cursor parameter. */
		paging_support?: boolean | null;
	}
	export interface PaginationCoverageFormProperties {

		/** Indicates whether the connector supports changing the page size by using the limit parameter. */
		limit_support: FormControl<boolean | null | undefined>,

		/** How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it. */
		mode: FormControl<PaginationCoverageMode | null | undefined>,

		/** Indicates whether the connector supports paging through results using the cursor parameter. */
		paging_support: FormControl<boolean | null | undefined>,
	}
	export function CreatePaginationCoverageFormGroup() {
		return new FormGroup<PaginationCoverageFormProperties>({
			limit_support: new FormControl<boolean | null | undefined>(undefined),
			mode: new FormControl<PaginationCoverageMode | null | undefined>(undefined),
			paging_support: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PaginationCoverageMode { native = 0, virtual = 1 }

	export interface SupportedProperty {

		/** List of child properties of the unified property. */
		SupportedPropertyChild_properties?: Array<SupportedPropertyChild_properties>;

		/** Name of the property in our Unified API. */
		unified_property?: string | null;
	}
	export interface SupportedPropertyFormProperties {

		/** Name of the property in our Unified API. */
		unified_property: FormControl<string | null | undefined>,
	}
	export function CreateSupportedPropertyFormGroup() {
		return new FormGroup<SupportedPropertyFormProperties>({
			unified_property: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SupportedPropertyChild_properties {
		unified_property?: SupportedProperty;
	}
	export interface SupportedPropertyChild_propertiesFormProperties {
	}
	export function CreateSupportedPropertyChild_propertiesFormGroup() {
		return new FormGroup<SupportedPropertyChild_propertiesFormProperties>({
		});

	}

	export interface ApisFilter {

		/** Status of the API. APIs with status live or beta are callable. */
		status?: ApiStatus | null;
	}
	export interface ApisFilterFormProperties {

		/** Status of the API. APIs with status live or beta are callable. */
		status: FormControl<ApiStatus | null | undefined>,
	}
	export function CreateApisFilterFormGroup() {
		return new FormGroup<ApisFilterFormProperties>({
			status: new FormControl<ApiStatus | null | undefined>(undefined),
		});

	}

	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface BadRequestResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestResponseFormGroup() {
		return new FormGroup<BadRequestResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Connector {

		/** Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API */
		auth_only?: boolean | null;

		/** Type of authorization used by the connector */
		auth_type?: ConnectorAuth_type | null;

		/** Set to `true` when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality. */
		blind_mapped?: boolean | null;

		/** List of resources that have settings that can be configured. */
		configurable_resources?: Array<string>;

		/** Set to `true` when connector allows the definition of custom scopes. */
		custom_scopes?: boolean | null;

		/** A description of the object. */
		description?: string | null;
		docs?: Array<ConnectorDoc>;

		/** Set to `true` when the connector offers a free trial. Use `signup_url` to sign up for a free trial */
		free_trial_available?: boolean | null;

		/** Indicates whether Apideck Sandbox OAuth credentials are available. */
		has_sandbox_credentials?: boolean | null;

		/** Link to a small square icon for the connector. */
		icon_url?: string | null;

		/** ID of the connector. */
		id?: string | null;

		/** Link to the full logo for the connector. */
		logo_url?: string | null;

		/** Name of the connector. */
		name?: string | null;

		/** Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault. */
		oauth_credentials_source?: ConnectorOauth_credentials_source | null;

		/** OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types */
		oauth_grant_type?: ConnectorOauth_grant_type | null;

		/** List of OAuth Scopes available for this connector. */
		ConnectorOauth_scopes?: Array<ConnectorOauth_scopes>;

		/** Link to the connector's partner program signup page. */
		partner_signup_url?: string | null;

		/** When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource. */
		schema_support?: SchemaSupport;

		/** Service provider identifier */
		service_id?: string | null;
		settings?: Array<ConnectorSetting>;

		/** Link to the connector's signup page. */
		signup_url?: string | null;

		/** Status of the connector. Connectors with status live or beta are callable. */
		status?: ApiStatus | null;

		/** List of events that are supported on the connector across all Unified APIs. */
		supported_events?: Array<ConnectorEvent>;

		/** List of resources that are supported on the connector. */
		supported_resources?: Array<LinkedConnectorResource>;
		tls_support?: ConnectorTls_support;

		/** List of Unified APIs that feature this connector. */
		ConnectorUnified_apis?: Array<ConnectorUnified_apis>;

		/** How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling. */
		webhook_support?: WebhookSupport;

		/** Link to the connector's website. */
		website_url?: string | null;
	}
	export interface ConnectorFormProperties {

		/** Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API */
		auth_only: FormControl<boolean | null | undefined>,

		/** Type of authorization used by the connector */
		auth_type: FormControl<ConnectorAuth_type | null | undefined>,

		/** Set to `true` when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality. */
		blind_mapped: FormControl<boolean | null | undefined>,

		/** Set to `true` when connector allows the definition of custom scopes. */
		custom_scopes: FormControl<boolean | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/** Set to `true` when the connector offers a free trial. Use `signup_url` to sign up for a free trial */
		free_trial_available: FormControl<boolean | null | undefined>,

		/** Indicates whether Apideck Sandbox OAuth credentials are available. */
		has_sandbox_credentials: FormControl<boolean | null | undefined>,

		/** Link to a small square icon for the connector. */
		icon_url: FormControl<string | null | undefined>,

		/** ID of the connector. */
		id: FormControl<string | null | undefined>,

		/** Link to the full logo for the connector. */
		logo_url: FormControl<string | null | undefined>,

		/** Name of the connector. */
		name: FormControl<string | null | undefined>,

		/** Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault. */
		oauth_credentials_source: FormControl<ConnectorOauth_credentials_source | null | undefined>,

		/** OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types */
		oauth_grant_type: FormControl<ConnectorOauth_grant_type | null | undefined>,

		/** Link to the connector's partner program signup page. */
		partner_signup_url: FormControl<string | null | undefined>,

		/** Service provider identifier */
		service_id: FormControl<string | null | undefined>,

		/** Link to the connector's signup page. */
		signup_url: FormControl<string | null | undefined>,

		/** Status of the connector. Connectors with status live or beta are callable. */
		status: FormControl<ApiStatus | null | undefined>,

		/** Link to the connector's website. */
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			auth_only: new FormControl<boolean | null | undefined>(undefined),
			auth_type: new FormControl<ConnectorAuth_type | null | undefined>(undefined),
			blind_mapped: new FormControl<boolean | null | undefined>(undefined),
			custom_scopes: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			free_trial_available: new FormControl<boolean | null | undefined>(undefined),
			has_sandbox_credentials: new FormControl<boolean | null | undefined>(undefined),
			icon_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			oauth_credentials_source: new FormControl<ConnectorOauth_credentials_source | null | undefined>(undefined),
			oauth_grant_type: new FormControl<ConnectorOauth_grant_type | null | undefined>(undefined),
			partner_signup_url: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			signup_url: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiStatus | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorAuth_type { oauth2 = 0, apiKey = 1, basic = 2, custom = 3, none = 4 }

	export interface ConnectorDoc {

		/** Audience for the doc. */
		audience?: ConnectorDocAudience | null;

		/** Format of the doc. */
		format?: ConnectorDocFormat | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Name of the doc. */
		name?: string | null;

		/** Link to fetch the content of the doc. */
		url?: string | null;
	}
	export interface ConnectorDocFormProperties {

		/** Audience for the doc. */
		audience: FormControl<ConnectorDocAudience | null | undefined>,

		/** Format of the doc. */
		format: FormControl<ConnectorDocFormat | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Name of the doc. */
		name: FormControl<string | null | undefined>,

		/** Link to fetch the content of the doc. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateConnectorDocFormGroup() {
		return new FormGroup<ConnectorDocFormProperties>({
			audience: new FormControl<ConnectorDocAudience | null | undefined>(undefined),
			format: new FormControl<ConnectorDocFormat | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorDocAudience { application_owner = 0, consumer = 1 }

	export enum ConnectorDocFormat { markdown = 0 }

	export enum ConnectorOauth_credentials_source { integration = 0, connection = 1 }

	export enum ConnectorOauth_grant_type { authorization_code = 0, client_credentials = 1, password = 2 }

	export interface ConnectorOauth_scopes {

		/** List of Unified APIs that request this OAuth Scope by default. Application owners can customize the requested scopes. */
		default_apis?: Array<string>;

		/** ID of the OAuth scope. */
		id?: string | null;

		/** Label of the OAuth scope. */
		label?: string | null;
	}
	export interface ConnectorOauth_scopesFormProperties {

		/** ID of the OAuth scope. */
		id: FormControl<string | null | undefined>,

		/** Label of the OAuth scope. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateConnectorOauth_scopesFormGroup() {
		return new FormGroup<ConnectorOauth_scopesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource. */
	export interface SchemaSupport {

		/** Can a resource schema be retrieved for this connector? */
		supported?: boolean | null;
	}

	/** When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource. */
	export interface SchemaSupportFormProperties {

		/** Can a resource schema be retrieved for this connector? */
		supported: FormControl<boolean | null | undefined>,
	}
	export function CreateSchemaSupportFormGroup() {
		return new FormGroup<SchemaSupportFormProperties>({
			supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ConnectorSetting {
		id?: string | null;
		label?: string | null;
		type?: ConnectorSettingType | null;
	}
	export interface ConnectorSettingFormProperties {
		id: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		type: FormControl<ConnectorSettingType | null | undefined>,
	}
	export function CreateConnectorSettingFormGroup() {
		return new FormGroup<ConnectorSettingFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ConnectorSettingType | null | undefined>(undefined),
		});

	}

	export enum ConnectorSettingType { text = 0, checkbox = 1, tel = 2, email = 3, url = 4, textarea = 5, select = 6, 'filtered-select' = 7, 'multi-select' = 8, datetime = 9, date = 10, time = 11, number = 12, password = 13 }


	/** Unify event that is supported on the connector. Events are delivered via Webhooks. */
	export interface ConnectorEvent {

		/** Downstream event type */
		downstream_event_type?: string | null;

		/** Unify entity type */
		entity_type?: string | null;

		/** Unify event source */
		event_source?: PaginationCoverageMode | null;

		/** Unify event type */
		event_type?: string | null;
		resources?: Array<string>;
	}

	/** Unify event that is supported on the connector. Events are delivered via Webhooks. */
	export interface ConnectorEventFormProperties {

		/** Downstream event type */
		downstream_event_type: FormControl<string | null | undefined>,

		/** Unify entity type */
		entity_type: FormControl<string | null | undefined>,

		/** Unify event source */
		event_source: FormControl<PaginationCoverageMode | null | undefined>,

		/** Unify event type */
		event_type: FormControl<string | null | undefined>,
	}
	export function CreateConnectorEventFormGroup() {
		return new FormGroup<ConnectorEventFormProperties>({
			downstream_event_type: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<string | null | undefined>(undefined),
			event_source: new FormControl<PaginationCoverageMode | null | undefined>(undefined),
			event_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedConnectorResource {

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id?: string | null;

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name?: string | null;

		/** ID of the resource, typically a lowercased version of name. */
		id?: string | null;

		/** Name of the resource (plural) */
		name?: string | null;

		/** Status of the resource. Resources with status live or beta are callable. */
		status?: ApiResourcesStatus | null;
	}
	export interface LinkedConnectorResourceFormProperties {

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id: FormControl<string | null | undefined>,

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name: FormControl<string | null | undefined>,

		/** ID of the resource, typically a lowercased version of name. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource (plural) */
		name: FormControl<string | null | undefined>,

		/** Status of the resource. Resources with status live or beta are callable. */
		status: FormControl<ApiResourcesStatus | null | undefined>,
	}
	export function CreateLinkedConnectorResourceFormGroup() {
		return new FormGroup<LinkedConnectorResourceFormProperties>({
			downstream_id: new FormControl<string | null | undefined>(undefined),
			downstream_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiResourcesStatus | null | undefined>(undefined),
		});

	}

	export interface ConnectorTls_support {

		/** Description of the TLS support */
		description?: string | null;
		type?: string | null;
	}
	export interface ConnectorTls_supportFormProperties {

		/** Description of the TLS support */
		description: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateConnectorTls_supportFormGroup() {
		return new FormGroup<ConnectorTls_supportFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectorUnified_apis {

		/** Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API */
		auth_only?: boolean | null;

		/** List of resources that are not supported on the downstream. */
		downstream_unsupported_resources?: Array<string>;

		/** Name of Apideck Unified API */
		id?: ConnectorUnified_apisId | null;

		/** Name of the API. */
		name?: string | null;
		ConnectorUnified_apisOauth_scopes?: Array<ConnectorUnified_apisOauth_scopes>;

		/** List of events that are supported on the connector for this Unified API. */
		supported_events?: Array<ConnectorEvent>;

		/** List of resources that are supported on the connector. */
		supported_resources?: Array<LinkedConnectorResource>;
	}
	export interface ConnectorUnified_apisFormProperties {

		/** Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API */
		auth_only: FormControl<boolean | null | undefined>,

		/** Name of Apideck Unified API */
		id: FormControl<ConnectorUnified_apisId | null | undefined>,

		/** Name of the API. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectorUnified_apisFormGroup() {
		return new FormGroup<ConnectorUnified_apisFormProperties>({
			auth_only: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<ConnectorUnified_apisId | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorUnified_apisId { accounting = 0, ats = 1, calendar = 2, crm = 3, csp = 4, 'customer-support' = 5, ecommerce = 6, email = 7, 'email-marketing' = 8, 'expense-management' = 9, 'file-storage' = 10, form = 11, hris = 12, lead = 13, payroll = 14, pos = 15, procurement = 16, 'project-management' = 17, script = 18, sms = 19, spreadsheet = 20, 'team-messaging' = 21, 'issue-tracking' = 22, 'time-registration' = 23, 'transactional-email' = 24, vault = 25, 'data-warehouse' = 26 }

	export interface ConnectorUnified_apisOauth_scopes {

		/** ID of the OAuth scope. */
		id?: string | null;

		/** Label of the OAuth scope. */
		label?: string | null;
	}
	export interface ConnectorUnified_apisOauth_scopesFormProperties {

		/** ID of the OAuth scope. */
		id: FormControl<string | null | undefined>,

		/** Label of the OAuth scope. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateConnectorUnified_apisOauth_scopesFormGroup() {
		return new FormGroup<ConnectorUnified_apisOauth_scopesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling. */
	export interface WebhookSupport {

		/** How the subscription is managed in the downstream. */
		managed_via?: WebhookSupportManaged_via | null;

		/** Mode of the webhook support. */
		mode?: WebhookSupportMode | null;

		/** Received events are scoped to connection or across integration. */
		subscription_level?: WebhookSupportSubscription_level | null;

		/** Virtual webhook config for the connector. */
		virtual_webhooks?: WebhookSupportVirtual_webhooks;
	}

	/** How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling. */
	export interface WebhookSupportFormProperties {

		/** How the subscription is managed in the downstream. */
		managed_via: FormControl<WebhookSupportManaged_via | null | undefined>,

		/** Mode of the webhook support. */
		mode: FormControl<WebhookSupportMode | null | undefined>,

		/** Received events are scoped to connection or across integration. */
		subscription_level: FormControl<WebhookSupportSubscription_level | null | undefined>,
	}
	export function CreateWebhookSupportFormGroup() {
		return new FormGroup<WebhookSupportFormProperties>({
			managed_via: new FormControl<WebhookSupportManaged_via | null | undefined>(undefined),
			mode: new FormControl<WebhookSupportMode | null | undefined>(undefined),
			subscription_level: new FormControl<WebhookSupportSubscription_level | null | undefined>(undefined),
		});

	}

	export enum WebhookSupportManaged_via { manual = 0, api = 1 }

	export enum WebhookSupportMode { native = 0, virtual = 1, none = 2 }

	export enum WebhookSupportSubscription_level { connection = 0, integration = 1 }

	export interface WebhookSupportVirtual_webhooks {

		/**
		 * The rate at which requests for resources will be made to downstream.
		 * Required
		 */
		request_rate: WebhookSupportVirtual_webhooksRequest_rate;

		/** The resources that will be requested from downstream. */
		resources?: string | null;
	}
	export interface WebhookSupportVirtual_webhooksFormProperties {

		/** The resources that will be requested from downstream. */
		resources: FormControl<string | null | undefined>,
	}
	export function CreateWebhookSupportVirtual_webhooksFormGroup() {
		return new FormGroup<WebhookSupportVirtual_webhooksFormProperties>({
			resources: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookSupportVirtual_webhooksRequest_rate {

		/**
		 * The number of requests per window unit.
		 * Required
		 */
		rate: number;

		/**
		 * Size of request window.
		 * Required
		 */
		size: number;

		/**
		 * The window unit for the rate.
		 * Required
		 */
		unit: WebhookSupportVirtual_webhooksRequest_rateUnit;
	}
	export interface WebhookSupportVirtual_webhooksRequest_rateFormProperties {

		/**
		 * The number of requests per window unit.
		 * Required
		 */
		rate: FormControl<number | null | undefined>,

		/**
		 * Size of request window.
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The window unit for the rate.
		 * Required
		 */
		unit: FormControl<WebhookSupportVirtual_webhooksRequest_rateUnit | null | undefined>,
	}
	export function CreateWebhookSupportVirtual_webhooksRequest_rateFormGroup() {
		return new FormGroup<WebhookSupportVirtual_webhooksRequest_rateFormProperties>({
			rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<WebhookSupportVirtual_webhooksRequest_rateUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WebhookSupportVirtual_webhooksRequest_rateUnit { second = 0, minute = 1, hour = 2, day = 3 }

	export interface ConnectorResource {

		/** Indicates if custom fields are supported on this resource. */
		custom_fields_supported?: boolean | null;

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id?: string | null;

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name?: string | null;

		/** List of operations that are not supported on the downstream. */
		downstream_unsupported_operations?: Array<string>;

		/** ID of the resource, typically a lowercased version of name. */
		id?: string | null;

		/** Name of the resource (plural) */
		name?: string | null;
		pagination?: PaginationCoverage;

		/** Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. */
		pagination_supported?: boolean | null;

		/** Status of the resource. Resources with status live or beta are callable. */
		status?: ApiResourcesStatus | null;

		/** Supported fields on the detail endpoint. */
		supported_fields?: Array<SupportedProperty>;

		/** Supported filters on the list endpoint of the resource. */
		supported_filters?: Array<string>;

		/** Supported fields on the list endpoint. */
		supported_list_fields?: Array<SupportedProperty>;

		/** List of supported operations on the resource. */
		supported_operations?: Array<string>;

		/** Supported sorting properties on the list endpoint of the resource. */
		supported_sort_by?: Array<string>;
	}
	export interface ConnectorResourceFormProperties {

		/** Indicates if custom fields are supported on this resource. */
		custom_fields_supported: FormControl<boolean | null | undefined>,

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id: FormControl<string | null | undefined>,

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name: FormControl<string | null | undefined>,

		/** ID of the resource, typically a lowercased version of name. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource (plural) */
		name: FormControl<string | null | undefined>,

		/** Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. */
		pagination_supported: FormControl<boolean | null | undefined>,

		/** Status of the resource. Resources with status live or beta are callable. */
		status: FormControl<ApiResourcesStatus | null | undefined>,
	}
	export function CreateConnectorResourceFormGroup() {
		return new FormGroup<ConnectorResourceFormProperties>({
			custom_fields_supported: new FormControl<boolean | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			downstream_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pagination_supported: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ApiResourcesStatus | null | undefined>(undefined),
		});

	}

	export interface ConnectorResourceExample {
	}
	export interface ConnectorResourceExampleFormProperties {
	}
	export function CreateConnectorResourceExampleFormGroup() {
		return new FormGroup<ConnectorResourceExampleFormProperties>({
		});

	}

	export interface ConnectorResourceSchema {
	}
	export interface ConnectorResourceSchemaFormProperties {
	}
	export function CreateConnectorResourceSchemaFormGroup() {
		return new FormGroup<ConnectorResourceSchemaFormProperties>({
		});

	}


	/** Status of the connector. Connectors with status live or beta are callable. */
	export enum ConnectorStatus { live = 0, beta = 1, development = 2, considering = 3 }

	export interface ConnectorsFilter {

		/** Status of the connector. Connectors with status live or beta are callable. */
		status?: ApiStatus | null;

		/** Name of Apideck Unified API */
		unified_api?: ConnectorUnified_apisId | null;
	}
	export interface ConnectorsFilterFormProperties {

		/** Status of the connector. Connectors with status live or beta are callable. */
		status: FormControl<ApiStatus | null | undefined>,

		/** Name of Apideck Unified API */
		unified_api: FormControl<ConnectorUnified_apisId | null | undefined>,
	}
	export function CreateConnectorsFilterFormGroup() {
		return new FormGroup<ConnectorsFilterFormProperties>({
			status: new FormControl<ApiStatus | null | undefined>(undefined),
			unified_api: new FormControl<ConnectorUnified_apisId | null | undefined>(undefined),
		});

	}

	export interface GetApiResourceCoverageResponse {

		/** Required */
		data: ApiResourceCoverage;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetApiResourceCoverageResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetApiResourceCoverageResponseFormGroup() {
		return new FormGroup<GetApiResourceCoverageResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to navigate to previous or next pages through the API */
	export interface Links {

		/** Link to navigate to the current page through the API */
		current?: string | null;

		/** Link to navigate to the previous page through the API */
		next?: string | null;

		/** Link to navigate to the previous page through the API */
		previous?: string | null;
	}

	/** Links to navigate to previous or next pages through the API */
	export interface LinksFormProperties {

		/** Link to navigate to the current page through the API */
		current: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		next: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response metadata */
	export interface Meta {

		/** Cursors to navigate to previous or next pages through the API */
		cursors?: MetaCursors;

		/** Number of items returned in the data property of the response */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/** Number of items returned in the data property of the response */
		items_on_page: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			items_on_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetaCursors {

		/** Cursor to navigate to the current page of results through the API */
		current?: string | null;

		/** Cursor to navigate to the next page of results through the API */
		next?: string | null;

		/** Cursor to navigate to the previous page of results through the API */
		previous?: string | null;
	}
	export interface MetaCursorsFormProperties {

		/** Cursor to navigate to the current page of results through the API */
		current: FormControl<string | null | undefined>,

		/** Cursor to navigate to the next page of results through the API */
		next: FormControl<string | null | undefined>,

		/** Cursor to navigate to the previous page of results through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateMetaCursorsFormGroup() {
		return new FormGroup<MetaCursorsFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetApiResourceResponse {

		/** Required */
		data: ApiResource;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetApiResourceResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetApiResourceResponseFormGroup() {
		return new FormGroup<GetApiResourceResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetApiResponse {

		/** Required */
		data: Api;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetApiResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetApiResponseFormGroup() {
		return new FormGroup<GetApiResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetApisResponse {

		/** Required */
		data: Array<Api>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetApisResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetApisResponseFormGroup() {
		return new FormGroup<GetApisResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectorResourceExampleResponse {

		/** Required */
		data: GetConnectorResourceExampleResponseData;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetConnectorResourceExampleResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectorResourceExampleResponseFormGroup() {
		return new FormGroup<GetConnectorResourceExampleResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectorResourceExampleResponseData {
		example_response?: ConnectorResourceExample;
		resource?: LinkedConnectorResource;

		/** Service provider identifier */
		service_id?: string | null;

		/** Name of Apideck Unified API */
		unified_api?: ConnectorUnified_apisId | null;
	}
	export interface GetConnectorResourceExampleResponseDataFormProperties {

		/** Service provider identifier */
		service_id: FormControl<string | null | undefined>,

		/** Name of Apideck Unified API */
		unified_api: FormControl<ConnectorUnified_apisId | null | undefined>,
	}
	export function CreateGetConnectorResourceExampleResponseDataFormGroup() {
		return new FormGroup<GetConnectorResourceExampleResponseDataFormProperties>({
			service_id: new FormControl<string | null | undefined>(undefined),
			unified_api: new FormControl<ConnectorUnified_apisId | null | undefined>(undefined),
		});

	}

	export interface GetConnectorResourceResponse {

		/** Required */
		data: ConnectorResource;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetConnectorResourceResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectorResourceResponseFormGroup() {
		return new FormGroup<GetConnectorResourceResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectorResourceSchemaResponse {

		/** Required */
		data: ConnectorResourceSchema;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetConnectorResourceSchemaResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectorResourceSchemaResponseFormGroup() {
		return new FormGroup<GetConnectorResourceSchemaResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectorResponse {

		/** Required */
		data: Connector;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetConnectorResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectorResponseFormGroup() {
		return new FormGroup<GetConnectorResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectorsResponse {

		/** Required */
		data: Array<Connector>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetConnectorsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectorsResponseFormGroup() {
		return new FormGroup<GetConnectorsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotFoundResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotFoundResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundResponseFormGroup() {
		return new FormGroup<NotFoundResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentRequiredResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface PaymentRequiredResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRequiredResponseFormGroup() {
		return new FormGroup<PaymentRequiredResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of the resource. Resources with status live or beta are callable. */
	export enum ResourceStatus { live = 0, beta = 1, development = 2, upcoming = 3, considering = 4 }

	export interface TooManyRequestsResponse {
		detail?: TooManyRequestsResponseDetail;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface TooManyRequestsResponseFormProperties {

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsResponseFormGroup() {
		return new FormGroup<TooManyRequestsResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyRequestsResponseDetail {
		context?: string | null;
		error?: string | null;
	}
	export interface TooManyRequestsResponseDetailFormProperties {
		context: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsResponseDetailFormGroup() {
		return new FormGroup<TooManyRequestsResponseDetailFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnauthorizedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnauthorizedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedResponseFormGroup() {
		return new FormGroup<UnauthorizedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnexpectedErrorResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnexpectedErrorResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnexpectedErrorResponseFormGroup() {
		return new FormGroup<UnexpectedErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name of Apideck Unified API */
	export enum UnifiedApiId { accounting = 0, ats = 1, calendar = 2, crm = 3, csp = 4, 'customer-support' = 5, ecommerce = 6, email = 7, 'email-marketing' = 8, 'expense-management' = 9, 'file-storage' = 10, form = 11, hris = 12, lead = 13, payroll = 14, pos = 15, procurement = 16, 'project-management' = 17, script = 18, sms = 19, spreadsheet = 20, 'team-messaging' = 21, 'issue-tracking' = 22, 'time-registration' = 23, 'transactional-email' = 24, vault = 25, 'data-warehouse' = 26 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List APIs
		 * List APIs
		 * Get connector/apis
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {ApisFilter} filter Apply filters
		 * @return {GetApisResponse} Apis
		 */
		ApisAll(cursor: string | null | undefined, limit: number | null | undefined, filter: ApisFilter | null | undefined): Observable<GetApisResponse> {
			return this.http.get<GetApisResponse>(this.baseUri + 'connector/apis?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter, {});
		}

		/**
		 * Get API
		 * Get API
		 * Get connector/apis/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @return {GetApiResponse} Apis
		 */
		ApisOne(id: string): Observable<GetApiResponse> {
			return this.http.get<GetApiResponse>(this.baseUri + 'connector/apis/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get API Resource
		 * Get API Resource
		 * Get connector/apis/{id}/resources/{resource_id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} resource_id ID of the resource you are acting upon.
		 * @return {GetApiResourceResponse} ApiResources
		 */
		ApiResourcesOne(id: string, resource_id: string): Observable<GetApiResourceResponse> {
			return this.http.get<GetApiResourceResponse>(this.baseUri + 'connector/apis/' + (id == null ? '' : encodeURIComponent(id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)), {});
		}

		/**
		 * Get API Resource Coverage
		 * Get API Resource Coverage
		 * Get connector/apis/{id}/resources/{resource_id}/coverage
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} resource_id ID of the resource you are acting upon.
		 * @return {GetApiResourceCoverageResponse} ApiResources
		 */
		ApiResourceCoverageOne(id: string, resource_id: string): Observable<GetApiResourceCoverageResponse> {
			return this.http.get<GetApiResourceCoverageResponse>(this.baseUri + 'connector/apis/' + (id == null ? '' : encodeURIComponent(id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/coverage', {});
		}

		/**
		 * List Connectors
		 * List Connectors
		 * Get connector/connectors
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {ConnectorsFilter} filter Apply filters
		 * @return {GetConnectorsResponse} Connectors
		 */
		ConnectorsAll(cursor: string | null | undefined, limit: number | null | undefined, filter: ConnectorsFilter | null | undefined): Observable<GetConnectorsResponse> {
			return this.http.get<GetConnectorsResponse>(this.baseUri + 'connector/connectors?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter, {});
		}

		/**
		 * Get Connector
		 * Get Connector
		 * Get connector/connectors/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @return {GetConnectorResponse} Connectors
		 */
		ConnectorsOne(id: string): Observable<GetConnectorResponse> {
			return this.http.get<GetConnectorResponse>(this.baseUri + 'connector/connectors/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get Connector Doc content
		 * Get Connector Doc content
		 * Get connector/connectors/{id}/docs/{doc_id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} doc_id ID of the Doc
		 * @return {void} Connectors
		 */
		ConnectorDocsOne(id: string, doc_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'connector/connectors/' + (id == null ? '' : encodeURIComponent(id)) + '/docs/' + (doc_id == null ? '' : encodeURIComponent(doc_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Connector Resource
		 * Get Connector Resource
		 * Get connector/connectors/{id}/resources/{resource_id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} resource_id ID of the resource you are acting upon.
		 * @param {ConnectorUnified_apisId} unified_api Specify unified API for the connector resource. This is useful when a resource appears in multiple APIs
		 * @return {GetConnectorResourceResponse} ConnectorResources
		 */
		ConnectorResourcesOne(id: string, resource_id: string, unified_api: ConnectorUnified_apisId | null | undefined): Observable<GetConnectorResourceResponse> {
			return this.http.get<GetConnectorResourceResponse>(this.baseUri + 'connector/connectors/' + (id == null ? '' : encodeURIComponent(id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '&unified_api=' + unified_api, {});
		}

		/**
		 * Get Connector Resource Example
		 * Get Connector Resource Example
		 * Get connector/connectors/{id}/resources/{resource_id}/unified_api/{api_id}/example
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} resource_id ID of the resource you are acting upon.
		 * @param {string} api_id ID of the Unified API
		 * @return {GetConnectorResourceExampleResponse} Connector Resource Example
		 */
		ConnectorResourcesExample(id: string, resource_id: string, api_id: string): Observable<GetConnectorResourceExampleResponse> {
			return this.http.get<GetConnectorResourceExampleResponse>(this.baseUri + 'connector/connectors/' + (id == null ? '' : encodeURIComponent(id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/unified_api/' + (api_id == null ? '' : encodeURIComponent(api_id)) + '/example', {});
		}

		/**
		 * Get Connector Resource Schema
		 * Get Connector Resource Schema
		 * Get connector/connectors/{id}/resources/{resource_id}/unified_api/{api_id}/schema
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} resource_id ID of the resource you are acting upon.
		 * @param {string} api_id ID of the Unified API
		 * @return {GetConnectorResourceSchemaResponse} Connector Resource Schema
		 */
		ConnectorResourcesSchema(id: string, resource_id: string, api_id: string): Observable<GetConnectorResourceSchemaResponse> {
			return this.http.get<GetConnectorResourceSchemaResponse>(this.baseUri + 'connector/connectors/' + (id == null ? '' : encodeURIComponent(id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/unified_api/' + (api_id == null ? '' : encodeURIComponent(api_id)) + '/schema', {});
		}
	}

}

