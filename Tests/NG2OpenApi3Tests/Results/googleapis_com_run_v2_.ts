import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Settings for Binary Authorization feature. */
	export interface GoogleCloudRunV2BinaryAuthorization {

		/** If present, indicates to use Breakglass using this justification. If use_default is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass */
		breakglassJustification?: string | null;

		/** If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. */
		useDefault?: boolean | null;
	}

	/** Settings for Binary Authorization feature. */
	export interface GoogleCloudRunV2BinaryAuthorizationFormProperties {

		/** If present, indicates to use Breakglass using this justification. If use_default is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass */
		breakglassJustification: FormControl<string | null | undefined>,

		/** If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. */
		useDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRunV2BinaryAuthorizationFormGroup() {
		return new FormGroup<GoogleCloudRunV2BinaryAuthorizationFormProperties>({
			breakglassJustification: new FormControl<string | null | undefined>(undefined),
			useDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for deleting an Execution. */
	export interface GoogleCloudRunV2CancelExecutionRequest {

		/** A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
		etag?: string | null;

		/** Indicates that the request should be validated without actually cancelling any resources. */
		validateOnly?: boolean | null;
	}

	/** Request message for deleting an Execution. */
	export interface GoogleCloudRunV2CancelExecutionRequestFormProperties {

		/** A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
		etag: FormControl<string | null | undefined>,

		/** Indicates that the request should be validated without actually cancelling any resources. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRunV2CancelExecutionRequestFormGroup() {
		return new FormGroup<GoogleCloudRunV2CancelExecutionRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. */
	export interface GoogleCloudRunV2CloudSqlInstance {

		/** The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance} */
		instances?: Array<string>;
	}

	/** Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. */
	export interface GoogleCloudRunV2CloudSqlInstanceFormProperties {
	}
	export function CreateGoogleCloudRunV2CloudSqlInstanceFormGroup() {
		return new FormGroup<GoogleCloudRunV2CloudSqlInstanceFormProperties>({
		});

	}


	/** Defines a status condition for a resource. */
	export interface GoogleCloudRunV2Condition {

		/** A reason for the execution condition. */
		executionReason?: GoogleCloudRunV2ConditionExecutionReason | null;

		/** Last time the condition transitioned from one status to another. */
		lastTransitionTime?: string | null;

		/** Human readable message indicating details about the current status. */
		message?: string | null;

		/** A common (service-level) reason for this condition. */
		reason?: GoogleCloudRunV2ConditionReason | null;

		/** A reason for the revision condition. */
		revisionReason?: GoogleCloudRunV2ConditionRevisionReason | null;

		/** How to interpret failures of this condition, one of Error, Warning, Info */
		severity?: GoogleCloudRunV2ConditionSeverity | null;

		/** State of the condition. */
		state?: GoogleCloudRunV2ConditionState | null;

		/** type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready. */
		type?: string | null;
	}

	/** Defines a status condition for a resource. */
	export interface GoogleCloudRunV2ConditionFormProperties {

		/** A reason for the execution condition. */
		executionReason: FormControl<GoogleCloudRunV2ConditionExecutionReason | null | undefined>,

		/** Last time the condition transitioned from one status to another. */
		lastTransitionTime: FormControl<string | null | undefined>,

		/** Human readable message indicating details about the current status. */
		message: FormControl<string | null | undefined>,

		/** A common (service-level) reason for this condition. */
		reason: FormControl<GoogleCloudRunV2ConditionReason | null | undefined>,

		/** A reason for the revision condition. */
		revisionReason: FormControl<GoogleCloudRunV2ConditionRevisionReason | null | undefined>,

		/** How to interpret failures of this condition, one of Error, Warning, Info */
		severity: FormControl<GoogleCloudRunV2ConditionSeverity | null | undefined>,

		/** State of the condition. */
		state: FormControl<GoogleCloudRunV2ConditionState | null | undefined>,

		/** type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ConditionFormGroup() {
		return new FormGroup<GoogleCloudRunV2ConditionFormProperties>({
			executionReason: new FormControl<GoogleCloudRunV2ConditionExecutionReason | null | undefined>(undefined),
			lastTransitionTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<GoogleCloudRunV2ConditionReason | null | undefined>(undefined),
			revisionReason: new FormControl<GoogleCloudRunV2ConditionRevisionReason | null | undefined>(undefined),
			severity: new FormControl<GoogleCloudRunV2ConditionSeverity | null | undefined>(undefined),
			state: new FormControl<GoogleCloudRunV2ConditionState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2ConditionExecutionReason { EXECUTION_REASON_UNDEFINED = 0, JOB_STATUS_SERVICE_POLLING_ERROR = 1, NON_ZERO_EXIT_CODE = 2, CANCELLED = 3, CANCELLING = 4, DELETED = 5 }

	export enum GoogleCloudRunV2ConditionReason { COMMON_REASON_UNDEFINED = 0, UNKNOWN = 1, REVISION_FAILED = 2, PROGRESS_DEADLINE_EXCEEDED = 3, CONTAINER_MISSING = 4, CONTAINER_PERMISSION_DENIED = 5, CONTAINER_IMAGE_UNAUTHORIZED = 6, CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED = 7, ENCRYPTION_KEY_PERMISSION_DENIED = 8, ENCRYPTION_KEY_CHECK_FAILED = 9, SECRETS_ACCESS_CHECK_FAILED = 10, WAITING_FOR_OPERATION = 11, IMMEDIATE_RETRY = 12, POSTPONED_RETRY = 13, INTERNAL = 14 }

	export enum GoogleCloudRunV2ConditionRevisionReason { REVISION_REASON_UNDEFINED = 0, PENDING = 1, RESERVE = 2, RETIRED = 3, RETIRING = 4, RECREATING = 5, HEALTH_CHECK_CONTAINER_ERROR = 6, CUSTOMIZED_PATH_RESPONSE_PENDING = 7, MIN_INSTANCES_NOT_PROVISIONED = 8, ACTIVE_REVISION_LIMIT_REACHED = 9, NO_DEPLOYMENT = 10, HEALTH_CHECK_SKIPPED = 11, MIN_INSTANCES_WARMING = 12 }

	export enum GoogleCloudRunV2ConditionSeverity { SEVERITY_UNSPECIFIED = 0, ERROR = 1, WARNING = 2, INFO = 3 }

	export enum GoogleCloudRunV2ConditionState { STATE_UNSPECIFIED = 0, CONDITION_PENDING = 1, CONDITION_RECONCILING = 2, CONDITION_FAILED = 3, CONDITION_SUCCEEDED = 4 }


	/** A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments can be supplied by the system to the container at runtime. */
	export interface GoogleCloudRunV2Container {

		/** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. */
		args?: Array<string>;

		/** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. */
		command?: Array<string>;

		/** Names of the containers that must start before this container. */
		dependsOn?: Array<string>;

		/** List of environment variables to set in the container. */
		env?: Array<GoogleCloudRunV2EnvVar>;

		/** Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. */
		image?: string | null;

		/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		livenessProbe?: GoogleCloudRunV2Probe;

		/** Name of the container specified as a DNS_LABEL (RFC 1123). */
		name?: string | null;

		/** List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. */
		ports?: Array<GoogleCloudRunV2ContainerPort>;

		/** ResourceRequirements describes the compute resource requirements. */
		resources?: GoogleCloudRunV2ResourceRequirements;

		/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		startupProbe?: GoogleCloudRunV2Probe;

		/** Volume to mount into the container's filesystem. */
		volumeMounts?: Array<GoogleCloudRunV2VolumeMount>;

		/** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
		workingDir?: string | null;
	}

	/** A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments can be supplied by the system to the container at runtime. */
	export interface GoogleCloudRunV2ContainerFormProperties {

		/** Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. */
		image: FormControl<string | null | undefined>,

		/** Name of the container specified as a DNS_LABEL (RFC 1123). */
		name: FormControl<string | null | undefined>,

		/** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
		workingDir: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ContainerFormGroup() {
		return new FormGroup<GoogleCloudRunV2ContainerFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			workingDir: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnvVar represents an environment variable present in a Container. */
	export interface GoogleCloudRunV2EnvVar {

		/** Required. Name of the environment variable. Must not exceed 32768 characters. */
		name?: string | null;

		/** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes. */
		value?: string | null;

		/** EnvVarSource represents a source for the value of an EnvVar. */
		valueSource?: GoogleCloudRunV2EnvVarSource;
	}

	/** EnvVar represents an environment variable present in a Container. */
	export interface GoogleCloudRunV2EnvVarFormProperties {

		/** Required. Name of the environment variable. Must not exceed 32768 characters. */
		name: FormControl<string | null | undefined>,

		/** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2EnvVarFormGroup() {
		return new FormGroup<GoogleCloudRunV2EnvVarFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnvVarSource represents a source for the value of an EnvVar. */
	export interface GoogleCloudRunV2EnvVarSource {

		/** SecretEnvVarSource represents a source for the value of an EnvVar. */
		secretKeyRef?: GoogleCloudRunV2SecretKeySelector;
	}

	/** EnvVarSource represents a source for the value of an EnvVar. */
	export interface GoogleCloudRunV2EnvVarSourceFormProperties {
	}
	export function CreateGoogleCloudRunV2EnvVarSourceFormGroup() {
		return new FormGroup<GoogleCloudRunV2EnvVarSourceFormProperties>({
		});

	}


	/** SecretEnvVarSource represents a source for the value of an EnvVar. */
	export interface GoogleCloudRunV2SecretKeySelector {

		/** Required. The name of the secret in Cloud Secret Manager. Format: {secret_name} if the secret is in the same project. projects/{project}/secrets/{secret_name} if the secret is in a different project. */
		secret?: string | null;

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest version, an integer for a specific version, or a version alias. */
		version?: string | null;
	}

	/** SecretEnvVarSource represents a source for the value of an EnvVar. */
	export interface GoogleCloudRunV2SecretKeySelectorFormProperties {

		/** Required. The name of the secret in Cloud Secret Manager. Format: {secret_name} if the secret is in the same project. projects/{project}/secrets/{secret_name} if the secret is in a different project. */
		secret: FormControl<string | null | undefined>,

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest version, an integer for a specific version, or a version alias. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2SecretKeySelectorFormGroup() {
		return new FormGroup<GoogleCloudRunV2SecretKeySelectorFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface GoogleCloudRunV2Probe {

		/** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
		failureThreshold?: number | null;

		/** GRPCAction describes an action involving a GRPC port. */
		grpc?: GoogleCloudRunV2GRPCAction;

		/** HTTPGetAction describes an action based on HTTP Get requests. */
		httpGet?: GoogleCloudRunV2HTTPGetAction;

		/** Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. */
		initialDelaySeconds?: number | null;

		/** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
		periodSeconds?: number | null;

		/** TCPSocketAction describes an action based on opening a socket */
		tcpSocket?: GoogleCloudRunV2TCPSocketAction;

		/** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. */
		timeoutSeconds?: number | null;
	}

	/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface GoogleCloudRunV2ProbeFormProperties {

		/** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
		failureThreshold: FormControl<number | null | undefined>,

		/** Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. */
		initialDelaySeconds: FormControl<number | null | undefined>,

		/** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
		periodSeconds: FormControl<number | null | undefined>,

		/** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ProbeFormGroup() {
		return new FormGroup<GoogleCloudRunV2ProbeFormProperties>({
			failureThreshold: new FormControl<number | null | undefined>(undefined),
			initialDelaySeconds: new FormControl<number | null | undefined>(undefined),
			periodSeconds: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** GRPCAction describes an action involving a GRPC port. */
	export interface GoogleCloudRunV2GRPCAction {

		/** Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
		port?: number | null;

		/** Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC. */
		service?: string | null;
	}

	/** GRPCAction describes an action involving a GRPC port. */
	export interface GoogleCloudRunV2GRPCActionFormProperties {

		/** Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
		port: FormControl<number | null | undefined>,

		/** Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2GRPCActionFormGroup() {
		return new FormGroup<GoogleCloudRunV2GRPCActionFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HTTPGetAction describes an action based on HTTP Get requests. */
	export interface GoogleCloudRunV2HTTPGetAction {

		/** Custom headers to set in the request. HTTP allows repeated headers. */
		httpHeaders?: Array<GoogleCloudRunV2HTTPHeader>;

		/** Path to access on the HTTP server. Defaults to '/'. */
		path?: string | null;

		/** Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
		port?: number | null;
	}

	/** HTTPGetAction describes an action based on HTTP Get requests. */
	export interface GoogleCloudRunV2HTTPGetActionFormProperties {

		/** Path to access on the HTTP server. Defaults to '/'. */
		path: FormControl<string | null | undefined>,

		/** Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2HTTPGetActionFormGroup() {
		return new FormGroup<GoogleCloudRunV2HTTPGetActionFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** HTTPHeader describes a custom header to be used in HTTP probes */
	export interface GoogleCloudRunV2HTTPHeader {

		/** Required. The header field name */
		name?: string | null;

		/** The header field value */
		value?: string | null;
	}

	/** HTTPHeader describes a custom header to be used in HTTP probes */
	export interface GoogleCloudRunV2HTTPHeaderFormProperties {

		/** Required. The header field name */
		name: FormControl<string | null | undefined>,

		/** The header field value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2HTTPHeaderFormGroup() {
		return new FormGroup<GoogleCloudRunV2HTTPHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TCPSocketAction describes an action based on opening a socket */
	export interface GoogleCloudRunV2TCPSocketAction {

		/** Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
		port?: number | null;
	}

	/** TCPSocketAction describes an action based on opening a socket */
	export interface GoogleCloudRunV2TCPSocketActionFormProperties {

		/** Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2TCPSocketActionFormGroup() {
		return new FormGroup<GoogleCloudRunV2TCPSocketActionFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ContainerPort represents a network port in a single container. */
	export interface GoogleCloudRunV2ContainerPort {

		/** Port number the container listens on. This must be a valid TCP port number, 0 < container_port < 65536. */
		containerPort?: number | null;

		/** If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
		name?: string | null;
	}

	/** ContainerPort represents a network port in a single container. */
	export interface GoogleCloudRunV2ContainerPortFormProperties {

		/** Port number the container listens on. This must be a valid TCP port number, 0 < container_port < 65536. */
		containerPort: FormControl<number | null | undefined>,

		/** If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ContainerPortFormGroup() {
		return new FormGroup<GoogleCloudRunV2ContainerPortFormProperties>({
			containerPort: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceRequirements describes the compute resource requirements. */
	export interface GoogleCloudRunV2ResourceRequirements {

		/** Determines whether CPU is only allocated during requests (true by default). However, if ResourceRequirements is set, the caller must explicitly set this field to true to preserve the default behavior. */
		cpuIdle?: boolean | null;

		/** Only `memory` and `cpu` keys in the map are supported. Notes: * The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. For more information, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits */
		limits?: {[id: string]: string };

		/** Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency. */
		startupCpuBoost?: boolean | null;
	}

	/** ResourceRequirements describes the compute resource requirements. */
	export interface GoogleCloudRunV2ResourceRequirementsFormProperties {

		/** Determines whether CPU is only allocated during requests (true by default). However, if ResourceRequirements is set, the caller must explicitly set this field to true to preserve the default behavior. */
		cpuIdle: FormControl<boolean | null | undefined>,

		/** Only `memory` and `cpu` keys in the map are supported. Notes: * The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. For more information, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits */
		limits: FormControl<{[id: string]: string } | null | undefined>,

		/** Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency. */
		startupCpuBoost: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ResourceRequirementsFormGroup() {
		return new FormGroup<GoogleCloudRunV2ResourceRequirementsFormProperties>({
			cpuIdle: new FormControl<boolean | null | undefined>(undefined),
			limits: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			startupCpuBoost: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** VolumeMount describes a mounting of a Volume within a container. */
	export interface GoogleCloudRunV2VolumeMount {

		/** Required. Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be `/cloudsql`. All instances defined in the Volume will be available as `/cloudsql/[instance]`. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run */
		mountPath?: string | null;

		/** Required. This must match the Name of a Volume. */
		name?: string | null;
	}

	/** VolumeMount describes a mounting of a Volume within a container. */
	export interface GoogleCloudRunV2VolumeMountFormProperties {

		/** Required. Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be `/cloudsql`. All instances defined in the Volume will be available as `/cloudsql/[instance]`. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run */
		mountPath: FormControl<string | null | undefined>,

		/** Required. This must match the Name of a Volume. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2VolumeMountFormGroup() {
		return new FormGroup<GoogleCloudRunV2VolumeMountFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Per-container override specification. */
	export interface GoogleCloudRunV2ContainerOverride {

		/** Optional. Arguments to the entrypoint. Will replace existing args for override. */
		args?: Array<string>;

		/** Optional. True if the intention is to clear out existing args list. */
		clearArgs?: boolean | null;

		/** List of environment variables to set in the container. Will be merged with existing env for override. */
		env?: Array<GoogleCloudRunV2EnvVar>;

		/** The name of the container specified as a DNS_LABEL. */
		name?: string | null;
	}

	/** Per-container override specification. */
	export interface GoogleCloudRunV2ContainerOverrideFormProperties {

		/** Optional. True if the intention is to clear out existing args list. */
		clearArgs: FormControl<boolean | null | undefined>,

		/** The name of the container specified as a DNS_LABEL. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ContainerOverrideFormGroup() {
		return new FormGroup<GoogleCloudRunV2ContainerOverrideFormProperties>({
			clearArgs: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs). */
	export interface GoogleCloudRunV2EmptyDirVolumeSource {

		/** The medium on which the data is stored. Acceptable values today is only MEMORY or none. When none, the default will currently be backed by memory but could change over time. +optional */
		medium?: GoogleCloudRunV2EmptyDirVolumeSourceMedium | null;

		/** Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir */
		sizeLimit?: string | null;
	}

	/** In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs). */
	export interface GoogleCloudRunV2EmptyDirVolumeSourceFormProperties {

		/** The medium on which the data is stored. Acceptable values today is only MEMORY or none. When none, the default will currently be backed by memory but could change over time. +optional */
		medium: FormControl<GoogleCloudRunV2EmptyDirVolumeSourceMedium | null | undefined>,

		/** Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir */
		sizeLimit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2EmptyDirVolumeSourceFormGroup() {
		return new FormGroup<GoogleCloudRunV2EmptyDirVolumeSourceFormProperties>({
			medium: new FormControl<GoogleCloudRunV2EmptyDirVolumeSourceMedium | null | undefined>(undefined),
			sizeLimit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2EmptyDirVolumeSourceMedium { MEDIUM_UNSPECIFIED = 0, MEMORY = 1 }


	/** Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion. */
	export interface GoogleCloudRunV2Execution {

		/** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations?: {[id: string]: string };

		/** Output only. The number of tasks which reached phase Cancelled. */
		cancelledCount?: number | null;

		/** Output only. Represents time when the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. */
		completionTime?: string | null;

		/** Output only. The Condition of this Execution, containing its readiness status, and detailed error information in case it did not reach the desired state. */
		conditions?: Array<GoogleCloudRunV2Condition>;

		/** Output only. Represents time when the execution was acknowledged by the execution controller. It is not guaranteed to be set in happens-before order across separate operations. */
		createTime?: string | null;

		/** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
		deleteTime?: string | null;

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag?: string | null;

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
		expireTime?: string | null;

		/** Output only. The number of tasks which reached phase Failed. */
		failedCount?: number | null;

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation?: string | null;

		/** Output only. The name of the parent Job. */
		job?: string | null;

		/** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels */
		labels?: {[id: string]: string };

		/** The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA. */
		launchStage?: GoogleCloudRunV2ExecutionLaunchStage | null;

		/** Output only. URI where logs for this execution can be found in Cloud Console. */
		logUri?: string | null;

		/** Output only. The unique name of this Execution. */
		name?: string | null;

		/** Output only. The generation of this Execution. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration?: string | null;

		/** Output only. Specifies the maximum desired number of tasks the execution should run at any given time. Must be <= task_count. The actual number of tasks running in steady state will be less than this number when ((.spec.task_count - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. */
		parallelism?: number | null;

		/** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
		reconciling?: boolean | null;

		/** Output only. The number of tasks which have retried at least once. */
		retriedCount?: number | null;

		/** Output only. The number of actively running tasks. */
		runningCount?: number | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Output only. Represents time when the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. */
		startTime?: string | null;

		/** Output only. The number of tasks which reached phase Succeeded. */
		succeededCount?: number | null;

		/** Output only. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. */
		taskCount?: number | null;

		/** TaskTemplate describes the data a task should have when created from a template. */
		template?: GoogleCloudRunV2TaskTemplate;

		/** Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;
	}

	/** Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion. */
	export interface GoogleCloudRunV2ExecutionFormProperties {

		/** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The number of tasks which reached phase Cancelled. */
		cancelledCount: FormControl<number | null | undefined>,

		/** Output only. Represents time when the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. */
		completionTime: FormControl<string | null | undefined>,

		/** Output only. Represents time when the execution was acknowledged by the execution controller. It is not guaranteed to be set in happens-before order across separate operations. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag: FormControl<string | null | undefined>,

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The number of tasks which reached phase Failed. */
		failedCount: FormControl<number | null | undefined>,

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation: FormControl<string | null | undefined>,

		/** Output only. The name of the parent Job. */
		job: FormControl<string | null | undefined>,

		/** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA. */
		launchStage: FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>,

		/** Output only. URI where logs for this execution can be found in Cloud Console. */
		logUri: FormControl<string | null | undefined>,

		/** Output only. The unique name of this Execution. */
		name: FormControl<string | null | undefined>,

		/** Output only. The generation of this Execution. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration: FormControl<string | null | undefined>,

		/** Output only. Specifies the maximum desired number of tasks the execution should run at any given time. Must be <= task_count. The actual number of tasks running in steady state will be less than this number when ((.spec.task_count - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. */
		parallelism: FormControl<number | null | undefined>,

		/** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The number of tasks which have retried at least once. */
		retriedCount: FormControl<number | null | undefined>,

		/** Output only. The number of actively running tasks. */
		runningCount: FormControl<number | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. Represents time when the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The number of tasks which reached phase Succeeded. */
		succeededCount: FormControl<number | null | undefined>,

		/** Output only. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. */
		taskCount: FormControl<number | null | undefined>,

		/** Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ExecutionFormGroup() {
		return new FormGroup<GoogleCloudRunV2ExecutionFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			cancelledCount: new FormControl<number | null | undefined>(undefined),
			completionTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			failedCount: new FormControl<number | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			job: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			launchStage: new FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>(undefined),
			logUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<string | null | undefined>(undefined),
			parallelism: new FormControl<number | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			retriedCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			succeededCount: new FormControl<number | null | undefined>(undefined),
			taskCount: new FormControl<number | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2ExecutionLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 0, UNIMPLEMENTED = 1, PRELAUNCH = 2, EARLY_ACCESS = 3, ALPHA = 4, BETA = 5, GA = 6, DEPRECATED = 7 }


	/** TaskTemplate describes the data a task should have when created from a template. */
	export interface GoogleCloudRunV2TaskTemplate {

		/** Holds the single container that defines the unit of execution for this task. */
		containers?: Array<GoogleCloudRunV2Container>;

		/** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey?: string | null;

		/** The execution environment being used to host this Task. */
		executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironment | null;

		/** Number of retries allowed per Task, before marking this Task failed. Defaults to 3. */
		maxRetries?: number | null;

		/** Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
		serviceAccount?: string | null;

		/** Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. */
		timeout?: string | null;

		/** A list of Volumes to make available to containers. */
		volumes?: Array<GoogleCloudRunV2Volume>;

		/** VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
		vpcAccess?: GoogleCloudRunV2VpcAccess;
	}

	/** TaskTemplate describes the data a task should have when created from a template. */
	export interface GoogleCloudRunV2TaskTemplateFormProperties {

		/** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey: FormControl<string | null | undefined>,

		/** The execution environment being used to host this Task. */
		executionEnvironment: FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>,

		/** Number of retries allowed per Task, before marking this Task failed. Defaults to 3. */
		maxRetries: FormControl<number | null | undefined>,

		/** Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2TaskTemplateFormGroup() {
		return new FormGroup<GoogleCloudRunV2TaskTemplateFormProperties>({
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			executionEnvironment: new FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>(undefined),
			maxRetries: new FormControl<number | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2TaskTemplateExecutionEnvironment { EXECUTION_ENVIRONMENT_UNSPECIFIED = 0, EXECUTION_ENVIRONMENT_GEN1 = 1, EXECUTION_ENVIRONMENT_GEN2 = 2 }


	/** Volume represents a named volume in a container. */
	export interface GoogleCloudRunV2Volume {

		/** Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. */
		cloudSqlInstance?: GoogleCloudRunV2CloudSqlInstance;

		/** In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs). */
		emptyDir?: GoogleCloudRunV2EmptyDirVolumeSource;

		/** Represents a GCS Bucket mounted as a volume. */
		gcs?: GoogleCloudRunV2GCSVolumeSource;

		/** Required. Volume's name. */
		name?: string | null;

		/** Represents an NFS mount. */
		nfs?: GoogleCloudRunV2NFSVolumeSource;

		/** The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret. */
		secret?: GoogleCloudRunV2SecretVolumeSource;
	}

	/** Volume represents a named volume in a container. */
	export interface GoogleCloudRunV2VolumeFormProperties {

		/** Required. Volume's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2VolumeFormGroup() {
		return new FormGroup<GoogleCloudRunV2VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a GCS Bucket mounted as a volume. */
	export interface GoogleCloudRunV2GCSVolumeSource {

		/** GCS Bucket name */
		bucket?: string | null;

		/** If true, mount the GCS bucket as read-only */
		readOnly?: boolean | null;
	}

	/** Represents a GCS Bucket mounted as a volume. */
	export interface GoogleCloudRunV2GCSVolumeSourceFormProperties {

		/** GCS Bucket name */
		bucket: FormControl<string | null | undefined>,

		/** If true, mount the GCS bucket as read-only */
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRunV2GCSVolumeSourceFormGroup() {
		return new FormGroup<GoogleCloudRunV2GCSVolumeSourceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an NFS mount. */
	export interface GoogleCloudRunV2NFSVolumeSource {

		/** Path that is exported by the NFS server. */
		path?: string | null;

		/** If true, mount the NFS volume as read only */
		readOnly?: boolean | null;

		/** Hostname or IP address of the NFS server */
		server?: string | null;
	}

	/** Represents an NFS mount. */
	export interface GoogleCloudRunV2NFSVolumeSourceFormProperties {

		/** Path that is exported by the NFS server. */
		path: FormControl<string | null | undefined>,

		/** If true, mount the NFS volume as read only */
		readOnly: FormControl<boolean | null | undefined>,

		/** Hostname or IP address of the NFS server */
		server: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2NFSVolumeSourceFormGroup() {
		return new FormGroup<GoogleCloudRunV2NFSVolumeSourceFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret. */
	export interface GoogleCloudRunV2SecretVolumeSource {

		/** Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. This might be in conflict with other options that affect the file mode, like fsGroup, and as a result, other mode bits could be set. */
		defaultMode?: number | null;

		/** If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version. */
		items?: Array<GoogleCloudRunV2VersionToPath>;

		/** Required. The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project. */
		secret?: string | null;
	}

	/** The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret. */
	export interface GoogleCloudRunV2SecretVolumeSourceFormProperties {

		/** Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. This might be in conflict with other options that affect the file mode, like fsGroup, and as a result, other mode bits could be set. */
		defaultMode: FormControl<number | null | undefined>,

		/** Required. The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project. */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2SecretVolumeSourceFormGroup() {
		return new FormGroup<GoogleCloudRunV2SecretVolumeSourceFormProperties>({
			defaultMode: new FormControl<number | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path. */
	export interface GoogleCloudRunV2VersionToPath {

		/** Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		mode?: number | null;

		/** Required. The relative path of the secret in the container. */
		path?: string | null;

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version. */
		version?: string | null;
	}

	/** VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path. */
	export interface GoogleCloudRunV2VersionToPathFormProperties {

		/** Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		mode: FormControl<number | null | undefined>,

		/** Required. The relative path of the secret in the container. */
		path: FormControl<string | null | undefined>,

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2VersionToPathFormGroup() {
		return new FormGroup<GoogleCloudRunV2VersionToPathFormProperties>({
			mode: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
	export interface GoogleCloudRunV2VpcAccess {

		/** VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. For more information on sending traffic to a VPC network via a connector, visit https://cloud.google.com/run/docs/configuring/vpc-connectors. */
		connector?: string | null;

		/** Traffic VPC egress settings. If not provided, it defaults to PRIVATE_RANGES_ONLY. */
		egress?: GoogleCloudRunV2VpcAccessEgress | null;

		/** Direct VPC egress settings. Currently only single network interface is supported. */
		networkInterfaces?: Array<GoogleCloudRunV2NetworkInterface>;
	}

	/** VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
	export interface GoogleCloudRunV2VpcAccessFormProperties {

		/** VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. For more information on sending traffic to a VPC network via a connector, visit https://cloud.google.com/run/docs/configuring/vpc-connectors. */
		connector: FormControl<string | null | undefined>,

		/** Traffic VPC egress settings. If not provided, it defaults to PRIVATE_RANGES_ONLY. */
		egress: FormControl<GoogleCloudRunV2VpcAccessEgress | null | undefined>,
	}
	export function CreateGoogleCloudRunV2VpcAccessFormGroup() {
		return new FormGroup<GoogleCloudRunV2VpcAccessFormProperties>({
			connector: new FormControl<string | null | undefined>(undefined),
			egress: new FormControl<GoogleCloudRunV2VpcAccessEgress | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2VpcAccessEgress { VPC_EGRESS_UNSPECIFIED = 0, ALL_TRAFFIC = 1, PRIVATE_RANGES_ONLY = 2 }


	/** Direct VPC egress settings. */
	export interface GoogleCloudRunV2NetworkInterface {

		/** The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be looked up from the subnetwork. */
		network?: string | null;

		/** The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the subnetwork with the same name with the network will be used. */
		subnetwork?: string | null;

		/** Network tags applied to this Cloud Run resource. */
		tags?: Array<string>;
	}

	/** Direct VPC egress settings. */
	export interface GoogleCloudRunV2NetworkInterfaceFormProperties {

		/** The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be looked up from the subnetwork. */
		network: FormControl<string | null | undefined>,

		/** The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the subnetwork with the same name with the network will be used. */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2NetworkInterfaceFormGroup() {
		return new FormGroup<GoogleCloudRunV2NetworkInterfaceFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status. */
	export interface GoogleCloudRunV2ExecutionReference {

		/** Creation timestamp of the execution. */
		completionTime?: string | null;

		/** Creation timestamp of the execution. */
		createTime?: string | null;

		/** Name of the execution. */
		name?: string | null;
	}

	/** Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status. */
	export interface GoogleCloudRunV2ExecutionReferenceFormProperties {

		/** Creation timestamp of the execution. */
		completionTime: FormControl<string | null | undefined>,

		/** Creation timestamp of the execution. */
		createTime: FormControl<string | null | undefined>,

		/** Name of the execution. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ExecutionReferenceFormGroup() {
		return new FormGroup<GoogleCloudRunV2ExecutionReferenceFormProperties>({
			completionTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExecutionTemplate describes the data an execution should have when created from a template. */
	export interface GoogleCloudRunV2ExecutionTemplate {

		/** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations?: {[id: string]: string };

		/** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 ExecutionTemplate. */
		labels?: {[id: string]: string };

		/** Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism. */
		parallelism?: number | null;

		/** Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. */
		taskCount?: number | null;

		/** TaskTemplate describes the data a task should have when created from a template. */
		template?: GoogleCloudRunV2TaskTemplate;
	}

	/** ExecutionTemplate describes the data an execution should have when created from a template. */
	export interface GoogleCloudRunV2ExecutionTemplateFormProperties {

		/** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 ExecutionTemplate. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism. */
		parallelism: FormControl<number | null | undefined>,

		/** Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. */
		taskCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ExecutionTemplateFormGroup() {
		return new FormGroup<GoogleCloudRunV2ExecutionTemplateFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parallelism: new FormControl<number | null | undefined>(undefined),
			taskCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Job represents the configuration of a single job, which references a container image that is run to completion. */
	export interface GoogleCloudRunV2Job {

		/** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations?: {[id: string]: string };

		/** Settings for Binary Authorization feature. */
		binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

		/** Arbitrary identifier for the API client. */
		client?: string | null;

		/** Arbitrary version identifier for the API client. */
		clientVersion?: string | null;

		/** Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		conditions?: Array<GoogleCloudRunV2Condition>;

		/** Output only. The creation time. */
		createTime?: string | null;

		/** Output only. Email address of the authenticated creator. */
		creator?: string | null;

		/** Output only. The deletion time. */
		deleteTime?: string | null;

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag?: string | null;

		/** Output only. Number of executions created for this job. */
		executionCount?: number | null;

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. */
		expireTime?: string | null;

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation?: string | null;

		/** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job. */
		labels?: {[id: string]: string };

		/** Output only. Email address of the last authenticated modifier. */
		lastModifier?: string | null;

		/** Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status. */
		latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;

		/** The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
		launchStage?: GoogleCloudRunV2ExecutionLaunchStage | null;

		/** The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job} */
		name?: string | null;

		/** Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration?: string | null;

		/** Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`. */
		reconciling?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** ExecutionTemplate describes the data an execution should have when created from a template. */
		template?: GoogleCloudRunV2ExecutionTemplate;

		/** Defines a status condition for a resource. */
		terminalCondition?: GoogleCloudRunV2Condition;

		/** Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;
	}

	/** Job represents the configuration of a single job, which references a container image that is run to completion. */
	export interface GoogleCloudRunV2JobFormProperties {

		/** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Arbitrary identifier for the API client. */
		client: FormControl<string | null | undefined>,

		/** Arbitrary version identifier for the API client. */
		clientVersion: FormControl<string | null | undefined>,

		/** Output only. The creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Email address of the authenticated creator. */
		creator: FormControl<string | null | undefined>,

		/** Output only. The deletion time. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Number of executions created for this job. */
		executionCount: FormControl<number | null | undefined>,

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation: FormControl<string | null | undefined>,

		/** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Email address of the last authenticated modifier. */
		lastModifier: FormControl<string | null | undefined>,

		/** The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
		launchStage: FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>,

		/** The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job} */
		name: FormControl<string | null | undefined>,

		/** Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration: FormControl<string | null | undefined>,

		/** Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2JobFormGroup() {
		return new FormGroup<GoogleCloudRunV2JobFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			client: new FormControl<string | null | undefined>(undefined),
			clientVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			executionCount: new FormControl<number | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastModifier: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message containing a list of Executions. */
	export interface GoogleCloudRunV2ListExecutionsResponse {

		/** The resulting list of Executions. */
		executions?: Array<GoogleCloudRunV2Execution>;

		/** A token indicating there are more items than page_size. Use it in the next ListExecutions request to continue. */
		nextPageToken?: string | null;
	}

	/** Response message containing a list of Executions. */
	export interface GoogleCloudRunV2ListExecutionsResponseFormProperties {

		/** A token indicating there are more items than page_size. Use it in the next ListExecutions request to continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ListExecutionsResponseFormGroup() {
		return new FormGroup<GoogleCloudRunV2ListExecutionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message containing a list of Jobs. */
	export interface GoogleCloudRunV2ListJobsResponse {

		/** The resulting list of Jobs. */
		jobs?: Array<GoogleCloudRunV2Job>;

		/** A token indicating there are more items than page_size. Use it in the next ListJobs request to continue. */
		nextPageToken?: string | null;
	}

	/** Response message containing a list of Jobs. */
	export interface GoogleCloudRunV2ListJobsResponseFormProperties {

		/** A token indicating there are more items than page_size. Use it in the next ListJobs request to continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ListJobsResponseFormGroup() {
		return new FormGroup<GoogleCloudRunV2ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message containing a list of Revisions. */
	export interface GoogleCloudRunV2ListRevisionsResponse {

		/** A token indicating there are more items than page_size. Use it in the next ListRevisions request to continue. */
		nextPageToken?: string | null;

		/** The resulting list of Revisions. */
		revisions?: Array<GoogleCloudRunV2Revision>;
	}

	/** Response message containing a list of Revisions. */
	export interface GoogleCloudRunV2ListRevisionsResponseFormProperties {

		/** A token indicating there are more items than page_size. Use it in the next ListRevisions request to continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ListRevisionsResponseFormGroup() {
		return new FormGroup<GoogleCloudRunV2ListRevisionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service. */
	export interface GoogleCloudRunV2Revision {

		/** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations?: {[id: string]: string };

		/** Output only. The Condition of this Revision, containing its readiness status, and detailed error information in case it did not reach a serving state. */
		conditions?: Array<GoogleCloudRunV2Condition>;

		/** Holds the single container that defines the unit of execution for this Revision. */
		containers?: Array<GoogleCloudRunV2Container>;

		/** Output only. The creation time. */
		createTime?: string | null;

		/** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
		deleteTime?: string | null;

		/** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey?: string | null;

		/** The action to take if the encryption key is revoked. */
		encryptionKeyRevocationAction?: GoogleCloudRunV2RevisionEncryptionKeyRevocationAction | null;

		/** If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. */
		encryptionKeyShutdownDuration?: string | null;

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag?: string | null;

		/** The execution environment being used to host this Revision. */
		executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironment | null;

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
		expireTime?: string | null;

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation?: string | null;

		/** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. */
		labels?: {[id: string]: string };

		/** The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA. */
		launchStage?: GoogleCloudRunV2ExecutionLaunchStage | null;

		/** Output only. The Google Console URI to obtain logs for the Revision. */
		logUri?: string | null;

		/** Sets the maximum number of requests that each serving instance can receive. */
		maxInstanceRequestConcurrency?: number | null;

		/** Output only. The unique name of this Revision. */
		name?: string | null;

		/** Output only. The generation of this Revision currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration?: string | null;

		/** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Service.reconciling` for additional information on reconciliation process in Cloud Run. */
		reconciling?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Settings for revision-level scaling settings. */
		scaling?: GoogleCloudRunV2RevisionScaling;

		/** Effective settings for the current revision */
		scalingStatus?: GoogleCloudRunV2RevisionScalingStatus;

		/** Output only. The name of the parent service. */
		service?: string | null;

		/** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. */
		serviceAccount?: string | null;

		/** Enable session affinity. */
		sessionAffinity?: boolean | null;

		/** Max allowed time for an instance to respond to a request. */
		timeout?: string | null;

		/** Output only. Server assigned unique identifier for the Revision. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;

		/** A list of Volumes to make available to containers. */
		volumes?: Array<GoogleCloudRunV2Volume>;

		/** VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
		vpcAccess?: GoogleCloudRunV2VpcAccess;
	}

	/** A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service. */
	export interface GoogleCloudRunV2RevisionFormProperties {

		/** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
		deleteTime: FormControl<string | null | undefined>,

		/** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey: FormControl<string | null | undefined>,

		/** The action to take if the encryption key is revoked. */
		encryptionKeyRevocationAction: FormControl<GoogleCloudRunV2RevisionEncryptionKeyRevocationAction | null | undefined>,

		/** If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. */
		encryptionKeyShutdownDuration: FormControl<string | null | undefined>,

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag: FormControl<string | null | undefined>,

		/** The execution environment being used to host this Revision. */
		executionEnvironment: FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>,

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation: FormControl<string | null | undefined>,

		/** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA. */
		launchStage: FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>,

		/** Output only. The Google Console URI to obtain logs for the Revision. */
		logUri: FormControl<string | null | undefined>,

		/** Sets the maximum number of requests that each serving instance can receive. */
		maxInstanceRequestConcurrency: FormControl<number | null | undefined>,

		/** Output only. The unique name of this Revision. */
		name: FormControl<string | null | undefined>,

		/** Output only. The generation of this Revision currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Service.reconciling` for additional information on reconciliation process in Cloud Run. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. The name of the parent service. */
		service: FormControl<string | null | undefined>,

		/** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Enable session affinity. */
		sessionAffinity: FormControl<boolean | null | undefined>,

		/** Max allowed time for an instance to respond to a request. */
		timeout: FormControl<string | null | undefined>,

		/** Output only. Server assigned unique identifier for the Revision. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2RevisionFormGroup() {
		return new FormGroup<GoogleCloudRunV2RevisionFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			encryptionKeyRevocationAction: new FormControl<GoogleCloudRunV2RevisionEncryptionKeyRevocationAction | null | undefined>(undefined),
			encryptionKeyShutdownDuration: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			executionEnvironment: new FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			launchStage: new FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>(undefined),
			logUri: new FormControl<string | null | undefined>(undefined),
			maxInstanceRequestConcurrency: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			sessionAffinity: new FormControl<boolean | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2RevisionEncryptionKeyRevocationAction { ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED = 0, PREVENT_NEW = 1, SHUTDOWN = 2 }


	/** Settings for revision-level scaling settings. */
	export interface GoogleCloudRunV2RevisionScaling {

		/** Maximum number of serving instances that this resource should have. */
		maxInstanceCount?: number | null;

		/** Minimum number of serving instances that this resource should have. */
		minInstanceCount?: number | null;
	}

	/** Settings for revision-level scaling settings. */
	export interface GoogleCloudRunV2RevisionScalingFormProperties {

		/** Maximum number of serving instances that this resource should have. */
		maxInstanceCount: FormControl<number | null | undefined>,

		/** Minimum number of serving instances that this resource should have. */
		minInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2RevisionScalingFormGroup() {
		return new FormGroup<GoogleCloudRunV2RevisionScalingFormProperties>({
			maxInstanceCount: new FormControl<number | null | undefined>(undefined),
			minInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Effective settings for the current revision */
	export interface GoogleCloudRunV2RevisionScalingStatus {

		/** The current number of min instances provisioned for this revision. */
		desiredMinInstanceCount?: number | null;
	}

	/** Effective settings for the current revision */
	export interface GoogleCloudRunV2RevisionScalingStatusFormProperties {

		/** The current number of min instances provisioned for this revision. */
		desiredMinInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2RevisionScalingStatusFormGroup() {
		return new FormGroup<GoogleCloudRunV2RevisionScalingStatusFormProperties>({
			desiredMinInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message containing a list of Services. */
	export interface GoogleCloudRunV2ListServicesResponse {

		/** A token indicating there are more items than page_size. Use it in the next ListServices request to continue. */
		nextPageToken?: string | null;

		/** The resulting list of Services. */
		services?: Array<GoogleCloudRunV2Service>;
	}

	/** Response message containing a list of Services. */
	export interface GoogleCloudRunV2ListServicesResponseFormProperties {

		/** A token indicating there are more items than page_size. Use it in the next ListServices request to continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ListServicesResponseFormGroup() {
		return new FormGroup<GoogleCloudRunV2ListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. */
	export interface GoogleCloudRunV2Service {

		/** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations?: {[id: string]: string };

		/** Settings for Binary Authorization feature. */
		binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

		/** Arbitrary identifier for the API client. */
		client?: string | null;

		/** Arbitrary version identifier for the API client. */
		clientVersion?: string | null;

		/** Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		conditions?: Array<GoogleCloudRunV2Condition>;

		/** Output only. The creation time. */
		createTime?: string | null;

		/** Output only. Email address of the authenticated creator. */
		creator?: string | null;

		/** One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences. */
		customAudiences?: Array<string>;

		/** Output only. The deletion time. */
		deleteTime?: string | null;

		/** User-provided description of the Service. This field currently has a 512-character limit. */
		description?: string | null;

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag?: string | null;

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. */
		expireTime?: string | null;

		/** Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
		generation?: string | null;

		/** Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. */
		ingress?: GoogleCloudRunV2ServiceIngress | null;

		/** Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service. */
		labels?: {[id: string]: string };

		/** Output only. Email address of the last authenticated modifier. */
		lastModifier?: string | null;

		/** Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		latestCreatedRevision?: string | null;

		/** Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		latestReadyRevision?: string | null;

		/** The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
		launchStage?: GoogleCloudRunV2ExecutionLaunchStage | null;

		/** The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id} */
		name?: string | null;

		/** Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
		observedGeneration?: string | null;

		/** Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`. */
		reconciling?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Scaling settings applied at the service level rather than at the revision level. */
		scaling?: GoogleCloudRunV2ServiceScaling;

		/** RevisionTemplate describes the data a revision should have when created from a template. */
		template?: GoogleCloudRunV2RevisionTemplate;

		/** Defines a status condition for a resource. */
		terminalCondition?: GoogleCloudRunV2Condition;

		/** Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision. */
		traffic?: Array<GoogleCloudRunV2TrafficTarget>;

		/** Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		trafficStatuses?: Array<GoogleCloudRunV2TrafficTargetStatus>;

		/** Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;

		/** Output only. The main URI in which this Service is serving traffic. */
		uri?: string | null;
	}

	/** Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. */
	export interface GoogleCloudRunV2ServiceFormProperties {

		/** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Arbitrary identifier for the API client. */
		client: FormControl<string | null | undefined>,

		/** Arbitrary version identifier for the API client. */
		clientVersion: FormControl<string | null | undefined>,

		/** Output only. The creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Email address of the authenticated creator. */
		creator: FormControl<string | null | undefined>,

		/** Output only. The deletion time. */
		deleteTime: FormControl<string | null | undefined>,

		/** User-provided description of the Service. This field currently has a 512-character limit. */
		description: FormControl<string | null | undefined>,

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag: FormControl<string | null | undefined>,

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
		generation: FormControl<string | null | undefined>,

		/** Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. */
		ingress: FormControl<GoogleCloudRunV2ServiceIngress | null | undefined>,

		/** Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Email address of the last authenticated modifier. */
		lastModifier: FormControl<string | null | undefined>,

		/** Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		latestCreatedRevision: FormControl<string | null | undefined>,

		/** Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
		latestReadyRevision: FormControl<string | null | undefined>,

		/** The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
		launchStage: FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>,

		/** The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
		observedGeneration: FormControl<string | null | undefined>,

		/** Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The main URI in which this Service is serving traffic. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ServiceFormGroup() {
		return new FormGroup<GoogleCloudRunV2ServiceFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			client: new FormControl<string | null | undefined>(undefined),
			clientVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			ingress: new FormControl<GoogleCloudRunV2ServiceIngress | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastModifier: new FormControl<string | null | undefined>(undefined),
			latestCreatedRevision: new FormControl<string | null | undefined>(undefined),
			latestReadyRevision: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<GoogleCloudRunV2ExecutionLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2ServiceIngress { INGRESS_TRAFFIC_UNSPECIFIED = 0, INGRESS_TRAFFIC_ALL = 1, INGRESS_TRAFFIC_INTERNAL_ONLY = 2, INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER = 3 }


	/** Scaling settings applied at the service level rather than at the revision level. */
	export interface GoogleCloudRunV2ServiceScaling {

		/** total min instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving. (ALPHA) */
		minInstanceCount?: number | null;
	}

	/** Scaling settings applied at the service level rather than at the revision level. */
	export interface GoogleCloudRunV2ServiceScalingFormProperties {

		/** total min instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving. (ALPHA) */
		minInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ServiceScalingFormGroup() {
		return new FormGroup<GoogleCloudRunV2ServiceScalingFormProperties>({
			minInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** RevisionTemplate describes the data a revision should have when created from a template. */
	export interface GoogleCloudRunV2RevisionTemplate {

		/** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 RevisionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations?: {[id: string]: string };

		/** Holds the single container that defines the unit of execution for this Revision. */
		containers?: Array<GoogleCloudRunV2Container>;

		/** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey?: string | null;

		/** The sandbox environment to host this Revision. */
		executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironment | null;

		/** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 RevisionTemplate. */
		labels?: {[id: string]: string };

		/** Sets the maximum number of requests that each serving instance can receive. */
		maxInstanceRequestConcurrency?: number | null;

		/** The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name. */
		revision?: string | null;

		/** Settings for revision-level scaling settings. */
		scaling?: GoogleCloudRunV2RevisionScaling;

		/** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
		serviceAccount?: string | null;

		/** Enable session affinity. */
		sessionAffinity?: boolean | null;

		/** Max allowed time for an instance to respond to a request. */
		timeout?: string | null;

		/** A list of Volumes to make available to containers. */
		volumes?: Array<GoogleCloudRunV2Volume>;

		/** VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
		vpcAccess?: GoogleCloudRunV2VpcAccess;
	}

	/** RevisionTemplate describes the data a revision should have when created from a template. */
	export interface GoogleCloudRunV2RevisionTemplateFormProperties {

		/** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 RevisionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey: FormControl<string | null | undefined>,

		/** The sandbox environment to host this Revision. */
		executionEnvironment: FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>,

		/** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 RevisionTemplate. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Sets the maximum number of requests that each serving instance can receive. */
		maxInstanceRequestConcurrency: FormControl<number | null | undefined>,

		/** The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name. */
		revision: FormControl<string | null | undefined>,

		/** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Enable session affinity. */
		sessionAffinity: FormControl<boolean | null | undefined>,

		/** Max allowed time for an instance to respond to a request. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2RevisionTemplateFormGroup() {
		return new FormGroup<GoogleCloudRunV2RevisionTemplateFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			executionEnvironment: new FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maxInstanceRequestConcurrency: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			sessionAffinity: new FormControl<boolean | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision. */
	export interface GoogleCloudRunV2TrafficTarget {

		/** Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. */
		percent?: number | null;

		/** Revision to which to send this portion of traffic, if traffic allocation is by revision. */
		revision?: string | null;

		/** Indicates a string to be part of the URI to exclusively reference this target. */
		tag?: string | null;

		/** The allocation type for this traffic target. */
		type?: GoogleCloudRunV2TrafficTargetType | null;
	}

	/** Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision. */
	export interface GoogleCloudRunV2TrafficTargetFormProperties {

		/** Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. */
		percent: FormControl<number | null | undefined>,

		/** Revision to which to send this portion of traffic, if traffic allocation is by revision. */
		revision: FormControl<string | null | undefined>,

		/** Indicates a string to be part of the URI to exclusively reference this target. */
		tag: FormControl<string | null | undefined>,

		/** The allocation type for this traffic target. */
		type: FormControl<GoogleCloudRunV2TrafficTargetType | null | undefined>,
	}
	export function CreateGoogleCloudRunV2TrafficTargetFormGroup() {
		return new FormGroup<GoogleCloudRunV2TrafficTargetFormProperties>({
			percent: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudRunV2TrafficTargetType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRunV2TrafficTargetType { TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED = 0, TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST = 1, TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION = 2 }


	/** Represents the observed state of a single `TrafficTarget` entry. */
	export interface GoogleCloudRunV2TrafficTargetStatus {

		/** Specifies percent of the traffic to this Revision. */
		percent?: number | null;

		/** Revision to which this traffic is sent. */
		revision?: string | null;

		/** Indicates the string used in the URI to exclusively reference this target. */
		tag?: string | null;

		/** The allocation type for this traffic target. */
		type?: GoogleCloudRunV2TrafficTargetType | null;

		/** Displays the target URI. */
		uri?: string | null;
	}

	/** Represents the observed state of a single `TrafficTarget` entry. */
	export interface GoogleCloudRunV2TrafficTargetStatusFormProperties {

		/** Specifies percent of the traffic to this Revision. */
		percent: FormControl<number | null | undefined>,

		/** Revision to which this traffic is sent. */
		revision: FormControl<string | null | undefined>,

		/** Indicates the string used in the URI to exclusively reference this target. */
		tag: FormControl<string | null | undefined>,

		/** The allocation type for this traffic target. */
		type: FormControl<GoogleCloudRunV2TrafficTargetType | null | undefined>,

		/** Displays the target URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2TrafficTargetStatusFormGroup() {
		return new FormGroup<GoogleCloudRunV2TrafficTargetStatusFormProperties>({
			percent: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudRunV2TrafficTargetType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message containing a list of Tasks. */
	export interface GoogleCloudRunV2ListTasksResponse {

		/** A token indicating there are more items than page_size. Use it in the next ListTasks request to continue. */
		nextPageToken?: string | null;

		/** The resulting list of Tasks. */
		tasks?: Array<GoogleCloudRunV2Task>;
	}

	/** Response message containing a list of Tasks. */
	export interface GoogleCloudRunV2ListTasksResponseFormProperties {

		/** A token indicating there are more items than page_size. Use it in the next ListTasks request to continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2ListTasksResponseFormGroup() {
		return new FormGroup<GoogleCloudRunV2ListTasksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Task represents a single run of a container to completion. */
	export interface GoogleCloudRunV2Task {

		/** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations?: {[id: string]: string };

		/** Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations. */
		completionTime?: string | null;

		/** Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state. */
		conditions?: Array<GoogleCloudRunV2Condition>;

		/** Holds the single container that defines the unit of execution for this task. */
		containers?: Array<GoogleCloudRunV2Container>;

		/** Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations. */
		createTime?: string | null;

		/** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
		deleteTime?: string | null;

		/** Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey?: string | null;

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag?: string | null;

		/** Output only. The name of the parent Execution. */
		execution?: string | null;

		/** The execution environment being used to host this Task. */
		executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironment | null;

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
		expireTime?: string | null;

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation?: string | null;

		/** Output only. Index of the Task, unique per execution, and beginning at 0. */
		index?: number | null;

		/** Output only. The name of the parent Job. */
		job?: string | null;

		/** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels */
		labels?: {[id: string]: string };

		/** Result of a task attempt. */
		lastAttemptResult?: GoogleCloudRunV2TaskAttemptResult;

		/** Output only. URI where logs for this execution can be found in Cloud Console. */
		logUri?: string | null;

		/** Number of retries allowed per Task, before marking this Task failed. */
		maxRetries?: number | null;

		/** Output only. The unique name of this Task. */
		name?: string | null;

		/** Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration?: string | null;

		/** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
		reconciling?: boolean | null;

		/** Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit. */
		retried?: number | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations. */
		scheduledTime?: string | null;

		/** Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
		serviceAccount?: string | null;

		/** Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. */
		startTime?: string | null;

		/** Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. */
		timeout?: string | null;

		/** Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;

		/** A list of Volumes to make available to containers. */
		volumes?: Array<GoogleCloudRunV2Volume>;

		/** VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
		vpcAccess?: GoogleCloudRunV2VpcAccess;
	}

	/** Task represents a single run of a container to completion. */
	export interface GoogleCloudRunV2TaskFormProperties {

		/** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations. */
		completionTime: FormControl<string | null | undefined>,

		/** Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
		encryptionKey: FormControl<string | null | undefined>,

		/** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The name of the parent Execution. */
		execution: FormControl<string | null | undefined>,

		/** The execution environment being used to host this Task. */
		executionEnvironment: FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>,

		/** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. A number that monotonically increases every time the user modifies the desired state. */
		generation: FormControl<string | null | undefined>,

		/** Output only. Index of the Task, unique per execution, and beginning at 0. */
		index: FormControl<number | null | undefined>,

		/** Output only. The name of the parent Job. */
		job: FormControl<string | null | undefined>,

		/** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. URI where logs for this execution can be found in Cloud Console. */
		logUri: FormControl<string | null | undefined>,

		/** Number of retries allowed per Task, before marking this Task failed. */
		maxRetries: FormControl<number | null | undefined>,

		/** Output only. The unique name of this Task. */
		name: FormControl<string | null | undefined>,

		/** Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
		observedGeneration: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit. */
		retried: FormControl<number | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations. */
		scheduledTime: FormControl<string | null | undefined>,

		/** Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. */
		startTime: FormControl<string | null | undefined>,

		/** Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. */
		timeout: FormControl<string | null | undefined>,

		/** Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2TaskFormGroup() {
		return new FormGroup<GoogleCloudRunV2TaskFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			completionTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			execution: new FormControl<string | null | undefined>(undefined),
			executionEnvironment: new FormControl<GoogleCloudRunV2TaskTemplateExecutionEnvironment | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			job: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			logUri: new FormControl<string | null | undefined>(undefined),
			maxRetries: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			retried: new FormControl<number | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of a task attempt. */
	export interface GoogleCloudRunV2TaskAttemptResult {

		/** Output only. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. */
		exitCode?: number | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** Result of a task attempt. */
	export interface GoogleCloudRunV2TaskAttemptResultFormProperties {

		/** Output only. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. */
		exitCode: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRunV2TaskAttemptResultFormGroup() {
		return new FormGroup<GoogleCloudRunV2TaskAttemptResultFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** RunJob Overrides that contains Execution fields to be overridden. */
	export interface GoogleCloudRunV2Overrides {

		/** Per container override specification. */
		containerOverrides?: Array<GoogleCloudRunV2ContainerOverride>;

		/** Optional. The desired number of tasks the execution should run. Will replace existing task_count value. */
		taskCount?: number | null;

		/** Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. */
		timeout?: string | null;
	}

	/** RunJob Overrides that contains Execution fields to be overridden. */
	export interface GoogleCloudRunV2OverridesFormProperties {

		/** Optional. The desired number of tasks the execution should run. Will replace existing task_count value. */
		taskCount: FormControl<number | null | undefined>,

		/** Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV2OverridesFormGroup() {
		return new FormGroup<GoogleCloudRunV2OverridesFormProperties>({
			taskCount: new FormControl<number | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message to create a new Execution of a Job. */
	export interface GoogleCloudRunV2RunJobRequest {

		/** A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag?: string | null;

		/** RunJob Overrides that contains Execution fields to be overridden. */
		overrides?: GoogleCloudRunV2Overrides;

		/** Indicates that the request should be validated without actually deleting any resources. */
		validateOnly?: boolean | null;
	}

	/** Request message to create a new Execution of a Job. */
	export interface GoogleCloudRunV2RunJobRequestFormProperties {

		/** A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
		etag: FormControl<string | null | undefined>,

		/** Indicates that the request should be validated without actually deleting any resources. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRunV2RunJobRequestFormGroup() {
		return new FormGroup<GoogleCloudRunV2RunJobRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
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

	export enum GoogleIamV1AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


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

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
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


	/** The request message for Operations.WaitOperation. */
	export interface GoogleLongrunningWaitOperationRequest {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout?: string | null;
	}

	/** The request message for Operations.WaitOperation. */
	export interface GoogleLongrunningWaitOperationRequestFormProperties {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningWaitOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningWaitOperationRequestFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
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
		 * Deletes a Revision.
		 * Delete v2/{name}
		 * @param {string} name Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}
		 * @param {string} etag A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
		 * @param {boolean} validateOnly Indicates that the request should be validated without actually deleting any resources.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_services_revisions_delete(name: string, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Gets information about a Revision.
		 * Get v2/{name}
		 * @param {string} name Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}
		 * @return {GoogleCloudRunV2Revision} Successful response
		 */
		Run_projects_locations_services_revisions_get(name: string): Observable<GoogleCloudRunV2Revision> {
			return this.http.get<GoogleCloudRunV2Revision>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a Service.
		 * Patch v2/{name}
		 * @param {string} name The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id}
		 * @param {boolean} allowMissing If set to true, and if the Service does not exist, it will create a new one. The caller must have 'run.services.create' permissions if this is set to true and the Service does not exist.
		 * @param {boolean} validateOnly Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_services_patch(name: string, allowMissing: boolean | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudRunV2Service): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v2/{name}/operations
		 * @param {string} name Required. To query for all of the operations for a project.
		 * @param {string} filter Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.
		 * @param {number} pageSize The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .
		 * @param {string} pageToken Token identifying which result to start with, which is returned by a previous list call.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Run_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Cancels an Execution.
		 * Post v2/{name}:cancel
		 * @param {string} name Required. The name of the Execution to cancel. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_jobs_executions_cancel(name: string, requestBody: GoogleCloudRunV2CancelExecutionRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Triggers creation of a new Execution of this Job.
		 * Post v2/{name}:run
		 * @param {string} name Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_jobs_run(name: string, requestBody: GoogleCloudRunV2RunJobRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
		 * Post v2/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_operations_wait(name: string, requestBody: GoogleLongrunningWaitOperationRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':wait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Executions from a Job.
		 * Get v2/{parent}/executions
		 * @param {string} parent Required. The Execution from which the Executions should be listed. To list all Executions across Jobs, use "-" instead of Job name. Format: `projects/{project}/locations/{location}/jobs/{job}`, where `{project}` can be project id or number.
		 * @param {number} pageSize Maximum number of Executions to return in this call.
		 * @param {string} pageToken A page token received from a previous call to ListExecutions. All other parameters must match.
		 * @param {boolean} showDeleted If true, returns deleted (but unexpired) resources along with active ones.
		 * @return {GoogleCloudRunV2ListExecutionsResponse} Successful response
		 */
		Run_projects_locations_jobs_executions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleCloudRunV2ListExecutionsResponse> {
			return this.http.get<GoogleCloudRunV2ListExecutionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Lists Jobs.
		 * Get v2/{parent}/jobs
		 * @param {string} parent Required. The location and project to list resources on. Format: projects/{project}/locations/{location}, where {project} can be project id or number.
		 * @param {number} pageSize Maximum number of Jobs to return in this call.
		 * @param {string} pageToken A page token received from a previous call to ListJobs. All other parameters must match.
		 * @param {boolean} showDeleted If true, returns deleted (but unexpired) resources along with active ones.
		 * @return {GoogleCloudRunV2ListJobsResponse} Successful response
		 */
		Run_projects_locations_jobs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleCloudRunV2ListJobsResponse> {
			return this.http.get<GoogleCloudRunV2ListJobsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a Job.
		 * Post v2/{parent}/jobs
		 * @param {string} parent Required. The location and project in which this Job should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number.
		 * @param {string} jobId Required. The unique identifier for the Job. The name of the job becomes {parent}/jobs/{job_id}.
		 * @param {boolean} validateOnly Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_jobs_create(parent: string, jobId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudRunV2Job): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Revisions from a given Service, or from a given location.
		 * Get v2/{parent}/revisions
		 * @param {string} parent Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service}
		 * @param {number} pageSize Maximum number of revisions to return in this call.
		 * @param {string} pageToken A page token received from a previous call to ListRevisions. All other parameters must match.
		 * @param {boolean} showDeleted If true, returns deleted (but unexpired) resources along with active ones.
		 * @return {GoogleCloudRunV2ListRevisionsResponse} Successful response
		 */
		Run_projects_locations_services_revisions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleCloudRunV2ListRevisionsResponse> {
			return this.http.get<GoogleCloudRunV2ListRevisionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/revisions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Lists Services.
		 * Get v2/{parent}/services
		 * @param {string} parent Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number.
		 * @param {number} pageSize Maximum number of Services to return in this call.
		 * @param {string} pageToken A page token received from a previous call to ListServices. All other parameters must match.
		 * @param {boolean} showDeleted If true, returns deleted (but unexpired) resources along with active ones.
		 * @return {GoogleCloudRunV2ListServicesResponse} Successful response
		 */
		Run_projects_locations_services_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleCloudRunV2ListServicesResponse> {
			return this.http.get<GoogleCloudRunV2ListServicesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a new Service in a given project and location.
		 * Post v2/{parent}/services
		 * @param {string} parent Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.
		 * @param {string} serviceId Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service_id}.
		 * @param {boolean} validateOnly Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_services_create(parent: string, serviceId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudRunV2Service): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Tasks from an Execution of a Job.
		 * Get v2/{parent}/tasks
		 * @param {string} parent Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}
		 * @param {number} pageSize Maximum number of Tasks to return in this call.
		 * @param {string} pageToken A page token received from a previous call to ListTasks. All other parameters must match.
		 * @param {boolean} showDeleted If true, returns deleted (but unexpired) resources along with active ones.
		 * @return {GoogleCloudRunV2ListTasksResponse} Successful response
		 */
		Run_projects_locations_jobs_executions_tasks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleCloudRunV2ListTasksResponse> {
			return this.http.get<GoogleCloudRunV2ListTasksResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tasks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
		 * Get v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Run_projects_locations_services_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<GoogleIamV1Policy> {
			return this.http.get<GoogleIamV1Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Run_projects_locations_services_setIamPolicy(resource: string, requestBody: GoogleIamV1SetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1TestIamPermissionsResponse} Successful response
		 */
		Run_projects_locations_services_testIamPermissions(resource: string, requestBody: GoogleIamV1TestIamPermissionsRequest): Observable<GoogleIamV1TestIamPermissionsResponse> {
			return this.http.post<GoogleIamV1TestIamPermissionsResponse>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

