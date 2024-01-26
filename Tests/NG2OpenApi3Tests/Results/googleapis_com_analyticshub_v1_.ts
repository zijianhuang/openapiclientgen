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


	/** A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset. */
	export interface BigQueryDatasetSource {

		/** Resource name of the dataset source for this listing. e.g. `projects/myproject/datasets/123` */
		dataset?: string | null;
	}

	/** A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset. */
	export interface BigQueryDatasetSourceFormProperties {

		/** Resource name of the dataset source for this listing. e.g. `projects/myproject/datasets/123` */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDatasetSourceFormGroup() {
		return new FormGroup<BigQueryDatasetSourceFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
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


	/** A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets. */
	export interface DataExchange {

		/** Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. */
		description?: string | null;

		/** Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes. */
		displayName?: string | null;

		/** Optional. Documentation describing the data exchange. */
		documentation?: string | null;

		/** Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire. */
		icon?: string | null;

		/** Output only. Number of listings contained in the data exchange. */
		listingCount?: number | null;

		/** Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/US/dataExchanges/123`. */
		name?: string | null;

		/** Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes. */
		primaryContact?: string | null;

		/** Sharing environment is a behavior model for sharing data within a data exchange. This option is configurable for a data exchange. */
		sharingEnvironmentConfig?: SharingEnvironmentConfig;
	}

	/** A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets. */
	export interface DataExchangeFormProperties {

		/** Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. */
		description: FormControl<string | null | undefined>,

		/** Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Documentation describing the data exchange. */
		documentation: FormControl<string | null | undefined>,

		/** Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire. */
		icon: FormControl<string | null | undefined>,

		/** Output only. Number of listings contained in the data exchange. */
		listingCount: FormControl<number | null | undefined>,

		/** Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/US/dataExchanges/123`. */
		name: FormControl<string | null | undefined>,

		/** Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes. */
		primaryContact: FormControl<string | null | undefined>,
	}
	export function CreateDataExchangeFormGroup() {
		return new FormGroup<DataExchangeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			documentation: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			listingCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryContact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sharing environment is a behavior model for sharing data within a data exchange. This option is configurable for a data exchange. */
	export interface SharingEnvironmentConfig {

		/** Data Clean Room (DCR), used for privacy-safe and secured data sharing. */
		dcrExchangeConfig?: DcrExchangeConfig;

		/** Default Analytics Hub data exchange, used for secured data sharing. */
		defaultExchangeConfig?: DefaultExchangeConfig;
	}

	/** Sharing environment is a behavior model for sharing data within a data exchange. This option is configurable for a data exchange. */
	export interface SharingEnvironmentConfigFormProperties {
	}
	export function CreateSharingEnvironmentConfigFormGroup() {
		return new FormGroup<SharingEnvironmentConfigFormProperties>({
		});

	}


	/** Data Clean Room (DCR), used for privacy-safe and secured data sharing. */
	export interface DcrExchangeConfig {
	}

	/** Data Clean Room (DCR), used for privacy-safe and secured data sharing. */
	export interface DcrExchangeConfigFormProperties {
	}
	export function CreateDcrExchangeConfigFormGroup() {
		return new FormGroup<DcrExchangeConfigFormProperties>({
		});

	}


	/** Default Analytics Hub data exchange, used for secured data sharing. */
	export interface DefaultExchangeConfig {
	}

	/** Default Analytics Hub data exchange, used for secured data sharing. */
	export interface DefaultExchangeConfigFormProperties {
	}
	export function CreateDefaultExchangeConfigFormGroup() {
		return new FormGroup<DefaultExchangeConfigFormProperties>({
		});

	}


	/** Contains details of the data provider. */
	export interface DataProvider {

		/** Optional. Name of the data provider. */
		name?: string | null;

		/** Optional. Email or URL of the data provider. Max Length: 1000 bytes. */
		primaryContact?: string | null;
	}

	/** Contains details of the data provider. */
	export interface DataProviderFormProperties {

		/** Optional. Name of the data provider. */
		name: FormControl<string | null | undefined>,

		/** Optional. Email or URL of the data provider. Max Length: 1000 bytes. */
		primaryContact: FormControl<string | null | undefined>,
	}
	export function CreateDataProviderFormGroup() {
		return new FormGroup<DataProviderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			primaryContact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the destination bigquery dataset. */
	export interface DestinationDataset {

		/** Contains the reference that identifies a destination bigquery dataset. */
		datasetReference?: DestinationDatasetReference;

		/** Optional. A user-friendly description of the dataset. */
		description?: string | null;

		/** Optional. A descriptive name for the dataset. */
		friendlyName?: string | null;

		/** Optional. The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See https://cloud.google.com/resource-manager/docs/creating-managing-labels for more information. */
		labels?: {[id: string]: string };

		/** Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		location?: string | null;
	}

	/** Defines the destination bigquery dataset. */
	export interface DestinationDatasetFormProperties {

		/** Optional. A user-friendly description of the dataset. */
		description: FormControl<string | null | undefined>,

		/** Optional. A descriptive name for the dataset. */
		friendlyName: FormControl<string | null | undefined>,

		/** Optional. The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See https://cloud.google.com/resource-manager/docs/creating-managing-labels for more information. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDatasetFormGroup() {
		return new FormGroup<DestinationDatasetFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the reference that identifies a destination bigquery dataset. */
	export interface DestinationDatasetReference {

		/** Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		datasetId?: string | null;

		/** Required. The ID of the project containing this dataset. */
		projectId?: string | null;
	}

	/** Contains the reference that identifies a destination bigquery dataset. */
	export interface DestinationDatasetReferenceFormProperties {

		/** Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		datasetId: FormControl<string | null | undefined>,

		/** Required. The ID of the project containing this dataset. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDatasetReferenceFormGroup() {
		return new FormGroup<DestinationDatasetReferenceFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
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


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Reference to a linked resource tracked by this Subscription. */
	export interface LinkedResource {

		/** Output only. Name of the linked dataset, e.g. projects/subscriberproject/datasets/linked_dataset */
		linkedDataset?: string | null;
	}

	/** Reference to a linked resource tracked by this Subscription. */
	export interface LinkedResourceFormProperties {

		/** Output only. Name of the linked dataset, e.g. projects/subscriberproject/datasets/linked_dataset */
		linkedDataset: FormControl<string | null | undefined>,
	}
	export function CreateLinkedResourceFormGroup() {
		return new FormGroup<LinkedResourceFormProperties>({
			linkedDataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to the list of data exchanges. */
	export interface ListDataExchangesResponse {

		/** The list of data exchanges. */
		dataExchanges?: Array<DataExchange>;

		/** A token to request the next page of results. */
		nextPageToken?: string | null;
	}

	/** Message for response to the list of data exchanges. */
	export interface ListDataExchangesResponseFormProperties {

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataExchangesResponseFormGroup() {
		return new FormGroup<ListDataExchangesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to the list of Listings. */
	export interface ListListingsResponse {

		/** The list of Listing. */
		listings?: Array<Listing>;

		/** A token to request the next page of results. */
		nextPageToken?: string | null;
	}

	/** Message for response to the list of Listings. */
	export interface ListListingsResponseFormProperties {

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListListingsResponseFormGroup() {
		return new FormGroup<ListListingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data. */
	export interface Listing {

		/** A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset. */
		bigqueryDataset?: BigQueryDatasetSource;

		/** Optional. Categories of the listing. Up to two categories are allowed. */
		categories?: Array<string>;

		/** Contains details of the data provider. */
		dataProvider?: DataProvider;

		/** Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. */
		description?: string | null;

		/** Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes. */
		displayName?: string | null;

		/** Optional. Documentation describing the listing. */
		documentation?: string | null;

		/** Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire. */
		icon?: string | null;

		/** Output only. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456` */
		name?: string | null;

		/** Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes. */
		primaryContact?: string | null;

		/** Contains details of the listing publisher. */
		publisher?: Publisher;

		/** Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes. */
		requestAccess?: string | null;

		/** Restricted export config, used to configure restricted export on linked dataset. */
		restrictedExportConfig?: RestrictedExportConfig;

		/** Output only. Current state of the listing. */
		state?: ListingState | null;
	}

	/** A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data. */
	export interface ListingFormProperties {

		/** Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. */
		description: FormControl<string | null | undefined>,

		/** Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Documentation describing the listing. */
		documentation: FormControl<string | null | undefined>,

		/** Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire. */
		icon: FormControl<string | null | undefined>,

		/** Output only. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456` */
		name: FormControl<string | null | undefined>,

		/** Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes. */
		primaryContact: FormControl<string | null | undefined>,

		/** Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes. */
		requestAccess: FormControl<string | null | undefined>,

		/** Output only. Current state of the listing. */
		state: FormControl<ListingState | null | undefined>,
	}
	export function CreateListingFormGroup() {
		return new FormGroup<ListingFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			documentation: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryContact: new FormControl<string | null | undefined>(undefined),
			requestAccess: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ListingState | null | undefined>(undefined),
		});

	}


	/** Contains details of the listing publisher. */
	export interface Publisher {

		/** Optional. Name of the listing publisher. */
		name?: string | null;

		/** Optional. Email or URL of the listing publisher. Max Length: 1000 bytes. */
		primaryContact?: string | null;
	}

	/** Contains details of the listing publisher. */
	export interface PublisherFormProperties {

		/** Optional. Name of the listing publisher. */
		name: FormControl<string | null | undefined>,

		/** Optional. Email or URL of the listing publisher. Max Length: 1000 bytes. */
		primaryContact: FormControl<string | null | undefined>,
	}
	export function CreatePublisherFormGroup() {
		return new FormGroup<PublisherFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			primaryContact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Restricted export config, used to configure restricted export on linked dataset. */
	export interface RestrictedExportConfig {

		/** Optional. If true, enable restricted export. */
		enabled?: boolean | null;

		/** Output only. If true, restrict direct table access(read api/tabledata.list) on linked table. */
		restrictDirectTableAccess?: boolean | null;

		/** Optional. If true, restrict export of query result derived from restricted linked dataset table. */
		restrictQueryResult?: boolean | null;
	}

	/** Restricted export config, used to configure restricted export on linked dataset. */
	export interface RestrictedExportConfigFormProperties {

		/** Optional. If true, enable restricted export. */
		enabled: FormControl<boolean | null | undefined>,

		/** Output only. If true, restrict direct table access(read api/tabledata.list) on linked table. */
		restrictDirectTableAccess: FormControl<boolean | null | undefined>,

		/** Optional. If true, restrict export of query result derived from restricted linked dataset table. */
		restrictQueryResult: FormControl<boolean | null | undefined>,
	}
	export function CreateRestrictedExportConfigFormGroup() {
		return new FormGroup<RestrictedExportConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			restrictDirectTableAccess: new FormControl<boolean | null | undefined>(undefined),
			restrictQueryResult: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ListingState { STATE_UNSPECIFIED = 0, ACTIVE = 1 }


	/** Message for response to listing data exchanges in an organization and location. */
	export interface ListOrgDataExchangesResponse {

		/** The list of data exchanges. */
		dataExchanges?: Array<DataExchange>;

		/** A token to request the next page of results. */
		nextPageToken?: string | null;
	}

	/** Message for response to listing data exchanges in an organization and location. */
	export interface ListOrgDataExchangesResponseFormProperties {

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrgDataExchangesResponseFormGroup() {
		return new FormGroup<ListOrgDataExchangesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to the listing of shared resource subscriptions. */
	export interface ListSharedResourceSubscriptionsResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** The list of subscriptions. */
		sharedResourceSubscriptions?: Array<Subscription>;
	}

	/** Message for response to the listing of shared resource subscriptions. */
	export interface ListSharedResourceSubscriptionsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSharedResourceSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSharedResourceSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets. */
	export interface Subscription {

		/** Output only. Timestamp when the subscription was created. */
		creationTime?: string | null;

		/** Output only. Resource name of the source Data Exchange. e.g. projects/123/locations/US/dataExchanges/456 */
		dataExchange?: string | null;

		/** Output only. Timestamp when the subscription was last modified. */
		lastModifyTime?: string | null;

		/** Output only. Map of listing resource names to associated linked resource, e.g. projects/123/locations/US/dataExchanges/456/listings/789 -> projects/123/datasets/my_dataset For listing-level subscriptions, this is a map of size 1. Only contains values if state == STATE_ACTIVE. */
		linkedDatasetMap?: {[id: string]: LinkedResource };

		/** Output only. Resource name of the source Listing. e.g. projects/123/locations/US/dataExchanges/456/listings/789 */
		listing?: string | null;

		/** Output only. The resource name of the subscription. e.g. `projects/myproject/locations/US/subscriptions/123`. */
		name?: string | null;

		/** Output only. Display name of the project of this subscription. */
		organizationDisplayName?: string | null;

		/** Output only. Organization of the project this subscription belongs to. */
		organizationId?: string | null;

		/** Output only. Current state of the subscription. */
		state?: SubscriptionState | null;

		/** Output only. Email of the subscriber. */
		subscriberContact?: string | null;
	}

	/** A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets. */
	export interface SubscriptionFormProperties {

		/** Output only. Timestamp when the subscription was created. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. Resource name of the source Data Exchange. e.g. projects/123/locations/US/dataExchanges/456 */
		dataExchange: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the subscription was last modified. */
		lastModifyTime: FormControl<string | null | undefined>,

		/** Output only. Map of listing resource names to associated linked resource, e.g. projects/123/locations/US/dataExchanges/456/listings/789 -> projects/123/datasets/my_dataset For listing-level subscriptions, this is a map of size 1. Only contains values if state == STATE_ACTIVE. */
		linkedDatasetMap: FormControl<{[id: string]: LinkedResource } | null | undefined>,

		/** Output only. Resource name of the source Listing. e.g. projects/123/locations/US/dataExchanges/456/listings/789 */
		listing: FormControl<string | null | undefined>,

		/** Output only. The resource name of the subscription. e.g. `projects/myproject/locations/US/subscriptions/123`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Display name of the project of this subscription. */
		organizationDisplayName: FormControl<string | null | undefined>,

		/** Output only. Organization of the project this subscription belongs to. */
		organizationId: FormControl<string | null | undefined>,

		/** Output only. Current state of the subscription. */
		state: FormControl<SubscriptionState | null | undefined>,

		/** Output only. Email of the subscriber. */
		subscriberContact: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			dataExchange: new FormControl<string | null | undefined>(undefined),
			lastModifyTime: new FormControl<string | null | undefined>(undefined),
			linkedDatasetMap: new FormControl<{[id: string]: LinkedResource } | null | undefined>(undefined),
			listing: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			organizationDisplayName: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SubscriptionState | null | undefined>(undefined),
			subscriberContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubscriptionState { STATE_UNSPECIFIED = 0, STATE_ACTIVE = 1, STATE_STALE = 2, STATE_INACTIVE = 3 }


	/** Message for response to the listing of subscriptions. */
	export interface ListSubscriptionsResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** The list of subscriptions. */
		subscriptions?: Array<Subscription>;
	}

	/** Message for response to the listing of subscriptions. */
	export interface ListSubscriptionsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionsResponseFormProperties>({
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


	/** Represents the metadata of a long-running operation in Analytics Hub. */
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

	/** Represents the metadata of a long-running operation in Analytics Hub. */
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


	/** Message for refreshing a subscription. */
	export interface RefreshSubscriptionRequest {
	}

	/** Message for refreshing a subscription. */
	export interface RefreshSubscriptionRequestFormProperties {
	}
	export function CreateRefreshSubscriptionRequestFormGroup() {
		return new FormGroup<RefreshSubscriptionRequestFormProperties>({
		});

	}


	/** Message for response when you refresh a subscription. */
	export interface RefreshSubscriptionResponse {

		/** A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets. */
		subscription?: Subscription;
	}

	/** Message for response when you refresh a subscription. */
	export interface RefreshSubscriptionResponseFormProperties {
	}
	export function CreateRefreshSubscriptionResponseFormGroup() {
		return new FormGroup<RefreshSubscriptionResponseFormProperties>({
		});

	}


	/** Message for revoking a subscription. */
	export interface RevokeSubscriptionRequest {
	}

	/** Message for revoking a subscription. */
	export interface RevokeSubscriptionRequestFormProperties {
	}
	export function CreateRevokeSubscriptionRequestFormGroup() {
		return new FormGroup<RevokeSubscriptionRequestFormProperties>({
		});

	}


	/** Message for response when you revoke a subscription. */
	export interface RevokeSubscriptionResponse {
	}

	/** Message for response when you revoke a subscription. */
	export interface RevokeSubscriptionResponseFormProperties {
	}
	export function CreateRevokeSubscriptionResponseFormGroup() {
		return new FormGroup<RevokeSubscriptionResponseFormProperties>({
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


	/** Message for subscribing to a Data Exchange. */
	export interface SubscribeDataExchangeRequest {

		/** Required. The parent resource path of the Subscription. e.g. `projects/subscriberproject/locations/US` */
		destination?: string | null;

		/** Email of the subscriber. */
		subscriberContact?: string | null;

		/** Required. Name of the subscription to create. e.g. `subscription1` */
		subscription?: string | null;
	}

	/** Message for subscribing to a Data Exchange. */
	export interface SubscribeDataExchangeRequestFormProperties {

		/** Required. The parent resource path of the Subscription. e.g. `projects/subscriberproject/locations/US` */
		destination: FormControl<string | null | undefined>,

		/** Email of the subscriber. */
		subscriberContact: FormControl<string | null | undefined>,

		/** Required. Name of the subscription to create. e.g. `subscription1` */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeDataExchangeRequestFormGroup() {
		return new FormGroup<SubscribeDataExchangeRequestFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			subscriberContact: new FormControl<string | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response when you subscribe to a Data Exchange. */
	export interface SubscribeDataExchangeResponse {

		/** A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets. */
		subscription?: Subscription;
	}

	/** Message for response when you subscribe to a Data Exchange. */
	export interface SubscribeDataExchangeResponseFormProperties {
	}
	export function CreateSubscribeDataExchangeResponseFormGroup() {
		return new FormGroup<SubscribeDataExchangeResponseFormProperties>({
		});

	}


	/** Message for subscribing to a listing. */
	export interface SubscribeListingRequest {

		/** Defines the destination bigquery dataset. */
		destinationDataset?: DestinationDataset;
	}

	/** Message for subscribing to a listing. */
	export interface SubscribeListingRequestFormProperties {
	}
	export function CreateSubscribeListingRequestFormGroup() {
		return new FormGroup<SubscribeListingRequestFormProperties>({
		});

	}


	/** Message for response when you subscribe to a listing. */
	export interface SubscribeListingResponse {

		/** A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets. */
		subscription?: Subscription;
	}

	/** Message for response when you subscribe to a listing. */
	export interface SubscribeListingResponseFormProperties {
	}
	export function CreateSubscribeListingResponseFormGroup() {
		return new FormGroup<SubscribeListingResponseFormProperties>({
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
		 * Deletes a subscription.
		 * Delete v1/{name}
		 * @param {string} name Required. Resource name of the subscription to delete. e.g. projects/123/locations/US/subscriptions/456
		 * @return {Operation} Successful response
		 */
		Analyticshub_projects_locations_subscriptions_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the details of a Subscription.
		 * Get v1/{name}
		 * @param {string} name Required. Resource name of the subscription. e.g. projects/123/locations/US/subscriptions/456
		 * @return {Subscription} Successful response
		 */
		Analyticshub_projects_locations_subscriptions_get(name: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing listing.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`
		 * @param {string} updateMask Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
		 * @return {Listing} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_listings_patch(name: string, updateMask: string | null | undefined, requestBody: Listing): Observable<Listing> {
			return this.http.patch<Listing>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.
		 * Post v1/{name}:refresh
		 * @param {string} name Required. Resource name of the Subscription to refresh. e.g. `projects/subscriberproject/locations/US/subscriptions/123`
		 * @return {Operation} Successful response
		 */
		Analyticshub_projects_locations_subscriptions_refresh(name: string, requestBody: RefreshSubscriptionRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':refresh', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes a given subscription.
		 * Post v1/{name}:revoke
		 * @param {string} name Required. Resource name of the subscription to revoke. e.g. projects/123/locations/US/subscriptions/456
		 * @return {RevokeSubscriptionResponse} Successful response
		 */
		Analyticshub_projects_locations_subscriptions_revoke(name: string, requestBody: RevokeSubscriptionRequest): Observable<RevokeSubscriptionResponse> {
			return this.http.post<RevokeSubscriptionResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.
		 * Post v1/{name}:subscribe
		 * @param {string} name Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.
		 * @return {SubscribeListingResponse} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_listings_subscribe(name: string, requestBody: SubscribeListingRequest): Observable<SubscribeListingResponse> {
			return this.http.post<SubscribeListingResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':subscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all data exchanges from projects in a given organization and location.
		 * Get v1/{organization}/dataExchanges
		 * @param {string} organization Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/US`.
		 * @param {number} pageSize The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results.
		 * @return {ListOrgDataExchangesResponse} Successful response
		 */
		Analyticshub_organizations_locations_dataExchanges_list(organization: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOrgDataExchangesResponse> {
			return this.http.get<ListOrgDataExchangesResponse>(this.baseUri + 'v1/' + (organization == null ? '' : encodeURIComponent(organization)) + '/dataExchanges&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all data exchanges in a given project and location.
		 * Get v1/{parent}/dataExchanges
		 * @param {string} parent Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/US`.
		 * @param {number} pageSize The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results.
		 * @return {ListDataExchangesResponse} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDataExchangesResponse> {
			return this.http.get<ListDataExchangesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataExchanges&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new data exchange.
		 * Post v1/{parent}/dataExchanges
		 * @param {string} parent Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/US`.
		 * @param {string} dataExchangeId Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes.
		 * @return {DataExchange} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_create(parent: string, dataExchangeId: string | null | undefined, requestBody: DataExchange): Observable<DataExchange> {
			return this.http.post<DataExchange>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataExchanges&dataExchangeId=' + (dataExchangeId == null ? '' : encodeURIComponent(dataExchangeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all listings in a given project and location.
		 * Get v1/{parent}/listings
		 * @param {string} parent Required. The parent resource path of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123`.
		 * @param {number} pageSize The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results.
		 * @return {ListListingsResponse} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_listings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListListingsResponse> {
			return this.http.get<ListListingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/listings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new listing.
		 * Post v1/{parent}/listings
		 * @param {string} parent Required. The parent resource path of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123`.
		 * @param {string} listingId Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes.
		 * @return {Listing} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_listings_create(parent: string, listingId: string | null | undefined, requestBody: Listing): Observable<Listing> {
			return this.http.post<Listing>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/listings&listingId=' + (listingId == null ? '' : encodeURIComponent(listingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all subscriptions in a given project and location.
		 * Get v1/{parent}/subscriptions
		 * @param {string} parent Required. The parent resource path of the subscription. e.g. projects/myproject/locations/US
		 * @param {string} filter The filter expression may be used to filter by Data Exchange or Listing.
		 * @param {number} pageSize The maximum number of results to return in a single response page.
		 * @param {string} pageToken Page token, returned by a previous call.
		 * @return {ListSubscriptionsResponse} Successful response
		 */
		Analyticshub_projects_locations_subscriptions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSubscriptionsResponse> {
			return this.http.get<ListSubscriptionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subscriptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the IAM policy.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Analyticshub_projects_locations_subscriptions_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all subscriptions on a given Data Exchange or Listing.
		 * Get v1/{resource}:listSubscriptions
		 * @param {string} resource Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/US/dataExchanges/456 OR e.g. projects/123/locations/US/dataExchanges/456/listings/789
		 * @param {boolean} includeDeletedSubscriptions If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
		 * @param {number} pageSize The maximum number of results to return in a single response page.
		 * @param {string} pageToken Page token, returned by a previous call.
		 * @return {ListSharedResourceSubscriptionsResponse} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_listings_listSubscriptions(resource: string, includeDeletedSubscriptions: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSharedResourceSubscriptionsResponse> {
			return this.http.get<ListSharedResourceSubscriptionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':listSubscriptions&includeDeletedSubscriptions=' + includeDeletedSubscriptions + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Sets the IAM policy.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Analyticshub_projects_locations_subscriptions_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the permissions that a caller has.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Analyticshub_projects_locations_dataExchanges_listings_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

