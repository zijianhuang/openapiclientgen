import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An API that can be served by one or more Gateways. */
	export interface ApigatewayApi {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Optional. Display name. */
		displayName?: string | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Optional. Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new Service will automatically be created in the same project as this API. */
		managedService?: string | null;

		/** Output only. Resource name of the API. Format: projects/{project}/locations/global/apis/{api} */
		name?: string | null;

		/** Output only. State of the API. */
		state?: ApigatewayApiState | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** An API that can be served by one or more Gateways. */
	export interface ApigatewayApiFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new Service will automatically be created in the same project as this API. */
		managedService: FormControl<string | null | undefined>,

		/** Output only. Resource name of the API. Format: projects/{project}/locations/global/apis/{api} */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the API. */
		state: FormControl<ApigatewayApiState | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayApiFormGroup() {
		return new FormGroup<ApigatewayApiFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			managedService: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ApigatewayApiState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApigatewayApiState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', FAILED = 'FAILED', DELETING = 'DELETING', UPDATING = 'UPDATING' }


	/** An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config. */
	export interface ApigatewayApiConfig {

		/** Output only. Created time. */
		createTime?: string | null;

		/** Optional. Display name. */
		displayName?: string | null;

		/** Configuration settings for Gateways. */
		gatewayConfig?: ApigatewayGatewayConfig;

		/** Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (`{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`) or its full resource name (`projects/{PROJECT}/accounts/{UNIQUE_ID}`). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service. */
		gatewayServiceAccount?: string | null;

		/** Optional. gRPC service definition files. If specified, openapi_documents must not be included. */
		grpcServices?: Array<ApigatewayApiConfigGrpcServiceDefinition>;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields. */
		managedServiceConfigs?: Array<ApigatewayApiConfigFile>;

		/** Output only. Resource name of the API Config. Format: projects/{project}/locations/global/apis/{api}/configs/{api_config} */
		name?: string | null;

		/** Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included. */
		openapiDocuments?: Array<ApigatewayApiConfigOpenApiDocument>;

		/** Output only. The ID of the associated Service Config ( https://cloud.google.com/service-infrastructure/docs/glossary#config). */
		serviceConfigId?: string | null;

		/** Output only. State of the API Config. */
		state?: ApigatewayApiConfigState | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config. */
	export interface ApigatewayApiConfigFormProperties {

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (`{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`) or its full resource name (`projects/{PROJECT}/accounts/{UNIQUE_ID}`). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service. */
		gatewayServiceAccount: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Resource name of the API Config. Format: projects/{project}/locations/global/apis/{api}/configs/{api_config} */
		name: FormControl<string | null | undefined>,

		/** Output only. The ID of the associated Service Config ( https://cloud.google.com/service-infrastructure/docs/glossary#config). */
		serviceConfigId: FormControl<string | null | undefined>,

		/** Output only. State of the API Config. */
		state: FormControl<ApigatewayApiConfigState | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayApiConfigFormGroup() {
		return new FormGroup<ApigatewayApiConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			gatewayServiceAccount: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ApigatewayApiConfigState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration settings for Gateways. */
	export interface ApigatewayGatewayConfig {

		/** Configuration for all backends. */
		backendConfig?: ApigatewayBackendConfig;
	}

	/** Configuration settings for Gateways. */
	export interface ApigatewayGatewayConfigFormProperties {
	}
	export function CreateApigatewayGatewayConfigFormGroup() {
		return new FormGroup<ApigatewayGatewayConfigFormProperties>({
		});

	}


	/** Configuration for all backends. */
	export interface ApigatewayBackendConfig {

		/** Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend). This may either be the Service Account's email (i.e. "{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com") or its full resource name (i.e. "projects/{PROJECT}/accounts/{UNIQUE_ID}"). This is most often used when the backend is a GCP resource such as a Cloud Run Service or an IAP-secured service. Note that this token is always sent as an authorization header bearer token. The audience of the OIDC token is configured in the associated Service Config in the BackendRule option (https://github.com/googleapis/googleapis/blob/master/google/api/backend.proto#L125). */
		googleServiceAccount?: string | null;
	}

	/** Configuration for all backends. */
	export interface ApigatewayBackendConfigFormProperties {

		/** Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend). This may either be the Service Account's email (i.e. "{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com") or its full resource name (i.e. "projects/{PROJECT}/accounts/{UNIQUE_ID}"). This is most often used when the backend is a GCP resource such as a Cloud Run Service or an IAP-secured service. Note that this token is always sent as an authorization header bearer token. The audience of the OIDC token is configured in the associated Service Config in the BackendRule option (https://github.com/googleapis/googleapis/blob/master/google/api/backend.proto#L125). */
		googleServiceAccount: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayBackendConfigFormGroup() {
		return new FormGroup<ApigatewayBackendConfigFormProperties>({
			googleServiceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A gRPC service definition. */
	export interface ApigatewayApiConfigGrpcServiceDefinition {

		/** A lightweight description of a file. */
		fileDescriptorSet?: ApigatewayApiConfigFile;

		/** Optional. Uncompiled proto files associated with the descriptor set, used for display purposes (server-side compilation is not supported). These should match the inputs to 'protoc' command used to generate file_descriptor_set. */
		source?: Array<ApigatewayApiConfigFile>;
	}

	/** A gRPC service definition. */
	export interface ApigatewayApiConfigGrpcServiceDefinitionFormProperties {
	}
	export function CreateApigatewayApiConfigGrpcServiceDefinitionFormGroup() {
		return new FormGroup<ApigatewayApiConfigGrpcServiceDefinitionFormProperties>({
		});

	}


	/** A lightweight description of a file. */
	export interface ApigatewayApiConfigFile {

		/** The bytes that constitute the file. */
		contents?: string | null;

		/** The file path (full or relative path). This is typically the path of the file when it is uploaded. */
		path?: string | null;
	}

	/** A lightweight description of a file. */
	export interface ApigatewayApiConfigFileFormProperties {

		/** The bytes that constitute the file. */
		contents: FormControl<string | null | undefined>,

		/** The file path (full or relative path). This is typically the path of the file when it is uploaded. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayApiConfigFileFormGroup() {
		return new FormGroup<ApigatewayApiConfigFileFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An OpenAPI Specification Document describing an API. */
	export interface ApigatewayApiConfigOpenApiDocument {

		/** A lightweight description of a file. */
		document?: ApigatewayApiConfigFile;
	}

	/** An OpenAPI Specification Document describing an API. */
	export interface ApigatewayApiConfigOpenApiDocumentFormProperties {
	}
	export function CreateApigatewayApiConfigOpenApiDocumentFormGroup() {
		return new FormGroup<ApigatewayApiConfigOpenApiDocumentFormProperties>({
		});

	}

	export enum ApigatewayApiConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', FAILED = 'FAILED', DELETING = 'DELETING', UPDATING = 'UPDATING', ACTIVATING = 'ACTIVATING' }


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface ApigatewayAuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<ApigatewayAuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface ApigatewayAuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayAuditConfigFormGroup() {
		return new FormGroup<ApigatewayAuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface ApigatewayAuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: ApigatewayAuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface ApigatewayAuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<ApigatewayAuditLogConfigLogType | null | undefined>,
	}
	export function CreateApigatewayAuditLogConfigFormGroup() {
		return new FormGroup<ApigatewayAuditLogConfigFormProperties>({
			logType: new FormControl<ApigatewayAuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum ApigatewayAuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface ApigatewayBinding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: ApigatewayExpr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface ApigatewayBindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayBindingFormGroup() {
		return new FormGroup<ApigatewayBindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ApigatewayExpr {

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
	export interface ApigatewayExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayExprFormGroup() {
		return new FormGroup<ApigatewayExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface ApigatewayCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface ApigatewayCancelOperationRequestFormProperties {
	}
	export function CreateApigatewayCancelOperationRequestFormGroup() {
		return new FormGroup<ApigatewayCancelOperationRequestFormProperties>({
		});

	}


	/** A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection. */
	export interface ApigatewayGateway {

		/** Required. Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig} */
		apiConfig?: string | null;

		/** Output only. Created time. */
		createTime?: string | null;

		/** Output only. The default API Gateway host name of the form `{gateway_id}-{hash}.{region_code}.gateway.dev`. */
		defaultHostname?: string | null;

		/** Optional. Display name. */
		displayName?: string | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Output only. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway} */
		name?: string | null;

		/** Output only. The current state of the Gateway. */
		state?: ApigatewayApiState | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection. */
	export interface ApigatewayGatewayFormProperties {

		/** Required. Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig} */
		apiConfig: FormControl<string | null | undefined>,

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The default API Gateway host name of the form `{gateway_id}-{hash}.{region_code}.gateway.dev`. */
		defaultHostname: FormControl<string | null | undefined>,

		/** Optional. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway} */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of the Gateway. */
		state: FormControl<ApigatewayApiState | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayGatewayFormGroup() {
		return new FormGroup<ApigatewayGatewayFormProperties>({
			apiConfig: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			defaultHostname: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ApigatewayApiState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ApiGatewayService.ListApiConfigs */
	export interface ApigatewayListApiConfigsResponse {

		/** API Configs. */
		apiConfigs?: Array<ApigatewayApiConfig>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** Response message for ApiGatewayService.ListApiConfigs */
	export interface ApigatewayListApiConfigsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayListApiConfigsResponseFormGroup() {
		return new FormGroup<ApigatewayListApiConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ApiGatewayService.ListApis */
	export interface ApigatewayListApisResponse {

		/** APIs. */
		apis?: Array<ApigatewayApi>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** Response message for ApiGatewayService.ListApis */
	export interface ApigatewayListApisResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayListApisResponseFormGroup() {
		return new FormGroup<ApigatewayListApisResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ApiGatewayService.ListGateways */
	export interface ApigatewayListGatewaysResponse {

		/** Gateways. */
		gateways?: Array<ApigatewayGateway>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** Response message for ApiGatewayService.ListGateways */
	export interface ApigatewayListGatewaysResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayListGatewaysResponseFormGroup() {
		return new FormGroup<ApigatewayListGatewaysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ApigatewayListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<ApigatewayLocation>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ApigatewayListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayListLocationsResponseFormGroup() {
		return new FormGroup<ApigatewayListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface ApigatewayLocation {

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
	export interface ApigatewayLocationFormProperties {

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
	export function CreateApigatewayLocationFormGroup() {
		return new FormGroup<ApigatewayLocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ApigatewayListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<ApigatewayOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ApigatewayListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayListOperationsResponseFormGroup() {
		return new FormGroup<ApigatewayListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface ApigatewayOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: ApigatewayStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface ApigatewayOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateApigatewayOperationFormGroup() {
		return new FormGroup<ApigatewayOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface ApigatewayStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface ApigatewayStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayStatusFormGroup() {
		return new FormGroup<ApigatewayStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface ApigatewayOperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. Diagnostics generated during processing of configuration source files. */
		diagnostics?: Array<ApigatewayOperationMetadataDiagnostic>;

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
	export interface ApigatewayOperationMetadataFormProperties {

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
	export function CreateApigatewayOperationMetadataFormGroup() {
		return new FormGroup<ApigatewayOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Diagnostic information from configuration processing. */
	export interface ApigatewayOperationMetadataDiagnostic {

		/** Location of the diagnostic. */
		location?: string | null;

		/** The diagnostic message. */
		message?: string | null;
	}

	/** Diagnostic information from configuration processing. */
	export interface ApigatewayOperationMetadataDiagnosticFormProperties {

		/** Location of the diagnostic. */
		location: FormControl<string | null | undefined>,

		/** The diagnostic message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateApigatewayOperationMetadataDiagnosticFormGroup() {
		return new FormGroup<ApigatewayOperationMetadataDiagnosticFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface ApigatewayPolicy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<ApigatewayAuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<ApigatewayBinding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface ApigatewayPolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreateApigatewayPolicyFormGroup() {
		return new FormGroup<ApigatewayPolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface ApigatewaySetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: ApigatewayPolicy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface ApigatewaySetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateApigatewaySetIamPolicyRequestFormGroup() {
		return new FormGroup<ApigatewaySetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface ApigatewayTestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface ApigatewayTestIamPermissionsRequestFormProperties {
	}
	export function CreateApigatewayTestIamPermissionsRequestFormGroup() {
		return new FormGroup<ApigatewayTestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface ApigatewayTestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface ApigatewayTestIamPermissionsResponseFormProperties {
	}
	export function CreateApigatewayTestIamPermissionsResponseFormGroup() {
		return new FormGroup<ApigatewayTestIamPermissionsResponseFormProperties>({
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Apigateway_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {Apigateway_projects_locations_operations_getView} view Specifies which fields of the API Config are returned in the response. Defaults to `BASIC` view.
		 * @return {ApigatewayOperation} Successful response
		 */
		Apigateway_projects_locations_operations_get(name: string, view: Apigateway_projects_locations_operations_getView | null | undefined): Observable<ApigatewayOperation> {
			return this.http.get<ApigatewayOperation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates the parameters of a single Gateway.
		 * Patch v1beta/{name}
		 * @param {string} name Output only. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway}
		 * @param {string} updateMask Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @return {ApigatewayOperation} Successful response
		 */
		Apigateway_projects_locations_gateways_patch(name: string, updateMask: string | null | undefined, requestBody: ApigatewayGateway): Observable<ApigatewayOperation> {
			return this.http.patch<ApigatewayOperation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ApigatewayListLocationsResponse} Successful response
		 */
		Apigateway_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ApigatewayListLocationsResponse> {
			return this.http.get<ApigatewayListLocationsResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ApigatewayListOperationsResponse} Successful response
		 */
		Apigateway_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ApigatewayListOperationsResponse> {
			return this.http.get<ApigatewayListOperationsResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1beta/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Apigateway_projects_locations_operations_cancel(name: string, requestBody: ApigatewayCancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Apis in a given project and location.
		 * Get v1beta/{parent}/apis
		 * @param {string} parent Required. Parent resource of the API, of the form: `projects/locations/global`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 * @param {string} pageToken Page token.
		 * @return {ApigatewayListApisResponse} Successful response
		 */
		Apigateway_projects_locations_apis_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ApigatewayListApisResponse> {
			return this.http.get<ApigatewayListApisResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apis&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Api in a given project and location.
		 * Post v1beta/{parent}/apis
		 * @param {string} parent Required. Parent resource of the API, of the form: `projects/locations/global`
		 * @param {string} apiId Required. Identifier to assign to the API. Must be unique within scope of the parent resource.
		 * @return {ApigatewayOperation} Successful response
		 */
		Apigateway_projects_locations_apis_create(parent: string, apiId: string | null | undefined, requestBody: ApigatewayApi): Observable<ApigatewayOperation> {
			return this.http.post<ApigatewayOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apis&apiId=' + (apiId == null ? '' : encodeURIComponent(apiId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ApiConfigs in a given project and location.
		 * Get v1beta/{parent}/configs
		 * @param {string} parent Required. Parent resource of the API Config, of the form: `projects/locations/global/apis/*`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 * @param {string} pageToken Page token.
		 * @return {ApigatewayListApiConfigsResponse} Successful response
		 */
		Apigateway_projects_locations_apis_configs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ApigatewayListApiConfigsResponse> {
			return this.http.get<ApigatewayListApiConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ApiConfig in a given project and location.
		 * Post v1beta/{parent}/configs
		 * @param {string} parent Required. Parent resource of the API Config, of the form: `projects/locations/global/apis/*`
		 * @param {string} apiConfigId Required. Identifier to assign to the API Config. Must be unique within scope of the parent resource.
		 * @return {ApigatewayOperation} Successful response
		 */
		Apigateway_projects_locations_apis_configs_create(parent: string, apiConfigId: string | null | undefined, requestBody: ApigatewayApiConfig): Observable<ApigatewayOperation> {
			return this.http.post<ApigatewayOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configs&apiConfigId=' + (apiConfigId == null ? '' : encodeURIComponent(apiConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Gateways in a given project and location.
		 * Get v1beta/{parent}/gateways
		 * @param {string} parent Required. Parent resource of the Gateway, of the form: `projects/locations/*`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 * @param {string} pageToken Page token.
		 * @return {ApigatewayListGatewaysResponse} Successful response
		 */
		Apigateway_projects_locations_gateways_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ApigatewayListGatewaysResponse> {
			return this.http.get<ApigatewayListGatewaysResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gateways&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Gateway in a given project and location.
		 * Post v1beta/{parent}/gateways
		 * @param {string} parent Required. Parent resource of the Gateway, of the form: `projects/locations/*`
		 * @param {string} gatewayId Required. Identifier to assign to the Gateway. Must be unique within scope of the parent resource.
		 * @return {ApigatewayOperation} Successful response
		 */
		Apigateway_projects_locations_gateways_create(parent: string, gatewayId: string | null | undefined, requestBody: ApigatewayGateway): Observable<ApigatewayOperation> {
			return this.http.post<ApigatewayOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gateways&gatewayId=' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {ApigatewayPolicy} Successful response
		 */
		Apigateway_projects_locations_gateways_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<ApigatewayPolicy> {
			return this.http.get<ApigatewayPolicy>(this.baseUri + 'v1beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {ApigatewayPolicy} Successful response
		 */
		Apigateway_projects_locations_gateways_setIamPolicy(resource: string, requestBody: ApigatewaySetIamPolicyRequest): Observable<ApigatewayPolicy> {
			return this.http.post<ApigatewayPolicy>(this.baseUri + 'v1beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {ApigatewayTestIamPermissionsResponse} Successful response
		 */
		Apigateway_projects_locations_gateways_testIamPermissions(resource: string, requestBody: ApigatewayTestIamPermissionsRequest): Observable<ApigatewayTestIamPermissionsResponse> {
			return this.http.post<ApigatewayTestIamPermissionsResponse>(this.baseUri + 'v1beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Apigateway_projects_locations_operations_getView { CONFIG_VIEW_UNSPECIFIED = 'CONFIG_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}

