import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
	export interface ConfigMapEnvSource {

		/** Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** The ConfigMap to select from. */
		name?: string | null;

		/** (Optional) Specify whether the ConfigMap must be defined */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
	export interface ConfigMapEnvSourceFormProperties {

		/** The ConfigMap to select from. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Specify whether the ConfigMap must be defined */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigMapEnvSourceFormGroup() {
		return new FormGroup<ConfigMapEnvSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
	export interface LocalObjectReference {

		/** (Optional) Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
		name?: string | null;
	}

	/** Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
	export interface LocalObjectReferenceFormProperties {

		/** (Optional) Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocalObjectReferenceFormGroup() {
		return new FormGroup<LocalObjectReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run Selects a key from a ConfigMap. */
	export interface ConfigMapKeySelector {

		/** The key to select. */
		key?: string | null;

		/** Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** The ConfigMap to select from. */
		name?: string | null;

		/** (Optional) Specify whether the ConfigMap or its key must be defined */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run Selects a key from a ConfigMap. */
	export interface ConfigMapKeySelectorFormProperties {

		/** The key to select. */
		key: FormControl<string | null | undefined>,

		/** The ConfigMap to select from. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Specify whether the ConfigMap or its key must be defined */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigMapKeySelectorFormGroup() {
		return new FormGroup<ConfigMapKeySelectorFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. */
	export interface ConfigMapVolumeSource {

		/** (Optional) Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0644. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode?: number | null;

		/** (Optional) If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified that is not present in the Secret, the volume setup will error unless it is marked optional. */
		items?: Array<KeyToPath>;

		/** Name of the config. */
		name?: string | null;

		/** (Optional) Specify whether the Secret or its keys must be defined. */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. */
	export interface ConfigMapVolumeSourceFormProperties {

		/** (Optional) Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0644. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode: FormControl<number | null | undefined>,

		/** Name of the config. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Specify whether the Secret or its keys must be defined. */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigMapVolumeSourceFormGroup() {
		return new FormGroup<ConfigMapVolumeSourceFormProperties>({
			defaultMode: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Maps a string key to a path within a volume. */
	export interface KeyToPath {

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version. The key to project. */
		key?: string | null;

		/** (Optional) Mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		mode?: number | null;

		/** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
		path?: string | null;
	}

	/** Maps a string key to a path within a volume. */
	export interface KeyToPathFormProperties {

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version. The key to project. */
		key: FormControl<string | null | undefined>,

		/** (Optional) Mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		mode: FormControl<number | null | undefined>,

		/** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateKeyToPathFormGroup() {
		return new FormGroup<KeyToPathFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime. */
	export interface Container {

		/** (Optional) Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
		args?: Array<string>;
		command?: Array<string>;

		/** (Optional) List of environment variables to set in the container. */
		env?: Array<EnvVar>;

		/** (Optional) List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
		envFrom?: Array<EnvFromSource>;

		/** Only supports containers from Google Container Registry or Artifact Registry URL of the Container image. More info: https://kubernetes.io/docs/concepts/containers/images */
		image?: string | null;

		/** (Optional) Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
		imagePullPolicy?: string | null;

		/** Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		livenessProbe?: Probe;

		/** (Optional) Name of the container specified as a DNS_LABEL. Currently unused in Cloud Run. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names */
		name?: string | null;

		/** (Optional) List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. */
		ports?: Array<ContainerPort>;

		/** Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		readinessProbe?: Probe;

		/** ResourceRequirements describes the compute resource requirements. */
		resources?: ResourceRequirements;

		/** Not supported by Cloud Run SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence. */
		securityContext?: SecurityContext;

		/** Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		startupProbe?: Probe;

		/** (Optional) Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. */
		terminationMessagePath?: string | null;

		/** (Optional) Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
		terminationMessagePolicy?: string | null;

		/** (Optional) Volume to mount into the container's filesystem. Only supports SecretVolumeSources. Pod volumes to mount into the container's filesystem. */
		volumeMounts?: Array<VolumeMount>;

		/** (Optional) Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
		workingDir?: string | null;
	}

	/** A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime. */
	export interface ContainerFormProperties {

		/** Only supports containers from Google Container Registry or Artifact Registry URL of the Container image. More info: https://kubernetes.io/docs/concepts/containers/images */
		image: FormControl<string | null | undefined>,

		/** (Optional) Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
		imagePullPolicy: FormControl<string | null | undefined>,

		/** (Optional) Name of the container specified as a DNS_LABEL. Currently unused in Cloud Run. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names */
		name: FormControl<string | null | undefined>,

		/** (Optional) Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. */
		terminationMessagePath: FormControl<string | null | undefined>,

		/** (Optional) Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
		terminationMessagePolicy: FormControl<string | null | undefined>,

		/** (Optional) Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
		workingDir: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			imagePullPolicy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			terminationMessagePath: new FormControl<string | null | undefined>(undefined),
			terminationMessagePolicy: new FormControl<string | null | undefined>(undefined),
			workingDir: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnvVar represents an environment variable present in a Container. */
	export interface EnvVar {

		/** Name of the environment variable. Must be a C_IDENTIFIER. */
		name?: string | null;

		/** (Optional) Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
		value?: string | null;

		/** EnvVarSource represents a source for the value of an EnvVar. */
		valueFrom?: EnvVarSource;
	}

	/** EnvVar represents an environment variable present in a Container. */
	export interface EnvVarFormProperties {

		/** Name of the environment variable. Must be a C_IDENTIFIER. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvVarFormGroup() {
		return new FormGroup<EnvVarFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnvVarSource represents a source for the value of an EnvVar. */
	export interface EnvVarSource {

		/** Not supported by Cloud Run Selects a key from a ConfigMap. */
		configMapKeyRef?: ConfigMapKeySelector;

		/** SecretKeySelector selects a key of a Secret. */
		secretKeyRef?: SecretKeySelector;
	}

	/** EnvVarSource represents a source for the value of an EnvVar. */
	export interface EnvVarSourceFormProperties {
	}
	export function CreateEnvVarSourceFormGroup() {
		return new FormGroup<EnvVarSourceFormProperties>({
		});

	}


	/** SecretKeySelector selects a key of a Secret. */
	export interface SecretKeySelector {

		/** A Cloud Secret Manager secret version. Must be 'latest' for the latest version or an integer for a specific version. The key of the secret to select from. Must be a valid secret key. */
		key?: string | null;

		/** Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod's namespace to select from. */
		name?: string | null;

		/** (Optional) Specify whether the Secret or its key must be defined */
		optional?: boolean | null;
	}

	/** SecretKeySelector selects a key of a Secret. */
	export interface SecretKeySelectorFormProperties {

		/** A Cloud Secret Manager secret version. Must be 'latest' for the latest version or an integer for a specific version. The key of the secret to select from. Must be a valid secret key. */
		key: FormControl<string | null | undefined>,

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod's namespace to select from. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Specify whether the Secret or its key must be defined */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateSecretKeySelectorFormGroup() {
		return new FormGroup<SecretKeySelectorFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run EnvFromSource represents the source of a set of ConfigMaps */
	export interface EnvFromSource {

		/** Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
		configMapRef?: ConfigMapEnvSource;

		/** (Optional) An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
		prefix?: string | null;

		/** Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
		secretRef?: SecretEnvSource;
	}

	/** Not supported by Cloud Run EnvFromSource represents the source of a set of ConfigMaps */
	export interface EnvFromSourceFormProperties {

		/** (Optional) An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateEnvFromSourceFormGroup() {
		return new FormGroup<EnvFromSourceFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
	export interface SecretEnvSource {

		/** Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** The Secret to select from. */
		name?: string | null;

		/** (Optional) Specify whether the Secret must be defined */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
	export interface SecretEnvSourceFormProperties {

		/** The Secret to select from. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Specify whether the Secret must be defined */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateSecretEnvSourceFormGroup() {
		return new FormGroup<SecretEnvSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface Probe {

		/** Not supported by Cloud Run ExecAction describes a "run in container" action. */
		exec?: ExecAction;

		/** (Optional) Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
		failureThreshold?: number | null;

		/** Not supported by Cloud Run GRPCAction describes an action involving a GRPC port. */
		grpc?: GRPCAction;

		/** Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests. */
		httpGet?: HTTPGetAction;

		/** (Optional) Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
		initialDelaySeconds?: number | null;

		/** (Optional) How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
		periodSeconds?: number | null;

		/** (Optional) Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set. */
		successThreshold?: number | null;

		/** Not supported by Cloud Run TCPSocketAction describes an action based on opening a socket */
		tcpSocket?: TCPSocketAction;

		/** (Optional) Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
		timeoutSeconds?: number | null;
	}

	/** Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface ProbeFormProperties {

		/** (Optional) Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
		failureThreshold: FormControl<number | null | undefined>,

		/** (Optional) Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
		initialDelaySeconds: FormControl<number | null | undefined>,

		/** (Optional) How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
		periodSeconds: FormControl<number | null | undefined>,

		/** (Optional) Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set. */
		successThreshold: FormControl<number | null | undefined>,

		/** (Optional) Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateProbeFormGroup() {
		return new FormGroup<ProbeFormProperties>({
			failureThreshold: new FormControl<number | null | undefined>(undefined),
			initialDelaySeconds: new FormControl<number | null | undefined>(undefined),
			periodSeconds: new FormControl<number | null | undefined>(undefined),
			successThreshold: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run ExecAction describes a "run in container" action. */
	export interface ExecAction {

		/** (Optional) Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
		command?: Array<string>;
	}

	/** Not supported by Cloud Run ExecAction describes a "run in container" action. */
	export interface ExecActionFormProperties {
	}
	export function CreateExecActionFormGroup() {
		return new FormGroup<ExecActionFormProperties>({
		});

	}


	/** Not supported by Cloud Run GRPCAction describes an action involving a GRPC port. */
	export interface GRPCAction {

		/** Port number of the gRPC service. Number must be in the range 1 to 65535. */
		port?: number | null;

		/** Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. */
		service?: string | null;
	}

	/** Not supported by Cloud Run GRPCAction describes an action involving a GRPC port. */
	export interface GRPCActionFormProperties {

		/** Port number of the gRPC service. Number must be in the range 1 to 65535. */
		port: FormControl<number | null | undefined>,

		/** Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGRPCActionFormGroup() {
		return new FormGroup<GRPCActionFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests. */
	export interface HTTPGetAction {

		/** (Optional) Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
		host?: string | null;

		/** (Optional) Custom headers to set in the request. HTTP allows repeated headers. */
		httpHeaders?: Array<HTTPHeader>;

		/** (Optional) Path to access on the HTTP server. */
		path?: string | null;

		/** (Optional) Scheme to use for connecting to the host. Defaults to HTTP. */
		scheme?: string | null;
	}

	/** Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests. */
	export interface HTTPGetActionFormProperties {

		/** (Optional) Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
		host: FormControl<string | null | undefined>,

		/** (Optional) Path to access on the HTTP server. */
		path: FormControl<string | null | undefined>,

		/** (Optional) Scheme to use for connecting to the host. Defaults to HTTP. */
		scheme: FormControl<string | null | undefined>,
	}
	export function CreateHTTPGetActionFormGroup() {
		return new FormGroup<HTTPGetActionFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run HTTPHeader describes a custom header to be used in HTTP probes */
	export interface HTTPHeader {

		/** The header field name */
		name?: string | null;

		/** The header field value */
		value?: string | null;
	}

	/** Not supported by Cloud Run HTTPHeader describes a custom header to be used in HTTP probes */
	export interface HTTPHeaderFormProperties {

		/** The header field name */
		name: FormControl<string | null | undefined>,

		/** The header field value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHTTPHeaderFormGroup() {
		return new FormGroup<HTTPHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run TCPSocketAction describes an action based on opening a socket */
	export interface TCPSocketAction {

		/** (Optional) Optional: Host name to connect to, defaults to the pod IP. */
		host?: string | null;

		/** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. This field is currently limited to integer types only because of proto's inability to properly support the IntOrString golang type. */
		port?: number | null;
	}

	/** Not supported by Cloud Run TCPSocketAction describes an action based on opening a socket */
	export interface TCPSocketActionFormProperties {

		/** (Optional) Optional: Host name to connect to, defaults to the pod IP. */
		host: FormControl<string | null | undefined>,

		/** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. This field is currently limited to integer types only because of proto's inability to properly support the IntOrString golang type. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateTCPSocketActionFormGroup() {
		return new FormGroup<TCPSocketActionFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ContainerPort represents a network port in a single container. */
	export interface ContainerPort {

		/** (Optional) Port number the container listens on. This must be a valid port number, 0 < x < 65536. */
		containerPort?: number | null;

		/** (Optional) If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
		name?: string | null;

		/** (Optional) Protocol for port. Must be "TCP". Defaults to "TCP". */
		protocol?: string | null;
	}

	/** ContainerPort represents a network port in a single container. */
	export interface ContainerPortFormProperties {

		/** (Optional) Port number the container listens on. This must be a valid port number, 0 < x < 65536. */
		containerPort: FormControl<number | null | undefined>,

		/** (Optional) If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
		name: FormControl<string | null | undefined>,

		/** (Optional) Protocol for port. Must be "TCP". Defaults to "TCP". */
		protocol: FormControl<string | null | undefined>,
	}
	export function CreateContainerPortFormGroup() {
		return new FormGroup<ContainerPortFormProperties>({
			containerPort: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceRequirements describes the compute resource requirements. */
	export interface ResourceRequirements {

		/** (Optional) Only memory and CPU are supported. Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go */
		limits?: {[id: string]: string };

		/** (Optional) Only memory and CPU are supported. Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go */
		requests?: {[id: string]: string };
	}

	/** ResourceRequirements describes the compute resource requirements. */
	export interface ResourceRequirementsFormProperties {

		/** (Optional) Only memory and CPU are supported. Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go */
		limits: FormControl<{[id: string]: string } | null | undefined>,

		/** (Optional) Only memory and CPU are supported. Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go */
		requests: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceRequirementsFormGroup() {
		return new FormGroup<ResourceRequirementsFormProperties>({
			limits: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requests: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence. */
	export interface SecurityContext {

		/** (Optional) The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
		runAsUser?: number | null;
	}

	/** Not supported by Cloud Run SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence. */
	export interface SecurityContextFormProperties {

		/** (Optional) The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
		runAsUser: FormControl<number | null | undefined>,
	}
	export function CreateSecurityContextFormGroup() {
		return new FormGroup<SecurityContextFormProperties>({
			runAsUser: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** VolumeMount describes a mounting of a Volume within a container. */
	export interface VolumeMount {

		/** Path within the container at which the volume should be mounted. Must not contain ':'. */
		mountPath?: string | null;

		/** The name of the volume. There must be a corresponding Volume with the same name. */
		name?: string | null;

		/** (Optional) Only true is accepted. Defaults to true. */
		readOnly?: boolean | null;

		/** (Optional) Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
		subPath?: string | null;
	}

	/** VolumeMount describes a mounting of a Volume within a container. */
	export interface VolumeMountFormProperties {

		/** Path within the container at which the volume should be mounted. Must not contain ':'. */
		mountPath: FormControl<string | null | undefined>,

		/** The name of the volume. There must be a corresponding Volume with the same name. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Only true is accepted. Defaults to true. */
		readOnly: FormControl<boolean | null | undefined>,

		/** (Optional) Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
		subPath: FormControl<string | null | undefined>,
	}
	export function CreateVolumeMountFormGroup() {
		return new FormGroup<VolumeMountFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			subPath: new FormControl<string | null | undefined>(undefined),
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


	/** Result of an instance attempt. */
	export interface InstanceAttemptResult {

		/** Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. */
		exitCode?: number | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** Result of an instance attempt. */
	export interface InstanceAttemptResultFormProperties {

		/** Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. */
		exitCode: FormControl<number | null | undefined>,
	}
	export function CreateInstanceAttemptResultFormGroup() {
		return new FormGroup<InstanceAttemptResultFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** InstanceSpec is a description of an instance. */
	export interface InstanceSpec {

		/** Optional. Optional duration in seconds the instance may be active relative to StartTime before the system will actively try to mark it failed and kill associated containers. If set to zero, the system will never attempt to kill an instance based on time. Otherwise, value must be a positive integer. +optional */
		activeDeadlineSeconds?: string | null;

		/** Optional. List of containers belonging to the instance. We disallow a number of fields on this Container. Only a single container may be provided. */
		containers?: Array<Container>;

		/** Optional. Restart policy for all containers within the instance. Allowed values are: - OnFailure: Instances will always be restarted on failure if the backoffLimit has not been reached. - Never: Instances are never restarted and all failures are permanent. Cannot be used if backoffLimit is set. +optional */
		restartPolicy?: string | null;

		/** Optional. Email address of the IAM service account associated with the instance of a Job. The service account represents the identity of the running instance, and determines what permissions the instance has. If not provided, the instance will use the project's default service account. +optional */
		serviceAccountName?: string | null;

		/** Optional. Optional duration in seconds the instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates delete immediately. The grace period is the duration in seconds after the processes running in the instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. +optional */
		terminationGracePeriodSeconds?: string | null;

		/** Optional. List of volumes that can be mounted by containers belonging to the instance. More info: https://kubernetes.io/docs/concepts/storage/volumes +optional */
		volumes?: Array<Volume>;
	}

	/** InstanceSpec is a description of an instance. */
	export interface InstanceSpecFormProperties {

		/** Optional. Optional duration in seconds the instance may be active relative to StartTime before the system will actively try to mark it failed and kill associated containers. If set to zero, the system will never attempt to kill an instance based on time. Otherwise, value must be a positive integer. +optional */
		activeDeadlineSeconds: FormControl<string | null | undefined>,

		/** Optional. Restart policy for all containers within the instance. Allowed values are: - OnFailure: Instances will always be restarted on failure if the backoffLimit has not been reached. - Never: Instances are never restarted and all failures are permanent. Cannot be used if backoffLimit is set. +optional */
		restartPolicy: FormControl<string | null | undefined>,

		/** Optional. Email address of the IAM service account associated with the instance of a Job. The service account represents the identity of the running instance, and determines what permissions the instance has. If not provided, the instance will use the project's default service account. +optional */
		serviceAccountName: FormControl<string | null | undefined>,

		/** Optional. Optional duration in seconds the instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates delete immediately. The grace period is the duration in seconds after the processes running in the instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. +optional */
		terminationGracePeriodSeconds: FormControl<string | null | undefined>,
	}
	export function CreateInstanceSpecFormGroup() {
		return new FormGroup<InstanceSpecFormProperties>({
			activeDeadlineSeconds: new FormControl<string | null | undefined>(undefined),
			restartPolicy: new FormControl<string | null | undefined>(undefined),
			serviceAccountName: new FormControl<string | null | undefined>(undefined),
			terminationGracePeriodSeconds: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Volume represents a named volume in a container. */
	export interface Volume {

		/** Not supported by Cloud Run Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. */
		configMap?: ConfigMapVolumeSource;

		/** Volume's name. In Cloud Run Fully Managed, the name 'cloudsql' is reserved. */
		name?: string | null;

		/** The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. */
		secret?: SecretVolumeSource;
	}

	/** Volume represents a named volume in a container. */
	export interface VolumeFormProperties {

		/** Volume's name. In Cloud Run Fully Managed, the name 'cloudsql' is reserved. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. */
	export interface SecretVolumeSource {

		/** Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode?: number | null;

		/** (Optional) If unspecified, the volume will expose a file whose name is the secret_name. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a key and a path. If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified that is not present in the Secret, the volume setup will error unless it is marked optional. */
		items?: Array<KeyToPath>;

		/** (Optional) Specify whether the Secret or its keys must be defined. */
		optional?: boolean | null;

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. Name of the secret in the container's namespace to use. */
		secretName?: string | null;
	}

	/** The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. */
	export interface SecretVolumeSourceFormProperties {

		/** Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode: FormControl<number | null | undefined>,

		/** (Optional) Specify whether the Secret or its keys must be defined. */
		optional: FormControl<boolean | null | undefined>,

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. Name of the secret in the container's namespace to use. */
		secretName: FormControl<string | null | undefined>,
	}
	export function CreateSecretVolumeSourceFormGroup() {
		return new FormGroup<SecretVolumeSourceFormProperties>({
			defaultMode: new FormControl<number | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
			secretName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance represents the status of an instance of a Job. */
	export interface InstanceStatus {

		/** Optional. Represents time when the instance was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		completionTime?: string | null;

		/** Optional. The number of times this instance exited with code > 0; +optional */
		failed?: number | null;

		/** Required. Index of the instance, unique per Job, and beginning at 0. */
		index?: number | null;

		/** Result of an instance attempt. */
		lastAttemptResult?: InstanceAttemptResult;

		/** Optional. Last exit code seen for this instance. +optional */
		lastExitCode?: number | null;

		/** Optional. The number of times this instance was restarted. Instances are restarted according the restartPolicy configured in the Job template. +optional */
		restarted?: number | null;

		/** Optional. Represents time when the instance was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		startTime?: string | null;

		/** Optional. The number of times this instance exited with code == 0. +optional */
		succeeded?: number | null;
	}

	/** Instance represents the status of an instance of a Job. */
	export interface InstanceStatusFormProperties {

		/** Optional. Represents time when the instance was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		completionTime: FormControl<string | null | undefined>,

		/** Optional. The number of times this instance exited with code > 0; +optional */
		failed: FormControl<number | null | undefined>,

		/** Required. Index of the instance, unique per Job, and beginning at 0. */
		index: FormControl<number | null | undefined>,

		/** Optional. Last exit code seen for this instance. +optional */
		lastExitCode: FormControl<number | null | undefined>,

		/** Optional. The number of times this instance was restarted. Instances are restarted according the restartPolicy configured in the Job template. +optional */
		restarted: FormControl<number | null | undefined>,

		/** Optional. Represents time when the instance was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		startTime: FormControl<string | null | undefined>,

		/** Optional. The number of times this instance exited with code == 0. +optional */
		succeeded: FormControl<number | null | undefined>,
	}
	export function CreateInstanceStatusFormGroup() {
		return new FormGroup<InstanceStatusFormProperties>({
			completionTime: new FormControl<string | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			lastExitCode: new FormControl<number | null | undefined>(undefined),
			restarted: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			succeeded: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** InstanceTemplateSpec describes the data an instance should have when created from a template. */
	export interface InstanceTemplateSpec {

		/** InstanceSpec is a description of an instance. */
		spec?: InstanceSpec;
	}

	/** InstanceTemplateSpec describes the data an instance should have when created from a template. */
	export interface InstanceTemplateSpecFormProperties {
	}
	export function CreateInstanceTemplateSpecFormGroup() {
		return new FormGroup<InstanceTemplateSpecFormProperties>({
		});

	}


	/** Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion. */
	export interface Job {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional */
		apiVersion?: string | null;

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional */
		kind?: string | null;

		/** k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** JobSpec describes how the job execution will look like. */
		spec?: JobSpec;

		/** JobStatus represents the current state of a Job. */
		status?: JobStatus;
	}

	/** Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion. */
	export interface JobFormProperties {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional */
		apiVersion: FormControl<string | null | undefined>,

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
	export interface ObjectMeta {

		/** (Optional) Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
		annotations?: {[id: string]: string };

		/** (Optional) Not supported by Cloud Run The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
		clusterName?: string | null;

		/** (Optional) CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC. Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
		creationTimestamp?: string | null;

		/** (Optional) Not supported by Cloud Run Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
		deletionGracePeriodSeconds?: number | null;

		/** (Optional) Not supported by Cloud Run DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested. Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
		deletionTimestamp?: string | null;

		/** (Optional) Not supported by Cloud Run Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. +patchStrategy=merge */
		finalizers?: Array<string>;

		/** (Optional) Not supported by Cloud Run GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server. If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header). Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency string generateName = 2; */
		generateName?: string | null;

		/** (Optional) A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
		generation?: number | null;

		/** (Optional) Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: https://kubernetes.io/docs/user-guide/labels */
		labels?: {[id: string]: string };

		/** Name must be unique within a namespace, within a Cloud Run region. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/user-guide/identifiers#names +optional */
		name?: string | null;

		/** Namespace defines the space within each name must be unique, within a Cloud Run region. In Cloud Run the namespace must be equal to either the project ID or project number. */
		namespace?: string | null;

		/** (Optional) Not supported by Cloud Run List of objects that own this object. If ALL objects in the list have been deleted, this object will be garbage collected. */
		ownerReferences?: Array<OwnerReference>;

		/** Optional. An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. They may only be valid for a particular resource or set of resources. Populated by the system. Read-only. Value must be treated as opaque by clients or omitted. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
		resourceVersion?: string | null;

		/** (Optional) SelfLink is a URL representing this object. Populated by the system. Read-only. string selfLink = 4; */
		selfLink?: string | null;

		/** (Optional) UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations. Populated by the system. Read-only. More info: https://kubernetes.io/docs/user-guide/identifiers#uids */
		uid?: string | null;
	}

	/** k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
	export interface ObjectMetaFormProperties {

		/** (Optional) Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** (Optional) Not supported by Cloud Run The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
		clusterName: FormControl<string | null | undefined>,

		/** (Optional) CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC. Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
		creationTimestamp: FormControl<string | null | undefined>,

		/** (Optional) Not supported by Cloud Run Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
		deletionGracePeriodSeconds: FormControl<number | null | undefined>,

		/** (Optional) Not supported by Cloud Run DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested. Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
		deletionTimestamp: FormControl<string | null | undefined>,

		/** (Optional) Not supported by Cloud Run GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server. If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header). Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency string generateName = 2; */
		generateName: FormControl<string | null | undefined>,

		/** (Optional) A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
		generation: FormControl<number | null | undefined>,

		/** (Optional) Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: https://kubernetes.io/docs/user-guide/labels */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Name must be unique within a namespace, within a Cloud Run region. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/user-guide/identifiers#names +optional */
		name: FormControl<string | null | undefined>,

		/** Namespace defines the space within each name must be unique, within a Cloud Run region. In Cloud Run the namespace must be equal to either the project ID or project number. */
		namespace: FormControl<string | null | undefined>,

		/** Optional. An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. They may only be valid for a particular resource or set of resources. Populated by the system. Read-only. Value must be treated as opaque by clients or omitted. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
		resourceVersion: FormControl<string | null | undefined>,

		/** (Optional) SelfLink is a URL representing this object. Populated by the system. Read-only. string selfLink = 4; */
		selfLink: FormControl<string | null | undefined>,

		/** (Optional) UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations. Populated by the system. Read-only. More info: https://kubernetes.io/docs/user-guide/identifiers#uids */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateObjectMetaFormGroup() {
		return new FormGroup<ObjectMetaFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<string | null | undefined>(undefined),
			deletionGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			deletionTimestamp: new FormControl<string | null | undefined>(undefined),
			generateName: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<number | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			resourceVersion: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field. */
	export interface OwnerReference {

		/** API version of the referent. */
		apiVersion?: string | null;

		/** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional */
		blockOwnerDeletion?: boolean | null;

		/** If true, this reference points to the managing controller. +optional */
		controller?: boolean | null;

		/** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
		kind?: string | null;

		/** Name of the referent. More info: https://kubernetes.io/docs/user-guide/identifiers#names */
		name?: string | null;

		/** UID of the referent. More info: https://kubernetes.io/docs/user-guide/identifiers#uids */
		uid?: string | null;
	}

	/** OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field. */
	export interface OwnerReferenceFormProperties {

		/** API version of the referent. */
		apiVersion: FormControl<string | null | undefined>,

		/** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional */
		blockOwnerDeletion: FormControl<boolean | null | undefined>,

		/** If true, this reference points to the managing controller. +optional */
		controller: FormControl<boolean | null | undefined>,

		/** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
		kind: FormControl<string | null | undefined>,

		/** Name of the referent. More info: https://kubernetes.io/docs/user-guide/identifiers#names */
		name: FormControl<string | null | undefined>,

		/** UID of the referent. More info: https://kubernetes.io/docs/user-guide/identifiers#uids */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateOwnerReferenceFormGroup() {
		return new FormGroup<OwnerReferenceFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			blockOwnerDeletion: new FormControl<boolean | null | undefined>(undefined),
			controller: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JobSpec describes how the job execution will look like. */
	export interface JobSpec {

		/** Optional. Not supported. Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it. If set to zero, the system will never attempt to terminate the job based on time. Otherwise, the value must be positive integer. +optional */
		activeDeadlineSeconds?: string | null;

		/** Optional. Specifies the number of retries per instance, before marking this job failed. If set to zero, instances will never retry on failure. +optional */
		backoffLimit?: number | null;

		/** Optional. Specifies the desired number of successfully finished instances the job should be run with. Setting to 1 means that parallelism is limited to 1 and the success of that instance signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional */
		completions?: number | null;

		/** Optional. Specifies the maximum desired number of instances the job should run at any given time. Must be <= completions. The actual number of instances running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional */
		parallelism?: number | null;

		/** InstanceTemplateSpec describes the data an instance should have when created from a template. */
		template?: InstanceTemplateSpec;

		/** Optional. Not supported. ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is set to zero, the Job won't be automatically deleted. +optional */
		ttlSecondsAfterFinished?: number | null;
	}

	/** JobSpec describes how the job execution will look like. */
	export interface JobSpecFormProperties {

		/** Optional. Not supported. Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it. If set to zero, the system will never attempt to terminate the job based on time. Otherwise, the value must be positive integer. +optional */
		activeDeadlineSeconds: FormControl<string | null | undefined>,

		/** Optional. Specifies the number of retries per instance, before marking this job failed. If set to zero, instances will never retry on failure. +optional */
		backoffLimit: FormControl<number | null | undefined>,

		/** Optional. Specifies the desired number of successfully finished instances the job should be run with. Setting to 1 means that parallelism is limited to 1 and the success of that instance signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional */
		completions: FormControl<number | null | undefined>,

		/** Optional. Specifies the maximum desired number of instances the job should run at any given time. Must be <= completions. The actual number of instances running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional */
		parallelism: FormControl<number | null | undefined>,

		/** Optional. Not supported. ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is set to zero, the Job won't be automatically deleted. +optional */
		ttlSecondsAfterFinished: FormControl<number | null | undefined>,
	}
	export function CreateJobSpecFormGroup() {
		return new FormGroup<JobSpecFormProperties>({
			activeDeadlineSeconds: new FormControl<string | null | undefined>(undefined),
			backoffLimit: new FormControl<number | null | undefined>(undefined),
			completions: new FormControl<number | null | undefined>(undefined),
			parallelism: new FormControl<number | null | undefined>(undefined),
			ttlSecondsAfterFinished: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JobStatus represents the current state of a Job. */
	export interface JobStatus {

		/** Optional. The number of actively running instances. +optional */
		active?: number | null;

		/** Optional. Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		completionTime?: string | null;

		/** Optional. The latest available observations of a job's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional */
		conditions?: Array<JobCondition>;

		/** Optional. The number of instances which reached phase Failed. +optional */
		failed?: number | null;

		/** Optional. ImageDigest holds the resolved digest for the image specified within .Spec.Template.Spec.Container.Image. The digest is resolved during the creation of the Job. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object. */
		imageDigest?: string | null;

		/** Optional. Status of completed, failed, and running instances. +optional */
		instances?: Array<InstanceStatus>;

		/** Optional. The 'generation' of the job that was last processed by the controller. */
		observedGeneration?: number | null;

		/** Optional. Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		startTime?: string | null;

		/** Optional. The number of instances which reached phase Succeeded. +optional */
		succeeded?: number | null;
	}

	/** JobStatus represents the current state of a Job. */
	export interface JobStatusFormProperties {

		/** Optional. The number of actively running instances. +optional */
		active: FormControl<number | null | undefined>,

		/** Optional. Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		completionTime: FormControl<string | null | undefined>,

		/** Optional. The number of instances which reached phase Failed. +optional */
		failed: FormControl<number | null | undefined>,

		/** Optional. ImageDigest holds the resolved digest for the image specified within .Spec.Template.Spec.Container.Image. The digest is resolved during the creation of the Job. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object. */
		imageDigest: FormControl<string | null | undefined>,

		/** Optional. The 'generation' of the job that was last processed by the controller. */
		observedGeneration: FormControl<number | null | undefined>,

		/** Optional. Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		startTime: FormControl<string | null | undefined>,

		/** Optional. The number of instances which reached phase Succeeded. +optional */
		succeeded: FormControl<number | null | undefined>,
	}
	export function CreateJobStatusFormGroup() {
		return new FormGroup<JobStatusFormProperties>({
			active: new FormControl<number | null | undefined>(undefined),
			completionTime: new FormControl<string | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			succeeded: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JobCondition defines a readiness condition for a Revision. */
	export interface JobCondition {

		/** Optional. Last time the condition transitioned from one status to another. */
		lastTransitionTime?: string | null;

		/** Optional. Human readable message indicating details about the current status. */
		message?: string | null;

		/** Optional. One-word CamelCase reason for the condition's last transition. */
		reason?: string | null;

		/** Optional. How to interpret failures of this condition, one of Error, Warning, Info */
		severity?: string | null;

		/** Required. Status of the condition, one of True, False, Unknown. */
		status?: string | null;

		/** Required. Type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types include: * "Completed": True when the Job has successfully completed. * "Started": True when the Job has successfully started running. * "ResourcesAvailable": True when underlying resources have been provisioned. */
		type?: string | null;
	}

	/** JobCondition defines a readiness condition for a Revision. */
	export interface JobConditionFormProperties {

		/** Optional. Last time the condition transitioned from one status to another. */
		lastTransitionTime: FormControl<string | null | undefined>,

		/** Optional. Human readable message indicating details about the current status. */
		message: FormControl<string | null | undefined>,

		/** Optional. One-word CamelCase reason for the condition's last transition. */
		reason: FormControl<string | null | undefined>,

		/** Optional. How to interpret failures of this condition, one of Error, Warning, Info */
		severity: FormControl<string | null | undefined>,

		/** Required. Status of the condition, one of True, False, Unknown. */
		status: FormControl<string | null | undefined>,

		/** Required. Type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types include: * "Completed": True when the Job has successfully completed. * "Started": True when the Job has successfully started running. * "ResourcesAvailable": True when underlying resources have been provisioned. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobConditionFormGroup() {
		return new FormGroup<JobConditionFormProperties>({
			lastTransitionTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListJobsResponse is a list of Jobs resources. */
	export interface ListJobsResponse {

		/** The API version for this call such as "run.googleapis.com/v1alpha1". */
		apiVersion?: string | null;

		/** List of Jobs. */
		items?: Array<Job>;

		/** The kind of this resource, in this case "JobsList". */
		kind?: string | null;

		/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
		metadata?: ListMeta;

		/** This field is equivalent to the metadata.continue field and is provided as a convenience for compatibility with https://google.aip.dev/158. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The metadata.resourceVersion field returned when using this field will be identical to the value in the first response. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListJobsResponse is a list of Jobs resources. */
	export interface ListJobsResponseFormProperties {

		/** The API version for this call such as "run.googleapis.com/v1alpha1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "JobsList". */
		kind: FormControl<string | null | undefined>,

		/** This field is equivalent to the metadata.continue field and is provided as a convenience for compatibility with https://google.aip.dev/158. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The metadata.resourceVersion field returned when using this field will be identical to the value in the first response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
	export interface ListMeta {

		/** continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response. */
		continue?: string | null;

		/** String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional */
		resourceVersion?: string | null;

		/** SelfLink is a URL representing this object. Populated by the system. Read-only. +optional */
		selfLink?: string | null;
	}

	/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
	export interface ListMetaFormProperties {

		/** continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response. */
		continue: FormControl<string | null | undefined>,

		/** String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional */
		resourceVersion: FormControl<string | null | undefined>,

		/** SelfLink is a URL representing this object. Populated by the system. Read-only. +optional */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateListMetaFormGroup() {
		return new FormGroup<ListMetaFormProperties>({
			continue: new FormControl<string | null | undefined>(undefined),
			resourceVersion: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete a job.
		 * Delete apis/run.googleapis.com/v1alpha1/{name}
		 * @param {string} name Required. The name of the job to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
		 * @param {string} apiVersion Optional. Cloud Run currently ignores this parameter.
		 * @param {string} kind Optional. Cloud Run currently ignores this parameter.
		 * @param {string} propagationPolicy Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
		 * @return {Empty} Successful response
		 */
		Run_namespaces_jobs_delete(name: string, apiVersion: string | null | undefined, kind: string | null | undefined, propagationPolicy: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'apis/run.googleapis.com/v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), {});
		}

		/**
		 * Get information about a job.
		 * Get apis/run.googleapis.com/v1alpha1/{name}
		 * @param {string} name Required. The name of the job to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
		 * @return {Job} Successful response
		 */
		Run_namespaces_jobs_get(name: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'apis/run.googleapis.com/v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * List jobs.
		 * Get apis/run.googleapis.com/v1alpha1/{parent}/jobs
		 * @param {string} parent Required. The namespace from which the jobs should be listed. Replace {namespace_id} with the project ID or number.
		 * @param {string} _continue Optional. Optional encoded string to continue paging.
		 * @param {string} fieldSelector Optional. Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Optional. Not currently used by Cloud Run.
		 * @param {string} labelSelector Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion Optional. The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
		 * @param {boolean} watch Optional. Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
		 * @return {ListJobsResponse} Successful response
		 */
		Run_namespaces_jobs_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'apis/run.googleapis.com/v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Create a job.
		 * Post apis/run.googleapis.com/v1alpha1/{parent}/jobs
		 * @param {string} parent Required. The namespace in which the job should be created. Replace {namespace_id} with the project ID or number.
		 * @return {Job} Successful response
		 */
		Run_namespaces_jobs_create(parent: string, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'apis/run.googleapis.com/v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

