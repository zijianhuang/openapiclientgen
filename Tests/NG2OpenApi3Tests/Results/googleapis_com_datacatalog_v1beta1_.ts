import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** Specification for the BigQuery connection. */
	export interface GoogleCloudDatacatalogV1BigQueryConnectionSpec {

		/** Specification for the BigQuery connection to a Cloud SQL instance. */
		cloudSql?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;

		/** The type of the BigQuery connection. */
		connectionType?: GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionType | null;

		/** True if there are credentials attached to the BigQuery connection; false otherwise. */
		hasCredential?: boolean | null;
	}

	/** Specification for the BigQuery connection. */
	export interface GoogleCloudDatacatalogV1BigQueryConnectionSpecFormProperties {

		/** The type of the BigQuery connection. */
		connectionType: FormControl<GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionType | null | undefined>,

		/** True if there are credentials attached to the BigQuery connection; false otherwise. */
		hasCredential: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1BigQueryConnectionSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1BigQueryConnectionSpecFormProperties>({
			connectionType: new FormControl<GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionType | null | undefined>(undefined),
			hasCredential: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specification for the BigQuery connection to a Cloud SQL instance. */
	export interface GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec {

		/** Database name. */
		database?: string | null;

		/** Cloud SQL instance ID in the format of `project:location:instance`. */
		instanceId?: string | null;

		/** Type of the Cloud SQL database. */
		type?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecType | null;
	}

	/** Specification for the BigQuery connection to a Cloud SQL instance. */
	export interface GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecFormProperties {

		/** Database name. */
		database: FormControl<string | null | undefined>,

		/** Cloud SQL instance ID in the format of `project:location:instance`. */
		instanceId: FormControl<string | null | undefined>,

		/** Type of the Cloud SQL database. */
		type: FormControl<GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecType { DATABASE_TYPE_UNSPECIFIED = 0, POSTGRES = 1, MYSQL = 2 }

	export enum GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionType { CONNECTION_TYPE_UNSPECIFIED = 0, CLOUD_SQL = 1 }


	/** Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding). */
	export interface GoogleCloudDatacatalogV1BigQueryDateShardedSpec {

		/** Output only. The Data Catalog resource name of the dataset entry the current table belongs to. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. */
		dataset?: string | null;

		/** Output only. BigQuery resource name of the latest shard. */
		latestShardResource?: string | null;

		/** Output only. Total number of shards. */
		shardCount?: string | null;

		/** Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`. For example, for the `MyTable20180101` shard, the `table_prefix` is `MyTable`. */
		tablePrefix?: string | null;
	}

	/** Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding). */
	export interface GoogleCloudDatacatalogV1BigQueryDateShardedSpecFormProperties {

		/** Output only. The Data Catalog resource name of the dataset entry the current table belongs to. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. */
		dataset: FormControl<string | null | undefined>,

		/** Output only. BigQuery resource name of the latest shard. */
		latestShardResource: FormControl<string | null | undefined>,

		/** Output only. Total number of shards. */
		shardCount: FormControl<string | null | undefined>,

		/** Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`. For example, for the `MyTable20180101` shard, the `table_prefix` is `MyTable`. */
		tablePrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1BigQueryDateShardedSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1BigQueryDateShardedSpecFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			latestShardResource: new FormControl<string | null | undefined>(undefined),
			shardCount: new FormControl<string | null | undefined>(undefined),
			tablePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fields specific for BigQuery routines. */
	export interface GoogleCloudDatacatalogV1BigQueryRoutineSpec {

		/** Paths of the imported libraries. */
		importedLibraries?: Array<string>;
	}

	/** Fields specific for BigQuery routines. */
	export interface GoogleCloudDatacatalogV1BigQueryRoutineSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1BigQueryRoutineSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1BigQueryRoutineSpecFormProperties>({
		});

	}


	/** Describes a BigQuery table. */
	export interface GoogleCloudDatacatalogV1BigQueryTableSpec {

		/** Output only. The table source type. */
		tableSourceType?: GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceType | null;

		/** Normal BigQuery table specification. */
		tableSpec?: GoogleCloudDatacatalogV1TableSpec;

		/** Table view specification. */
		viewSpec?: GoogleCloudDatacatalogV1ViewSpec;
	}

	/** Describes a BigQuery table. */
	export interface GoogleCloudDatacatalogV1BigQueryTableSpecFormProperties {

		/** Output only. The table source type. */
		tableSourceType: FormControl<GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1BigQueryTableSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1BigQueryTableSpecFormProperties>({
			tableSourceType: new FormControl<GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceType { TABLE_SOURCE_TYPE_UNSPECIFIED = 0, BIGQUERY_VIEW = 1, BIGQUERY_TABLE = 2, BIGQUERY_MATERIALIZED_VIEW = 3 }


	/** Normal BigQuery table specification. */
	export interface GoogleCloudDatacatalogV1TableSpec {

		/** Output only. If the table is date-sharded, that is, it matches the `[prefix]YYYYMMDD` name pattern, this field is the Data Catalog resource name of the date-sharded grouped entry. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. Otherwise, `grouped_entry` is empty. */
		groupedEntry?: string | null;
	}

	/** Normal BigQuery table specification. */
	export interface GoogleCloudDatacatalogV1TableSpecFormProperties {

		/** Output only. If the table is date-sharded, that is, it matches the `[prefix]YYYYMMDD` name pattern, this field is the Data Catalog resource name of the date-sharded grouped entry. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. Otherwise, `grouped_entry` is empty. */
		groupedEntry: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1TableSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1TableSpecFormProperties>({
			groupedEntry: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Table view specification. */
	export interface GoogleCloudDatacatalogV1ViewSpec {

		/** Output only. The query that defines the table view. */
		viewQuery?: string | null;
	}

	/** Table view specification. */
	export interface GoogleCloudDatacatalogV1ViewSpecFormProperties {

		/** Output only. The query that defines the table view. */
		viewQuery: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ViewSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ViewSpecFormProperties>({
			viewQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Business Context of the entry. */
	export interface GoogleCloudDatacatalogV1BusinessContext {

		/** Contact people for the entry. */
		contacts?: GoogleCloudDatacatalogV1Contacts;

		/** Entry overview fields for rich text descriptions of entries. */
		entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
	}

	/** Business Context of the entry. */
	export interface GoogleCloudDatacatalogV1BusinessContextFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1BusinessContextFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1BusinessContextFormProperties>({
		});

	}


	/** Contact people for the entry. */
	export interface GoogleCloudDatacatalogV1Contacts {

		/** The list of contact people for the entry. */
		people?: Array<GoogleCloudDatacatalogV1ContactsPerson>;
	}

	/** Contact people for the entry. */
	export interface GoogleCloudDatacatalogV1ContactsFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1ContactsFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ContactsFormProperties>({
		});

	}


	/** A contact person for the entry. */
	export interface GoogleCloudDatacatalogV1ContactsPerson {

		/** Designation of the person, for example, Data Steward. */
		designation?: string | null;

		/** Email of the person in the format of `john.doe@xyz`, ``, or `John Doe`. */
		email?: string | null;
	}

	/** A contact person for the entry. */
	export interface GoogleCloudDatacatalogV1ContactsPersonFormProperties {

		/** Designation of the person, for example, Data Steward. */
		designation: FormControl<string | null | undefined>,

		/** Email of the person in the format of `john.doe@xyz`, ``, or `John Doe`. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ContactsPersonFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ContactsPersonFormProperties>({
			designation: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entry overview fields for rich text descriptions of entries. */
	export interface GoogleCloudDatacatalogV1EntryOverview {

		/** Entry overview with support for rich text. The overview must only contain Unicode characters, and should be formatted using HTML. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. */
		overview?: string | null;
	}

	/** Entry overview fields for rich text descriptions of entries. */
	export interface GoogleCloudDatacatalogV1EntryOverviewFormProperties {

		/** Entry overview with support for rich text. The overview must only contain Unicode characters, and should be formatted using HTML. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. */
		overview: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1EntryOverviewFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1EntryOverviewFormProperties>({
			overview: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type) */
	export interface GoogleCloudDatacatalogV1CloudBigtableInstanceSpec {

		/** The list of clusters for the Instance. */
		cloudBigtableClusterSpecs?: Array<GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec>;
	}

	/** Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type) */
	export interface GoogleCloudDatacatalogV1CloudBigtableInstanceSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1CloudBigtableInstanceSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1CloudBigtableInstanceSpecFormProperties>({
		});

	}


	/** Spec that applies to clusters of an Instance of Cloud Bigtable. */
	export interface GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec {

		/** Name of the cluster. */
		displayName?: string | null;

		/** A link back to the parent resource, in this case Instance. */
		linkedResource?: string | null;

		/** Location of the cluster, typically a Cloud zone. */
		location?: string | null;

		/** Type of the resource. For a cluster this would be "CLUSTER". */
		type?: string | null;
	}

	/** Spec that applies to clusters of an Instance of Cloud Bigtable. */
	export interface GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpecFormProperties {

		/** Name of the cluster. */
		displayName: FormControl<string | null | undefined>,

		/** A link back to the parent resource, in this case Instance. */
		linkedResource: FormControl<string | null | undefined>,

		/** Location of the cluster, typically a Cloud zone. */
		location: FormControl<string | null | undefined>,

		/** Type of the resource. For a cluster this would be "CLUSTER". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpecFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			linkedResource: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type) */
	export interface GoogleCloudDatacatalogV1CloudBigtableSystemSpec {

		/** Display name of the Instance. This is user specified and different from the resource name. */
		instanceDisplayName?: string | null;
	}

	/** Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type) */
	export interface GoogleCloudDatacatalogV1CloudBigtableSystemSpecFormProperties {

		/** Display name of the Instance. This is user specified and different from the resource name. */
		instanceDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1CloudBigtableSystemSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1CloudBigtableSystemSpecFormProperties>({
			instanceDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A column within a schema. Columns can be nested inside other columns. */
	export interface GoogleCloudDatacatalogV1ColumnSchema {

		/** Required. Name of the column. Must be a UTF-8 string without dots (.). The maximum size is 64 bytes. */
		column?: string | null;

		/** Optional. Default value for the column. */
		defaultValue?: string | null;

		/** Optional. Description of the column. Default value is an empty string. The description must be a UTF-8 string with the maximum size of 2000 bytes. */
		description?: string | null;

		/** Optional. Garbage collection policy for the column or column family. Applies to systems like Cloud Bigtable. */
		gcRule?: string | null;

		/** Optional. Most important inclusion of this column. */
		highestIndexingType?: GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingType | null;

		/** Column info specific to Looker System. */
		lookerColumnSpec?: GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec;

		/** Optional. A column's mode indicates whether values in this column are required, nullable, or repeated. Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported. Default mode is `NULLABLE`. */
		mode?: string | null;

		/** Optional. Ordinal position */
		ordinalPosition?: number | null;

		/** Optional. Schema of sub-columns. A column can have zero or more sub-columns. */
		subcolumns?: Array<GoogleCloudDatacatalogV1ColumnSchema>;

		/** Required. Type of the column. Must be a UTF-8 string with the maximum size of 128 bytes. */
		type?: string | null;
	}

	/** A column within a schema. Columns can be nested inside other columns. */
	export interface GoogleCloudDatacatalogV1ColumnSchemaFormProperties {

		/** Required. Name of the column. Must be a UTF-8 string without dots (.). The maximum size is 64 bytes. */
		column: FormControl<string | null | undefined>,

		/** Optional. Default value for the column. */
		defaultValue: FormControl<string | null | undefined>,

		/** Optional. Description of the column. Default value is an empty string. The description must be a UTF-8 string with the maximum size of 2000 bytes. */
		description: FormControl<string | null | undefined>,

		/** Optional. Garbage collection policy for the column or column family. Applies to systems like Cloud Bigtable. */
		gcRule: FormControl<string | null | undefined>,

		/** Optional. Most important inclusion of this column. */
		highestIndexingType: FormControl<GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingType | null | undefined>,

		/** Optional. A column's mode indicates whether values in this column are required, nullable, or repeated. Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported. Default mode is `NULLABLE`. */
		mode: FormControl<string | null | undefined>,

		/** Optional. Ordinal position */
		ordinalPosition: FormControl<number | null | undefined>,

		/** Required. Type of the column. Must be a UTF-8 string with the maximum size of 128 bytes. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ColumnSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ColumnSchemaFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			gcRule: new FormControl<string | null | undefined>(undefined),
			highestIndexingType: new FormControl<GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingType | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			ordinalPosition: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingType { INDEXING_TYPE_UNSPECIFIED = 0, INDEXING_TYPE_NONE = 1, INDEXING_TYPE_NON_UNIQUE = 2, INDEXING_TYPE_UNIQUE = 3, INDEXING_TYPE_PRIMARY_KEY = 4 }


	/** Column info specific to Looker System. */
	export interface GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec {

		/** Looker specific column type of this column. */
		type?: GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecType | null;
	}

	/** Column info specific to Looker System. */
	export interface GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecFormProperties {

		/** Looker specific column type of this column. */
		type: FormControl<GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecFormProperties>({
			type: new FormControl<GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecType { LOOKER_COLUMN_TYPE_UNSPECIFIED = 0, DIMENSION = 1, DIMENSION_GROUP = 2, FILTER = 3, MEASURE = 4, PARAMETER = 5 }


	/** Common statistics on the entry's usage. They can be set on any system. */
	export interface GoogleCloudDatacatalogV1CommonUsageStats {

		/** View count in source system. */
		viewCount?: string | null;
	}

	/** Common statistics on the entry's usage. They can be set on any system. */
	export interface GoogleCloudDatacatalogV1CommonUsageStatsFormProperties {

		/** View count in source system. */
		viewCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1CommonUsageStatsFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1CommonUsageStatsFormProperties>({
			viewCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Physical location of an entry. */
	export interface GoogleCloudDatacatalogV1DataSource {

		/** Full name of a resource as defined by the service. For example: `//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}` */
		resource?: string | null;

		/** Service that physically stores the data. */
		service?: GoogleCloudDatacatalogV1DataSourceService | null;

		/** Output only. Data Catalog entry name, if applicable. */
		sourceEntry?: string | null;

		/** Details the properties of the underlying storage. */
		storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
	}

	/** Physical location of an entry. */
	export interface GoogleCloudDatacatalogV1DataSourceFormProperties {

		/** Full name of a resource as defined by the service. For example: `//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}` */
		resource: FormControl<string | null | undefined>,

		/** Service that physically stores the data. */
		service: FormControl<GoogleCloudDatacatalogV1DataSourceService | null | undefined>,

		/** Output only. Data Catalog entry name, if applicable. */
		sourceEntry: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1DataSourceFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DataSourceFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<GoogleCloudDatacatalogV1DataSourceService | null | undefined>(undefined),
			sourceEntry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1DataSourceService { SERVICE_UNSPECIFIED = 0, CLOUD_STORAGE = 1, BIGQUERY = 2 }


	/** Details the properties of the underlying storage. */
	export interface GoogleCloudDatacatalogV1StorageProperties {

		/** Patterns to identify a set of files for this fileset. Examples of a valid `file_pattern`: * `gs://bucket_name/dir/*`: matches all files in the `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in the `bucket_name/dir` and all subdirectories recursively * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/b`: matches all files in `bucket_name` that match the `a/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` */
		filePattern?: Array<string>;

		/** File type in MIME format, for example, `text/plain`. */
		fileType?: string | null;
	}

	/** Details the properties of the underlying storage. */
	export interface GoogleCloudDatacatalogV1StoragePropertiesFormProperties {

		/** File type in MIME format, for example, `text/plain`. */
		fileType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1StoragePropertiesFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1StoragePropertiesFormProperties>({
			fileType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later. */
	export interface GoogleCloudDatacatalogV1DataSourceConnectionSpec {

		/** Specification for the BigQuery connection. */
		bigqueryConnectionSpec?: GoogleCloudDatacatalogV1BigQueryConnectionSpec;
	}

	/** Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later. */
	export interface GoogleCloudDatacatalogV1DataSourceConnectionSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1DataSourceConnectionSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DataSourceConnectionSpecFormProperties>({
		});

	}


	/** Specification that applies to a table resource. Valid only for entries with the `TABLE` type. */
	export interface GoogleCloudDatacatalogV1DatabaseTableSpec {

		/** Specification that applies to database view. */
		databaseViewSpec?: GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec;

		/** Entry specification for a Dataplex table. */
		dataplexTable?: GoogleCloudDatacatalogV1DataplexTableSpec;

		/** Type of this table. */
		type?: GoogleCloudDatacatalogV1DatabaseTableSpecType | null;
	}

	/** Specification that applies to a table resource. Valid only for entries with the `TABLE` type. */
	export interface GoogleCloudDatacatalogV1DatabaseTableSpecFormProperties {

		/** Type of this table. */
		type: FormControl<GoogleCloudDatacatalogV1DatabaseTableSpecType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1DatabaseTableSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DatabaseTableSpecFormProperties>({
			type: new FormControl<GoogleCloudDatacatalogV1DatabaseTableSpecType | null | undefined>(undefined),
		});

	}


	/** Specification that applies to database view. */
	export interface GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec {

		/** Name of a singular table this view reflects one to one. */
		baseTable?: string | null;

		/** SQL query used to generate this view. */
		sqlQuery?: string | null;

		/** Type of this view. */
		viewType?: GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewType | null;
	}

	/** Specification that applies to database view. */
	export interface GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecFormProperties {

		/** Name of a singular table this view reflects one to one. */
		baseTable: FormControl<string | null | undefined>,

		/** SQL query used to generate this view. */
		sqlQuery: FormControl<string | null | undefined>,

		/** Type of this view. */
		viewType: FormControl<GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecFormProperties>({
			baseTable: new FormControl<string | null | undefined>(undefined),
			sqlQuery: new FormControl<string | null | undefined>(undefined),
			viewType: new FormControl<GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewType { VIEW_TYPE_UNSPECIFIED = 0, STANDARD_VIEW = 1, MATERIALIZED_VIEW = 2 }


	/** Entry specification for a Dataplex table. */
	export interface GoogleCloudDatacatalogV1DataplexTableSpec {

		/** Common Dataplex fields. */
		dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;

		/** List of external tables registered by Dataplex in other systems based on the same underlying data. External tables allow to query this data in those systems. */
		externalTables?: Array<GoogleCloudDatacatalogV1DataplexExternalTable>;

		/** Indicates if the table schema is managed by the user or not. */
		userManaged?: boolean | null;
	}

	/** Entry specification for a Dataplex table. */
	export interface GoogleCloudDatacatalogV1DataplexTableSpecFormProperties {

		/** Indicates if the table schema is managed by the user or not. */
		userManaged: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1DataplexTableSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DataplexTableSpecFormProperties>({
			userManaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Common Dataplex fields. */
	export interface GoogleCloudDatacatalogV1DataplexSpec {

		/** Fully qualified resource name of an asset in Dataplex, to which the underlying data source (Cloud Storage bucket or BigQuery dataset) of the entity is attached. */
		asset?: string | null;

		/** Compression format of the data, e.g., zip, gzip etc. */
		compressionFormat?: string | null;

		/** Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data. */
		dataFormat?: GoogleCloudDatacatalogV1PhysicalSchema;

		/** Project ID of the underlying Cloud Storage or BigQuery data. Note that this may not be the same project as the correspondingly Dataplex lake / zone / asset. */
		projectId?: string | null;
	}

	/** Common Dataplex fields. */
	export interface GoogleCloudDatacatalogV1DataplexSpecFormProperties {

		/** Fully qualified resource name of an asset in Dataplex, to which the underlying data source (Cloud Storage bucket or BigQuery dataset) of the entity is attached. */
		asset: FormControl<string | null | undefined>,

		/** Compression format of the data, e.g., zip, gzip etc. */
		compressionFormat: FormControl<string | null | undefined>,

		/** Project ID of the underlying Cloud Storage or BigQuery data. Note that this may not be the same project as the correspondingly Dataplex lake / zone / asset. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1DataplexSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DataplexSpecFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			compressionFormat: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data. */
	export interface GoogleCloudDatacatalogV1PhysicalSchema {

		/** Schema in Avro JSON format. */
		avro?: GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;

		/** Marks a CSV-encoded data source. */
		csv?: GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema;

		/** Marks an ORC-encoded data source. */
		orc?: GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema;

		/** Marks a Parquet-encoded data source. */
		parquet?: GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema;

		/** Schema in protocol buffer format. */
		protobuf?: GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;

		/** Schema in Thrift format. */
		thrift?: GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
	}

	/** Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1PhysicalSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PhysicalSchemaFormProperties>({
		});

	}


	/** Schema in Avro JSON format. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema {

		/** JSON source of the Avro schema. */
		text?: string | null;
	}

	/** Schema in Avro JSON format. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaAvroSchemaFormProperties {

		/** JSON source of the Avro schema. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1PhysicalSchemaAvroSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PhysicalSchemaAvroSchemaFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Marks a CSV-encoded data source. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema {
	}

	/** Marks a CSV-encoded data source. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaCsvSchemaFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1PhysicalSchemaCsvSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PhysicalSchemaCsvSchemaFormProperties>({
		});

	}


	/** Marks an ORC-encoded data source. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema {
	}

	/** Marks an ORC-encoded data source. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaOrcSchemaFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1PhysicalSchemaOrcSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PhysicalSchemaOrcSchemaFormProperties>({
		});

	}


	/** Marks a Parquet-encoded data source. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema {
	}

	/** Marks a Parquet-encoded data source. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaParquetSchemaFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1PhysicalSchemaParquetSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PhysicalSchemaParquetSchemaFormProperties>({
		});

	}


	/** Schema in protocol buffer format. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema {

		/** Protocol buffer source of the schema. */
		text?: string | null;
	}

	/** Schema in protocol buffer format. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchemaFormProperties {

		/** Protocol buffer source of the schema. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1PhysicalSchemaProtobufSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchemaFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema in Thrift format. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema {

		/** Thrift IDL source of the schema. */
		text?: string | null;
	}

	/** Schema in Thrift format. */
	export interface GoogleCloudDatacatalogV1PhysicalSchemaThriftSchemaFormProperties {

		/** Thrift IDL source of the schema. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1PhysicalSchemaThriftSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PhysicalSchemaThriftSchemaFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog. */
	export interface GoogleCloudDatacatalogV1DataplexExternalTable {

		/** Name of the Data Catalog entry representing the external table. */
		dataCatalogEntry?: string | null;

		/** Fully qualified name (FQN) of the external table. */
		fullyQualifiedName?: string | null;

		/** Google Cloud resource name of the external table. */
		googleCloudResource?: string | null;

		/** Service in which the external table is registered. */
		system?: GoogleCloudDatacatalogV1DataplexExternalTableSystem | null;
	}

	/** External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog. */
	export interface GoogleCloudDatacatalogV1DataplexExternalTableFormProperties {

		/** Name of the Data Catalog entry representing the external table. */
		dataCatalogEntry: FormControl<string | null | undefined>,

		/** Fully qualified name (FQN) of the external table. */
		fullyQualifiedName: FormControl<string | null | undefined>,

		/** Google Cloud resource name of the external table. */
		googleCloudResource: FormControl<string | null | undefined>,

		/** Service in which the external table is registered. */
		system: FormControl<GoogleCloudDatacatalogV1DataplexExternalTableSystem | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1DataplexExternalTableFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DataplexExternalTableFormProperties>({
			dataCatalogEntry: new FormControl<string | null | undefined>(undefined),
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined),
			googleCloudResource: new FormControl<string | null | undefined>(undefined),
			system: new FormControl<GoogleCloudDatacatalogV1DataplexExternalTableSystem | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1DataplexExternalTableSystem { INTEGRATED_SYSTEM_UNSPECIFIED = 0, BIGQUERY = 1, CLOUD_PUBSUB = 2, DATAPROC_METASTORE = 3, DATAPLEX = 4, CLOUD_SPANNER = 5, CLOUD_BIGTABLE = 6, CLOUD_SQL = 7, LOOKER = 8, VERTEX_AI = 9 }

	export enum GoogleCloudDatacatalogV1DatabaseTableSpecType { TABLE_TYPE_UNSPECIFIED = 0, NATIVE = 1, EXTERNAL = 2 }


	/** Entry specyfication for a Dataplex fileset. */
	export interface GoogleCloudDatacatalogV1DataplexFilesetSpec {

		/** Common Dataplex fields. */
		dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;
	}

	/** Entry specyfication for a Dataplex fileset. */
	export interface GoogleCloudDatacatalogV1DataplexFilesetSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1DataplexFilesetSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DataplexFilesetSpecFormProperties>({
		});

	}


	/** Specification that applies to a dataset. Valid only for entries with the `DATASET` type. */
	export interface GoogleCloudDatacatalogV1DatasetSpec {

		/** Specification for vertex dataset resources. */
		vertexDatasetSpec?: GoogleCloudDatacatalogV1VertexDatasetSpec;
	}

	/** Specification that applies to a dataset. Valid only for entries with the `DATASET` type. */
	export interface GoogleCloudDatacatalogV1DatasetSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1DatasetSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DatasetSpecFormProperties>({
		});

	}


	/** Specification for vertex dataset resources. */
	export interface GoogleCloudDatacatalogV1VertexDatasetSpec {

		/** The number of DataItems in this Dataset. Only apply for non-structured Dataset. */
		dataItemCount?: string | null;

		/** Type of the dataset. */
		dataType?: GoogleCloudDatacatalogV1VertexDatasetSpecDataType | null;
	}

	/** Specification for vertex dataset resources. */
	export interface GoogleCloudDatacatalogV1VertexDatasetSpecFormProperties {

		/** The number of DataItems in this Dataset. Only apply for non-structured Dataset. */
		dataItemCount: FormControl<string | null | undefined>,

		/** Type of the dataset. */
		dataType: FormControl<GoogleCloudDatacatalogV1VertexDatasetSpecDataType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1VertexDatasetSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1VertexDatasetSpecFormProperties>({
			dataItemCount: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<GoogleCloudDatacatalogV1VertexDatasetSpecDataType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1VertexDatasetSpecDataType { DATA_TYPE_UNSPECIFIED = 0, TABLE = 1, IMAGE = 2, TEXT = 3, VIDEO = 4, CONVERSATION = 5, TIME_SERIES = 6, DOCUMENT = 7, TEXT_TO_SPEECH = 8, TRANSLATION = 9, STORE_VISION = 10, ENTERPRISE_KNOWLEDGE_GRAPH = 11, TEXT_PROMPT = 12 }


	/** Wrapper for any item that can be contained in the dump. */
	export interface GoogleCloudDatacatalogV1DumpItem {

		/** Wrapper containing Entry and information about Tags that should and should not be attached to it. */
		taggedEntry?: GoogleCloudDatacatalogV1TaggedEntry;
	}

	/** Wrapper for any item that can be contained in the dump. */
	export interface GoogleCloudDatacatalogV1DumpItemFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1DumpItemFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1DumpItemFormProperties>({
		});

	}


	/** Wrapper containing Entry and information about Tags that should and should not be attached to it. */
	export interface GoogleCloudDatacatalogV1TaggedEntry {

		/** Optional. Tags that should be deleted from the Data Catalog. Caller should populate template name and column only. */
		absentTags?: Array<GoogleCloudDatacatalogV1Tag>;

		/** Optional. Tags that should be ingested into the Data Catalog. Caller should populate template name, column and fields. */
		presentTags?: Array<GoogleCloudDatacatalogV1Tag>;

		/** Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag. */
		v1Entry?: GoogleCloudDatacatalogV1Entry;
	}

	/** Wrapper containing Entry and information about Tags that should and should not be attached to it. */
	export interface GoogleCloudDatacatalogV1TaggedEntryFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1TaggedEntryFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1TaggedEntryFormProperties>({
		});

	}


	/** Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags. */
	export interface GoogleCloudDatacatalogV1Tag {

		/** Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`. */
		column?: string | null;

		/** Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields. */
		fields?: {[id: string]: GoogleCloudDatacatalogV1TagField };

		/** The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. */
		name?: string | null;

		/** Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation. */
		template?: string | null;

		/** Output only. The display name of the tag template. */
		templateDisplayName?: string | null;
	}

	/** Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags. */
	export interface GoogleCloudDatacatalogV1TagFormProperties {

		/** Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`. */
		column: FormControl<string | null | undefined>,

		/** Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields. */
		fields: FormControl<{[id: string]: GoogleCloudDatacatalogV1TagField } | null | undefined>,

		/** The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. */
		name: FormControl<string | null | undefined>,

		/** Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation. */
		template: FormControl<string | null | undefined>,

		/** Output only. The display name of the tag template. */
		templateDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1TagFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1TagFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			fields: new FormControl<{[id: string]: GoogleCloudDatacatalogV1TagField } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			templateDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the value and additional information on a field within a Tag. */
	export interface GoogleCloudDatacatalogV1TagField {

		/** The value of a tag field with a boolean type. */
		boolValue?: boolean | null;

		/** Output only. The display name of this field. */
		displayName?: string | null;

		/** The value of a tag field with a double type. */
		doubleValue?: number | null;

		/** An enum value. */
		enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;

		/** Output only. The order of this field with respect to other fields in this tag. Can be set by Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag don't have to be sequential. */
		order?: number | null;

		/** The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. */
		richtextValue?: string | null;

		/** The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters. */
		stringValue?: string | null;

		/** The value of a tag field with a timestamp type. */
		timestampValue?: string | null;
	}

	/** Contains the value and additional information on a field within a Tag. */
	export interface GoogleCloudDatacatalogV1TagFieldFormProperties {

		/** The value of a tag field with a boolean type. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Output only. The display name of this field. */
		displayName: FormControl<string | null | undefined>,

		/** The value of a tag field with a double type. */
		doubleValue: FormControl<number | null | undefined>,

		/** Output only. The order of this field with respect to other fields in this tag. Can be set by Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag don't have to be sequential. */
		order: FormControl<number | null | undefined>,

		/** The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. */
		richtextValue: FormControl<string | null | undefined>,

		/** The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters. */
		stringValue: FormControl<string | null | undefined>,

		/** The value of a tag field with a timestamp type. */
		timestampValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1TagFieldFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1TagFieldFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			richtextValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An enum value. */
	export interface GoogleCloudDatacatalogV1TagFieldEnumValue {

		/** The display name of the enum value. */
		displayName?: string | null;
	}

	/** An enum value. */
	export interface GoogleCloudDatacatalogV1TagFieldEnumValueFormProperties {

		/** The display name of the enum value. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1TagFieldEnumValueFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1TagFieldEnumValueFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag. */
	export interface GoogleCloudDatacatalogV1Entry {

		/** Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding). */
		bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1BigQueryDateShardedSpec;

		/** Describes a BigQuery table. */
		bigqueryTableSpec?: GoogleCloudDatacatalogV1BigQueryTableSpec;

		/** Business Context of the entry. */
		businessContext?: GoogleCloudDatacatalogV1BusinessContext;

		/** Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type) */
		cloudBigtableSystemSpec?: GoogleCloudDatacatalogV1CloudBigtableSystemSpec;

		/** Physical location of an entry. */
		dataSource?: GoogleCloudDatacatalogV1DataSource;

		/** Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later. */
		dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;

		/** Specification that applies to a table resource. Valid only for entries with the `TABLE` type. */
		databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;

		/** Specification that applies to a dataset. Valid only for entries with the `DATASET` type. */
		datasetSpec?: GoogleCloudDatacatalogV1DatasetSpec;

		/** Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string. */
		description?: string | null;

		/** Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string. */
		displayName?: string | null;

		/** Specification that applies to a fileset. Valid only for entries with the 'FILESET' type. */
		filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;

		/** [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries. */
		fullyQualifiedName?: string | null;

		/** Describes a Cloud Storage fileset entry. */
		gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpec;

		/** Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore. */
		integratedSystem?: GoogleCloudDatacatalogV1DataplexExternalTableSystem | null;

		/** Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system. */
		labels?: {[id: string]: string };

		/** The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8. */
		linkedResource?: string | null;

		/** Specification that applies to entries that are part `LOOKER` system (user_specified_type) */
		lookerSystemSpec?: GoogleCloudDatacatalogV1LookerSystemSpec;

		/** Specification that applies to a model. Valid only for entries with the `MODEL` type. */
		modelSpec?: GoogleCloudDatacatalogV1ModelSpec;

		/** Output only. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name. */
		name?: string | null;

		/** Entry metadata relevant only to the user and private to them. */
		personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;

		/** Specification that applies to a routine. Valid only for entries with the `ROUTINE` type. */
		routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;

		/** Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema. */
		schema?: GoogleCloudDatacatalogV1Schema;

		/** Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type. */
		serviceSpec?: GoogleCloudDatacatalogV1ServiceSpec;

		/** Timestamps associated with this resource in a particular system. */
		sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;

		/** Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type) */
		sqlDatabaseSystemSpec?: GoogleCloudDatacatalogV1SqlDatabaseSystemSpec;

		/** The type of the entry. For details, see [`EntryType`](#entrytype). */
		type?: GoogleCloudDatacatalogV1EntryType | null;

		/** The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day. */
		usageSignal?: GoogleCloudDatacatalogV1UsageSignal;

		/** Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. */
		userSpecifiedSystem?: string | null;

		/** Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. */
		userSpecifiedType?: string | null;
	}

	/** Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag. */
	export interface GoogleCloudDatacatalogV1EntryFormProperties {

		/** Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string. */
		description: FormControl<string | null | undefined>,

		/** Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string. */
		displayName: FormControl<string | null | undefined>,

		/** [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries. */
		fullyQualifiedName: FormControl<string | null | undefined>,

		/** Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore. */
		integratedSystem: FormControl<GoogleCloudDatacatalogV1DataplexExternalTableSystem | null | undefined>,

		/** Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8. */
		linkedResource: FormControl<string | null | undefined>,

		/** Output only. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name. */
		name: FormControl<string | null | undefined>,

		/** The type of the entry. For details, see [`EntryType`](#entrytype). */
		type: FormControl<GoogleCloudDatacatalogV1EntryType | null | undefined>,

		/** Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. */
		userSpecifiedSystem: FormControl<string | null | undefined>,

		/** Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. */
		userSpecifiedType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1EntryFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1EntryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined),
			integratedSystem: new FormControl<GoogleCloudDatacatalogV1DataplexExternalTableSystem | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			linkedResource: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDatacatalogV1EntryType | null | undefined>(undefined),
			userSpecifiedSystem: new FormControl<string | null | undefined>(undefined),
			userSpecifiedType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification that applies to a fileset. Valid only for entries with the 'FILESET' type. */
	export interface GoogleCloudDatacatalogV1FilesetSpec {

		/** Entry specyfication for a Dataplex fileset. */
		dataplexFileset?: GoogleCloudDatacatalogV1DataplexFilesetSpec;
	}

	/** Specification that applies to a fileset. Valid only for entries with the 'FILESET' type. */
	export interface GoogleCloudDatacatalogV1FilesetSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1FilesetSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1FilesetSpecFormProperties>({
		});

	}


	/** Describes a Cloud Storage fileset entry. */
	export interface GoogleCloudDatacatalogV1GcsFilesetSpec {

		/** Required. Patterns to identify a set of files in Google Cloud Storage. For more information, see [Wildcard Names] (https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames). Note: Currently, bucket wildcards are not supported. Examples of valid `file_patterns`: * `gs://bucket_name/dir/*`: matches all files in `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` and all subdirectories * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/b`: matches all files in `bucket_name` that match the `a/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to match complex sets of files, for example: `gs://bucket_name/[a-m]??.j*g` */
		filePatterns?: Array<string>;

		/** Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here. */
		sampleGcsFileSpecs?: Array<GoogleCloudDatacatalogV1GcsFileSpec>;
	}

	/** Describes a Cloud Storage fileset entry. */
	export interface GoogleCloudDatacatalogV1GcsFilesetSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1GcsFilesetSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1GcsFilesetSpecFormProperties>({
		});

	}


	/** Specification of a single file in Cloud Storage. */
	export interface GoogleCloudDatacatalogV1GcsFileSpec {

		/** Required. Full file path. Example: `gs://bucket_name/a/b.txt`. */
		filePath?: string | null;

		/** Timestamps associated with this resource in a particular system. */
		gcsTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;

		/** Output only. File size in bytes. */
		sizeBytes?: string | null;
	}

	/** Specification of a single file in Cloud Storage. */
	export interface GoogleCloudDatacatalogV1GcsFileSpecFormProperties {

		/** Required. Full file path. Example: `gs://bucket_name/a/b.txt`. */
		filePath: FormControl<string | null | undefined>,

		/** Output only. File size in bytes. */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1GcsFileSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1GcsFileSpecFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Timestamps associated with this resource in a particular system. */
	export interface GoogleCloudDatacatalogV1SystemTimestamps {

		/** Creation timestamp of the resource within the given system. */
		createTime?: string | null;

		/** Output only. Expiration timestamp of the resource within the given system. Currently only applicable to BigQuery resources. */
		expireTime?: string | null;

		/** Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes. */
		updateTime?: string | null;
	}

	/** Timestamps associated with this resource in a particular system. */
	export interface GoogleCloudDatacatalogV1SystemTimestampsFormProperties {

		/** Creation timestamp of the resource within the given system. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Expiration timestamp of the resource within the given system. Currently only applicable to BigQuery resources. */
		expireTime: FormControl<string | null | undefined>,

		/** Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1SystemTimestampsFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1SystemTimestampsFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification that applies to entries that are part `LOOKER` system (user_specified_type) */
	export interface GoogleCloudDatacatalogV1LookerSystemSpec {

		/** Name of the parent Looker Instance. Empty if it does not exist. */
		parentInstanceDisplayName?: string | null;

		/** ID of the parent Looker Instance. Empty if it does not exist. Example value: `someinstance.looker.com` */
		parentInstanceId?: string | null;

		/** Name of the parent Model. Empty if it does not exist. */
		parentModelDisplayName?: string | null;

		/** ID of the parent Model. Empty if it does not exist. */
		parentModelId?: string | null;

		/** Name of the parent View. Empty if it does not exist. */
		parentViewDisplayName?: string | null;

		/** ID of the parent View. Empty if it does not exist. */
		parentViewId?: string | null;
	}

	/** Specification that applies to entries that are part `LOOKER` system (user_specified_type) */
	export interface GoogleCloudDatacatalogV1LookerSystemSpecFormProperties {

		/** Name of the parent Looker Instance. Empty if it does not exist. */
		parentInstanceDisplayName: FormControl<string | null | undefined>,

		/** ID of the parent Looker Instance. Empty if it does not exist. Example value: `someinstance.looker.com` */
		parentInstanceId: FormControl<string | null | undefined>,

		/** Name of the parent Model. Empty if it does not exist. */
		parentModelDisplayName: FormControl<string | null | undefined>,

		/** ID of the parent Model. Empty if it does not exist. */
		parentModelId: FormControl<string | null | undefined>,

		/** Name of the parent View. Empty if it does not exist. */
		parentViewDisplayName: FormControl<string | null | undefined>,

		/** ID of the parent View. Empty if it does not exist. */
		parentViewId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1LookerSystemSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1LookerSystemSpecFormProperties>({
			parentInstanceDisplayName: new FormControl<string | null | undefined>(undefined),
			parentInstanceId: new FormControl<string | null | undefined>(undefined),
			parentModelDisplayName: new FormControl<string | null | undefined>(undefined),
			parentModelId: new FormControl<string | null | undefined>(undefined),
			parentViewDisplayName: new FormControl<string | null | undefined>(undefined),
			parentViewId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification that applies to a model. Valid only for entries with the `MODEL` type. */
	export interface GoogleCloudDatacatalogV1ModelSpec {

		/** Specification for vertex model resources. */
		vertexModelSpec?: GoogleCloudDatacatalogV1VertexModelSpec;
	}

	/** Specification that applies to a model. Valid only for entries with the `MODEL` type. */
	export interface GoogleCloudDatacatalogV1ModelSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1ModelSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ModelSpecFormProperties>({
		});

	}


	/** Specification for vertex model resources. */
	export interface GoogleCloudDatacatalogV1VertexModelSpec {

		/** URI of the Docker image to be used as the custom container for serving predictions. */
		containerImageUri?: string | null;

		/** User provided version aliases so that a model version can be referenced via alias */
		versionAliases?: Array<string>;

		/** The description of this version. */
		versionDescription?: string | null;

		/** The version ID of the model. */
		versionId?: string | null;

		/** Detail description of the source information of a Vertex model. */
		vertexModelSourceInfo?: GoogleCloudDatacatalogV1VertexModelSourceInfo;
	}

	/** Specification for vertex model resources. */
	export interface GoogleCloudDatacatalogV1VertexModelSpecFormProperties {

		/** URI of the Docker image to be used as the custom container for serving predictions. */
		containerImageUri: FormControl<string | null | undefined>,

		/** The description of this version. */
		versionDescription: FormControl<string | null | undefined>,

		/** The version ID of the model. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1VertexModelSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1VertexModelSpecFormProperties>({
			containerImageUri: new FormControl<string | null | undefined>(undefined),
			versionDescription: new FormControl<string | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detail description of the source information of a Vertex model. */
	export interface GoogleCloudDatacatalogV1VertexModelSourceInfo {

		/** If this Model is copy of another Model. If true then source_type pertains to the original. */
		copy?: boolean | null;

		/** Type of the model source. */
		sourceType?: GoogleCloudDatacatalogV1VertexModelSourceInfoSourceType | null;
	}

	/** Detail description of the source information of a Vertex model. */
	export interface GoogleCloudDatacatalogV1VertexModelSourceInfoFormProperties {

		/** If this Model is copy of another Model. If true then source_type pertains to the original. */
		copy: FormControl<boolean | null | undefined>,

		/** Type of the model source. */
		sourceType: FormControl<GoogleCloudDatacatalogV1VertexModelSourceInfoSourceType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1VertexModelSourceInfoFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1VertexModelSourceInfoFormProperties>({
			copy: new FormControl<boolean | null | undefined>(undefined),
			sourceType: new FormControl<GoogleCloudDatacatalogV1VertexModelSourceInfoSourceType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1VertexModelSourceInfoSourceType { MODEL_SOURCE_TYPE_UNSPECIFIED = 0, AUTOML = 1, CUSTOM = 2, BQML = 3, MODEL_GARDEN = 4 }


	/** Entry metadata relevant only to the user and private to them. */
	export interface GoogleCloudDatacatalogV1PersonalDetails {

		/** Set if the entry is starred; unset otherwise. */
		starTime?: string | null;

		/** True if the entry is starred by the user; false otherwise. */
		starred?: boolean | null;
	}

	/** Entry metadata relevant only to the user and private to them. */
	export interface GoogleCloudDatacatalogV1PersonalDetailsFormProperties {

		/** Set if the entry is starred; unset otherwise. */
		starTime: FormControl<string | null | undefined>,

		/** True if the entry is starred by the user; false otherwise. */
		starred: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1PersonalDetailsFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1PersonalDetailsFormProperties>({
			starTime: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specification that applies to a routine. Valid only for entries with the `ROUTINE` type. */
	export interface GoogleCloudDatacatalogV1RoutineSpec {

		/** Fields specific for BigQuery routines. */
		bigqueryRoutineSpec?: GoogleCloudDatacatalogV1BigQueryRoutineSpec;

		/** The body of the routine. */
		definitionBody?: string | null;

		/** The language the routine is written in. The exact value depends on the source system. For BigQuery routines, possible values are: * `SQL` * `JAVASCRIPT` */
		language?: string | null;

		/** Return type of the argument. The exact value depends on the source system and the language. */
		returnType?: string | null;

		/** Arguments of the routine. */
		routineArguments?: Array<GoogleCloudDatacatalogV1RoutineSpecArgument>;

		/** The type of the routine. */
		routineType?: GoogleCloudDatacatalogV1RoutineSpecRoutineType | null;
	}

	/** Specification that applies to a routine. Valid only for entries with the `ROUTINE` type. */
	export interface GoogleCloudDatacatalogV1RoutineSpecFormProperties {

		/** The body of the routine. */
		definitionBody: FormControl<string | null | undefined>,

		/** The language the routine is written in. The exact value depends on the source system. For BigQuery routines, possible values are: * `SQL` * `JAVASCRIPT` */
		language: FormControl<string | null | undefined>,

		/** Return type of the argument. The exact value depends on the source system and the language. */
		returnType: FormControl<string | null | undefined>,

		/** The type of the routine. */
		routineType: FormControl<GoogleCloudDatacatalogV1RoutineSpecRoutineType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1RoutineSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1RoutineSpecFormProperties>({
			definitionBody: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			returnType: new FormControl<string | null | undefined>(undefined),
			routineType: new FormControl<GoogleCloudDatacatalogV1RoutineSpecRoutineType | null | undefined>(undefined),
		});

	}


	/** Input or output argument of a function or stored procedure. */
	export interface GoogleCloudDatacatalogV1RoutineSpecArgument {

		/** Specifies whether the argument is input or output. */
		mode?: GoogleCloudDatacatalogV1RoutineSpecArgumentMode | null;

		/** The name of the argument. A return argument of a function might not have a name. */
		name?: string | null;

		/** Type of the argument. The exact value depends on the source system and the language. */
		type?: string | null;
	}

	/** Input or output argument of a function or stored procedure. */
	export interface GoogleCloudDatacatalogV1RoutineSpecArgumentFormProperties {

		/** Specifies whether the argument is input or output. */
		mode: FormControl<GoogleCloudDatacatalogV1RoutineSpecArgumentMode | null | undefined>,

		/** The name of the argument. A return argument of a function might not have a name. */
		name: FormControl<string | null | undefined>,

		/** Type of the argument. The exact value depends on the source system and the language. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1RoutineSpecArgumentFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1RoutineSpecArgumentFormProperties>({
			mode: new FormControl<GoogleCloudDatacatalogV1RoutineSpecArgumentMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1RoutineSpecArgumentMode { MODE_UNSPECIFIED = 0, IN = 1, OUT = 2, INOUT = 3 }

	export enum GoogleCloudDatacatalogV1RoutineSpecRoutineType { ROUTINE_TYPE_UNSPECIFIED = 0, SCALAR_FUNCTION = 1, PROCEDURE = 2 }


	/** Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema. */
	export interface GoogleCloudDatacatalogV1Schema {

		/** The unified GoogleSQL-like schema of columns. The overall maximum number of columns and nested columns is 10,000. The maximum nested depth is 15 levels. */
		columns?: Array<GoogleCloudDatacatalogV1ColumnSchema>;
	}

	/** Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema. */
	export interface GoogleCloudDatacatalogV1SchemaFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1SchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1SchemaFormProperties>({
		});

	}


	/** Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type. */
	export interface GoogleCloudDatacatalogV1ServiceSpec {

		/** Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type) */
		cloudBigtableInstanceSpec?: GoogleCloudDatacatalogV1CloudBigtableInstanceSpec;
	}

	/** Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type. */
	export interface GoogleCloudDatacatalogV1ServiceSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1ServiceSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ServiceSpecFormProperties>({
		});

	}


	/** Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type) */
	export interface GoogleCloudDatacatalogV1SqlDatabaseSystemSpec {

		/** Version of the database engine. */
		databaseVersion?: string | null;

		/** Host of the SQL database enum InstanceHost { UNDEFINED = 0; SELF_HOSTED = 1; CLOUD_SQL = 2; AMAZON_RDS = 3; AZURE_SQL = 4; } Host of the enclousing database instance. */
		instanceHost?: string | null;

		/** SQL Database Engine. enum SqlEngine { UNDEFINED = 0; MY_SQL = 1; POSTGRE_SQL = 2; SQL_SERVER = 3; } Engine of the enclosing database instance. */
		sqlEngine?: string | null;
	}

	/** Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type) */
	export interface GoogleCloudDatacatalogV1SqlDatabaseSystemSpecFormProperties {

		/** Version of the database engine. */
		databaseVersion: FormControl<string | null | undefined>,

		/** Host of the SQL database enum InstanceHost { UNDEFINED = 0; SELF_HOSTED = 1; CLOUD_SQL = 2; AMAZON_RDS = 3; AZURE_SQL = 4; } Host of the enclousing database instance. */
		instanceHost: FormControl<string | null | undefined>,

		/** SQL Database Engine. enum SqlEngine { UNDEFINED = 0; MY_SQL = 1; POSTGRE_SQL = 2; SQL_SERVER = 3; } Engine of the enclosing database instance. */
		sqlEngine: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1SqlDatabaseSystemSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1SqlDatabaseSystemSpecFormProperties>({
			databaseVersion: new FormControl<string | null | undefined>(undefined),
			instanceHost: new FormControl<string | null | undefined>(undefined),
			sqlEngine: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1EntryType { ENTRY_TYPE_UNSPECIFIED = 0, TABLE = 1, MODEL = 2, DATA_STREAM = 3, FILESET = 4, CLUSTER = 5, DATABASE = 6, DATA_SOURCE_CONNECTION = 7, ROUTINE = 8, LAKE = 9, ZONE = 10, SERVICE = 11, DATABASE_SCHEMA = 12, DASHBOARD = 13, EXPLORE = 14, LOOK = 15 }


	/** The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day. */
	export interface GoogleCloudDatacatalogV1UsageSignal {

		/** Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`. */
		commonUsageWithinTimeRange?: {[id: string]: GoogleCloudDatacatalogV1CommonUsageStats };

		/** Favorite count in the source system. */
		favoriteCount?: string | null;

		/** The end timestamp of the duration of usage statistics. */
		updateTime?: string | null;

		/** Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D"}`. */
		usageWithinTimeRange?: {[id: string]: GoogleCloudDatacatalogV1UsageStats };
	}

	/** The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day. */
	export interface GoogleCloudDatacatalogV1UsageSignalFormProperties {

		/** Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`. */
		commonUsageWithinTimeRange: FormControl<{[id: string]: GoogleCloudDatacatalogV1CommonUsageStats } | null | undefined>,

		/** Favorite count in the source system. */
		favoriteCount: FormControl<string | null | undefined>,

		/** The end timestamp of the duration of usage statistics. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D"}`. */
		usageWithinTimeRange: FormControl<{[id: string]: GoogleCloudDatacatalogV1UsageStats } | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1UsageSignalFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1UsageSignalFormProperties>({
			commonUsageWithinTimeRange: new FormControl<{[id: string]: GoogleCloudDatacatalogV1CommonUsageStats } | null | undefined>(undefined),
			favoriteCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			usageWithinTimeRange: new FormControl<{[id: string]: GoogleCloudDatacatalogV1UsageStats } | null | undefined>(undefined),
		});

	}


	/** Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables) */
	export interface GoogleCloudDatacatalogV1UsageStats {

		/** The number of cancelled attempts to use the underlying entry. */
		totalCancellations?: number | null;

		/** The number of successful uses of the underlying entry. */
		totalCompletions?: number | null;

		/** Total time spent only on successful uses, in milliseconds. */
		totalExecutionTimeForCompletionsMillis?: number | null;

		/** The number of failed attempts to use the underlying entry. */
		totalFailures?: number | null;
	}

	/** Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables) */
	export interface GoogleCloudDatacatalogV1UsageStatsFormProperties {

		/** The number of cancelled attempts to use the underlying entry. */
		totalCancellations: FormControl<number | null | undefined>,

		/** The number of successful uses of the underlying entry. */
		totalCompletions: FormControl<number | null | undefined>,

		/** Total time spent only on successful uses, in milliseconds. */
		totalExecutionTimeForCompletionsMillis: FormControl<number | null | undefined>,

		/** The number of failed attempts to use the underlying entry. */
		totalFailures: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1UsageStatsFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1UsageStatsFormProperties>({
			totalCancellations: new FormControl<number | null | undefined>(undefined),
			totalCompletions: new FormControl<number | null | undefined>(undefined),
			totalExecutionTimeForCompletionsMillis: new FormControl<number | null | undefined>(undefined),
			totalFailures: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata message for long-running operation returned by the ImportEntries. */
	export interface GoogleCloudDatacatalogV1ImportEntriesMetadata {

		/** Partial errors that are encountered during the ImportEntries operation. There is no guarantee that all the encountered errors are reported. However, if no errors are reported, it means that no errors were encountered. */
		errors?: Array<Status>;

		/** State of the import operation. */
		state?: GoogleCloudDatacatalogV1ImportEntriesMetadataState | null;
	}

	/** Metadata message for long-running operation returned by the ImportEntries. */
	export interface GoogleCloudDatacatalogV1ImportEntriesMetadataFormProperties {

		/** State of the import operation. */
		state: FormControl<GoogleCloudDatacatalogV1ImportEntriesMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ImportEntriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ImportEntriesMetadataFormProperties>({
			state: new FormControl<GoogleCloudDatacatalogV1ImportEntriesMetadataState | null | undefined>(undefined),
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

	export enum GoogleCloudDatacatalogV1ImportEntriesMetadataState { IMPORT_STATE_UNSPECIFIED = 0, IMPORT_QUEUED = 1, IMPORT_IN_PROGRESS = 2, IMPORT_DONE = 3, IMPORT_OBSOLETE = 4 }


	/** Response message for long-running operation returned by the ImportEntries. */
	export interface GoogleCloudDatacatalogV1ImportEntriesResponse {

		/** Number of entries deleted as a result of import operation. */
		deletedEntriesCount?: string | null;

		/** Cumulative number of entries created and entries updated as a result of import operation. */
		upsertedEntriesCount?: string | null;
	}

	/** Response message for long-running operation returned by the ImportEntries. */
	export interface GoogleCloudDatacatalogV1ImportEntriesResponseFormProperties {

		/** Number of entries deleted as a result of import operation. */
		deletedEntriesCount: FormControl<string | null | undefined>,

		/** Cumulative number of entries created and entries updated as a result of import operation. */
		upsertedEntriesCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ImportEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ImportEntriesResponseFormProperties>({
			deletedEntriesCount: new FormControl<string | null | undefined>(undefined),
			upsertedEntriesCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Long-running operation metadata message returned by the ReconcileTags. */
	export interface GoogleCloudDatacatalogV1ReconcileTagsMetadata {

		/** Maps the name of each tagged column (or empty string for a sole entry) to tagging operation status. */
		errors?: {[id: string]: Status };

		/** State of the reconciliation operation. */
		state?: GoogleCloudDatacatalogV1ReconcileTagsMetadataState | null;
	}

	/** Long-running operation metadata message returned by the ReconcileTags. */
	export interface GoogleCloudDatacatalogV1ReconcileTagsMetadataFormProperties {

		/** Maps the name of each tagged column (or empty string for a sole entry) to tagging operation status. */
		errors: FormControl<{[id: string]: Status } | null | undefined>,

		/** State of the reconciliation operation. */
		state: FormControl<GoogleCloudDatacatalogV1ReconcileTagsMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ReconcileTagsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ReconcileTagsMetadataFormProperties>({
			errors: new FormControl<{[id: string]: Status } | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDatacatalogV1ReconcileTagsMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1ReconcileTagsMetadataState { RECONCILIATION_STATE_UNSPECIFIED = 0, RECONCILIATION_QUEUED = 1, RECONCILIATION_IN_PROGRESS = 2, RECONCILIATION_DONE = 3 }


	/** Long-running operation response message returned by ReconcileTags. */
	export interface GoogleCloudDatacatalogV1ReconcileTagsResponse {

		/** Number of tags created in the request. */
		createdTagsCount?: string | null;

		/** Number of tags deleted in the request. */
		deletedTagsCount?: string | null;

		/** Number of tags updated in the request. */
		updatedTagsCount?: string | null;
	}

	/** Long-running operation response message returned by ReconcileTags. */
	export interface GoogleCloudDatacatalogV1ReconcileTagsResponseFormProperties {

		/** Number of tags created in the request. */
		createdTagsCount: FormControl<string | null | undefined>,

		/** Number of tags deleted in the request. */
		deletedTagsCount: FormControl<string | null | undefined>,

		/** Number of tags updated in the request. */
		updatedTagsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1ReconcileTagsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1ReconcileTagsResponseFormProperties>({
			createdTagsCount: new FormControl<string | null | undefined>(undefined),
			deletedTagsCount: new FormControl<string | null | undefined>(undefined),
			updatedTagsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding */
	export interface GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec {

		/** Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. */
		dataset?: string | null;

		/** Output only. Total number of shards. */
		shardCount?: string | null;

		/** Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`, for example, for shard `MyTable20180101`, the `table_prefix` is `MyTable`. */
		tablePrefix?: string | null;
	}

	/** Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding */
	export interface GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpecFormProperties {

		/** Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. */
		dataset: FormControl<string | null | undefined>,

		/** Output only. Total number of shards. */
		shardCount: FormControl<string | null | undefined>,

		/** Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`, for example, for shard `MyTable20180101`, the `table_prefix` is `MyTable`. */
		tablePrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1BigQueryDateShardedSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpecFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			shardCount: new FormControl<string | null | undefined>(undefined),
			tablePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a BigQuery table. */
	export interface GoogleCloudDatacatalogV1beta1BigQueryTableSpec {

		/** Output only. The table source type. */
		tableSourceType?: GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceType | null;

		/** Normal BigQuery table spec. */
		tableSpec?: GoogleCloudDatacatalogV1beta1TableSpec;

		/** Table view specification. */
		viewSpec?: GoogleCloudDatacatalogV1beta1ViewSpec;
	}

	/** Describes a BigQuery table. */
	export interface GoogleCloudDatacatalogV1beta1BigQueryTableSpecFormProperties {

		/** Output only. The table source type. */
		tableSourceType: FormControl<GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1BigQueryTableSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1BigQueryTableSpecFormProperties>({
			tableSourceType: new FormControl<GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceType | null | undefined>(undefined),
		});

	}


	/** Normal BigQuery table spec. */
	export interface GoogleCloudDatacatalogV1beta1TableSpec {

		/** Output only. If the table is a dated shard, i.e., with name pattern `[prefix]YYYYMMDD`, `grouped_entry` is the Data Catalog resource name of the date sharded grouped entry, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. Otherwise, `grouped_entry` is empty. */
		groupedEntry?: string | null;
	}

	/** Normal BigQuery table spec. */
	export interface GoogleCloudDatacatalogV1beta1TableSpecFormProperties {

		/** Output only. If the table is a dated shard, i.e., with name pattern `[prefix]YYYYMMDD`, `grouped_entry` is the Data Catalog resource name of the date sharded grouped entry, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. Otherwise, `grouped_entry` is empty. */
		groupedEntry: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TableSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TableSpecFormProperties>({
			groupedEntry: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Table view specification. */
	export interface GoogleCloudDatacatalogV1beta1ViewSpec {

		/** Output only. The query that defines the table view. */
		viewQuery?: string | null;
	}

	/** Table view specification. */
	export interface GoogleCloudDatacatalogV1beta1ViewSpecFormProperties {

		/** Output only. The query that defines the table view. */
		viewQuery: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1ViewSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ViewSpecFormProperties>({
			viewQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a column within a schema. Columns could be nested inside other columns. */
	export interface GoogleCloudDatacatalogV1beta1ColumnSchema {

		/** Required. Name of the column. */
		column?: string | null;

		/** Optional. Description of the column. Default value is an empty string. */
		description?: string | null;

		/** Optional. A column's mode indicates whether the values in this column are required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are supported. Default mode is `NULLABLE`. */
		mode?: string | null;

		/** Optional. Schema of sub-columns. A column can have zero or more sub-columns. */
		subcolumns?: Array<GoogleCloudDatacatalogV1beta1ColumnSchema>;

		/** Required. Type of the column. */
		type?: string | null;
	}

	/** Representation of a column within a schema. Columns could be nested inside other columns. */
	export interface GoogleCloudDatacatalogV1beta1ColumnSchemaFormProperties {

		/** Required. Name of the column. */
		column: FormControl<string | null | undefined>,

		/** Optional. Description of the column. Default value is an empty string. */
		description: FormControl<string | null | undefined>,

		/** Optional. A column's mode indicates whether the values in this column are required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are supported. Default mode is `NULLABLE`. */
		mode: FormControl<string | null | undefined>,

		/** Required. Type of the column. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1ColumnSchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ColumnSchemaFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag. */
	export interface GoogleCloudDatacatalogV1beta1Entry {

		/** Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding */
		bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec;

		/** Describes a BigQuery table. */
		bigqueryTableSpec?: GoogleCloudDatacatalogV1beta1BigQueryTableSpec;

		/** Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string. */
		description?: string | null;

		/** Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string. */
		displayName?: string | null;

		/** Describes a Cloud Storage fileset entry. */
		gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpec;

		/** Output only. This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub. */
		integratedSystem?: GoogleCloudDatacatalogV1beta1EntryIntegratedSystem | null;

		/** The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string. */
		linkedResource?: string | null;

		/** Output only. The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name. */
		name?: string | null;

		/** Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema). */
		schema?: GoogleCloudDatacatalogV1beta1Schema;

		/** Timestamps about this resource according to a particular system. */
		sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

		/** The type of the entry. Only used for Entries with types in the EntryType enum. */
		type?: GoogleCloudDatacatalogV1beta1EntryType | null;

		/** The set of all usage signals that we store in Data Catalog. */
		usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;

		/** This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. */
		userSpecifiedSystem?: string | null;

		/** Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`. */
		userSpecifiedType?: string | null;
	}

	/** Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag. */
	export interface GoogleCloudDatacatalogV1beta1EntryFormProperties {

		/** Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string. */
		description: FormControl<string | null | undefined>,

		/** Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub. */
		integratedSystem: FormControl<GoogleCloudDatacatalogV1beta1EntryIntegratedSystem | null | undefined>,

		/** The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string. */
		linkedResource: FormControl<string | null | undefined>,

		/** Output only. The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name. */
		name: FormControl<string | null | undefined>,

		/** The type of the entry. Only used for Entries with types in the EntryType enum. */
		type: FormControl<GoogleCloudDatacatalogV1beta1EntryType | null | undefined>,

		/** This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. */
		userSpecifiedSystem: FormControl<string | null | undefined>,

		/** Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`. */
		userSpecifiedType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1EntryFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1EntryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			integratedSystem: new FormControl<GoogleCloudDatacatalogV1beta1EntryIntegratedSystem | null | undefined>(undefined),
			linkedResource: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDatacatalogV1beta1EntryType | null | undefined>(undefined),
			userSpecifiedSystem: new FormControl<string | null | undefined>(undefined),
			userSpecifiedType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Cloud Storage fileset entry. */
	export interface GoogleCloudDatacatalogV1beta1GcsFilesetSpec {

		/** Required. Patterns to identify a set of files in Google Cloud Storage. See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames) for more information. Note that bucket wildcards are currently not supported. Examples of valid file_patterns: * `gs://bucket_name/dir/*`: matches all files within `bucket_name/dir` directory. * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` spanning all subdirectories. * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/b`: matches all files in `bucket_name` that match `a/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to provide more powerful matches, for example: * `gs://bucket_name/[a-m]??.j*g` */
		filePatterns?: Array<string>;

		/** Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here. */
		sampleGcsFileSpecs?: Array<GoogleCloudDatacatalogV1beta1GcsFileSpec>;
	}

	/** Describes a Cloud Storage fileset entry. */
	export interface GoogleCloudDatacatalogV1beta1GcsFilesetSpecFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1beta1GcsFilesetSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1GcsFilesetSpecFormProperties>({
		});

	}


	/** Specifications of a single file in Cloud Storage. */
	export interface GoogleCloudDatacatalogV1beta1GcsFileSpec {

		/** Required. The full file path. Example: `gs://bucket_name/a/b.txt`. */
		filePath?: string | null;

		/** Timestamps about this resource according to a particular system. */
		gcsTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

		/** Output only. The size of the file, in bytes. */
		sizeBytes?: string | null;
	}

	/** Specifications of a single file in Cloud Storage. */
	export interface GoogleCloudDatacatalogV1beta1GcsFileSpecFormProperties {

		/** Required. The full file path. Example: `gs://bucket_name/a/b.txt`. */
		filePath: FormControl<string | null | undefined>,

		/** Output only. The size of the file, in bytes. */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1GcsFileSpecFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1GcsFileSpecFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Timestamps about this resource according to a particular system. */
	export interface GoogleCloudDatacatalogV1beta1SystemTimestamps {

		/** The creation time of the resource within the given system. */
		createTime?: string | null;

		/** Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources. */
		expireTime?: string | null;

		/** The last-modified time of the resource within the given system. */
		updateTime?: string | null;
	}

	/** Timestamps about this resource according to a particular system. */
	export interface GoogleCloudDatacatalogV1beta1SystemTimestampsFormProperties {

		/** The creation time of the resource within the given system. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources. */
		expireTime: FormControl<string | null | undefined>,

		/** The last-modified time of the resource within the given system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1SystemTimestampsFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SystemTimestampsFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1beta1EntryIntegratedSystem { INTEGRATED_SYSTEM_UNSPECIFIED = 0, BIGQUERY = 1, CLOUD_PUBSUB = 2 }


	/** Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema). */
	export interface GoogleCloudDatacatalogV1beta1Schema {

		/** Required. Schema of columns. A maximum of 10,000 columns and sub-columns can be specified. */
		columns?: Array<GoogleCloudDatacatalogV1beta1ColumnSchema>;
	}

	/** Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema). */
	export interface GoogleCloudDatacatalogV1beta1SchemaFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1beta1SchemaFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SchemaFormProperties>({
		});

	}

	export enum GoogleCloudDatacatalogV1beta1EntryType { ENTRY_TYPE_UNSPECIFIED = 0, TABLE = 1, MODEL = 2, DATA_STREAM = 3, FILESET = 4 }


	/** The set of all usage signals that we store in Data Catalog. */
	export interface GoogleCloudDatacatalogV1beta1UsageSignal {

		/** The timestamp of the end of the usage statistics duration. */
		updateTime?: string | null;

		/** Usage statistics over each of the pre-defined time ranges, supported strings for time ranges are {"24H", "7D", "30D"}. */
		usageWithinTimeRange?: {[id: string]: GoogleCloudDatacatalogV1beta1UsageStats };
	}

	/** The set of all usage signals that we store in Data Catalog. */
	export interface GoogleCloudDatacatalogV1beta1UsageSignalFormProperties {

		/** The timestamp of the end of the usage statistics duration. */
		updateTime: FormControl<string | null | undefined>,

		/** Usage statistics over each of the pre-defined time ranges, supported strings for time ranges are {"24H", "7D", "30D"}. */
		usageWithinTimeRange: FormControl<{[id: string]: GoogleCloudDatacatalogV1beta1UsageStats } | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1UsageSignalFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1UsageSignalFormProperties>({
			updateTime: new FormControl<string | null | undefined>(undefined),
			usageWithinTimeRange: new FormControl<{[id: string]: GoogleCloudDatacatalogV1beta1UsageStats } | null | undefined>(undefined),
		});

	}


	/** Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables */
	export interface GoogleCloudDatacatalogV1beta1UsageStats {

		/** The number of times that the underlying entry was attempted to be used but was cancelled by the user. */
		totalCancellations?: number | null;

		/** The number of times that the underlying entry was successfully used. */
		totalCompletions?: number | null;

		/** Total time spent (in milliseconds) during uses the resulted in completions. */
		totalExecutionTimeForCompletionsMillis?: number | null;

		/** The number of times that the underlying entry was attempted to be used but failed. */
		totalFailures?: number | null;
	}

	/** Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables */
	export interface GoogleCloudDatacatalogV1beta1UsageStatsFormProperties {

		/** The number of times that the underlying entry was attempted to be used but was cancelled by the user. */
		totalCancellations: FormControl<number | null | undefined>,

		/** The number of times that the underlying entry was successfully used. */
		totalCompletions: FormControl<number | null | undefined>,

		/** Total time spent (in milliseconds) during uses the resulted in completions. */
		totalExecutionTimeForCompletionsMillis: FormControl<number | null | undefined>,

		/** The number of times that the underlying entry was attempted to be used but failed. */
		totalFailures: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1UsageStatsFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1UsageStatsFormProperties>({
			totalCancellations: new FormControl<number | null | undefined>(undefined),
			totalCompletions: new FormControl<number | null | undefined>(undefined),
			totalExecutionTimeForCompletionsMillis: new FormControl<number | null | undefined>(undefined),
			totalFailures: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources. */
	export interface GoogleCloudDatacatalogV1beta1EntryGroup {

		/** Timestamps about this resource according to a particular system. */
		dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

		/** Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string. */
		description?: string | null;

		/** A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string. */
		displayName?: string | null;

		/** The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name. */
		name?: string | null;
	}

	/** EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources. */
	export interface GoogleCloudDatacatalogV1beta1EntryGroupFormProperties {

		/** Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string. */
		description: FormControl<string | null | undefined>,

		/** A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1EntryGroupFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1EntryGroupFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ExportTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse {

		/** List of taxonomies and policy tags in a tree structure. */
		taxonomies?: Array<GoogleCloudDatacatalogV1beta1SerializedTaxonomy>;
	}

	/** Response message for ExportTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponseFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1beta1ExportTaxonomiesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponseFormProperties>({
		});

	}


	/** Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation. */
	export interface GoogleCloudDatacatalogV1beta1SerializedTaxonomy {

		/** A list of policy types that are activated for a taxonomy. */
		activatedPolicyTypes?: Array<string>;

		/** Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. */
		description?: string | null;

		/** Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8. */
		displayName?: string | null;

		/** Top level policy tags associated with the taxonomy if any. */
		policyTags?: Array<GoogleCloudDatacatalogV1beta1SerializedPolicyTag>;
	}

	/** Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation. */
	export interface GoogleCloudDatacatalogV1beta1SerializedTaxonomyFormProperties {

		/** Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1SerializedTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SerializedTaxonomyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message representing one policy tag when exported as a nested proto. */
	export interface GoogleCloudDatacatalogV1beta1SerializedPolicyTag {

		/** Children of the policy tag if any. */
		childPolicyTags?: Array<GoogleCloudDatacatalogV1beta1SerializedPolicyTag>;

		/** Description of the serialized policy tag. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. */
		description?: string | null;

		/** Required. Display name of the policy tag. Max 200 bytes when encoded in UTF-8. */
		displayName?: string | null;

		/** Resource name of the policy tag. This field will be ignored when calling ImportTaxonomies. */
		policyTag?: string | null;
	}

	/** Message representing one policy tag when exported as a nested proto. */
	export interface GoogleCloudDatacatalogV1beta1SerializedPolicyTagFormProperties {

		/** Description of the serialized policy tag. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name of the policy tag. Max 200 bytes when encoded in UTF-8. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of the policy tag. This field will be ignored when calling ImportTaxonomies. */
		policyTag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1SerializedPolicyTagFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SerializedPolicyTagFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			policyTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDatacatalogV1beta1FieldType {
		enumType?: GoogleCloudDatacatalogV1beta1FieldTypeEnumType;

		/** Represents primitive types - string, bool etc. */
		primitiveType?: GoogleCloudDatacatalogV1beta1FieldTypePrimitiveType | null;
	}
	export interface GoogleCloudDatacatalogV1beta1FieldTypeFormProperties {

		/** Represents primitive types - string, bool etc. */
		primitiveType: FormControl<GoogleCloudDatacatalogV1beta1FieldTypePrimitiveType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1FieldTypeFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1FieldTypeFormProperties>({
			primitiveType: new FormControl<GoogleCloudDatacatalogV1beta1FieldTypePrimitiveType | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDatacatalogV1beta1FieldTypeEnumType {
		allowedValues?: Array<GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue>;
	}
	export interface GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1beta1FieldTypeEnumTypeFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeFormProperties>({
		});

	}

	export interface GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue {

		/** Required. The display name of the enum value. Must not be an empty string. */
		displayName?: string | null;
	}
	export interface GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValueFormProperties {

		/** Required. The display name of the enum value. Must not be an empty string. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValueFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValueFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1beta1FieldTypePrimitiveType { PRIMITIVE_TYPE_UNSPECIFIED = 0, DOUBLE = 1, STRING = 2, BOOL = 3, TIMESTAMP = 4 }


	/** Request message for ImportTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest {

		/** Inline source used for taxonomies import. */
		inlineSource?: GoogleCloudDatacatalogV1beta1InlineSource;
	}

	/** Request message for ImportTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequestFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1beta1ImportTaxonomiesRequestFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequestFormProperties>({
		});

	}


	/** Inline source used for taxonomies import. */
	export interface GoogleCloudDatacatalogV1beta1InlineSource {

		/** Required. Taxonomies to be imported. */
		taxonomies?: Array<GoogleCloudDatacatalogV1beta1SerializedTaxonomy>;
	}

	/** Inline source used for taxonomies import. */
	export interface GoogleCloudDatacatalogV1beta1InlineSourceFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1beta1InlineSourceFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1InlineSourceFormProperties>({
		});

	}


	/** Response message for ImportTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse {

		/** Taxonomies that were imported. */
		taxonomies?: Array<GoogleCloudDatacatalogV1beta1Taxonomy>;
	}

	/** Response message for ImportTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponseFormProperties {
	}
	export function CreateGoogleCloudDatacatalogV1beta1ImportTaxonomiesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponseFormProperties>({
		});

	}


	/** A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data. */
	export interface GoogleCloudDatacatalogV1beta1Taxonomy {

		/** Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list. */
		activatedPolicyTypes?: Array<string>;

		/** Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. */
		description?: string | null;

		/** Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization. */
		displayName?: string | null;

		/** Identifier. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}". */
		name?: string | null;

		/** Output only. Number of policy tags contained in this taxonomy. */
		policyTagCount?: number | null;

		/** The source system of the Taxonomy. */
		service?: GoogleCloudDatacatalogV1beta1TaxonomyService;

		/** Timestamps about this resource according to a particular system. */
		taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
	}

	/** A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data. */
	export interface GoogleCloudDatacatalogV1beta1TaxonomyFormProperties {

		/** Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. */
		description: FormControl<string | null | undefined>,

		/** Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization. */
		displayName: FormControl<string | null | undefined>,

		/** Identifier. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}". */
		name: FormControl<string | null | undefined>,

		/** Output only. Number of policy tags contained in this taxonomy. */
		policyTagCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TaxonomyFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TaxonomyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyTagCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The source system of the Taxonomy. */
	export interface GoogleCloudDatacatalogV1beta1TaxonomyService {

		/** The service agent for the service. */
		identity?: string | null;

		/** The Google Cloud service name. */
		name?: GoogleCloudDatacatalogV1beta1TaxonomyServiceName | null;
	}

	/** The source system of the Taxonomy. */
	export interface GoogleCloudDatacatalogV1beta1TaxonomyServiceFormProperties {

		/** The service agent for the service. */
		identity: FormControl<string | null | undefined>,

		/** The Google Cloud service name. */
		name: FormControl<GoogleCloudDatacatalogV1beta1TaxonomyServiceName | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TaxonomyServiceFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TaxonomyServiceFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<GoogleCloudDatacatalogV1beta1TaxonomyServiceName | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1beta1TaxonomyServiceName { MANAGING_SYSTEM_UNSPECIFIED = 0, MANAGING_SYSTEM_DATAPLEX = 1, MANAGING_SYSTEM_OTHER = 2 }


	/** Response message for ListEntries. */
	export interface GoogleCloudDatacatalogV1beta1ListEntriesResponse {

		/** Entry details. */
		entries?: Array<GoogleCloudDatacatalogV1beta1Entry>;

		/** Token to retrieve the next page of results. It is set to empty if no items remain in results. */
		nextPageToken?: string | null;
	}

	/** Response message for ListEntries. */
	export interface GoogleCloudDatacatalogV1beta1ListEntriesResponseFormProperties {

		/** Token to retrieve the next page of results. It is set to empty if no items remain in results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1ListEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ListEntriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListEntryGroups. */
	export interface GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse {

		/** EntryGroup details. */
		entryGroups?: Array<GoogleCloudDatacatalogV1beta1EntryGroup>;

		/** Token to retrieve the next page of results. It is set to empty if no items remain in results. */
		nextPageToken?: string | null;
	}

	/** Response message for ListEntryGroups. */
	export interface GoogleCloudDatacatalogV1beta1ListEntryGroupsResponseFormProperties {

		/** Token to retrieve the next page of results. It is set to empty if no items remain in results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1ListEntryGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ListEntryGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListPolicyTags. */
	export interface GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse {

		/** Token used to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The policy tags that are in the requested taxonomy. */
		policyTags?: Array<GoogleCloudDatacatalogV1beta1PolicyTag>;
	}

	/** Response message for ListPolicyTags. */
	export interface GoogleCloudDatacatalogV1beta1ListPolicyTagsResponseFormProperties {

		/** Token used to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1ListPolicyTagsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ListPolicyTagsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode". */
	export interface GoogleCloudDatacatalogV1beta1PolicyTag {

		/** Output only. Resource names of child policy tags of this policy tag. */
		childPolicyTags?: Array<string>;

		/** Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description. */
		description?: string | null;

		/** Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. */
		displayName?: string | null;

		/** Identifier. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}". */
		name?: string | null;

		/** Resource name of this policy tag's parent policy tag (e.g. for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the "Geolocation" policy tag in the example above). If not set, defaults to an empty string. */
		parentPolicyTag?: string | null;
	}

	/** Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode". */
	export interface GoogleCloudDatacatalogV1beta1PolicyTagFormProperties {

		/** Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description. */
		description: FormControl<string | null | undefined>,

		/** Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. */
		displayName: FormControl<string | null | undefined>,

		/** Identifier. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}". */
		name: FormControl<string | null | undefined>,

		/** Resource name of this policy tag's parent policy tag (e.g. for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the "Geolocation" policy tag in the example above). If not set, defaults to an empty string. */
		parentPolicyTag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1PolicyTagFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1PolicyTagFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentPolicyTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListTags. */
	export interface GoogleCloudDatacatalogV1beta1ListTagsResponse {

		/** Token to retrieve the next page of results. It is set to empty if no items remain in results. */
		nextPageToken?: string | null;

		/** Tag details. */
		tags?: Array<GoogleCloudDatacatalogV1beta1Tag>;
	}

	/** Response message for ListTags. */
	export interface GoogleCloudDatacatalogV1beta1ListTagsResponseFormProperties {

		/** Token to retrieve the next page of results. It is set to empty if no items remain in results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1ListTagsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ListTagsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags. */
	export interface GoogleCloudDatacatalogV1beta1Tag {

		/** Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column` */
		column?: string | null;

		/** Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields. */
		fields?: {[id: string]: GoogleCloudDatacatalogV1beta1TagField };

		/** The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name. */
		name?: string | null;

		/** Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation. */
		template?: string | null;

		/** Output only. The display name of the tag template. */
		templateDisplayName?: string | null;
	}

	/** Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags. */
	export interface GoogleCloudDatacatalogV1beta1TagFormProperties {

		/** Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column` */
		column: FormControl<string | null | undefined>,

		/** Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields. */
		fields: FormControl<{[id: string]: GoogleCloudDatacatalogV1beta1TagField } | null | undefined>,

		/** The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name. */
		name: FormControl<string | null | undefined>,

		/** Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation. */
		template: FormControl<string | null | undefined>,

		/** Output only. The display name of the tag template. */
		templateDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TagFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TagFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			fields: new FormControl<{[id: string]: GoogleCloudDatacatalogV1beta1TagField } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			templateDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the value and supporting information for a field within a Tag. */
	export interface GoogleCloudDatacatalogV1beta1TagField {

		/** Holds the value for a tag field with boolean type. */
		boolValue?: boolean | null;

		/** Output only. The display name of this field. */
		displayName?: string | null;

		/** Holds the value for a tag field with double type. */
		doubleValue?: number | null;

		/** Holds an enum value. */
		enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue;

		/** Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential. */
		order?: number | null;

		/** Holds the value for a tag field with string type. */
		stringValue?: string | null;

		/** Holds the value for a tag field with timestamp type. */
		timestampValue?: string | null;
	}

	/** Contains the value and supporting information for a field within a Tag. */
	export interface GoogleCloudDatacatalogV1beta1TagFieldFormProperties {

		/** Holds the value for a tag field with boolean type. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Output only. The display name of this field. */
		displayName: FormControl<string | null | undefined>,

		/** Holds the value for a tag field with double type. */
		doubleValue: FormControl<number | null | undefined>,

		/** Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential. */
		order: FormControl<number | null | undefined>,

		/** Holds the value for a tag field with string type. */
		stringValue: FormControl<string | null | undefined>,

		/** Holds the value for a tag field with timestamp type. */
		timestampValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TagFieldFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TagFieldFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds an enum value. */
	export interface GoogleCloudDatacatalogV1beta1TagFieldEnumValue {

		/** The display name of the enum value. */
		displayName?: string | null;
	}

	/** Holds an enum value. */
	export interface GoogleCloudDatacatalogV1beta1TagFieldEnumValueFormProperties {

		/** The display name of the enum value. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TagFieldEnumValueFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TagFieldEnumValueFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse {

		/** Token used to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Taxonomies that the project contains. */
		taxonomies?: Array<GoogleCloudDatacatalogV1beta1Taxonomy>;
	}

	/** Response message for ListTaxonomies. */
	export interface GoogleCloudDatacatalogV1beta1ListTaxonomiesResponseFormProperties {

		/** Token used to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1ListTaxonomiesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1ListTaxonomiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for RenameTagTemplateFieldEnumValue. */
	export interface GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest {

		/** Required. The new display name of the enum value. For example, `my_new_enum_value`. */
		newEnumValueDisplayName?: string | null;
	}

	/** Request message for RenameTagTemplateFieldEnumValue. */
	export interface GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequestFormProperties {

		/** Required. The new display name of the enum value. For example, `my_new_enum_value`. */
		newEnumValueDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequestFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequestFormProperties>({
			newEnumValueDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for RenameTagTemplateField. */
	export interface GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest {

		/** Required. The new ID of this tag template field. For example, `my_new_field`. */
		newTagTemplateFieldId?: string | null;
	}

	/** Request message for RenameTagTemplateField. */
	export interface GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequestFormProperties {

		/** Required. The new ID of this tag template field. For example, `my_new_field`. */
		newTagTemplateFieldId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequestFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequestFormProperties>({
			newTagTemplateFieldId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for SearchCatalog. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogRequest {

		/** Specifies the ordering of results, currently supported case-sensitive choices are: * `relevance`, only supports descending * `last_modified_timestamp [asc|desc]`, defaults to descending if not specified * `default` that can only be descending If not specified, defaults to `relevance` descending. */
		orderBy?: string | null;

		/** Number of results in the search page. If <=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000. */
		pageSize?: number | null;

		/** Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned. */
		pageToken?: string | null;

		/** Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as "x" or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information. */
		query?: string | null;

		/** The criteria that select the subspace used for query matching. */
		scope?: GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
	}

	/** Request message for SearchCatalog. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogRequestFormProperties {

		/** Specifies the ordering of results, currently supported case-sensitive choices are: * `relevance`, only supports descending * `last_modified_timestamp [asc|desc]`, defaults to descending if not specified * `default` that can only be descending If not specified, defaults to `relevance` descending. */
		orderBy: FormControl<string | null | undefined>,

		/** Number of results in the search page. If <=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned. */
		pageToken: FormControl<string | null | undefined>,

		/** Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as "x" or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1SearchCatalogRequestFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SearchCatalogRequestFormProperties>({
			orderBy: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The criteria that select the subspace used for query matching. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope {

		/** If `true`, include Google Cloud public datasets in the search results. Info on Google Cloud public datasets is available at https://cloud.google.com/public-datasets/. By default, Google Cloud public datasets are excluded. */
		includeGcpPublicDatasets?: boolean | null;

		/** The list of organization IDs to search within. To find your organization ID, follow instructions in https://cloud.google.com/resource-manager/docs/creating-managing-organization. */
		includeOrgIds?: Array<string>;

		/** The list of project IDs to search within. To learn more about the distinction between project names/IDs/numbers, go to https://cloud.google.com/docs/overview/#projects. */
		includeProjectIds?: Array<string>;

		/** Optional. The list of locations to search within. 1. If empty, search will be performed in all locations; 2. If any of the locations are NOT in the valid locations list, error will be returned; 3. Otherwise, search only the given locations for matching results. Typical usage is to leave this field empty. When a location is unreachable as returned in the `SearchCatalogResponse.unreachable` field, users can repeat the search request with this parameter set to get additional information on the error. Valid locations: * asia-east1 * asia-east2 * asia-northeast1 * asia-northeast2 * asia-northeast3 * asia-south1 * asia-southeast1 * australia-southeast1 * eu * europe-north1 * europe-west1 * europe-west2 * europe-west3 * europe-west4 * europe-west6 * global * northamerica-northeast1 * southamerica-east1 * us * us-central1 * us-east1 * us-east4 * us-west1 * us-west2 */
		restrictedLocations?: Array<string>;
	}

	/** The criteria that select the subspace used for query matching. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogRequestScopeFormProperties {

		/** If `true`, include Google Cloud public datasets in the search results. Info on Google Cloud public datasets is available at https://cloud.google.com/public-datasets/. By default, Google Cloud public datasets are excluded. */
		includeGcpPublicDatasets: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1SearchCatalogRequestScopeFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SearchCatalogRequestScopeFormProperties>({
			includeGcpPublicDatasets: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for SearchCatalog. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogResponse {

		/** The token that can be used to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** Search results. */
		results?: Array<GoogleCloudDatacatalogV1beta1SearchCatalogResult>;

		/** The approximate total number of entries matched by the query. */
		totalSize?: number | null;

		/** Unreachable locations. Search result does not include data from those locations. Users can get additional information on the error by repeating the search request with a more restrictive parameter -- setting the value for `SearchDataCatalogRequest.scope.restricted_locations`. */
		unreachable?: Array<string>;
	}

	/** Response message for SearchCatalog. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogResponseFormProperties {

		/** The token that can be used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The approximate total number of entries matched by the query. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1SearchCatalogResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SearchCatalogResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A result that appears in the response of a search request. Each result captures details of one entry that matches the search. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogResult {

		/** The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example: * `//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId` */
		linkedResource?: string | null;

		/** Last-modified timestamp of the entry from the managing system. */
		modifyTime?: string | null;

		/** The relative resource name of the resource in URL format. Examples: * `projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}` * `projects/{project_id}/tagTemplates/{tag_template_id}` */
		relativeResourceName?: string | null;

		/** Sub-type of the search result. This is a dot-delimited description of the resource's full type, and is the same as the value callers would provide in the "type" search facet. Examples: `entry.table`, `entry.dataStream`, `tagTemplate`. */
		searchResultSubtype?: string | null;

		/** Type of the search result. This field can be used to determine which Get method to call to fetch the full resource. */
		searchResultType?: GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultType | null;
	}

	/** A result that appears in the response of a search request. Each result captures details of one entry that matches the search. */
	export interface GoogleCloudDatacatalogV1beta1SearchCatalogResultFormProperties {

		/** The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example: * `//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId` */
		linkedResource: FormControl<string | null | undefined>,

		/** Last-modified timestamp of the entry from the managing system. */
		modifyTime: FormControl<string | null | undefined>,

		/** The relative resource name of the resource in URL format. Examples: * `projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}` * `projects/{project_id}/tagTemplates/{tag_template_id}` */
		relativeResourceName: FormControl<string | null | undefined>,

		/** Sub-type of the search result. This is a dot-delimited description of the resource's full type, and is the same as the value callers would provide in the "type" search facet. Examples: `entry.table`, `entry.dataStream`, `tagTemplate`. */
		searchResultSubtype: FormControl<string | null | undefined>,

		/** Type of the search result. This field can be used to determine which Get method to call to fetch the full resource. */
		searchResultType: FormControl<GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1SearchCatalogResultFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1SearchCatalogResultFormProperties>({
			linkedResource: new FormControl<string | null | undefined>(undefined),
			modifyTime: new FormControl<string | null | undefined>(undefined),
			relativeResourceName: new FormControl<string | null | undefined>(undefined),
			searchResultSubtype: new FormControl<string | null | undefined>(undefined),
			searchResultType: new FormControl<GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultType { SEARCH_RESULT_TYPE_UNSPECIFIED = 0, ENTRY = 1, TAG_TEMPLATE = 2, ENTRY_GROUP = 3 }


	/** A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to Google Cloud resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources. */
	export interface GoogleCloudDatacatalogV1beta1TagTemplate {

		/** The display name for this template. Defaults to an empty string. */
		displayName?: string | null;

		/** Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore. */
		fields?: {[id: string]: GoogleCloudDatacatalogV1beta1TagTemplateField };

		/** The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name. */
		name?: string | null;
	}

	/** A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to Google Cloud resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources. */
	export interface GoogleCloudDatacatalogV1beta1TagTemplateFormProperties {

		/** The display name for this template. Defaults to an empty string. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore. */
		fields: FormControl<{[id: string]: GoogleCloudDatacatalogV1beta1TagTemplateField } | null | undefined>,

		/** The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TagTemplateFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TagTemplateFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			fields: new FormControl<{[id: string]: GoogleCloudDatacatalogV1beta1TagTemplateField } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The template for an individual field within a tag template. */
	export interface GoogleCloudDatacatalogV1beta1TagTemplateField {

		/** The description for this field. Defaults to an empty string. */
		description?: string | null;

		/** The display name for this field. Defaults to an empty string. */
		displayName?: string | null;

		/** Whether this is a required field. Defaults to false. */
		isRequired?: boolean | null;

		/** Output only. The resource name of the tag template field in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field} Note that this TagTemplateField may not actually be stored in the location in this name. */
		name?: string | null;

		/** The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential. */
		order?: number | null;
		type?: GoogleCloudDatacatalogV1beta1FieldType;
	}

	/** The template for an individual field within a tag template. */
	export interface GoogleCloudDatacatalogV1beta1TagTemplateFieldFormProperties {

		/** The description for this field. Defaults to an empty string. */
		description: FormControl<string | null | undefined>,

		/** The display name for this field. Defaults to an empty string. */
		displayName: FormControl<string | null | undefined>,

		/** Whether this is a required field. Defaults to false. */
		isRequired: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the tag template field in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field} Note that this TagTemplateField may not actually be stored in the location in this name. */
		name: FormControl<string | null | undefined>,

		/** The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential. */
		order: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogV1beta1TagTemplateFieldFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogV1beta1TagTemplateFieldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

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
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
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
		 * Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.
		 * Post v1beta1/catalog:search
		 * @return {GoogleCloudDatacatalogV1beta1SearchCatalogResponse} Successful response
		 */
		Datacatalog_catalog_search(requestBody: GoogleCloudDatacatalogV1beta1SearchCatalogRequest): Observable<GoogleCloudDatacatalogV1beta1SearchCatalogResponse> {
			return this.http.post<GoogleCloudDatacatalogV1beta1SearchCatalogResponse>(this.baseUri + 'v1beta1/catalog:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.
		 * Get v1beta1/entries:lookup
		 * @param {string} linkedResource The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive. Examples: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId * //pubsub.googleapis.com/projects/projectId/topics/topicId
		 * @param {string} sqlResource The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.project_id.topic_id` * ``pubsub.project_id.`topic.id.with.dots` `` * `bigquery.table.project_id.dataset_id.table_id` * `bigquery.dataset.project_id.dataset_id` * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id` `*_id`s should satisfy the standard SQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.
		 * @return {GoogleCloudDatacatalogV1beta1Entry} Successful response
		 */
		Datacatalog_entries_lookup(linkedResource: string | null | undefined, sqlResource: string | null | undefined): Observable<GoogleCloudDatacatalogV1beta1Entry> {
			return this.http.get<GoogleCloudDatacatalogV1beta1Entry>(this.baseUri + 'v1beta1/entries:lookup?linkedResource=' + (linkedResource == null ? '' : encodeURIComponent(linkedResource)) + '&sqlResource=' + (sqlResource == null ? '' : encodeURIComponent(sqlResource)), {});
		}

		/**
		 * Deletes a policy tag. Also deletes all of its descendant policy tags.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted.
		 * @param {boolean} force Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.
		 * @return {Empty} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets a policy tag.
		 * Get v1beta1/{name}
		 * @param {string} name Required. Resource name of the requested policy tag.
		 * @param {string} readMask The fields to return. If not set or empty, all fields are returned.
		 * @return {GoogleCloudDatacatalogV1beta1PolicyTag} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_get(name: string, readMask: string | null | undefined): Observable<GoogleCloudDatacatalogV1beta1PolicyTag> {
			return this.http.get<GoogleCloudDatacatalogV1beta1PolicyTag>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Updates a policy tag.
		 * Patch v1beta1/{name}
		 * @param {string} name Identifier. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".
		 * @param {string} updateMask The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
		 * @return {GoogleCloudDatacatalogV1beta1PolicyTag} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudDatacatalogV1beta1PolicyTag): Observable<GoogleCloudDatacatalogV1beta1PolicyTag> {
			return this.http.patch<GoogleCloudDatacatalogV1beta1PolicyTag>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
		 * Post v1beta1/{name}:rename
		 * @param {string} name Required. The name of the enum field value. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}/enumValues/{enum_value_display_name}
		 * @return {GoogleCloudDatacatalogV1beta1TagTemplateField} Successful response
		 */
		Datacatalog_projects_locations_tagTemplates_fields_enumValues_rename(name: string, requestBody: GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest): Observable<GoogleCloudDatacatalogV1beta1TagTemplateField> {
			return this.http.post<GoogleCloudDatacatalogV1beta1TagTemplateField>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':rename', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists entries.
		 * Get v1beta1/{parent}/entries
		 * @param {string} parent Required. The name of the entry group that contains the entries, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}
		 * @param {number} pageSize The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
		 * @param {string} pageToken Token that specifies which page is requested. If empty, the first page is returned.
		 * @param {string} readMask The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field.
		 * @return {GoogleCloudDatacatalogV1beta1ListEntriesResponse} Successful response
		 */
		Datacatalog_projects_locations_entryGroups_entries_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleCloudDatacatalogV1beta1ListEntriesResponse> {
			return this.http.get<GoogleCloudDatacatalogV1beta1ListEntriesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
		 * Post v1beta1/{parent}/entries
		 * @param {string} parent Required. The name of the entry group this entry is in. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this Entry and its child resources may not actually be stored in the location in this name.
		 * @param {string} entryId Required. The id of the entry to create.
		 * @return {GoogleCloudDatacatalogV1beta1Entry} Successful response
		 */
		Datacatalog_projects_locations_entryGroups_entries_create(parent: string, entryId: string | null | undefined, requestBody: GoogleCloudDatacatalogV1beta1Entry): Observable<GoogleCloudDatacatalogV1beta1Entry> {
			return this.http.post<GoogleCloudDatacatalogV1beta1Entry>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entries&entryId=' + (entryId == null ? '' : encodeURIComponent(entryId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists entry groups.
		 * Get v1beta1/{parent}/entryGroups
		 * @param {string} parent Required. The name of the location that contains the entry groups, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}
		 * @param {number} pageSize Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
		 * @param {string} pageToken Optional. Token that specifies which page is requested. If empty, the first page is returned.
		 * @return {GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse} Successful response
		 */
		Datacatalog_projects_locations_entryGroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse> {
			return this.http.get<GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entryGroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
		 * Post v1beta1/{parent}/entryGroups
		 * @param {string} parent Required. The name of the project this entry group is in. Example: * projects/{project_id}/locations/{location} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
		 * @param {string} entryGroupId Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters.
		 * @return {GoogleCloudDatacatalogV1beta1EntryGroup} Successful response
		 */
		Datacatalog_projects_locations_entryGroups_create(parent: string, entryGroupId: string | null | undefined, requestBody: GoogleCloudDatacatalogV1beta1EntryGroup): Observable<GoogleCloudDatacatalogV1beta1EntryGroup> {
			return this.http.post<GoogleCloudDatacatalogV1beta1EntryGroup>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entryGroups&entryGroupId=' + (entryGroupId == null ? '' : encodeURIComponent(entryGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
		 * Post v1beta1/{parent}/fields
		 * @param {string} parent Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). Example: * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id}
		 * @param {string} tagTemplateFieldId Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.
		 * @return {GoogleCloudDatacatalogV1beta1TagTemplateField} Successful response
		 */
		Datacatalog_projects_locations_tagTemplates_fields_create(parent: string, tagTemplateFieldId: string | null | undefined, requestBody: GoogleCloudDatacatalogV1beta1TagTemplateField): Observable<GoogleCloudDatacatalogV1beta1TagTemplateField> {
			return this.http.post<GoogleCloudDatacatalogV1beta1TagTemplateField>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fields&tagTemplateFieldId=' + (tagTemplateFieldId == null ? '' : encodeURIComponent(tagTemplateFieldId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all policy tags in a taxonomy.
		 * Get v1beta1/{parent}/policyTags
		 * @param {string} parent Required. Resource name of the taxonomy to list the policy tags of.
		 * @param {number} pageSize The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string.
		 * @return {GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse> {
			return this.http.get<GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policyTags&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a policy tag in the specified taxonomy.
		 * Post v1beta1/{parent}/policyTags
		 * @param {string} parent Required. Resource name of the taxonomy that the policy tag will belong to.
		 * @return {GoogleCloudDatacatalogV1beta1PolicyTag} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_create(parent: string, requestBody: GoogleCloudDatacatalogV1beta1PolicyTag): Observable<GoogleCloudDatacatalogV1beta1PolicyTag> {
			return this.http.post<GoogleCloudDatacatalogV1beta1PolicyTag>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policyTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
		 * Post v1beta1/{parent}/tagTemplates
		 * @param {string} parent Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions. Example: * projects/{project_id}/locations/us-central1
		 * @param {string} tagTemplateId Required. The id of the tag template to create.
		 * @return {GoogleCloudDatacatalogV1beta1TagTemplate} Successful response
		 */
		Datacatalog_projects_locations_tagTemplates_create(parent: string, tagTemplateId: string | null | undefined, requestBody: GoogleCloudDatacatalogV1beta1TagTemplate): Observable<GoogleCloudDatacatalogV1beta1TagTemplate> {
			return this.http.post<GoogleCloudDatacatalogV1beta1TagTemplate>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tagTemplates&tagTemplateId=' + (tagTemplateId == null ? '' : encodeURIComponent(tagTemplateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists tags assigned to an Entry. The columns in the response are lowercased.
		 * Get v1beta1/{parent}/tags
		 * @param {string} parent Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
		 * @param {number} pageSize The maximum number of tags to return. Default is 10. Max limit is 1000.
		 * @param {string} pageToken Token that specifies which page is requested. If empty, the first page is returned.
		 * @return {GoogleCloudDatacatalogV1beta1ListTagsResponse} Successful response
		 */
		Datacatalog_projects_locations_entryGroups_tags_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatacatalogV1beta1ListTagsResponse> {
			return this.http.get<GoogleCloudDatacatalogV1beta1ListTagsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tags&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
		 * Post v1beta1/{parent}/tags
		 * @param {string} parent Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name.
		 * @return {GoogleCloudDatacatalogV1beta1Tag} Successful response
		 */
		Datacatalog_projects_locations_entryGroups_tags_create(parent: string, requestBody: GoogleCloudDatacatalogV1beta1Tag): Observable<GoogleCloudDatacatalogV1beta1Tag> {
			return this.http.post<GoogleCloudDatacatalogV1beta1Tag>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all taxonomies in a project in a particular location that the caller has permission to view.
		 * Get v1beta1/{parent}/taxonomies
		 * @param {string} parent Required. Resource name of the project to list the taxonomies of.
		 * @param {string} filter Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex.
		 * @param {number} pageSize The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string.
		 * @return {GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse> {
			return this.http.get<GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/taxonomies&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a taxonomy in the specified project.
		 * Post v1beta1/{parent}/taxonomies
		 * @param {string} parent Required. Resource name of the project that the taxonomy will belong to.
		 * @return {GoogleCloudDatacatalogV1beta1Taxonomy} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_create(parent: string, requestBody: GoogleCloudDatacatalogV1beta1Taxonomy): Observable<GoogleCloudDatacatalogV1beta1Taxonomy> {
			return this.http.post<GoogleCloudDatacatalogV1beta1Taxonomy>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/taxonomies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
		 * Get v1beta1/{parent}/taxonomies:export
		 * @param {string} parent Required. Resource name of the project that taxonomies to be exported will share.
		 * @param {boolean} serializedTaxonomies Export taxonomies as serialized taxonomies.
		 * @param {Array<string>} taxonomies Required. Resource names of the taxonomies to be exported.
		 * @return {GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_export(parent: string, serializedTaxonomies: boolean | null | undefined, taxonomies: Array<string> | null | undefined): Observable<GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse> {
			return this.http.get<GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/taxonomies:export&serializedTaxonomies=' + serializedTaxonomies + '&' + taxonomies?.map(z => `taxonomies=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
		 * Post v1beta1/{parent}/taxonomies:import
		 * @param {string} parent Required. Resource name of project that the imported taxonomies will belong to.
		 * @return {GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_import(parent: string, requestBody: GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest): Observable<GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse> {
			return this.http.post<GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/taxonomies:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAM policy for a taxonomy or a policy tag.
		 * Post v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the IAM policy for a taxonomy or a policy tag.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the permissions that a caller has on the specified taxonomy or policy tag.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Datacatalog_projects_locations_taxonomies_policyTags_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

