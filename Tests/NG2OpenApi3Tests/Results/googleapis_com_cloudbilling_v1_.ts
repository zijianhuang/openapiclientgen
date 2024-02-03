import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the aggregation level and interval for pricing of a single SKU. */
	export interface AggregationInfo {

		/** The number of intervals to aggregate over. Example: If aggregation_level is "DAILY" and aggregation_count is 14, aggregation will be over 14 days. */
		aggregationCount?: number | null;
		aggregationInterval?: AggregationInfoAggregationInterval | null;
		aggregationLevel?: AggregationInfoAggregationLevel | null;
	}

	/** Represents the aggregation level and interval for pricing of a single SKU. */
	export interface AggregationInfoFormProperties {

		/** The number of intervals to aggregate over. Example: If aggregation_level is "DAILY" and aggregation_count is 14, aggregation will be over 14 days. */
		aggregationCount: FormControl<number | null | undefined>,
		aggregationInterval: FormControl<AggregationInfoAggregationInterval | null | undefined>,
		aggregationLevel: FormControl<AggregationInfoAggregationLevel | null | undefined>,
	}
	export function CreateAggregationInfoFormGroup() {
		return new FormGroup<AggregationInfoFormProperties>({
			aggregationCount: new FormControl<number | null | undefined>(undefined),
			aggregationInterval: new FormControl<AggregationInfoAggregationInterval | null | undefined>(undefined),
			aggregationLevel: new FormControl<AggregationInfoAggregationLevel | null | undefined>(undefined),
		});

	}

	export enum AggregationInfoAggregationInterval { AGGREGATION_INTERVAL_UNSPECIFIED = 'AGGREGATION_INTERVAL_UNSPECIFIED', DAILY = 'DAILY', MONTHLY = 'MONTHLY' }

	export enum AggregationInfoAggregationLevel { AGGREGATION_LEVEL_UNSPECIFIED = 'AGGREGATION_LEVEL_UNSPECIFIED', ACCOUNT = 'ACCOUNT', PROJECT = 'PROJECT' }


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


	/** A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects. */
	export interface BillingAccount {

		/** The display name given to the billing account, such as `My Billing Account`. This name is displayed in the Google Cloud Console. */
		displayName?: string | null;

		/** If this account is a [subaccount](https://cloud.google.com/billing/docs/concepts), then this will be the resource name of the parent billing account that it is being resold through. Otherwise this will be empty. */
		masterBillingAccount?: string | null;

		/** Output only. The resource name of the billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF` would be the resource name for billing account `012345-567890-ABCDEF`. */
		name?: string | null;

		/** Output only. True if the billing account is open, and will therefore be charged for any usage on associated projects. False if the billing account is closed, and therefore projects associated with it are unable to use paid services. */
		open?: boolean | null;

		/** Output only. The billing account's parent resource identifier. Use the `MoveBillingAccount` method to update the account's parent resource if it is a organization. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` */
		parent?: string | null;
	}

	/** A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects. */
	export interface BillingAccountFormProperties {

		/** The display name given to the billing account, such as `My Billing Account`. This name is displayed in the Google Cloud Console. */
		displayName: FormControl<string | null | undefined>,

		/** If this account is a [subaccount](https://cloud.google.com/billing/docs/concepts), then this will be the resource name of the parent billing account that it is being resold through. Otherwise this will be empty. */
		masterBillingAccount: FormControl<string | null | undefined>,

		/** Output only. The resource name of the billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF` would be the resource name for billing account `012345-567890-ABCDEF`. */
		name: FormControl<string | null | undefined>,

		/** Output only. True if the billing account is open, and will therefore be charged for any usage on associated projects. False if the billing account is closed, and therefore projects associated with it are unable to use paid services. */
		open: FormControl<boolean | null | undefined>,

		/** Output only. The billing account's parent resource identifier. Use the `MoveBillingAccount` method to update the account's parent resource if it is a organization. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateBillingAccountFormGroup() {
		return new FormGroup<BillingAccountFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			masterBillingAccount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open: new FormControl<boolean | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** Represents the category hierarchy of a SKU. */
	export interface Category {

		/** The type of product the SKU refers to. Example: "Compute", "Storage", "Network", "ApplicationServices" etc. */
		resourceFamily?: string | null;

		/** A group classification for related SKUs. Example: "RAM", "GPU", "Prediction", "Ops", "GoogleEgress" etc. */
		resourceGroup?: string | null;

		/** The display name of the service this SKU belongs to. */
		serviceDisplayName?: string | null;

		/** Represents how the SKU is consumed. Example: "OnDemand", "Preemptible", "Commit1Mo", "Commit1Yr" etc. */
		usageType?: string | null;
	}

	/** Represents the category hierarchy of a SKU. */
	export interface CategoryFormProperties {

		/** The type of product the SKU refers to. Example: "Compute", "Storage", "Network", "ApplicationServices" etc. */
		resourceFamily: FormControl<string | null | undefined>,

		/** A group classification for related SKUs. Example: "RAM", "GPU", "Prediction", "Ops", "GoogleEgress" etc. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The display name of the service this SKU belongs to. */
		serviceDisplayName: FormControl<string | null | undefined>,

		/** Represents how the SKU is consumed. Example: "OnDemand", "Preemptible", "Commit1Mo", "Commit1Yr" etc. */
		usageType: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			resourceFamily: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			serviceDisplayName: new FormControl<string | null | undefined>(undefined),
			usageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates the geographic taxonomy data for a sku. */
	export interface GeoTaxonomy {

		/** The list of regions associated with a sku. Empty for Global skus, which are associated with all Google Cloud regions. */
		regions?: Array<string>;

		/** The type of Geo Taxonomy: GLOBAL, REGIONAL, or MULTI_REGIONAL. */
		type?: GeoTaxonomyType | null;
	}

	/** Encapsulates the geographic taxonomy data for a sku. */
	export interface GeoTaxonomyFormProperties {

		/** The type of Geo Taxonomy: GLOBAL, REGIONAL, or MULTI_REGIONAL. */
		type: FormControl<GeoTaxonomyType | null | undefined>,
	}
	export function CreateGeoTaxonomyFormGroup() {
		return new FormGroup<GeoTaxonomyFormProperties>({
			type: new FormControl<GeoTaxonomyType | null | undefined>(undefined),
		});

	}

	export enum GeoTaxonomyType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GLOBAL = 'GLOBAL', REGIONAL = 'REGIONAL', MULTI_REGIONAL = 'MULTI_REGIONAL' }


	/** Response message for `ListBillingAccounts`. */
	export interface ListBillingAccountsResponse {

		/** A list of billing accounts. */
		billingAccounts?: Array<BillingAccount>;

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListBillingAccounts` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken?: string | null;
	}

	/** Response message for `ListBillingAccounts`. */
	export interface ListBillingAccountsResponseFormProperties {

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListBillingAccounts` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingAccountsResponseFormGroup() {
		return new FormGroup<ListBillingAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `ListProjectBillingInfoResponse`. */
	export interface ListProjectBillingInfoResponse {

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListProjectBillingInfo` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken?: string | null;

		/** A list of `ProjectBillingInfo` resources representing the projects associated with the billing account. */
		projectBillingInfo?: Array<ProjectBillingInfo>;
	}

	/** Request message for `ListProjectBillingInfoResponse`. */
	export interface ListProjectBillingInfoResponseFormProperties {

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListProjectBillingInfo` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectBillingInfoResponseFormGroup() {
		return new FormGroup<ListProjectBillingInfoResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects). */
	export interface ProjectBillingInfo {

		/** The resource name of the billing account associated with the project, if any. For example, `billingAccounts/012345-567890-ABCDEF`. */
		billingAccountName?: string | null;

		/** Output only. True if the project is associated with an open billing account, to which usage on the project is charged. False if the project is associated with a closed billing account, or no billing account at all, and therefore cannot use paid services. */
		billingEnabled?: boolean | null;

		/** Output only. The resource name for the `ProjectBillingInfo`; has the form `projects/{project_id}/billingInfo`. For example, the resource name for the billing information for project `tokyo-rain-123` would be `projects/tokyo-rain-123/billingInfo`. */
		name?: string | null;

		/** Output only. The ID of the project that this `ProjectBillingInfo` represents, such as `tokyo-rain-123`. This is a convenience field so that you don't need to parse the `name` field to obtain a project ID. */
		projectId?: string | null;
	}

	/** Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects). */
	export interface ProjectBillingInfoFormProperties {

		/** The resource name of the billing account associated with the project, if any. For example, `billingAccounts/012345-567890-ABCDEF`. */
		billingAccountName: FormControl<string | null | undefined>,

		/** Output only. True if the project is associated with an open billing account, to which usage on the project is charged. False if the project is associated with a closed billing account, or no billing account at all, and therefore cannot use paid services. */
		billingEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The resource name for the `ProjectBillingInfo`; has the form `projects/{project_id}/billingInfo`. For example, the resource name for the billing information for project `tokyo-rain-123` would be `projects/tokyo-rain-123/billingInfo`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The ID of the project that this `ProjectBillingInfo` represents, such as `tokyo-rain-123`. This is a convenience field so that you don't need to parse the `name` field to obtain a project ID. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateProjectBillingInfoFormGroup() {
		return new FormGroup<ProjectBillingInfoFormProperties>({
			billingAccountName: new FormControl<string | null | undefined>(undefined),
			billingEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for `ListServices`. */
	export interface ListServicesResponse {

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListServices` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken?: string | null;

		/** A list of services. */
		services?: Array<Service>;
	}

	/** Response message for `ListServices`. */
	export interface ListServicesResponseFormProperties {

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListServices` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a single service in Google Cloud Platform. */
	export interface Service {

		/** The business under which the service is offered. Ex. "businessEntities/GCP", "businessEntities/Maps" */
		businessEntityName?: string | null;

		/** A human readable display name for this service. */
		displayName?: string | null;

		/** The resource name for the service. Example: "services/DA34-426B-A397" */
		name?: string | null;

		/** The identifier for the service. Example: "DA34-426B-A397" */
		serviceId?: string | null;
	}

	/** Encapsulates a single service in Google Cloud Platform. */
	export interface ServiceFormProperties {

		/** The business under which the service is offered. Ex. "businessEntities/GCP", "businessEntities/Maps" */
		businessEntityName: FormControl<string | null | undefined>,

		/** A human readable display name for this service. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name for the service. Example: "services/DA34-426B-A397" */
		name: FormControl<string | null | undefined>,

		/** The identifier for the service. Example: "DA34-426B-A397" */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			businessEntityName: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for `ListSkus`. */
	export interface ListSkusResponse {

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListSkus` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken?: string | null;

		/** The list of public SKUs of the given service. */
		skus?: Array<Sku>;
	}

	/** Response message for `ListSkus`. */
	export interface ListSkusResponseFormProperties {

		/** A token to retrieve the next page of results. To retrieve the next page, call `ListSkus` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSkusResponseFormGroup() {
		return new FormGroup<ListSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a single SKU in Google Cloud Platform */
	export interface Sku {

		/** Represents the category hierarchy of a SKU. */
		category?: Category;

		/** A human readable description of the SKU, has a maximum length of 256 characters. */
		description?: string | null;

		/** Encapsulates the geographic taxonomy data for a sku. */
		geoTaxonomy?: GeoTaxonomy;

		/** The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" */
		name?: string | null;

		/** A timeline of pricing info for this SKU in chronological order. */
		pricingInfo?: Array<PricingInfo>;

		/** Identifies the service provider. This is 'Google' for first party services in Google Cloud Platform. */
		serviceProviderName?: string | null;

		/** List of service regions this SKU is offered at. Example: "asia-east1" Service regions can be found at https://cloud.google.com/about/locations/ */
		serviceRegions?: Array<string>;

		/** The identifier for the SKU. Example: "AA95-CD31-42FE" */
		skuId?: string | null;
	}

	/** Encapsulates a single SKU in Google Cloud Platform */
	export interface SkuFormProperties {

		/** A human readable description of the SKU, has a maximum length of 256 characters. */
		description: FormControl<string | null | undefined>,

		/** The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" */
		name: FormControl<string | null | undefined>,

		/** Identifies the service provider. This is 'Google' for first party services in Google Cloud Platform. */
		serviceProviderName: FormControl<string | null | undefined>,

		/** The identifier for the SKU. Example: "AA95-CD31-42FE" */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceProviderName: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the pricing information for a SKU at a single point of time. */
	export interface PricingInfo {

		/** Represents the aggregation level and interval for pricing of a single SKU. */
		aggregationInfo?: AggregationInfo;

		/** Conversion rate used for currency conversion, from USD to the currency specified in the request. This includes any surcharge collected for billing in non USD currency. If a currency is not specified in the request this defaults to 1.0. Example: USD * currency_conversion_rate = JPY */
		currencyConversionRate?: number | null;

		/** The timestamp from which this pricing was effective within the requested time range. This is guaranteed to be greater than or equal to the start_time field in the request and less than the end_time field in the request. If a time range was not specified in the request this field will be equivalent to a time within the last 12 hours, indicating the latest pricing info. */
		effectiveTime?: string | null;

		/** Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage. */
		pricingExpression?: PricingExpression;

		/** An optional human readable summary of the pricing information, has a maximum length of 256 characters. */
		summary?: string | null;
	}

	/** Represents the pricing information for a SKU at a single point of time. */
	export interface PricingInfoFormProperties {

		/** Conversion rate used for currency conversion, from USD to the currency specified in the request. This includes any surcharge collected for billing in non USD currency. If a currency is not specified in the request this defaults to 1.0. Example: USD * currency_conversion_rate = JPY */
		currencyConversionRate: FormControl<number | null | undefined>,

		/** The timestamp from which this pricing was effective within the requested time range. This is guaranteed to be greater than or equal to the start_time field in the request and less than the end_time field in the request. If a time range was not specified in the request this field will be equivalent to a time within the last 12 hours, indicating the latest pricing info. */
		effectiveTime: FormControl<string | null | undefined>,

		/** An optional human readable summary of the pricing information, has a maximum length of 256 characters. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreatePricingInfoFormGroup() {
		return new FormGroup<PricingInfoFormProperties>({
			currencyConversionRate: new FormControl<number | null | undefined>(undefined),
			effectiveTime: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage. */
	export interface PricingExpression {

		/** The base unit for the SKU which is the unit used in usage exports. Example: "By" */
		baseUnit?: string | null;

		/** Conversion factor for converting from price per usage_unit to price per base_unit, and start_usage_amount to start_usage_amount in base_unit. unit_price / base_unit_conversion_factor = price per base_unit. start_usage_amount * base_unit_conversion_factor = start_usage_amount in base_unit. */
		baseUnitConversionFactor?: number | null;

		/** The base unit in human readable form. Example: "byte". */
		baseUnitDescription?: string | null;

		/** The recommended quantity of units for displaying pricing info. When displaying pricing info it is recommended to display: (unit_price * display_quantity) per display_quantity usage_unit. This field does not affect the pricing formula and is for display purposes only. Example: If the unit_price is "0.0001 USD", the usage_unit is "GB" and the display_quantity is "1000" then the recommended way of displaying the pricing info is "0.10 USD per 1000 GB" */
		displayQuantity?: number | null;

		/** The list of tiered rates for this pricing. The total cost is computed by applying each of the tiered rates on usage. This repeated list is sorted by ascending order of start_usage_amount. */
		tieredRates?: Array<TierRate>;

		/** The short hand for unit of usage this pricing is specified in. Example: usage_unit of "GiBy" means that usage is specified in "Gibi Byte". */
		usageUnit?: string | null;

		/** The unit of usage in human readable form. Example: "gibi byte". */
		usageUnitDescription?: string | null;
	}

	/** Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage. */
	export interface PricingExpressionFormProperties {

		/** The base unit for the SKU which is the unit used in usage exports. Example: "By" */
		baseUnit: FormControl<string | null | undefined>,

		/** Conversion factor for converting from price per usage_unit to price per base_unit, and start_usage_amount to start_usage_amount in base_unit. unit_price / base_unit_conversion_factor = price per base_unit. start_usage_amount * base_unit_conversion_factor = start_usage_amount in base_unit. */
		baseUnitConversionFactor: FormControl<number | null | undefined>,

		/** The base unit in human readable form. Example: "byte". */
		baseUnitDescription: FormControl<string | null | undefined>,

		/** The recommended quantity of units for displaying pricing info. When displaying pricing info it is recommended to display: (unit_price * display_quantity) per display_quantity usage_unit. This field does not affect the pricing formula and is for display purposes only. Example: If the unit_price is "0.0001 USD", the usage_unit is "GB" and the display_quantity is "1000" then the recommended way of displaying the pricing info is "0.10 USD per 1000 GB" */
		displayQuantity: FormControl<number | null | undefined>,

		/** The short hand for unit of usage this pricing is specified in. Example: usage_unit of "GiBy" means that usage is specified in "Gibi Byte". */
		usageUnit: FormControl<string | null | undefined>,

		/** The unit of usage in human readable form. Example: "gibi byte". */
		usageUnitDescription: FormControl<string | null | undefined>,
	}
	export function CreatePricingExpressionFormGroup() {
		return new FormGroup<PricingExpressionFormProperties>({
			baseUnit: new FormControl<string | null | undefined>(undefined),
			baseUnitConversionFactor: new FormControl<number | null | undefined>(undefined),
			baseUnitDescription: new FormControl<string | null | undefined>(undefined),
			displayQuantity: new FormControl<number | null | undefined>(undefined),
			usageUnit: new FormControl<string | null | undefined>(undefined),
			usageUnitDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The price rate indicating starting usage and its corresponding price. */
	export interface TierRate {

		/** Usage is priced at this rate only after this amount. Example: start_usage_amount of 10 indicates that the usage will be priced at the unit_price after the first 10 usage_units. */
		startUsageAmount?: number | null;

		/** Represents an amount of money with its currency type. */
		unitPrice?: Money;
	}

	/** The price rate indicating starting usage and its corresponding price. */
	export interface TierRateFormProperties {

		/** Usage is priced at this rate only after this amount. Example: start_usage_amount of 10 indicates that the usage will be priced at the unit_price after the first 10 usage_units. */
		startUsageAmount: FormControl<number | null | undefined>,
	}
	export function CreateTierRateFormGroup() {
		return new FormGroup<TierRateFormProperties>({
			startUsageAmount: new FormControl<number | null | undefined>(undefined),
		});

	}


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


	/** Request message for `MoveBillingAccount` RPC. */
	export interface MoveBillingAccountRequest {

		/** Required. The resource name of the Organization to move the billing account under. Must be of the form `organizations/{organization_id}`. */
		destinationParent?: string | null;
	}

	/** Request message for `MoveBillingAccount` RPC. */
	export interface MoveBillingAccountRequestFormProperties {

		/** Required. The resource name of the Organization to move the billing account under. Must be of the form `organizations/{organization_id}`. */
		destinationParent: FormControl<string | null | undefined>,
	}
	export function CreateMoveBillingAccountRequestFormGroup() {
		return new FormGroup<MoveBillingAccountRequestFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
		 * Get v1/billingAccounts
		 * @param {string} filter Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported.
		 * @param {number} pageSize Requested page size. The maximum page size is 100; this is also the default.
		 * @param {string} pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
		 * @param {string} parent Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
		 * @return {ListBillingAccountsResponse} Successful response
		 */
		Cloudbilling_billingAccounts_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListBillingAccountsResponse> {
			return this.http.get<ListBillingAccountsResponse>(this.baseUri + 'v1/billingAccounts?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.
		 * Post v1/billingAccounts
		 * @param {string} parent Optional. The parent to create a billing account from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
		 * @return {BillingAccount} Successful response
		 */
		Cloudbilling_billingAccounts_create(parent: string | null | undefined, requestBody: BillingAccount): Observable<BillingAccount> {
			return this.http.post<BillingAccount>(this.baseUri + 'v1/billingAccounts?parent=' + (parent == null ? '' : encodeURIComponent(parent)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all public cloud services.
		 * Get v1/services
		 * @param {number} pageSize Requested page size. Defaults to 5000.
		 * @param {string} pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListServices` call. If unspecified, the first page of results is returned.
		 * @return {ListServicesResponse} Successful response
		 */
		Cloudbilling_services_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'v1/services?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Changes which parent organization a billing account belongs to.
		 * Get v1/{destinationParent}/{name}:move
		 * @param {string} destinationParent Required. The resource name of the Organization to move the billing account under. Must be of the form `organizations/{organization_id}`.
		 * @param {string} name Required. The resource name of the billing account to move. Must be of the form `billingAccounts/{billing_account_id}`. The specified billing account cannot be a subaccount, since a subaccount always belongs to the same organization as its parent account.
		 * @return {BillingAccount} Successful response
		 */
		Cloudbilling_organizations_billingAccounts_move(destinationParent: string, name: string): Observable<BillingAccount> {
			return this.http.get<BillingAccount>(this.baseUri + 'v1/' + (destinationParent == null ? '' : encodeURIComponent(destinationParent)) + '/' + (name == null ? '' : encodeURIComponent(name)) + ':move', {});
		}

		/**
		 * Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the billing account to retrieve. For example, `billingAccounts/012345-567890-ABCDEF`.
		 * @return {BillingAccount} Successful response
		 */
		Cloudbilling_billingAccounts_get(name: string): Observable<BillingAccount> {
			return this.http.get<BillingAccount>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
		 * Patch v1/{name}
		 * @param {string} name Required. The name of the billing account resource to be updated.
		 * @param {string} updateMask The update mask applied to the resource. Only "display_name" is currently supported.
		 * @return {BillingAccount} Successful response
		 */
		Cloudbilling_billingAccounts_patch(name: string, updateMask: string | null | undefined, requestBody: BillingAccount): Observable<BillingAccount> {
			return this.http.patch<BillingAccount>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.
		 * Get v1/{name}/billingInfo
		 * @param {string} name Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.
		 * @return {ProjectBillingInfo} Successful response
		 */
		Cloudbilling_projects_getBillingInfo(name: string): Observable<ProjectBillingInfo> {
			return this.http.get<ProjectBillingInfo>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/billingInfo', {});
		}

		/**
		 * Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.
		 * Put v1/{name}/billingInfo
		 * @param {string} name Required. The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`.
		 * @return {ProjectBillingInfo} Successful response
		 */
		Cloudbilling_projects_updateBillingInfo(name: string, requestBody: ProjectBillingInfo): Observable<ProjectBillingInfo> {
			return this.http.put<ProjectBillingInfo>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/billingInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
		 * Get v1/{name}/projects
		 * @param {string} name Required. The resource name of the billing account associated with the projects that you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
		 * @param {number} pageSize Requested page size. The maximum page size is 100; this is also the default.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous `ListProjectBillingInfo` call. If unspecified, the first page of results is returned.
		 * @return {ListProjectBillingInfoResponse} Successful response
		 */
		Cloudbilling_billingAccounts_projects_list(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProjectBillingInfoResponse> {
			return this.http.get<ListProjectBillingInfoResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/projects&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Changes which parent organization a billing account belongs to.
		 * Post v1/{name}:move
		 * @param {string} name Required. The resource name of the billing account to move. Must be of the form `billingAccounts/{billing_account_id}`. The specified billing account cannot be a subaccount, since a subaccount always belongs to the same organization as its parent account.
		 * @return {BillingAccount} Successful response
		 */
		Cloudbilling_billingAccounts_move(name: string, requestBody: MoveBillingAccountRequest): Observable<BillingAccount> {
			return this.http.post<BillingAccount>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
		 * Get v1/{parent}/billingAccounts
		 * @param {string} parent Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
		 * @param {string} filter Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported.
		 * @param {number} pageSize Requested page size. The maximum page size is 100; this is also the default.
		 * @param {string} pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
		 * @return {ListBillingAccountsResponse} Successful response
		 */
		Cloudbilling_organizations_billingAccounts_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBillingAccountsResponse> {
			return this.http.get<ListBillingAccountsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/billingAccounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.
		 * Post v1/{parent}/billingAccounts
		 * @param {string} parent Optional. The parent to create a billing account from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
		 * @return {BillingAccount} Successful response
		 */
		Cloudbilling_organizations_billingAccounts_create(parent: string, requestBody: BillingAccount): Observable<BillingAccount> {
			return this.http.post<BillingAccount>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/billingAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all publicly available SKUs for a given cloud service.
		 * Get v1/{parent}/skus
		 * @param {string} parent Required. The name of the service. Example: "services/DA34-426B-A397"
		 * @param {string} currencyCode The ISO 4217 currency code for the pricing info in the response proto. Will use the conversion rate as of start_time. Optional. If not specified USD will be used.
		 * @param {string} endTime Optional exclusive end time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
		 * @param {number} pageSize Requested page size. Defaults to 5000.
		 * @param {string} pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListSkus` call. If unspecified, the first page of results is returned.
		 * @param {string} startTime Optional inclusive start time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
		 * @return {ListSkusResponse} Successful response
		 */
		Cloudbilling_services_skus_list(parent: string, currencyCode: string | null | undefined, endTime: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startTime: string | null | undefined): Observable<ListSkusResponse> {
			return this.http.get<ListSkusResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/skus&currencyCode=' + (currencyCode == null ? '' : encodeURIComponent(currencyCode)) + '&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), {});
		}

		/**
		 * Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
		 * Get v1/{parent}/subAccounts
		 * @param {string} parent Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
		 * @param {string} filter Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported.
		 * @param {number} pageSize Requested page size. The maximum page size is 100; this is also the default.
		 * @param {string} pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
		 * @return {ListBillingAccountsResponse} Successful response
		 */
		Cloudbilling_billingAccounts_subAccounts_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBillingAccountsResponse> {
			return this.http.get<ListBillingAccountsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subAccounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.
		 * Post v1/{parent}/subAccounts
		 * @param {string} parent Optional. The parent to create a billing account from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
		 * @return {BillingAccount} Successful response
		 */
		Cloudbilling_billingAccounts_subAccounts_create(parent: string, requestBody: BillingAccount): Observable<BillingAccount> {
			return this.http.post<BillingAccount>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Cloudbilling_billingAccounts_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudbilling_billingAccounts_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudbilling_billingAccounts_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

