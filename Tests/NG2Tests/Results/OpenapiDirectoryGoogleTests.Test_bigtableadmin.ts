import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * A configuration object describing how Cloud Bigtable should treat traffic
	 * from a particular end user application.
	 */
	export interface AppProfile {

		/** Optional long form description of the use case for this AppProfile. */
		description?: string | null;

		/**
		 * Strongly validated etag for optimistic concurrency control. Preserve the
		 * value returned from `GetAppProfile` when calling `UpdateAppProfile` to
		 * fail the request if there has been a modification in the mean time. The
		 * `update_mask` of the request need not include `etag` for this protection
		 * to apply.
		 * See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and
		 * [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more
		 * details.
		 */
		etag?: string | null;

		/**
		 * Read/write requests are routed to the nearest cluster in the instance, and
		 * will fail over to the nearest cluster that is available in the event of
		 * transient errors or delays. Clusters in a region are considered
		 * equidistant. Choosing this option sacrifices read-your-writes consistency
		 * to improve availability.
		 */
		multiClusterRoutingUseAny?: MultiClusterRoutingUseAny | null;

		/**
		 * (`OutputOnly`)
		 * The unique name of the app profile. Values are of the form
		 * `projects/<project>/instances/<instance>/appProfiles/_a-zA-Z0-9*`.
		 */
		name?: string | null;

		/**
		 * Unconditionally routes all read/write requests to a specific cluster.
		 * This option preserves read-your-writes consistency but does not improve
		 * availability.
		 */
		singleClusterRouting?: SingleClusterRouting | null;
	}


	/**
	 * Read/write requests are routed to the nearest cluster in the instance, and
	 * will fail over to the nearest cluster that is available in the event of
	 * transient errors or delays. Clusters in a region are considered
	 * equidistant. Choosing this option sacrifices read-your-writes consistency
	 * to improve availability.
	 */
	export interface MultiClusterRoutingUseAny {
	}


	/**
	 * Unconditionally routes all read/write requests to a specific cluster.
	 * This option preserves read-your-writes consistency but does not improve
	 * availability.
	 */
	export interface SingleClusterRouting {

		/**
		 * Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are
		 * allowed by this app profile. It is unsafe to send these requests to
		 * the same table/row/column in multiple clusters.
		 */
		allowTransactionalWrites?: boolean | null;

		/** The cluster to which read/write requests should be routed. */
		clusterId?: string | null;
	}


	/**
	 * Specifies the audit configuration for a service.
	 * The configuration determines which permission types are logged, and what
	 * identities, if any, are exempted from logging.
	 * An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service,
	 * the union of the two AuditConfigs is used for that service: the log_types
	 * specified in each AuditConfig are enabled, and the exempted_members in each
	 * AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 *     {
	 *       "audit_configs": [
	 *         {
	 *           "service": "allServices"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *               "exempted_members": [
	 *                 "user:jose@example.com"
	 *               ]
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *             },
	 *             {
	 *               "log_type": "ADMIN_READ",
	 *             }
	 *           ]
	 *         },
	 *         {
	 *           "service": "sampleservice.googleapis.com"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *               "exempted_members": [
	 *                 "user:aliya@example.com"
	 *               ]
	 *             }
	 *           ]
	 *         }
	 *       ]
	 *     }
	 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
	 * logging. It also exempts jose@example.com from DATA_READ logging, and
	 * aliya@example.com from DATA_WRITE logging.
	 */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig> | null;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string | null;
	}


	/**
	 * Provides the configuration for logging a type of permissions.
	 * Example:
	 *     {
	 *       "audit_log_configs": [
	 *         {
	 *           "log_type": "DATA_READ",
	 *           "exempted_members": [
	 *             "user:jose@example.com"
	 *           ]
	 *         },
	 *         {
	 *           "log_type": "DATA_WRITE",
	 *         }
	 *       ]
	 *     }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
	 * jose@example.com from DATA_READ logging.
	 */
	export interface AuditLogConfig {

		/**
		 * Specifies the identities that do not cause logging for this type of
		 * permission.
		 * Follows the same format of Binding.members.
		 */
		exemptedMembers?: Array<string> | null;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr | null;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string> | null;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string | null;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string | null;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string | null;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string | null;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string | null;
	}


	/**
	 * Request message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
	 */
	export interface CheckConsistencyRequest {

		/** Required. The token created using GenerateConsistencyToken for the Table. */
		consistencyToken?: string | null;
	}


	/**
	 * Response message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
	 */
	export interface CheckConsistencyResponse {

		/**
		 * True only if the token is consistent. A token is consistent if replication
		 * has caught up with the restrictions specified in the request.
		 */
		consistent?: boolean | null;
	}


	/**
	 * A resizable group of nodes in a particular cloud location, capable
	 * of serving all Tables in the parent
	 * Instance.
	 */
	export interface Cluster {

		/**
		 * (`CreationOnly`)
		 * The type of storage used by this cluster to serve its
		 * parent instance's tables, unless explicitly overridden.
		 */
		defaultStorageType?: ClusterDefaultStorageType | null;

		/**
		 * (`CreationOnly`)
		 * The location where this cluster's nodes and storage reside. For best
		 * performance, clients should be located as close as possible to this
		 * cluster. Currently only zones are supported, so values should be of the
		 * form `projects/{project}/locations/{zone}`.
		 */
		location?: string | null;

		/**
		 * Required. (`OutputOnly`)
		 * The unique name of the cluster. Values are of the form
		 * `projects/{project}/instances/{instance}/clusters/a-z*`.
		 */
		name?: string | null;

		/**
		 * Required. The number of nodes allocated to this cluster. More nodes enable higher
		 * throughput and more consistent performance.
		 */
		serveNodes?: number | null;

		/**
		 * (`OutputOnly`)
		 * The current state of the cluster.
		 */
		state?: ClusterState | null;
	}

	export enum ClusterDefaultStorageType { STORAGE_TYPE_UNSPECIFIED = 0, SSD = 1, HDD = 2 }

	export enum ClusterState { STATE_NOT_KNOWN = 0, READY = 1, CREATING = 2, RESIZING = 3, DISABLED = 4 }


	/** A set of columns within a table which share a common configuration. */
	export interface ColumnFamily {

		/** Rule for determining which cells to delete during garbage collection. */
		gcRule?: GcRule | null;
	}


	/** Rule for determining which cells to delete during garbage collection. */
	export interface GcRule {

		/** A GcRule which deletes cells matching all of the given rules. */
		intersection?: Intersection | null;

		/**
		 * Delete cells in a column older than the given age.
		 * Values must be at least one millisecond, and will be truncated to
		 * microsecond granularity.
		 */
		maxAge?: string | null;

		/** Delete all cells in a column except the most recent N. */
		maxNumVersions?: number | null;

		/** A GcRule which deletes cells matching any of the given rules. */
		union?: Union | null;
	}


	/** A GcRule which deletes cells matching all of the given rules. */
	export interface Intersection {

		/** Only delete cells which would be deleted by every element of `rules`. */
		rules?: Array<GcRule> | null;
	}


	/** A GcRule which deletes cells matching any of the given rules. */
	export interface Union {

		/** Delete cells which would be deleted by any element of `rules`. */
		rules?: Array<GcRule> | null;
	}


	/** The metadata for the Operation returned by CreateCluster. */
	export interface CreateClusterMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** Request message for BigtableInstanceAdmin.CreateCluster. */
		originalRequest?: CreateClusterRequest | null;

		/** The time at which the original request was received. */
		requestTime?: string | null;

		/**
		 * Keys: the full `name` of each table that existed in the instance when
		 * CreateCluster was first called, i.e.
		 * `projects/<project>/instances/<instance>/tables/<table>`. Any table added
		 * to the instance by a later API call will be created in the new cluster by
		 * that API call, not this one.
		 * Values: information on how much of a table's data has been copied to the
		 * newly-created cluster so far.
		 */
		tables?: {[id: string]: TableProgress } | null;
	}


	/** Request message for BigtableInstanceAdmin.CreateCluster. */
	export interface CreateClusterRequest {

		/**
		 * A resizable group of nodes in a particular cloud location, capable
		 * of serving all Tables in the parent
		 * Instance.
		 */
		cluster?: Cluster | null;

		/**
		 * Required. The ID to be used when referring to the new cluster within its instance,
		 * e.g., just `mycluster` rather than
		 * `projects/myproject/instances/myinstance/clusters/mycluster`.
		 */
		clusterId?: string | null;

		/**
		 * Required. The unique name of the instance in which to create the new cluster.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}`.
		 */
		parent?: string | null;
	}


	/** Progress info for copying a table's data to the new cluster. */
	export interface TableProgress {

		/**
		 * Estimate of the number of bytes copied so far for this table.
		 * This will eventually reach 'estimated_size_bytes' unless the table copy
		 * is CANCELLED.
		 */
		estimatedCopiedBytes?: string | null;

		/** Estimate of the size of the table to be copied. */
		estimatedSizeBytes?: string | null;
		state?: TableProgressState | null;
	}

	export enum TableProgressState { STATE_UNSPECIFIED = 0, PENDING = 1, COPYING = 2, COMPLETED = 3, CANCELLED = 4 }


	/** The metadata for the Operation returned by CreateInstance. */
	export interface CreateInstanceMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** Request message for BigtableInstanceAdmin.CreateInstance. */
		originalRequest?: CreateInstanceRequest | null;

		/** The time at which the original request was received. */
		requestTime?: string | null;
	}


	/** Request message for BigtableInstanceAdmin.CreateInstance. */
	export interface CreateInstanceRequest {

		/**
		 * Required. The clusters to be created within the instance, mapped by desired
		 * cluster ID, e.g., just `mycluster` rather than
		 * `projects/myproject/instances/myinstance/clusters/mycluster`.
		 * Fields marked `OutputOnly` must be left blank.
		 * Currently, at most four clusters can be specified.
		 */
		clusters?: {[id: string]: Cluster } | null;

		/**
		 * A collection of Bigtable Tables and
		 * the resources that serve them.
		 * All tables in an instance are served from all
		 * Clusters in the instance.
		 */
		instance?: Instance | null;

		/**
		 * Required. The ID to be used when referring to the new instance within its project,
		 * e.g., just `myinstance` rather than
		 * `projects/myproject/instances/myinstance`.
		 */
		instanceId?: string | null;

		/**
		 * Required. The unique name of the project in which to create the new instance.
		 * Values are of the form `projects/{project}`.
		 */
		parent?: string | null;
	}


	/**
	 * A collection of Bigtable Tables and
	 * the resources that serve them.
	 * All tables in an instance are served from all
	 * Clusters in the instance.
	 */
	export interface Instance {

		/**
		 * Required. The descriptive name for this instance as it appears in UIs.
		 * Can be changed at any time, but should be kept globally unique
		 * to avoid confusion.
		 */
		displayName?: string | null;

		/**
		 * Required. Labels are a flexible and lightweight mechanism for organizing cloud
		 * resources into groups that reflect a customer's organizational needs and
		 * deployment strategies. They can be used to filter resources and aggregate
		 * metrics.
		 * * Label keys must be between 1 and 63 characters long and must conform to
		 * the regular expression: `\p{Ll}\p{Lo}{0,62}`.
		 * * Label values must be between 0 and 63 characters long and must conform to
		 * the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`.
		 * * No more than 64 labels can be associated with a given resource.
		 * * Keys and values must both be under 128 bytes.
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * Required. (`OutputOnly`)
		 * The unique name of the instance. Values are of the form
		 * `projects/{project}/instances/a-z+[a-z0-9]`.
		 */
		name?: string | null;

		/**
		 * (`OutputOnly`)
		 * The current state of the instance.
		 */
		state?: InstanceState | null;

		/** Required. The type of the instance. Defaults to `PRODUCTION`. */
		type?: InstanceType | null;
	}

	export enum InstanceState { STATE_NOT_KNOWN = 0, READY = 1, CREATING = 2 }

	export enum InstanceType { TYPE_UNSPECIFIED = 0, PRODUCTION = 1, DEVELOPMENT = 2 }


	/**
	 * Request message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.CreateTable
	 */
	export interface CreateTableRequest {

		/**
		 * The optional list of row keys that will be used to initially split the
		 * table into several tablets (tablets are similar to HBase regions).
		 * Given two split keys, `s1` and `s2`, three tablets will be created,
		 * spanning the key ranges: `[, s1), [s1, s2), [s2, )`.
		 * Example:
		 * * Row keys := `["a", "apple", "custom", "customer_1", "customer_2",`
		 * `"other", "zz"]`
		 * * initial_split_keys := `["apple", "customer_1", "customer_2", "other"]`
		 * * Key assignment:
		 * - Tablet 1 `[, apple)                => {"a"}.`
		 * - Tablet 2 `[apple, customer_1)      => {"apple", "custom"}.`
		 * - Tablet 3 `[customer_1, customer_2) => {"customer_1"}.`
		 * - Tablet 4 `[customer_2, other)      => {"customer_2"}.`
		 * - Tablet 5 `[other, )                => {"other", "zz"}.`
		 */
		initialSplits?: Array<Split> | null;

		/**
		 * A collection of user data indexed by row, column, and timestamp.
		 * Each table is served using the resources of its parent cluster.
		 */
		table?: Table | null;

		/**
		 * Required. The name by which the new table should be referred to within the parent
		 * instance, e.g., `foobar` rather than `{parent}/tables/foobar`.
		 * Maximum 50 characters.
		 */
		tableId?: string | null;
	}


	/** An initial split point for a newly created table. */
	export interface Split {

		/** Row key to use as an initial tablet boundary. */
		key?: string | null;
	}


	/**
	 * A collection of user data indexed by row, column, and timestamp.
	 * Each table is served using the resources of its parent cluster.
	 */
	export interface Table {

		/**
		 * Output only. Map from cluster ID to per-cluster table state.
		 * If it could not be determined whether or not the table has data in a
		 * particular cluster (for example, if its zone is unavailable), then
		 * there will be an entry for the cluster with UNKNOWN `replication_status`.
		 * Views: `REPLICATION_VIEW`, `FULL`
		 */
		clusterStates?: {[id: string]: ClusterState } | null;

		/**
		 * (`CreationOnly`)
		 * The column families configured for this table, mapped by column family ID.
		 * Views: `SCHEMA_VIEW`, `FULL`
		 */
		columnFamilies?: {[id: string]: ColumnFamily } | null;

		/**
		 * (`CreationOnly`)
		 * The granularity (i.e. `MILLIS`) at which timestamps are stored in
		 * this table. Timestamps not matching the granularity will be rejected.
		 * If unspecified at creation time, the value will be set to `MILLIS`.
		 * Views: `SCHEMA_VIEW`, `FULL`.
		 */
		granularity?: TableGranularity | null;

		/**
		 * Output only. The unique name of the table. Values are of the form
		 * `projects/<project>/instances/<instance>/tables/_a-zA-Z0-9*`.
		 * Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `FULL`
		 */
		name?: string | null;
	}

	export enum TableGranularity { TIMESTAMP_GRANULARITY_UNSPECIFIED = 0, MILLIS = 1 }


	/**
	 * Request message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
	 */
	export interface DropRowRangeRequest {

		/** Delete all rows in the table. Setting this to false is a no-op. */
		deleteAllDataFromTable?: boolean | null;

		/**
		 * Delete all rows that start with this row key prefix. Prefix cannot be
		 * zero length.
		 */
		rowKeyPrefix?: string | null;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/**
	 * Request message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken
	 */
	export interface GenerateConsistencyTokenRequest {
	}


	/**
	 * Response message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken
	 */
	export interface GenerateConsistencyTokenResponse {

		/** The generated consistency token. */
		consistencyToken?: string | null;
	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions | null;
	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 */
		requestedPolicyVersion?: number | null;
	}


	/** Response message for BigtableInstanceAdmin.ListAppProfiles. */
	export interface ListAppProfilesResponse {

		/** The list of requested app profiles. */
		appProfiles?: Array<AppProfile> | null;

		/**
		 * Locations from which AppProfile information could not be retrieved,
		 * due to an outage or some other transient condition.
		 * AppProfiles from these locations may be missing from `app_profiles`.
		 * Values are of the form `projects/<project>/locations/<zone_id>`
		 */
		failedLocations?: Array<string> | null;

		/**
		 * Set if not all app profiles could be returned in a single response.
		 * Pass this value to `page_token` in another request to get the next
		 * page of results.
		 */
		nextPageToken?: string | null;
	}


	/** Response message for BigtableInstanceAdmin.ListClusters. */
	export interface ListClustersResponse {

		/** The list of requested clusters. */
		clusters?: Array<Cluster> | null;

		/**
		 * Locations from which Cluster information could not be retrieved,
		 * due to an outage or some other transient condition.
		 * Clusters from these locations may be missing from `clusters`,
		 * or may only have partial information returned.
		 * Values are of the form `projects/<project>/locations/<zone_id>`
		 */
		failedLocations?: Array<string> | null;

		/** DEPRECATED: This field is unused and ignored. */
		nextPageToken?: string | null;
	}


	/** Response message for BigtableInstanceAdmin.ListInstances. */
	export interface ListInstancesResponse {

		/**
		 * Locations from which Instance information could not be retrieved,
		 * due to an outage or some other transient condition.
		 * Instances whose Clusters are all in one of the failed locations
		 * may be missing from `instances`, and Instances with at least one
		 * Cluster in a failed location may only have partial information returned.
		 * Values are of the form `projects/<project>/locations/<zone_id>`
		 */
		failedLocations?: Array<string> | null;

		/** The list of requested instances. */
		instances?: Array<Instance> | null;

		/** DEPRECATED: This field is unused and ignored. */
		nextPageToken?: string | null;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location> | null;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string | null;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string } | null;

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string | null;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation> | null;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status | null;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any } | null;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/**
	 * Response message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.ListTables
	 */
	export interface ListTablesResponse {

		/**
		 * Set if not all tables could be returned in a single response.
		 * Pass this value to `page_token` in another request to get the next
		 * page of results.
		 */
		nextPageToken?: string | null;

		/** The tables present in the requested instance. */
		tables?: Array<Table> | null;
	}


	/** A create, update, or delete of a particular column family. */
	export interface Modification {

		/** A set of columns within a table which share a common configuration. */
		create?: ColumnFamily | null;

		/**
		 * Drop (delete) the column family with the given ID, or fail if no such
		 * family exists.
		 */
		drop?: boolean | null;

		/** The ID of the column family to be modified. */
		id?: string | null;

		/** A set of columns within a table which share a common configuration. */
		update?: ColumnFamily | null;
	}


	/**
	 * Request message for
	 * google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
	 */
	export interface ModifyColumnFamiliesRequest {

		/**
		 * Required. Modifications to be atomically applied to the specified table's families.
		 * Entries are applied in order, meaning that earlier modifications can be
		 * masked by later ones (in the case of repeated updates to the same family,
		 * for example).
		 */
		modifications?: Array<Modification> | null;
	}


	/** Request message for BigtableInstanceAdmin.PartialUpdateInstance. */
	export interface PartialUpdateInstanceRequest {

		/**
		 * A collection of Bigtable Tables and
		 * the resources that serve them.
		 * All tables in an instance are served from all
		 * Clusters in the instance.
		 */
		instance?: Instance | null;

		/**
		 * Required. The subset of Instance fields which should be replaced.
		 * Must be explicitly set.
		 */
		updateMask?: string | null;
	}


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig> | null;

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding> | null;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string | null;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number | null;
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy | null;

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask?: string | null;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string> | null;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string> | null;
	}


	/** The metadata for the Operation returned by UpdateAppProfile. */
	export interface UpdateAppProfileMetadata {
	}


	/** The metadata for the Operation returned by UpdateCluster. */
	export interface UpdateClusterMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/**
		 * A resizable group of nodes in a particular cloud location, capable
		 * of serving all Tables in the parent
		 * Instance.
		 */
		originalRequest?: Cluster | null;

		/** The time at which the original request was received. */
		requestTime?: string | null;
	}


	/** The metadata for the Operation returned by UpdateInstance. */
	export interface UpdateInstanceMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** Request message for BigtableInstanceAdmin.PartialUpdateInstance. */
		originalRequest?: PartialUpdateInstanceRequest | null;

		/** The time at which the original request was received. */
		requestTime?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Permanently deletes a specified table and all of its data.
		 * Delete v2/{name}
		 * @param {string} name Required. The unique name of the table to be deleted.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}/tables/{table}`.
		 * @param {boolean} ignoreWarnings Required. If true, ignore safety checks when deleting the app profile.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_delete(name: string, ignoreWarnings: boolean): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&ignoreWarnings=' + ignoreWarnings, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets metadata information about the specified table.
		 * Get v2/{name}
		 * @param {string} name Required. The unique name of the requested table.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}/tables/{table}`.
		 * @param {Bigtableadmin_projects_instances_tables_getView} view The view to be applied to the returned table's fields.
		 * Defaults to `SCHEMA_VIEW` if unspecified.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_get(name: string, view: Bigtableadmin_projects_instances_tables_getView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an app profile within an instance.
		 * Patch v2/{name}
		 * @param {string} name (`OutputOnly`)
		 * The unique name of the app profile. Values are of the form
		 * `projects/<project>/instances/<instance>/appProfiles/_a-zA-Z0-9*`.
		 * @param {boolean} ignoreWarnings If true, ignore safety checks when updating the app profile.
		 * @param {string} updateMask Required. The subset of app profile fields which should be replaced.
		 * If unset, all fields will be replaced.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_appProfiles_patch(name: string, ignoreWarnings: boolean, updateMask: string, requestBody: AppProfile): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&ignoreWarnings=' + ignoreWarnings + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a cluster within an instance.
		 * Put v2/{name}
		 * @param {string} name Required. (`OutputOnly`)
		 * The unique name of the cluster. Values are of the form
		 * `projects/{project}/instances/{instance}/clusters/a-z*`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_update(name: string, requestBody: Cluster): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_locations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v2/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Bigtableadmin_operations_projects_operations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v2/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Bigtableadmin_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks replication consistency based on a consistency token, that is, if
		 * replication has caught up based on the conditions specified in the token
		 * and the check request.
		 * Post v2/{name}:checkConsistency
		 * @param {string} name Required. The unique name of the Table for which to check replication consistency.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_checkConsistency(name: string, requestBody: CheckConsistencyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':checkConsistency', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently drop/delete a row range from a specified table. The request can
		 * specify whether to delete all rows in a table, or only those that match a
		 * particular prefix.
		 * Post v2/{name}:dropRowRange
		 * @param {string} name Required. The unique name of the table on which to drop a range of rows.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_dropRowRange(name: string, requestBody: DropRowRangeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':dropRowRange', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a consistency token for a Table, which can be used in
		 * CheckConsistency to check whether mutations to the table that finished
		 * before this call started have been replicated. The tokens will be available
		 * for 90 days.
		 * Post v2/{name}:generateConsistencyToken
		 * @param {string} name Required. The unique name of the Table for which to create a consistency token.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_generateConsistencyToken(name: string, requestBody: GenerateConsistencyTokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':generateConsistencyToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs a series of column family modifications on the specified table.
		 * Either all or none of the modifications will occur before this method
		 * returns, but data requests received prior to that point may see a table
		 * where only some modifications have taken effect.
		 * Post v2/{name}:modifyColumnFamilies
		 * @param {string} name Required. The unique name of the table whose families should be modified.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_modifyColumnFamilies(name: string, requestBody: ModifyColumnFamiliesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':modifyColumnFamilies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about app profiles in an instance.
		 * Get v2/{parent}/appProfiles
		 * @param {string} parent Required. The unique name of the instance for which a list of app profiles is
		 * requested. Values are of the form
		 * `projects/{project}/instances/{instance}`.
		 * Use `{instance} = '-'` to list AppProfiles for all Instances in a project,
		 * e.g., `projects/myproject/instances/-`.
		 * @param {number} pageSize Maximum number of results per page.
		 * A page_size of zero lets the server choose the number of items to return.
		 * A page_size which is strictly positive will return at most that many items.
		 * A negative page_size will cause an error.
		 * Following the first request, subsequent paginated calls are not required
		 * to pass a page_size. If a page_size is set in subsequent calls, it must
		 * match the page_size given in the first request.
		 * @param {string} pageToken The value of `next_page_token` returned by a previous call.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_appProfiles_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appProfiles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an app profile within an instance.
		 * Post v2/{parent}/appProfiles
		 * @param {string} parent Required. The unique name of the instance in which to create the new app profile.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}`.
		 * @param {string} appProfileId Required. The ID to be used when referring to the new app profile within its
		 * instance, e.g., just `myprofile` rather than
		 * `projects/myproject/instances/myinstance/appProfiles/myprofile`.
		 * @param {boolean} ignoreWarnings If true, ignore safety checks when creating the app profile.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_appProfiles_create(parent: string, appProfileId: string, ignoreWarnings: boolean, requestBody: AppProfile): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appProfiles&appProfileId=' + (appProfileId == null ? '' : encodeURIComponent(appProfileId)) + '&ignoreWarnings=' + ignoreWarnings, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about clusters in an instance.
		 * Get v2/{parent}/clusters
		 * @param {string} parent Required. The unique name of the instance for which a list of clusters is requested.
		 * Values are of the form `projects/{project}/instances/{instance}`.
		 * Use `{instance} = '-'` to list Clusters for all Instances in a project,
		 * e.g., `projects/myproject/instances/-`.
		 * @param {string} pageToken DEPRECATED: This field is unused and ignored.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_list(parent: string, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a cluster within an instance.
		 * Post v2/{parent}/clusters
		 * @param {string} parent Required. The unique name of the instance in which to create the new cluster.
		 * Values are of the form
		 * `projects/{project}/instances/{instance}`.
		 * @param {string} clusterId Required. The ID to be used when referring to the new cluster within its instance,
		 * e.g., just `mycluster` rather than
		 * `projects/myproject/instances/myinstance/clusters/mycluster`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_create(parent: string, clusterId: string, requestBody: Cluster): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about instances in a project.
		 * Get v2/{parent}/instances
		 * @param {string} parent Required. The unique name of the project for which a list of instances is requested.
		 * Values are of the form `projects/{project}`.
		 * @param {string} pageToken DEPRECATED: This field is unused and ignored.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_list(parent: string, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an instance within a project.
		 * Post v2/{parent}/instances
		 * @param {string} parent Required. The unique name of the project in which to create the new instance.
		 * Values are of the form `projects/{project}`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_create(parent: string, requestBody: CreateInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all tables served from a specified instance.
		 * Get v2/{parent}/tables
		 * @param {string} parent Required. The unique name of the instance for which tables should be listed.
		 * Values are of the form `projects/{project}/instances/{instance}`.
		 * @param {number} pageSize Maximum number of results per page.
		 * A page_size of zero lets the server choose the number of items to return.
		 * A page_size which is strictly positive will return at most that many items.
		 * A negative page_size will cause an error.
		 * Following the first request, subsequent paginated calls are not required
		 * to pass a page_size. If a page_size is set in subsequent calls, it must
		 * match the page_size given in the first request.
		 * @param {string} pageToken The value of `next_page_token` returned by a previous call.
		 * @param {Bigtableadmin_projects_instances_tables_getView} view The view to be applied to the returned tables' fields.
		 * Only NAME_ONLY view (default) and REPLICATION_VIEW are supported.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_list(parent: string, pageSize: number, pageToken: string, view: Bigtableadmin_projects_instances_tables_getView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tables&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new table in the specified instance.
		 * The table can be created with a full set of initial column families,
		 * specified in the request.
		 * Post v2/{parent}/tables
		 * @param {string} parent Required. The unique name of the instance in which to create the table.
		 * Values are of the form `projects/{project}/instances/{instance}`.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_create(parent: string, requestBody: CreateTableRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a Table or Backup resource.
		 * Returns an empty policy if the resource exists but does not have a policy
		 * set.
		 * Post v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on a Table or Backup resource.
		 * Replaces any existing policy.
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that the caller has on the specified table resource.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Bigtableadmin_projects_instances_tables_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Bigtableadmin_projects_instances_tables_getView { VIEW_UNSPECIFIED = 0, NAME_ONLY = 1, SCHEMA_VIEW = 2, REPLICATION_VIEW = 3, FULL = 4 }

}

