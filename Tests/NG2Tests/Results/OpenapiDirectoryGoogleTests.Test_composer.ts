import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

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


	/** An environment for running orchestration tasks. */
	export interface Environment {

		/** Configuration information for an environment. */
		config?: EnvironmentConfig;

		/** Output only. The time at which this environment was created. */
		createTime?: string;

		/**
		 * Optional. User-defined labels for this environment.
		 * The labels map can contain no more than 64 entries. Entries of the labels
		 * map are UTF8 strings that comply with the following restrictions:
		 * * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62}
		 * * Values must conform to regexp:  [\p{Ll}\p{Lo}\p{N}_-]{0,63}
		 * * Both keys and values are additionally constrained to be <= 128 bytes in
		 * size.
		 */
		labels?: {[id: string]: string };

		/**
		 * The resource name of the environment, in the form:
		 * "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * EnvironmentId must start with a lowercase letter followed by up to 63
		 * lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
		 */
		name?: string;

		/** The current state of the environment. */
		state?: EnvironmentState;

		/** Output only. The time at which this environment was last modified. */
		updateTime?: string;

		/**
		 * Output only. The UUID (Universally Unique IDentifier) associated with this environment.
		 * This value is generated when the environment is created.
		 */
		uuid?: string;
	}


	/** Configuration information for an environment. */
	export interface EnvironmentConfig {

		/**
		 * Output only. The URI of the Apache Airflow Web UI hosted within this environment (see
		 * [Airflow web
		 * interface](/composer/docs/how-to/accessing/airflow-web-interface)).
		 */
		airflowUri?: string;

		/**
		 * Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud
		 * Storage objects reside in a flat namespace, a hierarchical file tree
		 * can be simulated using "/"-delimited object name prefixes. DAG objects for
		 * this environment reside in a simulated directory with the given prefix.
		 */
		dagGcsPrefix?: string;

		/** Output only. The Kubernetes Engine cluster used to run this environment. */
		gkeCluster?: string;

		/**
		 * The configuration information for the Kubernetes Engine nodes running
		 * the Apache Airflow software.
		 */
		nodeConfig?: NodeConfig;

		/**
		 * The number of nodes in the Kubernetes Engine cluster that will be
		 * used to run this environment.
		 */
		nodeCount?: number;

		/**
		 * The configuration information for configuring a Private IP Cloud Composer
		 * environment.
		 */
		privateEnvironmentConfig?: PrivateEnvironmentConfig;

		/** Specifies the selection and configuration of software inside the environment. */
		softwareConfig?: SoftwareConfig;
	}


	/**
	 * The configuration information for the Kubernetes Engine nodes running
	 * the Apache Airflow software.
	 */
	export interface NodeConfig {

		/**
		 * Optional. The disk size in GB used for node VMs. Minimum size is 20GB.
		 * If unspecified, defaults to 100GB. Cannot be updated.
		 */
		diskSizeGb?: number;

		/**
		 * Configuration for controlling how IPs are allocated in the
		 * GKE cluster running the Apache Airflow software.
		 */
		ipAllocationPolicy?: IPAllocationPolicy;

		/**
		 * Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which
		 * to deploy the VMs used to run the Apache Airflow software, specified as a
		 * [relative resource
		 * name](/apis/design/resource_names#relative_resource_name). For example:
		 * "projects/{projectId}/zones/{zoneId}".
		 * This `location` must belong to the enclosing environment's project and
		 * location. If both this field and `nodeConfig.machineType` are specified,
		 * `nodeConfig.machineType` must belong to this `location`; if both are
		 * unspecified, the service will pick a zone in the Compute Engine region
		 * corresponding to the Cloud Composer location, and propagate that choice to
		 * both fields. If only one field (`location` or `nodeConfig.machineType`) is
		 * specified, the location information from the specified field will be
		 * propagated to the unspecified field.
		 */
		location?: string;

		/**
		 * Optional. The Compute Engine
		 * [machine type](/compute/docs/machine-types) used for cluster instances,
		 * specified as a
		 * [relative resource
		 * name](/apis/design/resource_names#relative_resource_name). For example:
		 * "projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}".
		 * The `machineType` must belong to the enclosing environment's project and
		 * location. If both this field and `nodeConfig.location` are specified,
		 * this `machineType` must belong to the `nodeConfig.location`; if both are
		 * unspecified, the service will pick a zone in the Compute Engine region
		 * corresponding to the Cloud Composer location, and propagate that choice to
		 * both fields. If exactly one of this field and `nodeConfig.location` is
		 * specified, the location information from the specified field will be
		 * propagated to the unspecified field.
		 * The `machineTypeId` must not be a [shared-core machine
		 * type](/compute/docs/machine-types#sharedcore).
		 * If this field is unspecified, the `machineTypeId` defaults
		 * to "n1-standard-1".
		 */
		machineType?: string;

		/**
		 * Optional. The Compute Engine network to be used for machine
		 * communications, specified as a
		 * [relative resource
		 * name](/apis/design/resource_names#relative_resource_name). For example:
		 * "projects/{projectId}/global/networks/{networkId}".
		 * [Shared VPC](/vpc/docs/shared-vpc) is not currently supported. The
		 * network must belong to the environment's project. If unspecified, the
		 * "default" network ID in the environment's project is used.  If a
		 * [Custom Subnet Network](/vpc/docs/vpc#vpc_networks_and_subnets)
		 * is provided, `nodeConfig.subnetwork` must also be provided.
		 */
		network?: string;

		/**
		 * Optional. The set of Google API scopes to be made available on all
		 * node VMs. If `oauth_scopes` is empty, defaults to
		 * ["https://www.googleapis.com/auth/cloud-platform"]. Cannot be updated.
		 */
		oauthScopes?: Array<string>;

		/**
		 * Optional. The Google Cloud Platform Service Account to be used by the node
		 * VMs. If a service account is not specified, the "default" Compute Engine
		 * service account is used. Cannot be updated.
		 */
		serviceAccount?: string;

		/**
		 * Optional. The Compute Engine subnetwork to be used for machine
		 * communications, specified as a
		 * [relative resource
		 * name](/apis/design/resource_names#relative_resource_name). For example:
		 * "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}"
		 * If a subnetwork is provided, `nodeConfig.network` must also be provided,
		 * and the subnetwork must belong to the enclosing environment's project and
		 * location.
		 */
		subnetwork?: string;

		/**
		 * Optional. The list of instance tags applied to all node VMs. Tags are used
		 * to identify valid sources or targets for network firewalls. Each tag within
		 * the list must comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
		 * Cannot be updated.
		 */
		tags?: Array<string>;
	}


	/**
	 * Configuration for controlling how IPs are allocated in the
	 * GKE cluster running the Apache Airflow software.
	 */
	export interface IPAllocationPolicy {

		/**
		 * Optional. The IP address range used to allocate IP addresses to pods in
		 * the GKE cluster.
		 * This field is applicable only when `use_ip_aliases` is true.
		 * Set to blank to have GKE choose a range with the default size.
		 * Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific
		 * netmask.
		 * Set to a
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
		 * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
		 * to use.
		 */
		clusterIpv4CidrBlock?: string;

		/**
		 * Optional. The name of the GKE cluster's secondary range used to allocate
		 * IP addresses to pods.
		 * This field is applicable only when `use_ip_aliases` is true.
		 */
		clusterSecondaryRangeName?: string;

		/**
		 * Optional. The IP address range of the services IP addresses in this
		 * GKE cluster.
		 * This field is applicable only when `use_ip_aliases` is true.
		 * Set to blank to have GKE choose a range with the default size.
		 * Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific
		 * netmask.
		 * Set to a
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
		 * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
		 * to use.
		 */
		servicesIpv4CidrBlock?: string;

		/**
		 * Optional. The name of the services' secondary range used to allocate
		 * IP addresses to the GKE cluster.
		 * This field is applicable only when `use_ip_aliases` is true.
		 */
		servicesSecondaryRangeName?: string;

		/**
		 * Optional. Whether or not to enable Alias IPs in the GKE cluster.
		 * If `true`, a VPC-native cluster is created.
		 */
		useIpAliases?: boolean;
	}


	/**
	 * The configuration information for configuring a Private IP Cloud Composer
	 * environment.
	 */
	export interface PrivateEnvironmentConfig {

		/**
		 * Optional. The CIDR block from which IP range in tenant project will be reserved for
		 * Cloud SQL. Needs to be disjoint from `web_server_ipv4_cidr_block`.
		 */
		cloudSqlIpv4CidrBlock?: string;

		/**
		 * Optional. If `true`, a Private IP Cloud Composer environment is created.
		 * If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be
		 * set to true.
		 */
		enablePrivateEnvironment?: boolean;

		/**
		 * Configuration options for the private GKE cluster in a Cloud Composer
		 * environment.
		 */
		privateClusterConfig?: PrivateClusterConfig;

		/**
		 * Optional. The CIDR block from which IP range for web server will be reserved. Needs
		 * to be disjoint from `private_cluster_config.master_ipv4_cidr_block` and
		 * `cloud_sql_ipv4_cidr_block`.
		 */
		webServerIpv4CidrBlock?: string;

		/** Output only. The IP range reserved for the tenant project's App Engine VMs. */
		webServerIpv4ReservedRange?: string;
	}


	/**
	 * Configuration options for the private GKE cluster in a Cloud Composer
	 * environment.
	 */
	export interface PrivateClusterConfig {

		/**
		 * Optional. If `true`, access to the public endpoint of the GKE cluster is
		 * denied.
		 */
		enablePrivateEndpoint?: boolean;

		/**
		 * Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If
		 * left blank, the default value of '172.16.0.0/23' is used.
		 */
		masterIpv4CidrBlock?: string;

		/**
		 * Output only. The IP range in CIDR notation to use for the hosted master network. This
		 * range is used for assigning internal IP addresses to the GKE cluster
		 * master or set of masters and to the internal load balancer virtual IP.
		 * This range must not overlap with any other ranges in use
		 * within the cluster's network.
		 */
		masterIpv4ReservedRange?: string;
	}


	/** Specifies the selection and configuration of software inside the environment. */
	export interface SoftwareConfig {

		/**
		 * Optional. Apache Airflow configuration properties to override.
		 * Property keys contain the section and property names, separated by a
		 * hyphen, for example "core-dags_are_paused_at_creation". Section names must
		 * not contain hyphens ("-"), opening square brackets ("["),  or closing
		 * square brackets ("]"). The property name must not be empty and must not
		 * contain an equals sign ("=") or semicolon (";"). Section and property names
		 * must not contain a period ("."). Apache Airflow configuration property
		 * names must be written in
		 * [snake_case](https://en.wikipedia.org/wiki/Snake_case). Property values can
		 * contain any character, and can be written in any lower/upper case format.
		 * Certain Apache Airflow configuration property values are
		 * [blacklisted](/composer/docs/how-to/managing/setting-airflow-configurations#airflow_configuration_blacklists),
		 * and cannot be overridden.
		 */
		airflowConfigOverrides?: {[id: string]: string };

		/**
		 * Optional. Additional environment variables to provide to the Apache Airflow
		 * scheduler, worker, and webserver processes.
		 * Environment variable names must match the regular expression
		 * `a-zA-Z_*`. They cannot specify Apache Airflow
		 * software configuration overrides (they cannot match the regular expression
		 * `AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`), and they cannot match any of the
		 * following reserved names:
		 * * `AIRFLOW_HOME`
		 * * `C_FORCE_ROOT`
		 * * `CONTAINER_NAME`
		 * * `DAGS_FOLDER`
		 * * `GCP_PROJECT`
		 * * `GCS_BUCKET`
		 * * `GKE_CLUSTER_NAME`
		 * * `SQL_DATABASE`
		 * * `SQL_INSTANCE`
		 * * `SQL_PASSWORD`
		 * * `SQL_PROJECT`
		 * * `SQL_REGION`
		 * * `SQL_USER`
		 */
		envVariables?: {[id: string]: string };

		/**
		 * The version of the software running in the environment.
		 * This encapsulates both the version of Cloud Composer functionality and the
		 * version of Apache Airflow. It must match the regular expression
		 * `composer-([0-9]+\.[0-9]+\.[0-9]+|latest)-airflow-[0-9]+\.[0-9]+(\.[0-9]+.*)?`.
		 * When used as input, the server also checks if the provided version is
		 * supported and denies the request for an unsupported version.
		 * The Cloud Composer portion of the version is a
		 * [semantic version](https://semver.org) or `latest`. When the patch version
		 * is omitted, the current Cloud Composer patch version is selected.
		 * When `latest` is provided instead of an explicit version number,
		 * the server replaces `latest` with the current Cloud Composer version
		 * and stores that version number in the same field.
		 * The portion of the image version that follows <em>airflow-</em> is an
		 * official Apache Airflow repository
		 * [release name](https://github.com/apache/incubator-airflow/releases).
		 * See also [Version
		 * List](/composer/docs/concepts/versioning/composer-versions).
		 */
		imageVersion?: string;

		/**
		 * Optional. Custom Python Package Index (PyPI) packages to be installed in
		 * the environment.
		 * Keys refer to the lowercase package name such as "numpy"
		 * and values are the lowercase extras and version specifier such as
		 * "==1.12.0", "[devel,gcp_api]", or "[devel]>=1.8.2, <1.9.2". To specify a
		 * package without pinning it to a version specifier, use the empty string as
		 * the value.
		 */
		pypiPackages?: {[id: string]: string };

		/**
		 * Optional. The major version of Python used to run the Apache Airflow
		 * scheduler, worker, and webserver processes.
		 * Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be
		 * updated.
		 */
		pythonVersion?: string;
	}

	export enum EnvironmentState { STATE_UNSPECIFIED = 0, CREATING = 1, RUNNING = 2, UPDATING = 3, DELETING = 4, ERROR = 5 }


	/** ImageVersion information */
	export interface ImageVersion {

		/**
		 * The string identifier of the ImageVersion, in the form:
		 * "composer-x.y.z-airflow-a.b(.c)"
		 */
		imageVersionId?: string;

		/**
		 * Whether this is the default ImageVersion used by Composer during
		 * environment creation if no input ImageVersion is specified.
		 */
		isDefault?: boolean;

		/** supported python versions */
		supportedPythonVersions?: Array<string>;
	}


	/** The environments in a project and location. */
	export interface ListEnvironmentsResponse {

		/** The list of environments returned by a ListEnvironmentsRequest. */
		environments?: Array<Environment>;

		/** The page token used to query for the next page if one exists. */
		nextPageToken?: string;
	}


	/** The ImageVersions in a project and location. */
	export interface ListImageVersionsResponse {

		/** The list of supported ImageVersions in a location. */
		imageVersions?: Array<ImageVersion>;

		/** The page token used to query for the next page if one exists. */
		nextPageToken?: string;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
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
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

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
		response?: {[id: string]: any };
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
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/** Metadata describing an operation. */
	export interface OperationMetadata {

		/** Output only. The time the operation was submitted to the server. */
		createTime?: string;

		/**
		 * Output only. The time when the operation terminated, regardless of its success.
		 * This field is unset if the operation is still ongoing.
		 */
		endTime?: string;

		/** Output only. The type of operation being performed. */
		operationType?: OperationMetadataOperationType;

		/**
		 * Output only. The resource being operated on, as a [relative resource name](
		 * /apis/design/resource_names#relative_resource_name).
		 */
		resource?: string;

		/** Output only. The UUID of the resource being operated on. */
		resourceUuid?: string;

		/** Output only. The current operation state. */
		state?: OperationMetadataState;
	}

	export enum OperationMetadataOperationType { TYPE_UNSPECIFIED = 0, CREATE = 1, DELETE = 2, UPDATE = 3 }

	export enum OperationMetadataState { STATE_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, SUCCEEDED = 3, SUCCESSFUL = 4, FAILED = 5 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete an environment.
		 * Delete v1/{name}
		 * @param {string} name The environment to delete, in the form:
		 * "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {void} Successful response
		 */
		Composer_projects_locations_environments_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an existing environment.
		 * Get v1/{name}
		 * @param {string} name The resource name of the environment to get, in the form:
		 * "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {void} Successful response
		 */
		Composer_projects_locations_environments_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an environment.
		 * Patch v1/{name}
		 * @param {string} name The relative resource name of the environment to update, in the form:
		 * "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @param {string} updateMask Required. A comma-separated list of paths, relative to `Environment`, of
		 * fields to update.
		 * For example, to set the version of scikit-learn to install in the
		 * environment to 0.19.0 and to remove an existing installation of
		 * numpy, the `updateMask` parameter would include the following two
		 * `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and
		 * "config.softwareConfig.pypiPackages.numpy". The included patch
		 * environment would specify the scikit-learn version as follows:
		 *     {
		 *       "config":{
		 *         "softwareConfig":{
		 *           "pypiPackages":{
		 *             "scikit-learn":"==0.19.0"
		 *           }
		 *         }
		 *       }
		 *     }
		 * Note that in the above example, any existing PyPI packages
		 * other than scikit-learn and numpy will be unaffected.
		 * Only one update type may be included in a single request's `updateMask`.
		 * For example, one cannot update both the PyPI packages and
		 * labels in the same request. However, it is possible to update multiple
		 * members of a map field simultaneously in the same request. For example,
		 * to set the labels "label1" and "label2" while clearing "label3" (assuming
		 * it already exists), one can
		 * provide the paths "labels.label1", "labels.label2", and "labels.label3"
		 * and populate the patch environment as follows:
		 *     {
		 *       "labels":{
		 *         "label1":"new-label1-value"
		 *         "label2":"new-label2-value"
		 *       }
		 *     }
		 * Note that in the above example, any existing labels that are not
		 * included in the `updateMask` will be unaffected.
		 * It is also possible to replace an entire map field by providing the
		 * map field's path in the `updateMask`. The new value of the field will
		 * be that which is provided in the patch environment. For example, to
		 * delete all pre-existing user-specified PyPI packages and
		 * install botocore at version 1.7.14, the `updateMask` would contain
		 * the path "config.softwareConfig.pypiPackages", and
		 * the patch environment would be the following:
		 *     {
		 *       "config":{
		 *         "softwareConfig":{
		 *           "pypiPackages":{
		 *             "botocore":"==1.7.14"
		 *           }
		 *         }
		 *       }
		 *     }
		 * **Note:** Only the following fields can be updated:
		 *  <table>
		 *  <tbody>
		 *  <tr>
		 *  <td><strong>Mask</strong></td>
		 *  <td><strong>Purpose</strong></td>
		 *  </tr>
		 *  <tr>
		 *  <td>config.softwareConfig.pypiPackages
		 *  </td>
		 *  <td>Replace all custom custom PyPI packages. If a replacement
		 *  package map is not included in `environment`, all custom
		 *  PyPI packages are cleared. It is an error to provide both this mask and a
		 *  mask specifying an individual package.</td>
		 *  </tr>
		 *  <tr>
		 *  <td>config.softwareConfig.pypiPackages.<var>packagename</var></td>
		 *  <td>Update the custom PyPI package <var>packagename</var>,
		 *  preserving other packages. To delete the package, include it in
		 *  `updateMask`, and omit the mapping for it in
		 *  `environment.config.softwareConfig.pypiPackages`. It is an error
		 *  to provide both a mask of this form and the
		 *  "config.softwareConfig.pypiPackages" mask.</td>
		 *  </tr>
		 *  <tr>
		 *  <td>labels</td>
		 *  <td>Replace all environment labels. If a replacement labels map is not
		 *  included in `environment`, all labels are cleared. It is an error to
		 *  provide both this mask and a mask specifying one or more individual
		 *  labels.</td>
		 *  </tr>
		 *  <tr>
		 *  <td>labels.<var>labelName</var></td>
		 *  <td>Set the label named <var>labelName</var>, while preserving other
		 *  labels. To delete the label, include it in `updateMask` and omit its
		 *  mapping in `environment.labels`. It is an error to provide both a
		 *  mask of this form and the "labels" mask.</td>
		 *  </tr>
		 *  <tr>
		 *  <td>config.nodeCount</td>
		 *  <td>Horizontally scale the number of nodes in the environment. An integer
		 *  greater than or equal to 3 must be provided in the `config.nodeCount`
		 *  field.
		 *  </td>
		 *  </tr>
		 *  <tr>
		 *  <td>config.softwareConfig.airflowConfigOverrides</td>
		 *  <td>Replace all Apache Airflow config overrides. If a replacement config
		 *  overrides map is not included in `environment`, all config overrides
		 *  are cleared.
		 *  It is an error to provide both this mask and a mask specifying one or
		 *  more individual config overrides.</td>
		 *  </tr>
		 *  <tr>
		 *  <td>config.softwareConfig.airflowConfigOverrides.<var>section</var>-<var>name
		 *  </var></td>
		 *  <td>Override the Apache Airflow config property <var>name</var> in the
		 *  section named <var>section</var>, preserving other properties. To delete
		 *  the property override, include it in `updateMask` and omit its mapping
		 *  in `environment.config.softwareConfig.airflowConfigOverrides`.
		 *  It is an error to provide both a mask of this form and the
		 *  "config.softwareConfig.airflowConfigOverrides" mask.</td>
		 *  </tr>
		 *  <tr>
		 *  <td>config.softwareConfig.envVariables</td>
		 *  <td>Replace all environment variables. If a replacement environment
		 *  variable map is not included in `environment`, all custom environment
		 *  variables  are cleared.
		 *  It is an error to provide both this mask and a mask specifying one or
		 *  more individual environment variables.</td>
		 *  </tr>
		 *  </tbody>
		 *  </table>
		 * @return {void} Successful response
		 */
		Composer_projects_locations_environments_patch(name: string, updateMask: string, requestBody: Environment): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Composer_projects_locations_operations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List environments.
		 * Get v1/{parent}/environments
		 * @param {string} parent List environments in the given project and location, in the form:
		 * "projects/{projectId}/locations/{locationId}"
		 * @param {number} pageSize The maximum number of environments to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Composer_projects_locations_environments_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new environment.
		 * Post v1/{parent}/environments
		 * @param {string} parent The parent must be of the form
		 * "projects/{projectId}/locations/{locationId}".
		 * @return {void} Successful response
		 */
		Composer_projects_locations_environments_create(parent: string, requestBody: Environment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List ImageVersions for provided location.
		 * Get v1/{parent}/imageVersions
		 * @param {string} parent List ImageVersions in the given project and location, in the form:
		 * "projects/{projectId}/locations/{locationId}"
		 * @param {number} pageSize The maximum number of image_versions to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Composer_projects_locations_imageVersions_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/imageVersions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

