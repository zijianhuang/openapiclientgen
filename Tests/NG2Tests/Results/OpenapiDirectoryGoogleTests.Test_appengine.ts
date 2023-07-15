import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Google Cloud Endpoints (https://cloud.google.com/appengine/docs/python/endpoints/) configuration for API handlers. */
	export interface ApiConfigHandler {

		/** Action to take when users access resources that require authentication. Defaults to redirect. */
		authFailAction?: ApiConfigHandlerAuthFailAction;

		/** Level of login required to access this resource. Defaults to optional. */
		login?: ApiConfigHandlerLogin;

		/** Path to the script from the application root directory. */
		script?: string;

		/** Security (HTTPS) enforcement for this URL. */
		securityLevel?: ApiConfigHandlerSecurityLevel;

		/** URL to serve the endpoint at. */
		url?: string;
	}

	export enum ApiConfigHandlerAuthFailAction { AUTH_FAIL_ACTION_UNSPECIFIED = 0, AUTH_FAIL_ACTION_REDIRECT = 1, AUTH_FAIL_ACTION_UNAUTHORIZED = 2 }

	export enum ApiConfigHandlerLogin { LOGIN_UNSPECIFIED = 0, LOGIN_OPTIONAL = 1, LOGIN_ADMIN = 2, LOGIN_REQUIRED = 3 }

	export enum ApiConfigHandlerSecurityLevel { SECURE_UNSPECIFIED = 0, SECURE_DEFAULT = 1, SECURE_NEVER = 2, SECURE_OPTIONAL = 3, SECURE_ALWAYS = 4 }


	/** Uses Google Cloud Endpoints to handle requests. */
	export interface ApiEndpointHandler {

		/** Path to the script from the application root directory. */
		scriptPath?: string;
	}


	/** An Application resource contains the top-level configuration of an App Engine application. */
	export interface Application {

		/** Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account. */
		authDomain?: string;

		/** Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly */
		codeBucket?: string;

		/** Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly */
		defaultBucket?: string;

		/** Cookie expiration policy for this application. */
		defaultCookieExpiration?: string;

		/** Hostname used to reach this application, as resolved by App Engine.@OutputOnly */
		defaultHostname?: string;

		/** HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported. */
		dispatchRules?: Array<UrlDispatchRule>;

		/** The feature specific settings to be used in the application. These define behaviors that are user configurable. */
		featureSettings?: FeatureSettings;

		/** The Google Container Registry domain used for storing managed build docker images for this application. */
		gcrDomain?: string;

		/** Identity-Aware Proxy */
		iap?: IdentityAwareProxy;

		/** Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp. */
		id?: string;

		/** Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations). */
		locationId?: string;

		/** Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly */
		name?: string;

		/** Serving status of this application. */
		servingStatus?: ApplicationServingStatus;
	}


	/** Rules to match an HTTP request and dispatch that request to a service. */
	export interface UrlDispatchRule {

		/** Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".Defaults to matching all domains: "*". */
		domain?: string;

		/** Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters. */
		path?: string;

		/** Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default. */
		service?: string;
	}


	/** The feature specific settings to be used in the application. These define behaviors that are user configurable. */
	export interface FeatureSettings {

		/** Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to 'readiness_check' and 'liveness_check' values instead of 'health_check' ones. Once the legacy 'health_check' behavior is deprecated, and this value is always true, this setting can be removed. */
		splitHealthChecks?: boolean;

		/** If true, use Container-Optimized OS (https://cloud.google.com/container-optimized-os/) base image for VMs, rather than a base Debian image. */
		useContainerOptimizedOs?: boolean;
	}


	/** Identity-Aware Proxy */
	export interface IdentityAwareProxy {

		/** Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty. */
		enabled?: boolean;

		/** OAuth2 client ID to use for the authentication flow. */
		oauth2ClientId?: string;

		/** OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly */
		oauth2ClientSecret?: string;

		/** Hex-encoded SHA-256 hash of the client secret.@OutputOnly */
		oauth2ClientSecretSha256?: string;
	}

	export enum ApplicationServingStatus { UNSPECIFIED = 0, SERVING = 1, USER_DISABLED = 2, SYSTEM_DISABLED = 3 }


	/** An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains. */
	export interface AuthorizedCertificate {

		/** An SSL certificate obtained from a certificate authority. */
		certificateRawData?: CertificateRawData;

		/** The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate. */
		displayName?: string;

		/** Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly */
		domainMappingsCount?: number;

		/** Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly */
		domainNames?: Array<string>;

		/** The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly */
		expireTime?: string;

		/** Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly */
		id?: string;

		/** A certificate managed by App Engine. */
		managedCertificate?: ManagedCertificate;

		/** Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly */
		name?: string;

		/** The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly */
		visibleDomainMappings?: Array<string>;
	}


	/** An SSL certificate obtained from a certificate authority. */
	export interface CertificateRawData {

		/** Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: <pre> -----BEGIN RSA PRIVATE KEY----- <unencrypted_key_value> -----END RSA PRIVATE KEY----- </pre> @InputOnly */
		privateKey?: string;

		/** PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: <pre> -----BEGIN CERTIFICATE----- <certificate_value> -----END CERTIFICATE----- </pre> */
		publicCertificate?: string;
	}


	/** A certificate managed by App Engine. */
	export interface ManagedCertificate {

		/** Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly */
		lastRenewalTime?: string;

		/** Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly */
		status?: ManagedCertificateStatus;
	}

	export enum ManagedCertificateStatus { MANAGEMENT_STATUS_UNSPECIFIED = 0, OK = 1, PENDING = 2, FAILED_RETRYING_NOT_VISIBLE = 3, FAILED_PERMANENT = 4, FAILED_RETRYING_CAA_FORBIDDEN = 5, FAILED_RETRYING_CAA_CHECKING = 6 }


	/** A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Webmaster Central (https://www.google.com/webmasters/verification/home). */
	export interface AuthorizedDomain {

		/** Fully qualified domain name of the domain authorized for use. Example: example.com. */
		id?: string;

		/** Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly */
		name?: string;
	}


	/** Automatic scaling is based on request rate, response latencies, and other application metrics. */
	export interface AutomaticScaling {

		/** The time period that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. Only applicable in the App Engine flexible environment. */
		coolDownPeriod?: string;

		/** Target scaling by CPU usage. */
		cpuUtilization?: CpuUtilization;

		/** Target scaling by disk usage. Only applicable in the App Engine flexible environment. */
		diskUtilization?: DiskUtilization;

		/** Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value. */
		maxConcurrentRequests?: number;

		/** Maximum number of idle instances that should be maintained for this version. */
		maxIdleInstances?: number;

		/** Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. */
		maxPendingLatency?: string;

		/** Maximum number of instances that should be started to handle requests for this version. */
		maxTotalInstances?: number;

		/** Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service. */
		minIdleInstances?: number;

		/** Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. */
		minPendingLatency?: string;

		/** Minimum number of running instances that should be maintained for this version. */
		minTotalInstances?: number;

		/** Target scaling by network usage. Only applicable in the App Engine flexible environment. */
		networkUtilization?: NetworkUtilization;

		/** Target scaling by request utilization. Only applicable in the App Engine flexible environment. */
		requestUtilization?: RequestUtilization;

		/** Scheduler settings for standard environment. */
		standardSchedulerSettings?: StandardSchedulerSettings;
	}


	/** Target scaling by CPU usage. */
	export interface CpuUtilization {

		/** Period of time over which CPU utilization is calculated. */
		aggregationWindowLength?: string;

		/** Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. */
		targetUtilization?: number;
	}


	/** Target scaling by disk usage. Only applicable in the App Engine flexible environment. */
	export interface DiskUtilization {

		/** Target bytes read per second. */
		targetReadBytesPerSecond?: number;

		/** Target ops read per seconds. */
		targetReadOpsPerSecond?: number;

		/** Target bytes written per second. */
		targetWriteBytesPerSecond?: number;

		/** Target ops written per second. */
		targetWriteOpsPerSecond?: number;
	}


	/** Target scaling by network usage. Only applicable in the App Engine flexible environment. */
	export interface NetworkUtilization {

		/** Target bytes received per second. */
		targetReceivedBytesPerSecond?: number;

		/** Target packets received per second. */
		targetReceivedPacketsPerSecond?: number;

		/** Target bytes sent per second. */
		targetSentBytesPerSecond?: number;

		/** Target packets sent per second. */
		targetSentPacketsPerSecond?: number;
	}


	/** Target scaling by request utilization. Only applicable in the App Engine flexible environment. */
	export interface RequestUtilization {

		/** Target number of concurrent requests. */
		targetConcurrentRequests?: number;

		/** Target requests per second. */
		targetRequestCountPerSecond?: number;
	}


	/** Scheduler settings for standard environment. */
	export interface StandardSchedulerSettings {

		/** Maximum number of instances to run for this version. Set to zero to disable max_instances configuration. */
		maxInstances?: number;

		/** Minimum number of instances to run for this version. Set to zero to disable min_instances configuration. */
		minInstances?: number;

		/** Target CPU utilization ratio to maintain when scaling. */
		targetCpuUtilization?: number;

		/** Target throughput utilization ratio to maintain when scaling */
		targetThroughputUtilization?: number;
	}


	/** A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity. */
	export interface BasicScaling {

		/** Duration of time after the last request that an instance must wait before the instance is shut down. */
		idleTimeout?: string;

		/** Maximum number of instances to create for this version. */
		maxInstances?: number;
	}


	/** Request message for Firewall.BatchUpdateIngressRules. */
	export interface BatchUpdateIngressRulesRequest {

		/** A list of FirewallRules to replace the existing set. */
		ingressRules?: Array<FirewallRule>;
	}


	/** A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests. */
	export interface FirewallRule {

		/** The action to take on matched requests. */
		action?: FirewallRuleAction;

		/** An optional string description of this rule. This field has a maximum length of 100 characters. */
		description?: string;

		/** A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user. */
		priority?: number;

		/** IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32  or 2001:0db8:0000:0042:0000:8a2e:0370:7334.<p>Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32. */
		sourceRange?: string;
	}

	export enum FirewallRuleAction { UNSPECIFIED_ACTION = 0, ALLOW = 1, DENY = 2 }


	/** Response message for Firewall.UpdateAllIngressRules. */
	export interface BatchUpdateIngressRulesResponse {

		/** The full list of ingress FirewallRules for this application. */
		ingressRules?: Array<FirewallRule>;
	}


	/** Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly. */
	export interface CloudBuildOptions {

		/** Path to the yaml file used in deployment, used to determine runtime configuration details.Required for flexible environment builds.See https://cloud.google.com/appengine/docs/standard/python/config/appref for more details. */
		appYamlPath?: string;

		/** The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. */
		cloudBuildTimeout?: string;
	}


	/** Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment. */
	export interface ContainerInfo {

		/** URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest" */
		image?: string;
	}


	/** Metadata for the given google.longrunning.Operation during a google.appengine.v1.CreateVersionRequest. */
	export interface CreateVersionMetadataV1 {

		/** The Cloud Build ID if one was created as part of the version create. @OutputOnly */
		cloudBuildId?: string;
	}


	/** Metadata for the given google.longrunning.Operation during a google.appengine.v1alpha.CreateVersionRequest. */
	export interface CreateVersionMetadataV1Alpha {

		/** The Cloud Build ID if one was created as part of the version create. @OutputOnly */
		cloudBuildId?: string;
	}


	/** Metadata for the given google.longrunning.Operation during a google.appengine.v1beta.CreateVersionRequest. */
	export interface CreateVersionMetadataV1Beta {

		/** The Cloud Build ID if one was created as part of the version create. @OutputOnly */
		cloudBuildId?: string;
	}


	/** Request message for Instances.DebugInstance. */
	export interface DebugInstanceRequest {

		/**
		 * Public SSH key to add to the instance. Examples:
		 * [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME]
		 * [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).
		 */
		sshKey?: string;
	}


	/** Code and application artifacts used to deploy a version to App Engine. */
	export interface Deployment {

		/** Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly. */
		cloudBuildOptions?: CloudBuildOptions;

		/** Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment. */
		container?: ContainerInfo;

		/** Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call. */
		files?: {[id: string]: FileInfo };

		/** The zip file information for a zip deployment. */
		zip?: ZipInfo;
	}


	/** Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately. */
	export interface FileInfo {

		/** The MIME type of the file.Defaults to the value from Google Cloud Storage. */
		mimeType?: string;

		/** The SHA1 hash of the file, in hex. */
		sha1Sum?: string;

		/** URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/<bucket>/<object>'. */
		sourceUrl?: string;
	}


	/** The zip file information for a zip deployment. */
	export interface ZipInfo {

		/** An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow. */
		filesCount?: number;

		/** URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/<bucket>/<object>'. */
		sourceUrl?: string;
	}


	/** A domain serving an App Engine application. */
	export interface DomainMapping {

		/** Relative name of the domain serving the application. Example: example.com. */
		id?: string;

		/** Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly */
		name?: string;

		/** The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly */
		resourceRecords?: Array<ResourceRecord>;

		/** SSL configuration for a DomainMapping resource. */
		sslSettings?: SslSettings;
	}


	/** A DNS resource record. */
	export interface ResourceRecord {

		/** Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'. */
		name?: string;

		/** Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). */
		rrdata?: string;

		/** Resource record type. Example: AAAA. */
		type?: ResourceRecordType;
	}

	export enum ResourceRecordType { RECORD_TYPE_UNSPECIFIED = 0, A = 1, AAAA = 2, CNAME = 3 }


	/** SSL configuration for a DomainMapping resource. */
	export interface SslSettings {

		/** ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify SslManagementType.MANUAL on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345. */
		certificateId?: string;

		/** ID of the managed AuthorizedCertificate resource currently being provisioned, if applicable. Until the new managed certificate has been successfully provisioned, the previous SSL state will be preserved. Once the provisioning process completes, the certificate_id field will reflect the new managed certificate and this field will be left empty. To remove SSL support while there is still a pending managed certificate, clear the certificate_id field with an UpdateDomainMappingRequest.@OutputOnly */
		pendingManagedCertificateId?: string;

		/** SSL management type for this domain. If AUTOMATIC, a managed certificate is automatically provisioned. If MANUAL, certificate_id must be manually specified in order to configure SSL for this domain. */
		sslManagementType?: SslSettingsSslManagementType;
	}

	export enum SslSettingsSslManagementType { SSL_MANAGEMENT_TYPE_UNSPECIFIED = 0, AUTOMATIC = 1, MANUAL = 2 }


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
	 * service Foo {
	 *   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 * }
	 * The JSON representation for Empty is empty JSON object {}.
	 */
	export interface Empty {
	}


	/** Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview). */
	export interface EndpointsApiService {

		/** Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".By default, the rollout strategy for Endpoints is RolloutStrategy.FIXED. This means that Endpoints starts up with a particular configuration ID. When a new configuration is rolled out, Endpoints must be given the new configuration ID. The config_id field is used to give the configuration ID and is required in this case.Endpoints also has a rollout strategy called RolloutStrategy.MANAGED. When using this, Endpoints fetches the latest configuration and does not need the configuration ID. In this case, config_id must be omitted. */
		configId?: string;

		/** Enable or disable trace sampling. By default, this is set to false for enabled. */
		disableTraceSampling?: boolean;

		/** Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog" */
		name?: string;

		/** Endpoints rollout strategy. If FIXED, config_id must be specified. If MANAGED, config_id must be omitted. */
		rolloutStrategy?: EndpointsApiServiceRolloutStrategy;
	}

	export enum EndpointsApiServiceRolloutStrategy { UNSPECIFIED_ROLLOUT_STRATEGY = 0, FIXED = 1, MANAGED = 2 }


	/** The entrypoint for the application. */
	export interface Entrypoint {

		/** The format should be a shell command that can be fed to bash -c. */
		shell?: string;
	}


	/** Custom static error page to be served when an error occurs. */
	export interface ErrorHandler {

		/** Error condition this handler applies to. */
		errorCode?: ErrorHandlerErrorCode;

		/** MIME type of file. Defaults to text/html. */
		mimeType?: string;

		/** Static file content to be served for this error. */
		staticFile?: string;
	}

	export enum ErrorHandlerErrorCode { ERROR_CODE_UNSPECIFIED = 0, ERROR_CODE_DEFAULT = 1, ERROR_CODE_OVER_QUOTA = 2, ERROR_CODE_DOS_API_DENIAL = 3, ERROR_CODE_TIMEOUT = 4 }


	/** Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment. */
	export interface HealthCheck {

		/** Interval between health checks. */
		checkInterval?: string;

		/** Whether to explicitly disable health checks for this instance. */
		disableHealthCheck?: boolean;

		/** Number of consecutive successful health checks required before receiving traffic. */
		healthyThreshold?: string;

		/** Host header to send when performing an HTTP health check. Example: "myapp.appspot.com" */
		host?: string;

		/** Number of consecutive failed health checks required before an instance is restarted. */
		restartThreshold?: string;

		/** Time before the health check is considered failed. */
		timeout?: string;

		/** Number of consecutive failed health checks required before removing traffic. */
		unhealthyThreshold?: string;
	}


	/** An Instance resource is the computing unit that App Engine uses to automatically scale an application. */
	export interface Instance {

		/** App Engine release this instance is running on.@OutputOnly */
		appEngineRelease?: string;

		/** Availability of the instance.@OutputOnly */
		availability?: InstanceAvailability;

		/** Average latency (ms) over the last minute.@OutputOnly */
		averageLatency?: number;

		/** Number of errors since this instance was started.@OutputOnly */
		errors?: number;

		/** Relative name of the instance within the version. Example: instance-1.@OutputOnly */
		id?: string;

		/** Total memory in use (bytes).@OutputOnly */
		memoryUsage?: string;

		/** Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.@OutputOnly */
		name?: string;

		/** Average queries per second (QPS) over the last minute.@OutputOnly */
		qps?: number;

		/** Number of requests since this instance was started.@OutputOnly */
		requests?: number;

		/** Time that this instance was started.@OutputOnly */
		startTime?: string;

		/** Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.@OutputOnly */
		vmDebugEnabled?: boolean;

		/** Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly */
		vmId?: string;

		/** The IP address of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly */
		vmIp?: string;

		/** Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly */
		vmName?: string;

		/** Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly */
		vmStatus?: string;

		/** Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.@OutputOnly */
		vmZoneName?: string;
	}

	export enum InstanceAvailability { UNSPECIFIED = 0, RESIDENT = 1, DYNAMIC = 2 }


	/** Third-party Python runtime library that is required by the application. */
	export interface Library {

		/** Name of the library. Example: "django". */
		name?: string;

		/** Version of the library to select, or "latest". */
		version?: string;
	}


	/** Response message for AuthorizedCertificates.ListAuthorizedCertificates. */
	export interface ListAuthorizedCertificatesResponse {

		/** The SSL certificates the user is authorized to administer. */
		certificates?: Array<AuthorizedCertificate>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string;
	}


	/** Response message for AuthorizedDomains.ListAuthorizedDomains. */
	export interface ListAuthorizedDomainsResponse {

		/** The authorized domains belonging to the user. */
		domains?: Array<AuthorizedDomain>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string;
	}


	/** Response message for DomainMappings.ListDomainMappings. */
	export interface ListDomainMappingsResponse {

		/** The domain mappings for the application. */
		domainMappings?: Array<DomainMapping>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string;
	}


	/** Response message for Firewall.ListIngressRules. */
	export interface ListIngressRulesResponse {

		/** The ingress FirewallRules for this application. */
		ingressRules?: Array<FirewallRule>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string;
	}


	/** Response message for Instances.ListInstances. */
	export interface ListInstancesResponse {

		/** The instances belonging to the requested version. */
		instances?: Array<Instance>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: "us-east1". */
		locationId?: string;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
		name?: string;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string;

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string;
	}


	/** Response message for Services.ListServices. */
	export interface ListServicesResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string;

		/** The services belonging to the requested application. */
		services?: Array<Service>;
	}


	/** A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service. */
	export interface Service {

		/** Relative name of the service within the application. Example: default.@OutputOnly */
		id?: string;

		/** Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly */
		name?: string;

		/** Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions. */
		split?: TrafficSplit;
	}


	/** Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions. */
	export interface TrafficSplit {

		/** Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. */
		allocations?: {[id: string]: number };

		/** Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed. */
		shardBy?: TrafficSplitShardBy;
	}

	export enum TrafficSplitShardBy { UNSPECIFIED = 0, COOKIE = 1, IP = 2, RANDOM = 3 }


	/** Response message for Versions.ListVersions. */
	export interface ListVersionsResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string;

		/** The versions belonging to the requested service. */
		versions?: Array<Version>;
	}


	/** A Version resource is a specific set of source code and configuration files that are deployed into a service. */
	export interface Version {

		/** Google Cloud Endpoints (https://cloud.google.com/appengine/docs/python/endpoints/) configuration for API handlers. */
		apiConfig?: ApiConfigHandler;

		/** Automatic scaling is based on request rate, response latencies, and other application metrics. */
		automaticScaling?: AutomaticScaling;

		/** A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity. */
		basicScaling?: BasicScaling;

		/** Metadata settings that are supplied to this version to enable beta runtime features. */
		betaSettings?: {[id: string]: string };

		/** Time that this version was created.@OutputOnly */
		createTime?: string;

		/** Email address of the user who created this version.@OutputOnly */
		createdBy?: string;

		/** Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set. */
		defaultExpiration?: string;

		/** Code and application artifacts used to deploy a version to App Engine. */
		deployment?: Deployment;

		/** Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly */
		diskUsageBytes?: string;

		/** Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview). */
		endpointsApiService?: EndpointsApiService;

		/** The entrypoint for the application. */
		entrypoint?: Entrypoint;

		/** App Engine execution environment for this version.Defaults to standard. */
		env?: string;

		/** Environment variables available to the application.Only returned in GET requests if view=FULL is set. */
		envVariables?: {[id: string]: string };

		/** Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set. */
		errorHandlers?: Array<ErrorHandler>;

		/** An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set. */
		handlers?: Array<UrlMap>;

		/** Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment. */
		healthCheck?: HealthCheck;

		/** Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-". */
		id?: string;

		/** Before an application can receive email or XMPP messages, the application must be configured to enable the service. */
		inboundServices?: Array<string>;

		/**
		 * Instance class that is used to run this version. Valid values are:
		 * AutomaticScaling: F1, F2, F4, F4_1G
		 * ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.
		 */
		instanceClass?: string;

		/** Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set. */
		libraries?: Array<Library>;

		/** Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. */
		livenessCheck?: LivenessCheck;

		/** A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. */
		manualScaling?: ManualScaling;

		/** Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly */
		name?: string;

		/** Extra network settings. Only applicable in the App Engine flexible environment. */
		network?: Network;

		/** Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set. */
		nobuildFilesRegex?: string;

		/** Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation. */
		readinessCheck?: ReadinessCheck;

		/** Machine resources for a version. */
		resources?: Resources;

		/** Desired runtime. Example: python27. */
		runtime?: string;

		/** The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard/<language>/config/appref */
		runtimeApiVersion?: string;

		/** The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel. */
		runtimeChannel?: string;

		/** The path or name of the app's main executable. */
		runtimeMainExecutablePath?: string;

		/** Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING. */
		servingStatus?: VersionServingStatus;

		/** Whether multiple requests can be dispatched to this version at once. */
		threadsafe?: boolean;

		/** Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly */
		versionUrl?: string;

		/** Whether to deploy this version in a container on a virtual machine. */
		vm?: boolean;

		/** VPC access connector specification. */
		vpcAccessConnector?: VpcAccessConnector;

		/** The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated. */
		zones?: Array<string>;
	}


	/** URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript. */
	export interface UrlMap {

		/** Uses Google Cloud Endpoints to handle requests. */
		apiEndpoint?: ApiEndpointHandler;

		/** Action to take when users access resources that require authentication. Defaults to redirect. */
		authFailAction?: ApiConfigHandlerAuthFailAction;

		/** Level of login required to access this resource. Not supported for Node.js in the App Engine standard environment. */
		login?: ApiConfigHandlerLogin;

		/** 30x code to use when performing redirects for the secure field. Defaults to 302. */
		redirectHttpResponseCode?: UrlMapRedirectHttpResponseCode;

		/** Executes a script to handle the request that matches the URL pattern. */
		script?: ScriptHandler;

		/** Security (HTTPS) enforcement for this URL. */
		securityLevel?: ApiConfigHandlerSecurityLevel;

		/** Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them. */
		staticFiles?: StaticFilesHandler;

		/** URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. */
		urlRegex?: string;
	}

	export enum UrlMapRedirectHttpResponseCode { REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED = 0, REDIRECT_HTTP_RESPONSE_CODE_301 = 1, REDIRECT_HTTP_RESPONSE_CODE_302 = 2, REDIRECT_HTTP_RESPONSE_CODE_303 = 3, REDIRECT_HTTP_RESPONSE_CODE_307 = 4 }


	/** Executes a script to handle the request that matches the URL pattern. */
	export interface ScriptHandler {

		/** Path to the script from the application root directory. */
		scriptPath?: string;
	}


	/** Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them. */
	export interface StaticFilesHandler {

		/** Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas. */
		applicationReadable?: boolean;

		/** Time a static file served by this handler should be cached by web proxies and browsers. */
		expiration?: string;

		/** HTTP headers to use for all responses from these URLs. */
		httpHeaders?: {[id: string]: string };

		/** MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file's filename extension. */
		mimeType?: string;

		/** Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern. */
		path?: string;

		/** Whether this handler should match the request if the file referenced by the handler does not exist. */
		requireMatchingFile?: boolean;

		/** Regular expression that matches the file paths for all files that should be referenced by this handler. */
		uploadPathRegex?: string;
	}


	/** Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. */
	export interface LivenessCheck {

		/** Interval between health checks. */
		checkInterval?: string;

		/** Number of consecutive failed checks required before considering the VM unhealthy. */
		failureThreshold?: string;

		/** Host header to send when performing a HTTP Liveness check. Example: "myapp.appspot.com" */
		host?: string;

		/** The initial delay before starting to execute the checks. */
		initialDelay?: string;

		/** The request path. */
		path?: string;

		/** Number of consecutive successful checks required before considering the VM healthy. */
		successThreshold?: string;

		/** Time before the check is considered failed. */
		timeout?: string;
	}


	/** A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. */
	export interface ManualScaling {

		/** Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function. */
		instances?: number;
	}


	/** Extra network settings. Only applicable in the App Engine flexible environment. */
	export interface Network {

		/** List of ports, or port pairs, to forward from the virtual machine to the application container. Only applicable in the App Engine flexible environment. */
		forwardedPorts?: Array<string>;

		/** Tag to apply to the instance during creation. Only applicable in the App Engine flexible environment. */
		instanceTag?: string;

		/** Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.Defaults to default. */
		name?: string;

		/** Enable session affinity. Only applicable in the App Engine flexible environment. */
		sessionAffinity?: boolean;

		/**
		 * Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.If a subnetwork name is specified, a network name will also be required unless it is for the default network.
		 * If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
		 * If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetwork_name) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
		 * If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetwork_name must be specified and the IP address is created from the IPCidrRange of the subnetwork.If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.
		 */
		subnetworkName?: string;
	}


	/** Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation. */
	export interface ReadinessCheck {

		/** A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. */
		appStartTimeout?: string;

		/** Interval between health checks. */
		checkInterval?: string;

		/** Number of consecutive failed checks required before removing traffic. */
		failureThreshold?: string;

		/** Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com" */
		host?: string;

		/** The request path. */
		path?: string;

		/** Number of consecutive successful checks required before receiving traffic. */
		successThreshold?: string;

		/** Time before the check is considered failed. */
		timeout?: string;
	}


	/** Machine resources for a version. */
	export interface Resources {

		/** Number of CPU cores needed. */
		cpu?: number;

		/** Disk size (GB) needed. */
		diskGb?: number;

		/** Memory (GB) needed. */
		memoryGb?: number;

		/** User specified volumes. */
		volumes?: Array<Volume>;
	}


	/** Volumes mounted within the app container. Only applicable in the App Engine flexible environment. */
	export interface Volume {

		/** Unique name for the volume. */
		name?: string;

		/** Volume size in gigabytes. */
		sizeGb?: number;

		/** Underlying volume type, e.g. 'tmpfs'. */
		volumeType?: string;
	}

	export enum VersionServingStatus { SERVING_STATUS_UNSPECIFIED = 0, SERVING = 1, STOPPED = 2 }


	/** VPC access connector specification. */
	export interface VpcAccessConnector {

		/** Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. */
		name?: string;
	}


	/** Metadata for the given google.cloud.location.Location. */
	export interface LocationMetadata {

		/** App Engine flexible environment is available in the given location.@OutputOnly */
		flexibleEnvironmentAvailable?: boolean;

		/** App Engine standard environment is available in the given location.@OutputOnly */
		standardEnvironmentAvailable?: boolean;
	}


	/** Metadata for the given google.longrunning.Operation. */
	export interface OperationMetadataV1 {

		/** Metadata for the given google.longrunning.Operation during a google.appengine.v1.CreateVersionRequest. */
		createVersionMetadata?: CreateVersionMetadataV1;

		/** Time that this operation completed.@OutputOnly */
		endTime?: string;

		/** Ephemeral message that may change every time the operation is polled. @OutputOnly */
		ephemeralMessage?: string;

		/** Time that this operation was created.@OutputOnly */
		insertTime?: string;

		/** API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly */
		method?: string;

		/** Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly */
		target?: string;

		/** User who requested this operation.@OutputOnly */
		user?: string;

		/** Durable messages that persist on every operation poll. @OutputOnly */
		warning?: Array<string>;
	}


	/** Metadata for the given google.longrunning.Operation. */
	export interface OperationMetadataV1Alpha {

		/** Metadata for the given google.longrunning.Operation during a google.appengine.v1alpha.CreateVersionRequest. */
		createVersionMetadata?: CreateVersionMetadataV1Alpha;

		/** Time that this operation completed.@OutputOnly */
		endTime?: string;

		/** Ephemeral message that may change every time the operation is polled. @OutputOnly */
		ephemeralMessage?: string;

		/** Time that this operation was created.@OutputOnly */
		insertTime?: string;

		/** API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly */
		method?: string;

		/** Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly */
		target?: string;

		/** User who requested this operation.@OutputOnly */
		user?: string;

		/** Durable messages that persist on every operation poll. @OutputOnly */
		warning?: Array<string>;
	}


	/** Metadata for the given google.longrunning.Operation. */
	export interface OperationMetadataV1Beta {

		/** Metadata for the given google.longrunning.Operation during a google.appengine.v1beta.CreateVersionRequest. */
		createVersionMetadata?: CreateVersionMetadataV1Beta;

		/** Time that this operation completed.@OutputOnly */
		endTime?: string;

		/** Ephemeral message that may change every time the operation is polled. @OutputOnly */
		ephemeralMessage?: string;

		/** Time that this operation was created.@OutputOnly */
		insertTime?: string;

		/** API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly */
		method?: string;

		/** Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly */
		target?: string;

		/** User who requested this operation.@OutputOnly */
		user?: string;

		/** Durable messages that persist on every operation poll. @OutputOnly */
		warning?: Array<string>;
	}


	/** Request message for 'Applications.RepairApplication'. */
	export interface RepairApplicationRequest {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an App Engine application for a Google Cloud Platform project. Required fields:
		 * id - The ID of the target Cloud Platform project.
		 * location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
		 * Post v1/apps
		 * @return {void} Successful response
		 */
		Appengine_apps_create(requestBody: Application): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about an application.
		 * Get v1/apps/{appsId}
		 * @param {string} appsId Part of `name`. Name of the Application resource to get. Example: apps/myapp.
		 * @return {void} Successful response
		 */
		Appengine_apps_get(appsId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified Application resource. You can update the following fields:
		 * auth_domain - Google authentication domain for controlling user access to the application.
		 * default_cookie_expiration - Cookie expiration policy for the application.
		 * Patch v1/apps/{appsId}
		 * @param {string} appsId Part of `name`. Name of the Application resource to update. Example: apps/myapp.
		 * @param {string} updateMask Standard field mask for the set of fields to be updated.
		 * @return {void} Successful response
		 */
		Appengine_apps_patch(appsId: string, updateMask: string, requestBody: Application): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all SSL certificates the user is authorized to administer.
		 * Get v1/apps/{appsId}/authorizedCertificates
		 * @param {string} appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @param {Appengine_apps_authorizedCertificates_listView} view Controls the set of fields returned in the LIST response.
		 * @return {void} Successful response
		 */
		Appengine_apps_authorizedCertificates_list(appsId: string, pageSize: number, pageToken: string, view: Appengine_apps_authorizedCertificates_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/authorizedCertificates&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads the specified SSL certificate.
		 * Post v1/apps/{appsId}/authorizedCertificates
		 * @param {string} appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
		 * @return {void} Successful response
		 */
		Appengine_apps_authorizedCertificates_create(appsId: string, requestBody: AuthorizedCertificate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/authorizedCertificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified SSL certificate.
		 * Delete v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}
		 * @param {string} appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
		 * @param {string} authorizedCertificatesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_authorizedCertificates_delete(appsId: string, authorizedCertificatesId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/authorizedCertificates/' + (authorizedCertificatesId == null ? '' : encodeURIComponent(authorizedCertificatesId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified SSL certificate.
		 * Get v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
		 * @param {string} authorizedCertificatesId Part of `name`. See documentation of `appsId`.
		 * @param {Appengine_apps_authorizedCertificates_listView} view Controls the set of fields returned in the GET response.
		 * @return {void} Successful response
		 */
		Appengine_apps_authorizedCertificates_get(appsId: string, authorizedCertificatesId: string, view: Appengine_apps_authorizedCertificates_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/authorizedCertificates/' + (authorizedCertificatesId == null ? '' : encodeURIComponent(authorizedCertificatesId)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
		 * Patch v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}
		 * @param {string} appsId Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
		 * @param {string} authorizedCertificatesId Part of `name`. See documentation of `appsId`.
		 * @param {string} updateMask Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
		 * @return {void} Successful response
		 */
		Appengine_apps_authorizedCertificates_patch(appsId: string, authorizedCertificatesId: string, updateMask: string, requestBody: AuthorizedCertificate): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/authorizedCertificates/' + (authorizedCertificatesId == null ? '' : encodeURIComponent(authorizedCertificatesId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all domains the user is authorized to administer.
		 * Get v1/apps/{appsId}/authorizedDomains
		 * @param {string} appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {void} Successful response
		 */
		Appengine_apps_authorizedDomains_list(appsId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/authorizedDomains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the domain mappings on an application.
		 * Get v1/apps/{appsId}/domainMappings
		 * @param {string} appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {void} Successful response
		 */
		Appengine_apps_domainMappings_list(appsId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/domainMappings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
		 * Post v1/apps/{appsId}/domainMappings
		 * @param {string} appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
		 * @param {Appengine_apps_domainMappings_createOverrideStrategy} overrideStrategy Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
		 * @return {void} Successful response
		 */
		Appengine_apps_domainMappings_create(appsId: string, overrideStrategy: Appengine_apps_domainMappings_createOverrideStrategy, requestBody: DomainMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/domainMappings&overrideStrategy=' + overrideStrategy, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
		 * Delete v1/apps/{appsId}/domainMappings/{domainMappingsId}
		 * @param {string} appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
		 * @param {string} domainMappingsId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_domainMappings_delete(appsId: string, domainMappingsId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/domainMappings/' + (domainMappingsId == null ? '' : encodeURIComponent(domainMappingsId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified domain mapping.
		 * Get v1/apps/{appsId}/domainMappings/{domainMappingsId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
		 * @param {string} domainMappingsId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_domainMappings_get(appsId: string, domainMappingsId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/domainMappings/' + (domainMappingsId == null ? '' : encodeURIComponent(domainMappingsId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
		 * Patch v1/apps/{appsId}/domainMappings/{domainMappingsId}
		 * @param {string} appsId Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
		 * @param {string} domainMappingsId Part of `name`. See documentation of `appsId`.
		 * @param {string} updateMask Standard field mask for the set of fields to be updated.
		 * @return {void} Successful response
		 */
		Appengine_apps_domainMappings_patch(appsId: string, domainMappingsId: string, updateMask: string, requestBody: DomainMapping): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/domainMappings/' + (domainMappingsId == null ? '' : encodeURIComponent(domainMappingsId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the firewall rules of an application.
		 * Get v1/apps/{appsId}/firewall/ingressRules
		 * @param {string} appsId Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.
		 * @param {string} matchingAddress A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {void} Successful response
		 */
		Appengine_apps_firewall_ingressRules_list(appsId: string, matchingAddress: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/firewall/ingressRules&matchingAddress=' + (matchingAddress == null ? '' : encodeURIComponent(matchingAddress)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a firewall rule for the application.
		 * Post v1/apps/{appsId}/firewall/ingressRules
		 * @param {string} appsId Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.
		 * @return {void} Successful response
		 */
		Appengine_apps_firewall_ingressRules_create(appsId: string, requestBody: FirewallRule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/firewall/ingressRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified firewall rule.
		 * Delete v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}
		 * @param {string} appsId Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.
		 * @param {string} ingressRulesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_firewall_ingressRules_delete(appsId: string, ingressRulesId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/firewall/ingressRules/' + (ingressRulesId == null ? '' : encodeURIComponent(ingressRulesId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified firewall rule.
		 * Get v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}
		 * @param {string} appsId Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.
		 * @param {string} ingressRulesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_firewall_ingressRules_get(appsId: string, ingressRulesId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/firewall/ingressRules/' + (ingressRulesId == null ? '' : encodeURIComponent(ingressRulesId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified firewall rule.
		 * Patch v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}
		 * @param {string} appsId Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.
		 * @param {string} ingressRulesId Part of `name`. See documentation of `appsId`.
		 * @param {string} updateMask Standard field mask for the set of fields to be updated.
		 * @return {void} Successful response
		 */
		Appengine_apps_firewall_ingressRules_patch(appsId: string, ingressRulesId: string, updateMask: string, requestBody: FirewallRule): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/firewall/ingressRules/' + (ingressRulesId == null ? '' : encodeURIComponent(ingressRulesId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
		 * Post v1/apps/{appsId}/firewall/ingressRules:batchUpdate
		 * @param {string} appsId Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
		 * @return {void} Successful response
		 */
		Appengine_apps_firewall_ingressRules_batchUpdate(appsId: string, requestBody: BatchUpdateIngressRulesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/firewall/ingressRules:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/apps/{appsId}/locations
		 * @param {string} appsId Part of `name`. The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Appengine_apps_locations_list(appsId: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a location.
		 * Get v1/apps/{appsId}/locations/{locationsId}
		 * @param {string} appsId Part of `name`. Resource name for the location.
		 * @param {string} locationsId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_locations_get(appsId: string, locationsId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/locations/' + (locationsId == null ? '' : encodeURIComponent(locationsId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
		 * Get v1/apps/{appsId}/operations
		 * @param {string} appsId Part of `name`. The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Appengine_apps_operations_list(appsId: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/apps/{appsId}/operations/{operationsId}
		 * @param {string} appsId Part of `name`. The name of the operation resource.
		 * @param {string} operationsId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_operations_get(appsId: string, operationsId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/operations/' + (operationsId == null ? '' : encodeURIComponent(operationsId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the services in the application.
		 * Get v1/apps/{appsId}/services
		 * @param {string} appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_list(appsId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified service and all enclosed versions.
		 * Delete v1/apps/{appsId}/services/{servicesId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_delete(appsId: string, servicesId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the current configuration of the specified service.
		 * Get v1/apps/{appsId}/services/{servicesId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_get(appsId: string, servicesId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the configuration of the specified service.
		 * Patch v1/apps/{appsId}/services/{servicesId}
		 * @param {string} appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @param {boolean} migrateTraffic Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
		 * @param {string} updateMask Standard field mask for the set of fields to be updated.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_patch(appsId: string, servicesId: string, migrateTraffic: boolean, updateMask: string, requestBody: Service): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '&migrateTraffic=' + migrateTraffic + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the versions of a service.
		 * Get v1/apps/{appsId}/services/{servicesId}/versions
		 * @param {string} appsId Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.
		 * @param {string} servicesId Part of `parent`. See documentation of `appsId`.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @param {Appengine_apps_services_versions_listView} view Controls the set of fields returned in the List response.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_list(appsId: string, servicesId: string, pageSize: number, pageToken: string, view: Appengine_apps_services_versions_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deploys code and resource files to a new version.
		 * Post v1/apps/{appsId}/services/{servicesId}/versions
		 * @param {string} appsId Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
		 * @param {string} servicesId Part of `parent`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_create(appsId: string, servicesId: string, requestBody: Version): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing Version resource.
		 * Delete v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @param {string} versionsId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_delete(appsId: string, servicesId: string, versionsId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions/' + (versionsId == null ? '' : encodeURIComponent(versionsId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
		 * Get v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @param {string} versionsId Part of `name`. See documentation of `appsId`.
		 * @param {Appengine_apps_services_versions_listView} view Controls the set of fields returned in the Get response.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_get(appsId: string, servicesId: string, versionsId: string, view: Appengine_apps_services_versions_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions/' + (versionsId == null ? '' : encodeURIComponent(versionsId)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment
		 * instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment:
		 * automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
		 * automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
		 * automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)
		 * automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)
		 * automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)
		 * automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment:
		 * serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)Flexible environment
		 * serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment:
		 * automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
		 * automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
		 * automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
		 * automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
		 * Patch v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}
		 * @param {string} appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @param {string} versionsId Part of `name`. See documentation of `appsId`.
		 * @param {string} updateMask Standard field mask for the set of fields to be updated.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_patch(appsId: string, servicesId: string, versionsId: string, updateMask: string, requestBody: Version): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions/' + (versionsId == null ? '' : encodeURIComponent(versionsId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
		 * Get v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances
		 * @param {string} appsId Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
		 * @param {string} servicesId Part of `parent`. See documentation of `appsId`.
		 * @param {string} versionsId Part of `parent`. See documentation of `appsId`.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_instances_list(appsId: string, servicesId: string, versionsId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions/' + (versionsId == null ? '' : encodeURIComponent(versionsId)) + '/instances&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
		 * Delete v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @param {string} versionsId Part of `name`. See documentation of `appsId`.
		 * @param {string} instancesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_instances_delete(appsId: string, servicesId: string, versionsId: string, instancesId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions/' + (versionsId == null ? '' : encodeURIComponent(versionsId)) + '/instances/' + (instancesId == null ? '' : encodeURIComponent(instancesId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets instance information.
		 * Get v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @param {string} versionsId Part of `name`. See documentation of `appsId`.
		 * @param {string} instancesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_instances_get(appsId: string, servicesId: string, versionsId: string, instancesId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions/' + (versionsId == null ? '' : encodeURIComponent(versionsId)) + '/instances/' + (instancesId == null ? '' : encodeURIComponent(instancesId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
		 * Post v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug
		 * @param {string} appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
		 * @param {string} servicesId Part of `name`. See documentation of `appsId`.
		 * @param {string} versionsId Part of `name`. See documentation of `appsId`.
		 * @param {string} instancesId Part of `name`. See documentation of `appsId`.
		 * @return {void} Successful response
		 */
		Appengine_apps_services_versions_instances_debug(appsId: string, servicesId: string, versionsId: string, instancesId: string, requestBody: DebugInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + '/services/' + (servicesId == null ? '' : encodeURIComponent(servicesId)) + '/versions/' + (versionsId == null ? '' : encodeURIComponent(versionsId)) + '/instances/' + (instancesId == null ? '' : encodeURIComponent(instancesId)) + ':debug', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
		 * Post v1/apps/{appsId}:repair
		 * @param {string} appsId Part of `name`. Name of the application to repair. Example: apps/myapp
		 * @return {void} Successful response
		 */
		Appengine_apps_repair(appsId: string, requestBody: RepairApplicationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (appsId == null ? '' : encodeURIComponent(appsId)) + ':repair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Appengine_apps_authorizedCertificates_listView { BASIC_CERTIFICATE = 0, FULL_CERTIFICATE = 1 }

	export enum Appengine_apps_domainMappings_createOverrideStrategy { UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY = 0, STRICT = 1, OVERRIDE = 2 }

	export enum Appengine_apps_services_versions_listView { BASIC = 0, FULL = 1 }

}

